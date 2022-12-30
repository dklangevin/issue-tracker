const pool = require('../database.js');
const crypto = require('crypto');

const getProjects = async (id) => {
  const query = 'SELECT * FROM projects';
  const { rows } = await pool.query(query);
  return rows;
};

const getProjectById = async (id) => {
  const query = 'SELECT * FROM projects WHERE id=$1';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};

const getProjectUsers = async (id) => {
  const query = `SELECT pu.id, pu.role, u.id user_id, u.first_name, u.last_name, u.email 
  FROM project_users AS pu 
  JOIN users AS u 
  ON pu.user_id = u.id 
  WHERE project_id=$1 `;
  const { rows } = await pool.query(query, [id]);
  return rows;
};

const createProject = async (body) => {
  const { name, description, users } = body;

  const client = await pool.connect();

  let project;

  try {
    await client.query('BEGIN');

    const crypto = require('crypto');

    const token = crypto.randomBytes(6).toString('base64');

    // create project
    const query =
      'INSERT INTO projects(token, name, description) VALUES ($1, $2, $3) RETURNING id, name, description';
    const res = await client.query(query, [token, name, description]);

    project = res.rows[0];

    // create invites for each invited user
    for (const userId of users) {
      const query =
        'INSERT INTO project_invites(project_id, user_id) VALUES ($1, $2)';
      await client.query(query, [project.id, userId]);
    }

    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }

  return project;
};

const updateProject = async (id, project) => {
  const { title, description, priority, category } = project;
  const query =
    'UPDATE projects SET title=$1, project=$2, description=$3 WHERE id=$4';
  await pool.query(query, [title, description, priority, category]);
};

const deleteProject = async (id) => {
  const query = 'DELETE FROM projects WHERE id=$1';
  await pool.query(query, [id]);
};

module.exports = {
  getProjects,
  getProjectById,
  getProjectUsers,
  createProject,
  updateProject,
  deleteProject,
};
