import cctvServicingService from './cctvServicing.service.js';

export const getAllCctvServicings = async (req, res) => {
    try {
        const cctvServicings = await cctvServicingService.getAll(req.query);
        res.status(200).json({
            success: true,
            count: cctvServicings.length,
            data: cctvServicings
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'সিসিটিভি সার্ভিসিং টেকনিশিয়ান তালিকা আনতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const getCctvServicingById = async (req, res) => {
    try {
        const cctvServicing = await cctvServicingService.getById(req.params.id);
        if (!cctvServicing) {
            return res.status(404).json({
                success: false,
                message: 'সিসিটিভি সার্ভিসিং টেকনিশিয়ান পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            data: cctvServicing
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'সিসিটিভি টেকনিশিয়ান তথ্য আনতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const createCctvServicing = async (req, res) => {
    try {
        const newCctvServicing = await cctvServicingService.create(req.body);
        res.status(201).json({
            success: true,
            message: 'আপনার তথ্য পর্যালোচনার জন্য জমা হয়েছে, অনুমোদনের পর এটি তালিকায় দেখা যাবে।',
            data: newCctvServicing
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'নতুন তথ্য সংরক্ষণ করতে ব্যর্থ হয়েছে'
        });
    }
};

export const updateCctvServicingStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const updated = await cctvServicingService.updateStatus(req.params.id, status);
        if (!updated) {
            return res.status(404).json({
                success: false,
                message: 'সিসিটিভি টেকনিশিয়ান তথ্য পাওয়া যায়নি'
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

export const deleteCctvServicing = async (req, res) => {
    try {
        await cctvServicingService.delete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'সিসিটিভি টেকনিশিয়ানের তথ্য সফলভাবে মোছা হয়েছে'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ডিলিট করতে ব্যর্থ হয়েছে'
        });
    }
};

