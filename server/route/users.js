const { Router } = require('express');
const { getUsers, getUser } = require('../controller/users.js');

const router = new Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.get('/', (req, res) => res.send('users'));

module.exports = router;
