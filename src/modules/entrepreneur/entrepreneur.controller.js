/**
 * Entrepreneur Controller Layer
 * Dinajpur Smart City Platform
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import {
    getAllEntrepreneursService,
    getEntrepreneurByIdService,
    createEntrepreneurService,
    updateEntrepreneurService,
    deleteEntrepreneurService
} from './entrepreneur.service.js';

export const getEntrepreneurs = async (req, res) => {
    try {
        const items = await getAllEntrepreneursService(req.query);
        return successResponse(res, items, 'Entrepreneur items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch entrepreneur items', 500, error);
    }
};

export const getEntrepreneurById = async (req, res) => {
    try {
        const item = await getEntrepreneurByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Entrepreneur not found', 404);
        return successResponse(res, item, 'Entrepreneur detail retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching entrepreneur detail', 500, error);
    }
};

export const createEntrepreneur = async (req, res) => {
    try {
        if (!req.body.name && !req.body.businessName) {
            return errorResponse(res, 'Name or business name is required', 400);
        }
        const created = await createEntrepreneurService(req.body);
        return successResponse(res, created, 'Entrepreneur created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create entrepreneur', 500, error);
    }
};

export const updateEntrepreneur = async (req, res) => {
    try {
        const updated = await updateEntrepreneurService(req.params.id, req.body);
        return successResponse(res, updated, 'Entrepreneur updated successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to update entrepreneur', 500, error);
    }
};

export const deleteEntrepreneur = async (req, res) => {
    try {
        const result = await deleteEntrepreneurService(req.params.id);
        if (!result) return errorResponse(res, 'Entrepreneur not found or already deleted', 404);
        return successResponse(res, null, 'Entrepreneur deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete entrepreneur', 500, error);
    }
};
