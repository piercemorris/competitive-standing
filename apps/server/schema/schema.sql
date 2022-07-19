
CREATE TABLE players (
	id serial PRIMARY KEY,
	player_name VARCHAR (50) NOT NULL,
	created_on TIMESTAMP default current_timestamp
);

CREATE TABLE matches (
  id serial PRIMARY KEY,
  game_type VARCHAR (50) NOT NULL, /* pool, table tennis ... */
  match_type VARCHAR (50) NOT NULL, /* head-to-head ... */
  score 
  date TIMESTAMP default current_timestamp
);

CREATE TABLE player_matches (
  match_id REFERENCES matches (id) ON UPDATE CASCADE ON DELETE CASCADE,
  player_id REFERENCES players (id) ON UPDATE CASCADE,
  score number NOT NULL default 0,
  CONSTRAINT player_match_pkey PRIMARY KEY (match_id, player_id)
);

CREATE TABLE groups (
  id serial PRIMARY KEY,
  group_name VARCHAR (50) NOT NULL,
);

CREATE TABLE player_groups (
  group_id REFERENCES groups (id) ON UPDATE CASCADE ON DELETE CASCADE,
  player_id REFERENCES players (id) ON UPDATE CASCADE,
  CONSTRAINT player_group_pkey PRIMARY KEY (group_id, player_id)
);