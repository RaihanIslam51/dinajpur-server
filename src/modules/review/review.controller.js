/**
 * Review Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateReview } from './review.validation.js';
import {
    getAllReviewsService,
    getReviewByIdService,
    createReviewService
} from './review.service.js';

export const getReviews = async (req, res) => {
    try {
        const items = await getAllReviewsService(req.query);
        return successResponse(res, items, 'Review items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch review items', 500, error);
    }
};

export const getReviewById = async (req, res) => {
    try {
        const item = await getReviewByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Review not found', 404);
        return successResponse(res, item, 'Review details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching review detail', 500, error);
    }
};

export const createReview = async (req, res) => {
    try {
        const validation = validateReview(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const created = await createReviewService(req.body);
        return successResponse(res, created, 'Review created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create review', 500, error);
    }
};
