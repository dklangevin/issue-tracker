const model = require('../model/projects.js');

const getProjects = async (req, res) => {
  try {
    const projects = await model.getProjects();
    res.json(projects);
  } catch (err) {
    console.error(err.message);
  }
};

const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await model.getProjectById(id);
    res.json(project);
  } catch (err) {
    console.error(err.message);
  }
};

const getProjectUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const projects = await model.getProjectUsers(id);
    res.json(projects);
  } catch (err) {
    console.error(err.message);
  }
};

const createProject = async (req, res) => {
  try {
    const project = req.body;
    await model.createProject(project);
  } catch (err) {
    console.error(err.message);
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { project } = req.body;
    await model.updateIssue(id, project);
  } catch (err) {
    console.error(err.message);
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await model.deleteProject(id);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getProjects,
  getProjectById,
  getProjectUsers,
  createProject,
  updateProject,
  deleteProject,
};
