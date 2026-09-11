/**
 * ShoppingStore / Product Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateProduct } from './product.validation.js';
import {
    getAllProductsService,
    getProductByIdService,
    createProductService,
    updateProductService,
    deleteProductService
} from './product.service.js';

export const getProducts = async (req, res) => {
    try {
        const items = await getAllProductsService(req.query);
        return successResponse(res, items, 'Shopping stores retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch shopping stores', 500, error);
    }
};

export const getProductById = async (req, res) => {
    try {
        const item = await getProductByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Shopping store not found', 404);
        return successResponse(res, item, 'Shopping store details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching shopping store detail', 500, error);
    }
};

export const createProduct = async (req, res) => {
    try {
        const validation = validateProduct(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const created = await createProductService(req.body);
        return successResponse(res, created, 'Shopping store created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create shopping store', 500, error);
    }
};

export const updateProduct = async (req, res) => {
    try {
        const validation = validateProduct(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const updated = await updateProductService(req.params.id, req.body);
        return successResponse(res, updated, 'Shopping store updated successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to update shopping store', 500, error);
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const deleted = await deleteProductService(req.params.id);
        if (!deleted) return errorResponse(res, 'Shopping store not found or already deleted', 404);
        return successResponse(res, null, 'Shopping store deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete shopping store', 500, error);
    }
};

