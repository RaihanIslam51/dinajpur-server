/**
 * Restaurant Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateRestaurant } from './restaurant.validation.js';
import {
    getAllRestaurantsService,
    getRestaurantByIdService,
    createRestaurantService,
    updateRestaurantService,
    deleteRestaurantService
} from './restaurant.service.js';

export const getRestaurants = async (req, res) => {
    try {
        const items = await getAllRestaurantsService(req.query);
        return successResponse(res, items, 'Restaurant items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch restaurant items', 500, error);
    }
};

export const getRestaurantById = async (req, res) => {
    try {
        const item = await getRestaurantByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Restaurant not found', 404);
        return successResponse(res, item, 'Restaurant details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching restaurant detail', 500, error);
    }
};

export const createRestaurant = async (req, res) => {
    try {
        const validation = validateRestaurant(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const created = await createRestaurantService(req.body);
        return successResponse(res, created, 'Restaurant created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create restaurant', 500, error);
    }
};

export const updateRestaurant = async (req, res) => {
    try {
        const updated = await updateRestaurantService(req.params.id, req.body);
        if (!updated) return errorResponse(res, 'Restaurant not found', 404);
        return successResponse(res, updated, 'Restaurant updated successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to update restaurant', 500, error);
    }
};

export const deleteRestaurant = async (req, res) => {
    try {
        const deleted = await deleteRestaurantService(req.params.id);
        if (!deleted) return errorResponse(res, 'Restaurant not found', 404);
        return successResponse(res, null, 'Restaurant deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete restaurant', 500, error);
    }
};
