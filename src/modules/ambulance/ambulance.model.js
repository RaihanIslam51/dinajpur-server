import mongoose from 'mongoose';

const ambulanceSchema = new mongoose.Schema(
    {
        vehicle_name: {
            type: String,
            required: [true, 'গাড়ির নাম আবশ্যক'],
            trim: true,
        },
        brand: {
            type: String,
            required: [true, 'ব্র্যান্ড নাম আবশ্যক'],
            trim: true,
        },
        model: {
            type: String,
            required: [true, 'মডেল বিবরণ আবশ্যক'],
            trim: true,
        },
        registration_no: {
            type: String,
            required: [true, 'রেজিস্ট্রেশন নম্বর আবশ্যক'],
            trim: true,
        },
        with_driver: {
            type: Boolean,
            default: true,
        },
        driver_name: {
            type: String,
            default: '',
            trim: true,
        },
        driver_contact: {
            type: String,
            default: '',
            trim: true,
        },
        rent_per_day: {
            type: Number,
            required: [true, 'দৈনিক ভাড়া আবশ্যক'],
        },
        rent_per_km: {
            type: Number,
            default: null,
        },
        rent_per_hour: {
            type: Number,
            default: null,
        },
        advance_amount: {
            type: Number,
            default: null,
        },
        address: {
            type: String,
            required: [true, 'ঠিকানা বা অবস্থান আবশ্যক'],
            trim: true,
        },
        upazila: {
            type: String,
            default: 'দিনাজপুর সদর',
            trim: true,
        },
        district: {
            type: String,
            default: 'দিনাজপুর',
            trim: true,
        },
        latitude: {
            type: Number,
            default: null,
        },
        longitude: {
            type: Number,
            default: null,
        },
        contact_number: {
            type: String,
            required: [true, 'যোগাযোগের নম্বর আবশ্যক'],
            trim: true,
        },
        photo: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        subcategory: {
            type: String,
            default: 'আইসিইউ অ্যাম্বুলেন্স',
        },
        serviceType: {
            type: String,
            default: 'আইসিইউ অ্যাম্বুলেন্স',
        },
        rating: {
            type: Number,
            default: 5.0,
        },
        reviewCount: {
            type: Number,
            default: 1,
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

const Ambulance = mongoose.models.Ambulance || mongoose.model('Ambulance', ambulanceSchema);

export default Ambulance;
