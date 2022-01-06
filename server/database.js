import dotenv from 'dotenv';
dotenv.config();

import pkg from 'pg';
const { Pool } = pkg;

const {
  DB_HOST: HOST,
  DB_USER: USER,
  DB_PW: PASSWORD,
  DB_NAME: DATABASE,
  DB_PORT: PORT,
} = process.env;

const pool = new Pool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  port: PORT,
});

export default pool;
