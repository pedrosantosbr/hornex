package internal

import (
	"time"

	validation "github.com/go-ozzo/ozzo-validation/v4"
)

type User struct {
	ID          string `json:"id"`
	Email       string `json:"email"`
	Password    string `json:"password"`
	FirstName   string `json:"firstName"`
	LastName    string `json:"lastName"`
	DateOfBirth string `json:"dateOfBirth"`

	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

// Validate ...
func (user User) Validate() error {
	if err := validation.ValidateStruct(&user,
		validation.Field(&user.Email, validation.Required),
		validation.Field(&user.Password, validation.Required),
		validation.Field(&user.FirstName),
		validation.Field(&user.LastName),
		validation.Field(&user.DateOfBirth),
	); err != nil {
		return WrapErrorf(err, ErrorCodeInvalidArgument, "invalid values")
	}

	return nil
}
