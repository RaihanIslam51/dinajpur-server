import {
    getAllHepatologyServices,
    getHepatologyById,
    createHepatologyService,
    updateHepatologyStatus,
    deleteHepatologyService
} from './hepatology.service.js';

export const getAllHepatologyController = async (req, res) => {
    try {
        const services = await getAllHepatologyServices(req.query);
        res.status(200).json({
            success: true,
            count: services.length,
            data: services
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'লিভার বিশেষজ্ঞদের তথ্য পাওয়া যায়নি',
            error: error.message
        });
    }
};

export const getHepatologyByIdController = async (req, res) => {
    try {
        const service = await getHepatologyById(req.params.id);
        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'চিকিৎসকের তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            data: service
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'তথ্য লোড করতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const createHepatologyController = async (req, res) => {
    try {
        const newService = await createHepatologyService(req.body);
        res.status(201).json({
            success: true,
            message: 'আপনার আবেদন সফলভাবে জমা দেওয়া হয়েছে। অনুমোদনের পর প্রদর্শিত হবে।',
            data: newService
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'তথ্য সংরক্ষণ করতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const updateHepatologyStatusController = async (req, res) => {
    try {
        const { status } = req.body;
        const updated = await updateHepatologyStatus(req.params.id, status);
        if (!updated) {
            return res.status(404).json({
                success: false,
                message: 'তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: `স্ট্যাটাস সফলভাবে '${status}' করা হয়েছে`,
            data: updated
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'স্ট্যাটাস আপডেট করতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const deleteHepatologyController = async (req, res) => {
    try {
        const deleted = await deleteHepatologyService(req.params.id);
        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: 'তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'তথ্য সফলভাবে মুছে ফেলা হয়েছে'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'তথ্য মুছতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};
