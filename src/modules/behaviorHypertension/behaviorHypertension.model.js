import mongoose from 'mongoose';

const behaviorHypertensionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'চিকিৎসকের নাম আবশ্যক'],
            trim: true,
        },
        title: {
            type: String,
            required: [true, 'পদবী আবশ্যক'],
            default: 'মনোরোগ, আচরণ ও উচ্চ রক্তচাপ বিশেষজ্ঞ (Psychiatrist & BP Specialist)',
        },
        degree: {
            type: String,
            required: [true, 'ডিগ্রি/যোগ্যতা আবশ্যক'],
        },
        speciality: {
            type: String,
            required: [true, 'বিশেষজ্ঞতা আবশ্যক'],
            default: 'আচরণগত সমস্যা, মানসিক রোগ, বিষণ্ণতা ও উচ্চ রক্তচাপ ব্যবস্থাপনা',
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
            default: '৭০০ টাকা',
        },
        experience: {
            type: String,
            default: '১০+ বছর',
        },
        services: {
            type: [String],
            default: [
                'উচ্চ রক্তচাপ মনিটরিং ও প্রাইমারি কেয়ার',
                'মানসিক চাপ, এনজাইটি ও বিষণ্ণতা কাউন্সিলিং',
                'আচরণগত পরিবর্তন সাইকোথেরাপি (CBT)',
                'ঘুমের ব্যাঘাত ও সাইকোসোমেটিক ডিসঅর্ডার'
            ],
        },
        rating: {
            type: Number,
            default: 4.8,
        },
        reviewCount: {
            type: Number,
            default: 36,
        },
        image: {
            type: String,
            default: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
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

const BehaviorHypertension = mongoose.models.BehaviorHypertension || mongoose.model('BehaviorHypertension', behaviorHypertensionSchema);

export default BehaviorHypertension;
