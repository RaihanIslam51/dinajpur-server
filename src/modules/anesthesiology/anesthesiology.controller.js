import * as anesthesiologyService from './anesthesiology.service.js';

export const getAnesthesiologists = async (req, res) => {
    try {
        const data = await anesthesiologyService.getAllAnesthesiologists();
        res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'অ্যানেস্থেসিওলজিস্টদের তথ্য লোড করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const getAnesthesiologistById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await anesthesiologyService.getAnesthesiologistById(id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'অ্যানেস্থেসিওলজিস্ট পাওয়া যায়নি',
            });
        }
        res.status(200).json({
            success: true,
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'তথ্য সংগ্রহ করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const createAnesthesiologist = async (req, res) => {
    try {
        const data = await anesthesiologyService.createAnesthesiologist(req.body);
        res.status(201).json({
            success: true,
            message: 'অ্যানেস্থেসিওলজিস্ট তথ্য সফলভাবে যুক্ত করা হয়েছে',
            data,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'তথ্য সংরক্ষণে ভুল হয়েছে',
            error: error.message,
        });
    }
};

export const updateAnesthesiologist = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await anesthesiologyService.updateAnesthesiologist(id, req.body);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'অ্যানেস্থেসিওলজিস্ট পাওয়া যায়নি',
            });
        }
        res.status(200).json({
            success: true,
            message: 'তথ্য আপডেট করা হয়েছে',
            data,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'আপডেট করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const deleteAnesthesiologist = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await anesthesiologyService.deleteAnesthesiologist(id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'অ্যানেস্থেসিওলজিস্ট পাওয়া যায়নি',
            });
        }
        res.status(200).json({
            success: true,
            message: 'তথ্য মুছে ফেলা হয়েছে',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ডিলিট করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};
