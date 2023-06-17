package services

import (
	"coliseu/internal"
	"context"
)

type TeamRepository interface {
	Create(ctx context.Context, team *TeamCreateParams) (internal.Team, error)
}

type Team struct {
	repo TeamRepository
}

// NewTeam...
func NewTeam(repo TeamRepository) *Team {
	return &Team{
		repo: repo,
	}
}

func Create(t *Team, ctx context.Context, params *TeamCreateParams) (internal.Team, error) {
	if err := params.Validate(); err != nil {
		return internal.Team{}, err
	}

	team, err := t.repo.Create(ctx, params)
	if err != nil {
		return internal.Team{}, internal.WrapErrorf(err, internal.ErrorCodeUnknown, "repo.Create")
	}

	return team, nil
}
