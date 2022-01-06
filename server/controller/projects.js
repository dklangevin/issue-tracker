import * as model from '../model/projects.js';

export const getProjects = async (req, res) => {
  try {
    const projects = await model.getProjects();
    res.json(projects);
  } catch (err) {
    console.error(err.message);
  }
};

// fetch an issue
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await model.getProjectById(id);
    res.json(project);
  } catch (err) {
    console.error(err.message);
  }
};

// create an issue
export const createProject = async (req, res) => {
  try {
    const { project } = req.body;
    await model.createProject(project);
  } catch (err) {
    console.error(err.message);
  }
};

// update an issue
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { project } = req.body;
    await model.updateIssue(id, project);
  } catch (err) {
    console.error(err.message);
  }
};

// delete an issue
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await model.deleteProject(id);
  } catch (err) {
    console.error(err.message);
  }
};
