import {
    getAllDermatologyServices,
    getDermatologyById,
    createDermatologyService,
    updateDermatologyStatus,
    deleteDermatologyService
} from './dermatology.service.js';

export const getAllDermatologyController = async (req, res) => {
    try {
        const services = await getAllDermatologyServices(req.query);
        res.status(200).json({
            success: true,
            count: services.length,
            data: services
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'চর্ম ও যৌন রোগ চিকিৎসকদের তথ্য পাওয়া যায়নি',
            error: error.message
        });
    }
};

export const getDermatologyByIdController = async (req, res) => {
    try {
        const service = await getDermatologyById(req.params.id);
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

export const createDermatologyController = async (req, res) => {
    try {
        const newService = await createDermatologyService(req.body);
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

export const updateDermatologyStatusController = async (req, res) => {
    try {
        const { status } = req.body;
        const updated = await updateDermatologyStatus(req.params.id, status);
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

export const deleteDermatologyController = async (req, res) => {
    try {
        const deleted = await deleteDermatologyService(req.params.id);
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
