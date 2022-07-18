import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';
import { Pool, PoolConfig } from 'pg';

// TODO: differentiate between dev + prod
// TODO: add DB initialise script

const credentials: PoolConfig = { 
  host: "localhost",
  database: "postgres",
  password: "secret",
  port: 5432,
};

export const helloWorld: HttpFunction = async (req, res) => {
  const pool = new Pool(credentials);
  const players = await pool.query('SELECT * FROM players')
  await pool.end()

  res.send(players.rows);
};