/**
 * MunicipalService Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateMunicipalService } from './municipalService.validation.js';
import {
    getAllMunicipalServicesService,
    getMunicipalServiceByIdService,
    createMunicipalServiceService,
    updateMunicipalServiceService,
    deleteMunicipalServiceService
} from './municipalService.service.js';

export const getMunicipalServices = async (req, res) => {
    try {
        const items = await getAllMunicipalServicesService(req.query);
        return successResponse(res, items, 'MunicipalService items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch municipalService items', 500, error);
    }
};

export const getMunicipalServiceById = async (req, res) => {
    try {
        const item = await getMunicipalServiceByIdService(req.params.id);
        if (!item) return errorResponse(res, 'MunicipalService not found', 404);
        return successResponse(res, item, 'MunicipalService details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching municipalService detail', 500, error);
    }
};

export const createMunicipalService = async (req, res) => {
    try {
        const validation = validateMunicipalService(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const created = await createMunicipalServiceService(req.body);
        return successResponse(res, created, 'MunicipalService created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create municipalService', 500, error);
    }
};

export const updateMunicipalService = async (req, res) => {
    try {
        const updated = await updateMunicipalServiceService(req.params.id, req.body);
        if (!updated) return errorResponse(res, 'MunicipalService not found', 404);
        return successResponse(res, updated, 'MunicipalService updated successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to update municipalService', 500, error);
    }
};

export const deleteMunicipalService = async (req, res) => {
    try {
        const deleted = await deleteMunicipalServiceService(req.params.id);
        if (!deleted) return errorResponse(res, 'MunicipalService not found', 404);
        return successResponse(res, null, 'MunicipalService deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete municipalService', 500, error);
    }
};
