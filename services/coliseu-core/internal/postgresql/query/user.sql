-- name: InsertUser :one
INSERT INTO users (
  email,
  first_name,
  last_name,
  date_of_birth
)
VALUES (
  @email,
  @first_name,
  @last_name,
  @date_of_birth
)
RETURNING id;
