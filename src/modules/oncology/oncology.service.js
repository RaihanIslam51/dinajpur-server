import Oncology from './oncology.model.js';
import mongoose from 'mongoose';

const INITIAL_ONCOLOGY_DATA = [
    {
        name: 'ডাঃ প্রফেসর মোঃ আনোয়ারুল ইসলাম (অনকোলজি বিশেষজ্ঞ)',
        degrees: 'MBBS, FCPS (Radiotherapy), MD (Radiation Oncology - BSMMU), Fellow (WHO Oncology)',
        hospitalAffiliation: 'প্রফেসর & বিভাগীয় প্রধান (অনকোলজি বিভাগ), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01711-889900',
        alternatePhone: '01819-112233',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মেডিকেল অনকোলজি & ক্যান্সার বিশেষজ্ঞ',
        experienceYears: 24,
        specialties: [
            'ফুসফুস, স্তন (Breast Cancer) ও পাকস্থলীর ক্যান্সারের আধুনিক কিমোথেরাপি',
            'রেডিয়েশন থেরাপি & রেডিওথেরাপি চিকিৎসা পরিকল্পনা',
            'ক্যান্সার টিউমার নিরাময় ও প্যালিয়েটিভ কেয়ার (Palliative Care)'
        ],
        visitingFee: 1000,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, দিনাজপুর ক্যান্সার & অনকোলজি সেন্টার (২য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '২৪ বছরের অভিজ্ঞ সিনিয়র অনকোলজিস্ট। স্তন, ফুসফুস ও জরায়ুমুখের ক্যান্সারের আধুনিক টার্গেটেড থেরাপি ও কিমোথেরাপির ক্ষেত্রে সুনামধন্য বিশেষজ্ঞ।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর ডে-কেয়ার কিমোথেরাপি & অনকোলজি সেন্টার',
        degrees: 'আধুনিক কম্পিউটারাইজড কিমো ডাইনামিক ইনফিউশন & অনকোলজি ডে কেয়ার ল্যাব',
        hospitalAffiliation: 'দিনাজপুর ক্যান্সার সাপোর্ট এন্ড রিসার্চ ইন্সটিটিউট',
        phone: '01739-445566',
        alternatePhone: '01919-778899',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'কিমোথেরাপি & অনকোলজি ডে-কেয়ার সেন্টার',
        experienceYears: 15,
        specialties: [
            'নিরাপদ ও সুনিয়ন্ত্রিত কিমোথেরাপি ইনফিউশন সেবা',
            'কিমোথেরাপি পরবর্তী পার্শপ্রতিক্রিয়া ও বমি বমি ভাব উপশম ব্যবস্থাপনা',
            'পোর্ট-এ-ক্যাথ (Port-a-Cath) ও সেন্ট্রাল লাইন কেয়ার'
        ],
        visitingFee: 800,
        chamberTime: 'সকাল ৮:৩০ - রাত ৯:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'জেল রোড, ক্যান্সার কেয়ার টাওয়ার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'ক্যান্সার রোগীদের স্বাচ্ছন্দ্যদায়ক পরিবেশে ডে-কেয়ার কিমোথেরাপি প্রদানের দিনাজপুর জেলার সর্বাধুনিক ও নিরাপদ কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ মোসাম্মৎ নাজমুন নাহার (সার্জিক্যাল অনকোলজিস্ট)',
        degrees: 'MBBS, MS (Surgical Oncology - BSMMU), FCPS (Surgery)',
        hospitalAffiliation: 'সহযোগী অধ্যাপক (সার্জিক্যাল অনকোলজি), এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01831-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'সার্জিক্যাল অনকোলজি (ক্যান্সার সার্জন)',
        experienceYears: 16,
        specialties: [
            'স্তন ক্যানসারের ব্রেস্ট কনজারভিং সার্জারি ও মাস্টেকটমি',
            'জরায়ু ও ডিম্বাশয়ের (Ovarian & Uterine Cancer) জটিল অস্ত্রোপচার',
            'পাকস্থলী ও কোলন ক্যান্সার ল্যাপারোস্কোপিক সার্জারি'
        ],
        visitingFee: 900,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর, ক্যান্সার সার্জারি চেম্বার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'স্তন ও জরায়ু ক্যান্সারের সফল অস্ত্রোপচারে অভিজ্ঞ প্রখ্যাত নারী সার্জিক্যাল অনকোলজিস্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ তৌহিদ হাসান (রেডিয়েশন অনকোলজি বিশেষজ্ঞ)',
        degrees: 'MBBS (RU), MD (Radiation Oncology - BSMMU)',
        hospitalAffiliation: 'কনসালটেন্ট (অনকোলজি বিভাগ), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01712-112233',
        alternatePhone: '01912-445566',
        photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
        serviceType: 'রেডিয়েশন থেরাপি & রেডিওথেরাপি ল্যাব',
        experienceYears: 12,
        specialties: [
            'হেড-নেক (নাক, কান, গলা, মুখ) ক্যান্সারের সুনির্দিষ্ট রেডিওথেরাপি',
            'প্রোস্টেট ও মূত্রথলির ক্যান্সারের ইমপ্লান্ট রেডিওথেরাপি গাইডেন্স',
            'ইমিউনোথেরাপি ও অনকোলজি টার্গেটেড থেরাপি'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৩:৩০ - সন্ধ্যা ৭:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ বাসস্ট্যান্ড, অনকোলজি সেবামূল কেয়ার, বীরগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'রেডিওথেরাপি ও ব্র্যাকিথেরাপির নিখুঁত প্ল্যানিংয়ে অভিজ্ঞ অনকোলজি বিশেষজ্ঞ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর প্রারম্ভিক ক্যান্সার স্ক্রিনিং & ব্র্যাকেট ল্যাব',
        degrees: 'ম্যামোগ্রাফি, প্যাচ টেস্ট, এফএনএসি (FNAC) & মলিকুলার বায়োপসি সেন্টার',
        hospitalAffiliation: 'দিনাজপুর উইমেনস কেয়ার & ক্যান্সার স্ক্রিনিং সেন্টার',
        phone: '01755-443322',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ক্যান্সার স্ক্রিনিং & বায়োপসি সেন্টার',
        experienceYears: 13,
        specialties: [
            'জরায়ুমুখের ক্যান্সার সনাক্তকরণে প্যাপ স্মিয়ার (Pap Smear) ও VIA টেস্ট',
            'স্তন ক্যান্সারের ডিজিটাল ম্যামোগ্রাফি ও আল্ট্রাসাউন্ড',
            'টিউমার মার্কার (CEA, CA-125, PSA) রক্ত পরীক্ষা'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৫:০০ - রাত ৯:০০ (রবিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'নতুন বাজার, স্ক্রিনিং টাওয়ার, পার্বতীপুর, দিনাজপুর',
        isAvailable: true,
        description: 'প্রাথমিক পর্যায়েই ক্যান্সার সনাক্তকরণের আধুনিক বায়োপসি ও ম্যামোগ্রাফি সেন্টার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ মোসাঃ শাহিনা আক্তার (গাইনি অনকোলজিস্ট)',
        degrees: 'MBBS, FCPS (OBGYN), Fellowship in Gynecological Oncology (Tata Cancer Hospital)',
        hospitalAffiliation: 'সহযোগী অধ্যাপক (গাইনি অনকোলজি), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01822-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মেডিকেল অনকোলজি & ক্যান্সার বিশেষজ্ঞ',
        experienceYears: 17,
        specialties: [
            'নারীদের জরায়ু, সার্ভিক্স ও ওভারিয়ান ক্যান্সারের কিমোথেরাপি',
            'এইচপিভি (HPV) ভাইরাস ও সার্ভিক্যাল ক্যান্সার প্রতিরোধ টিকাদান',
            'গর্ভকালীন ক্যান্সার ব্যবস্থাপনা'
        ],
        visitingFee: 900,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, উইমেন ক্যান্সার সেন্টার, ফুলবাড়ী, দিনাজপুর',
        isAvailable: true,
        description: 'নারীদের প্রজননতন্ত্রের ক্যান্সার চিকিৎসায় আন্তর্জাতিক প্রশিক্ষণপ্রাপ্ত বিশেষজ্ঞ গাইনি অনকোলজিস্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ মোঃ রফিকুল ইসলাম (হেমাটো-অনকোলজিস্ট)',
        degrees: 'MBBS, MD (Hematology & Blood Cancer - BSMMU), FCPS (Medicine)',
        hospitalAffiliation: 'রক্তরোগ ও ব্লাড ক্যান্সার বিশেষজ্ঞ, এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01744-990011',
        alternatePhone: '01944-556677',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'প্যালিয়েটিভ & ব্লাড ক্যান্সার (Leukemia) কেয়ার',
        experienceYears: 14,
        specialties: [
            'লিউকেমিয়া (Leukemia), লিম্ফোমা (Lymphoma) ও মাইলোমা চিকিৎসা',
            'বোন ম্যারো বায়োপসি (Bone Marrow Biopsy) ও সেল অ্যাসেসমেন্ট',
            'রক্তাল্পতা ও প্লেটলেট ঘাটতির কিমোথেরাপিউটিক ম্যানেজমেন্ট'
        ],
        visitingFee: 850,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:৩০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'হাসপাতাল রোড, হেমাটোলজি & ক্যান্সার সেন্টার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'ব্লাড ক্যান্সার, লিউকেমিয়া ও বোন ম্যারো চিকিৎসায় দিনাজপুরের অন্যতম প্রখ্যাত হেমাটো-অনকোলজিস্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ প্যালিয়েটিভ & ক্যান্সার কেয়ার সেন্টার',
        degrees: 'ক্যান্সার ব্যথানাশক (Pain Management) & প্যালিয়েটিভ কেয়ার ইউনিট',
        hospitalAffiliation: 'নবাবগঞ্জ সেন্ট্রাল ক্যান্সার কেয়ার',
        phone: '01788-554433',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'প্যালিয়েটিভ & ব্লাড ক্যান্সার (Leukemia) কেয়ার',
        experienceYears: 10,
        specialties: [
            'শেষ পর্যায়ের ক্যান্সার রোগীদের যন্ত্রণা উপশম (Cancer Pain Management)',
            'হোম-বেসড প্যালিয়েটিভ নার্সিং সেবা ও অক্সিজেন সাপোর্ট',
            'ক্যান্সার রোগী ও স্বজনদের মানসিক কাউন্সিলিং'
        ],
        visitingFee: 600,
        chamberTime: 'সকাল ৯:০০ - সন্ধ্যা ৬:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাজার রোড, প্যালিয়েটিভ প্লাজা, নবাবগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'ক্যান্সার আক্রান্ত রোগীদের যন্ত্রণা লাঘব ও জীবনযাত্রার মান বৃদ্ধিতে বিশেষায়িত প্যালিয়েটিভ সেন্টার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ থাইরয়েড & স্কিন ক্যান্সার কেয়ার',
        degrees: 'মেলানোমা, স্কিন ক্যান্সার & থাইরয়েড অনকোলজি চেম্বার',
        hospitalAffiliation: 'সেতাবগঞ্জ কেয়ার কমপ্লেক্স',
        phone: '01811-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ক্যান্সার স্ক্রিনিং & বায়োপসি সেন্টার',
        experienceYears: 11,
        specialties: [
            'থাইরয়েড গ্ল্যান্ডের ক্যান্সার সনাক্তকরণ ও রেডিওআইসোটোপ সাপোর্ট',
            'ত্বকের ক্যান্সার (Skin Cancer) ও তিলের পরিবর্তন পর্যবেক্ষণ',
            'টিউমার বায়োপসি ও সাইটোপ্যাথোলজি'
        ],
        visitingFee: 600,
        chamberTime: 'বিকাল ৩:০০ - রাত ৭:৩০ (রবিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ বড় মাঠ সংলগ্ন, কেয়ার প্লাজা, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'ত্বক ও থাইরয়েডের টিউমার চিকিৎসায় সহায়ক অনকোলজি ডায়াগনস্টিক চেম্বার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বিরামপুর সার্জিক্যাল অনকোলজি & বায়োপসি পয়েন্ট',
        degrees: 'ক্যান্সার সার্জারি, লিম্ফ নোড বায়োপসি & ওরাল অনকোলজি চেম্বার',
        hospitalAffiliation: 'বিরামপুর মডেল অনকোলজি সেন্টার',
        phone: '01719-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'সার্জিক্যাল অনকোলজি (ক্যান্সার সার্জন)',
        experienceYears: 13,
        specialties: [
            'মুখের ক্যান্সার (Oral Cancer) ও মাড়ির টিউমার সার্জারি',
            'লিম্ফ নোড বা গুটলির বায়োপসি সনাক্তকরণ',
            'পাকস্থলী ও পিত্তথলির ক্যান্সার স্ক্রিনিং'
        ],
        visitingFee: 700,
        chamberTime: 'সকাল ১০:০০ - বিকাল ৫:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বিরামপুর',
        address: 'বিরামপুর বাসস্ট্যান্ড রোড, কেয়ার বিল্ডিং, বিরামপুর, দিনাজপুর',
        isAvailable: true,
        description: 'দক্ষিণাঞ্চলের ক্যান্সার রোগীদের সার্জারি পরবর্তী ফলোআপ ও বায়োপসির নির্ভরযোগ্য কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর পেডিয়াট্রিক অনকোলজি & ব্লাড হেলথ',
        degrees: 'শিশু ক্যান্সার, চাইল্ড কিমোথেরাপি & থ্যালাসেমিয়া সেন্টার',
        hospitalAffiliation: 'চিরিরবন্দর শিশু অনকোলজি একাডেমি',
        phone: '01855-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মেডিকেল অনকোলজি & ক্যান্সার বিশেষজ্ঞ',
        experienceYears: 9,
        specialties: [
            'শিশুদের লিউকেমিয়া ও ব্রেইন টিউমার চিকিৎসা',
            'থ্যালাসেমিয়া ও রক্তের ক্যান্সার কাউন্সিলিং',
            'শিশু রোগীদের কিমোথেরাপিউটিক যত্ন'
        ],
        visitingFee: 650,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (সোম ও শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রেলগেট মোড়, অনকোলজি ভবন, চিরিরবন্দর, দিনাজপুর',
        isAvailable: true,
        description: 'শিশুদের রক্ত ও ক্যান্সারজনিত রোগের চিকিৎসায় বিশেষায়িত পেডিয়াট্রিক অনকোলজি কেয়ার।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const getOncologists = async () => {
    try {
        if (mongoose.connection.readyState !== 1) {
            return INITIAL_ONCOLOGY_DATA;
        }
        let list = await Oncology.find({ status: 'approved' }).sort({ createdAt: -1 });
        if (!list || list.length === 0) {
            await Oncology.insertMany(INITIAL_ONCOLOGY_DATA);
            list = await Oncology.find({ status: 'approved' }).sort({ createdAt: -1 });
        }
        return list && list.length > 0 ? list : INITIAL_ONCOLOGY_DATA;
    } catch (err) {
        console.error('Oncology Service Error:', err);
        return INITIAL_ONCOLOGY_DATA;
    }
};

export const getAllOncologistsAdmin = async () => {
    try {
        if (mongoose.connection.readyState !== 1) {
            return INITIAL_ONCOLOGY_DATA;
        }
        let list = await Oncology.find().sort({ createdAt: -1 });
        if (!list || list.length === 0) {
            await Oncology.insertMany(INITIAL_ONCOLOGY_DATA);
            list = await Oncology.find().sort({ createdAt: -1 });
        }
        return list && list.length > 0 ? list : INITIAL_ONCOLOGY_DATA;
    } catch (err) {
        console.error('Oncology Admin Service Error:', err);
        return INITIAL_ONCOLOGY_DATA;
    }
};

export const createOncologist = async (data) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            const newItem = { id: `onc_${Date.now()}`, ...data, status: 'pending' };
            INITIAL_ONCOLOGY_DATA.unshift(newItem);
            return newItem;
        }
        const newDoc = new Oncology(data);
        return await newDoc.save();
    } catch (err) {
        console.error('Create Oncology Error:', err);
        throw err;
    }
};

export const updateOncologistStatus = async (id, status) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            const match = INITIAL_ONCOLOGY_DATA.find(d => (d._id === id || d.id === id));
            if (match) match.status = status;
            return match;
        }
        return await Oncology.findByIdAndUpdate(id, { status }, { new: true });
    } catch (err) {
        console.error('Update Oncology Status Error:', err);
        throw err;
    }
};

export const deleteOncologist = async (id) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            const idx = INITIAL_ONCOLOGY_DATA.findIndex(d => (d._id === id || d.id === id));
            if (idx !== -1) INITIAL_ONCOLOGY_DATA.splice(idx, 1);
            return true;
        }
        return await Oncology.findByIdAndDelete(id);
    } catch (err) {
        console.error('Delete Oncology Error:', err);
        throw err;
    }
};
