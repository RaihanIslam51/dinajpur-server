import mongoose from 'mongoose';

const physiotherapySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'ফিজিওথেরাপিস্টের নাম আবশ্যক'],
            trim: true,
        },
        title: {
            type: String,
            required: [true, 'পদবী আবশ্যক'],
            default: 'কনসালটেন্ট ফিজিওথেরাপিস্ট ও নিউরো-রিহ্যাব স্পেশালিস্ট (Physiotherapist)',
        },
        degree: {
            type: String,
            required: [true, 'ডিগ্রি/যোগ্যতা আবশ্যক'],
        },
        speciality: {
            type: String,
            required: [true, 'বিশেষজ্ঞতা আবশ্যক'],
            default: 'স্ট্রোক প্যারালাইসিস, কোমর ও ঘাড় ব্যথা, ফিজিওথেরাপি ও নিউরো রিহ্যাবিলিটেশন',
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
            default: '৬০০ টাকা',
        },
        experience: {
            type: String,
            default: '১০+ বছর',
        },
        services: {
            type: [String],
            default: [
                'স্ট্রোক প্যারালাইসিস ও মুখ বেঁকে যাওয়া (Bell\'s Palsy) রিহ্যাব',
                'কোমর, ঘাড় ও হাঁটু ব্যথার ম্যানুয়াল থেরাপি',
                'স্পোর্টস ইনজুরি ও হাড় ভাঙা পরবর্তী জয়েন্ট শক্ততা মুক্তকরণ',
                'ইলেক্ট্রোথেরাপি (IFT, UST, Traction, TENS)'
            ],
        },
        rating: {
            type: Number,
            default: 4.8,
        },
        reviewCount: {
            type: Number,
            default: 42,
        },
        image: {
            type: String,
            default: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400',
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

const Physiotherapy = mongoose.models.Physiotherapy || mongoose.model('Physiotherapy', physiotherapySchema);

export default Physiotherapy;
