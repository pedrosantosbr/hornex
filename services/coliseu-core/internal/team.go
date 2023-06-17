package internal

import validation "github.com/go-ozzo/ozzo-validation/v4"

type Team struct {
	ID      string `json:"id"`
	Name    string `json:"name"`
	OwnerID string `json:"ownerId"`
	GameID  uint   `json:"gameId"`
	Members []User `json:"members"`
}

// Validate ...
func (t Team) Validate() error {
	if err := validation.ValidateStruct(&t,
		validation.Field(&t.Name, validation.Required),
		validation.Field(&t.OwnerID),
	); err != nil {
		return WrapErrorf(err, ErrorCodeInvalidArgument, "invalid values")
	}

	return nil
}
