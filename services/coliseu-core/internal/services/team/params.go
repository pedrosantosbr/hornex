package services

import (
	"coliseu/internal"

	validation "github.com/go-ozzo/ozzo-validation"
)

// Body Request
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
		GameID:  c.GameID,
	}

	if err := validation.Validate(&team); err != nil {
		return internal.WrapErrorf(err, internal.ErrorCodeInvalidArgument, "validation.Validate")
	}

	return nil
}
