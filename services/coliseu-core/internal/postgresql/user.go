package postgresql

import (
	"context"

	"github.com/pedrosantosbr/x5/internal"
	"github.com/pedrosantosbr/x5/internal/postgresql/db"
	services "github.com/pedrosantosbr/x5/internal/services/user"
)

// User is the User Repository
type User struct {
	q *db.Queries
}

// NewUser instatiates the User Repository
func NewUser(q *db.Queries) *User {
	return &User{q: q}
}

// Create inserts a new user record
func (u *User) Create(ctx context.Context, params services.UserCreateParams) (internal.User, error) {
	// XXX: `ID` is being created on the database side
	// XXX: `CreatedAt` is being created on the database side
	// XXX: `UpdatedAt` is being created on the database side

	newID, err := u.q.InsertUser(ctx, db.InsertUserParams{
		Email: params.Email,
		Password: params.Password,
	})
	if err != nil {
		return internal.User{}, internal.WrapErrorf(err, internal.ErrorCodeUnknown, "insert user")
	}

	return internal.User{
		ID: newID.String(),
		Email: params.Email,
		Password: params.Password,
	}, nil
}