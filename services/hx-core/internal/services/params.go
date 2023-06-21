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
func (p UserCreateParams) Validate() error {
	user := internal.User{
		Email:    p.Email,
		Password: p.Password,
	}

	if err := validation.Validate(&user); err != nil {
		return internal.WrapErrorf(err, internal.ErrorCodeInvalidArgument, "validation.Validate")
	}

	if !p.TermsAccepted {
		return validation.Errors{
			"termsAccepted": internal.NewErrorf(internal.ErrorCodeInvalidArgument, "Terms and conditions not accepted"),
		}
	}

	return nil
}
