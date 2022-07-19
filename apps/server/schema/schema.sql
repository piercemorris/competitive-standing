
CREATE TABLE player (
	id serial PRIMARY KEY,
	name VARCHAR (50) NOT NULL,
	created_on TIMESTAMP default current_timestamp
);

CREATE TABLE match (
  id serial PRIMARY KEY,
  game_type VARCHAR (50) NOT NULL,
  date TIMESTAMP default current_timestamp
);

/* TODO: Figure out how to store match data and decide */

CREATE TABLE playerMatch (
  match_id REFERENCES match (id) ON UPDATE CASCADE ON DELETE CASCADE,
  player REFERENCES player (id) ON UPDATE CASCADE,
  opponent REFERENCES player (id) ON UPDATE CASCADE
)