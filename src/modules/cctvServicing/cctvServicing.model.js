import mongoose from 'mongoose';

const cctvServicingSchema = new mongoose.Schema({
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
        default: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80'
    },
    experienceYears: {
        type: Number,
        required: [true, 'অভিজ্ঞতার বছর আবশ্যক'],
        min: 0
    },
    specialties: {
        type: [String],
        default: ['এইচডি (HD) ও আইপি (IP) সিসিটিভি ক্যামেরা ইনস্টলেশন', 'ডিভিআর (DVR) / এনভিআর (NVR) কনফিগারেশন ও হার্ডডিস্ক সেটআপ']
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

export default mongoose.models.CctvServicing || mongoose.model('CctvServicing', cctvServicingSchema);

