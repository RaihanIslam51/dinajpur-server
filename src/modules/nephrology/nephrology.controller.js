import {
    getNephrologyServices,
    getNephrologyServiceById,
    createNephrologyService,
    updateNephrologyService,
    deleteNephrologyService,
    seedNephrologyData
} from './nephrology.service.js';

export const getAllNephrology = async (req, res) => {
    try {
        await seedNephrologyData();
        const { upazila, status, search, serviceType } = req.query;
        let filter = {};

        if (upazila && upazila !== 'সকল উপজেলা') {
            filter.upazila = upazila;
        }

        if (status) {
            filter.status = status;
        }

        if (serviceType && serviceType !== 'সকল সেবা') {
            filter.serviceType = serviceType;
        }

        if (search) {
            const regex = new RegExp(search, 'i');
            filter.$or = [
                { name: regex },
                { degrees: regex },
                { hospitalAffiliation: regex },
                { address: regex },
                { specialties: regex }
            ];
        }

        const data = await getNephrologyServices(filter);
        res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'কিডনি রোগ চিকিৎসকদের তালিকা আনতে ত্রুটি হয়েছে',
            error: error.message
        });
    }
};

export const getNephrologyById = async (req, res) => {
    try {
        const data = await getNephrologyServiceById(req.params.id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'কিডনি রোগ চিকিৎসকের তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'তথ্য আনতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
};

export const createNephrology = async (req, res) => {
    try {
        const data = await createNephrologyService(req.body);
        res.status(201).json({
            success: true,
            message: 'কিডনি রোগ চিকিৎসকের আবেদন সফলভাবে জমা দেওয়া হয়েছে',
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'নতুন তথ্য সংরক্ষণ করতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
};

export const updateNephrology = async (req, res) => {
    try {
        const data = await updateNephrologyService(req.params.id, req.body);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'তথ্য সফলভাবে আপডেট করা হয়েছে',
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'আপডেট করতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
};

export const deleteNephrology = async (req, res) => {
    try {
        const data = await deleteNephrologyService(req.params.id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'তথ্য সফলভাবে মুছে ফেলা হয়েছে'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ডিলিট করতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
};
