import pool from '../database.js';

export const getCategories = async () => {
  const query = 'SELECT * FROM categories';
  const { rows } = await pool.query(query);
  return rows;
};

export const getCategoryById = async (id) => {
  const query = 'SELECT * FROM categories WHERE id=$1';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

export const getCategoriesByProjectId = async (projectId) => {
  const query = 'SELECT * FROM categories WHERE project_id=$1';
  const { rows } = await pool.query(query, [projectId]);
  return rows;
};

export const createCategory = async (issue) => {
  const { title, description, priority, category } = issue;
  const query =
    'INSERT INTO categories(title, description, priority, category) VALUES ($1, $2, $3, $4)';
  await pool.query(query, [title, description, priority, category]);
};

export const updateCategory = async (id, category) => {
  const { title, project, description } = category;
  const query =
    'UPDATE categories SET title=$1, project=$2, description=$3 WHERE id=$4';
  await pool.query(query, [title, project, description, id]);
};

export const deleteCategory = async () => {
  const query = 'DELETE FROM categories WHERE id=$1';
  await pool.query(query, [id]);
};
