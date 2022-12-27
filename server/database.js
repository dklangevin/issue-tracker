require('dotenv').config();
const fs = require('fs');

const { Pool } = require('pg');

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
  ssl: {
    rejectUnauthorized: false,
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
  },
});

module.exports = pool;
