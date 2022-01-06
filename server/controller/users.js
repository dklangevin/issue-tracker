import * as model from '../model/users.js';

export const getUsers = async (req, res) => {
  try {
    const users = await model.getUsers();
    res.json(users);
  } catch (err) {
    console.error(err.message);
  }
};
