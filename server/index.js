const http = require('http');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
var multer = require('multer');

const routes = require('./route');

const app = express();

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static('public'));

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
  .listen(5001, () => {
    console.log('server is runing at port 5001');
  });

app.get('/', (req, res) => {
  res.send('Hello from express server.');
});
