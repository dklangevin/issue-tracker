const Pool = require("pg").Pool;

const {
  DB_HOST: HOST,
  DB_USER: USER,
  DB_PW: PASSWORD,
  DB_NAME: DATABASE,
  DB_PORT: PORT,
} = process.env;

// const pool = new Pool({
//   host: HOST,
//   user: USER,
//   password: PW,
//   database: DATABASE,
//   port: PORT,
// });

// module.exports = pool;

module.exports = {
  HOST,
  USER,
  PASSWORD,
  DATABASE,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
