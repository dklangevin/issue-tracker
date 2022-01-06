import * as model from '../model/issues.js';

export const getIssues = async (req, res) => {
  try {
    const issues = await model.getIssues();
    res.json(issues);
  } catch (err) {
    console.error(err.message);
  }
};

export const getIssueById = async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await model.getIssueById(id);
    res.json(issue);
  } catch (err) {
    console.error(err.message);
  }
};

export const createIssue = async (req, res) => {
  try {
    const { issue } = req.body;
    console.log(issue);
    const rows = await model.createIssue(issue);
  } catch (err) {
    console.error(err.message);
  }
};

export const updateIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const { issue } = req.body;
    const rows = await model.updateIssue(id, issue);
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteIssue = async (req, res) => {
  try {
    const { id } = req.params;
    await model.deleteIssue(id);
  } catch (err) {
    console.error(err.message);
  }
};
