const http = require('http');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');

const routes = require('./route');

const app = express();

app.use(bodyParser.json());

app.use('/api', routes);
app.get('/api', (req, res) => res.send('Hello from issue-tracker backend!'));

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
