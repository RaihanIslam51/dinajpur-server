import mongoose from 'mongoose';

const communityCenterSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'কমিউনিটি সেন্টার বা কনভেনশন হলের নাম আবশ্যক'],
            trim: true
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
            default: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80'
        },
        centerType: {
            type: String,
            default: 'লক্সারি কনভেনশন হল'
        },
        capacity: {
            type: Number,
            default: 1000
        },
        rentPerDay: {
            type: Number,
            default: 25000
        },
        amenities: {
            type: [String],
            default: ['এসি সম্পন্ন হল রুম', 'বিশাল পার্কিং সুবিধা', 'স্টেজ ও সাউন্ড সিস্টেম', 'জেনারেটর ব্যাকআপ']
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
            required: [true, 'বিস্তারিত ঠিকানা আবশ্যক']
        },
        isAvailable: {
            type: Boolean,
            default: true
        },
        description: {
            type: String,
            default: ''
        },
        galleryImages: {
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

const CommunityCenter = mongoose.models.CommunityCenter || mongoose.model('CommunityCenter', communityCenterSchema);

export default CommunityCenter;
