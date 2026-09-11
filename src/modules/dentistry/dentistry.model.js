import mongoose from 'mongoose';

const dentistrySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'দন্ত চিকিৎসক বা ডেন্টাল ক্লিনিকের নাম আবশ্যক'],
            trim: true
        },
        degrees: {
            type: String,
            default: 'BDS, PGT (Oral & Maxillofacial Surgery)'
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
            default: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80'
        },
        serviceType: {
            type: String,
            default: 'ডেন্টাল সার্জারি & রুট ক্যানেল'
        },
        experienceYears: {
            type: Number,
            default: 10
        },
        specialties: {
            type: [String],
            default: ['ব্যথামুক্ত রুট ক্যানেল ট্রিটমেন্ট', 'আল্ট্রাসনিক ডেন্টাল স্কেলিং & পলিশিং', 'আক্কেল দাঁতের সার্জারি']
        },
        visitingFee: {
            type: Number,
            default: 500
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

const Dentistry = mongoose.models.Dentistry || mongoose.model('Dentistry', dentistrySchema);

export default Dentistry;
