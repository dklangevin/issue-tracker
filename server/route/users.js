const { Router } = require('express');
const getUsers = require('../controller/users.js');

const router = new Router();

router.get('/api/users', getUsers);

module.exports = router;
