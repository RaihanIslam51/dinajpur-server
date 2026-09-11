import mongoose from 'mongoose';

const obstetricsSchema = new mongoose.Schema({
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
            'গর্ভধারণ & গাইনি-প্রসূতি বিশেষজ্ঞ সার্জন',
            'হাই-রিস্ক প্রেগন্যান্সি & ম্যাটারনিটি কেয়ার',
            '৪ডি আল্ট্রাসনোগ্রাফি & ফিটাল মেডিসিন ক্লিনিক',
            'স্বাভাবিক প্রসব (Normal Delivery) & নরমাল ডেলিভারি সেন্টার',
            'বন্ধ্যাত্ব (Infertility) & গর্ভধারণ প্রস্তুতি কনসালটেন্ট'
        ],
        default: 'গর্ভধারণ & গাইনি-প্রসূতি বিশেষজ্ঞ সার্জন'
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

export default mongoose.model('Obstetrics', obstetricsSchema);
