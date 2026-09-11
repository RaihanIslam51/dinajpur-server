/**
 * Raj Mistri Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import {
    getAllRajMistrisService,
    getRajMistriByIdService,
    createRajMistriService,
    updateRajMistriStatusService,
    deleteRajMistriService
} from './rajMistri.service.js';

export const getRajMistris = async (req, res) => {
    try {
        const items = await getAllRajMistrisService(req.query);
        return successResponse(res, items, 'Raj Mistris retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch Raj Mistris', 500, error);
    }
};

export const getRajMistriById = async (req, res) => {
    try {
        const item = await getRajMistriByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Raj Mistri not found', 404);
        return successResponse(res, item, 'Raj Mistri retrieved successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to fetch Raj Mistri details', 500, error);
    }
};

export const createRajMistri = async (req, res) => {
    try {
        const { name, phone, specialties, district } = req.body;

        // Validation
        if (!name || !name.trim()) {
            return errorResponse(res, 'নাম প্রদান করা আবশ্যক', 400);
        }
        if (!phone || !phone.trim()) {
            return errorResponse(res, 'মোবাইল নম্বর প্রদান করা আবশ্যক', 400);
        }

        // BD Phone Number Regex
        const cleanPhone = phone.replace(/[-\s]/g, '');
        if (!/^01[3-9]\d{8}$/.test(cleanPhone)) {
            return errorResponse(res, 'সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (e.g. 01712345678)', 400);
        }

        if (!specialties || !Array.isArray(specialties) || specialties.length === 0) {
            return errorResponse(res, 'কমপক্ষে একটি দক্ষতা নির্বাচন করুন', 400);
        }

        const created = await createRajMistriService({
            ...req.body,
            phone: cleanPhone,
            status: req.body.status || 'pending'
        });

        return successResponse(res, created, 'আপনার তথ্য পর্যালোচনার জন্য জমা হয়েছে, অনুমোদনের পর এটি তালিকায় দেখা যাবে।', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create Raj Mistri entry', 500, error);
    }
};

export const approveRajMistri = async (req, res) => {
    try {
        const updated = await updateRajMistriStatusService(req.params.id, 'approved');
        if (!updated) return errorResponse(res, 'Raj Mistri not found', 404);
        return successResponse(res, updated, 'Raj Mistri entry approved successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to approve Raj Mistri', 500, error);
    }
};

export const rejectRajMistri = async (req, res) => {
    try {
        const updated = await updateRajMistriStatusService(req.params.id, 'rejected');
        if (!updated) return errorResponse(res, 'Raj Mistri not found', 404);
        return successResponse(res, updated, 'Raj Mistri entry rejected successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to reject Raj Mistri', 500, error);
    }
};

export const deleteRajMistri = async (req, res) => {
    try {
        const deleted = await deleteRajMistriService(req.params.id);
        if (!deleted) return errorResponse(res, 'Raj Mistri not found', 404);
        return successResponse(res, null, 'Raj Mistri entry deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete Raj Mistri entry', 500, error);
    }
};
