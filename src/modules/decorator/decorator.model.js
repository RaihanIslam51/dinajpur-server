import mongoose from 'mongoose';

const decoratorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'ডেকোরেটরের নাম আবশ্যক'],
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
            default: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'
        },
        decoratorType: {
            type: String,
            default: 'ওয়েডিং & শামিয়ানা ডেকোরেটর'
        },
        experienceYears: {
            type: Number,
            default: 5
        },
        specialties: {
            type: [String],
            default: ['বিয়ের তোরণ ও শামীয়ানা টাঙ্গানো', 'লাইটিং মরিচ বাতি ডেকোরেশন', 'ভিআইপি চেয়ার ও সোফা সাময়িক ভাড়া']
        },
        dailyWage: {
            type: Number,
            default: 5000
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

const Decorator = mongoose.models.Decorator || mongoose.model('Decorator', decoratorSchema);

export default Decorator;
