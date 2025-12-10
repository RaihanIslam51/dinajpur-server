import express from 'express';
import categoryController from '../controllers/categoryController.js';

const router = express.Router();

// Category routes
router.post('/', categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategoryById);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

// Subcategory entries routes
router.post('/entries', categoryController.createSubcategoryEntry);
router.get('/entries/all', categoryController.getAllSubcategoryEntries);
router.get('/entries/:id', categoryController.getSubcategoryEntryById);
router.put('/entries/:id', categoryController.updateSubcategoryEntry);
router.delete('/entries/:id', categoryController.deleteSubcategoryEntry);

export default router;
