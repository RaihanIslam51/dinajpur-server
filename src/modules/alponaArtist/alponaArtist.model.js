import mongoose from 'mongoose';

const alponaArtistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'আলপনা শিল্পীর নাম বা প্রতিষ্ঠানের নাম আবশ্যক'],
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
            default: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80'
        },
        serviceType: {
            type: String,
            default: 'বিয়ের তোরণ & পিঁড়ি আলপনা'
        },
        experienceYears: {
            type: Number,
            default: 5
        },
        specialties: {
            type: [String],
            default: ['ঐতিহ্যবাহী মেঝের চক্র আলপনা', 'গায়ে হলুদ পিঁড়ি ও ডালা আর্ট', 'ওয়াটারপ্রুফ অ্যাক্রিলিক আলপনা']
        },
        dailyWage: {
            type: Number,
            default: 3500
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

const AlponaArtist = mongoose.models.AlponaArtist || mongoose.model('AlponaArtist', alponaArtistSchema);

export default AlponaArtist;
