import mongoose from 'mongoose';

const lightSoundSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'লাইট ও সাউন্ড প্রদানকারীর নাম আবশ্যক'],
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
            default: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80'
        },
        serviceType: {
            type: String,
            default: 'কনসার্ট & স্টেজ সাউন্ড সিস্টেম'
        },
        experienceYears: {
            type: Number,
            default: 5
        },
        specialties: {
            type: [String],
            default: ['হাই-বেস আউটডোর সাউন্ড বক্স সেটআপ', 'এলইডি পার লাইট & লেজার ফগ এডিফেক্ট', 'ডিজে ড্যান্স ফ্লোর & মেজ বাতি']
        },
        dailyWage: {
            type: Number,
            default: 6000
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

const LightSound = mongoose.models.LightSound || mongoose.model('LightSound', lightSoundSchema);

export default LightSound;
