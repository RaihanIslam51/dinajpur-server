import {
    getObstetricsServices,
    getObstetricsServiceById,
    createObstetricsService,
    updateObstetricsService,
    deleteObstetricsService,
    seedObstetricsData
} from './obstetrics.service.js';

export const getAllObstetrics = async (req, res) => {
    try {
        await seedObstetricsData();
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

        const data = await getObstetricsServices(filter);
        res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'গর্ভধারণ ও প্রসূতি চিকিৎসকদের তালিকা আনতে ত্রুটি হয়েছে',
            error: error.message
        });
    }
};

export const getObstetricsById = async (req, res) => {
    try {
        const data = await getObstetricsServiceById(req.params.id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'গর্ভধারণ ও প্রসূতি চিকিৎসকের তথ্য পাওয়া যায়নি'
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

export const createObstetrics = async (req, res) => {
    try {
        const data = await createObstetricsService(req.body);
        res.status(201).json({
            success: true,
            message: 'গর্ভধারণ ও প্রসূতি চিকিৎসকের আবেদন সফলভাবে জমা দেওয়া হয়েছে',
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

export const updateObstetrics = async (req, res) => {
    try {
        const data = await updateObstetricsService(req.params.id, req.body);
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

export const deleteObstetrics = async (req, res) => {
    try {
        const data = await deleteObstetricsService(req.params.id);
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
