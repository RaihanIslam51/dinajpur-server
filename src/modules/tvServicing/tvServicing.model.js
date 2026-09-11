import mongoose from 'mongoose';

const tvServicingSchema = new mongoose.Schema({
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
        trim: true,
        default: ''
    },
    photo: {
        type: String,
        default: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80'
    },
    experienceYears: {
        type: Number,
        required: [true, 'অভিজ্ঞতার বছর আবশ্যক'],
        min: 0
    },
    specialties: {
        type: [String],
        default: ['স্মার্ট অ্যান্ডয়েড ও এলইডি (LED/OLED) টিভি মেরামত', 'প্যানেল (Display Panel) রিপ্লেসমেন্ট ও বন্ডিং সার্ভিস', 'টিভি মাদারবোর্ড ও পাওয়ার সাপ্লাই ফিক্স']
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
        required: [true, 'উপজেলা আবশ্যক'],
        default: 'দিনাজপুর সদর'
    },
    address: {
        type: String,
        default: ''
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
}, {
    timestamps: true
});

export default mongoose.models.TvServicing || mongoose.model('TvServicing', tvServicingSchema);
