const pool = require("../db");

// get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await pool.query("SELECT * FROM projects");
    res.json(projects.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// get an project
const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM projects WHERE id=$1", [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// create an project
const createProject = async (req, res) => {
  try {
    const { title, description, priority, category } = req.body;
    const newProject = await pool.query(
      "INSERT INTO projects(title, description, priority, category) VALUES ($1, $2, $3, $4)",
      [title, description, priority, category]
    );
    res.json(newProject);
  } catch (err) {
    console.error(err.message);
  }
};

// update an project
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, project, description } = req.body;
    const todo = await pool.query(
      "UPDATE projects SET title=$1, project=$2, description=$3 WHERE id=$4",
      [title, project, description, id]
    );
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// delete an project
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("DELETE FROM projects WHERE id=$1", [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
