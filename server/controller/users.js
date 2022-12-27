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

module.exports = { getUsers, getUser };
