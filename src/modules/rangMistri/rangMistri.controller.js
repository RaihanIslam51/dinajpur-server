/**
 * Rang Mistri (Painter) Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import {
    getAllRangMistrisService,
    getRangMistriByIdService,
    createRangMistriService,
    updateRangMistriStatusService,
    deleteRangMistriService
} from './rangMistri.service.js';

export const getRangMistris = async (req, res) => {
    try {
        const items = await getAllRangMistrisService(req.query);
        return successResponse(res, items, 'Rang Mistri items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch Rang Mistri items', 500, error);
    }
};

export const getRangMistriById = async (req, res) => {
    try {
        const item = await getRangMistriByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Rang Mistri not found', 404);
        return successResponse(res, item, 'Rang Mistri detail retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching Rang Mistri detail', 500, error);
    }
};

export const createRangMistri = async (req, res) => {
    try {
        const { name, phone, upazila, address } = req.body;
        if (!name || !phone || !upazila || !address) {
            return errorResponse(res, 'নাম, মোবাইল নম্বর, উপজেলা এবং ঠিকানা আবশ্যক', 400);
        }

        // Validate BD Phone number (01XXXXXXXXX)
        const bdPhoneRegex = /^01[3-9]\d{8}$/;
        const cleanPhone = phone.replace(/[-\s]/g, '');
        if (!bdPhoneRegex.test(cleanPhone)) {
            return errorResponse(res, 'সঠিক ১২ সংখ্যার বাংলাদেশী মোবাইল নম্বর প্রদান করুন (যেমন: 01712345678)', 400);
        }

        const created = await createRangMistriService(req.body);
        return successResponse(
            res, 
            created, 
            'আপনার তথ্য পর্যালোচনার জন্য জমা হয়েছে, অনুমোদনের পর এটি তালিকায় দেখা যাবে।', 
            201
        );
    } catch (error) {
        return errorResponse(res, 'Failed to submit Rang Mistri data', 500, error);
    }
};

export const updateRangMistriStatus = async (req, res) => {
    try {
        const { status } = req.body;
        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return errorResponse(res, 'Invalid status format', 400);
        }
        const updated = await updateRangMistriStatusService(req.params.id, status);
        if (!updated) return errorResponse(res, 'Rang Mistri not found', 404);
        return successResponse(res, updated, `Rang Mistri status updated to ${status}`);
    } catch (error) {
        return errorResponse(res, 'Failed to update status', 500, error);
    }
};

export const deleteRangMistri = async (req, res) => {
    try {
        const deleted = await deleteRangMistriService(req.params.id);
        if (!deleted) return errorResponse(res, 'Rang Mistri not found', 404);
        return successResponse(res, null, 'Rang Mistri entry deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete Rang Mistri', 500, error);
    }
};
