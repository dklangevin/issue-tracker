const pool = require('../database.js');

const getUsers = async () => {
  const query = 'SELECT * FROM users';
  const { rows } = await pool.query(query);
  return rows;
};

module.exports = getUsers;
