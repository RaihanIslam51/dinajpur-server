import mongoose from 'mongoose';

const cardiologySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'ডাক্তার বা কার্ডিয়াক সেন্টারের নাম আবশ্যক'],
            trim: true
        },
        degrees: {
            type: String,
            default: 'MBBS, FCPS (Cardiology), MD (Cardiology)'
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
            default: 'হৃদরোগ বিশেষজ্ঞ ও কনসালটেন্ট'
        },
        experienceYears: {
            type: Number,
            default: 12
        },
        specialties: {
            type: [String],
            default: ['উচ্চ রক্তচাপ & বুক ব্যথার চিকিৎসা', '২ডি ইকোকার্ডিওগ্রাম & ইসিজি', 'হার্ট ব্লক & এনজিনা কেয়ার']
        },
        visitingFee: {
            type: Number,
            default: 1000
        },
        chamberTime: {
            type: String,
            default: 'বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বন্ধ)'
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

const Cardiology = mongoose.models.Cardiology || mongoose.model('Cardiology', cardiologySchema);

export default Cardiology;
