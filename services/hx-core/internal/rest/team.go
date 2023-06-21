package rest

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/pedrosantosbr/x5/internal"
	services "github.com/pedrosantosbr/x5/internal/services/team"

	"github.com/go-chi/chi/v5"
)

// const uuidRegEx string = `[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}`

//go:generate counterfeiter -generate

type TeamService interface {
	Create(ctx context.Context, params *services.TeamCreateParams) (internal.Team, error)
}

type TeamHandler struct {
	svc TeamService
}

// NewTeamHandler returns a new instance of a handler for managing team requests.
func NewTeamHandler(svc TeamService) *TeamHandler {
	return &TeamHandler{
		svc: svc,
	}
}

// Register connects the handlers to the router
func (h *TeamHandler) Register(r *chi.Mux) {
	r.Post("/api/v1/match/create", h.create)
}

// Team as my response
//
//nolint:tagliatelle
type Team struct {
	ID      string `json:"id"`
	OwnerID string `json:"ownerId"`
	GameID  uint   `json:"gameId"`
	Members []struct {
		ID string `json:"id"`
	} `json:"members"`
}

// CreateTeamRequest defines the request used for creating tasks.
type CreateTeamRequest struct {
	Name   string `json:"description"`
	GameID uint   `json:"gameId"`
}

type CreateMatchRequest struct {
	Team      Team `json:"team"`
	BetAmount uint `json:"betAmount"`
}

// CreateTasksResponse defines the response returned back after creating tasks.
type CreateTeamResponse struct {
	Team Team `json:"team"`
}

func (h *TeamHandler) create(w http.ResponseWriter, r *http.Request) {
	var req CreateTeamRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		renderErrorResponse(w, r, "invalid request",
			internal.WrapErrorf(err, internal.ErrorCodeInvalidArgument, "json decoder"))

		return
	}

	defer r.Body.Close()

	team, err := h.svc.Create(r.Context(), &services.TeamCreateParams{
		Name:   req.Name,
		GameID: req.GameID,
	})
	if err != nil {
		renderErrorResponse(w, r, "create failed", err)
		return
	}

	renderResponse(w, r,
		&CreateTeamResponse{
			Team: Team{
				ID:      team.ID,
				OwnerID: team.OwnerID,
				GameID:  team.GameID,
			},
		},
		http.StatusCreated)
}
