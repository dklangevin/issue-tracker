const { Router } = require('express');
const projects = require('./projects');
const users = require('./users');
const issues = require('./issues');
const { getTeams } = require('./test');

const router = new Router();

router.use('/projects', projects);
router.use('/users', users);
router.use('/issues', issues);

router.get('/test', getTeams);

module.exports = router;
