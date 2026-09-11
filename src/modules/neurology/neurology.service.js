import mongoose from 'mongoose';
import Neurology from './neurology.model.js';

export const INITIAL_NEUROLOGY_SEED = [
    {
        name: 'ডাঃ প্রফেসর মোঃ তৌহিদুল ইসলাম (নিউরোলজি বিশেষজ্ঞ)',
        degrees: 'MBBS, MD (Neurology - BSMMU), FCPS (Medicine), Fellow (Interventional Neurology)',
        hospitalAffiliation: 'প্রফেসর & বিভাগীয় প্রধান (নিউরোলজি বিভাগ), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01715-334455',
        alternatePhone: '01818-667788',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'নিউরোলজি & স্নায়ুরোগ বিশেষজ্ঞ',
        experienceYears: 22,
        specialties: [
            'স্ট্রোক, মেধা হ্রাস ও ব্রেইন প্যারালাইসিস স্থায়ী পুনর্বাসন',
            'মাইগ্রেন, ক্রনিক মাথাব্যথা ও মাথা ঘোরা (Vertigo) চিকিৎসা',
            'মৃগীরোগ (Epilepsy) ও খিঁচুনি রোগীদের আধুনিক নিউরো কেয়ার'
        ],
        visitingFee: 900,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, দিনাজপুর নিউরো & স্পাইন কেয়ার সেন্টার (৩য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '২২ বছরের অভিজ্ঞ সিনিয়র স্নায়ুরোগ ও নিউরোলজি বিশেষজ্ঞ চিকিৎসক। ব্রেইন ও নার্ভের জটিল রোগীদের আন্তর্জাতিক মানের চিকিৎসাসেবা।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর সেন্ট্রাল নিউরোসাইন্স & ইইজি (EEG) সেন্টার',
        degrees: 'ডিজিটাল কম্পিউটারাইজড ইইজি, এনসিভি (NCV) & ব্রেইন ম্যাপিং ল্যাব',
        hospitalAffiliation: 'দিনাজপুর ব্রেইন & স্পাইন ইন্সটিটিউট',
        phone: '01739-223344',
        alternatePhone: '01919-990011',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডিজিটাল ইইজি (EEG) & নার্ভ কন্ডাকশন (NCV) ল্যাব',
        experienceYears: 16,
        specialties: [
            '২৪ ঘণ্টা ব্রেইন ওয়েভ ট্র্যাকিং ইইজি (Digital EEG)',
            'হাত-পা ঝিঁঝিঁ করা ও অসাড়তায় নার্ভ কন্ডাকশন ভেলোসিটি (NCV)',
            'ইএমজি (EMG) ও নার্ভ স্ট্রাকচারাল পরীক্ষা'
        ],
        visitingFee: 700,
        chamberTime: 'সকাল ৮:৩০ - রাত ৯:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'জেল রোড, নিউরো টাওয়ার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'স্নায়ুরোগের নিখুঁত ইইজি ও এনসিভি ডায়াগনস্টিক পরীক্ষার দিনাজপুর জেলার সর্বাধুনিক কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ মোসাঃ রোকসানা আকতার (নিউরোসার্জন)',
        degrees: 'MBBS, MS (Neuro-Surgery - BSMMU)',
        hospitalAffiliation: 'সহযোগী অধ্যাপক (নিউরোসার্জারি), এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01831-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'নিউরোসার্জারি (Brain & Spine Surgeon) বিশেষজ্ঞ',
        experienceYears: 14,
        specialties: [
            'মেরুদণ্ডে ব্যথার মাইক্রো-ডিস্কেক্টমি ও স্পাইন সার্জারি',
            'ব্রেইন টিউমার ও মাথায় আঘাতপ্রাপ্ত (Head Injury) জরুরি অস্ত্রোপচার',
            'হাইড্রোসেফালাস (Hydrocephalus) শান্ট সার্জারি'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর, ব্রেইন & স্পাইন চেম্বার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'মেরুদণ্ডের ডিস্ক প্রোল্যাপ্স (PLID) ও ব্রেইন সার্জারির অভিজ্ঞ নারী নিউরোসার্জন।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ নিউরো ফার্স্ট এইড & স্ট্রোক কেয়ার',
        degrees: 'স্নায়ুরোগ ও স্ট্রোক প্রাথমিক চিকিৎসা সেন্টার',
        hospitalAffiliation: 'বীরগঞ্জ রয়েল নিউরো ডায়াগনস্টিক',
        phone: '01751-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'স্ট্রোক (Stroke) & ব্রেইন প্যারালাইসিস পুনর্বাসন',
        experienceYears: 11,
        specialties: [
            'স্ট্রোক পরবর্তী মুখ বেঁকে যাওয়া ও পক্ষাঘাতের চিকিৎসা',
            'ব্রেইন কেয়ার ইসিজি ও ব্লাড প্রেসার সাপোর্ট',
            'প্যারালাইসিস রিকভারি থেরাপি গাইড'
        ],
        visitingFee: 600,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ জিরো পয়েন্ট, মেইন রোড, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জে দ্রুততম সময়ে স্ট্রোকের প্রাথমিক ওষুধ ও নিউরোলজিস্টের নিয়মিত পরামর্শ কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর স্পাইন & নিউরো কেয়ার চেম্বার',
        degrees: 'MBBS, D-CARD, PGT (Neurology)',
        hospitalAffiliation: 'সিনিয়র নিউরো কনসালটেন্ট, পার্বতীপুর জংশন হাসপাতাল',
        phone: '01931-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মৃগীরোগ (Epilepsy) & মাথাব্যথা (Migraine) ক্লিনিক',
        experienceYears: 13,
        specialties: [
            'মাইগ্রেন ও ঘাড়ের স্নায়ুর ব্যথার দীর্ঘস্থায়ী সমাধান',
            'হাতে-পায়ে কামড়ানো ও জ্বালাপোড়া করার নার্ভ থেরাপি',
            'পারকিনসন্স (Parkinson\'s) রোগ ও হাত কাঁপা চিকিৎসা'
        ],
        visitingFee: 600,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর বাসস্ট্যান্ড মোড়, স্পাইন কেয়ার, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে নিউরোলজিক্যাল জটিলতায় ভোগা রোগীদের নির্ভুল পরামর্শ ও সুচিকিৎসা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী সানরাইজ নিউরোলজি চেম্বার',
        degrees: 'MBBS, MD (Neurology Course)',
        hospitalAffiliation: 'কনসালটেন্ট (নিউরোলজি), ফুলবাড়ী জেনারেল ক্লিনিক',
        phone: '01762-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'নিউরোলজি & স্নায়ুরোগ বিশেষজ্ঞ',
        experienceYears: 10,
        specialties: [
            'হঠাৎ মাথা চক্কর দেওয়া ও চোখে অন্ধকার দেখা সমাধান',
            'ঘুম না হওয়া (Insomnia) ও মানসিক অস্থিরতা যত্ন',
            'স্নায়ুর ইনজেকশন ও নার্ভ ড্রপস'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, নিউরো স্পেশালিস্ট পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে সাধারণ ও জটিল স্নায়ুরোগীদের নির্ভরযোগ্য আধুনিক চিকিৎসা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ নিউরো & নার্ভ কেয়ার Point',
        degrees: 'স্নায়ুরোগ প্রাথমিক পর্যবেক্ষণ কেন্দ্র',
        hospitalAffiliation: 'নবাবগঞ্জ হেলথ সেন্টার',
        phone: '01843-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মৃগীরোগ (Epilepsy) & মাথাব্যথা (Migraine) ক্লিনিক',
        experienceYears: 8,
        specialties: [
            'মাথাব্যথা কমানোর ঘরোয়া ও মেডিকেল টিপস',
            'খিঁচুনি হলে করণীয় সতর্কতা গাইড',
            'স্নায়ু সচল রাখার ডায়েট চার্ট'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে কম খরচে স্নায়ু রোগ ও মাথাব্যথার প্রাথমিক রোগী ব্যবস্থাপনা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ নিউরো সেবা কেন্দ্র',
        degrees: 'MBBS, D-Neuro',
        hospitalAffiliation: 'সিনিয়র নিউরোলজি কনসালটেন্ট, সেতাবগঞ্জ ডায়াগনস্টিক',
        phone: '01953-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'নিউরোলজি & স্নায়ুরোগ বিশেষজ্ঞ',
        experienceYears: 12,
        specialties: [
            'বয়স্কদের ভুলে যাওয়া (Dementia/Alzheimer\'s) রোগ পরিচর্যা',
            'শিরদাঁড়া ও কোমরে রগ টানের চিকিৎসা',
            'প্যারালাইসিস রোগীদের পুনর্বাসন পরামর্শ'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ পৌর মার্কেট, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে প্রখ্যাত নিউরোলজিস্ট দ্বারা রগ ও স্নায়ু সমস্যার সঠিক সমাধান।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর নিউরো ফার্স্ট এইড পয়েন্ট',
        degrees: 'স্নায়ুরোগ পরামর্শ ও ইইজি সহায়িকা',
        hospitalAffiliation: 'চিরিরবন্দর হেলথ সেন্টার',
        phone: '01773-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'স্ট্রোক (Stroke) & ব্রেইন প্যারালাইসিস পুনর্বাসন',
        experienceYears: 7,
        specialties: [
            'স্ট্রোক লক্ষণ দেখা মাত্র প্রাথমিক পদক্ষেপ গাইড',
            'মাথাব্যথার ওষুধের সঠিক ব্যবহার',
            'মেডিক্যাল কলেজ নিউরোলজি ব্লকে জরুরি রেফারেল'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ৯:০০ - রাত ৯:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে সাশ্রয়ী খরচে স্নায়ুরোগীদের প্রাথমিক পরামর্শ ও দ্রুত সহায়তা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট নিউরো & স্পাইন সেন্টার',
        degrees: 'MBBS, PGT (Neurology)',
        hospitalAffiliation: 'ঘোড়াঘাট ডায়াগনস্টিক অ্যান্ড নিউরো কেয়ার',
        phone: '01863-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'নিউরোসার্জারি (Brain & Spine Surgeon) বিশেষজ্ঞ',
        experienceYears: 9,
        specialties: [
            'কোমর ব্যথার স্পাইনাল বেল্ট ও থেরাপি পরামর্শ',
            'খিঁচুনি নিরোধক ওষুধ প্রয়োগ ও ফলোআপ',
            'মাথার দীর্ঘমেয়াদী স্ক্যান পর্যালোচনা'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শনি ও মঙ্গলবার)',
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট জিরো পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে অভিজ্ঞ চিকিৎসক দ্বারা স্নায়ু ও মেরুদণ্ডের ব্যথার আধুনিক চিকিৎসা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল কান্তনগর নিউরো সেবা চেম্বার',
        degrees: 'স্নায়ুরোগ প্রাথমিক পরামর্শ কেন্দ্র',
        hospitalAffiliation: 'কাহারোল সেবা ডিজিটাল ল্যাব',
        phone: '01954-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'নিউরোলজি & স্নায়ুরোগ বিশেষজ্ঞ',
        experienceYears: 6,
        specialties: [
            'মাথা ব্যথা ও মাথা ঘোরার প্রাথমিক পর্যবেক্ষণ',
            'স্নায়ু শক্তিশালী রাখার ভিটামিন বি চার্ট',
            'জরুরি রেফারেন্স নির্দেশিকা'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ১০:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে সাধারণ ও বয়স্ক রোগীদের জন্য সাশ্রয়ী স্নায়ুরোগ সেবা চেম্বার।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const seedNeurologyData = async () => {
    try {
        const count = await Neurology.countDocuments();
        if (count === 0) {
            await Neurology.insertMany(INITIAL_NEUROLOGY_SEED);
            console.log('✅ Neurology Module pre-populated with 11 initial seed entries');
        }
    } catch (err) {
        console.error('⚠️ Failed to seed Neurology module:', err);
    }
};

export const getNeurologyServices = async (filter = {}) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            return INITIAL_NEUROLOGY_SEED;
        }
        await seedNeurologyData();
        const data = await Neurology.find(filter).sort({ createdAt: -1 });
        if (!data || data.length === 0) {
            return INITIAL_NEUROLOGY_SEED;
        }
        return data;
    } catch (err) {
        console.error('getNeurologyServices error:', err);
        return INITIAL_NEUROLOGY_SEED;
    }
};

export const getNeurologyServiceById = async (id) => {
    return await Neurology.findById(id);
};

export const createNeurologyService = async (data) => {
    return await Neurology.create(data);
};

export const updateNeurologyService = async (id, data) => {
    return await Neurology.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteNeurologyService = async (id) => {
    return await Neurology.findByIdAndDelete(id);
};
