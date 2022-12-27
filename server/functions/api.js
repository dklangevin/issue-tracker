const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('../route');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/api', routes);

app.get('/', (req, res) => res.send('Hello from issue-tracker backend!'));

module.exports.handler = serverless(app);
