import AlponaArtist from './alponaArtist.model.js';

const INITIAL_ALPONA_ARTISTS = [
    {
        name: 'রঙতুলি আলপনা & চারুকলা স্টুডিও',
        phone: '01718-334455',
        alternatePhone: '01819-667788',
        photo: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
        serviceType: 'বিয়ের তোরণ & পিঁড়ি আলপনা',
        experienceYears: 8,
        specialties: [
            'ঐতিহ্যবাহী মেঝে চক্র ও কুলা আলপনা',
            'গায়ে হলুদের পিঁড়ি, ডাব ও কুলা মোটিফ আর্ট',
            'ওয়াটারপ্রুফ লং-লাস্টিং অ্যাক্রিলিক কালার'
        ],
        dailyWage: 4000,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'চারুকলা গলি, সুইহারী, দিনাজপুর সদর',
        isAvailable: true,
        description: 'বিবাহের রাজকীয় তোরণ, মেঝের বিশাল চক্র আলপনা ও গায়ে হলুদের পিঁড়ি ডিজাইনে ৮ বছরের অভিজ্ঞ ফাইন আর্টস শিল্পীদের দল।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'সৃজনী নববর্ষ & দেয়ালচিত্র আলপনা টিম',
        phone: '01729-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
        serviceType: 'পহেলা বৈশাখ & শুভ নববর্ষ আলপনা',
        experienceYears: 10,
        specialties: [
            'পহেলা বৈশাখের বড় রাস্তা ও পার্ক আলপনা',
            'দেয়ালচিত্র ও লোকজ মোটিফ (পাখি, ফুল, মাছ)',
            'পূজা ও সাংস্কৃতিক উৎসবের পটচিত্র'
        ],
        dailyWage: 6000,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'কেবি রোদ, রামকৃষ্ণ মিশন এলাকা, দিনাজপুর সদর',
        isAvailable: true,
        description: 'পহেলা বৈশাখ, বসন্ত উৎসব ও পূজা প্যাণ্ডেলে বিশাল ক্যানভাস ও রাস্তায় চোখধাঁধানো ঐতিহ্যবাহী মেহেরাব ও পদ্ম আলপনা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ আলপনা নিকেতন & আর্ট একাডেমী',
        phone: '01830-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মঞ্চ & ফ্লোর ট্র্যাডিশনাল আলপনা',
        experienceYears: 6,
        specialties: [
            'হলুদ মঞ্চের ট্র্যাডিশনাল চালের গুঁড়োর আলপনা',
            'ডিজিটাল ব্রাশ ও ৩ডি প্যাটার্ন ডিজাইন',
            'অনুষ্ঠান প্রাঙ্গনের ওয়েলকাম আলপনা'
        ],
        dailyWage: 3000,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ পালপাড়া, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জে ঘরোয়া অনুষ্ঠান থেকে শুরু করে বরকনে মঞ্চের নিখুঁত ফিনিশিং আলপনা প্রস্তুতকারক।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর ঐতিহ্য আলপনা কারিগর',
        phone: '01741-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
        serviceType: 'দেয়াল চিত্র & অ্যাক্রিলিক মোটিফ',
        experienceYears: 7,
        specialties: [
            'রেস্টুরেন্ট ও কফি শপ মোটিফ আর্ট',
            'বিয়ের গেট ও মেঝের লাল-সাদা আলপনা',
            'প্রকৃতি ও পৌরাণিক লোকশিল্প ডেকোর'
        ],
        dailyWage: 3500,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর পুরাতন বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে বিয়ের পিঁড়ি, ডাব এবং ফ্লোরে দীর্ঘস্থায়ী অ্যাক্রিলিক মেহেরাপ আর্টের বিশ্বস্ত চারুশিল্পী।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী শিল্পকলা আলপনা সোসাইটি',
        phone: '01931-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
        serviceType: 'বিয়ের তোরণ & পিঁড়ি আলপনা',
        experienceYears: 5,
        specialties: [
            'গায়ে হলুদের মেঝের ব্রাইডাল আলপনা',
            'কুলা, পিঁড়ি ও ডালা হাতের রঙে সাজানো',
            'অর্গানিক ইকো-ফ্রেন্ডলি কালার ব্যবহার'
        ],
        dailyWage: 2800,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী ঢাকা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে কম খরচে বর-কনের গায়ে হলুদের ঘরোয়া ও বাণিজ্যিক মেঝের আকর্ষণীয় আলপনা সেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ রূপকথা আলপনা & আর্ট হাউজ',
        phone: '01732-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মঞ্চ & ফ্লোর ট্র্যাডিশনাল আলপনা',
        experienceYears: 6,
        specialties: [
            'পুকুর ঘাট ও অনুষ্ঠান গেট আলপনা',
            'কলকা ও কলসি মোটিফ কারুশিল্প',
            'পূজা ও সাংস্কৃতিক অনুষ্ঠানের বর্ডার সাজানো'
        ],
        dailyWage: 3200,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ ডিগ্রি কলেজ মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে বিয়ের আসর ও সামাজিক উৎসবের মেঝের সুদৃশ্য আলপনা অংকন শিল্পী।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ আলপনা স্টুডিও',
        phone: '01842-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
        serviceType: 'পহেলা বৈশাখ & শুভ নববর্ষ আলপনা',
        experienceYears: 9,
        specialties: [
            'বার্ষিক উৎসবের রাজকীয় আলপনা ডেকোরেশন',
            'স্কুল-কলেজ প্রাঙ্গনের ক্যানভাস ওয়াল আর্ট',
            'জলরং ও অ্যাক্রিলিক বর্ডার ডিজাইন'
        ],
        dailyWage: 4500,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ বড় মাঠ রোড, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে বড় আয়োজন ও সরকারি-বেসরকারি প্রতিষ্ঠানের নববর্ষ ও বসন্ত উৎসবের গ্র্যান্ড আলপনা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর কারুকাজ আলপনা শিল্প গোষ্ঠী',
        phone: '01933-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
        serviceType: 'বিয়ের তোরণ & পিঁড়ি আলপনা',
        experienceYears: 4,
        specialties: [
            'বরের পিঁড়ি ও কনের পিঁড়ি আর্ট',
            'মেহেদী সন্ধ্যার ওয়েলকাম ম্যাট আলপনা',
            'রঙিন মেঝের সুনির্দিষ্ট প্যাটার্ন'
        ],
        dailyWage: 2500,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর আটিয়া গ্রাম, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে ঘরোয়া গায়ে হলুদ ও আকিকার মিষ্টি কারুকাজময় লাল-সাদা-হলুদ আলপনা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট তুলির ছোঁয়া আলপনা গ্যালাক্সি',
        phone: '01743-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80',
        serviceType: 'দেয়াল চিত্র & অ্যাক্রিলিক মোটিফ',
        experienceYears: 7,
        specialties: [
            'বাটারফ্লাই ও ফ্লোরাল দেয়াল চিত্র',
            'বিয়ের স্টেজের বিশেষ ব্যাকড্রপ মোটিফ',
            'প্লাস্টিক পেইন্ট লং লাস্টিং আলপনা'
        ],
        dailyWage: 3800,
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট থানা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে দেয়ালচিত্র, বাণিজ্যিক শোরুমের নকশা এবং শুভ বিবাহের মেঝের নিখুঁত আলপনা শিল্পী।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল মাটি ও রং আলপনা টিম',
        phone: '01853-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মঞ্চ & ফ্লোর ট্র্যাডিশনাল আলপনা',
        experienceYears: 5,
        specialties: [
            'মন্দির ও পূজা মণ্ডপ আলপনা',
            'ঐতিহ্যবাহী লোকজ পাখি ও লতা পাতা মোটিফ',
            'সহজে ধোয়া যায় এমন ভেষজ রঙে আলপনা'
        ],
        dailyWage: 2700,
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল কান্তনগর রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কান্তজীর মন্দির এলাকা ও কাহারোলে পূজা, মেলা ও শুভ উৎসবের ঐতিহ্যবাহী মাটি ও ভেষজ রঙের আলপনা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'খানসামা বর্ণালী চারু আলপনা কেন্দ্র',
        phone: '01943-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
        serviceType: 'বিয়ের তোরণ & পিঁড়ি আলপনা',
        experienceYears: 6,
        specialties: [
            'গায়ে হলুদের স্টেজ ও হাঁড়ি-কুলা আলপনা',
            'অ্যাক্রিলিক চকচকে শাইন আলপনা',
            'দ্রুত সময়ের মধ্যে বড় এলাকা কাভার'
        ],
        dailyWage: 3000,
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা পাক এর হাটের কাছে, দিনাজপুর',
        isAvailable: true,
        description: 'খানসামায় বিয়ের সব ধরনের অনুষঙ্গে রঙতুলির স্পর্শে নান্দনিক আলপনা সার্ভিস।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const getAlponaArtists = async (query = {}) => {
    try {
        const count = await AlponaArtist.countDocuments();
        if (count === 0) {
            await AlponaArtist.insertMany(INITIAL_ALPONA_ARTISTS);
        }
        
        const filter = {};
        if (query.status) {
            filter.status = query.status;
        }
        if (query.upazila && query.upazila !== 'সকল উপজেলা') {
            filter.upazila = query.upazila;
        }
        if (query.serviceType && query.serviceType !== 'সকল আলপনা সেবা') {
            filter.serviceType = query.serviceType;
        }
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { phone: { $regex: query.search, $options: 'i' } },
                { address: { $regex: query.search, $options: 'i' } },
                { serviceType: { $regex: query.search, $options: 'i' } },
                { specialties: { $in: [new RegExp(query.search, 'i')] } }
            ];
        }

        return await AlponaArtist.find(filter).sort({ createdAt: -1 });
    } catch (error) {
        throw new Error(`Alpona artists fetch error: ${error.message}`);
    }
};

export const getAlponaArtistById = async (id) => {
    return await AlponaArtist.findById(id);
};

export const createAlponaArtist = async (data) => {
    const newArtist = new AlponaArtist(data);
    return await newArtist.save();
};

export const updateAlponaArtistStatus = async (id, status) => {
    return await AlponaArtist.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteAlponaArtist = async (id) => {
    return await AlponaArtist.findByIdAndDelete(id);
};
