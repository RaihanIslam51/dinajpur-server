import mongoose from 'mongoose';

const endocrinologySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'ডাক্তার বা ডায়াবেটিস সেন্টারের নাম আবশ্যক'],
            trim: true
        },
        degrees: {
            type: String,
            default: 'MBBS, DEM (BIRDEM), MD (Endocrinology & Metabolism)'
        },
        hospitalAffiliation: {
            type: String,
            default: 'দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ ও হাসপাতাল'
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
            default: 'ডায়াবেটিস, থাইরয়েড & হরমোন বিশেষজ্ঞ'
        },
        experienceYears: {
            type: Number,
            default: 12
        },
        specialties: {
            type: [String],
            default: ['টাইপ-১ ও টাইপ-২ ডায়াবেটিস নিয়ন্ত্রণ', 'হাইপো/হাইপার থাইরয়েড রোগ নিরাময়', 'গর্ভকালীন ডায়াবেটিস (GDM) ম্যানেজমেন্ট']
        },
        visitingFee: {
            type: Number,
            default: 700
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

const Endocrinology = mongoose.models.Endocrinology || mongoose.model('Endocrinology', endocrinologySchema);

export default Endocrinology;
