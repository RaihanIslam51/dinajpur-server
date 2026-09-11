import Nephrology from './nephrology.model.js';

export const INITIAL_NEPHROLOGY_SEED = [
    {
        name: 'ডাঃ প্রফেসর মোঃ শরিফুল ইসলাম (কিডনি রোগ বিশেষজ্ঞ)',
        degrees: 'MBBS, MD (Nephrology - BSMMU), FCPS (Medicine), Fellow (Kidney Dialysis - India)',
        hospitalAffiliation: 'প্রফেসর & বিভাগীয় প্রধান (নেফ্রোলজি বিভাগ), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01714-223344',
        alternatePhone: '01820-556677',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'কিডনি রোগ বিশেষজ্ঞ & নেফ্রোলজিস্ট',
        experienceYears: 21,
        specialties: [
            'ক্রনিক কিডনি ডিজিজ (CKD) ও রক্তে ক্রিয়েটিনিন নিয়ন্ত্রণ',
            'ডায়াবেটিক নেফ্রোপ্যাথি ও উচ্চ রক্তচাপজনিত কিডনি রোগ নিরাময়',
            'প্রস্রাবে অ্যালবামিন বা প্রোটিন ক্ষয় কমানোর বিশেষায়িত গাইডলাইন'
        ],
        visitingFee: 900,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, দিনাজপুর নেফ্রোলজি & ডায়ালিসিস সেন্টার (২য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '২১ বছরের অভিজ্ঞ প্রখ্যাত কিডনি রোগ specialist চিকিৎসক। ক্রিয়েটিনিন কমানো, প্রোটিন ক্ষয় ও ডায়ালাইসিস বিলম্বিত করার আধুনিক চিকিৎসা।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর সেন্ট্রাল কিডনি ডায়ালাইসিস & কেয়ার সেন্টার',
        degrees: '২৪/৭ অটোমেটেড কিডনি ডায়ালাইসিস ও এভি ফিস্টুলা (AV Fistula) ল্যাব',
        hospitalAffiliation: 'দিনাজপুর কিডনি ফাউন্ডেশন ট্রাস্ট',
        phone: '01738-112233',
        alternatePhone: '01917-889900',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডায়ালাইসিস সেন্টার & কিডনি ডায়ালাইসিস ইউনিট',
        experienceYears: 17,
        specialties: [
            '২৪ ঘণ্টা হেপাটাইটিস বি/সি মুক্ত আলাদা ডায়ালাইসিস মেশিন',
            'এভি ফিস্টুলা (AV Fistula) সার্জারি ও ক্যাথিটার যত্ন',
            'জরুরি কিডনি ফেলিউর আইসিইউ ডায়ালাইসিস সাপোর্টিং'
        ],
        visitingFee: 700,
        chamberTime: '২৪ ঘণ্টা ডায়ালাইসিস ও চেম্বার সকাল ৯:০০ - রাত ৯:০০',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'জেল রোড, কিডনি টাওয়ার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দিনাজপুরে বিশ্বমানের হাই-জেনিক ডায়ালাইসিস ইউনিট, অনলাইন হেমোডায়াফিলট্রেশন ও সাশ্রয়ী মূল্যে কিডনি কেয়ার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ রেজওয়ানা খন্দকার (নেফ্রোলজিস্ট)',
        degrees: 'MBBS, MD (Nephrology)',
        hospitalAffiliation: 'কনসালটেন্ট (কিডনি বিভাগ), দিনাজপুর জেনারেল হাসপাতাল',
        phone: '01830-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'কিডনি ফেলিউর (CKD & Acute Kidney Failure) কেয়ার',
        experienceYears: 13,
        specialties: [
            'হঠাৎ কিডনি অকেজো (Acute Kidney Injury) নিরাময়',
            'পা ও মুখ ফুলে যাওয়া এবং শরীরে পানি জমে থাকা চিকিৎসা',
            'কিডনি বায়োপসি (Kidney Biopsy) রিপোর্ট পর্যালোচনা'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর, নেফ্রো কেয়ার চেম্বার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'কিডনির কর্মক্ষমতা ধরে রাখা ও কিডনি ফেলিউর রোগীদের ডায়েট ও ওষুধের সুনির্দিষ্ট ব্যবস্থাপক।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ কিডনি & ডায়ালাইসিস পয়েন্ট',
        degrees: 'কিডনি রোগ প্রাথমিক ডায়াগনোসিস ও ডায়ালাইসিস সেন্টার',
        hospitalAffiliation: 'বীরগঞ্জ রয়েল নেফ্রো ডায়াগনস্টিক',
        phone: '01750-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডায়ালাইসিস সেন্টার & কিডনি ডায়ালাইসিস ইউনিট',
        experienceYears: 11,
        specialties: [
            'বীরগঞ্জ উপজেলায় হেমোডায়ালিসিস মেশিন সুবিধা',
            'রক্তে ইউরিয়া, ক্রিয়েটিনিন ও ইলেক্ট্রোলাইট পরীক্ষা',
            'কিডনি রোগীর ডায়েট চার্ট পরামর্শ'
        ],
        visitingFee: 600,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ জিরো পয়েন্ট, স্টেশন রোড, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জে কম খরচে নিয়মিত কিডনি রোগীদের ডায়ালাইসিস ও নেফ্রোলজি চিকিৎসকের পরামর্শ কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর নেফ্রোলজি & কিডনি কেয়ার চেম্বার',
        degrees: 'MBBS, D-CARD, PGT (Nephrology)',
        hospitalAffiliation: 'সিনিয়র নেফ্রো কনসালটেন্ট, পার্বতীপুর জংশন হাসপাতাল',
        phone: '01930-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'কিডনি ইনফেকশন & ক্রিয়েটিনিন নিয়ন্ত্রণ কনসালটেন্ট',
        experienceYears: 14,
        specialties: [
            'বারবার প্রস্রাবে ইনফেকশন ও কিডনি প্রদাহ নিরাময়',
            'উচ্চ রক্তচাপ নিয়ন্ত্রণে রেখে কিডনি সুরক্ষা',
            'গ্লোমেরুলোনেফ্রাইটিস (Glomerulonephritis) কমানো'
        ],
        visitingFee: 600,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর বাসস্ট্যান্ড মোড়, নেফ্রো কেয়ার, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে কিডনি সুরক্ষায় অভিজ্ঞ চিকিৎসকের পরামর্শ ও নিয়মিত চেকআপ সেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী কিডনি হেলথ সেন্টার',
        degrees: 'MBBS, MD (Nephrology Course)',
        hospitalAffiliation: 'কনসালটেন্ট (নেফ্রোলজি), ফুলবাড়ী জেনারেল ডায়াগনস্টিক',
        phone: '01761-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'কিডনি রোগ বিশেষজ্ঞ & নেফ্রোলজিস্ট',
        experienceYears: 10,
        specialties: [
            'কিডনি পাথরের কারণে ইউরিয়া বৃদ্ধি নিয়ন্ত্রণ',
            'প্রস্রাব কম হওয়া বা প্রস্রাবে ফেনা হওয়ার সমাধান',
            'কিডনি রোগীদের পটাশিয়াম ও সোডিয়াম ভারসাম্য'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, নেফ্রো ক্লিনিক, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে সাশ্রয়ী মূল্যে কিডনি ডায়াগনোসিস ও প্রাথমিক থেকে জটিল কিডনি রোগীর চিকিৎসা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ নেফ্রো & ইউরিনারি Point',
        degrees: 'কিডনি রোগ প্রাথমিক পর্যবেক্ষণ কেন্দ্র',
        hospitalAffiliation: 'নবাবগঞ্জ হেলথ সেন্টার',
        phone: '01842-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'কিডনি ইনফেকশন & ক্রিয়েটিনিন নিয়ন্ত্রণ কনসালটেন্ট',
        experienceYears: 8,
        specialties: [
            'সিরাম ক্রিয়েটিনিন ও ইউরিন ইএফআর টেস্ট পরামর্শ',
            'কিডনি সুস্থতায় দৈনিক পানি পান গাইড',
            'ব্যথানাশক ওষুধের পার্শ্বপ্রতিক্রিয়া মুক্ত রাখা'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে কিডনি সংক্রান্ত রোগী সনাক্তকরণ ও প্রয়োজনীয় প্রাথমিক স্বাস্থ্যসেবা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ কিডনি কেয়ার ক্লিনিক',
        degrees: 'MBBS, D-Neph',
        hospitalAffiliation: 'সিনিয়র নেফ্রোলজি কনসালটেন্ট, সেতাবগঞ্জ ডায়াগনস্টিক',
        phone: '01952-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'কিডনি রোগ বিশেষজ্ঞ & নেফ্রোলজিস্ট',
        experienceYears: 13,
        specialties: [
            'বয়স্ক কিডনি রোগীদের ডায়েট ও ফুড ক্যালকুলেশন',
            'হেমোডায়ালিসিস ডায়েট চার্ট',
            'ডায়াবেটিস নিয়ন্ত্রণে রেখে কিডনি ড্যামেজ রোধ'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ পৌর মার্কেট, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে কিডনি রোগের আধুনিক ওষুধ ও নিয়মিত পর্যবেক্ষণ চেম্বার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর কিডনি ফার্স্ট এইড পয়েন্ট',
        degrees: 'কিডনি সচেতনতা ও পরামর্শ কেন্দ্র',
        hospitalAffiliation: 'চিরিরবন্দর হেলথ সেন্টার',
        phone: '01772-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'কিডনি ইনফেকশন & ক্রিয়েটিনিন নিয়ন্ত্রণ কনসালটেন্ট',
        experienceYears: 7,
        specialties: [
            'কোমরের ডান/বাম পাশে কিডনি পয়েন্ট ব্যথার চেকআপ',
            'কিডনি পরীক্ষা (Urine R/M/E, Serum Creatinine)',
            'প্রস্রাবে রক্ত বা অ্যালবুমিন যাওয়ার ফার্স্ট এইড'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ৯:০০ - রাত ৯:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে সাশ্রয়ী খরচে কিডনি রোগ প্রাথমিক সনাক্তকরণ ও চিকিৎসা সুবিধা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট নেফ্রোলজি & কিডনি ডায়ালাইসিস সেন্টার',
        degrees: 'MBBS, PGT (Nephrology)',
        hospitalAffiliation: 'ঘোড়াঘাট ডায়াগনস্টিক অ্যান্ড নেফ্রো কেয়ার',
        phone: '01862-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডায়ালাইসিস সেন্টার & কিডনি ডায়ালাইসিস ইউনিট',
        experienceYears: 9,
        specialties: [
            'নিয়মিত কিডনি ডায়ালাইসিস সেশন',
            'ডায়ালাইসিস পরবর্তী দুর্বলতা ও এনিমিয়া সমাধান',
            'ব্লাড ট্রান্সফিউশন ব্যবস্থাপনা'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শনি ও মঙ্গলবার)',
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট জিরো পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে অভিজ্ঞ চিকিৎসক দ্বারা কিডনি ডায়ালাইসিস ও ওষুধ পরামর্শ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল কান্তনগর নেফ্রো সেবা চেম্বার',
        degrees: 'কিডনি পরামর্শ কেন্দ্র',
        hospitalAffiliation: 'কাহারোল সেবা ডিজিটাল ল্যাব',
        phone: '01953-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'কিডনি ইনফেকশন & ক্রিয়েটিনিন নিয়ন্ত্রণ কনসালটেন্ট',
        experienceYears: 6,
        specialties: [
            'উচ্চ রক্তচাপ রোগীদের কিডনি সুরক্ষায় চেকআপ',
            'লবণ ও পানি গ্রহণের সঠিক পরিমাপ শিক্ষা',
            'জরুরি রেফারেন্স সহায়তা'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ১০:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে সাধারণ ও প্রান্তিক কিডনি রোগীদের জন্য নির্ভরযোগ্য সেবা স্থান।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const seedNephrologyData = async () => {
    try {
        const count = await Nephrology.countDocuments();
        if (count === 0) {
            await Nephrology.insertMany(INITIAL_NEPHROLOGY_SEED);
            console.log('✅ Nephrology Module pre-populated with 11 initial seed entries');
        }
    } catch (err) {
        console.error('⚠️ Failed to seed Nephrology module:', err);
    }
};

export const getNephrologyServices = async (filter = {}) => {
    return await Nephrology.find(filter).sort({ createdAt: -1 });
};

export const getNephrologyServiceById = async (id) => {
    return await Nephrology.findById(id);
};

export const createNephrologyService = async (data) => {
    return await Nephrology.create(data);
};

export const updateNephrologyService = async (id, data) => {
    return await Nephrology.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteNephrologyService = async (id) => {
    return await Nephrology.findByIdAndDelete(id);
};
