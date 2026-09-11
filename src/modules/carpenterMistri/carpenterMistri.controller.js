/**
 * Carpenter Mistri Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import {
    getAllCarpenterMistrisService,
    getCarpenterMistriByIdService,
    createCarpenterMistriService,
    updateCarpenterMistriStatusService,
    deleteCarpenterMistriService
} from './carpenterMistri.service.js';

export const getCarpenterMistris = async (req, res) => {
    try {
        const items = await getAllCarpenterMistrisService(req.query);
        return successResponse(res, items, 'Carpenter Mistri items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch Carpenter Mistri items', 500, error);
    }
};

export const getCarpenterMistriById = async (req, res) => {
    try {
        const item = await getCarpenterMistriByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Carpenter Mistri not found', 404);
        return successResponse(res, item, 'Carpenter Mistri detail retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching Carpenter Mistri detail', 500, error);
    }
};

export const createCarpenterMistri = async (req, res) => {
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

        const created = await createCarpenterMistriService(req.body);
        return successResponse(
            res, 
            created, 
            'আপনার তথ্য পর্যালোচনার জন্য জমা হয়েছে, অনুমোদনের পর এটি তালিকায় দেখা যাবে।', 
            201
        );
    } catch (error) {
        return errorResponse(res, 'Failed to submit Carpenter Mistri data', 500, error);
    }
};

export const updateCarpenterMistriStatus = async (req, res) => {
    try {
        const { status } = req.body;
        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return errorResponse(res, 'Invalid status format', 400);
        }
        const updated = await updateCarpenterMistriStatusService(req.params.id, status);
        if (!updated) return errorResponse(res, 'Carpenter Mistri not found', 404);
        return successResponse(res, updated, `Carpenter Mistri status updated to ${status}`);
    } catch (error) {
        return errorResponse(res, 'Failed to update status', 500, error);
    }
};

export const deleteCarpenterMistri = async (req, res) => {
    try {
        const deleted = await deleteCarpenterMistriService(req.params.id);
        if (!deleted) return errorResponse(res, 'Carpenter Mistri not found', 404);
        return successResponse(res, null, 'Carpenter Mistri entry deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete Carpenter Mistri', 500, error);
    }
};
