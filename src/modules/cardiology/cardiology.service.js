import Cardiology from './cardiology.model.js';

const INITIAL_CARDIOLOGY_DATA = [
    {
        name: 'ডাঃ প্রফেসর মোঃ মোস্তফা কামাল',
        degrees: 'MBBS, FCPS (Cardiology), MD (Cardiology)',
        hospitalAffiliation: 'প্রাক্তন প্রধান & কনসালটেন্ট (কার্ডিওলজি), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01712-445566',
        alternatePhone: '01815-778899',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'হৃদরোগ বিশেষজ্ঞ ও কনসালটেন্ট',
        experienceYears: 20,
        specialties: [
            'উচ্চ রক্তচাপ & হার্ট অ্যাটাক পরবর্তী পুনর্বাসন',
            '২ডি কালার ডপলার ইকোকার্ডিওগ্রাম বিশেষজ্ঞ',
            'এনজিনা, বুক ব্যথা ও হার্ট ফেলিউর ম্যানেজমেন্ট'
        ],
        visitingFee: 1000,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, হার্ট কেয়ার কনসালটেশন সেন্টার (২য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '২০ বছরের অভিজ্ঞ সিনিয়র হৃদরোগ বিশেষজ্ঞ। উচ্চ রক্তচাপ, হার্ট ব্লক, বুকে চাপ অনুভূত হওয়া এবং জটিল অ্যাথেরোস্ক্লেরোসিসের আধুনিক চিকিৎসা সেবা প্রদান করেন।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর হার্ট ফাউন্ডেশন & কার্ডিয়াক ইউনিট',
        degrees: 'বিশেষায়িত হৃদরোগ ডায়াগনস্টিক ও আইসিইউ/সিসিইউ হাসপাতাল',
        hospitalAffiliation: 'দিনাজপুর ন্যাশনাল হার্ট ফাউন্ডেশন ট্রাস্ট',
        phone: '01730-556677',
        alternatePhone: '01918-990011',
        photo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'জরুরি হার্ট অ্যাটাক & সিসিইউ কেয়ার',
        experienceYears: 15,
        specialties: [
            '২৪ ঘণ্টা জরুরি সিসিইউ (CCU) & ডিজিটাল বেড সাপোর্ট',
            'ডিজিটাল ইসিজি, ইটিটি (ETT) & কালার ইকো',
            'জরুরি কার্ডিয়াক অ্যাম্বুলেন্স ও অক্সিজেন ব্যাংক'
        ],
        visitingFee: 800,
        chamberTime: '২৪ ঘণ্টা জরুরি সেবা ও চেম্বার সকাল ১০:০০ - রাত ৯:০০',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'জেল রোড, হার্ট ফাউন্ডেশন ভবন, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দিনাজপুর জেলার সর্বাধুনিক বিশেষায়িত হৃদরোগ হাসপাতাল। সিসিইউ, ইসিজি, ইকো ও অন-কল কার্ডিওলজিস্ট সাপোর্ট দিনরাত ২৪ ঘণ্টা উপলব্ধ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ মোঃ আতিকুর রহমান (কার্ডিওলজিস্ট)',
        degrees: 'MBBS, D-CARD (NICVD, Dhaka)',
        hospitalAffiliation: 'সহযোগী অধ্যাপক (কার্ডিওলজি), এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01821-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ইকোকার্ডিওগ্রাফি & ইসিজি ডায়াগনস্টিক',
        experienceYears: 14,
        specialties: [
            'জন্মগত হৃদরোগ ও ভালভ রোগ নির্ণয়',
            '২৪ ঘণ্টা হোল্টার মনিটরিং & পেসমেকার ফলোআপ',
            'ডায়াবেটিস ও থাইরয়েডজনিত হৃদরোগ সচেতনতা'
        ],
        visitingFee: 900,
        chamberTime: 'বিকাল ৫:০০ - রাত ৯:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর, সেন্ট্রাল ডায়াগনস্টিক অ্যান্ড হার্ট সেন্টার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'জাতীয় হৃদরোগ ইনস্টিটিউট (NICVD) হতে ডিপ্লোমাধারী কার্ডিওলজিস্ট। ইকো ও ডিজিটাল ইসিজি ট্র্যাকিংয়ে বিশেষভাবে পারদর্শী।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ হার্ট কেয়ার & কার্ডিও ক্লিনিক',
        degrees: 'হৃদরোগ ডায়াগনস্টিক ও বিশেষজ্ঞ পরামর্শ কেন্দ্র',
        hospitalAffiliation: 'বীরগঞ্জ রয়্যাল হেলথ স্পেশালিস্ট সেন্টার',
        phone: '01742-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
        serviceType: 'হৃদরোগ বিশেষজ্ঞ ও কনসালটেন্ট',
        experienceYears: 10,
        specialties: [
            'হাইপারটেনশন (উচ্চ রক্তচাপ) ক্লিনিক',
            'কম্পিউটারাইজড ইসিজি ও ব্লাড গ্যাস এনালাইসিস',
            'জরুরি ফাস্ট এইড ও কার্ডিয়াক রেফারেল'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৩:০০ - সন্ধ্যা ৭:৩০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ জিরো পয়েন্ট, স্টেশন রোড, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জ উপজেলায় রোগীদের জন্য অভিজ্ঞ কার্ডিওলজিস্টের নিয়মিত চেম্বার ও ডিজিটাল ইসিজি সুবিধা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর কার্ডিয়াক ডায়াগনস্টিক & ইসিজি সেন্টার',
        degrees: 'হৃদরোগ ইমেজিং ও পেসমেকার ক্লিনিক',
        hospitalAffiliation: 'পার্বতীপুর জংশন জেনারেল হেলথকেয়ার',
        phone: '01922-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'এনজিওগ্রাম & পেসমেকার কেয়ার',
        experienceYears: 12,
        specialties: [
            'পেসমেকার ইমপ্লান্টেশন পরবর্তী মনিটরিং',
            'এনজিওগ্রাম পরবর্তী কন্টিনিউয়াস কার্ডিয়াক কেয়ার',
            'লিপেড প্রোফাইল ও কোলেস্টেরল নিয়ন্ত্রণ'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর বাসস্ট্যান্ড মোড়, ডায়াবেটিক অ্যান্ড কার্ডিয়াক পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে আধুনিক কার্ডিয়াক ট্র্যাকিং ও হৃদরোগীদের নিয়মিত চেকআপ সেবাদানকারী নির্ভরযোগ্য প্রতিষ্ঠান।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী হৃদরোগ কনসালটেশন সেন্টার',
        degrees: 'MBBS, MD (Cardiology)',
        hospitalAffiliation: 'কনসালটেন্ট কার্ডিওলজিস্ট, ফুলবাড়ী ক্রিসেন্ট হাসপাতাল',
        phone: '01753-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
        serviceType: 'হৃদরোগ বিশেষজ্ঞ ও কনসালটেন্ট',
        experienceYears: 9,
        specialties: [
            'বুক ধড়ফড় করা ও শ্বাসকষ্টের বিশেষজ্ঞ চিকিৎসা',
            'ইসিজি রিপোর্ট তাৎক্ষণিক মূল্যায়ন',
            'স্ট্রোক ও হার্ট অ্যাটাক ঝুঁকি কমানো'
        ],
        visitingFee: 600,
        chamberTime: 'সকাল ১০:০০ - দুপুর ২:০০ ও বিকাল ৫:০০ - রাত ৮:০০',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, ক্রিসেন্ট কমপ্লেক্স, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে কম খরচে হৃদরোগীদের সঠিক ডায়াগনোসিস ও চিকিৎসা পরামর্শ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ কার্ডিয়াক কেয়ার ইউনিট',
        degrees: 'ডিজিটাল ইসিজি & ইকো পয়েন্ট',
        hospitalAffiliation: 'নবাবগঞ্জ সেন্ট্রাল ডক্টরস চেম্বার',
        phone: '01834-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ইকোকার্ডিওগ্রাফি & ইসিজি ডায়াগনস্টিক',
        experienceYears: 8,
        specialties: [
            'ডিজিটাল ১২-লিড ইসিজি সার্ভিস',
            'কালার ডপলার হার্ট ম্যাপিং',
            'জরুরি অক্সিজেন ও কার্ডিয়াক অ্যাম্বুলেন্স'
        ],
        visitingFee: 600,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ সদর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জ উপজেলায় জরুরি ইসিজি ও হৃদরোগ পরামর্শ চেম্বার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ হার্ট & ডায়াবেটিক সেন্টার',
        degrees: 'MBBS, D-CARD, CCD (BIRDEM)',
        hospitalAffiliation: 'সিনিয়র কনসালটেন্ট, সেতাবগঞ্জ কার্ডিয়াক হেলথ পয়েন্ট',
        phone: '01944-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'হৃদরোগ বিশেষজ্ঞ ও কনসালটেন্ট',
        experienceYears: 11,
        specialties: [
            'ডায়াবেটিসজনিত হৃদরোগ জটিলতা নিরসন',
            'রক্তচাপ নিয়ন্ত্রণ ও ইসিজি সেশন',
            'লাইফস্টাইল ও ডায়েট ম্যানেজমেন্ট'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ পৌর মার্কেট, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে হৃদরোগ ও ডায়াবেটিস রোগীদের একই ছাদের নিচে পূর্ণাঙ্গ স্বাস্থ্য সেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর কার্ডিয়াক প্রাথমিক সেবা সেন্টার',
        degrees: 'জরুরি কার্ডিয়াক ফার্স্ট এইড ও ডায়াগনস্টিক',
        hospitalAffiliation: 'চিরিরবন্দর মডার্ন ডিজিটাল ল্যাব',
        phone: '01764-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
        serviceType: 'জরুরি হার্ট অ্যাটাক & সিসিইউ কেয়ার',
        experienceYears: 7,
        specialties: [
            'জরুরি বুক ব্যথার ইসিজি স্ক্রিনিং',
            'জরুরি অক্সিজেন ও ফার্স্ট এইড স্ট্যাবিলাইজেশন',
            'মেডিকেল কলেজ হাসপাতালে দ্রুত রেফারাল সাপোর্ট'
        ],
        visitingFee: 500,
        chamberTime: 'সকাল ৯:০০ - রাত ৯:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে হৃদরোগের প্রাথমিক ইসিজি ও জরুরি রোগীকে নিরাপদ রেফারেল সাপোর্ট প্রদানকারী কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট হার্ট স্পেশালিস্ট পয়েন্ট',
        degrees: 'MBBS, FCPS (Cardiology Part-II), D-CARD',
        hospitalAffiliation: 'ঘোড়াঘাট জেনারেল ডিজিটাল ডায়াগনস্টিক',
        phone: '01854-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
        serviceType: 'হৃদরোগ বিশেষজ্ঞ ও কনসালটেন্ট',
        experienceYears: 10,
        specialties: [
            'অতিরিক্ত এনজাইনা ও শ্বাসকষ্টের কনসালটেশন',
            'কোলেস্টেরল ট্রাইগ্লিসারাইড ম্যানেজমেন্ট',
            'ইসিজি ও হার্ট সাউন্ড মনিটরিং'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শনিবার ও মঙ্গলবার)',
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট জিরো পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে নিয়মিত হৃদরোগ কনসালটেশন ও উচ্চমানের ডায়াগনস্টিক সেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল কান্তনগর কার্ডিয়াক ক্লিনিক',
        degrees: 'হৃদরোগ ইসিজি ও স্বাস্থ্য সচেতনতা সেন্টার',
        hospitalAffiliation: 'কাহারোল সেবা ডিজিটাল ল্যাব',
        phone: '01955-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ইকোকার্ডিওগ্রাফি & ইসিজি ডায়াগনস্টিক',
        experienceYears: 6,
        specialties: [
            'ডিজিটাল কম্পিউটারে ইসিজি রিপোর্ট',
            'উচ্চ রক্তচাপ পরীক্ষা ও কার্ডিয়াক ডায়েট টিপস',
            'জরুরি প্রাথমিক ঔষধ ও চেম্বার সেটিং'
        ],
        visitingFee: 500,
        chamberTime: 'সকাল ১০:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে সাধারণ ও বয়স্ক রোগীদের জন্য সাশ্রয়ী হৃদরোগ পরীক্ষা ও পরামর্শ সেবা।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const getCardiologyServices = async (query = {}) => {
    try {
        const count = await Cardiology.countDocuments();
        if (count === 0) {
            await Cardiology.insertMany(INITIAL_CARDIOLOGY_DATA);
        }
        
        const filter = {};
        if (query.status) {
            filter.status = query.status;
        }
        if (query.upazila && query.upazila !== 'সকল উপজেলা') {
            filter.upazila = query.upazila;
        }
        if (query.serviceType && query.serviceType !== 'সকল হৃদরোগ সেবা') {
            filter.serviceType = query.serviceType;
        }
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { degrees: { $regex: query.search, $options: 'i' } },
                { hospitalAffiliation: { $regex: query.search, $options: 'i' } },
                { phone: { $regex: query.search, $options: 'i' } },
                { address: { $regex: query.search, $options: 'i' } },
                { serviceType: { $regex: query.search, $options: 'i' } },
                { specialties: { $in: [new RegExp(query.search, 'i')] } }
            ];
        }

        return await Cardiology.find(filter).sort({ createdAt: -1 });
    } catch (error) {
        throw new Error(`Cardiology services fetch error: ${error.message}`);
    }
};

export const getCardiologyById = async (id) => {
    return await Cardiology.findById(id);
};

export const createCardiologyService = async (data) => {
    const newService = new Cardiology(data);
    return await newService.save();
};

export const updateCardiologyStatus = async (id, status) => {
    return await Cardiology.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteCardiologyService = async (id) => {
    return await Cardiology.findByIdAndDelete(id);
};
