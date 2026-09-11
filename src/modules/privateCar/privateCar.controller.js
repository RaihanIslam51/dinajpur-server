import {
    getAllPrivateCarService,
    getPrivateCarByIdService,
    createPrivateCarService,
    updatePrivateCarService,
    deletePrivateCarService,
} from './privateCar.service.js';

export const getAllPrivateCars = async (req, res) => {
    try {
        const cars = await getAllPrivateCarService(req.query);
        return res.status(200).json({
            success: true,
            count: cars.length,
            data: cars,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'প্রাইভেট কারের তালিকা পেতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const getPrivateCarById = async (req, res) => {
    try {
        const car = await getPrivateCarByIdService(req.params.id);
        if (!car) {
            return res.status(404).json({
                success: false,
                message: 'প্রাইভেট কারের তথ্য পাওয়া যায়নি',
            });
        }
        return res.status(200).json({
            success: true,
            data: car,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'প্রাইভেট কারের বিবরণ পেতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const createPrivateCar = async (req, res) => {
    try {
        const newCar = await createPrivateCarService(req.body);
        return res.status(201).json({
            success: true,
            message: 'প্রাইভেট কারের তথ্য সফলভাবে যোগ করা হয়েছে',
            data: newCar,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'নতুন প্রাইভেট কার যোগ করতে ব্যর্থ হয়েছে',
            error: error.message,
        });
    }
};

export const updatePrivateCar = async (req, res) => {
    try {
        const updatedCar = await updatePrivateCarService(req.params.id, req.body);
        if (!updatedCar) {
            return res.status(404).json({
                success: false,
                message: 'প্রাইভেট কারের তথ্য পাওয়া যায়নি',
            });
        }
        return res.status(200).json({
            success: true,
            message: 'প্রাইভেট কারের তথ্য সফলভাবে আপডেট করা হয়েছে',
            data: updatedCar,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'প্রাইভেট কার আপডেট করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const deletePrivateCar = async (req, res) => {
    try {
        const deletedCar = await deletePrivateCarService(req.params.id);
        if (!deletedCar) {
            return res.status(404).json({
                success: false,
                message: 'প্রাইভেট কারের তথ্য পাওয়া যায়নি',
            });
        }
        return res.status(200).json({
            success: true,
            message: 'প্রাইভেট কারের তথ্য সফলভাবে মুছে ফেলা হয়েছে',
            data: deletedCar,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'প্রাইভেট কার মুছে ফেলতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};
