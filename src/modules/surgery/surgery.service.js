import Surgery from './surgery.model.js';

const INITIAL_SURGERY_DATA = [
    {
        name: 'ডাঃ প্রফেসর মোঃ আনোয়ার হোসেন',
        degrees: 'MBBS, FCPS (Surgery), MS (General Surgery), FRCS (Glasgow)',
        hospitalAffiliation: 'প্রাক্তন প্রধান & কনসালটেন্ট (সার্জারি), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01713-556677',
        alternatePhone: '01816-889900',
        photo: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80',
        serviceType: 'জেনারেল & ল্যাপারোস্কোপিক সার্জারি',
        experienceYears: 22,
        specialties: [
            'ল্যাপারোস্কোপিক পিত্তথলির (Gallbladder) পাথর অপসারণ',
            'বিনা কাটাকাটিতে ফুটো করে অ্যাপেন্ডিসাইটিস অপারেশন',
            'জটিল হার্নিয়া, হাইড্রোসিল & থাইরয়েড সার্জারি'
        ],
        visitingFee: 1000,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, রয়্যাল সার্জিক্যাল কেয়ার পয়েন্ট (২য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '২২ বছরের অভিজ্ঞ সিনিয়র সার্জন। ল্যাপারোস্কোপিক পিত্তথলির পাথর, অ্যাপেন্ডিসাইটিস, থাইরয়েড ও জটিল পেটের অপারেশনে বিশেষজ্ঞ।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর ল্যাপারোস্কোপিক & লেজার সার্জারি কেন্দ্র',
        degrees: 'আধুনিক কি-হোল ও লেজার সার্জারি বিশেষায়িত হাসপাতাল',
        hospitalAffiliation: 'দিনাজপুর অ্যাডভান্সড সার্জিক্যাল ইনস্টিটিউট',
        phone: '01731-667788',
        alternatePhone: '01919-001122',
        photo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লেজার পাইলস & ফিস্টুলা অপারেশন',
        experienceYears: 16,
        specialties: [
            'যন্ত্রণা ছাড়া লেজার প্রোক্টোলজি (পাইলস, ফিশার & ফিস্টুলা)',
            'ল্যাপারোস্কোপিক ইনগুইনাল & ভেন্ট্রাল হার্নিয়া রিপেয়ার',
            'ব্রেস্ট টিউমার, সিস্ট & অনকোলজি সার্জারি'
        ],
        visitingFee: 900,
        chamberTime: 'সকাল ৯:০০ - রাত ৯:০০ (২৪ ঘণ্টা ওটি সাপোর্ট)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'জেল রোড, সেন্ট্রাল সার্জিক্যাল ভবন, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দিনাজপুরের সর্বাধুনিক লেজার ও ল্যাপারোস্কোপিক ওটি সুবিধাসম্পন্ন বিশেষায়িত জেনারেল সার্জারি হাসপাতাল।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ মোঃ মাহবুবার রহমান (সার্জন)',
        degrees: 'MBBS, FCPS (Surgery)',
        hospitalAffiliation: 'সহযোগী অধ্যাপক (সার্জারি বিভাগ), এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01822-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'গলব্লাডার পাথর & হার্নিয়া সার্জারি',
        experienceYears: 15,
        specialties: [
            'পিত্তথলির পাথর কি-হোল লেজার সার্জারি',
            'মেশ প্লাস্টি সহ জটিল হার্নিয়া অপারেশন',
            'টিউমার ও চর্বির থলি (Lipoma) স্থায়ী অপসারণ'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৫:০০ - রাত ৯:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর, পপুলার সার্জিক্যাল কনসালটেশন ল্যাব, দিনাজপুর সদর',
        isAvailable: true,
        description: '১৫ বছরের সফল ল্যাপারোস্কোপিক ও সাধারণ পেটের সার্জারি সেবা প্রদানকারী আন্তর্জাতিক প্রশিক্ষণপ্রাপ্ত সার্জন।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ সার্জিক্যাল কেয়ার & ট্রমা সেন্টার',
        degrees: 'জেনারেল সার্জারি ও অ্যাপেন্ডিক্স বিশেষজ্ঞ ক্লিনিক',
        hospitalAffiliation: 'বীরগঞ্জ হেলথ স্পেশালিস্ট কেয়ার',
        phone: '01743-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
        serviceType: 'জেনারেল & ল্যাপারোস্কোপিক সার্জারি',
        experienceYears: 12,
        specialties: [
            'জরুরি অ্যাপেন্ডিসাইটিস কি-হোল অপারেশন',
            'হাইড্রোসিল, ফোড়া ও পেটের গুটলি সার্জারি',
            'ক্ষত সেলাই ও ছোট দুর্ঘটনা পরবর্তী প্লাস্টিক সার্জারি'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ জিরো পয়েন্ট, নতুন বাসস্ট্যান্ড রোড, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জ উপজেলায় রোগীদের জন্য আধুনিক ওটি ও অভিজ্ঞ সার্জনের পরামর্শ কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর সার্জিক্যাল ডায়াগনস্টিক & ওটি সেন্টার',
        degrees: 'মেডিকেল সার্জন ও সার্জিক্যাল ইমেজিং সেন্টার',
        hospitalAffiliation: 'পার্বতীপুর জংশন সার্জিক্যাল হসপিটাল',
        phone: '01923-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80',
        serviceType: 'স্তন্য, থাইরয়েড & টিউমার সার্জারি',
        experienceYears: 14,
        specialties: [
            'ব্রেস্ট টিউমার ও সিস্ট নিরাপদ অপসারণ',
            'থাইরয়েড গ্রন্থির ফোলা ও গলগণ্ড অপারেশন',
            'পাইলস ও ফিশারের লেজার চিকিৎসা'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর সেন্ট্রাল বাসস্ট্যান্ড সংলগ্ন, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে আধুনিক পেইনলেস সার্জারি ও অভিজ্ঞ নারী ও পুরুষ সার্জন দ্বারা অপারেশন সুবিধা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী সার্জন চেম্বার & সার্জিক্যাল ল্যাব',
        degrees: 'MBBS, MS (Surgery)',
        hospitalAffiliation: 'কনসালটেন্ট সার্জন, ফুলবাড়ী ক্রিসেন্ট হসপিটাল',
        phone: '01754-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
        serviceType: 'জেনারেল & ল্যাপারোস্কোপিক সার্জারি',
        experienceYears: 10,
        specialties: [
            'পিত্তথলির পাথর ও অ্যাপেন্ডিক্স সার্জারি',
            'পাইলস, ফিস্টুলা ও এনাল রক্তপাত সমাধান',
            'শরীরের যে কোনো স্থানের টিউমার অপসারণ'
        ],
        visitingFee: 600,
        chamberTime: 'সকাল ১০:০০ - দুপুর ১:৩০ ও বিকাল ৫:০০ - রাত ৮:০০',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, ক্রিসেন্ট কমপ্লেক্স, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে সাশ্রয়ী ও নিরাপদ পরিবেশের আধুনিক সার্জারি পরামর্শ কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ সার্জিক্যাল ইউনিট & ওটি পয়েন্ট',
        degrees: 'জেনারেল ও ট্রমা সার্জারি সেন্টার',
        hospitalAffiliation: 'নবাবগঞ্জ সেন্ট্রাল হেলথ প্লাজা',
        phone: '01835-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'গলব্লাডার পাথর & হার্নিয়া সার্জারি',
        experienceYears: 9,
        specialties: [
            'ল্যাপারোস্কোপিক পিত্তথলির পাথর ও হার্নিয়া',
            'জরুরি সেলাই ও দুর্ঘটনা আঘাত পরবর্তী ড্রেসিং',
            'অন-কল সার্জন ও জরুরি অ্যানেস্থেশিয়া সাপোর্ট'
        ],
        visitingFee: 600,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ সদর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জ উপজেলায় জরুরি অ্যাপেন্ডিসাইটিস ও হার্নিয়া অপারেশনের নির্ভরযোগ্য সেন্টার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ সার্জারি & ল্যাপারোস্কোপি সেন্টার',
        degrees: 'MBBS, FCPS (Surgery Part-II), MS',
        hospitalAffiliation: 'সিনিয়র সার্জন, সেতাবগঞ্জ ডক্টরস পয়েন্ট',
        phone: '01945-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80',
        serviceType: 'জেনারেল & ল্যাপারোস্কোপিক সার্জারি',
        experienceYears: 11,
        specialties: [
            'পিত্তথলির ল্যাপারোস্কোপিক অপারেশন',
            'অর্শ রোগ ও পাইলসের সেফ সার্জারি',
            'হাইড্রোসিল ও হার্নিয়া মেশ রিপেয়ার'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ পৌর মার্কেট, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে ছোট ফুটো করে আধুনিক পিত্তথলি ও পেটের দাগহীন অপারেশনের ব্যবস্থা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর সার্জিক্যাল ফার্স্ট এইড & ক্লিনিক',
        degrees: 'প্রাথমিক সার্জিক্যাল ও অ্যাপেন্ডিক্স স্ক্রিনিং',
        hospitalAffiliation: 'চিরিরবন্দর মেগা মডার্ন ল্যাব',
        phone: '01765-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
        serviceType: 'গলব্লাডার পাথর & হার্নিয়া সার্জারি',
        experienceYears: 8,
        specialties: [
            'জরুরি পেটের ব্যথার আলট্রাসাউন্ড ও সার্জিক্যাল অ্যাসেসমেন্ট',
            'ছোট কাটা-ছেঁড়া ও ফোঁড়া ইনসিশন ও ড্রেনেজ',
            'সদর মেডিকেল হাসপাতালে ডাইরেক্ট ওটি রেফারেল'
        ],
        visitingFee: 500,
        chamberTime: 'সকাল ৯:০০ - রাত ৯:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে দ্রুত পেটের ব্যথার সার্জিক্যাল জটিলতা নির্ণয় ও প্রাথমিক অপারেশন সাপোর্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট সার্জারি স্পেশালিস্ট চেম্বার',
        degrees: 'MBBS, FCPS (Surgery)',
        hospitalAffiliation: 'ঘোড়াঘাট জেনারেল সার্জিক্যাল কেয়ার',
        phone: '01855-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
        serviceType: 'স্তন্য, থাইরয়েড & টিউমার সার্জারি',
        experienceYears: 10,
        specialties: [
            'থাইরয়েড রোগ ও স্তনের টিউমার সার্জারি',
            'পাইলস ও ফিস্টুলা স্থায়ী নিরাময়',
            'অ্যাপেন্ডিসাইটিস ও হার্নিয়ার অপারেশন'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শনিবার ও মঙ্গলবার)',
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট জিরো পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে নিয়মিত অভিজ্ঞ সার্জনের চেম্বার ও প্রি-অপারেটিভ কাউন্সেলিং।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল কান্তনগর সার্জারি পয়েন্ট',
        degrees: 'সার্জিক্যাল কনসালটেশন ও মাইনর ওটি',
        hospitalAffiliation: 'কাহারোল সেবা ডিজিটাল ওটি ল্যাব',
        phone: '01956-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'জেনারেল & ল্যাপারোস্কোপিক সার্জারি',
        experienceYears: 7,
        specialties: [
            'মাইনর ওটিতে লিপোমা, সিস্ট ও কড়া (Corn) অপসারণ',
            'ড্রেসিং ও সেলাই ফ্রেশ করা',
            'সার্জারি পরবর্তী ফলোআপ ড্রেসিং'
        ],
        visitingFee: 500,
        chamberTime: 'সকাল ১০:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে সাধারণ ও মাইনর সার্জারি রোগীদের জন্য বিশ্বস্ত পরামর্শ সেবা।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const getSurgeryServices = async (query = {}) => {
    try {
        const count = await Surgery.countDocuments();
        if (count === 0) {
            await Surgery.insertMany(INITIAL_SURGERY_DATA);
        }
        
        const filter = {};
        if (query.status) {
            filter.status = query.status;
        }
        if (query.upazila && query.upazila !== 'সকল উপজেলা') {
            filter.upazila = query.upazila;
        }
        if (query.serviceType && query.serviceType !== 'সকল সার্জারি সেবা') {
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

        return await Surgery.find(filter).sort({ createdAt: -1 });
    } catch (error) {
        throw new Error(`Surgery services fetch error: ${error.message}`);
    }
};

export const getSurgeryById = async (id) => {
    return await Surgery.findById(id);
};

export const createSurgeryService = async (data) => {
    const newService = new Surgery(data);
    return await newService.save();
};

export const updateSurgeryStatus = async (id, status) => {
    return await Surgery.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteSurgeryService = async (id) => {
    return await Surgery.findByIdAndDelete(id);
};
