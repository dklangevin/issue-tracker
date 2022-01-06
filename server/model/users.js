import pool from '../database.js';

export const getUsers = async () => {
  const query = 'SELECT * FROM users';
  const { rows } = await pool.query(query);
  return rows;
};
