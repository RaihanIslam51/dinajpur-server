/**
 * Category & Subcategory Routes
 */
import { Router } from 'express';
import {
    getCategorys,
    getCategoryById,
    createCategory,
    getAllCategoryEntries,
    getCategoryEntryById,
    createCategoryEntry,
    updateCategoryEntry,
    deleteCategoryEntry
} from './category.controller.js';

const router = Router();

// Subcategory & Category Entries CRUD (Database-backed)
router.get('/entries/all', getAllCategoryEntries);
router.get('/entries/:id', getCategoryEntryById);
router.post('/entries', createCategoryEntry);
router.put('/entries/:id', updateCategoryEntry);
router.delete('/entries/:id', deleteCategoryEntry);

// Category Routes
router.get('/', getCategorys);
router.get('/:id', getCategoryById);
router.post('/', createCategory);

export default router;
