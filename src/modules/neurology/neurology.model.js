import mongoose from 'mongoose';

const neurologySchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    degrees: { type: String, default: '' },
    hospitalAffiliation: { type: String, default: '' },
    phone: { type: String, required: true, trim: true },
    alternatePhone: { type: String, default: '', trim: true },
    photo: { type: String, default: '' },
    serviceType: { 
        type: String, 
        required: true,
        enum: [
            'নিউরোলজি & স্নায়ুরোগ বিশেষজ্ঞ',
            'নিউরোসার্জারি (Brain & Spine Surgeon) বিশেষজ্ঞ',
            'স্ট্রোক (Stroke) & ব্রেইন প্যারালাইসিস পুনর্বাসন',
            'মৃগীরোগ (Epilepsy) & মাথাব্যথা (Migraine) ক্লিনিক',
            'ডিজিটাল ইইজি (EEG) & নার্ভ কন্ডাকশন (NCV) ল্যাব'
        ],
        default: 'নিউরোলজি & স্নায়ুরোগ বিশেষজ্ঞ'
    },
    experienceYears: { type: Number, default: 0 },
    specialties: [{ type: String }],
    visitingFee: { type: Number, default: 0 },
    chamberTime: { type: String, default: '' },
    district: { type: String, default: 'দিনাজপুর' },
    upazila: { type: String, required: true },
    address: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
    description: { type: String, default: '' },
    workSampleImages: [{ type: String }],
    status: { 
        type: String, 
        enum: ['pending', 'approved', 'rejected'], 
        default: 'approved' 
    }
}, { timestamps: true });

export default mongoose.model('Neurology', neurologySchema);
