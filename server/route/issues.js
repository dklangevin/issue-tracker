import express from 'express';

import {
  getIssues,
  getIssueById,
  createIssue,
  updateIssue,
  deleteIssue,
} from '../controller/issues.js';

const router = express.Router();

router.get('/api/issues', getIssues);
router.get('/api/issues/:id', getIssueById);
router.post('/api/issues', createIssue);
router.put('/api/issues/:id', updateIssue);
router.delete('/api/issues/:id', deleteIssue);

export default router;
