import Ent from './ent.model.js';

const INITIAL_ENT_DATA = [
    {
        name: 'ডাঃ প্রফেসর মোঃ মোসাদ্দেক হোসেন',
        degrees: 'MBBS, DLO (DU), FCPS (ENT), MS (Otolaryngology)',
        hospitalAffiliation: 'প্রাক্তন প্রধান (ইএনটি বিভাগ), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01714-112233',
        alternatePhone: '01818-445566',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'নাক, কান & গলা রোগ বিশেষজ্ঞ ও হেড-নেক সার্জন',
        experienceYears: 18,
        specialties: [
            'মাইক্রো কান অপারেশন (কানের পর্দা পুনর্গঠন & টিম্পানোপ্লাস্টি)',
            'সাইনাসাইটিস & নাকের হাড় বাঁকা (DNS) লেজার সার্জারি',
            'টনসিল ও এডিনয়েড ব্যথমুক্ত প্লাজমা কোবলেশন অপারেশন'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, ইএনটি হেড-নেক কেয়ার সেন্টার (২য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '১৮ বছরের অভিজ্ঞ প্রখ্যাত নাক, কান, গলা ও হেড-নেক সার্জন ডাক্তার।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর ইএনটি & অডিওলজি হেয়ারিং সেন্টার',
        degrees: 'বিশেষায়িত শ্রবণ পরীক্ষা, স্পিচ থেরাপি ও ইএনটি ডায়াগনস্টিক',
        hospitalAffiliation: 'দিনাজপুর সেন্ট্রাল ইএনটি অ্যান্ড অডিওলজি হাসপাতাল',
        phone: '01735-667788',
        alternatePhone: '01914-990011',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'শ্রবণ যন্ত্র (Hearing Aid) & অডিওমেট্রি সেন্টার',
        experienceYears: 15,
        specialties: [
            'ডিজিটাল পিটিএ (PTA) শ্রবণশক্তি ও কম শোনার অডিওমেট্রি টেস্ট',
            'কাটিং এজ ডিজিটাল হিয়ারিং এইড (কানে শোনার ডিজিটাল মেশিন)',
            'কথা বলায় জড়তা ও বাক-প্রতিবন্ধীদের স্পিচ থেরাপি'
        ],
        visitingFee: 600,
        chamberTime: 'সকাল ৯:০০ - দুপুর ১:৩০ ও বিকাল ৪:৩০ - রাত ৯:০০',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'জেল রোড, অডিওলজি টাওয়ার (৩য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: 'কানে কম শোনা, কানের ভেতরের ভোঁ ভোঁ শব্দ (Tinnitus) ও হিয়ারিং এইড ফিটিং সেন্টার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ শামিমা পারভীন (ইএনটি স্পেশালিস্ট)',
        degrees: 'MBBS, DLO (BSMMU), MS (ENT)',
        hospitalAffiliation: 'কনসালটেন্ট (ইএনটি), দিনাজপুর জেনারেল হাসপাতাল',
        phone: '01826-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মহিলা ও শিশুদের ইএনটি কেয়ার',
        experienceYears: 11,
        specialties: [
            'শিশুদের কান পাকা, কানের ব্যথায় পুঁজ পড়া ও পানি জমিন নিরাময়',
            'গলার স্বরভঙ্গ (Voice Hoarseness) ও থাইরয়েড গ্ল্যান্ড টিউমার',
            'নাক দিয়ে রক্ত পড়া (Epistaxis) ও এলার্জিক রাইনাইটিস'
        ],
        visitingFee: 600,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর, চিলড্রেন & উইমেন ইএনটি চেম্বার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'মহিলা ও শিশুদের নাক, কান ও গলার যেকোনো জটিলতার অভিজ্ঞ চিকিৎসক।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ ইএনটি কেয়ার & সাইনাস পয়েন্ট',
        degrees: 'নাক, কান ও গলা রোগ চেম্বার',
        hospitalAffiliation: 'বীরগঞ্জ রয়্যাল ইএনটি অ্যান্ড সার্জিক্যাল ডায়াগনস্টিক',
        phone: '01747-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'নাক, কান & গলা রোগ বিশেষজ্ঞ ও হেড-নেক সার্জন',
        experienceYears: 10,
        specialties: [
            'টনসিল, গলার ইনফেকশন ও মাথা ঘোরার (Vertigo) চিকিৎসা',
            'নাক বন্ধ থাকা ও নাকের মাংস বৃদ্ধির ওষুধ ও এন্ডোস্কোপি',
            'কানের মইল ওয়াশ ও জীবানুমুক্ত মাইক্রো ক্লিনিং'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ জিরো পয়েন্ট, নতুন ডক্টরস ল্যাব, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জে নাক, কান ও গলার সকল রোগের নিয়মিত চিকিৎসা সেবা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর ইএনটি & হেড-নেক সার্জারি',
        degrees: 'MBBS, DLO (Dhaka)',
        hospitalAffiliation: 'সিনিয়র মেডিকেল অফিসার (ইএনটি), পার্বতীপুর জংশন হাসপাতাল',
        phone: '01927-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'নাক, কান & গলা রোগ বিশেষজ্ঞ ও হেড-নেক সার্জন',
        experienceYears: 13,
        specialties: [
            'টনসিল ও সাইনাসাইটিস আধুনিক চিকিৎসা',
            'গলায় খাবার আটকানোর অনুভূতি (Globus) সমাধান',
            'কানে পর্দা ফাটার চিকিৎসায় ড্রপ ও ওষুধ'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর বাসস্ট্যান্ড মোড়, ইএনটি স্পেশালিস্ট কেয়ার, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে অভিজ্ঞ ইএনটি সার্জন দ্বারা কানে কম দেখা ও গলা ব্যথার আধুনিক চিকিৎসা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী সানরাইজ ইএনটি চেম্বার',
        degrees: 'MBBS, FCPS (ENT Part-II)',
        hospitalAffiliation: 'কনসালটেন্ট (ইএনটি), ফুলবাড়ী জেনারেল ডায়াগনস্টিক',
        phone: '01758-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'নাক, কান & গলা রোগ বিশেষজ্ঞ ও হেড-নেক সার্জন',
        experienceYears: 9,
        specialties: [
            'নাক ডাকা (Snoring) ও ঘুমে শ্বাসকষ্ট সমস্যা',
            'কানের চুলকানি ও ফাঙ্গাল ছত্রাক ইনফেকশন',
            'জিহ্বায় ঘা ও মুখের ভেতরের ক্যানসার স্ক্রিনিং'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, ইএনটি স্পেশাল ক্লিনিক, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে নাক, কান ও গলা ব্যথার জন্য নির্ভরযোগ্য চিকিৎসা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ ইএনটি & নোজ কেয়ার',
        degrees: 'নাক, কান ও গলা রোগ প্রাথমিক চেম্বার',
        hospitalAffiliation: 'নবাবগঞ্জ হেলথ সেন্টার',
        phone: '01839-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'নাক, কান & গলা রোগ বিশেষজ্ঞ ও হেড-নেক সার্জন',
        experienceYears: 8,
        specialties: [
            'নাক দিয়ে পানি পড়া ও হাঁচি এলার্জি নিরাময়',
            'কানে ফরেন বডি (বস্তু/পোকা) বের করা',
            'টনসিলের ব্যথা কমানো'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে কম খরচে নাক, কান ও গলার ফার্স্ট এইড ও চিকিৎসা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ ইএনটি ক্লিনিক',
        degrees: 'MBBS, DLO',
        hospitalAffiliation: 'সিনিয়র ইএনটি স্পেশালিস্ট, সেতাবগঞ্জ ডায়াগনস্টিক',
        phone: '01949-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'নাক, কান & গলা রোগ বিশেষজ্ঞ ও হেড-নেক সার্জন',
        experienceYears: 11,
        specialties: [
            'কানে শোঁ শোঁ শব্দ হওয়া চিকিৎসা',
            'নাক বন্ধ হয়ে যাওয়া ওষুধ ও ড্রপ',
            'গলার ভেতর শক্ত কিছু আটকে থাকা আমেজ'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ পৌর মার্কেট, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে ইএনটি বিশেষজ্ঞ ডাক্তার দ্বারা নাক, কান ও গলার সম্পূর্ণ যত্ন।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর ইএনটি ফার্স্ট এইড পয়েন্ট',
        degrees: 'নাক কান গলা প্রাথমিক সেবা',
        hospitalAffiliation: 'চিরিরবন্দর মেডিকেল কেয়ার',
        phone: '01769-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'নাক, কান & গলা রোগ বিশেষজ্ঞ ও হেড-নেক সার্জন',
        experienceYears: 7,
        specialties: [
            'কানের ময়লা সফটেনিং ও ওয়াশ',
            'হঠাৎ কানের তীব্র ব্যথা নিরাময়',
            'গলা ও গ্ল্যান্ডের ফোলা পরামর্শ'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ৯:০০ - রাত ৯:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে কম খরচে নাক ও কানের সমস্যায় সাধারণ রোগীদের পরামর্শ কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট ইএনটি অ্যান্ড সাইনাস সেন্টার',
        degrees: 'MBBS, PGT (ENT)',
        hospitalAffiliation: 'ঘোড়াঘাট ডায়াগনস্টিক অ্যান্ড ইএনটি কেয়ার',
        phone: '01859-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'নাক, কান & গলা রোগ বিশেষজ্ঞ ও হেড-নেক সার্জন',
        experienceYears: 9,
        specialties: [
            'দীর্ঘদিনের সাইনাস ও মাথাব্যথা সমাধান',
            'টনসিল প্রদাহ প্রতিরোধ',
            'কানে কম শোনার প্রাথমিক কারণ নির্ণয়'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শনি ও মঙ্গলবার)',
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট জিরো পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে অভিজ্ঞ চিকিৎসক দ্বারা নাক, কান ও গলা রোগের চিকিৎসাসেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল কান্তনগর ইএনটি সেবা চেম্বার',
        degrees: 'ইএনটি স্বাস্থ্য পরামর্শ কেন্দ্র',
        hospitalAffiliation: 'কাহারোল সেবা ডিজিটাল ল্যাব',
        phone: '01950-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'নাক, কান & গলা রোগ বিশেষজ্ঞ ও হেড-নেক সার্জন',
        experienceYears: 6,
        specialties: [
            'কানে পানি ঢুকে ব্যথা উপশম',
            'গলার খুসখুস কাশি ও টনসিল ড্রপ',
            'নাক পরিষ্কার ও স্টিম ইনহেলেশন টিপস'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ১০:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে সাধারণ রোগীদের সাশ্রয়ী ইএনটি সেবা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const getAllEntServices = async (query = {}) => {
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

        const count = await Ent.countDocuments();
        if (count === 0) {
            await Ent.insertMany(INITIAL_ENT_DATA);
        }

        return await Ent.find(filter).sort({ createdAt: -1 });
    } catch (error) {
        console.error('Error in getAllEntServices:', error);
        return INITIAL_ENT_DATA;
    }
};

export const getEntById = async (id) => {
    return await Ent.findById(id);
};

export const createEntService = async (data) => {
    const newService = new Ent(data);
    return await newService.save();
};

export const updateEntStatus = async (id, status) => {
    return await Ent.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteEntService = async (id) => {
    return await Ent.findByIdAndDelete(id);
};
