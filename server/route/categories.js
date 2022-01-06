import express from 'express';

import {
  getCategories,
  getCategoryById,
  getCategoriesByProjectId,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controller/categories.js';

const router = express.Router();

router.get('/api/categories', getCategories);
router.get('/api/categories/:id', getCategoryById);
router.get('/api/categories/project/:id', getCategoriesByProjectId);
router.post('/api/categories', createCategory);
router.put('/api/categories/:id', updateCategory);
router.delete('/api/categories/:id', deleteCategory);

export default router;
