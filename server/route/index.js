const { Router } = require('express');
const projects = require('./projects');
const users = require('./users');
const issues = require('./issues');

const router = new Router();

router.use('/projects', projects);
router.use('/users', users);
router.use('/issues', issues);

module.exports = router;
