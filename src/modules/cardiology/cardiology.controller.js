import {
    getCardiologyServices,
    getCardiologyById,
    createCardiologyService,
    updateCardiologyStatus,
    deleteCardiologyService
} from './cardiology.service.js';

export const getAllCardiologyController = async (req, res, next) => {
    try {
        const data = await getCardiologyServices(req.query);
        res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        next(error);
    }
};

export const getCardiologyByIdController = async (req, res, next) => {
    try {
        const data = await getCardiologyById(req.params.id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'হৃদরোগ সংক্রান্ত তথ্য পাওয়া যায়নি'
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

export const createCardiologyController = async (req, res, next) => {
    try {
        const data = await createCardiologyService(req.body);
        res.status(201).json({
            success: true,
            message: 'আপনার তথ্য বা আবেদন সফলভাবে জমা হয়েছে। অনুমোদনের পর প্রদর্শিত হবে।',
            data
        });
    } catch (error) {
        next(error);
    }
};

export const updateCardiologyStatusController = async (req, res, next) => {
    try {
        const { status } = req.body;
        const data = await updateCardiologyStatus(req.params.id, status);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'হৃদরোগ সেবা তথ্য পাওয়া যায়নি'
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

export const deleteCardiologyController = async (req, res, next) => {
    try {
        const data = await deleteCardiologyService(req.params.id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'হৃদরোগ সেবা তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'হৃদরোগ সেবাদাতার তথ্য সফলভাবে মুছে ফেলা হয়েছে'
        });
    } catch (error) {
        next(error);
    }
};
