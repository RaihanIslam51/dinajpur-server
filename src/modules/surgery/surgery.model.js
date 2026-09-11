import mongoose from 'mongoose';

const surgerySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'সার্জন বা সার্জিক্যাল সেন্টারের নাম আবশ্যক'],
            trim: true
        },
        degrees: {
            type: String,
            default: 'MBBS, FCPS (Surgery), MS (General Surgery)'
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
            default: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80'
        },
        serviceType: {
            type: String,
            default: 'জেনারেল & ল্যাপারোস্কোপিক সার্জারি'
        },
        experienceYears: {
            type: Number,
            default: 12
        },
        specialties: {
            type: [String],
            default: ['ল্যাপারোস্কোপিক পিত্তথলির পাথর অপসারণ', 'লেজার পাইলস & ফিস্টুলা অপারেশন', 'হার্নিয়া & অ্যাপেন্ডিক্স সার্জারি']
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

const Surgery = mongoose.models.Surgery || mongoose.model('Surgery', surgerySchema);

export default Surgery;
