import * as model from '../model/categories.js';

export const getCategories = async (req, res) => {
  try {
    const categories = await model.getCategories();
    res.json(categories);
  } catch (err) {
    console.error(err.message);
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await model.getCategoryById(id);
    res.json(category);
  } catch (err) {
    console.error(err.message);
  }
};

export const getCategoriesByProjectId = async (req, res) => {
  try {
    const { id } = req.params;
    const categories = await model.getCategoriesByProjectId(id);
    res.json(categories);
  } catch (err) {
    console.error(err.message);
  }
};

export const createCategory = async (req, res) => {
  try {
    const { category } = req.body;
    await model.createCategory(category);
  } catch (err) {
    console.error(err.message);
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { category } = req.body;
    await model.updateCategory(id, category);
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await model.deleteCategory(id);
  } catch (err) {
    console.error(err.message);
  }
};
