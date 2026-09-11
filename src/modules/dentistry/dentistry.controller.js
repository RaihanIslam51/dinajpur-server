import {
    getDentistryServices,
    getDentistryById,
    createDentistryService,
    updateDentistryStatus,
    deleteDentistryService
} from './dentistry.service.js';

export const getAllDentistryController = async (req, res, next) => {
    try {
        const data = await getDentistryServices(req.query);
        res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        next(error);
    }
};

export const getDentistryByIdController = async (req, res, next) => {
    try {
        const data = await getDentistryById(req.params.id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'ডেন্টিস্ট্রি সংক্রান্ত তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
};

export const createDentistryController = async (req, res, next) => {
    try {
        const data = await createDentistryService(req.body);
        res.status(201).json({
            success: true,
            message: 'আপনার তথ্য বা আবেদন সফলভাবে জমা হয়েছে। অনুমোদনের পর প্রদর্শিত হবে।',
            data
        });
    } catch (error) {
        next(error);
    }
};

export const updateDentistryStatusController = async (req, res, next) => {
    try {
        const { status } = req.body;
        const data = await updateDentistryStatus(req.params.id, status);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'ডেন্টিস্ট্রি সেবা তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'স্ট্যাটাস সফলভাবে আপডেট করা হয়েছে',
            data
        });
    } catch (error) {
        next(error);
    }
};

export const deleteDentistryController = async (req, res, next) => {
    try {
        const data = await deleteDentistryService(req.params.id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'ডেন্টিস্ট্রি সেবা তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'দন্ত চিকিৎসকের তথ্য সফলভাবে মুছে ফেলা হয়েছে'
        });
    } catch (error) {
        next(error);
    }
};
