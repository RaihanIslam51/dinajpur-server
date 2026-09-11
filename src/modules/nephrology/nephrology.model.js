import mongoose from 'mongoose';

const nephrologySchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    degrees: { type: String, default: '' },
    hospitalAffiliation: { type: String, default: '' },
    phone: { type: String, required: true, trim: true },
    alternatePhone: { type: String, default: '', trim: true },
    photo: { type: String, default: '' },
    serviceType: { 
        type: String, 
        required: true,
        enum: [
            'কিডনি রোগ বিশেষজ্ঞ & নেফ্রোলজিস্ট',
            'ডায়ালাইসিস সেন্টার & কিডনি ডায়ালাইসিস ইউনিট',
            'কিডনি ফেলিউর (CKD & Acute Kidney Failure) কেয়ার',
            'কিডনি ইনফেকশন & ক্রিয়েটিনিন নিয়ন্ত্রণ কনসালটেন্ট',
            'কিডনি ট্রান্সপ্লান্ট & প্রাক-অস্ত্রোপচার গাইডলাইন'
        ],
        default: 'কিডনি রোগ বিশেষজ্ঞ & নেফ্রোলজিস্ট'
    },
    experienceYears: { type: Number, default: 0 },
    specialties: [{ type: String }],
    visitingFee: { type: Number, default: 0 },
    chamberTime: { type: String, default: '' },
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

export default mongoose.model('Nephrology', nephrologySchema);
