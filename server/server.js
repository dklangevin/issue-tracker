require('dotenv').config();

const express = require("express");
const cors = require("cors");

const issuesModel = require("./model/issues");
const projectsModel = require("./model/projects");
const categoriesModel = require("./model/categories");
const pool = require("./db");

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json()); // req.body

// ROUTES ----------------------------------------------------------------------------
// issues
app.get("/issues", issuesModel.getAllIssues);
app.get("/issues/:id", issuesModel.getIssue);
app.post("/issues", issuesModel.createIssue);
app.put("/issues/:id", issuesModel.updateIssue);
app.delete("/issues/:id", issuesModel.deleteIssue);
// projects
app.get("/projects", projectsModel.getAllProjects);
app.get("/projects/:id", projectsModel.getProject);
app.post("/projects", projectsModel.createProject);
app.put("/projects/:id", projectsModel.updateProject);
app.delete("/projects/:id", projectsModel.deleteProject);
// categories
app.get("/categories", categoriesModel.getAllCategories);
//app.get("/categories/:id", categoriesModel.getCategory);
app.get("/categories/:projectId", categoriesModel.getCategoriesByProject);
app.post("/categories", categoriesModel.createCategory);
app.put("/categories/:id", categoriesModel.updateCategory);
app.delete("/categories/:id", categoriesModel.deleteCategory);
// priorities
app.get("/priorities", async (req, res) => {
  try {
    const projects = await pool.query(
      "SELECT unnest(enum_range(null::priority)) as name"
    );
    res.json(projects.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// priorities
app.get("/users", async (req, res) => {
  try {
    const projects = await pool.query(
      "SELECT * FROM users"
    );
    res.json(projects.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("Server is started and listening on port 5000");
});
