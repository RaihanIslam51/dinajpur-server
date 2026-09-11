import {
    getAllPediatricsService,
    getPediatricsByIdService,
    createPediatricsService,
    updatePediatricsService,
    deletePediatricsService,
} from './pediatrics.service.js';

export const getAllPediatrics = async (req, res) => {
    try {
        const data = await getAllPediatricsService(req.query);
        return res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    } catch (error) {
        console.error('Error fetching Pediatrics data:', error);
        return res.status(500).json({
            success: false,
            message: 'শিশু রোগ বিশেষজ্ঞদের তথ্য লোড করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const getPediatricsById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await getPediatricsByIdService(id);
        if (!item) {
            return res.status(404).json({
                success: false,
                message: 'শিশু রোগ বিশেষজ্ঞের তথ্য পাওয়া যায়নি',
            });
        }
        return res.status(200).json({
            success: true,
            data: item,
        });
    } catch (error) {
        console.error('Error fetching Pediatrics doctor by ID:', error);
        return res.status(500).json({
            success: false,
            message: 'তথ্য ফেচ করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const createPediatrics = async (req, res) => {
    try {
        const newItem = await createPediatricsService(req.body);
        return res.status(201).json({
            success: true,
            message: 'শিশু রোগ বিশেষজ্ঞের তথ্য সফলভাবে তালিকাভুক্ত করা হয়েছে',
            data: newItem,
        });
    } catch (error) {
        console.error('Error creating Pediatrics entry:', error);
        return res.status(400).json({
            success: false,
            message: 'নতুন তথ্য যোগ করতে ব্যর্থ হয়েছে',
            error: error.message,
        });
    }
};

export const updatePediatrics = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await updatePediatricsService(id, req.body);
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
        console.error('Error updating Pediatrics entry:', error);
        return res.status(400).json({
            success: false,
            message: 'তথ্য আপডেট করতে ব্যর্থ হয়েছে',
            error: error.message,
        });
    }
};

export const deletePediatrics = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await deletePediatricsService(id);
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
        console.error('Error deleting Pediatrics entry:', error);
        return res.status(500).json({
            success: false,
            message: 'তথ্য মুছে ফেলতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};
