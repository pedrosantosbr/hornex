package postgresql

import "github.com/pedrosantosbr/x5/internal/postgresql/db"

type User struct {
	q *db.Queries
}

func NewUser(q *db.Queries) *User {
	return &User{q: q}
}
