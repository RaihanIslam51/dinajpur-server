import cateringServiceService from './cateringService.service.js';

export const getAllCateringServices = async (req, res) => {
    try {
        const cateringServices = await cateringServiceService.getAll(req.query);
        res.status(200).json({
            success: true,
            count: cateringServices.length,
            data: cateringServices
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ক্যাটারিং সার্ভিস প্রোভাইডার তালিকা আনতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const getCateringServiceById = async (req, res) => {
    try {
        const cateringService = await cateringServiceService.getById(req.params.id);
        if (!cateringService) {
            return res.status(404).json({
                success: false,
                message: 'ক্যাটারিং সার্ভিস প্রোভাইডার পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            data: cateringService
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ক্যাটারিং সার্ভিস তথ্য আনতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const createCateringService = async (req, res) => {
    try {
        const newCateringService = await cateringServiceService.create(req.body);
        res.status(201).json({
            success: true,
            message: 'আপনার ক্যাটারিং তথ্য পর্যালোচনার জন্য জমা হয়েছে, অনুমোদনের পর এটি তালিকায় দেখা যাবে।',
            data: newCateringService
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'নতুন তথ্য সংরক্ষণ করতে ব্যর্থ হয়েছে'
        });
    }
};

export const updateCateringServiceStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const updated = await cateringServiceService.updateStatus(req.params.id, status);
        if (!updated) {
            return res.status(404).json({
                success: false,
                message: 'ক্যাটারিং সার্ভিস তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'স্ট্যাটাস সফলভাবে আপডেট করা হয়েছে',
            data: updated
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'স্ট্যাটাস আপডেট ব্যর্থ হয়েছে'
        });
    }
};

export const deleteCateringService = async (req, res) => {
    try {
        await cateringServiceService.delete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'ক্যাটারিং সার্ভিসের তথ্য সফলভাবে মোছা হয়েছে'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ডিলিট করতে ব্যর্থ হয়েছে'
        });
    }
};
