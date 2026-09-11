import mongoose from 'mongoose';

const pediatricsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'ডাক্তার বা শিশু বিশেষজ্ঞের নাম আবশ্যক'],
            trim: true,
        },
        title: {
            type: String,
            required: [true, 'পদবী আবশ্যক'],
            default: 'শিশু রোগ বিশেষজ্ঞ (Pediatrician)',
        },
        degree: {
            type: String,
            required: [true, 'ডিগ্রি/যোগ্যতা আবশ্যক'],
        },
        speciality: {
            type: String,
            required: [true, 'বিশেষজ্ঞতা আবশ্যক'],
            default: 'নবজাতক ও শিশু রোগ বিশেষজ্ঞ',
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
            required: [true, 'রোগী দেখার সময় আবশ্যক'],
        },
        offDay: {
            type: String,
            default: 'শুক্রবার বন্ধ',
        },
        fee: {
            type: String,
            default: '৮০০ টাকা',
        },
        experience: {
            type: String,
            default: '১০+ বছর',
        },
        services: {
            type: [String],
            default: ['নবজাতক সেবা', 'শিশুর পুষ্টি ও বিকাশ', 'শিশু নিউরোলজি', 'টিকা প্রদান'],
        },
        rating: {
            type: Number,
            default: 4.9,
        },
        reviewCount: {
            type: Number,
            default: 28,
        },
        image: {
            type: String,
            default: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
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

const Pediatrics = mongoose.models.Pediatrics || mongoose.model('Pediatrics', pediatricsSchema);

export default Pediatrics;
