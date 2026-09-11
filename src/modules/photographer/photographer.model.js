import mongoose from 'mongoose';

const photographerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'নাম আবশ্যক'],
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'মোবাইল নম্বর আবশ্যক'],
        trim: true
    },
    alternatePhone: {
        type: String,
        trim: true,
        default: ''
    },
    photo: {
        type: String,
        default: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=600&q=80'
    },
    photographyType: {
        type: String,
        default: 'ওয়েডিং ও সিনেমাটিক ভিডিওগ্রাফি'
    },
    experienceYears: {
        type: Number,
        required: [true, 'অভিজ্ঞতার বছর আবশ্যক'],
        min: 0
    },
    specialties: {
        type: [String],
        default: ['ওয়েডিং ও গায়ে হলুদ ক্যানডিড ফটোশুট', '৪কে ড্রোন ভিডিওগ্রাফি ও সিনেমাটিক ফিল্ম', 'বার্থডে ও বেবি শুট']
    },
    dailyWage: {
        type: Number,
        default: 0
    },
    district: {
        type: String,
        default: 'দিনাজপুর'
    },
    upazila: {
        type: String,
        required: [true, 'উপজেলা আবশ্যক'],
        default: 'দিনাজপুর সদর'
    },
    address: {
        type: String,
        default: ''
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
}, {
    timestamps: true
});

export default mongoose.models.Photographer || mongoose.model('Photographer', photographerSchema);
