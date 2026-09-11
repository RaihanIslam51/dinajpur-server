/**
 * CourierService Controller Layer
 * Dinajpur Smart City Platform
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import {
    getAllCourierServicesService,
    getCourierServiceByIdService,
    createCourierServiceService,
    updateCourierServiceService,
    deleteCourierServiceService
} from './courierService.service.js';

export const getCourierServices = async (req, res) => {
    try {
        const items = await getAllCourierServicesService(req.query);
        return successResponse(res, items, 'Courier service items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch courier service items', 500, error);
    }
};

export const getCourierServiceById = async (req, res) => {
    try {
        const item = await getCourierServiceByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Courier service not found', 404);
        return successResponse(res, item, 'Courier service detail retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching courier service detail', 500, error);
    }
};

export const createCourierService = async (req, res) => {
    try {
        if (!req.body.companyName && !req.body.name) {
            return errorResponse(res, 'Company name is required', 400);
        }
        const created = await createCourierServiceService(req.body);
        return successResponse(res, created, 'Courier service created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create courier service', 500, error);
    }
};

export const updateCourierService = async (req, res) => {
    try {
        const updated = await updateCourierServiceService(req.params.id, req.body);
        return successResponse(res, updated, 'Courier service updated successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to update courier service', 500, error);
    }
};

export const deleteCourierService = async (req, res) => {
    try {
        const result = await deleteCourierServiceService(req.params.id);
        if (!result) return errorResponse(res, 'Courier service not found or already deleted', 404);
        return successResponse(res, null, 'Courier service deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete courier service', 500, error);
    }
};
