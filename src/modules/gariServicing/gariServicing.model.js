import mongoose from 'mongoose';

const gariServicingSchema = new mongoose.Schema(
    {
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
            trim: true
        },
        photo: {
            type: String,
            default: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80'
        },
        experienceYears: {
            type: Number,
            required: [true, 'অভিজ্ঞতার বছর আবশ্যক'],
            min: [0, 'অভিজ্ঞতা ঋণাত্মক হতে পারে না']
        },
        specialties: {
            type: [String],
            default: ['ইঞ্জিন ফুল ওভারহোলিং ও টিউনিং', 'ব্রেক সিস্টেম ও ডিস্ক পেড ফিক্স']
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
            required: [true, 'উপজেলা নির্বাচন আবশ্যক'],
            trim: true
        },
        address: {
            type: String,
            required: [true, 'ঠিকানা আবশ্যক'],
            trim: true
        },
        isAvailable: {
            type: Boolean,
            default: true
        },
        description: {
            type: String,
            trim: true
        },
        workSampleImages: {
            type: [String],
            default: []
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending'
        },
        submittedBy: {
            type: String,
            default: 'user'
        }
    },
    {
        timestamps: true
    }
);

const GariServicing = mongoose.models.GariServicing || mongoose.model('GariServicing', gariServicingSchema);

export default GariServicing;
