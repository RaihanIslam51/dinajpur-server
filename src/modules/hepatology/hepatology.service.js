import Hepatology from './hepatology.model.js';

const INITIAL_HEPATOLOGY_DATA = [
    {
        name: 'ডাঃ প্রফেসর মোঃ শরিফুল ইসলাম (লিভার স্পেশালিস্ট)',
        degrees: 'MBBS, MD (Hepatology), FCPS (Medicine), MACP (USA)',
        hospitalAffiliation: 'প্রাক্তন বিভাগীয় প্রধান (হেপাটোলজি বিভাগ), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01713-223344',
        alternatePhone: '01819-556677',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লিভার & পেটরোগ বিশেষজ্ঞ (Hepatologist)',
        experienceYears: 18,
        specialties: [
            'ফ্যাটি লিভার (Fatty Liver Grade I-III) আধুনিক স্থায়ী চিকিৎসা',
            'হেপাটাইটিস বি (HBsAg) ও সি ভাইরাসের অ্যান্টিভাইরাল থেরাপি',
            'লিভার সিরোসিস (Cirrhosis) ও পেটে পানি আসা জটিলতা মেটানো'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, দিনাজপুর গ্যাস্ট্রো-লিভার কেয়ার অ্যান্ড ফাইব্রোস্ক্যান সেন্টার, দিনাজপুর সদর',
        isAvailable: true,
        description: '১৮ বছরের অভিজ্ঞ প্রখ্যাত লিভার, হেপাটাইটিস ও গ্যাস্ট্রো-ইনটেস্টাইনাল রোগ বিশেষজ্ঞ ডাক্তার।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর সেন্ট্রাল গ্যাস্ট্রো-লিভার & এন্ডোস্কোপি সেন্টার',
        degrees: 'বিশেষায়িত হেপাটোলজি টেস্ট, লিভার ফাইব্রোস্ক্যান ও এন্ডোস্কোপি ল্যাব',
        hospitalAffiliation: 'দিনাজপুর সেন্ট্রাল স্পেশালাইজড লিভার হাসপাতাল',
        phone: '01737-889900',
        alternatePhone: '01916-334455',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'গ্যাস্ট্রো-লিভার ডায়াগনস্টিক & ফাইব্রোস্ক্যান সেন্টার',
        experienceYears: 16,
        specialties: [
            'নন-ইনভেসিভ লিভার স্টিফনেস মেজারমেন্ট (FibroScan)',
            'পেইনলেস ভিডিও এন্ডোস্কোপি & কোলোনোস্কোপি বায়োপসি',
            'পিত্তনালী ও অগ্ন্যাশয়ের পাথর বের করার ইআরসিপি (ERCP)'
        ],
        visitingFee: 600,
        chamberTime: 'সকাল ৯:০০ - দুপুর ১:৩০ ও বিকাল ৪:৩০ - রাত ৯:০০',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'জেল রোড, লিভার টাওয়ার (৩য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: 'লিভারের দীর্ঘস্থায়ী প্রদাহ, জন্ডিস, পিত্তথলির পাথর ও এন্ডোস্কোপির আধুনিক ডায়াগনস্টিক সেন্টার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ রেজওয়ানা চৌধুরী (মহিলা লিভার বিশেষজ্ঞ)',
        degrees: 'MBBS, MD (Hepatology - BSMMU)',
        hospitalAffiliation: 'কনসালটেন্ট (হেপাটোলজি), দিনাজপুর জেনারেল হাসপাতাল',
        phone: '01829-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মহিলা ও শিশুদের গ্যাস্ট্রো-লিভার কেয়ার',
        experienceYears: 11,
        specialties: [
            'গর্ভবতী নারীদের জন্ডিস (Jaundice in Pregnancy) বিশেষায়িত সেবা',
            'শিশুদের লিভার গ্লুকোজ ডিসঅর্ডার ও জন্মগত জন্ডিস নিরাময়',
            'ক্রনিক এসিডিটি, বুক জ্বালা ও বদহজম স্থায়ী চিকিৎসা'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর, উইমেন & চাইল্ড গ্যাস্ট্রো-লিভার চেম্বার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'মহিলা ও শিশুদের লিভার, জন্ডিস ও পরিপাকতন্ত্রের জটিলতার অভিজ্ঞ চিকিৎসক।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ গ্যাস্ট্রো-লিভার পয়েন্ট & জন্ডিস ক্লিনিক',
        degrees: 'লিভার ও পেটরোগ চেম্বার',
        hospitalAffiliation: 'বীরগঞ্জ রয়েল লিভার ডায়াগনস্টিক',
        phone: '01749-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লিভার & পেটরোগ বিশেষজ্ঞ (Hepatologist)',
        experienceYears: 10,
        specialties: [
            'জন্ডিস (acute viral hepatitis A/E) দ্রুত নিরাময় ড্রিপ ও ওষুধ',
            'পেটে তীব্র ব্যথা ও লিভারের চর্বি কমানোর খাদ্য তালিকা',
            'পিত্তথলির প্রদাহ (Cholecystitis) স্ক্রিনিং'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ জিরো পয়েন্ট, নতুন ডক্টরস ডায়াগনস্টিক, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জে লিভারের চর্বি, জন্ডিস ও পেট ফাঁপা রোগের নিয়মিত চিকিৎসা সেবা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর লিভার কেয়ার & গ্যাস্ট্রো ডায়াগনস্টিক',
        degrees: 'MBBS, D-Card, PGT (Hepatology)',
        hospitalAffiliation: 'সিনিয়র মেডিকেল অফিসার (মেডিসিন ও লিভার), পার্বতীপুর জংশন হাসপাতাল',
        phone: '01929-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লিভার & পেটরোগ বিশেষজ্ঞ (Hepatologist)',
        experienceYears: 13,
        specialties: [
            'অ্যালকোহলিক ও নন-অ্যালকোহলিক ফ্যাটি লিভার চিকিৎসা',
            'পেটে গ্যাস, অরুচি ও রক্তবমি (Variceal Bleed) প্রতিরোধ',
            'লিভার ফাংশন টেস্ট (LFT - SGPT/SGOT/Bilirubin) মূল্যায়ন'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর বাসস্ট্যান্ড মোড়, গ্যাস্ট্রো-লিভার স্পেশালিস্ট কেয়ার, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে অভিজ্ঞ ডাক্তার দ্বারা লিভারের কার্যক্ষমতা বৃদ্ধি ও পেটরোগ সমাধান।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী সানরাইজ গ্যাস্ট্রো-লিভার চেম্বার',
        degrees: 'MBBS, FCPS (Medicine Part-II)',
        hospitalAffiliation: 'কনসালটেন্ট (মেডিসিন ও লিভার), ফুলবাড়ী জেনারেল ডায়াগনস্টিক',
        phone: '01760-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লিভার & পেটরোগ বিশেষজ্ঞ (Hepatologist)',
        experienceYears: 9,
        specialties: [
            'দীর্ঘদিনের পেটের গ্যাস ও পাতলা পায়খানা নিরাময়',
            'লিভারের ফোড়া (Amebic Liver Abscess) ওষুধে নিরাময়',
            'হেপাটাইটিস বি টিকার ডোজ পরামর্শ'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, লিভার হেলথ ক্লিনিক, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে লিভারের জটিলতা ও জন্ডিস কমানোর জন্য নির্ভরযোগ্য চিকিৎসা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ লিভার & গ্যাস্ট্রিক কেয়ার Point',
        degrees: 'লিভার ও পেটরোগ প্রাথমিক চেম্বার',
        hospitalAffiliation: 'নবাবগঞ্জ হেলথ সেন্টার',
        phone: '01841-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লিভার & পেটরোগ বিশেষজ্ঞ (Hepatologist)',
        experienceYears: 8,
        specialties: [
            'প প্রস্রাব হলুদ হওয়া ও জন্ডিসের ফার্স্ট এইড',
            'খাওয়ার অরুচি ও বুক জ্বালাপোড়া ড্রপ/ওষুধ',
            'লিভার টনিক ও সুস্থ জীবনধারা পরামর্শ'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে সাশ্রয়ী খরচে লিভার ও পাকস্থলীর প্রাথমিক সেবা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ লিভার ক্লিনিক',
        degrees: 'MBBS, MD (Medicine & Hepatology)',
        hospitalAffiliation: 'সিনিয়র স্পেশালিস্ট, সেতাবগঞ্জ ডায়াগনস্টিক',
        phone: '01951-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লিভার & পেটরোগ বিশেষজ্ঞ (Hepatologist)',
        experienceYears: 12,
        specialties: [
            'ফ্যাটি লিভার রোগীর ওজন ও ডায়াবেটিস নিয়ন্ত্রণ নির্দেশিকা',
            'লিভার এনজাইম (ALT/AST) স্বাভাবিক করার চিকিৎসা',
            'পিত্তনালীর বাধা নির্ণয়'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ পৌর মার্কেট, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে অভিজ্ঞ চিকিৎসক দ্বারা লিভারের স্বাস্থ্য সুরক্ষার সম্পূর্ণ চিকিৎসা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর লিভার ফার্স্ট এইড পয়েন্ট',
        degrees: 'জন্ডিস ও লিভার পরামর্শ কেন্দ্র',
        hospitalAffiliation: 'চিরিরবন্দর মেডিকেল কেয়ার',
        phone: '01771-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লিভার & পেটরোগ বিশেষজ্ঞ (Hepatologist)',
        experienceYears: 7,
        specialties: [
            'জন্ডিস পরীক্ষার বিলিরুবিন টেস্ট পরামর্শ',
            'লিভার সুস্থ রাখার ভেষজ সতর্কতামূলক টিপস',
            'পেটে মেদ জমার ঝুঁকি কমানো'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ৯:০০ - রাত ৯:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে কম খরচে সাধারণ রোগীদের লিভার সমস্যার প্রাথমিক দিকনির্দেশনা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট লিভার & জন্ডিস সেন্টার',
        degrees: 'MBBS, PGT (Hepatology)',
        hospitalAffiliation: 'ঘোড়াঘাট ডায়াগনস্টিক অ্যান্ড লিভার কেয়ার',
        phone: '01861-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লিভার & পেটরোগ বিশেষজ্ঞ (Hepatologist)',
        experienceYears: 9,
        specialties: [
            'হেপাটাইটিস আক্রান্ত রোগীদের কন্টিনিউয়াস ফলোআপ',
            'পেট ফোলা (Ascites) উপশম ওষুধ',
            'পিত্তপাথর শনাক্তকরণ'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শনি ও মঙ্গলবার)',
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট জিরো পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে অভিজ্ঞ হেপাটোলজিস্ট দ্বারা জন্ডিস ও ফ্যাটি লিভারের আধুনিক চিকিৎসা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল কান্তনগর লিভার সেবা চেম্বার',
        degrees: 'লিভার পরামর্শ কেন্দ্র',
        hospitalAffiliation: 'কাহারোল সেবা ল্যাব',
        phone: '01952-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লিভার & পেটরোগ বিশেষজ্ঞ (Hepatologist)',
        experienceYears: 6,
        specialties: [
            'পাকস্থলীর আলসার ও লিভার পরিষ্কার রাখার নিয়মাবলী',
            'প্রস্রাব হলুদ হলে করণীয় টিপস',
            'লিভার সুষম ডায়েট চার্ট'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ১০:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে সাধারণ রোগীদের জন্য সাশ্রয়ী লিভার সেবা চেম্বার।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const getAllHepatologyServices = async (query = {}) => {
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

        const count = await Hepatology.countDocuments();
        if (count === 0) {
            await Hepatology.insertMany(INITIAL_HEPATOLOGY_DATA);
        }

        return await Hepatology.find(filter).sort({ createdAt: -1 });
    } catch (error) {
        console.error('Error in getAllHepatologyServices:', error);
        return INITIAL_HEPATOLOGY_DATA;
    }
};

export const getHepatologyById = async (id) => {
    return await Hepatology.findById(id);
};

export const createHepatologyService = async (data) => {
    const newService = new Hepatology(data);
    return await newService.save();
};

export const updateHepatologyStatus = async (id, status) => {
    return await Hepatology.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteHepatologyService = async (id) => {
    return await Hepatology.findByIdAndDelete(id);
};
