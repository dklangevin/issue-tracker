const { Router } = require('express');
const { getUsers, getUser } = require('../controller/users.js');

const router = new Router();

router.get('/api/users', getUsers);
router.get('/api/users/:id', getUser);

module.exports = router;
