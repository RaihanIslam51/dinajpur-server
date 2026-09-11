/**
 * ElectricityOffice Controller Layer
 * Dinajpur Smart City Platform
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import {
    getAllElectricityOfficesService,
    getElectricityOfficeByIdService,
    createElectricityOfficeService,
    updateElectricityOfficeService,
    deleteElectricityOfficeService
} from './electricityOffice.service.js';

export const getElectricityOffices = async (req, res) => {
    try {
        const items = await getAllElectricityOfficesService(req.query);
        return successResponse(res, items, 'Electricity office items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch electricity office items', 500, error);
    }
};

export const getElectricityOfficeById = async (req, res) => {
    try {
        const item = await getElectricityOfficeByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Electricity office not found', 404);
        return successResponse(res, item, 'Electricity office detail retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching electricity office detail', 500, error);
    }
};

export const createElectricityOffice = async (req, res) => {
    try {
        if (!req.body.name && !req.body.title) {
            return errorResponse(res, 'Office name is required', 400);
        }
        const created = await createElectricityOfficeService(req.body);
        return successResponse(res, created, 'Electricity office created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create electricity office', 500, error);
    }
};

export const updateElectricityOffice = async (req, res) => {
    try {
        const updated = await updateElectricityOfficeService(req.params.id, req.body);
        return successResponse(res, updated, 'Electricity office updated successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to update electricity office', 500, error);
    }
};

export const deleteElectricityOffice = async (req, res) => {
    try {
        const result = await deleteElectricityOfficeService(req.params.id);
        if (!result) return errorResponse(res, 'Electricity office not found or already deleted', 404);
        return successResponse(res, null, 'Electricity office deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete electricity office', 500, error);
    }
};
