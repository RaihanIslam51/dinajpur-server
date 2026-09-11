/**
 * HouseRental (বাসা ভাড়া) Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateHouseRental } from './houseRental.validation.js';
import {
    getAllHouseRentalsService,
    getHouseRentalByIdService,
    createHouseRentalService,
    updateHouseRentalService,
    deleteHouseRentalService
} from './houseRental.service.js';

export const getHouseRentals = async (req, res) => {
    try {
        const items = await getAllHouseRentalsService(req.query);
        return successResponse(res, items, 'বাসা ভাড়ার তালিকা সফলভাবে লোড হয়েছে', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'বাসা ভাড়ার তথ্য লোড করতে ব্যর্থ', 500, error);
    }
};

export const getHouseRentalById = async (req, res) => {
    try {
        const item = await getHouseRentalByIdService(req.params.id);
        if (!item) return errorResponse(res, 'বাসা ভাড়ার পোস্টটি পাওয়া যায়নি', 404);
        return successResponse(res, item, 'বাসা ভাড়ার বিস্তারিত তথ্য');
    } catch (error) {
        return errorResponse(res, 'বাসা ভাড়ার বিস্তারিত তথ্য আনতে ব্যর্থ', 500, error);
    }
};

export const createHouseRental = async (req, res) => {
    try {
        const validation = validateHouseRental(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'তথ্য সঠিকভাবে দেওয়া হয়নি', 400, validation.errors);
        }
        const created = await createHouseRentalService(req.body);
        return successResponse(res, created, 'নতুন বাসা ভাড়ার পোস্ট সফলভাবে প্রকাশ করা হয়েছে', 201);
    } catch (error) {
        return errorResponse(res, 'বাসা ভাড়ার পোস্ট প্রকাশ করতে ব্যর্থ', 500, error);
    }
};

export const updateHouseRental = async (req, res) => {
    try {
        const updated = await updateHouseRentalService(req.params.id, req.body);
        if (!updated) return errorResponse(res, 'বাসা ভাড়ার পোস্টটি পাওয়া যায়নি', 404);
        return successResponse(res, updated, 'বাসা ভাড়ার তথ্য হালনাগাদ হয়েছে');
    } catch (error) {
        return errorResponse(res, 'আপডেট করতে ব্যর্থ', 500, error);
    }
};

export const deleteHouseRental = async (req, res) => {
    try {
        const result = await deleteHouseRentalService(req.params.id);
        if (!result) return errorResponse(res, 'মুছে ফেলতে ব্যর্থ', 400);
        return successResponse(res, null, 'বাসা ভাড়ার পোস্ট মুছে ফেলা হয়েছে');
    } catch (error) {
        return errorResponse(res, 'মুছে ফেলতে সমস্যা হয়েছে', 500, error);
    }
};
