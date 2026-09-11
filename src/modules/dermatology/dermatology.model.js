import mongoose from 'mongoose';

const dermatologySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'ডাক্তার বা ক্লিনিকের নাম আবশ্যক'],
            trim: true
        },
        degrees: {
            type: String,
            default: 'MBBS, DDV, MD (Dermatology & Venereology)'
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
            default: 'চর্ম, এলার্জি & যৌন রোগ বিশেষজ্ঞ'
        },
        experienceYears: {
            type: Number,
            default: 10
        },
        specialties: {
            type: [String],
            default: ['একজিমা, সোরিয়াসিস & এলার্জি চিকিৎসা', 'একনে, ব্রণ & দাগ দূরীকরণ লেজার কেয়ার', 'যৌন ব্যাধি & পুরুষত্বহীনতা নিরাময়']
        },
        visitingFee: {
            type: Number,
            default: 600
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
            required: [true, 'চেম্বার বা ক্লিনিকের ঠিকানা আবশ্যক']
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

const Dermatology = mongoose.models.Dermatology || mongoose.model('Dermatology', dermatologySchema);

export default Dermatology;
