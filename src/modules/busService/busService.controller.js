/**
 * BusService (বাস সেবা) Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateBusService } from './busService.validation.js';
import {
    getAllBusServicesService,
    getBusServiceByIdService,
    createBusServiceService,
    updateBusServiceService,
    deleteBusServiceService
} from './busService.service.js';

export const getBusServices = async (req, res) => {
    try {
        const items = await getAllBusServicesService(req.query);
        return successResponse(res, items, 'বাস সেবার তালিকা সফলভাবে লোড হয়েছে', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'বাস সেবার তথ্য লোড করতে ব্যর্থ', 500, error);
    }
};

export const getBusServiceById = async (req, res) => {
    try {
        const item = await getBusServiceByIdService(req.params.id);
        if (!item) return errorResponse(res, 'বাস সেবা আইটেম পাওয়া যায়নি', 404);
        return successResponse(res, item, 'বাস সেবার বিস্তারিত তথ্য');
    } catch (error) {
        return errorResponse(res, 'বাস সেবার বিস্তারিত তথ্য আনতে ব্যর্থ', 500, error);
    }
};

export const createBusService = async (req, res) => {
    try {
        const validation = validateBusService(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'তথ্য সঠিকভাবে দেওয়া হয়নি', 400, validation.errors);
        }
        const created = await createBusServiceService(req.body);
        return successResponse(res, created, 'নতুন বাস সেবা সফলভাবে যুক্ত করা হয়েছে', 201);
    } catch (error) {
        return errorResponse(res, 'বাস সেবা পোস্ট সংরক্ষণ করতে ব্যর্থ', 500, error);
    }
};

export const updateBusService = async (req, res) => {
    try {
        const updated = await updateBusServiceService(req.params.id, req.body);
        if (!updated) return errorResponse(res, 'বাস সেবা আইটেম পাওয়া যায়নি', 404);
        return successResponse(res, updated, 'বাস সেবার তথ্য হালনাগাদ করা হয়েছে');
    } catch (error) {
        return errorResponse(res, 'আপডেট করতে ব্যর্থ', 500, error);
    }
};

export const deleteBusService = async (req, res) => {
    try {
        const result = await deleteBusServiceService(req.params.id);
        if (!result) return errorResponse(res, 'মুছে ফেলতে ব্যর্থ', 400);
        return successResponse(res, null, 'বাস সেবা পোস্ট মুছে ফেলা হয়েছে');
    } catch (error) {
        return errorResponse(res, 'মুছে ফেলতে সমস্যা হয়েছে', 500, error);
    }
};
