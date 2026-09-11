import {
    getAllBehaviorHypertensionService,
    getBehaviorHypertensionByIdService,
    createBehaviorHypertensionService,
    updateBehaviorHypertensionService,
    deleteBehaviorHypertensionService,
} from './behaviorHypertension.service.js';

export const getAllBehaviorHypertension = async (req, res) => {
    try {
        const data = await getAllBehaviorHypertensionService(req.query);
        return res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    } catch (error) {
        console.error('Error fetching Behavior & Hypertension data:', error);
        return res.status(500).json({
            success: false,
            message: 'আচরণ ও রক্তচাপ বিশেষজ্ঞদের তথ্য লোড করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const getBehaviorHypertensionById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await getBehaviorHypertensionByIdService(id);
        if (!item) {
            return res.status(404).json({
                success: false,
                message: 'চিকিৎসকের তথ্য পাওয়া যায়নি',
            });
        }
        return res.status(200).json({
            success: true,
            data: item,
        });
    } catch (error) {
        console.error('Error fetching Behavior & Hypertension doctor by ID:', error);
        return res.status(500).json({
            success: false,
            message: 'তথ্য ফেচ করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const createBehaviorHypertension = async (req, res) => {
    try {
        const newItem = await createBehaviorHypertensionService(req.body);
        return res.status(201).json({
            success: true,
            message: 'চিকিৎসকের তথ্য সফলভাবে তালিকাভুক্ত করা হয়েছে',
            data: newItem,
        });
    } catch (error) {
        console.error('Error creating Behavior & Hypertension entry:', error);
        return res.status(400).json({
            success: false,
            message: 'নতুন তথ্য যোগ করতে ব্যর্থ হয়েছে',
            error: error.message,
        });
    }
};

export const updateBehaviorHypertension = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await updateBehaviorHypertensionService(id, req.body);
        if (!updatedItem) {
            return res.status(404).json({
                success: false,
                message: 'আপডেট করার জন্য তথ্য পাওয়া যায়নি',
            });
        }
        return res.status(200).json({
            success: true,
            message: 'তথ্য সফলভাবে আপডেট করা হয়েছে',
            data: updatedItem,
        });
    } catch (error) {
        console.error('Error updating Behavior & Hypertension entry:', error);
        return res.status(400).json({
            success: false,
            message: 'তথ্য আপডেট করতে ব্যর্থ হয়েছে',
            error: error.message,
        });
    }
};

export const deleteBehaviorHypertension = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await deleteBehaviorHypertensionService(id);
        if (!deletedItem) {
            return res.status(404).json({
                success: false,
                message: 'মুছে ফেলার জন্য তথ্য পাওয়া যায়নি',
            });
        }
        return res.status(200).json({
            success: true,
            message: 'তথ্য সফলভাবে মুছে ফেলা হয়েছে',
        });
    } catch (error) {
        console.error('Error deleting Behavior & Hypertension entry:', error);
        return res.status(500).json({
            success: false,
            message: 'তথ্য মুছে ফেলতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};
