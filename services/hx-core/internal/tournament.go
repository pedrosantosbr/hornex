package internal

import "time"

type Phase string

const (
	// PriorityNone indicates the task needs to be prioritized.
	RegistrationPhase Phase = "registration"

	// PriorityLow indicates a non urgent task.
	ResultsTrackingPhase Phase = "tracking"
)

type Tournament struct {
	ID        string    `json:"id"`
	Code      string    `json:"code"`
	Teams     []Team    `json:"teams"`
	StartDate time.Time `json:"startDate"`
	CreatedAt time.Time `json:"createdAt"`
	PricePool uint      `json:"pricePool"`
	Phase     Phase     `json:"phase"`
}
