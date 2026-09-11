import Ophthalmology from './ophthalmology.model.js';

const INITIAL_OPHTHALMOLOGY_DATA = [
    {
        name: 'ডাঃ মোঃ হাবিবুর রহমান (ফেকো সার্জন)',
        degrees: 'MBBS, DO (DU), FCPS (Ophthalmology), MS (Eye)',
        hospitalAffiliation: 'প্রফেসর & বিভাগীয় প্রধান (চক্ষু বিভাগ), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01712-998877',
        alternatePhone: '01819-334455',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চক্ষু রোগ বিশেষজ্ঞ & ফেকো সার্জন',
        experienceYears: 19,
        specialties: [
            'মাইক্রো সার্জন ফেকো সার্জারি (ব্যথমুক্ত ও সেলাইবিহীন ছানি অপারেশন)',
            'গ্লকোমা (চোখের চাপ) ও রেটিনা ডায়াবেটিক রেটিনোপ্যাথি চিকিৎসা',
            'কম্পিউটারাইজড চশমা পাওয়ার ও দৃষ্টিশক্তি পরীক্ষা'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল রোড, দিনাজপুর আই অ্যান্ড ফেকো সেন্টার (২য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '১৯ বছরের অভিজ্ঞ প্রখ্যাত চক্ষু বিশেষজ্ঞ ও ফেকো সার্জন ডাক্তার।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর লায়ন্স চক্ষু হাসপাতাল & লেজার ফোটো ডায়াগনস্টিক',
        degrees: 'বিশেষায়িত চক্ষু হাসপাতাল, ফেকো অপারেশন ও অপটিক্যাল',
        hospitalAffiliation: 'দিনাজপুর লায়ন্স ট্রাস্ট আই হসপিটাল',
        phone: '01736-554433',
        alternatePhone: '01915-221100',
        photo: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
        serviceType: 'বিশেষায়িত চক্ষু হাসপাতাল & অপটিক্যাল কেন্দ্র',
        experienceYears: 22,
        specialties: [
            'ছানি রোগী স্ক্রিনিং, বিনামূল্যে লেন্স সংযোজন সেবা শিবীর',
            'অটো রিফ্র্যাক্টোমিটার দ্বারা ডিজিটাল চশমার গ্লাস নির্বাচন',
            'জরুরি চোখের ইনজুরি ও কর্নিয়া আলসার চিকিৎসা'
        ],
        visitingFee: 500,
        chamberTime: 'সকাল ৮:৩০ - দুপুর ২:০০ ও বিকাল ৪:০০ - রাত ৮:০০',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর লায়ন্স হাসপাতাল রোড, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দিনাজপুরের সর্বাধুনিক লায়ন্স আই হসপিটাল ও লেজার ডায়াগনস্টিক সেন্টার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ ফারজানা আক্তার (শিশু চক্ষু বিশেষজ্ঞ)',
        degrees: 'MBBS, DO (BSMMU), Fellow (Pediatric Ophthalmology & Strabismus)',
        hospitalAffiliation: 'কনসালটেন্ট (চক্ষু), দিনাজপুর জেনারেল হাসপাতাল',
        phone: '01828-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'শিশু চক্ষু রোগ & ছানি-টেরাবাক বিশেষজ্ঞ',
        experienceYears: 12,
        specialties: [
            'শিশুদের চালসে/টেরা চোখ (Squint) সংশোধন অপারেশন',
            'বাচ্চাদের চোখে পানি পড়া, অ্যালার্জি ও জন্মগত ছানি চিকিৎসা',
            'কম্পিউটার স্ক্রিন ভিশন সিন্ড্রোম ও নীল আলো প্রতিরোধী চশমা'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'জেল রোড, চাইল্ড আই স্পেশালিস্ট কেয়ার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'শিশুদের চোখের যেকোনো সমস্যায় অভিজ্ঞ কনসালটেন্ট চক্ষু ডাক্তার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ ভিশন চক্ষু কেয়ার & ফেকো সেন্টার',
        degrees: 'চক্ষু রোগ ও চশমা গ্যালারি',
        hospitalAffiliation: 'বীরগঞ্জ রয়েল অপটিকস অ্যান্ড আই ডায়াগনস্টিক',
        phone: '01748-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চক্ষু রোগ বিশেষজ্ঞ & ফেকো সার্জন',
        experienceYears: 11,
        specialties: [
            'চোখের ছানি পরীক্ষা ও আধুনিক লেন্স নির্বাচন',
            'চোখে মাংস বৃদ্ধি (Pterygium) গ্রাফটিং অপারেশন',
            'পাওয়ারের চশমা ও কন্টাক্ট লেন্স ট্রায়াল'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ জিরো পয়েন্ট, অপটিকস বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জে অভিজ্ঞ চক্ষু সার্জন দ্বারা চোখের নিয়মিত চেকআপ ও ছানি অপারেশন সুবিধা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর আই & ফেকো কেয়ার চেম্বার',
        degrees: 'MBBS, DO (Dhaka)',
        hospitalAffiliation: 'সিনিয়র মেডিকেল অফিসার (চক্ষু), পার্বতীপুর জংশন হাসপাতাল',
        phone: '01928-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চক্ষু রোগ বিশেষজ্ঞ & ফেকো সার্জন',
        experienceYears: 13,
        specialties: [
            'চোখে আবসা দেখা ও গ্লকোমা আই প্রেসার মেজারমেন্ট',
            'ডায়াবেটিক রোগীদের চোখের রেটিনা ফ্রি স্ক্রিনিং',
            'চোখ লাল হওয়া ও চুলকানির ড্রপ থেরাপি'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর নতুন বাজার রোড, ভিশন পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে অভিজ্ঞ ফেকো সার্জন দ্বারা চোখের দৃষ্টিশক্তি রক্ষা ও অপারেশনের পরামর্শ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী সানরাইজ অপটিক্স & চক্ষু সেন্টার',
        degrees: 'MBBS, D-Ophthal',
        hospitalAffiliation: 'কনসালটেন্ট (চক্ষু), ফুলবাড়ী জেনারেল ক্লিনিক',
        phone: '01759-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চক্ষু রোগ বিশেষজ্ঞ & ফেকো সার্জন',
        experienceYears: 10,
        specialties: [
            'পাওয়ার গ্লাস নির্বাচন ও চশমার সঠিক পাওয়ার ফ্রেম',
            'চোখের পানি নালি বন্ধ (Dacryocystitis) পরীক্ষা',
            'বয়স্ক রোগীদের দৃষ্টিশক্তি পুনারুদ্ধার লেন্স'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, সানরাইজ আই কেয়ার, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে নির্ভরযোগ্য চক্ষু চিকিৎসা ও চশমার নির্ভরযোগ্য শোরুম।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ চক্ষু & ভিশন কেয়ার',
        degrees: 'চক্ষু রোগ প্রাথমিক সেবা চেম্বার',
        hospitalAffiliation: 'নবাবগঞ্জ হেলথ সেন্টার',
        phone: '01840-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চক্ষু রোগ বিশেষজ্ঞ & ফেকো সার্জন',
        experienceYears: 8,
        specialties: [
            'চোখের ধুলাবালিজনিত অ্যালার্জি ও ইনফেকশন সমাধান',
            'চশমার ফ্রেম নির্বাচন ও পাওয়ার গ্লাস',
            'জরুরি প্রাথমিক চক্ষু সেবা'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ থানা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে কম খরচে সাধারণ রোগীদের চোখের প্রাথমিক পরীক্ষা ও সেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ চক্ষু ক্লিনিক',
        degrees: 'MBBS, DO',
        hospitalAffiliation: 'সিনিয়র আই স্পেশালিস্ট, সেতাবগঞ্জ ডায়াগনস্টিক',
        phone: '01950-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চক্ষু রোগ বিশেষজ্ঞ & ফেকো সার্জন',
        experienceYears: 12,
        specialties: [
            'চোখের ছানি রোগীর কম্পিউটারized পাওয়ার নির্ণয়',
            'চোখের এলার্জি ও শুষ্কতা (Dry Eye) ড্রাই আই কেয়ার',
            'চোখের নালী ওয়াশ'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ স্টেশন রোড, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে চক্ষু বিশেষজ্ঞ দ্বারা চোখের সকল আধুনিক চিকিৎসা ও ওষুধ পরামর্শ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর চক্ষু ভিশন ফার্স্ট এইড',
        degrees: 'চক্ষু পরামর্শ কেন্দ্র',
        hospitalAffiliation: 'চিরিরবন্দর হেলথ সার্ভিসেস',
        phone: '01770-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চক্ষু রোগ বিশেষজ্ঞ & ফেকো সার্জন',
        experienceYears: 7,
        specialties: [
            'চোখের পাওয়ার চশমা নির্ধারণ',
            'হঠাৎ চোখে আঘাত বা ময়লা পড়লে ওয়াশ',
            'চোখের ছানির প্রাথমিক ধাপ শনাক্তকরণ'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ৯:০০ - রাত ৯:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে সাশ্রয়ী ফি-তে সাধারণ চোখের পরীক্ষা ও প্রাথমিক সেবা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট ভিশন আই কেয়ার',
        degrees: 'MBBS, PGT (Eye)',
        hospitalAffiliation: 'ঘোড়াঘাট আই ডায়াগনস্টিক 센터',
        phone: '01860-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চক্ষু রোগ বিশেষজ্ঞ & ফেকো সার্জন',
        experienceYears: 9,
        specialties: [
            'চোখের ছানি পরীক্ষা ও আধুনিক পরামর্শ',
            'কম্পিউটার চালকদের চোখ ব্যথা ও ব্লু-কার্ট ড্রপ',
            'চশমা ফিটিং'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শনি ও মঙ্গলবার)',
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট জিরো পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে অভিজ্ঞ চক্ষু চিকিৎসক দ্বারা দৃষ্টিশক্তি সুরক্ষা ও চোখের যত্ন।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল কান্তনগর চক্ষু সেবা সেন্টার',
        degrees: 'চক্ষু প্রাথমিক চিকিৎসা কেন্দ্র',
        hospitalAffiliation: 'কাহারোল সেবামূলক আই ল্যাব',
        phone: '01951-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'চক্ষু রোগ বিশেষজ্ঞ & ফেকো সার্জন',
        experienceYears: 6,
        specialties: [
            'চোখে রোদ লাগলে লাল হওয়া উপশম',
            'বয়স্কদের চশমার পাওয়ার টেস্ট',
            'চোখের ড্রপ ব্যবহারের সঠিক নিয়মাবলী'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ১০:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে সাধারণ ও গ্রামীণ রোগীদের জন্য সাশ্রয়ী চোখের সেবা চেম্বার।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const getAllOphthalmologyServices = async (query = {}) => {
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

        const count = await Ophthalmology.countDocuments();
        if (count === 0) {
            await Ophthalmology.insertMany(INITIAL_OPHTHALMOLOGY_DATA);
        }

        return await Ophthalmology.find(filter).sort({ createdAt: -1 });
    } catch (error) {
        console.error('Error in getAllOphthalmologyServices:', error);
        return INITIAL_OPHTHALMOLOGY_DATA;
    }
};

export const getOphthalmologyById = async (id) => {
    return await Ophthalmology.findById(id);
};

export const createOphthalmologyService = async (data) => {
    const newService = new Ophthalmology(data);
    return await newService.save();
};

export const updateOphthalmologyStatus = async (id, status) => {
    return await Ophthalmology.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteOphthalmologyService = async (id) => {
    return await Ophthalmology.findByIdAndDelete(id);
};
