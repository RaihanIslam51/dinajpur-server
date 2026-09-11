/**
 * Category & Subcategory Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateCategory } from './category.validation.js';
import {
    getAllCategorysService,
    getCategoryByIdService,
    createCategoryService,
    getAllCategoryEntriesService,
    getCategoryEntryByIdService,
    createCategoryEntryService,
    updateCategoryEntryService,
    deleteCategoryEntryService
} from './category.service.js';

export const getCategorys = async (req, res) => {
    try {
        const items = await getAllCategorysService(req.query);
        return successResponse(res, items, 'Category items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch category items', 500, error);
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const item = await getCategoryByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Category not found', 404);
        return successResponse(res, item, 'Category details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching category detail', 500, error);
    }
};

export const createCategory = async (req, res) => {
    try {
        const validation = validateCategory(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const created = await createCategoryService(req.body);
        return successResponse(res, created, 'Category created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create category', 500, error);
    }
};

// ==========================================
// CATEGORY ENTRIES CONTROLLERS (Subcategory Data)
// ==========================================

export const getAllCategoryEntries = async (req, res) => {
    try {
        const items = await getAllCategoryEntriesService(req.query);
        return successResponse(res, items, 'Category entries retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch category entries', 500, error);
    }
};

export const getCategoryEntryById = async (req, res) => {
    try {
        const item = await getCategoryEntryByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Category entry not found', 404);
        return successResponse(res, item, 'Category entry details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching entry detail', 500, error);
    }
};

export const createCategoryEntry = async (req, res) => {
    try {
        if (!req.body.name) {
            return errorResponse(res, 'Name field is required', 400);
        }
        const created = await createCategoryEntryService(req.body);
        return successResponse(res, created, 'Category entry created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create category entry', 500, error);
    }
};

export const updateCategoryEntry = async (req, res) => {
    try {
        const updated = await updateCategoryEntryService(req.params.id, req.body);
        if (!updated) return errorResponse(res, 'Category entry not found', 404);
        return successResponse(res, updated, 'Category entry updated successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to update category entry', 500, error);
    }
};

export const deleteCategoryEntry = async (req, res) => {
    try {
        const deleted = await deleteCategoryEntryService(req.params.id);
        if (!deleted) return errorResponse(res, 'Category entry not found or already deleted', 404);
        return successResponse(res, null, 'Category entry deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete category entry', 500, error);
    }
};
