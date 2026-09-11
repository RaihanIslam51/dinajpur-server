import mongoose from 'mongoose';

const eventManagementSchema = new mongoose.Schema({
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
        default: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80'
    },
    eventType: {
        type: String,
        default: 'ওয়েডিং ও সার্বিক ইভেন্ট ডেকোরেশন'
    },
    experienceYears: {
        type: Number,
        required: [true, 'অভিজ্ঞতার বছর আবশ্যক'],
        min: 0
    },
    specialties: {
        type: [String],
        default: ['বিয়ে ও গায়ে হলুদ রয়্যাল স্টেিজ ডেকোরেশন', 'করপোরেট সেমিনার ও এজিএম সাউন্ড-লাইটিং', 'বার্থডে পার্টি থিমিক প্যান্ডেল ও এন্ট্রি গেট']
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

export default mongoose.models.EventManagement || mongoose.model('EventManagement', eventManagementSchema);
