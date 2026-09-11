/**
 * MarketRate (আজকের বাজার দর) Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateMarketRate } from './marketRate.validation.js';
import {
    getAllMarketRatesService,
    getMarketRateByIdService,
    createMarketRateService,
    updateMarketRateService,
    deleteMarketRateService
} from './marketRate.service.js';

export const getMarketRates = async (req, res) => {
    try {
        const items = await getAllMarketRatesService(req.query);
        return successResponse(res, items, 'আজকের বাজার দর সফলভাবে সংগৃহীত হয়েছে', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'বাজার দর সংগ্রহ করতে ব্যর্থ হয়েছে', 500, error);
    }
};

export const getMarketRateById = async (req, res) => {
    try {
        const item = await getMarketRateByIdService(req.params.id);
        if (!item) return errorResponse(res, 'বাজার দর আইটেম পাওয়া যায়নি', 404);
        return successResponse(res, item, 'পণ্যের বাজার দর বিস্তারিত');
    } catch (error) {
        return errorResponse(res, 'বাজার দর তথ্য আনতে সমস্যা হয়েছে', 500, error);
    }
};

export const createMarketRate = async (req, res) => {
    try {
        const validation = validateMarketRate(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'তথ্য সঠিকভাবে দেওয়া হয়নি', 400, validation.errors);
        }
        const created = await createMarketRateService(req.body);
        return successResponse(res, created, 'নতুন বাজার দর সফলভাবে যোগ করা হয়েছে', 201);
    } catch (error) {
        return errorResponse(res, 'নতুন বাজার দর সংরক্ষণ করতে ব্যর্থ', 500, error);
    }
};

export const updateMarketRate = async (req, res) => {
    try {
        const updated = await updateMarketRateService(req.params.id, req.body);
        if (!updated) return errorResponse(res, 'বাজার দর আইটেম পাওয়া যায়নি', 404);
        return successResponse(res, updated, 'বাজার দর হালনাগাদ করা হয়েছে');
    } catch (error) {
        return errorResponse(res, 'বাজার দর আপডেট করতে ব্যর্থ', 500, error);
    }
};

export const deleteMarketRate = async (req, res) => {
    try {
        const result = await deleteMarketRateService(req.params.id);
        if (!result) return errorResponse(res, 'বাজার দর মুছে ফেলতে ব্যর্থ', 400);
        return successResponse(res, null, 'বাজার দর আইটেম মুছে ফেলা হয়েছে');
    } catch (error) {
        return errorResponse(res, 'মুছে ফেলতে সমস্যা হয়েছে', 500, error);
    }
};
