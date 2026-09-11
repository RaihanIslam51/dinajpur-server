import Dentistry from './dentistry.model.js';

const INITIAL_DENTISTRY_DATA = [
    {
        name: 'ডাঃ মোঃ শরিফুল ইসলাম (ডেন্টাল সার্জন)',
        degrees: 'BDS (Rajshahi University), PGT (Oral & Maxillofacial Surgery)',
        hospitalAffiliation: 'প্রাক্তন সিনিয়র ডেন্টাল সার্জন, দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01714-667788',
        alternatePhone: '01817-990011',
        photo: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডেন্টাল সার্জারি & রুট ক্যানেল',
        experienceYears: 14,
        specialties: [
            'এক সিটিংয়ে ব্যথামুক্ত আধুনিক রুট ক্যানেল (Single Visit RCT)',
            'আক্কেল দাঁত (Wisdom Tooth) জটিল অস্ত্রোপচার',
            'লেজার স্কেলিং, গাম ব্লিডিং সমাধান ও পলিশিং'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, ওরাল Care ডেন্টাল স্কয়ার (২য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '১৪ বছরের অভিজ্ঞ ডেন্টাল সার্জন। দাঁতের ক্যানেল ট্রিটমেন্ট, ইমপ্ল্যান্ট ও আক্কেল দাঁতের জটিল অপারেশনে পারদর্শী।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'স্মাইল কেয়ার ডেন্টাল ক্লিনিক & ওরাল লেজার জোন',
        degrees: 'বিশেষায়িত ডেন্টাল ইমপ্ল্যান্ট ও অর্থোডন্টিক্স সেন্টার',
        hospitalAffiliation: 'দিনাজপুর সেন্ট্রাল ডেন্টাল পয়েন্ট',
        phone: '01732-778899',
        alternatePhone: '01920-112233',
        photo: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
        serviceType: 'অর্থোডন্টিক্স & ব্রেসেস সাজানো',
        experienceYears: 12,
        specialties: [
            'দাঁত সোজা করার জন্য ইম্পোর্টেড মেটাল & সিরামিক ব্রেসেস',
            'স্থায়ী দাঁত বাঁধানো (পোর্সেলিন & জিরকোনিয়া ক্যাপ-ব্রীজ)',
            'বাচ্চাদের দাঁতের যত্ন ও স্পেস মেনটেইনার'
        ],
        visitingFee: 600,
        chamberTime: 'সকাল ১০:০০ - দুপুর ১:৩০ ও বিকাল ৪:৩০ - রাত ৯:০০',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'জেল রোড, স্মাইল টাওয়ার (৩য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: 'উন্নত প্রযুক্তির রুট ক্যানেল মডিউল, অর্থোডন্টিকস ব্রেসেস ও ফিক্সড ক্যাটালগ দাঁত বাঁধানোর বিশেষায়িত ডেন্টাল হাসপাতাল।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ নুসরাত জাহান (ডেন্টিস্ট)',
        degrees: 'BDS (Dhaka), FCPS (Orthodontics Part-II)',
        hospitalAffiliation: 'ডেন্টাল কনসালটেন্ট, দিনাজপুর ইডেন ডেন্টাল কেয়ার',
        phone: '01823-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'দাঁত বাঁধানো & ক্রাউন ব্রীজ',
        experienceYears: 10,
        specialties: [
            'লেজার কসমোটোলজি ও দাঁতের ফাক বন্ধ করা',
            'মেছতা ও দাঁতের হলুদ দাগ দূরীকরণ কেমিক্যাল ওয়াশ',
            'ফ্লেক্সিবল ডেনচার (নমনীয় দাঁতের সেট)'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:৩০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর, মহিলা কলেজ রোড, দিনাজপুর সদর',
        isAvailable: true,
        description: 'মহিলা ও শিশুদের দাঁতের সুক্ষ্ম লাইট কিউর ফিলিং ও কসমোটোলজি ডেন্টাল বিশেষজ্ঞ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ ডেন্টাল স্পেশালিস্ট পয়েন্ট',
        degrees: 'দন্ত রোগ ও ওরাল সার্জারি সেন্টার',
        hospitalAffiliation: 'বীরগঞ্জ রয়্যাল ডেন্টাল হসপিটাল',
        phone: '01744-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লেজার স্কেলিং & ওরাল কেয়ার',
        experienceYears: 9,
        specialties: [
            'দাঁত থেকে পাথর ও কালো দাগ পরিষ্কার (Scaling)',
            'ক্ষয়প্রাপ্ত দাঁতের লেজার কসমোটোলজি ফিলিং',
            'অস্থায়ী ও স্থায়ী দাঁত তুলে ফেলা ও ড্র্রেসিং'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ জিরো পয়েন্ট, নতুন ডেন্টাল মার্কেট, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জ উপজেলায় কম খরচে সম্পূর্ণ জীবানুমুক্ত অটো ক্লেভ যন্ত্রাংশ দ্বারা দাঁতের চিকিৎসা সেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর ডেন্টাল কেয়ার & ওরাল সার্জারি',
        degrees: 'ডেন্টাল সার্জন ও টুথ কেয়ার সেন্টার',
        hospitalAffiliation: 'পার্বতীপুর জংশন ডেন্টাল ক্লিনিক',
        phone: '01924-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডেন্টাল সার্জারি & রুট ক্যানেল',
        experienceYears: 11,
        specialties: [
            'পাইনলেস রুট ক্যানেল ও ক্রাউন ক্যাপ',
            'দাঁতের মাড়ির পায়োরিয়া রোগের চিকিৎসা',
            'নতুন কায়দায় খুলতে পারা দাঁতের বাঁধন'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর বাসস্ট্যান্ড রোড, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে অভিজ্ঞ ডেন্টাল সার্জন দ্বারা দাঁতের সকল প্রকার ব্যথমুক্ত চিকিৎসা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী সানরাইজ ডেন্টাল চেম্বার',
        degrees: 'BDS (CU), PGT (Dental Surgery)',
        hospitalAffiliation: 'কনসালটেন্ট ডেন্টিস্ট, ফুলবাড়ী ক্রিসেন্ট ল্যাব',
        phone: '01755-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডেন্টাল সার্জারি & রুট ক্যানেল',
        experienceYears: 8,
        specialties: [
            'দাঁতের পোকা লাগা ও গর্তের লাইট ফিলিং',
            'শিশুদের দুধ দাঁত তোলার পর কেয়ার',
            'মুখের দুর্গন্ধ ও মাড়ি ফোলা প্রতিরোধ'
        ],
        visitingFee: 400,
        chamberTime: 'সকাল ১০:০০ - দুপুর ২:০০ ও বিকাল ৫:০০ - রাত ৮:০০',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, ডেন্টাল গলি, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে আধুনিক যন্ত্রপাতিতে দাঁত তোলা, স্কেলিং ও রুট ক্যানেল চিকিৎসা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ ওরাল হেলথ ডেন্টাল পয়েন্ট',
        degrees: 'ডেন্টাল সার্জন চেম্বার',
        hospitalAffiliation: 'নবাবগঞ্জ হেলথ সেন্টার',
        phone: '01836-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লেজার স্কেলিং & ওরাল কেয়ার',
        experienceYears: 7,
        specialties: [
            'দাঁত পরিষ্কারকরণ ও স্কেলিং',
            'দাঁত নড়া স্থায়ীভাবে জালি দিয়ে আটকানো',
            'সহজে দাঁত বাঁধানো ডেনচার'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ সদর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে কম খরচে দাঁতের যত্ন ও ডেন্টাল এক্স-রে সুবিধা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ ওরাল & ডেন্টাল সার্জারি',
        degrees: 'BDS, MS (Pediatric Dentistry)',
        hospitalAffiliation: 'সিনিয়র ডেন্টাল সার্জন, সেতাবগঞ্জ ডক্টরস কেয়ার',
        phone: '01946-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'অর্থোডন্টিক্স & ব্রেসেস সাজানো',
        experienceYears: 10,
        specialties: [
            'অসামঞ্জস্য ও আঁকাবাঁকা দাঁত সোজা করা',
            'স্থায়ী দাঁত প্রতিস্থাপন ও ফিলিং',
            'আক্কেল দাঁতের যন্ত্রণা লাঘব'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ পৌর মার্কেট, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে আঁকাবাঁকা দাঁতের ব্রেসেস ও বাচ্চাদের দাঁতের বিশেষ ডেন্টাল সেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর ডেন্টাল কেয়ার ফার্স্ট এইড',
        degrees: 'প্রাথমিক ডেন্টাল সেবা ও এক্স-রে',
        hospitalAffiliation: 'চিরিরবন্দর ডিজিটাল ল্যাব',
        phone: '01766-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লেজার স্কেলিং & ওরাল কেয়ার',
        experienceYears: 6,
        specialties: [
            'জরুরি দাঁতের ব্যথার ফার্স্ট এইড',
            'ডিজিটাল ইনট্রা ওরাল ডেন্টাল এক্স-রে',
            'দাঁত পরিষ্কার ও হালকা ফিলিং'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ৯:০০ - রাত ৯:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে কম খরচে তাৎক্ষণিক দাঁতের ব্যথা উপশম ও পরামর্শ কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট সিটি ডেন্টাল ক্লিনিক',
        degrees: 'BDS, PGT',
        hospitalAffiliation: 'ঘোড়াঘাট হেলথ ডায়াগনস্টিক',
        phone: '01856-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
        serviceType: 'দাঁত বাঁধানো & ক্রাউন ব্রীজ',
        experienceYears: 9,
        specialties: [
            'দাঁতের ক্রাউন কভার ও স্থায়ী ব্রীজ',
            'রুট ক্যানেল ক্যাপ লাগানো',
            'মাড়ির ফোলা ও রক্ত পড়া নিরাময়'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শনিবার ও মঙ্গলবার)',
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট জিরো পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে অভিজ্ঞ দন্ত চিকিৎসক দ্বারা দাঁতের স্থায়ী সাজসজ্জা ও ট্রিটমেন্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল কান্তনগর ডেন্টাল চেম্বার',
        degrees: 'ডেন্টাল টেকনিশিয়ান ও দন্ত সেবা',
        hospitalAffiliation: 'কাহারোল সেবা ডিজিটাল ডেন্টাল ল্যাব',
        phone: '01957-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লেজার স্কেলিং & ওরাল কেয়ার',
        experienceYears: 6,
        specialties: [
            'দাঁত পরিষ্কার ও ড্রেসিং',
            'দাঁতের অস্থায়ী ও স্থায়ী ফিলিং',
            'সহজে সেট করার দাঁতের বাঁধন'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ১০:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে বয়স্ক ও সাধারণ রোগীদের সাশ্রয়ী দন্ত চিকিৎসা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const getDentistryServices = async (query = {}) => {
    try {
        const count = await Dentistry.countDocuments();
        if (count === 0) {
            await Dentistry.insertMany(INITIAL_DENTISTRY_DATA);
        }
        
        const filter = {};
        if (query.status) {
            filter.status = query.status;
        }
        if (query.upazila && query.upazila !== 'সকল উপজেলা') {
            filter.upazila = query.upazila;
        }
        if (query.serviceType && query.serviceType !== 'সকল ডেন্টিস্ট্রি সেবা') {
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

        return await Dentistry.find(filter).sort({ createdAt: -1 });
    } catch (error) {
        throw new Error(`Dentistry services fetch error: ${error.message}`);
    }
};

export const getDentistryById = async (id) => {
    return await Dentistry.findById(id);
};

export const createDentistryService = async (data) => {
    const newService = new Dentistry(data);
    return await newService.save();
};

export const updateDentistryStatus = async (id, status) => {
    return await Dentistry.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteDentistryService = async (id) => {
    return await Dentistry.findByIdAndDelete(id);
};
