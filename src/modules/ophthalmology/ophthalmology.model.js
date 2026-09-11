import mongoose from 'mongoose';

const ophthalmologySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'ডাক্তার বা চক্ষু হাসপাতালের নাম আবশ্যক'],
            trim: true
        },
        degrees: {
            type: String,
            default: 'MBBS, DO, FCPS (Eye), MS (Ophthalmology)'
        },
        hospitalAffiliation: {
            type: String,
            default: 'দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ & চক্ষু হাসপাতাল'
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
            default: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
        },
        serviceType: {
            type: String,
            default: 'চক্ষু রোগ বিশেষজ্ঞ & ফেকো সার্জন'
        },
        experienceYears: {
            type: Number,
            default: 14
        },
        specialties: {
            type: [String],
            default: ['ছানি অপসারণ & লেজার ফেকো সার্জারি (Phaco Surgery)', 'গ্লকোমা, কর্নিয়া & কম্পিউটার ভিশন কেয়ার', 'চশমা পাওয়ার টেস্ট & শিশুদের ছানি পরীক্ষা']
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
            required: [true, 'চেম্বার বা হাসপাতালের ঠিকানা আবশ্যক']
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

const Ophthalmology = mongoose.models.Ophthalmology || mongoose.model('Ophthalmology', ophthalmologySchema);

export default Ophthalmology;
