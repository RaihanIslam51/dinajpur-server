import mongoose from 'mongoose';

const veterinarySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'পশু ডাক্তারের নাম আবশ্যক'],
            trim: true,
        },
        title: {
            type: String,
            required: [true, 'পদবী আবশ্যক'],
            default: 'পশু চিকিৎসক ও ভটেরিনারি সার্জন (Veterinary Surgeon)',
        },
        degree: {
            type: String,
            required: [true, 'ডিগ্রি/যোগ্যতা আবশ্যক'],
        },
        speciality: {
            type: String,
            required: [true, 'বিশেষজ্ঞতা আবশ্যক'],
            default: 'গবাদিপশু, পেটস ও পোল্ট্রি রোগ বিশেষজ্ঞ',
        },
        workplace: {
            type: String,
            required: [true, 'কর্মস্থল/হাসপাতাল আবশ্যক'],
        },
        chamber: {
            type: String,
            required: [true, 'চেম্বার/ক্লিনিকের নাম আবশ্যক'],
        },
        address: {
            type: String,
            required: [true, 'ঠিকানা আবশ্যক'],
        },
        upazila: {
            type: String,
            required: [true, 'উপজেলা আবশ্যক'],
            default: 'দিনাজপুর সদর',
        },
        phone: {
            type: String,
            required: [true, 'ফোন নম্বর আবশ্যক'],
        },
        serialPhone: {
            type: String,
            default: '',
        },
        visitingHours: {
            type: String,
            required: [true, 'সেবা প্রদানের সময় আবশ্যক'],
        },
        offDay: {
            type: String,
            default: 'শুক্রবার বন্ধ',
        },
        fee: {
            type: String,
            default: '৫০০ টাকা',
        },
        experience: {
            type: String,
            default: '১০+ বছর',
        },
        services: {
            type: [String],
            default: ['গরু ও ছাগলের সার্জারি', 'পেট ডগ ও ক্যাট চিকিৎসা', 'কৃত্রিম প্রজনন ও টিকাদান', 'পোল্ট্রি খামার পরামর্শ'],
        },
        rating: {
            type: Number,
            default: 4.8,
        },
        reviewCount: {
            type: Number,
            default: 32,
        },
        image: {
            type: String,
            default: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=400',
        },
        isApproved: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

const Veterinary = mongoose.models.Veterinary || mongoose.model('Veterinary', veterinarySchema);

export default Veterinary;
