import { 
    getOrthopedists, 
    getAllOrthopedistsAdmin, 
    createOrthopedist, 
    updateOrthopedistStatus, 
    deleteOrthopedist 
} from './orthopedics.service.js';

export const getPublicOrthopedicsList = async (req, res) => {
    try {
        const data = await getOrthopedists();
        return res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        console.error('Error fetching public orthopedics list:', error);
        return res.status(500).json({
            success: false,
            message: 'অর্থোপেডিক সেবা তালিকা লোড করা যায়নি'
        });
    }
};

export const getAdminOrthopedicsList = async (req, res) => {
    try {
        const data = await getAllOrthopedistsAdmin();
        return res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        console.error('Error fetching admin orthopedics list:', error);
        return res.status(500).json({
            success: false,
            message: 'অর্থোপেডিক এডমিন ডেটা লোড করা যায়নি'
        });
    }
};

export const registerOrthopedicsDoctor = async (req, res) => {
    try {
        const doctorData = req.body;
        const newDoctor = await createOrthopedist(doctorData);
        return res.status(201).json({
            success: true,
            message: 'আপনার অর্থোপেডিক নিবন্ধনের তথ্য সফলভাবে জমা নেওয়া হয়েছে। এডমিন অনুমোদনের পর তা প্রকাশিত হবে।',
            data: newDoctor
        });
    } catch (error) {
        console.error('Error registering orthopedics doctor:', error);
        return res.status(400).json({
            success: false,
            message: error.message || 'অর্থোপেডিক রেজিস্ট্রেশন ব্যর্থ হয়েছে'
        });
    }
};

export const updateOrthopedicsDoctorStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'অবৈধ স্ট্যাটাস দেওয়া হয়েছে'
            });
        }

        const updated = await updateOrthopedistStatus(id, status);
        return res.status(200).json({
            success: true,
            message: `স্ট্যাটাস সফলভাবে ${status} করা হয়েছে`,
            data: updated
        });
    } catch (error) {
        console.error('Error updating orthopedics status:', error);
        return res.status(500).json({
            success: false,
            message: 'অর্থোপেডিক স্ট্যাটাস আপডেট করা যায়নি'
        });
    }
};

export const deleteOrthopedicsDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteOrthopedist(id);
        return res.status(200).json({
            success: true,
            message: 'অর্থোপেডিক ডাক্তারের তথ্য সফলভাবে মুছে ফেলা হয়েছে'
        });
    } catch (error) {
        console.error('Error deleting orthopedics doctor:', error);
        return res.status(500).json({
            success: false,
            message: 'অর্থোপেডিক তথ্য মোছা সম্ভব হয়নি'
        });
    }
};
