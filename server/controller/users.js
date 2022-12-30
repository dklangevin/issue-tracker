const model = require('../model/users.js');

const getUsers = async (req, res) => {
  try {
    const users = await model.getUsers();
    res.json(users);
  } catch (err) {
    console.error(err.message);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await model.getUser(id);
    res.json(user);
  } catch (err) {
    console.error(err.message);
  }
};

const saveAvatar = async (req, res) => {
  const { id } = req.params;
  const { path } = req.file;
  await model.updateUserAvatar(id, path);
  res.json(path);
};

module.exports = { getUsers, getUser, saveAvatar };
