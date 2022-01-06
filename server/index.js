import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import issuesRoutes from './route/issues.js';
import projectsRoutes from './route/projects.js';
import categoriesRoutes from './route/categories.js';
import prioritiesRoutes from './route/priorities.js';
import usersRoutes from './route/users.js';

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use(issuesRoutes);
app.use(projectsRoutes);
app.use(categoriesRoutes);
app.use(prioritiesRoutes);
app.use(usersRoutes);

app.listen(5000, () => {
  console.log('Server is started and listening on port 5000');
});
