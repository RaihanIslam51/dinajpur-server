import mongoose from 'mongoose';

const bikeMistriSchema = new mongoose.Schema(
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
            default: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80'
        },
        experienceYears: {
            type: Number,
            required: [true, 'অভিজ্ঞতার বছর আবশ্যক'],
            min: [0, 'অভিজ্ঞতা ঋণাত্মক হতে পারে না']
        },
        specialties: {
            type: [String],
            default: ['বাইক ইঞ্জিন ওভারহোলিং ও টিউনিং', 'কার্বুরেটর ও এফআই (FI) ফিটিং']
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

const BikeMistri = mongoose.models.BikeMistri || mongoose.model('BikeMistri', bikeMistriSchema);

export default BikeMistri;
