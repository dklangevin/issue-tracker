const pool = require("../db");

// get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await pool.query("SELECT * FROM categories");
    res.json(categories.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// get a category
const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM categories WHERE id=$1", [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// get a category
const getCategoriesByProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const categories = await pool.query(
      "SELECT * FROM categories WHERE project_id=$1",
      [projectId]
    );
    res.json(categories.rows);
  } catch (err) {
    console.error(err.message);
  }
};

// create a category
const createCategory = async (req, res) => {
  try {
    const { title, description, priority, category } = req.body;
    const newCategory = await pool.query(
      "INSERT INTO categories(title, description, priority, category) VALUES ($1, $2, $3, $4)",
      [title, description, priority, category]
    );
    res.json(newCategory);
  } catch (err) {
    console.error(err.message);
  }
};

// update an project
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, project, description } = req.body;
    const todo = await pool.query(
      "UPDATE categories SET title=$1, project=$2, description=$3 WHERE id=$4",
      [title, project, description, id]
    );
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

// delete an project
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("DELETE FROM categories WHERE id=$1", [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAllCategories,
  getCategory,
  getCategoriesByProject,
  createCategory,
  updateCategory,
  deleteCategory,
};
