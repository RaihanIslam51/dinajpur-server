import mongoose from 'mongoose';

const orthopedicsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    degrees: {
        type: String,
        required: true
    },
    hospitalAffiliation: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        required: true
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
        required: true,
        default: 'অর্থোপেডিক & ট্রমা সার্জন'
    },
    experienceYears: {
        type: Number,
        default: 5
    },
    specialties: [{
        type: String
    }],
    visitingFee: {
        type: Number,
        default: 800
    },
    chamberTime: {
        type: String,
        default: 'বিকাল ৪:০০ - রাত ৮:০০'
    },
    district: {
        type: String,
        default: 'দিনাজপুর'
    },
    upazila: {
        type: String,
        required: true,
        default: 'দিনাজপুর সদর'
    },
    address: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        default: ''
    },
    workSampleImages: [{
        type: String
    }],
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'approved'
    }
}, {
    timestamps: true
});

const Orthopedics = mongoose.models.Orthopedics || mongoose.model('Orthopedics', orthopedicsSchema);

export default Orthopedics;
