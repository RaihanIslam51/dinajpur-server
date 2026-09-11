/**
 * FireService Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateFireService } from './fireService.validation.js';
import {
    getAllFireServicesService,
    getFireServiceByIdService,
    createFireServiceService
} from './fireService.service.js';

export const getFireServices = async (req, res) => {
    try {
        const items = await getAllFireServicesService(req.query);
        return successResponse(res, items, 'FireService items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch fireService items', 500, error);
    }
};

export const getFireServiceById = async (req, res) => {
    try {
        const item = await getFireServiceByIdService(req.params.id);
        if (!item) return errorResponse(res, 'FireService not found', 404);
        return successResponse(res, item, 'FireService details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching fireService detail', 500, error);
    }
};

export const createFireService = async (req, res) => {
    try {
        const validation = validateFireService(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const created = await createFireServiceService(req.body);
        return successResponse(res, created, 'FireService created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create fireService', 500, error);
    }
};
