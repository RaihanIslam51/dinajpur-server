import photographerService from './photographer.service.js';

export const getAllPhotographers = async (req, res) => {
    try {
        const photographers = await photographerService.getAll(req.query);
        res.status(200).json({
            success: true,
            count: photographers.length,
            data: photographers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ফটোগ্রাফার তালিকা আনতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const getPhotographerById = async (req, res) => {
    try {
        const photographer = await photographerService.getById(req.params.id);
        if (!photographer) {
            return res.status(404).json({
                success: false,
                message: 'ফটোগ্রাফার পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            data: photographer
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ফটোগ্রাফার তথ্য আনতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const createPhotographer = async (req, res) => {
    try {
        const newPhotographer = await photographerService.create(req.body);
        res.status(201).json({
            success: true,
            message: 'আপনার ফটোগ্রাফার তথ্য পর্যালোচনার জন্য জমা হয়েছে, অনুমোদনের পর এটি তালিকায় দেখা যাবে।',
            data: newPhotographer
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'নতুন তথ্য সংরক্ষণ করতে ব্যর্থ হয়েছে'
        });
    }
};

export const updatePhotographerStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const updated = await photographerService.updateStatus(req.params.id, status);
        if (!updated) {
            return res.status(404).json({
                success: false,
                message: 'ফটোগ্রাফার তথ্য পাওয়া যায়নি'
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

export const deletePhotographer = async (req, res) => {
    try {
        await photographerService.delete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'ফটোগ্রাফারের তথ্য সফলভাবে মোছা হয়েছে'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ডিলিট করতে ব্যর্থ হয়েছে'
        });
    }
};
