const { Router } = require('express');

const {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require('../controller/projects.js');

const router = new Router();

router.get('/api/projects', getProjects);
router.get('/api/projects/:id', getProjectById);
router.post('/api/projects', createProject);
router.put('/api/projects/:id', updateProject);
router.delete('/api/projects/:id', deleteProject);

module.exports = router;
