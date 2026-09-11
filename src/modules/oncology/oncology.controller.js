import { 
    getOncologists, 
    getAllOncologistsAdmin, 
    createOncologist, 
    updateOncologistStatus, 
    deleteOncologist 
} from './oncology.service.js';

export const getPublicOncologyList = async (req, res) => {
    try {
        const data = await getOncologists();
        return res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        console.error('Error fetching public oncology list:', error);
        return res.status(500).json({
            success: false,
            message: 'ক্যান্সার বিশেষজ্ঞ সেবা তালিকা লোড করা যায়নি'
        });
    }
};

export const getAdminOncologyList = async (req, res) => {
    try {
        const data = await getAllOncologistsAdmin();
        return res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        console.error('Error fetching admin oncology list:', error);
        return res.status(500).json({
            success: false,
            message: 'অনকোলজি এডমিন ডেটা লোড করা যায়নি'
        });
    }
};

export const registerOncologyDoctor = async (req, res) => {
    try {
        const doctorData = req.body;
        const newDoctor = await createOncologist(doctorData);
        return res.status(201).json({
            success: true,
            message: 'আপনার অনকোলজি নিবন্ধনের তথ্য সফলভাবে জমা নেওয়া হয়েছে। এডমিন অনুমোদনের পর তা প্রকাশিত হবে।',
            data: newDoctor
        });
    } catch (error) {
        console.error('Error registering oncology doctor:', error);
        return res.status(400).json({
            success: false,
            message: error.message || 'অনকোলজি রেজিস্ট্রেশন ব্যর্থ হয়েছে'
        });
    }
};

export const updateOncologyDoctorStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'অবৈধ স্ট্যাটাস দেওয়া হয়েছে'
            });
        }

        const updated = await updateOncologistStatus(id, status);
        return res.status(200).json({
            success: true,
            message: `স্ট্যাটাস সফলভাবে ${status} করা হয়েছে`,
            data: updated
        });
    } catch (error) {
        console.error('Error updating oncology status:', error);
        return res.status(500).json({
            success: false,
            message: 'অনকোলজি স্ট্যাটাস আপডেট করা যায়নি'
        });
    }
};

export const deleteOncologyDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteOncologist(id);
        return res.status(200).json({
            success: true,
            message: 'অনকোলজি ডাক্তারের তথ্য সফলভাবে মুছে ফেলা হয়েছে'
        });
    } catch (error) {
        console.error('Error deleting oncology doctor:', error);
        return res.status(500).json({
            success: false,
            message: 'অনকোলজি তথ্য মোছা সম্ভব হয়নি'
        });
    }
};
