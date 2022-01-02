const Pool = require("pg").Pool;

const {
  DB_HOST: HOST,
  DB_USER: USER,
  DB_PW: PW,
  DB_NAME: DATABASE,
  DB_PORT: PORT,
} = process.env;

const pool = new Pool({
  host: HOST,
  user: USER,
  password: PW,
  database: DATABASE,
  port: PORT,
});

module.exports = pool;
