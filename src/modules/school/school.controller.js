import {
    getAllSchoolService,
    getSchoolByIdService,
    createSchoolService,
    updateSchoolService,
    deleteSchoolService,
} from './school.service.js';

export const getAllSchools = async (req, res) => {
    try {
        const data = await getAllSchoolService(req.query);
        return res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    } catch (error) {
        console.error('Error fetching School data:', error);
        return res.status(500).json({
            success: false,
            message: 'শিক্ষা প্রতিষ্ঠানসমূহের তথ্য লোড করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const getSchoolById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await getSchoolByIdService(id);
        if (!item) {
            return res.status(404).json({
                success: false,
                message: 'প্রতিষ্ঠানের তথ্য পাওয়া যায়নি',
            });
        }
        return res.status(200).json({
            success: true,
            data: item,
        });
    } catch (error) {
        console.error('Error fetching School by ID:', error);
        return res.status(500).json({
            success: false,
            message: 'তথ্য ফেচ করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const createSchool = async (req, res) => {
    try {
        const newItem = await createSchoolService(req.body);
        return res.status(201).json({
            success: true,
            message: 'প্রতিষ্ঠানের তথ্য সফলভাবে তালিকাভুক্ত করা হয়েছে',
            data: newItem,
        });
    } catch (error) {
        console.error('Error creating School entry:', error);
        return res.status(400).json({
            success: false,
            message: 'নতুন তথ্য যোগ করতে ব্যর্থ হয়েছে',
            error: error.message,
        });
    }
};

export const updateSchool = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await updateSchoolService(id, req.body);
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
        console.error('Error updating School entry:', error);
        return res.status(400).json({
            success: false,
            message: 'তথ্য আপডেট করতে ব্যর্থ হয়েছে',
            error: error.message,
        });
    }
};

export const deleteSchool = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await deleteSchoolService(id);
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
        console.error('Error deleting School entry:', error);
        return res.status(500).json({
            success: false,
            message: 'তথ্য মুছে ফেলতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};
