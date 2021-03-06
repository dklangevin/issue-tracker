import pool from '../database.js';

export const getProjects = async (id) => {
  const query = 'SELECT * FROM projects';
  const { rows } = await pool.query(query);
  return rows;
};

export const getProjectById = async (id) => {
  const query = 'SELECT * FROM projects WHERE id=$1';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

export const createProject = async (project) => {
  const { title, description, priority, category } = project;
  const query =
    'INSERT INTO projects(title, description, priority, category) VALUES ($1, $2, $3, $4)';
  await pool.query(query, [title, description, priority, category]);
};

export const updateProject = async (id, project) => {
  const { title, description, priority, category } = project;
  const query =
    'UPDATE projects SET title=$1, project=$2, description=$3 WHERE id=$4';
  await pool.query(query, [title, description, priority, category]);
};

export const deleteProject = async (id) => {
  const query = 'DELETE FROM projects WHERE id=$1';
  await pool.query(query, [id]);
};
