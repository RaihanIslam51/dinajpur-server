/**
 * Property Controller Layer
 * Dinajpur Smart City Platform
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import {
    getAllPropertiesService,
    getPropertyByIdService,
    createPropertyService,
    updatePropertyService,
    deletePropertyService
} from './property.service.js';

export const getProperties = async (req, res) => {
    try {
        const items = await getAllPropertiesService(req.query);
        return successResponse(res, items, 'Property items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch property items', 500, error);
    }
};

export const getPropertyById = async (req, res) => {
    try {
        const item = await getPropertyByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Property not found', 404);
        return successResponse(res, item, 'Property detail retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching property detail', 500, error);
    }
};

export const createProperty = async (req, res) => {
    try {
        if (!req.body.title && !req.body.name) {
            return errorResponse(res, 'Property title is required', 400);
        }
        const created = await createPropertyService(req.body);
        return successResponse(res, created, 'Property created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create property', 500, error);
    }
};

export const updateProperty = async (req, res) => {
    try {
        const updated = await updatePropertyService(req.params.id, req.body);
        return successResponse(res, updated, 'Property updated successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to update property', 500, error);
    }
};

export const deleteProperty = async (req, res) => {
    try {
        const result = await deletePropertyService(req.params.id);
        if (!result) return errorResponse(res, 'Property not found or already deleted', 404);
        return successResponse(res, null, 'Property deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete property', 500, error);
    }
};
