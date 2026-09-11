import Obstetrics from './obstetrics.model.js';

export const INITIAL_OBSTETRICS_SEED = [
    {
        name: 'ডাঃ প্রফেসর মোসাঃ সুলতানা পারভীন (গর্ভধারণ ও প্রসূতি বিশেষজ্ঞ)',
        degrees: 'MBBS, FCPS (OBGYN), MS (Maternal Fetal Medicine - DU), Fellow (Infertility)',
        hospitalAffiliation: 'প্রফেসর & বিভাগীয় প্রধান (গাইনি ও প্রসূতি বিভাগ), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01712-334455',
        alternatePhone: '01819-667788',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'গর্ভধারণ & গাইনি-প্রসূতি বিশেষজ্ঞ সার্জন',
        experienceYears: 22,
        specialties: [
            'গর্ভধারণ পূর্ব প্রস্তুতি ও গর্ভকালীন নিয়মিত চেকআপ (ANC Care)',
            'হাই-রিস্ক প্রেগন্যান্সি ও গর্ভপাত রোধে বিশেষায়িত চিকিৎসা',
            'নরমাল ডেলিভারি মোটিভেশন ও পেইনলেস ডেলিভারি ব্যবস্থা'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, দিনাজপুর মাদার & ফার্টিলিটি স্পেশালিস্ট হাসপাতাল, দিনাজপুর সদর',
        isAvailable: true,
        description: '২২ বছরের অভিজ্ঞ প্রখ্যাত গর্ভধারণ, গর্ভকালীন যত্ন ও নিরাপদ প্রসূতি বিশেষজ্ঞ চিকিৎসক।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর সেন্ট্রাল ম্যাটারনিটি & ৪ডি আল্ট্রাসাউন্ড সেন্টার',
        degrees: 'বিশেষায়িত গর্ভাবস্থা স্ক্রিনিং, ফিটাল হার্ট মনিটরিং (CTG) & গর্ভজাত শিশু কেয়ার',
        hospitalAffiliation: 'দিনাজপুর মাদার & চাইল্ড কেয়ার হাসপাতাল',
        phone: '01735-990011',
        alternatePhone: '01918-445566',
        photo: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
        serviceType: '৪ডি আল্ট্রাসনোগ্রাফি & ফিটাল মেডিসিন ক্লিনিক',
        experienceYears: 18,
        specialties: [
            'কালার ডপলার & ৪ডি আল্ট্রাসাউন্ড ভ্রূণ বৃদ্ধি পরীক্ষা',
            'গর্ভবতী মায়েদের ২৪/৭ জরুরি নরমাল ডেলিভারি ওয়ার্ড',
            'গর্ভকালীন ডায়াবেটিস (GDM) ও উচ্চ রক্তচাপ ব্যবস্থাপনা'
        ],
        visitingFee: 600,
        chamberTime: '২৪ ঘণ্টা জরুরি ডেলিভারি ও পরীক্ষা (সকাল ৮:০০ - রাত ৯:০০ চেম্বার)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'হাসপাতাল রোড, ডায়াবেটিক হাসপাতালের বিপরীতে, দিনাজপুর সদর',
        isAvailable: true,
        description: 'গর্ভাবস্থার প্রথম মাস থেকে প্রসব পর্যন্ত আধুনিক আল্ট্রাসাউন্ড ও নিরাপদ মাতৃত্ব সেবা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ শামিমা নাসরিন (হাই-রিস্ক প্রেগন্যান্সি বিশেষজ্ঞ)',
        degrees: 'MBBS, DGO, MCPS (OBGYN), Trained in Fetal Echocardiography',
        hospitalAffiliation: 'কনসালটেন্ট (প্রসূতিবিদ্যা), দিনাজপুর জেনারেল হাসপাতাল',
        phone: '01828-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
        serviceType: 'হাই-রিস্ক প্রেগন্যান্সি & ম্যাটারনিটি কেয়ার',
        experienceYears: 15,
        specialties: [
            'বারবার গর্ভপাত (Recurrent Miscarriage) রোগীদের সফল চিকিৎসা',
            'গর্ভ ফুল নিচে থাকা (Placenta Previa) ও একলাম্পসিয়া প্রতিরোধ',
            'জমজ সন্তান গর্ভধারণে নিবিড় পর্যবেক্ষণ'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর, মাদার কেয়ার চেম্বার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'জটিল ও ঝুঁকিপূর্ণ গর্ভাবস্থায় মা ও অনাগত শিশুর সুরক্ষায় অভিজ্ঞ কনসালটেন্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ নরমাল ডেলিভারি & ম্যাটারনিটি হোম',
        degrees: 'অভিজ্ঞ প্রসূতি সার্জন ও সার্টিফাইড মিডওয়াইফ টিম',
        hospitalAffiliation: 'বীরগঞ্জ রয়েল ম্যাটারনিটি সেন্টার',
        phone: '01748-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'স্বাভাবিক প্রসব (Normal Delivery) & নরমাল ডেলিভারি সেন্টার',
        experienceYears: 12,
        specialties: [
            'ব্যথামুক্ত ও ভীতিহীন উপায়ে স্বাভাবিক ডেলিভারি সহায়তা',
            'গর্ভকালীন পুষ্টি ও ব্যায়ামের বিশেষ পরামর্শ',
            'প্রসব পরবর্তী মা ও নবজাতকের যত্ন (PNC Care)'
        ],
        visitingFee: 500,
        chamberTime: '২৪ ঘণ্টা খোলা (ডেলিভারি ইউনিট)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ জিরো পয়েন্ট, নতুন বাসস্ট্যান্ড মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জে সিজার ছাড়াই নিরাপদ নরমাল প্রসব নিশ্চিতকরণে বিশ্বস্ত কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ ফারহানা ইয়াসমিন (বন্ধ্যাত্ব ও গর্ভধারণ পরামর্শক)',
        degrees: 'MBBS, FCPS (OBGYN), Diploma in Infertility & IVF (India)',
        hospitalAffiliation: 'সহকারী অধ্যাপক (গাইনি ও প্রসূতি), এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01928-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
        serviceType: 'বন্ধ্যাত্ব (Infertility) & গর্ভধারণ প্রস্তুতি কনসালটেন্ট',
        experienceYears: 14,
        specialties: [
            'দীর্ঘদিন সন্তান না হওয়া দম্পতিদের আধুনিক ইনফার্টিলিটি চিকিৎসা',
            'পলিকোনো ডিম্বাশয় (PCOS) ও হরমোনাল জটিলতায় সন্তান ধারণে সহায়তা',
            'ফলিকুলার ট্র্যাকিং (Follicular Study) ও ওভুলেশন মোটিভেশন'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর বাসস্ট্যান্ড মোড়, উইমেন হেলথ কেয়ার, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে সন্তান গ্রহণে ইচ্ছুক দম্পতিদের বিজ্ঞানসম্মত ইনফার্টিলিটি গাইডলাইন।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী সানরাইজ প্রসূতি & গর্ভাবস্থা চেম্বার',
        degrees: 'MBBS, DGO (DU)',
        hospitalAffiliation: 'কনসালটেন্ট (গাইনি ও প্রসূতি), ফুলবাড়ী জেনারেল ক্লিনিক',
        phone: '01759-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'গর্ভধারণ & গাইনি-প্রসূতি বিশেষজ্ঞ সার্জন',
        experienceYears: 11,
        specialties: [
            'গর্ভকালের প্রথম ৩ মাসের বমি ও শারীরিক দুর্বলতা সমাধান',
            'জরুরি সিজারিয়ান সেকশন (C-Section) অস্ত্রোপচার',
            'টিটেনাস (TT) ও গর্ভাবস্থার প্রয়োজনীয় ভ্যাকসিনেশন'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, মাদার অ্যান্ড চাইল্ড ক্লিনিক, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে গর্ভবতী মায়েদের নিয়মিত স্বাস্থ্য পরীক্ষা ও প্রসবকালীন সেবা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ ম্যাটারনিটি & প্রেগন্যান্সি Point',
        degrees: 'গর্ভধারণ প্রাথমিক পর্যবেক্ষণ ও মিডওয়াইফারি ক্লিনিক',
        hospitalAffiliation: 'নবাবগঞ্জ হেলথ সেন্টার',
        phone: '01839-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
        serviceType: 'স্বাভাবিক প্রসব (Normal Delivery) & নরমাল ডেলিভারি সেন্টার',
        experienceYears: 9,
        specialties: [
            'প্রেগন্যান্সি স্ট্রিপ টেস্ট ও গর্ভাবস্থা নিশ্চিতকরণ',
            'গর্ভবতী মায়েদের আয়রন, ক্যালসিয়াম ও ফলিক এসিড ডায়েট',
            'প্রসবের সম্ভাব্য তারিখ (EDD) নির্ণয়'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে সাশ্রয়ী খরচে গর্ভবতী মায়েদের প্রাথমিক পরামর্শ ও প্রসূতি সহায়তা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ প্রেগন্যান্সি কেয়ার',
        degrees: 'MBBS, MCPS (OBGYN)',
        hospitalAffiliation: 'সিনিয়র স্পেশালিস্ট (প্রসূতি বিদ্যা), সেতাবগঞ্জ ডায়াগনস্টিক',
        phone: '01949-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
        serviceType: 'গর্ভধারণ & গাইনি-প্রসূতি বিশেষজ্ঞ সার্জন',
        experienceYears: 13,
        specialties: [
            'গর্ভবতী মায়েদের রক্তস্বল্পতা (Anemia) নিরাময়ে স্যালাইন ও রক্ত পরিচালনা',
            'পানি কমে যাওয়া (Oligohydramnios) সমস্যার তাৎক্ষণিক যত্ন',
            'প্রসব পরবর্তী রক্তক্ষরণ (PPH) রোধে প্রাক প্রস্তুতি'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ পৌর মার্কেট, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে গর্ভধারণকালীন প্রতিটি ধাপের জন্য নির্ভরযোগ্য গাইনি-প্রসূতি ডাক্তার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর প্রেগন্যান্সি ফার্স্ট এইড পয়েন্ট',
        degrees: 'গর্ভকালীন প্রাথমিক সেবা ও পুষ্টি পরামর্শ কেন্দ্র',
        hospitalAffiliation: 'চিরিরবন্দর হেলথ সেন্টার',
        phone: '01769-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'হাই-রিস্ক প্রেগন্যান্সি & ম্যাটারনিটি কেয়ার',
        experienceYears: 8,
        specialties: [
            'গর্ভবতী মায়েদের প্রেসার ও সুগার নিয়মিত রেকর্ড রাখা',
            'গর্ভের শিশুর নড়াচড়া গণনার প্রশিক্ষণ',
            'প্রসবের জন্য জরুরী ব্লাড ডোনার ব্যবস্থা গাইড'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ৯:০০ - রাত ৯:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে গর্ভবতী মা ও অনাগত শিশুর জন্য প্রয়োজনীয় জরুরি সহায়তা ও পরামর্শ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট মা ও শিশু গর্ভধারণ ক্লিনিক',
        degrees: 'MBBS, PGT (OBGYN)',
        hospitalAffiliation: 'ঘোড়াঘাট ডায়াগনস্টিক অ্যান্ড প্রসূতি কেয়ার',
        phone: '01859-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
        serviceType: 'গর্ভধারণ & গাইনি-প্রসূতি বিশেষজ্ঞ সার্জন',
        experienceYears: 10,
        specialties: [
            'গর্ভকালীন পায়ে পানি আসা ও প্রস্রাবের ইনফেকশন নিরাময়',
            'স্বাভাবিক প্রসবের জন্য পেলভিক এক্সারসাইজ দিকনির্দেশনা',
            'সিজারিয়ান সেকশনের সঠিক সিদ্ধান্ত প্রদান'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শনি ও মঙ্গলবার)',
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট জিরো পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে গর্ভকালীন সুস্থতা ও নিরাপদ সন্তান প্রসূতি সেবা চেম্বার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল কান্তনগর প্রসূতি সেবা চেম্বার',
        degrees: 'গর্ভধারণ প্রাথমিক পর্যবেক্ষণ কেন্দ্র',
        hospitalAffiliation: 'কাহারোল সেবা ডিজিটাল ল্যাব',
        phone: '01948-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
        serviceType: 'স্বাভাবিক প্রসব (Normal Delivery) & নরমাল ডেলিভারি সেন্টার',
        experienceYears: 7,
        specialties: [
            'গর্ভবতী মায়ের রক্তের গ্রুপ ও হিমোগ্লোবিন পরীক্ষা পরামর্শ',
            'প্রসব বেদনা শুরু হলে তাৎক্ষণিক প্রাথমিক পদক্ষেপ',
            'নবজাতকের প্রথম দুধ (শালদুধ) পানের শিক্ষা'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ১০:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে সাশ্রয়ী খরচে গর্ভবতী মা ও নতুন প্রসূতিদের বিশ্বস্ত চিকিৎসাসেবা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const seedObstetricsData = async () => {
    try {
        const count = await Obstetrics.countDocuments();
        if (count === 0) {
            await Obstetrics.insertMany(INITIAL_OBSTETRICS_SEED);
            console.log('✅ Obstetrics Module pre-populated with 11 initial seed entries');
        }
    } catch (err) {
        console.error('⚠️ Failed to seed Obstetrics module:', err);
    }
};

export const getObstetricsServices = async (filter = {}) => {
    return await Obstetrics.find(filter).sort({ createdAt: -1 });
};

export const getObstetricsServiceById = async (id) => {
    return await Obstetrics.findById(id);
};

export const createObstetricsService = async (data) => {
    return await Obstetrics.create(data);
};

export const updateObstetricsService = async (id, data) => {
    return await Obstetrics.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteObstetricsService = async (id) => {
    return await Obstetrics.findByIdAndDelete(id);
};
