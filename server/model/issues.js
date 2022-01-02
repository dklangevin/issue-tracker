const pool = require("../db");

// get all issues
const getAllIssues = async (req, res) => {
  try {
    const issues = await pool.query("SELECT * FROM issues_view");
    res.json(issues.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// get an issue
const getIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM issues WHERE id=$1", [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// create an issue
const createIssue = async (req, res) => {
  try {
    const { title, description, priority, category, project } = req.body;
    const newIssue = await pool.query(
      "INSERT INTO issues(title, description, priority, category, project) VALUES ($1, $2, $3, $4, $5)",
      [title, description, priority, category, project]
    );
    res.json(newIssue);
  } catch (err) {
    console.error(err.message);
  }
};

// update an issue
const updateIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, project, description } = req.body;
    const todo = await pool.query(
      "UPDATE issues SET title=$1, project=$2, description=$3 WHERE id=$4",
      [title, project, description, id]
    );
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// delete an issue
const deleteIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("DELETE FROM issues WHERE id=$1", [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAllIssues,
  getIssue,
  createIssue,
  updateIssue,
  deleteIssue,
};
