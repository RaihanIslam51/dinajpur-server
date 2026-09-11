import mongoose from 'mongoose';

const entSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'ডাক্তার বা ইএনটি সেন্টারের নাম আবশ্যক'],
            trim: true
        },
        degrees: {
            type: String,
            default: 'MBBS, DLO, FCPS (ENT), MS (Otolaryngology)'
        },
        hospitalAffiliation: {
            type: String,
            default: 'দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ ও হাসপাতাল'
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
            default: 'নাক, কান & গলা রোগ বিশেষজ্ঞ ও হেড-নেক সার্জন'
        },
        experienceYears: {
            type: Number,
            default: 12
        },
        specialties: {
            type: [String],
            default: ['টনসিল, সাইনাস & টনসিলাইটিস অপারেশন', 'কানের পর্দা ফুটো, পুঁজ পড়া & এন্ডোস্কোপিক সার্জারি', 'নাকের মাংস বৃদ্ধি (Polyps) & নাক ডাকা নিরাময়']
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

const Ent = mongoose.models.Ent || mongoose.model('Ent', entSchema);

export default Ent;
