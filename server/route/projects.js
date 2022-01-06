import express from 'express';

import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from '../controller/projects.js';

const router = express.Router();

router.get('/api/projects', getProjects);
router.get('/api/projects/:id', getProjectById);
router.post('/api/projects', createProject);
router.put('/api/projects/:id', updateProject);
router.delete('/api/projects/:id', deleteProject);

export default router;
