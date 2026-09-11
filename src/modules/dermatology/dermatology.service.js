import Dermatology from './dermatology.model.js';

const INITIAL_DERMATOLOGY_DATA = [
    {
        name: 'ডাঃ প্রফেসর মোঃ জাহিদুল ইসলাম',
        degrees: 'MBBS, DDV (DU), FCPS (Dermatology & Venereology)',
        hospitalAffiliation: 'প্রাক্তন বিভাগীয় প্রধান (চর্ম ও যৌন রোগ), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01712-889900',
        alternatePhone: '01819-112233',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চর্ম, এলার্জি & যৌন রোগ বিশেষজ্ঞ',
        experienceYears: 18,
        specialties: [
            'একজিমা, সোরিয়াসিস & দীর্ঘমেয়াদী এলার্জি নিরাময়',
            'যৌন ব্যাধি, শুক্রাণু স্বল্পতা & পুরুষত্বহীনতা চিকিৎসা',
            'মেছতা, স্কিন ব্ল্যাক হেডস & লেজার স্পট রিমুভাল'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, স্কিন কেয়ার & লেজার স্পেশালিস্ট সেন্টার (২য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '১৮ বছরের অভিজ্ঞ চর্ম, এলার্জি, চর্ম কসমোটোলজি ও যৌন রোগ বিশেষজ্ঞ ডাক্তার।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর স্কিন লেজার & এলার্জি সেন্টার',
        degrees: 'বিশেষায়িত চর্ম রোগ, কসমোটোলজি ও যৌন স্বাস্থ্য কেন্দ্র',
        hospitalAffiliation: 'দিনাজপুর সেন্ট্রাল স্কিন অ্যান্ড ডার্মা পয়েন্ট',
        phone: '01733-445566',
        alternatePhone: '01912-778899',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লেজার স্কিন কেয়ার & কসমোটোলজি',
        experienceYears: 14,
        specialties: [
            'ব্রণ ও ব্রণের গর্ত ভরাট কেমিক্যাল পিলিং & ট্যাটু রিমুভাল',
            'চুল পড়া (Hair Loss) ও টাক মাথার পিআরপি (PRP Therapy)',
            'যৌন ব্যাধি সংক্রামক চর্মরোগের আধুনিক কেয়ার'
        ],
        visitingFee: 700,
        chamberTime: 'সকাল ১০:০০ - দুপুর ২:০০ ও বিকাল ৪:৩০ - রাত ৯:০০',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'জেল রোড, ডার্মা প্লাজা (৩য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: 'লেজার পিআরপি, ফেসিয়াল কসমোটোলজি ও অ্যালার্জি স্কিন প্রিক টেস্টের একমাত্র আধুনিক চর্ম ক্লিনিক।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ ফারহানা ইয়াসমিন (চর্ম ও যৌন বিশেষজ্ঞ)',
        degrees: 'MBBS, MD (Dermatology), PGT (Cosmetology - Thailand)',
        hospitalAffiliation: 'কনসালটেন্ট (চর্ম), দিনাজপুর জেনারেল হাসপাতাল',
        phone: '01824-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মহিলা ও শিশুদের স্কিন কেয়ার',
        experienceYears: 11,
        specialties: [
            'মহিলাদের মেছতা, ব্রণের লালচে দাগ & ফাঙ্গাল ইনফেকশন',
            'শিশুদের চর্মরোগ, চুলকানি & এটোমিক ডার্মাটাইটিস',
            'ত্বকের উজ্জ্বলতা বৃদ্ধিতে লাইট থেরাপি ও গ্লো পিল'
        ],
        visitingFee: 600,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর, উইমেন ডার্মা ক্লিনিক, দিনাজপুর সদর',
        isAvailable: true,
        description: 'মহিলা ও শিশুদের চর্ম ও অ্যালার্জি রোগ বিশেষজ্ঞ ও ডার্মাটো-কসমোটোলজিস্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ স্কিন, এলার্জি & যৌন চিকিৎসা কেন্দ্র',
        degrees: 'চর্ম রোগ ও পুরুষ যৌন স্বাস্থ্য চেম্বার',
        hospitalAffiliation: 'বীরগঞ্জ রয়্যাল ডায়াগনস্টিক অ্যান্ড স্পেশালিস্ট সেন্টার',
        phone: '01745-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চর্ম, এলার্জি & যৌন রোগ বিশেষজ্ঞ',
        experienceYears: 10,
        specialties: [
            'দাউদ, চুলকানি & খোসপাঁচড়া স্থায়ী নিরাময়',
            'যৌন সমস্যা, স্বপ্নদোষ & শারীরিক দুর্বলতার চিকিৎসা',
            'ত্বকের কালো দাগ ও আঁচিল অপসারণ'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ জিরো পয়েন্ট, মেইন রোড, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জে অভিজ্ঞ চর্ম ও যৌন রোগ চিকিৎসকের নিয়মিত চিকিৎসা সেবা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর ডার্মাটোলজি & সেক্সোলজি চেম্বার',
        degrees: 'MBBS, DTMH, PGT (Skin & VD)',
        hospitalAffiliation: 'কনসালটেন্ট (চর্ম ও যৌন), পার্বতীপুর জংশন হাসপাতাল',
        phone: '01925-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চর্ম, এলার্জি & যৌন রোগ বিশেষজ্ঞ',
        experienceYears: 12,
        specialties: [
            'দীর্ঘদিনের পুরোনো চুলকানি ও ফাঙ্গাল ছত্রাক ইনফেকশন',
            'যৌনবাহিত রোগ (STD) সিফিলিস & গনোরিয়ার গোপন চিকিৎসা',
            'নখের রোগ, শ্বেতী রোগ (Vitiligo) ও কুষ্ঠ রোগ সমাধান'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর রেলওয়ে বাসস্ট্যান্ড মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে অভিজ্ঞ চর্ম ও যৌন রোগ বিশেষজ্ঞ ডাক্তার দ্বারা সম্পূর্ণ গোপনীয়তায় চিকিৎসা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী সানরাইজ স্কিন কেয়ার চেম্বার',
        degrees: 'MBBS, FCPS (Dermatology Part-II)',
        hospitalAffiliation: 'সিনিয়র ডক্টর (চর্মরোগ), ফুলবাড়ী জেনারেল ল্যাব',
        phone: '01756-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'এলার্জি, চর্ম & হরমোন স্কিন কেয়ার',
        experienceYears: 9,
        specialties: [
            'খাদ্য ও ঋতুভিত্তিক এলার্জি ও চর্মের লাল দাগ নিরাময়',
            'হরমোনজনিত মুখে অতিরিক্ত লোম গজানো সমস্যা',
            'মেছতা ও রোদে পোড়া কালচে ছোপ ছোপ দাগ দূরীকরণ'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, ডক্টর ডায়ালগ রুম, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে স্কিন এলার্জি ও যৌন স্বাস্থ্যের নির্ভরযোগ্য চিকিৎসালয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ ওরাল & ডার্মা কেয়ার ক্লিনিক',
        degrees: 'চর্ম রোগ ও সেক্সুয়াল মেডিসিন সেন্টার',
        hospitalAffiliation: 'নবাবগঞ্জ হেলথ পয়েন্ট',
        phone: '01837-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চর্ম, এলার্জি & যৌন রোগ বিশেষজ্ঞ',
        experienceYears: 8,
        specialties: [
            'খোসপাঁচড়া, এলার্জিক চর্ম ফুসকুড়ি',
            'যৌন দুর্বলতা ও হরমোন সমস্যা',
            'ত্বকের অ্যালার্জি টেস্ট'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে কম খরচে চর্মরোগ ও যৌন ব্যাধির আধুনিক চিকিৎসা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ স্কিন & সেক্স কেয়ার',
        degrees: 'MBBS, DDV (Chittagong)',
        hospitalAffiliation: 'সিনিয়র কনসালটেন্ট, সেতাবগঞ্জ ডক্টরস পয়েন্ট',
        phone: '01947-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চর্ম, এলার্জি & যৌন রোগ বিশেষজ্ঞ',
        experienceYears: 11,
        specialties: [
            'চুল পড়া ও খুশকি সমস্যা সমাধান',
            'দাদ ও একজিমা দ্রুত নিরাময়',
            'যৌন সমস্যা ও পরামর্শ কেন্দ্র'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ পৌর মার্কেট, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে চুলকানি, দাদ ও পুরুষের গোপন সমস্যার সমাধান বিশেষজ্ঞ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর ডার্মা হেলথ সেন্ট্রাল',
        degrees: 'চর্ম ও যৌন রোগ প্রাথমিক কনসালট্যান্ট',
        hospitalAffiliation: 'চিরিরবন্দর মেডিকেল কেয়ার',
        phone: '01767-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চর্ম, এলার্জি & যৌন রোগ বিশেষজ্ঞ',
        experienceYears: 7,
        specialties: [
            'দাদ, ফুসকুড়ি ও এলার্জি ফাস্ট এইড',
            'ত্বকের এলার্জি ড্রপ ও অয়েন্টমেন্ট পরামর্শ',
            'গোপন যৌন সমস্যার পরামর্শ'
        ],
        visitingFee: 400,
        chamberTime: 'সকাল ১০:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে চর্ম ও যৌন রোগের সাশ্রয়ী পরামর্শ কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট স্কিন অ্যান্ড যৌন স্বাস্থ্য ক্লিনিক',
        degrees: 'MBBS, PGT (Skin & VD)',
        hospitalAffiliation: 'ঘোড়াঘাট ডায়াগনস্টিক অ্যান্ড স্পেশালিস্ট',
        phone: '01857-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চর্ম, এলার্জি & যৌন রোগ বিশেষজ্ঞ',
        experienceYears: 9,
        specialties: [
            'দাদ ও ছত্রাক ইনফেকশন প্রতিরোধ',
            'মেছতা ও স্থায়ী ছোপ ছোপ দাগ',
            'যৌন স্বাস্থ্য ও বিবাহোত্তর পরামর্শ'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (সোম ও বৃহস্পতিবার)',
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট বাসস্ট্যান্ড মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে অভিজ্ঞ দন্ত ও চর্ম রোগের গোপন চিকিৎসা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল কান্তনগর চর্ম & এলার্জি কেয়ার',
        degrees: 'চর্ম রোগ ফার্স্ট এইড ও পরামর্শ চেম্বার',
        hospitalAffiliation: 'কাহারোল সেবা ডিজিটাল ল্যাব',
        phone: '01958-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চর্ম, এলার্জি & যৌন রোগ বিশেষজ্ঞ',
        experienceYears: 6,
        specialties: [
            'চুলকানি ও ফুসকুড়ি দ্রুত আরাম',
            'এলার্জি খাবার পরামর্শ ও টেস্ট',
            'ত্বকের যত্নে পরামর্শ'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ১০:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে সাধারণ রোগীদের সাশ্রয়ী চর্মরোগ সেবা।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const getAllDermatologyServices = async (query = {}) => {
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

        const count = await Dermatology.countDocuments();
        if (count === 0) {
            await Dermatology.insertMany(INITIAL_DERMATOLOGY_DATA);
        }

        return await Dermatology.find(filter).sort({ createdAt: -1 });
    } catch (error) {
        console.error('Error in getAllDermatologyServices:', error);
        return INITIAL_DERMATOLOGY_DATA;
    }
};

export const getDermatologyById = async (id) => {
    return await Dermatology.findById(id);
};

export const createDermatologyService = async (data) => {
    const newService = new Dermatology(data);
    return await newService.save();
};

export const updateDermatologyStatus = async (id, status) => {
    return await Dermatology.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteDermatologyService = async (id) => {
    return await Dermatology.findByIdAndDelete(id);
};
