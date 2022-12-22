const issuesRoutes = require('./route/issues.js');
const projectsRoutes = require('./route/projects.js');
// const categoriesRoutes = require('./route/categories.js');
// const prioritiesRoutes = require('./route/priorities.js');
const usersRoutes = require('./route/users.js');

// middlewares
// app.use(cors());
// app.use(express.json());

// routes
// app.use(issuesRoutes);
// app.use(categoriesRoutes);
// app.use(prioritiesRoutes);

const http = require('http');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(bodyParser.json());

app.use(usersRoutes);
app.use(projectsRoutes);
app.use(issuesRoutes);

http
  .createServer(
    // {
    // key: fs.readFileSync('key.pem'),
    // cert: fs.readFileSync('cert.pem'),
    // },
    app
  )
  .listen(5000, () => {
    console.log('server is runing at port 5000');
  });

app.get('/', (req, res) => {
  res.send('Hello from express server.');
});
