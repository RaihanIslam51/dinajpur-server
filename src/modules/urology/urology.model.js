import mongoose from 'mongoose';

const urologySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'ডাক্তার বা ইউরোলজি সেন্টারের নাম আবশ্যক'],
            trim: true
        },
        degrees: {
            type: String,
            default: 'MBBS, MS (Urology), FCPS (Surgery), FRCS'
        },
        hospitalAffiliation: {
            type: String,
            default: 'দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ & ইউরোলজি বিভাগ'
        },
        phone: {
            type: String,
            required: [true, 'মোবাইল নম্বর আবশ্যক'],
            trim: true
        },
        alternatePhone: {
            type: String,
            default: ''
        },
        photo: {
            type: String,
            default: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'
        },
        serviceType: {
            type: String,
            default: 'ইউরোলজি সার্জন & কিডনি মূত্ররোগ বিশেষজ্ঞ'
        },
        experienceYears: {
            type: Number,
            default: 15
        },
        specialties: {
            type: [String],
            default: ['লেজার অ্যান্ডো-ইউরোলজি (PCNL/URS/RIRC - পাথর অপসারণ)', 'প্রোস্টেট বৃদ্ধি (TURP) সেলাইবিহীন অপারেশন', 'মূত্রনালী ইনফেকশন (UTI) & পুরুষ বন্ধ্যাত্ব চিকিৎসা']
        },
        visitingFee: {
            type: Number,
            default: 800
        },
        chamberTime: {
            type: String,
            default: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)'
        },
        district: {
            type: String,
            default: 'দিনাজপুর'
        },
        upazila: {
            type: String,
            required: [true, 'উপজেলা নির্বাচন করুন']
        },
        address: {
            type: String,
            required: [true, 'চেম্বার বা সেন্টারের ঠিকানা আবশ্যক']
        },
        isAvailable: {
            type: Boolean,
            default: true
        },
        description: {
            type: String,
            default: ''
        },
        workSampleImages: {
            type: [String],
            default: []
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending'
        }
    },
    {
        timestamps: true
    }
);

const Urology = mongoose.models.Urology || mongoose.model('Urology', urologySchema);

export default Urology;
