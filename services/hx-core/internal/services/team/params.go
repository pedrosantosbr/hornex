package services

import (
	"github.com/pedrosantosbr/x5/internal"

	validation "github.com/go-ozzo/ozzo-validation"
)

type TeamCreateParams struct {
	Name    string
	OwnerID string
	GameID  uint
}

// Validate indicates whether the fields are valid or not.
func (c TeamCreateParams) Validate() error {

	team := internal.Team{
		Name:    c.Name,
		OwnerID: c.OwnerID,
	}

	if err := validation.Validate(&team); err != nil {
		return internal.WrapErrorf(err, internal.ErrorCodeInvalidArgument, "validation.Validate")
	}

	return nil
}
