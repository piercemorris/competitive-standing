import type { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';
import { Pool } from 'pg';

const credentials = {
  user: "piercemorris",
  host: "localhost",
  database: "competitive-standing",
  port: 5432,
};

export const helloWorld: HttpFunction = async (req, res) => {
  const pool = new Pool(credentials);
  const players = await pool.query('SELECT * FROM players')
  await pool.end()

  res.send(players.rows);
};