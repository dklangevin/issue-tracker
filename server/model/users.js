const pool = require('../database.js');

const getUsers = async () => {
  const query = 'SELECT * FROM users';
  const { rows } = await pool.query(query);
  return rows;
};

const getUser = async (id) => {
  const query = 'SELECT * FROM users WHERE id=$1';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

const updateUserAvatar = async (id, avatar) => {
  const query = 'UPDATE users SET avatar=$1 WHERE id=$2';
  const { rows } = await pool.query(query, [avatar, id]);
};

module.exports = { getUsers, getUser, updateUserAvatar };
