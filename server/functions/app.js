const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const issuesRoutes = require('./route/issues.js');
const projectsRoutes = require('./route/projects.js');
const usersRoutes = require('./route/users.js');

const app = express();

app.use(bodyParser.json());

app.use(usersRoutes);
app.use(projectsRoutes);
app.use(issuesRoutes);

app.use('/', (res) => res.json({ hello: 'hi' }));

module.exports.handler = serverless(app);
