/**
 * Featured Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateFeatured } from './featured.validation.js';
import {
    getAllFeaturedsService,
    getFeaturedByIdService,
    createFeaturedService
} from './featured.service.js';

export const getFeatureds = async (req, res) => {
    try {
        const items = await getAllFeaturedsService(req.query);
        return successResponse(res, items, 'Featured items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch featured items', 500, error);
    }
};

export const getFeaturedById = async (req, res) => {
    try {
        const item = await getFeaturedByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Featured not found', 404);
        return successResponse(res, item, 'Featured details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching featured detail', 500, error);
    }
};

export const createFeatured = async (req, res) => {
    try {
        const validation = validateFeatured(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const created = await createFeaturedService(req.body);
        return successResponse(res, created, 'Featured created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create featured', 500, error);
    }
};
