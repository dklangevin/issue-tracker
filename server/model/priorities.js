import pool from '../database.js';

export const getPriorities = async () => {
  const query = 'SELECT unnest(enum_range(null::priority)) as name';
  const { rows } = await pool.query(query);
  return rows;
};
