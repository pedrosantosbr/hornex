package rest

import (
	"context"
	"encoding/json"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/pedrosantosbr/x5/internal"
	"github.com/pedrosantosbr/x5/internal/services"
)

type UserService interface {
	Create(ctx context.Context, params services.UserCreateParams) (internal.User, error)
}

type UserHandler struct {
	svc UserService
}

// NewUserHandler returns a new instance of a handler for managing user requests.
func NewUserHandler(svc UserService) *UserHandler {
	return &UserHandler{svc: svc}
}

// Register connects the handlers to the router
func (h *UserHandler) Register(r *chi.Mux) {
	r.Post("/api/v1/users/create", h.create)
}

type User struct {
	ID        string    `json:"id"`
	Email     string    `json:"email"`
	FirstName string    `json:"firstName"`
	LastName  string    `json:"lastName"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

// CreateUserRequest defines the request used for creating users.
type CreateUserRequest struct {
	Email         string `json:"email"`
	Password      string `json:"password"`
	TermsAccepted bool   `json:"termsAccepted"`
}

// CreateUserResponse defines the response returned by the create user endpoint.
type CreateUserResponse struct {
	User User `json:"user"`
}

func (h *UserHandler) create(w http.ResponseWriter, r *http.Request) {
	var req CreateUserRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		renderErrorResponse(w, r, "invalid request",
			internal.WrapErrorf(err, internal.ErrorCodeInvalidArgument, "json decoder"))

		return
	}

	defer r.Body.Close()

	user, err := h.svc.Create(r.Context(), services.UserCreateParams{
		Email:         req.Email,
		Password:      req.Password,
		TermsAccepted: req.TermsAccepted,
	})
	if err != nil {
		renderErrorResponse(w, r, "create failed", err)
		return
	}

	renderResponse(w, r,
		&CreateUserResponse{
			User: User{
				ID:        user.ID,
				Email:     user.Email,
				FirstName: user.FirstName,
				LastName:  user.LastName,
				CreatedAt: user.CreatedAt,
				UpdatedAt: user.UpdatedAt,
			},
		},
		http.StatusCreated)
}
