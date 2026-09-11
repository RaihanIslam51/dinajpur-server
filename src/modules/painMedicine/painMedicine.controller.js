import { 
    getPainSpecialists, 
    getAllPainSpecialistsAdmin, 
    createPainSpecialist, 
    updatePainSpecialistStatus, 
    deletePainSpecialist 
} from './painMedicine.service.js';

export const getPublicPainMedicineList = async (req, res) => {
    try {
        const data = await getPainSpecialists();
        return res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        console.error('Error fetching public pain medicine list:', error);
        return res.status(500).json({
            success: false,
            message: 'ব্যথা বিশেষজ্ঞ সেবা তালিকা লোড করা যায়নি'
        });
    }
};

export const getAdminPainMedicineList = async (req, res) => {
    try {
        const data = await getAllPainSpecialistsAdmin();
        return res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        console.error('Error fetching admin pain medicine list:', error);
        return res.status(500).json({
            success: false,
            message: 'পেইন মেডিসিন এডমিন ডেটা লোড করা যায়নি'
        });
    }
};

export const registerPainMedicineDoctor = async (req, res) => {
    try {
        const doctorData = req.body;
        const newDoctor = await createPainSpecialist(doctorData);
        return res.status(201).json({
            success: true,
            message: 'আপনার পেইন মেডিসিন নিবন্ধনের তথ্য সফলভাবে জমা নেওয়া হয়েছে। এডমিন অনুমোদনের পর তা প্রকাশিত হবে।',
            data: newDoctor
        });
    } catch (error) {
        console.error('Error registering pain medicine doctor:', error);
        return res.status(400).json({
            success: false,
            message: error.message || 'পেইন মেডিসিন রেজিস্ট্রেশন ব্যর্থ হয়েছে'
        });
    }
};

export const updatePainMedicineDoctorStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'অবৈধ স্ট্যাটাস দেওয়া হয়েছে'
            });
        }

        const updated = await updatePainSpecialistStatus(id, status);
        return res.status(200).json({
            success: true,
            message: `স্ট্যাটাস সফলভাবে ${status} করা হয়েছে`,
            data: updated
        });
    } catch (error) {
        console.error('Error updating pain medicine status:', error);
        return res.status(500).json({
            success: false,
            message: 'পেইন মেডিসিন স্ট্যাটাস আপডেট করা যায়নি'
        });
    }
};

export const deletePainMedicineDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        await deletePainSpecialist(id);
        return res.status(200).json({
            success: true,
            message: 'ব্যথা ডাক্তারের তথ্য সফলভাবে মুছে ফেলা হয়েছে'
        });
    } catch (error) {
        console.error('Error deleting pain medicine doctor:', error);
        return res.status(500).json({
            success: false,
            message: 'পেইন মেডিসিন তথ্য মোছা সম্ভব হয়নি'
        });
    }
};
