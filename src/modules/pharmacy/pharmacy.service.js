import Pharmacy from './pharmacy.model.js';

export const INITIAL_PHARMACY_SEED = [
    {
        name: 'লাজ ফার্মা (Lazz Pharma) - দিনাজপুর শাখা',
        degrees: 'ড্রাগ লাইসেন্স নং: DIN-102948 | মডেল ফার্মেসী সার্টিফিকেট',
        hospitalAffiliation: 'প্রোপ্রাইটর: মোঃ রফিকুল ইসলাম (এ গ্রেড ফার্মা বি ফার্ম)',
        phone: '01711-889900',
        alternatePhone: '01822-778899',
        photo: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=600&q=80',
        serviceType: '২৪/৭ মডেল ফার্মেসী & হোম ডেলিভারি',
        experienceYears: 20,
        specialties: [
            'দিনাজপুর শহরে জরুরি ৩-৫% ডিসকাউন্টে ওষুধ হোম ডেলিভারি',
            '১০০% আসল দেশী-বিদেশী জীবনরক্ষাকারী ড্রাই ও কোল্ড মেডিসিন',
            '২৪ ঘণ্টা এসি মডেল ফার্মেসী ও অভিজ্ঞ ফার্মাসিস্ট সেবা'
        ],
        visitingFee: 5, // 5% discount
        chamberTime: '২৪ ঘণ্টা খোলা (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, এম আব্দুর রহিম মেডিকেল রোড, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দিনাজপুর শহরের বৃহত্তম বিশ্বস্ত দেশী-বিদেশী মডেল ফার্মেসী ও জরুরি হোম ডেলিভারি সার্ভিস।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'লাইফকেয়ার ডায়াবেটিক & ইনসুলিন কোল্ড ড্রাগ সেন্টার',
        degrees: 'বিশেষায়িত ডায়াবেটিস, কোল্ড চেইন ইনসুলিন ও হার্ট মেডিসিন পয়েন্ট',
        hospitalAffiliation: 'পরিচালনা: কেমিস্ট সমিতি দিনাজপুর',
        phone: '01732-556677',
        alternatePhone: '01912-334455',
        photo: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ইনসুলিন, ভ্যাকসিন & কোল্ড চেইন ড্রাগ স্টোর',
        experienceYears: 16,
        specialties: [
            'ইনসুলিন ও বায়োলজিক্যাল ভ্যাকসিন আইস বক্সে নিরাপদ সরবরাহ',
            'প্রেসক্রিপশন অনুযায়ী ডায়াবেটিক মেজারিং স্ট্রিপ ও গ্লুকোমিটার',
            'নিয়মিত গ্রাহকদের ফ্রি ব্লাড প্রেসার ও সুগার টেস্ট'
        ],
        visitingFee: 8,
        chamberTime: 'সকাল ৭:৩০ - রাত ১১:৩০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'ডায়াবেটিক হাসপাতাল রোড, দিনাজপুর সদর',
        isAvailable: true,
        description: 'ডায়াবেটিক ও হার্টের প্রয়োজনীয় ইনসুলিন ও ইনজেকশন সঠিক তাপমাত্রায় সংরক্ষণের নিশ্চয়তা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর সার্জিক্যাল অ্যান্ড কেয়ার ড্রাগ মল',
        degrees: 'সার্জিক্যাল সামগ্রী, নেবুলাইজার ও অক্সিজেন সিলিন্ডার ডিস্ট্রিবিউটর',
        hospitalAffiliation: 'ম্যানেজার: আলহাজ্ব তানভীর আহমেদ',
        phone: '01833-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1631549912265-d05051a62d1d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'সার্জিক্যাল সামগ্রী & মেডিকেল ডিভাইস সেন্টার',
        experienceYears: 14,
        specialties: [
            'জরুরি অক্সিজেন সিলিন্ডার (রিফিলসহ) ও পোর্টেবল ক্যানুলা ডেলিভারি',
            'হুইলচেয়ার, ওয়াটার বেড, কমোড চেয়ার ও ক্রাচ বিক্রয়/ভাড়া',
            'বিপি মেশিন, ডিজিটাল থার্মোমিটার ও নেবুলাইজার কিট'
        ],
        visitingFee: 10,
        chamberTime: 'সকাল ৮:০০ - রাত ১০:৩০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর রোড, দিনাজপুর সদর',
        isAvailable: true,
        description: 'হাসপাতাল ও ঘরোয়া রোগীদের জন্য প্রয়োজনীয় সর্বাধুনিক সার্জিক্যাল ও মেডিকেল যন্ত্রপাতি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ মডেল ফার্মা & মেডিসিন কর্নার',
        degrees: 'লাইসেন্স নং: DIN-50341 | গ্রাজুয়েট কেমিস্ট পরিচালিত',
        hospitalAffiliation: 'বীরগঞ্জ কেমিস্ট অ্যাসোসিয়েশন',
        phone: '01744-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=600&q=80',
        serviceType: 'অ্যালোপ্যাথিক & প্রেসক্রিপশন মেডিসিন শপ',
        experienceYears: 12,
        specialties: [
            'বীরগঞ্জ উপজেলায় সকল প্রকার প্রাতঃ ও রাত্রীকালীন ওষুধ সরবরাহ',
            'প্রেসক্রিপশন অনুযায়ী সঠিক ডোজের ঔষধ প্যাকেজিং',
            'জরুরি শিশু ও বয়স্কদের সিরাপ ও ইনহেলার'
        ],
        visitingFee: 5,
        chamberTime: 'সকাল ৮:০০ - রাত ১১:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ জিরো পয়েন্ট, মেইন রোড, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জে আসল ওষুধ সঠিক মূল্যে পাওয়ার নির্ভরযোগ্য ও পরিচিত রেজিস্টার্ড ফার্মেসী।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর জনসেবা ফার্মা & ফার্মাসিউটিক্যালস',
        degrees: 'মডেল ড্রাগ শপ রেজিস্ট্রেশন',
        hospitalAffiliation: 'প্রোপ্রাইটর: মোঃ শরিফুল ইসলাম (ফার্মাসিস্ট)',
        phone: '01922-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80',
        serviceType: '২৪/৭ মডেল ফার্মেসী & হোম ডেলিভারি',
        experienceYears: 15,
        specialties: [
            'পার্বতীপুর জংশন এলাকায় ২৪ ঘণ্টা জরুরী ওষুধ ডেলিভারি',
            'সকল স্কোয়ার, ইনসেপ্টা, বেক্সিমকো ও রেনেটা কোম্পানির ওষুধ',
            'বয়স্ক রোগীদের জন্য সাপ্তাহিক ঔষধ বক্স সার্ভিস'
        ],
        visitingFee: 6,
        chamberTime: '২৪ ঘণ্টা খোলা (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর রেলওয়ে জংশন গেট সংলগ্ন, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে ২৪ ঘণ্টা জরুরি ওষুধ সরবরাহ ও প্রেসক্রিপশন মেটানোর বিশ্বস্ত ড্রাগ হাউস।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী সেন্ট্রাল ড্রাগ হাউস',
        degrees: 'লাইসেন্স নং: DIN-30291',
        hospitalAffiliation: 'প্রোপ্রাইটর: শ্রী সজল কুমার দত্ত',
        phone: '01755-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=600&q=80',
        serviceType: 'অ্যালোপ্যাথিক & প্রেসক্রিপশন মেডিসিন শপ',
        experienceYears: 11,
        specialties: [
            'ফুলবাড়ী বাজারে পাইকারী ও খুচরা আসল ঔষধ বিক্রয়',
            'গ্যাস্ট্রিক, প্রেসার, ডায়াবেটিস ও কিডনি রোগীদের ঔষধ ডিসকাউন্ট',
            'শিশুদের ফুড সম্পূরক ও ফিডিং আনুষঙ্গিক'
        ],
        visitingFee: 5,
        chamberTime: 'সকাল ৮:০০ - রাত ১০:৩০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে ন্যায্য মূল্যে ১ শতভাগ খাঁটি অ্যালোপ্যাথিক ঔষধ বিক্রয় কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ ফ্রেন্ডস ফার্মা & মেডিকেল কেয়ার',
        degrees: 'ড্রাগ রেজিস্টার্ড রিটেল শপ',
        hospitalAffiliation: 'নবাবগঞ্জ ফার্মা ক্লাস্টার',
        phone: '01831-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1631549912265-d05051a62d1d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'অ্যালোপ্যাথিক & প্রেসক্রিপশন মেডিসিন শপ',
        experienceYears: 9,
        specialties: [
            'নবাবগঞ্জে প্রেসক্রিপশন অনুযায়ী সঠিক ফার্স্ট এইড ও এন্টিবায়োটিক',
            'স্যালাইন, ও স্যালাইন ও স্যাভিট ড্রিংকস স্টক',
            'ব্লাড প্রেসার মাপা সেবা'
        ],
        visitingFee: 4,
        chamberTime: 'সকাল ৮:৩০ - রাত ১০:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ থানা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে সাশ্রয়ী ও দ্রুততম সময়ে প্রয়োজনীয় ফার্স্ট এইড ওষুধ প্রাপ্তির স্থান।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ মডেল ফার্মেসী',
        degrees: 'লাইসেন্স নং: DIN-40192',
        hospitalAffiliation: 'সেতাবগঞ্জ কেমিস্ট সমিতি',
        phone: '01941-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80',
        serviceType: '২৪/৭ মডেল ফার্মেসী & হোম ডেলিভারি',
        experienceYears: 13,
        specialties: [
            'সেতাবগঞ্জে জরুরি কোল্ড চেইন ইনসুলিন ও ভ্যাকসিন',
            'ফার্মাসিস্ট পরামর্শ অনুযায়ী প্রেসক্রিপশন গাইডলাইন',
            'হোম ডেলিভারি সুবিধা (পৌরসভা এলাকা)'
        ],
        visitingFee: 5,
        chamberTime: 'সকাল ৭:৩০ - রাত ১১:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ স্টেশন রোড, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জ এলাকার সাধারণ ও জটিল রোগীদের জীবন রক্ষাকারী ড্রাগ পয়েন্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর জনতা ফার্মেসী & ড্রাগ হাউস',
        degrees: 'ড্রাগ লাইসেন্স রেজিস্টার্ড',
        hospitalAffiliation: 'চিরিরবন্দর ফার্মাসিউটিক্যাল পয়েন্ট',
        phone: '01761-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=600&q=80',
        serviceType: 'অ্যালোপ্যাথিক & প্রেসক্রিপশন মেডিসিন শপ',
        experienceYears: 8,
        specialties: [
            'রাণীরবন্দর বাজারে প্রেসক্রিপশন মোতাবেক সকল ড্রাগস',
            'স্যালাইন ও শিশু খাবার স্যাশে স্টোরেজ',
            'জরুরি স্যালাইন পুশ সুবিধা'
        ],
        visitingFee: 4,
        chamberTime: 'সকাল ৮:০০ - রাত ১০:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে সাধারণ রোগীদের জন্য বিশ্বস্ত অ্যালোপ্যাথিক মেডিসিন শপ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট ডিজিটাল ফার্মা & হারবাল ঔষধালয়',
        degrees: 'গভর্নমেন্ট ড্রাগ এন্ড লাইসেন্স সার্টিফাইড',
        hospitalAffiliation: 'ঘোড়াঘাট ফার্মা সোসাইটি',
        phone: '01851-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1631549912265-d05051a62d1d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'হোমিওপ্যাথিক & আয়ুর্বেদিক ঔষধালয়',
        experienceYears: 10,
        specialties: [
            'বিশুদ্ধ ভেষজ, আয়ুর্বেদিক ও ইউনানী স্বাস্থ্যকর ঔষধ',
            'হোমিওপ্যাথিক কম্বিনেশন ও ক্রনিক ব্যথানাশক তেল',
            'অ্যালোপ্যাথিক জরুরি টেবলেট স্টোর'
        ],
        visitingFee: 5,
        chamberTime: 'সকাল ৮:৩০ - রাত ৯:৩০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট হাইওয়ে মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে অ্যালোপ্যাথিক, ইউনানী ও হারবাল সুস্থতার ওষুধ প্রাপ্তির ঠিকানা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল কান্তনগর মেডিসিন পয়েন্ট',
        degrees: 'ড্রাগ পারমিট হোল্ডার',
        hospitalAffiliation: 'কাহারোল কেমিস্ট ক্লাব',
        phone: '01941-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80',
        serviceType: 'অ্যালোপ্যাথিক & প্রেসক্রিপশন মেডিসিন শপ',
        experienceYears: 7,
        specialties: [
            'কাহারোলে ১ শতভাগ অরিজিনাল কোয়ালিটি ঔষধ',
            'জ্বর, কাশি ও আমাশয়ের নিয়মিত সিরাপ স্টোর',
            'প্রেশার চেকআপ ব্যবস্থা'
        ],
        visitingFee: 3,
        chamberTime: 'সকাল ৮:০০ - রাত ১০:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে এলাকাবাসীর স্বাস্থ্য রক্ষায় সাশ্রয়ী মূল্যে সঠিক ঔষধ শপ।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const seedPharmacyData = async () => {
    try {
        const count = await Pharmacy.countDocuments();
        if (count === 0) {
            await Pharmacy.insertMany(INITIAL_PHARMACY_SEED);
            console.log('✅ Pharmacy Module pre-populated with 11 initial seed entries');
        }
    } catch (err) {
        console.error('⚠️ Failed to seed Pharmacy module:', err);
    }
};

export const getPharmacyServices = async (filter = {}) => {
    return await Pharmacy.find(filter).sort({ createdAt: -1 });
};

export const getPharmacyServiceById = async (id) => {
    return await Pharmacy.findById(id);
};

export const createPharmacyService = async (data) => {
    return await Pharmacy.create(data);
};

export const updatePharmacyService = async (id, data) => {
    return await Pharmacy.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deletePharmacyService = async (id) => {
    return await Pharmacy.findByIdAndDelete(id);
};
