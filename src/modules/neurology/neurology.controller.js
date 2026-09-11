import {
    getNeurologyServices,
    getNeurologyServiceById,
    createNeurologyService,
    updateNeurologyService,
    deleteNeurologyService,
    INITIAL_NEUROLOGY_SEED
} from './neurology.service.js';

export const getAllNeurology = async (req, res) => {
    try {
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

        const data = await getNeurologyServices(filter);
        res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        console.error('Neurology fetch error:', error);
        res.status(200).json({
            success: true,
            count: INITIAL_NEUROLOGY_SEED.length,
            data: INITIAL_NEUROLOGY_SEED
        });
    }
};

export const getNeurologyById = async (req, res) => {
    try {
        const data = await getNeurologyServiceById(req.params.id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'নিউরোলজি চিকিৎসকের তথ্য পাওয়া যায়নি'
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

export const createNeurology = async (req, res) => {
    try {
        const data = await createNeurologyService(req.body);
        res.status(201).json({
            success: true,
            message: 'নিউরোলজি চিকিৎসকের আবেদন সফলভাবে জমা দেওয়া হয়েছে',
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

export const updateNeurology = async (req, res) => {
    try {
        const data = await updateNeurologyService(req.params.id, req.body);
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

export const deleteNeurology = async (req, res) => {
    try {
        const data = await deleteNeurologyService(req.params.id);
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
