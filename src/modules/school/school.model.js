import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'প্রতিষ্ঠানের নাম আবশ্যক'],
            trim: true,
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
        latitude: {
            type: Number,
            default: 25.6279,
        },
        longitude: {
            type: Number,
            default: 88.6332,
        },
        established_year: {
            type: String,
            default: '',
        },
        head_name: {
            type: String,
            required: [true, 'প্রধান শিক্ষক/অধ্যক্ষ/পরিচালকের নাম আবশ্যক'],
        },
        head_title: {
            type: String,
            default: 'প্রধান শিক্ষক', // প্রধান শিক্ষক / অধ্যক্ষ / পরিচালক
        },
        contact_number: {
            type: String,
            required: [true, 'যোগাযোগের নম্বর আবশ্যক'],
        },
        email: {
            type: String,
            default: '',
        },
        website: {
            type: String,
            default: '',
        },
        logo: {
            type: String,
            default: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=300',
        },
        cover_image: {
            type: String,
            default: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
        },
        description: {
            type: String,
            default: '',
        },
        subcategory: {
            type: String,
            default: 'স্কুল', // স্কুল / কলেজ / মাদ্রাসা / কোচিং সেন্টার / প্রশিক্ষণ কেন্দ্র
        },
        rating: {
            type: Number,
            default: 4.9,
        },
        reviewCount: {
            type: Number,
            default: 50,
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

const School = mongoose.models.School || mongoose.model('School', schoolSchema);

export default School;
