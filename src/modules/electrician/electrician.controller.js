import electricianService from './electrician.service.js';

export const getAllElectricians = async (req, res) => {
    try {
        const electricians = await electricianService.getAll(req.query);
        res.status(200).json({
            success: true,
            count: electricians.length,
            data: electricians
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'তথ্য আনয়ন করতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
};

export const getElectricianById = async (req, res) => {
    try {
        const electrician = await electricianService.getById(req.params.id);
        if (!electrician) {
            return res.status(404).json({
                success: false,
                message: 'ইলেকট্রিশিয়ান পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            data: electrician
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ত্রুটি ঘটেছে',
            error: error.message
        });
    }
};

export const createElectrician = async (req, res) => {
    try {
        const newElectrician = await electricianService.create(req.body);
        res.status(201).json({
            success: true,
            message: 'আপনার তথ্য পর্যালোচনার জন্য জমা হয়েছে, অনুমোদনের পর এটি তালিকায় দেখা যাবে।',
            data: newElectrician
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

        const updated = await electricianService.updateStatus(req.params.id, status);
        if (!updated) {
            return res.status(404).json({
                success: false,
                message: 'ইলেকট্রিশিয়ান পাওয়া যায়নি'
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

export const deleteElectrician = async (req, res) => {
    try {
        const deleted = await electricianService.delete(req.params.id);
        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: 'ইলেকট্রিশিয়ান পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'ইলেকট্রিশিয়ানের তথ্য সফলভাবে মোছা হয়েছে'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'তথ্য মুছে ফেলতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
};
