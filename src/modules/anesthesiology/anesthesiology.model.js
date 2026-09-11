import mongoose from 'mongoose';

const anesthesiologySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Anesthesiologist name is required'],
            trim: true,
        },
        title: {
            type: String,
            required: [true, 'Title is required'],
            trim: true,
        },
        degree: {
            type: String,
            required: [true, 'Degree is required'],
            trim: true,
        },
        speciality: {
            type: String,
            required: [true, 'Speciality is required'],
            trim: true,
        },
        workplace: {
            type: String,
            required: [true, 'Workplace is required'],
            trim: true,
        },
        chamber: {
            type: String,
            required: [true, 'Chamber/Hospital is required'],
            trim: true,
        },
        address: {
            type: String,
            required: [true, 'Address is required'],
            trim: true,
        },
        upazila: {
            type: String,
            required: [true, 'Upazila is required'],
            trim: true,
        },
        phone: {
            type: String,
            required: [true, 'Phone number is required'],
            trim: true,
        },
        serialPhone: {
            type: String,
            trim: true,
        },
        visitingHours: {
            type: String,
            required: [true, 'Visiting hours/OT availability is required'],
            trim: true,
        },
        offDay: {
            type: String,
            default: 'জরুরি সেবা ২৪/৭',
        },
        fee: {
            type: String,
            required: [true, 'Consultation/Anesthesia Fee is required'],
        },
        experience: {
            type: String,
            default: '৫+ বছর',
        },
        services: [
            {
                type: String,
            },
        ],
        rating: {
            type: Number,
            default: 4.8,
        },
        reviewCount: {
            type: Number,
            default: 15,
        },
        image: {
            type: String,
            default: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400',
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

const Anesthesiology = mongoose.models.Anesthesiology || mongoose.model('Anesthesiology', anesthesiologySchema);

export default Anesthesiology;
