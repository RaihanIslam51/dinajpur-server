import mongoose from 'mongoose';

const pharmacySchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    degrees: { type: String, default: '' }, // License / Pharmacist Reg
    hospitalAffiliation: { type: String, default: '' }, // Owner / Pharmacist Name
    phone: { type: String, required: true, trim: true },
    alternatePhone: { type: String, default: '', trim: true },
    photo: { type: String, default: '' },
    serviceType: { 
        type: String, 
        required: true,
        enum: [
            '২৪/৭ মডেল ফার্মেসী & হোম ডেলিভারি',
            'অ্যালোপ্যাথিক & প্রেসক্রিপশন মেডিসিন শপ',
            'ইনসুলিন, ভ্যাকসিন & কোল্ড চেইন ড্রাগ স্টোর',
            'সার্জিক্যাল সামগ্রী & মেডিকেল ডিভাইস সেন্টার',
            'হোমিওপ্যাথিক & আয়ুর্বেদিক ঔষধালয়'
        ],
        default: '২৪/৭ মডেল ফার্মেসী & হোম ডেলিভারি'
    },
    experienceYears: { type: Number, default: 0 },
    specialties: [{ type: String }],
    visitingFee: { type: Number, default: 0 }, // Discount % or delivery charge
    chamberTime: { type: String, default: '' }, // Opening Hours
    district: { type: String, default: 'দিনাজপুর' },
    upazila: { type: String, required: true },
    address: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
    description: { type: String, default: '' },
    workSampleImages: [{ type: String }],
    status: { 
        type: String, 
        enum: ['pending', 'approved', 'rejected'], 
        default: 'approved' 
    }
}, { timestamps: true });

export default mongoose.model('Pharmacy', pharmacySchema);
