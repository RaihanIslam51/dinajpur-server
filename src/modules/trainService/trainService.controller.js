/**
 * TrainService Controller Layer
 * Dinajpur Smart City Platform
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import {
    getAllTrainServicesService,
    getTrainServiceByIdService,
    createTrainServiceService,
    updateTrainServiceService,
    deleteTrainServiceService
} from './trainService.service.js';

export const getTrainServices = async (req, res) => {
    try {
        const items = await getAllTrainServicesService(req.query);
        return successResponse(res, items, 'Train service items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch train service items', 500, error);
    }
};

export const getTrainServiceById = async (req, res) => {
    try {
        const item = await getTrainServiceByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Train service not found', 404);
        return successResponse(res, item, 'Train service detail retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching train service detail', 500, error);
    }
};

export const createTrainService = async (req, res) => {
    try {
        if (!req.body.trainName && !req.body.name) {
            return errorResponse(res, 'Train name is required', 400);
        }
        const created = await createTrainServiceService(req.body);
        return successResponse(res, created, 'Train service created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create train service', 500, error);
    }
};

export const updateTrainService = async (req, res) => {
    try {
        const updated = await updateTrainServiceService(req.params.id, req.body);
        return successResponse(res, updated, 'Train service updated successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to update train service', 500, error);
    }
};

export const deleteTrainService = async (req, res) => {
    try {
        const result = await deleteTrainServiceService(req.params.id);
        if (!result) return errorResponse(res, 'Train service not found or already deleted', 404);
        return successResponse(res, null, 'Train service deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete train service', 500, error);
    }
};
