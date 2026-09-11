import {
    getAllUrologyServices,
    getUrologyById,
    createUrologyService,
    updateUrologyStatus,
    deleteUrologyService
} from './urology.service.js';

export const getAllUrologyController = async (req, res) => {
    try {
        const services = await getAllUrologyServices(req.query);
        res.status(200).json({
            success: true,
            count: services.length,
            data: services
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ইউরোলজি বিশেষজ্ঞদের তথ্য পাওয়া যায়নি',
            error: error.message
        });
    }
};

export const getUrologyByIdController = async (req, res) => {
    try {
        const service = await getUrologyById(req.params.id);
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

export const createUrologyController = async (req, res) => {
    try {
        const newService = await createUrologyService(req.body);
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

export const updateUrologyStatusController = async (req, res) => {
    try {
        const { status } = req.body;
        const updated = await updateUrologyStatus(req.params.id, status);
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

export const deleteUrologyController = async (req, res) => {
    try {
        const deleted = await deleteUrologyService(req.params.id);
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
