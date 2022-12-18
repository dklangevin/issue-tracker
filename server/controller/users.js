const _getUsers = require('../model/users.js');

const getUsers = async (req, res) => {
  try {
    const users = await _getUsers();
    res.json(users);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = getUsers;
