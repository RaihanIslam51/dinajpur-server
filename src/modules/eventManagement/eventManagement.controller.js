import eventManagementService from './eventManagement.service.js';

export const getAllEventManagements = async (req, res) => {
    try {
        const eventManagements = await eventManagementService.getAll(req.query);
        res.status(200).json({
            success: true,
            count: eventManagements.length,
            data: eventManagements
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ইভেন্ট ম্যানেজমেন্ট তালিকা আনতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const getEventManagementById = async (req, res) => {
    try {
        const eventManagement = await eventManagementService.getById(req.params.id);
        if (!eventManagement) {
            return res.status(404).json({
                success: false,
                message: 'ইভেন্ট ম্যানেজমেন্ট পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            data: eventManagement
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ইভেন্ট প্ল্যানার তথ্য আনতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const createEventManagement = async (req, res) => {
    try {
        const newEventManagement = await eventManagementService.create(req.body);
        res.status(201).json({
            success: true,
            message: 'আপনার ইভেন্ট ম্যানেজমেন্ট তথ্য পর্যালোচনার জন্য জমা হয়েছে, অনুমোদনের পর এটি তালিকায় দেখা যাবে।',
            data: newEventManagement
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'নতুন তথ্য সংরক্ষণ করতে ব্যর্থ হয়েছে'
        });
    }
};

export const updateEventManagementStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const updated = await eventManagementService.updateStatus(req.params.id, status);
        if (!updated) {
            return res.status(404).json({
                success: false,
                message: 'ইভেন্ট ম্যানেজমেন্ট তথ্য পাওয়া যায়নি'
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

export const deleteEventManagement = async (req, res) => {
    try {
        await eventManagementService.delete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'ইভেন্ট ম্যানেজমেন্ট তথ্য সফলভাবে মোছা হয়েছে'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ডিলিট করতে ব্যর্থ হয়েছে'
        });
    }
};
