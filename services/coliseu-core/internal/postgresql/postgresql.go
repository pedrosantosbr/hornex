package postgresql

import (
	"time"

	"github.com/jackc/pgx/v5/pgtype"
)

func newTimestamp(t time.Time) pgtype.Timestamp {
	return pgtype.Timestamp{
		Time:  t,
		Valid: !t.IsZero(),
	}
}
