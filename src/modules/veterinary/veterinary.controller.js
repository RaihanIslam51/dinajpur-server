import {
    getAllVeterinaryService,
    getVeterinaryByIdService,
    createVeterinaryService,
    updateVeterinaryService,
    deleteVeterinaryService,
} from './veterinary.service.js';

export const getAllVeterinary = async (req, res) => {
    try {
        const data = await getAllVeterinaryService(req.query);
        return res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    } catch (error) {
        console.error('Error fetching Veterinary data:', error);
        return res.status(500).json({
            success: false,
            message: 'পশু চিকিৎসকদের তথ্য লোড করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const getVeterinaryById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await getVeterinaryByIdService(id);
        if (!item) {
            return res.status(404).json({
                success: false,
                message: 'পশু চিকিৎসকের তথ্য পাওয়া যায়নি',
            });
        }
        return res.status(200).json({
            success: true,
            data: item,
        });
    } catch (error) {
        console.error('Error fetching Veterinary doctor by ID:', error);
        return res.status(500).json({
            success: false,
            message: 'তথ্য ফেচ করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const createVeterinary = async (req, res) => {
    try {
        const newItem = await createVeterinaryService(req.body);
        return res.status(201).json({
            success: true,
            message: 'পশু চিকিৎসকের তথ্য সফলভাবে তালিকাভুক্ত করা হয়েছে',
            data: newItem,
        });
    } catch (error) {
        console.error('Error creating Veterinary entry:', error);
        return res.status(400).json({
            success: false,
            message: 'নতুন তথ্য যোগ করতে ব্যর্থ হয়েছে',
            error: error.message,
        });
    }
};

export const updateVeterinary = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await updateVeterinaryService(id, req.body);
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
        console.error('Error updating Veterinary entry:', error);
        return res.status(400).json({
            success: false,
            message: 'তথ্য আপডেট করতে ব্যর্থ হয়েছে',
            error: error.message,
        });
    }
};

export const deleteVeterinary = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await deleteVeterinaryService(id);
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
        console.error('Error deleting Veterinary entry:', error);
        return res.status(500).json({
            success: false,
            message: 'তথ্য মুছে ফেলতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};
