import Endocrinology from './endocrinology.model.js';

const INITIAL_ENDOCRINOLOGY_DATA = [
    {
        name: 'ডাঃ মোঃ মাহফুজুর রহমান (বারডেম ফেলো)',
        degrees: 'MBBS, DEM (BIRDEM Academy), MD (Endocrinology & Metabolism)',
        hospitalAffiliation: 'সহযোগী অধ্যাপক (এন্ডোক্রাইনোলজি), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01713-990011',
        alternatePhone: '01819-223344',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডায়াবেটিস, থাইরয়েড & হরমোন বিশেষজ্ঞ',
        experienceYears: 16,
        specialties: [
            'টাইপ-১ ও টাইপ-২ ইনসুলিন নির্ভর ডায়াবেটিস ব্যবস্থাপনা',
            'থাইরয়েড গণ্ডগোল, গলার গ্ল্যান্ড ফোলা ও গলগণ্ড রোগ',
            'পিসিওএস (PCOS) ও মহিলাদের অতিরিক্ত ওজন/হরমোন ভারসাম্যহীনতা'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, ডায়াবেটিস & থাইরয়েড কেয়ার সেন্টার (২য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '১৬ বছরের অভিজ্ঞ ডায়াবেটিস, থাইরয়েড, মেটাবলিজম ও হরমোন রোগ বিশেষজ্ঞ চিকিৎসক।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর ডায়াবেটিক সমিতি & হরমোন রিসার্চ সেন্টার',
        degrees: 'বিশেষায়িত ডায়াবেটিক হাসপাতাল ও মেটাবলিক ডায়াগনস্টিক',
        hospitalAffiliation: 'দিনাজপুর সেন্ট্রাল ডায়াবেটিক হসপিটাল',
        phone: '01734-556677',
        alternatePhone: '01913-889900',
        photo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডায়াবেটিস হাসপাতাল & ইনসুলিন ক্লিনিক',
        experienceYears: 20,
        specialties: [
            'ডিজিটাল ব্লাড গ্লুকোজ, এইচবিএ১সি (HbA1c) তাৎক্ষণিক টেস্ট',
            'ডায়াবেটিক ফুট (দাঁত ও পায়ের ক্ষত) বিশেষায়িত নার্সিং ড্রেসিং',
            'গর্ভবতী মায়েদের ডায়াবেটিস (GDM) ডায়েট ও ইনসুলিন চার্ট'
        ],
        visitingFee: 500,
        chamberTime: 'সকাল ৮:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'স্টেশন রোড, ডায়াবেটিক সমিতি ভবন, দিনাজপুর সদর',
        isAvailable: true,
        description: 'কম খরচে ডায়াবেটিস পরীক্ষা, ইনসুলিন প্রদান ও বিনামূল্যে পুষ্টি কাউন্সেলিং সেন্টার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ সালমা খাতুন (থাইরয়েড & হরমোন কনসালটেন্ট)',
        degrees: 'MBBS, FCPS (Medicine), MPhil (Endocrinology)',
        hospitalAffiliation: 'কনসালটেন্ট (মেডিসিন ও ডায়াবেটিস), দিনাজপুর জেনারেল হাসপাতাল',
        phone: '01825-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'থাইরয়েড, হরমোন & গ্রোথ ডিসঅর্ডার',
        experienceYears: 12,
        specialties: [
            'হাইপোথাইরয়েডিজম (ওজন বৃদ্ধি ও ক্লান্তি) ও হাইপারথাইরয়েডিজম',
            'শিশুদের শারীরিক বৃদ্ধি কম হওয়া (Short Stature / Growth)',
            'অস্টিওপোরোসিস (হাড় ক্ষয়) ও ক্যালেসিয়াম হরমোন ব্যাধি'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর, থাইরয়েড ডক্টরস কেয়ার (৩য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: 'মহিলা ও শিশুদের থাইরয়েড ও হরমোনজনিত জটিলতার বিশেষায়িত চিকিৎসক।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ ডায়াবেটিক কেয়ার & থাইরয়েড পয়েন্ট',
        degrees: 'ডায়াবেটিক বিশেষজ্ঞ ও মেটাবলিক চেম্বার',
        hospitalAffiliation: 'বীরগঞ্জ রয়্যাল ল্যাব ও ডায়াবেটিক জোন',
        phone: '01746-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডায়াবেটিস, থাইরয়েড & হরমোন বিশেষজ্ঞ',
        experienceYears: 10,
        specialties: [
            'নিয়মিত রক্তে শর্করা পরিমাপ ও ইনসুলিন সমন্বয়',
            'হাইপারটেনশন (উচ্চ রক্তচাপ) ও ডায়াবেটিস কম্বো কেয়ার',
            'ডায়াবেটিক নিউরোপ্যাথি (পায়ের জ্বালাপোড়া)'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ জিরো পয়েন্ট, নতুন ডায়াবেটিক মার্কেট, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জে ডায়াবেটিস রোগীদের ইনসুলিন ট্রেনিং ও থাইরয়েড পরামর্শ কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর ইনসুলিন & ডায়াবেটিস সেন্টার',
        degrees: 'MBBS, CCD (BIRDEM), PGT (Endocrinology)',
        hospitalAffiliation: 'সিনিয়র মেডিকেল অফিসার, পার্বতীপুর ডায়াবেটিক সোসাইটি',
        phone: '01926-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডায়াবেটিস, থাইরয়েড & হরমোন বিশেষজ্ঞ',
        experienceYears: 13,
        specialties: [
            'প্লাজমা গ্লুকোজ ও ওজিটিটি (OGTT) ডায়াবেটিক টেস্ট',
            'ডায়াবেটিসের কারণে চোখের সমস্যা ও কিটোন বডি রোধ',
            'স্থূলতা ও ওজন নিয়ন্ত্রণের ডায়েট চার্ট'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর বাসস্ট্যান্ড মোড়, সুগার কেয়ার পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে অভিজ্ঞ বারডেম সনদপ্রাপ্ত ডায়াবেটিক বিশেষজ্ঞ চিকিৎসক।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী সানরাইজ ডায়াবেটিক পয়েন্ট',
        degrees: 'MBBS, CCD (BIRDEM)',
        hospitalAffiliation: 'কনসালটেন্ট (ডায়াবেটিস), ফুলবাড়ী জেনারেল হসপিটাল',
        phone: '01757-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডায়াবেটিস, থাইরয়েড & হরমোন বিশেষজ্ঞ',
        experienceYears: 9,
        specialties: [
            'বারডেম নিয়মে রক্তে মিষ্টি পরীক্ষা',
            'কিডনি ও হূদরোগীদের ডায়াবেটিস ডোজ সমন্বয়',
            'থাইরয়েড হরমোন ইনব্যালেন্স ম্যানেজমেন্ট'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, ডায়াবেটিক কনসালটেশন সেন্টার, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে সঠিক নিয়মে রক্তে শর্করা পরিমাপ ও ইনসুলিন গ্রহণের পরামর্শ কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ সুগার & মেটাবলিক চেম্বার',
        degrees: 'ডায়াবেটিক ও হরমোন পরামর্শ কেন্দ্র',
        hospitalAffiliation: 'নবাবগঞ্জ হেলথ সেন্টার',
        phone: '01838-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডায়াবেটিস, থাইরয়েড & হরমোন বিশেষজ্ঞ',
        experienceYears: 8,
        specialties: [
            'রক্তে হঠাৎ শর্করা কমে যাওয়া (Hypoglycemia) ফার্স্ট এইড',
            'থাইরয়েড মেডিসিন ডোজ মনিটরিং',
            'দৈনন্দিন ডায়েট ও হাঁটার রুটিন পরামর্শ'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ সদর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে কম খরচে ডায়াবেটিস রোগীদের স্বাস্থ্য পরীক্ষা সেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ ডায়াবেটিক হেলথ',
        degrees: 'MBBS, CCD',
        hospitalAffiliation: 'সিনিয়র ডায়াবেটিক অফিসার, সেতাবগঞ্জ ডায়াবেটিক চেম্বার',
        phone: '01948-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডায়াবেটিস, থাইরয়েড & হরমোন বিশেষজ্ঞ',
        experienceYears: 11,
        specialties: [
            'বয়স্ক রোগীদের জটিল ডায়াবেটিস সেবা',
            'ইনসুলিন কলম (Pen) ব্যবহার টিউটোরিয়াল',
            'থাইরয়েড রিপোর্ট পর্যালোচনা'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ পৌর মার্কেট, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে ডায়াবেটিস পরীক্ষা ও হরমোন রোগীদের নিয়মিত সেবা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর ডায়াবেটিক টেস্ট ফার্স্ট এইড',
        degrees: 'প্রাথমিক ডায়াবেটিক পরামর্শ কেন্দ্র',
        hospitalAffiliation: 'চিরিরবন্দর মেডিকেল কেয়ার',
        phone: '01768-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডায়াবেটিস, থাইরয়েড & হরমোন বিশেষজ্ঞ',
        experienceYears: 7,
        specialties: [
            'তাৎক্ষণিক রক্তে গ্লুকোজ চেক (RBS)',
            'ইনসুলিন সংরক্ষণ পদ্ধতি শিখানো',
            'ডায়াবেটিক ডায়েট প্রাথমিক পরামর্শ'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ৯:০০ - রাত ৯:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে কম খরচে তাৎক্ষণিক ডায়াবেটিস পরীক্ষা ও পরামর্শ কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট ডায়াবেটিস & হরমোন সেন্টার',
        degrees: 'MBBS, PGT (Medicine), CCD',
        hospitalAffiliation: 'ঘোড়াঘাট ডায়াগনস্টিক ও সুগার পয়েন্ট',
        phone: '01858-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডায়াবেটিস, থাইরয়েড & হরমোন বিশেষজ্ঞ',
        experienceYears: 9,
        specialties: [
            'দীর্ঘমেয়াদী ডায়াবেটিস ও রক্তচাপ মনিটরিং',
            'থাইরয়েড হরমোন অসামঞ্জস্য নিরাময়',
            'ইনসুলিন থেরাপি গাইড'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (রবি ও বুধবার)',
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট জিরো পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে অভিজ্ঞ বারডেম প্রশিক্ষিত ডাক্তার দ্বারা ডায়াবেটিস ব্যবস্থাপনা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল কান্তনগর ডায়াবেটিক সেবা',
        degrees: 'ডায়াবেটিক টেস্ট ও সেবা চেম্বার',
        hospitalAffiliation: 'কাহারোল সেবা ডিজিটাল ল্যাব',
        phone: '01959-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডায়াবেটিস, থাইরয়েড & হরমোন বিশেষজ্ঞ',
        experienceYears: 6,
        specialties: [
            'ডিজিটাল সুগার পরীক্ষা',
            'ইনসুলিন গ্রহণ শিখানো',
            'খাদ্যাভ্যাস সংশোধন টিপস'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ১০:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে বয়স্ক ডায়াবেটিস রোগীদের সাশ্রয়ী সেবা।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const getAllEndocrinologyServices = async (query = {}) => {
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

        const count = await Endocrinology.countDocuments();
        if (count === 0) {
            await Endocrinology.insertMany(INITIAL_ENDOCRINOLOGY_DATA);
        }

        return await Endocrinology.find(filter).sort({ createdAt: -1 });
    } catch (error) {
        console.error('Error in getAllEndocrinologyServices:', error);
        return INITIAL_ENDOCRINOLOGY_DATA;
    }
};

export const getEndocrinologyById = async (id) => {
    return await Endocrinology.findById(id);
};

export const createEndocrinologyService = async (data) => {
    const newService = new Endocrinology(data);
    return await newService.save();
};

export const updateEndocrinologyStatus = async (id, status) => {
    return await Endocrinology.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteEndocrinologyService = async (id) => {
    return await Endocrinology.findByIdAndDelete(id);
};
