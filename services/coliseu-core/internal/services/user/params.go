package service

import (
	validation "github.com/go-ozzo/ozzo-validation"
	"github.com/pedrosantosbr/x5/internal"
)

type UserCreateParams struct {
	Email    string
	Password string
}

// Validate indicates whether the fields are valid or not.
func (u UserCreateParams) Validate() error {

	user := internal.User{
		Email:    u.Email,
		Password: u.Password,
	}

	if err := validation.Validate(&user); err != nil {

		return internal.WrapErrorf(err, internal.ErrorCodeInvalidArgument, "validation.Validate")
	}

	return nil
}
