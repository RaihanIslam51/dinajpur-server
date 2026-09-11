import mongoose from 'mongoose';

const hepatologySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'ডাক্তার বা লিভার সেন্টারের নাম আবশ্যক'],
            trim: true
        },
        degrees: {
            type: String,
            default: 'MBBS, MD (Hepatology), FCPS (Medicine)'
        },
        hospitalAffiliation: {
            type: String,
            default: 'দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ & গ্যাস্ট্রো-লিভার সেন্টার'
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
            default: 'লিভার & পেটরোগ বিশেষজ্ঞ (Hepatologist)'
        },
        experienceYears: {
            type: Number,
            default: 13
        },
        specialties: {
            type: [String],
            default: ['ফ্যাটি লিভার, জন্ডিস & হেপাটাইটিস বি/সি নিরাময়', 'লিভার সিরোসিস & লিভার ক্যানসার স্ক্রিনিং', 'এন্ডোস্কোপি, আল্ট্রাসাউন্ড & লিভার ফাইব্রোস্ক্যান']
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
            required: [true, 'চেম্বার বা সেন্টারের ঠিকানা আবশ্যক']
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

const Hepatology = mongoose.models.Hepatology || mongoose.model('Hepatology', hepatologySchema);

export default Hepatology;
