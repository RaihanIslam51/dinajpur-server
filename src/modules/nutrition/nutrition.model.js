import mongoose from 'mongoose';

const nutritionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'নাম আবশ্যক'],
            trim: true
        },
        degrees: {
            type: String,
            required: [true, 'ডিগ্রী ও শিক্ষাগত যোগ্যতা আবশ্যক'],
            trim: true
        },
        hospitalAffiliation: {
            type: String,
            trim: true,
            default: ''
        },
        phone: {
            type: String,
            required: [true, 'ফোন নম্বর আবশ্যক'],
            trim: true
        },
        alternatePhone: {
            type: String,
            trim: true,
            default: ''
        },
        photo: {
            type: String,
            default: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
        },
        serviceType: {
            type: String,
            required: [true, 'সেবার ধরণ আবশ্যক'],
            default: 'ক্লিনিক্যাল নিউট্রিশনিস্ট & ডায়েটিশিয়ান'
        },
        experienceYears: {
            type: Number,
            required: [true, 'অভিজ্ঞতার বছর আবশ্যক'],
            min: [0, 'অভিজ্ঞতা ঋণাত্মক হতে পারে না']
        },
        specialties: {
            type: [String],
            default: ['ওজন নিয়ন্ত্রণ (Weight Gain/Loss) ডায়েট চার্ট', 'ডায়াবেটিস & কিডনি রোগীদের নিউট্রিশন প্ল্যান']
        },
        visitingFee: {
            type: Number,
            default: 500
        },
        chamberTime: {
            type: String,
            default: 'বিকাল ৪:০০ - রাত ৮:০০'
        },
        district: {
            type: String,
            default: 'দিনাজপুর'
        },
        upazila: {
            type: String,
            required: [true, 'উপজেলা আবশ্যক'],
            trim: true,
            default: 'দিনাজপুর সদর'
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
            trim: true,
            default: ''
        },
        workSampleImages: {
            type: [String],
            default: []
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'approved'
        }
    },
    {
        timestamps: true
    }
);

const Nutrition = mongoose.models.Nutrition || mongoose.model('Nutrition', nutritionSchema);

export default Nutrition;
