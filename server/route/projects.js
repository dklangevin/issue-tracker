const { Router } = require('express');

const {
  getProjects,
  getProjectById,
  getProjectUsers,
  createProject,
  updateProject,
  deleteProject,
} = require('../controller/projects.js');

const router = new Router();

router.get('/', getProjects);
router.get('/:id', getProjectById);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

router.get('/:id/users', getProjectUsers);

module.exports = router;
