/**
 * TouristPlace (দর্শনীয় স্থান) Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateTouristPlace } from './touristPlace.validation.js';
import {
    getAllTouristPlacesService,
    getTouristPlaceByIdService,
    createTouristPlaceService,
    updateTouristPlaceService,
    deleteTouristPlaceService
} from './touristPlace.service.js';

export const getTouristPlaces = async (req, res) => {
    try {
        const items = await getAllTouristPlacesService(req.query);
        return successResponse(res, items, 'দর্শনীয় স্থানসমূহ সফলভাবে লোড হয়েছে', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'দর্শনীয় স্থানসমূহ লোড করতে ব্যর্থ', 500, error);
    }
};

export const getTouristPlaceById = async (req, res) => {
    try {
        const item = await getTouristPlaceByIdService(req.params.id);
        if (!item) return errorResponse(res, 'দর্শনীয় স্থানটি পাওয়া যায়নি', 404);
        return successResponse(res, item, 'দর্শনীয় স্থানের বিস্তারিত তথ্য');
    } catch (error) {
        return errorResponse(res, 'দর্শনীয় স্থান তথ্য আনতে সমস্যা হয়েছে', 500, error);
    }
};

export const createTouristPlace = async (req, res) => {
    try {
        const validation = validateTouristPlace(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'তথ্য সঠিকভাবে দেওয়া হয়নি', 400, validation.errors);
        }
        const created = await createTouristPlaceService(req.body);
        return successResponse(res, created, 'নতুন দর্শনীয় স্থান সফলভাবে সংযুক্ত হয়েছে', 201);
    } catch (error) {
        return errorResponse(res, 'দর্শনীয় স্থান সংরক্ষণ করতে ব্যর্থ', 500, error);
    }
};

export const updateTouristPlace = async (req, res) => {
    try {
        const updated = await updateTouristPlaceService(req.params.id, req.body);
        if (!updated) return errorResponse(res, 'দর্শনীয় স্থানটি পাওয়া যায়নি', 404);
        return successResponse(res, updated, 'দর্শনীয় স্থানের তথ্য হালনাগাদ করা হয়েছে');
    } catch (error) {
        return errorResponse(res, 'দর্শনীয় স্থান আপডেট করতে সমস্যা', 500, error);
    }
};

export const deleteTouristPlace = async (req, res) => {
    try {
        const result = await deleteTouristPlaceService(req.params.id);
        if (!result) return errorResponse(res, 'মুছে ফেলতে ব্যর্থ', 400);
        return successResponse(res, null, 'দর্শনীয় স্থান আইটেম মুছে ফেলা হয়েছে');
    } catch (error) {
        return errorResponse(res, 'মুছে ফেলতে সমস্যা হয়েছে', 500, error);
    }
};
