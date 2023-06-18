package services

import (
	validation "github.com/go-ozzo/ozzo-validation/v4"
	"github.com/pedrosantosbr/x5/internal"
)

type UserCreateParams struct {
	Email         string
	Password      string
	TermsAccepted bool
}

// Validate indicates whether the fields are valid or not.
func (u UserCreateParams) Validate() error {
	if !u.TermsAccepted {
		return internal.WrapErrorf(validation.Errors{
			"termsAccepted": internal.NewErrorf(internal.ErrorCodeInvalidArgument, "terms must be accepted"),
		}, internal.ErrorCodeInvalidArgument, "terms must be accepted")
	}

	user := internal.User{
		Email:    u.Email,
		Password: u.Password,
	}

	if err := validation.Validate(&user); err != nil {
		return internal.WrapErrorf(err, internal.ErrorCodeInvalidArgument, "validation.Validate")
	}

	return nil
}
