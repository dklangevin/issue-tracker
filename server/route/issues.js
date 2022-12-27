const { Router } = require('express');

const {
  getIssues,
  // getIssueById,
  // createIssue,
  // updateIssue,
  // deleteIssue,
} = require('../controller/issues.js');

const router = new Router();

router.get('/', getIssues);
// router.get('/api/issues/:id', getIssueById);
// router.post('/api/issues', createIssue);
// router.put('/api/issues/:id', updateIssue);
// router.delete('/api/issues/:id', deleteIssue);

module.exports = router;
