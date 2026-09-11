/**
 * Hotel Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateHotel } from './hotel.validation.js';
import {
    getAllHotelsService,
    getHotelByIdService,
    createHotelService,
    updateHotelService,
    deleteHotelService
} from './hotel.service.js';

export const getHotels = async (req, res) => {
    try {
        const items = await getAllHotelsService(req.query);
        return successResponse(res, items, 'Hotel items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch hotel items', 500, error);
    }
};

export const getHotelById = async (req, res) => {
    try {
        const item = await getHotelByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Hotel not found', 404);
        return successResponse(res, item, 'Hotel details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching hotel detail', 500, error);
    }
};

export const createHotel = async (req, res) => {
    try {
        const validation = validateHotel(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const created = await createHotelService(req.body);
        return successResponse(res, created, 'Hotel created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create hotel', 500, error);
    }
};

export const updateHotel = async (req, res) => {
    try {
        const updated = await updateHotelService(req.params.id, req.body);
        if (!updated) return errorResponse(res, 'Hotel not found', 404);
        return successResponse(res, updated, 'Hotel updated successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to update hotel', 500, error);
    }
};

export const deleteHotel = async (req, res) => {
    try {
        const deleted = await deleteHotelService(req.params.id);
        if (!deleted) return errorResponse(res, 'Hotel not found', 404);
        return successResponse(res, null, 'Hotel deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete hotel', 500, error);
    }
};
