import {
    getNutritionServices,
    getNutritionServiceById,
    createNutritionService,
    updateNutritionService,
    deleteNutritionService,
    INITIAL_NUTRITION_SEED
} from './nutrition.service.js';

export const getAllNutrition = async (req, res) => {
    try {
        const { upazila, status, search, serviceType } = req.query;
        let filter = {};

        if (upazila && upazila !== 'সকল উপজেলা') {
            filter.upazila = upazila;
        }

        if (status) {
            filter.status = status;
        }

        if (serviceType && serviceType !== 'সকল সেবা') {
            filter.serviceType = serviceType;
        }

        if (search) {
            const regex = new RegExp(search, 'i');
            filter.$or = [
                { name: regex },
                { degrees: regex },
                { hospitalAffiliation: regex },
                { address: regex },
                { specialties: regex }
            ];
        }

        const data = await getNutritionServices(filter);
        res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        console.error('Nutrition fetch error:', error);
        res.status(200).json({
            success: true,
            count: INITIAL_NUTRITION_SEED.length,
            data: INITIAL_NUTRITION_SEED
        });
    }
};

export const getNutritionById = async (req, res) => {
    try {
        const data = await getNutritionServiceById(req.params.id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'পুষ্টি ও ডায়েট বিশেষজ্ঞের তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'তথ্য আনতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
};

export const createNutrition = async (req, res) => {
    try {
        const data = await createNutritionService(req.body);
        res.status(201).json({
            success: true,
            message: 'পুষ্টি বিশেষজ্ঞের আবেদন সফলভাবে জমা দেওয়া হয়েছে',
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'নতুন তথ্য সংরক্ষণ করতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
};

export const updateNutrition = async (req, res) => {
    try {
        const data = await updateNutritionService(req.params.id, req.body);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'তথ্য সফলভাবে আপডেট করা হয়েছে',
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'আপডেট করতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
};

export const deleteNutrition = async (req, res) => {
    try {
        const data = await deleteNutritionService(req.params.id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'তথ্য সফলভাবে মুছে ফেলা হয়েছে'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ডিলিট করতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
};
