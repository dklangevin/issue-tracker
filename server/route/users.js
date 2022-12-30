const { Router } = require('express');
var multer = require('multer');

const {
  getUsers,
  getUser,
  uploadAvatar,
  saveAvatar,
} = require('../controller/users.js');
const cloudinaryUpload = require('../services/users/cloudinaryUpload');

const router = new Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.get('/', (req, res) => res.send('users'));
router.post('/:id/upload', cloudinaryUpload(), saveAvatar);

module.exports = router;
