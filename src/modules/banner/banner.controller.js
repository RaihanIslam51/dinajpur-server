/**
 * Banner Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateBanner } from './banner.validation.js';
import {
    getAllBannersService,
    getBannerByIdService,
    createBannerService
} from './banner.service.js';

export const getBanners = async (req, res) => {
    try {
        const items = await getAllBannersService(req.query);
        return successResponse(res, items, 'Banner items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch banner items', 500, error);
    }
};

export const getBannerById = async (req, res) => {
    try {
        const item = await getBannerByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Banner not found', 404);
        return successResponse(res, item, 'Banner details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching banner detail', 500, error);
    }
};

export const createBanner = async (req, res) => {
    try {
        const validation = validateBanner(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const created = await createBannerService(req.body);
        return successResponse(res, created, 'Banner created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create banner', 500, error);
    }
};
