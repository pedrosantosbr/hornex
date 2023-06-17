package main

import (
	"context"
	"embed"
	"errors"
	"io/fs"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/pedrosantosbr/x5/internal/envvar"

	internaldomain "github.com/pedrosantosbr/x5/internal"

	"github.com/didip/tollbooth/v6"
	"github.com/didip/tollbooth/v6/limiter"
	"github.com/riandyrn/otelchi"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/render"
	"go.uber.org/zap"
)

// go:embed static
var content embed.FS

func run(env, address string) (<-chan error, error) {
	logger, err := zap.NewProduction()
	if err != nil {
		return nil, internaldomain.WrapErrorf(err, internaldomain.ErrorCodeUnknown, "failed to create logger")
	}

	if err := envvar.Load(env); err != nil {
		return nil, internaldomain.WrapErrorf(err, internaldomain.ErrorCodeUnknown, "failed to load env")
	}

	logging := func(h http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			logger.Info(r.Method,
				zap.Time("time", time.Now()),
				zap.String("url", r.URL.String()),
			)

			h.ServeHTTP(w, r)
		})
	}

	//-

	srv, err := newServer(serverConfig{
		Address: address,
		// DB:            pool,
		// ElasticSearch: esClient,
		// Metrics:       promExporter,
		Middlewares: []func(next http.Handler) http.Handler{otelchi.Middleware("todo-api-server"), logging},
		// Redis:         rdb,
		Logger: logger,
		// Memcached:     memcached,
		// RabbitMQ:      rmq,
		// Kafka:         kafka,
	})
	if err != nil {
		return nil, internaldomain.WrapErrorf(err, internaldomain.ErrorCodeUnknown, "newServer")
	}

	errC := make(chan error, 1)

	ctx, stop := signal.NotifyContext(context.Background(),
		os.Interrupt,
		syscall.SIGTERM,
		syscall.SIGQUIT)

	go func() {
		<-ctx.Done()

		logger.Info("Shutdown signal received")

		ctxTimeout, cancel := context.WithTimeout(context.Background(), 5*time.Second)

		defer func() {
			_ = logger.Sync()

			// pool.Close()
			// rmq.Close()
			// rdb.Close()
			stop()
			cancel()
			close(errC)
		}()

		srv.SetKeepAlivesEnabled(false)

		if err := srv.Shutdown(ctxTimeout); err != nil { //nolint: contextcheck
			errC <- err
		}

		logger.Info("Shutdown completed")
	}()

	go func() {
		logger.Info("Listening and serving", zap.String("address", address))

		// "ListenAndServe always returns a non-nil error. After Shutdown or Close, the returned error is
		// ErrServerClosed."
		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			errC <- err
		}
	}()

	return errC, nil

}

type serverConfig struct {
	Address string
	// DB      *pgxpool.Pool
	// ElasticSearch *esv7.Client
	// Kafka         *internal.KafkaProducer
	// RabbitMQ    *internal.RabbitMQ
	// Redis       *rv8.Client
	// Memcached   *memcache.Client
	Metrics     http.Handler
	Middlewares []func(next http.Handler) http.Handler
	Logger      *zap.Logger
}

func newServer(conf serverConfig) (*http.Server, error) {
	router := chi.NewRouter()
	router.Use(render.SetContentType(render.ContentTypeJSON))

	for _, mw := range conf.Middlewares {
		router.Use(mw)
	}

	// -
	fsys, _ := fs.Sub(content, "static")
	router.Handle("/static/*", http.StripPrefix("/static/", http.FileServer(http.FS(fsys))))

	router.Handle("/metrics", conf.Metrics)

	// -

	lmt := tollbooth.NewLimiter(3, &limiter.ExpirableOptions{DefaultExpirationTTL: time.Second})

	lmtmw := tollbooth.LimitHandler(lmt, router)

	return &http.Server{
		Handler:           lmtmw,
		Addr:              conf.Address,
		ReadTimeout:       5 * time.Second,
		ReadHeaderTimeout: 5 * time.Second,
		WriteTimeout:      10 * time.Second,
		IdleTimeout:       15 * time.Second,
	}, nil
}
