import computerServicingService from './computerServicing.service.js';

export const getAllComputerServicing = async (req, res) => {
    try {
        const data = await computerServicingService.getAll(req.query);
        res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'তথ্য আনয়ন করতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
};

export const getComputerServicingById = async (req, res) => {
    try {
        const item = await computerServicingService.getById(req.params.id);
        if (!item) {
            return res.status(404).json({
                success: false,
                message: 'কম্পিউটার সার্ভিসিং মিস্ত্রি পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            data: item
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ত্রুটি ঘটেছে',
            error: error.message
        });
    }
};

export const createComputerServicing = async (req, res) => {
    try {
        const newItem = await computerServicingService.create(req.body);
        res.status(201).json({
            success: true,
            message: 'আপনার তথ্য পর্যালোচনার জন্য জমা হয়েছে, অনুমোদনের পর এটি তালিকায় দেখা যাবে।',
            data: newItem
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'তথ্য জমাদানে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'অকার্যকর স্ট্যাটাস'
            });
        }

        const updated = await computerServicingService.updateStatus(req.params.id, status);
        if (!updated) {
            return res.status(404).json({
                success: false,
                message: 'কম্পিউটার সার্ভিসিং মিস্ত্রি পাওয়া যায়নি'
            });
        }

        res.status(200).json({
            success: true,
            message: `স্ট্যাটাস সফলভাবে ${status === 'approved' ? 'অনুমোদিত' : 'প্রত্যাখ্যাত'} করা হয়েছে`,
            data: updated
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'স্ট্যাটাস আপডেট করতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
};

export const deleteComputerServicing = async (req, res) => {
    try {
        const deleted = await computerServicingService.delete(req.params.id);
        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: 'কম্পিউটার সার্ভিসিং মিস্ত্রি পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'কম্পিউটার সার্ভিসিং মিস্ত্রির তথ্য সফলভাবে মোছা হয়েছে'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'তথ্য মুছে ফেলতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
};
