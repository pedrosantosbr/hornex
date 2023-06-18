package postgresql

import (
	"context"

	"github.com/pedrosantosbr/x5/internal"
	"github.com/pedrosantosbr/x5/internal/postgresql/db"
	"github.com/pedrosantosbr/x5/internal/services"
)

// User is the User Repository
type User struct {
	q *db.Queries
}

// NewUser instatiates the User Repository
func NewUser(d db.DBTX) *User {
	return &User{q: db.New(d)}
}

// Create inserts a new user record
func (u *User) Create(ctx context.Context, params services.UserCreateParams) (internal.User, error) {
	// XXX: `ID` is being created on the database side
	// XXX: `CreatedAt` is being created on the database side
	// XXX: `UpdatedAt` is being created on the database side

	res, err := u.q.InsertUser(ctx, db.InsertUserParams{
		Email:    params.Email,
		Password: params.Password,
	})
	if err != nil {
		return internal.User{}, internal.WrapErrorf(err, internal.ErrorCodeUnknown, "insert user")
	}

	return internal.User{
		ID:        res.ID.String(),
		Email:     params.Email,
		Password:  params.Password,
		CreatedAt: res.CreatedAt.Time,
		UpdatedAt: res.UpdatedAt.Time,
	}, nil
}
