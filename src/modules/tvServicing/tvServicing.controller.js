import tvServicingService from './tvServicing.service.js';

export const getAllTvServicings = async (req, res) => {
    try {
        const tvServicings = await tvServicingService.getAll(req.query);
        res.status(200).json({
            success: true,
            count: tvServicings.length,
            data: tvServicings
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'টিভি সার্ভিসিং টেকনিশিয়ান তালিকা আনতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const getTvServicingById = async (req, res) => {
    try {
        const tvServicing = await tvServicingService.getById(req.params.id);
        if (!tvServicing) {
            return res.status(404).json({
                success: false,
                message: 'টিভি সার্ভিসিং টেকনিশিয়ান পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            data: tvServicing
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'টিভি টেকনিশিয়ান তথ্য আনতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const createTvServicing = async (req, res) => {
    try {
        const newTvServicing = await tvServicingService.create(req.body);
        res.status(201).json({
            success: true,
            message: 'আপনার তথ্য পর্যালোচনার জন্য জমা হয়েছে, অনুমোদনের পর এটি তালিকায় দেখা যাবে।',
            data: newTvServicing
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'নতুন তথ্য সংরক্ষণ করতে ব্যর্থ হয়েছে'
        });
    }
};

export const updateTvServicingStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const updated = await tvServicingService.updateStatus(req.params.id, status);
        if (!updated) {
            return res.status(404).json({
                success: false,
                message: 'টিভি টেকনিশিয়ান তথ্য পাওয়া যায়নি'
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

export const deleteTvServicing = async (req, res) => {
    try {
        await tvServicingService.delete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'টিভি টেকনিশিয়ানের তথ্য সফলভাবে মোছা হয়েছে'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ডিলিট করতে ব্যর্থ হয়েছে'
        });
    }
};
