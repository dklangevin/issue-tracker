const pool = require('../database.js');

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

const createProject = async (project) => {
  const { name, description, users } = project;

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // create project
    const query =
      'INSERT INTO projects(name, description) VALUES ($1, $2) RETURNING id';
    const res = await client.query(query, [name, description]);

    // create invites for each invited user
    for (const userId of users) {
      const query =
        'INSERT INTO project_invites(project_id, user_id) VALUES ($1, $2)';
      await client.query(query, [res.rows[0].id, userId]);
    }

    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
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
