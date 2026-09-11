import {
    getAllPhysiotherapyService,
    getPhysiotherapyByIdService,
    createPhysiotherapyService,
    updatePhysiotherapyService,
    deletePhysiotherapyService,
} from './physiotherapy.service.js';

export const getAllPhysiotherapy = async (req, res) => {
    try {
        const data = await getAllPhysiotherapyService(req.query);
        return res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    } catch (error) {
        console.error('Error fetching Physiotherapy data:', error);
        return res.status(500).json({
            success: false,
            message: 'ফিজিওথেরাপিস্টদের তথ্য লোড করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const getPhysiotherapyById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await getPhysiotherapyByIdService(id);
        if (!item) {
            return res.status(404).json({
                success: false,
                message: 'ফিজিওথেরাপিস্টের তথ্য পাওয়া যায়নি',
            });
        }
        return res.status(200).json({
            success: true,
            data: item,
        });
    } catch (error) {
        console.error('Error fetching Physiotherapy by ID:', error);
        return res.status(500).json({
            success: false,
            message: 'তথ্য ফেচ করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const createPhysiotherapy = async (req, res) => {
    try {
        const newItem = await createPhysiotherapyService(req.body);
        return res.status(201).json({
            success: true,
            message: 'ফিজিওথেরাপিস্টের তথ্য সফলভাবে তালিকাভুক্ত করা হয়েছে',
            data: newItem,
        });
    } catch (error) {
        console.error('Error creating Physiotherapy entry:', error);
        return res.status(400).json({
            success: false,
            message: 'নতুন তথ্য যোগ করতে ব্যর্থ হয়েছে',
            error: error.message,
        });
    }
};

export const updatePhysiotherapy = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await updatePhysiotherapyService(id, req.body);
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
        console.error('Error updating Physiotherapy entry:', error);
        return res.status(400).json({
            success: false,
            message: 'তথ্য আপডেট করতে ব্যর্থ হয়েছে',
            error: error.message,
        });
    }
};

export const deletePhysiotherapy = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await deletePhysiotherapyService(id);
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
        console.error('Error deleting Physiotherapy entry:', error);
        return res.status(500).json({
            success: false,
            message: 'তথ্য মুছে ফেলতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};
