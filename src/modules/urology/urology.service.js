import Urology from './urology.model.js';

const INITIAL_UROLOGY_DATA = [
    {
        name: 'ডাঃ প্রফেসর মোঃ শফিকুল আলম (ইউরো সার্জন)',
        degrees: 'MBBS, MS (Urology - DU), FCPS (Surgery), Fellow (Laser Endourology)',
        hospitalAffiliation: 'প্রফেসর & বিভাগীয় প্রধান (ইউরোলজি বিভাগ), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01714-334455',
        alternatePhone: '01820-667788',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ইউরোলজি সার্জন & কিডনি মূত্ররোগ বিশেষজ্ঞ',
        experienceYears: 20,
        specialties: [
            'লেজার দ্বারা কিডনি ও মূত্রনালীর পাথর গলানো (RIRP / URS / PCNL)',
            'প্রোস্টেট গ্রন্থি বৃদ্ধি (BPH) বিনা কাটাকাটিতে TURP অপারেশন',
            'মূত্রথলি ও কিডনি ক্যানসার স্ক্রিনিং ও সার্জারি'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, দিনাজপুর ইউরো-লেজার অ্যান্ড কিডনি কেয়ার সেন্টার (২য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '২০ বছরের অভিজ্ঞ প্রখ্যাত ইউরোলজিস্ট ও কিডনি-মূত্রনালী লেজার সার্জন ডাক্তার।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর ইউরোলজি & ডায়ালাইসিস ডায়াগনস্টিক সেন্টার',
        degrees: 'বিশেষায়িত ইউরো-ডায়নামিকস, আল্ট্রাসাউন্ড ও কিডনি ডায়ালাইসিস ল্যাব',
        hospitalAffiliation: 'দিনাজপুর সেন্ট্রাল ইউরোলজি অ্যান্ড নেফ্রোলজি হাসপাতাল',
        phone: '01738-990011',
        alternatePhone: '01917-445566',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'বিশেষায়িত ইউরোলজি & ডায়ালাইসিস সেন্টার',
        experienceYears: 17,
        specialties: [
            'কম্পিউটারাইজড ইউরোফ্লোমেট্রি (Uroflowmetry) প্রস্রাবের গতি পরীক্ষা',
            'আধুনিক ২৪/৭ জরুরি কিডনি ডায়ালাইসিস ও এভি ফিস্টুলা (AV Fistula)',
            'মূত্রথলির পাথর ভাঙার ব্যথমুক্ত শকওয়েভ লিথোট্রিপসি (ESWL)'
        ],
        visitingFee: 600,
        chamberTime: 'সকাল ৮:৩০ - দুপুর ২:০০ ও বিকাল ৪:৩০ - রাত ৯:০০',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'জেল রোড, ইউরো টাওয়ার (৩য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: 'প্রস্রাবের ধীর গতি, কিডনি পাথর, ডায়ালাইসিস ও ইউরোলজি অস্ত্রোপচারের সর্বাধুনিক সেন্টার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ রেজওয়ানা বেগম (মহিলা ও শিশু ইউরোলজি বিশেষজ্ঞ)',
        degrees: 'MBBS, MS (Urology - BSMMU)',
        hospitalAffiliation: 'কনসালটেন্ট (ইউরোলজি), দিনাজপুর জেনারেল হাসপাতাল',
        phone: '01830-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মহিলা & শিশু ইউরোলজি বিশেষজ্ঞ',
        experienceYears: 12,
        specialties: [
            'মহিলাদের হাঁচি-কাশিতে প্রস্রাব ঝরা (Stress Urinary Incontinence) স্থায়ী চিকিৎসা',
            'শিশুদের জন্মগত হাইপোস্পেডিয়াস (Hypospadias) ও অণ্ডকোষ নেমে না আসা',
            'বারবার প্রস্রাবে ইনফেকশন (Recurrent UTI) ও জ্বালাপোড়া নিরাময়'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর, চিলড্রেন & উইমেন ইউরো চেম্বার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'মহিলা ও শিশুদের কিডনি, প্রস্রাবের ধরণ ও ইউরোলজিক্যাল সমস্যার অভিজ্ঞ কনসালটেন্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ ইউরো কেয়ার & স্টোন পয়েন্ট',
        degrees: 'ইউরোলজি ও কিডনি পাথর চিকিৎসা চেম্বার',
        hospitalAffiliation: 'বীরগঞ্জ রয়েল ইউরো অ্যান্ড কিডনি ডায়াগনস্টিক',
        phone: '01750-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ইউরোলজি সার্জন & কিডনি মূত্ররোগ বিশেষজ্ঞ',
        experienceYears: 11,
        specialties: [
            'প্রস্রাবে রক্ত পড়া (Hematuria) ও কোমরে ব্যথার কিডনি পাথর পরীক্ষা',
            'প্রোস্টেট ব্যথার ওষুধ ও প্রস্রাব ক্লিয়ার ড্রপ',
            'জরুরি ক্যাথিটার পরা ও ওয়াশ'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ জিরো পয়েন্ট, নতুন ডক্টরস ল্যাব, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জে অভিজ্ঞ ইউরো সার্জন দ্বারা কিডনি পাথর ও প্রস্রাবের জটিলতার নিয়মিত সেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর ইউরো-কিডনি কেয়ার চেম্বার',
        degrees: 'MBBS, PGT (Urology), FCPS (Surgery Part-II)',
        hospitalAffiliation: 'সিনিয়র মেডিকেল অফিসার (সার্জারি ও ইউরোলজি), পার্বতীপুর জংশন হাসপাতাল',
        phone: '01930-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ইউরোলজি সার্জন & কিডনি মূত্ররোগ বিশেষজ্ঞ',
        experienceYears: 14,
        specialties: [
            'কিডনি ও মূত্রথলিতে পাথর অপসারণ লেজার অস্ত্রোপচার',
            'পুরুষ যৌন দুর্বলতা ও এন্ড্রোলজি (Andrology) গোপন রোগ চিকিৎসা',
            'প্রস্রাব আটকে যাওয়া (Urinary Retention) ফার্স্ট এইড'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর বাসস্ট্যান্ড মোড়, ইউরো স্পেশালিস্ট কেয়ার, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে কিডনি পাথর ও পুরুষদের ইউরোলজিক্যাল রোগের আধুনিক চিকিৎসাসেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী সানরাইজ ইউরোলজি চেম্বার',
        degrees: 'MBBS, MS (Urology Course)',
        hospitalAffiliation: 'কনসালটেন্ট (ইউরোলজি), ফুলবাড়ী জেনারেল ডায়াগনস্টিক',
        phone: '01761-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ইউরোলজি সার্জন & কিডনি মূত্ররোগ বিশেষজ্ঞ',
        experienceYears: 10,
        specialties: [
            'প্রস্রাবের ফোটা ফোটা পড়া ও ধীর গতি সমাধান',
            'কিডনি সিস্ট (Kidney Cyst) ও অণ্ডকোষের হাইড্রোসিল (Hydrocele) অপারেশন',
            'ইউরিন কালচার (Urine C/S) রিপোর্ট পর্যালোচনা'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, ইউরো হেলথ ক্লিনিক, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে প্রস্রাবের ব্যথা ও কিডনি রোগীদের নির্ভরযোগ্য চিকিৎসা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ ইউরো & ইউরিনারি কেয়ার Point',
        degrees: 'ইউরোলজি প্রাথমিক চিকিৎসা চেম্বার',
        hospitalAffiliation: 'নবাবগঞ্জ হেলথ সেন্টার',
        phone: '01842-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ইউরোলজি সার্জন & কিডনি মূত্ররোগ বিশেষজ্ঞ',
        experienceYears: 8,
        specialties: [
            'প্রস্রাব হলুদ বা ঘোলা হওয়া ড্রপ ও এন্টিবায়োটিক',
            'কোমরের কিডনি পয়েন্টে ব্যথার আল্ট্রাসাউন্ড টিপস',
            'ক্যাথেটার চেঞ্জিং'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে কম খরচে কিডনি ও প্রস্রাব সংক্রান্ত সাধারণ রোগীদের ফার্স্ট এইড ও পরামর্শ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ ইউরোলজি ক্লিনিক',
        degrees: 'MBBS, D-Uro',
        hospitalAffiliation: 'সিনিয়র স্পেশালিস্ট (ইউরোলজি), সেতাবগঞ্জ ডায়াগনস্টিক',
        phone: '01952-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ইউরোলজি সার্জন & কিডনি মূত্ররোগ বিশেষজ্ঞ',
        experienceYears: 13,
        specialties: [
            'বয়স্ক রোগীদের প্রোস্টেট সাইজ পরীক্ষা ও ওষুধ',
            'কিডনি পাথরের সাইজ অনুযায়ী ঘরোয়া ও লেজার গাইডলাইন',
            'ইউরেথ্রাল স্ট্রিকচার (Urethral Stricture) ডাইলেশন'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ পৌর মার্কেট, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে ইউরোলজি বিশেষজ্ঞ ডাক্তার দ্বারা প্রস্রাব বন্ধ ও কিডনি পাথরের আধুনিক যত্ন।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর ইউরো ফার্স্ট এইড পয়েন্ট',
        degrees: 'ইউরোলজি ও কিডনি পরামর্শ কেন্দ্র',
        hospitalAffiliation: 'চিরিরবন্দর হেলথ সেন্টার',
        phone: '01772-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ইউরোলজি সার্জন & কিডনি মূত্ররোগ বিশেষজ্ঞ',
        experienceYears: 7,
        specialties: [
            'ইউরিন ইনফেকশন দ্রুত কমানোর ড্রপস',
            'প্রস্রাব নিয়মিত রাখার পানি পানের ডায়েট চার্ট',
            'কিডনি সুস্থতার প্রয়োজনীয় টেস্ট পরামর্শ'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ৯:০০ - রাত ৯:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে সাশ্রয়ী খরচে সাধারণ রোগীদের কিডনি ও মূত্রনালীর প্রাথমিক সমাধান।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট ইউরোলজি & স্টোন সেন্টার',
        degrees: 'MBBS, PGT (Urology)',
        hospitalAffiliation: 'ঘোড়াঘাট ডায়াগনস্টিক অ্যান্ড ইউরো কেয়ার',
        phone: '01862-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ইউরোলজি সার্জন & কিডনি মূত্ররোগ বিশেষজ্ঞ',
        experienceYears: 9,
        specialties: [
            'কিডনি পাথর ও মূত্রথলির ক্যালকুলাস নিরাময়',
            'বারবার প্রস্রাবের বেগ লাগার থেরাপি',
            'হাইড্রোসিল ও হার্নিয়া পরীক্ষা'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শনি ও মঙ্গলবার)',
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট জিরো পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে অভিজ্ঞ চিকিৎসক দ্বারা কিডনি পাথর ও প্রোস্টেটের প্রয়োজনীয় চিকিৎসা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল কান্তনগর ইউরো সেবা চেম্বার',
        degrees: 'ইউরোলজি প্রাথমিক চিকিৎসা কেন্দ্র',
        hospitalAffiliation: 'কাহারোল সেবা ডিজিটাল ল্যাব',
        phone: '01953-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ইউরোলজি সার্জন & কিডনি মূত্ররোগ বিশেষজ্ঞ',
        experienceYears: 6,
        specialties: [
            'প্রস্রাব জ্বালাপোড়ায় অতিরিক্ত পানি ও জুস ডায়েট টিপস',
            'কিডনি সুরক্ষায় ব্যথানাশক ঔষধের সঠিক ব্যবহার',
            'ক্যাথেটার হ্যান্ডলিং পরামর্শ'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ১০:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে সাধারণ রোগীদের জন্য সাশ্রয়ী ইউরোলজি ও মূত্ররোগ সেবা চেম্বার।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const getAllUrologyServices = async (query = {}) => {
    try {
        const filter = {};
        if (query.status) {
            filter.status = query.status;
        }
        if (query.upazila && query.upazila !== 'সকল উপজেলা') {
            filter.upazila = query.upazila;
        }
        if (query.search) {
            const searchRegex = new RegExp(query.search, 'i');
            filter.$or = [
                { name: searchRegex },
                { phone: searchRegex },
                { degrees: searchRegex },
                { hospitalAffiliation: searchRegex },
                { serviceType: searchRegex },
                { address: searchRegex },
                { specialties: searchRegex }
            ];
        }

        const count = await Urology.countDocuments();
        if (count === 0) {
            await Urology.insertMany(INITIAL_UROLOGY_DATA);
        }

        return await Urology.find(filter).sort({ createdAt: -1 });
    } catch (error) {
        console.error('Error in getAllUrologyServices:', error);
        return INITIAL_UROLOGY_DATA;
    }
};

export const getUrologyById = async (id) => {
    return await Urology.findById(id);
};

export const createUrologyService = async (data) => {
    const newService = new Urology(data);
    return await newService.save();
};

export const updateUrologyStatus = async (id, status) => {
    return await Urology.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteUrologyService = async (id) => {
    return await Urology.findByIdAndDelete(id);
};
