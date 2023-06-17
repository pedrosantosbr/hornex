CREATE TABLE users (
  id               UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email            VARCHAR NOT NULL UNIQUE,
  first_name       VARCHAR,
  last_name        VARCHAR,
  date_of_birth    DATE,
  created_at       TIMESTAMP WITHOUT TIME ZONE,
  updated_at       TIMESTAMP WITHOUT TIME ZONE
);

---- create above / drop below ----

DROP TABLE users;