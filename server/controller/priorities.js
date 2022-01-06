import * as model from '../model/priorities.js';

export const getPriorities = async (req, res) => {
  try {
    const priorities = await model.getPriorities();
    res.json(priorities);
  } catch (err) {
    console.error(err.message);
  }
};
