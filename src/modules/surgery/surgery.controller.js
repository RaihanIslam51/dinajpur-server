import {
    getSurgeryServices,
    getSurgeryById,
    createSurgeryService,
    updateSurgeryStatus,
    deleteSurgeryService
} from './surgery.service.js';

export const getAllSurgeryController = async (req, res, next) => {
    try {
        const data = await getSurgeryServices(req.query);
        res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        next(error);
    }
};

export const getSurgeryByIdController = async (req, res, next) => {
    try {
        const data = await getSurgeryById(req.params.id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'সার্জারি সংক্রান্ত তথ্য পাওয়া যায়নি'
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

export const createSurgeryController = async (req, res, next) => {
    try {
        const data = await createSurgeryService(req.body);
        res.status(201).json({
            success: true,
            message: 'আপনার তথ্য বা আবেদন সফলভাবে জমা হয়েছে। অনুমোদনের পর প্রদর্শিত হবে।',
            data
        });
    } catch (error) {
        next(error);
    }
};

export const updateSurgeryStatusController = async (req, res, next) => {
    try {
        const { status } = req.body;
        const data = await updateSurgeryStatus(req.params.id, status);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'সার্জারি সেবা তথ্য পাওয়া যায়নি'
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

export const deleteSurgeryController = async (req, res, next) => {
    try {
        const data = await deleteSurgeryService(req.params.id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'সার্জারি সেবা তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'সার্জন বা সার্জিক্যাল সেন্টারের তথ্য সফলভাবে মুছে ফেলা হয়েছে'
        });
    } catch (error) {
        next(error);
    }
};
