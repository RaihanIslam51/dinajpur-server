/**
 * Tiles Mistri (Tiles & Marble Worker) Service Layer with MongoDB support & 10+ initial seed data entries
 */
import { getDB } from '../../database/db.js';

let initialTilesMistris = [
    {
        _id: 'tiles_1001',
        categoryId: 'cat_mistri_tiles',
        userId: 'usr_701',
        name: 'মোঃ আব্দুস সালাম (হেড টাইলস মিস্ত্রি & মার্বেল ফিনিশিং স্পেশালিস্ট)',
        phone: '01712-556677',
        alternatePhone: '01812-889900',
        photo: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: 15,
        specialties: ['ফ্লোর টাইলস বসানো', 'মার্বেল ও গ্রানাইট ফিনিশিং', 'দেয়াল ও বাথরুম টাইলস'],
        dailyWage: 950,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'কালীতলা মেইন রোড, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দীর্ঘ ১৫ বছর ধরে দিনাজপুর শহরের বাসা-বাড়ি ও বাণিজ্যিক ভবনের ফ্লোর টাইলস, বাথরুম টাইলস, মার্বেল ও গ্রানাইট কাটিং সুনিপুণ ফিনিশিংয়ের সাথে করছি। ১০ জনের অভিজ্ঞ দল রয়েছে।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
        ],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 15 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'tiles_1002',
        categoryId: 'cat_mistri_tiles',
        userId: 'usr_702',
        name: 'মোঃ জাহিদুল ইসলাম (ফ্লোর টাইলস ও থ্রিডি কনসেপ্ট কারিগর)',
        phone: '01911-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['ফ্লোর টাইলস বসানো', 'দেয়াল ও বাথরুম টাইলস'],
        dailyWage: 900,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বিরল',
        address: 'বিরল বাস স্ট্যান্ড, দিনাজপুর',
        isAvailable: true,
        description: 'ড্রয়িং রুম ও বেডরুমের গ্লসি মোজাইক ফ্লোর টাইলস, ডিজিটাল ৩ডি বাথরুম ওয়াল টাইলস ও বর্ডার কাটিং ফিটিং করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 13 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'tiles_1003',
        categoryId: 'cat_mistri_tiles',
        userId: 'usr_703',
        name: 'মোঃ কামরুল হাসান (বাথরুম ও কিচেন ওয়াল টাইলস মিস্ত্রি)',
        phone: '01733-990011',
        alternatePhone: '01555-334455',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 12,
        specialties: ['দেয়াল ও বাথরুম টাইলস', 'টাইলস গ্রাউটিং ও পয়েন্টিং'],
        dailyWage: 850,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর নতুন বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'বাথরুমের অ্যান্টি-স্কিড নন-স্লিপ ফ্লোর টাইলস ও কিচেন হাইলাইটার দেয়াল টাইলস নির্ভুল মাপে ফিটিং করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 12 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'tiles_1004',
        categoryId: 'cat_mistri_tiles',
        userId: 'usr_704',
        name: 'মোঃ শামীম হোসাইন (গ্রানাইট পলিশ ও সিঁড়ি টাইলস বিশেষজ্ঞ)',
        phone: '01815-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 14,
        specialties: ['মার্বেল ও গ্রানাইট ফিনিশিং', 'সিঁড়ি ও পোর্চ টাইলস'],
        dailyWage: 950,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ বাজার রোড, দিনাজপুর',
        isAvailable: false,
        description: 'বহুতল ভবনের সিঁড়ির মার্বেল ল্যান্ডিং, বুলনোজিং, থ্রেড কাটিং ও মেটালিক গ্রানাইট পলিশের নিখুঁত কাজ সম্পন্ন করি।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 10 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'tiles_1005',
        categoryId: 'cat_mistri_tiles',
        userId: 'usr_705',
        name: 'মোঃ হাবিবুর রহমান (মার্বেল মোজাইক ও পোর্চ টাইলস মাস্টার)',
        phone: '01719-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        experienceYears: 11,
        specialties: ['সিঁড়ি ও পোর্চ টাইলস', 'ফ্লোর টাইলস বসানো', 'মার্বেল ও গ্রানাইট ফিনিশিং'],
        dailyWage: 900,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাধানগর, দিনাজপুর',
        isAvailable: true,
        description: 'গাড়ির গ্যারেজ, র্যাম্প, খোলা বারান্দা ও আউটডোর পোর্চের ভারি পার্কিং টাইলস বসানোর কাজ করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 9 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'tiles_1006',
        categoryId: 'cat_mistri_tiles',
        userId: 'usr_706',
        name: 'মোঃ জহিরুল ইসলাম (ইতালিয়ান গ্রানাইট ও কিচেন টপ ফিটিং মিস্ত্রি)',
        phone: '01915-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        experienceYears: 13,
        specialties: ['মার্বেল ও গ্রানাইট ফিনিশিং', 'ফ্লোর টাইলস বসানো'],
        dailyWage: 950,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'বোচাগঞ্জ সেতাবগঞ্জ বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'মডুলার কিচেন ক্যাবিনেটের গ্রানাইট স্ল্যাব কাটিং, সিঙ্ক হোলের গ্রাইন্ডিং ও ইতালিয়ান মার্বেল ফিনিশিং করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 8 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'tiles_1007',
        categoryId: 'cat_mistri_tiles',
        userId: 'usr_707',
        name: 'মোঃ তারিকুল ইসলাম (টাইলস গ্রাউটিং, ওয়াটারপ্রুফিং ও পয়েন্টার)',
        phone: '01714-554433',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: ['টাইলস গ্রাউটিং ও পয়েন্টিং', 'দেয়াল ও বাথরুম টাইলস'],
        dailyWage: 800,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'টাইলসের গ্যাপে ওয়াটারপ্রুফ ইপোক্সি গ্রাউটিং ফিলিং, বাথরুম লিক সিমিং ও কালারড গ্রাউট সীল করার কাজ করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 7 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'tiles_1008',
        categoryId: 'cat_mistri_tiles',
        userId: 'usr_708',
        name: 'মোঃ আকমল হোসেন (পুরাতন টাইলস ড্যামেজ রিপেয়ার ও চেঞ্জ মিস্ত্রি)',
        phone: '01812-776655',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['পুরাতন টাইলস রিপেয়ার ও ড্যামেজ ফিটিং', 'ফ্লোর টাইলস বসানো'],
        dailyWage: 850,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বিরামপুর',
        address: 'বিরামপুর ঢাকা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'ফাঁপা ও পপিং করা পুরানো টাইলস সাবধানে তুলে নতুন টাইলস ফিটিং এবং আংশিক মেরামত কাজ করি।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 6 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'tiles_1009',
        categoryId: 'cat_mistri_tiles',
        userId: 'usr_709',
        name: 'মোঃ এরশাদ আলী (কমার্শিয়াল ফ্লোর ও শোরুম টাইলস বর্ডার কারিগর)',
        phone: '01718-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
        experienceYears: 16,
        specialties: ['ফ্লোর টাইলস বসানো', 'মার্বেল ও গ্রানাইট ফিনিশিং'],
        dailyWage: 1000,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা পাকেরহাট বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'মার্কেট, হাসপাতাল ও শোরুমের বিশাল ফ্লোরে লেজার লেভেলিং স্কেল দিয়ে ২x২ ও ৪x২ সাইজের মেগা টাইলস ফিটিং।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 5 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'tiles_1010',
        categoryId: 'cat_mistri_tiles',
        userId: 'usr_710',
        name: 'মোঃ মোস্তফা কামাল (মডুলার ডাইনিং ফ্লোর ও পার্কিং টাইলস মিস্ত্রি)',
        phone: '01917-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: ['ফ্লোর টাইলস বসানো', 'সিঁড়ি ও পোর্চ টাইলস'],
        dailyWage: 800,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ কাঁচাবাজার, দিনাজপুর',
        isAvailable: true,
        description: 'কম খরচে নিখুঁত এলাইনমেন্ট বজায় রেখে বসতবাড়ির রুম ফ্লোরিং ও স্ক্র্যাচ-রেজিস্ট্যান্ট পার্কিং টাইলস বসাই।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 4 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'tiles_1011',
        categoryId: 'cat_mistri_tiles',
        userId: 'usr_711',
        name: 'মোঃ আশরাফুল আলম (স্যানিটারি কম্বো ও বাথরুম টাইলস ডেকোরেটর)',
        phone: '01715-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['দেয়াল ও বাথরুম টাইলস', 'টাইলস গ্রাউটিং ও পয়েন্টিং'],
        dailyWage: 850,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'বাথরুমের টাইলস ফিনিশিং ও কমোড হোল কাটিং গ্রাইন্ডিংয়ের নিখুঁত স্যানিটারি কম্বো ফিটিং।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    }
];

const normalizeTilesMistri = (doc) => {
    if (!doc) return doc;
    return {
        ...doc,
        id: doc._id || doc.id,
        categoryId: doc.categoryId || 'cat_mistri_tiles',
        name: doc.name || 'টাইলস মিস্ত্রি',
        phone: doc.phone || '',
        alternatePhone: doc.alternatePhone || '',
        photo: doc.photo || 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: typeof doc.experienceYears === 'number' ? doc.experienceYears : 0,
        specialties: Array.isArray(doc.specialties) ? doc.specialties : ['ফ্লোর টাইলস বসানো'],
        dailyWage: typeof doc.dailyWage === 'number' ? doc.dailyWage : null,
        division: doc.division || 'রংপুর',
        district: doc.district || 'দিনাজপুর',
        upazila: doc.upazila || 'দিনাজপুর সদর',
        address: doc.address || '',
        isAvailable: doc.isAvailable !== undefined ? Boolean(doc.isAvailable) : true,
        description: doc.description || '',
        workSampleImages: Array.isArray(doc.workSampleImages) ? doc.workSampleImages : [],
        status: doc.status || 'pending',
        submittedBy: doc.submittedBy || 'guest',
        createdAt: doc.createdAt || new Date().toISOString(),
        updatedAt: doc.updatedAt || new Date().toISOString()
    };
};

export const getAllTilesMistrisService = async (query = {}) => {
    const db = getDB();

    if (!db) {
        let filtered = [...initialTilesMistris];

        if (query.status) {
            filtered = filtered.filter(item => item.status === query.status);
        }
        if (query.upazila && query.upazila !== 'সকল') {
            filtered = filtered.filter(item => item.upazila === query.upazila);
        }
        if (query.specialty && query.specialty !== 'সকল') {
            filtered = filtered.filter(item => item.specialties.includes(query.specialty));
        }
        if (query.isAvailable === 'true') {
            filtered = filtered.filter(item => item.isAvailable === true);
        }
        if (query.search) {
            const q = query.search.toLowerCase();
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(q) ||
                item.phone.toLowerCase().includes(q) ||
                item.address.toLowerCase().includes(q) ||
                item.specialties.some(s => s.toLowerCase().includes(q))
            );
        }
        return filtered.map(normalizeTilesMistri);
    }

    try {
        const collection = db.collection('tiles_mistris');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialTilesMistris);
        }

        let filter = {};
        if (query.status) {
            filter.status = query.status;
        }
        if (query.upazila && query.upazila !== 'সকল') {
            filter.upazila = query.upazila;
        }
        if (query.specialty && query.specialty !== 'সকল') {
            filter.specialties = query.specialty;
        }
        if (query.isAvailable === 'true') {
            filter.isAvailable = true;
        }
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { phone: { $regex: query.search, $options: 'i' } },
                { address: { $regex: query.search, $options: 'i' } },
                { specialties: { $regex: query.search, $options: 'i' } }
            ];
        }

        const rawDocs = await collection.find(filter).sort({ createdAt: -1 }).toArray();
        return rawDocs.map(normalizeTilesMistri);
    } catch (err) {
        return initialTilesMistris.map(normalizeTilesMistri);
    }
};

export const getTilesMistriByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        const found = initialTilesMistris.find(item => item._id === id || item.id === id);
        return found ? normalizeTilesMistri(found) : null;
    }
    const collection = db.collection('tiles_mistris');
    const doc = await collection.findOne({ _id: id });
    return doc ? normalizeTilesMistri(doc) : null;
};

export const createTilesMistriService = async (data) => {
    const db = getDB();

    const newItem = {
        _id: 'tiles_' + Date.now(),
        categoryId: data.categoryId || 'cat_mistri_tiles',
        userId: data.userId || null,
        name: data.name,
        phone: data.phone,
        alternatePhone: data.alternatePhone || '',
        photo: data.photo || 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: Number(data.experienceYears) || 0,
        specialties: Array.isArray(data.specialties) ? data.specialties : ['ফ্লোর টাইলস বসানো'],
        dailyWage: data.dailyWage ? Number(data.dailyWage) : null,
        division: data.division || 'রংপুর',
        district: data.district || 'দিনাজপুর',
        upazila: data.upazila || 'দিনাজপুর সদর',
        address: data.address || '',
        isAvailable: data.isAvailable !== undefined ? Boolean(data.isAvailable) : true,
        description: data.description || '',
        workSampleImages: Array.isArray(data.workSampleImages) ? data.workSampleImages : [],
        status: data.status || 'pending',
        submittedBy: data.submittedBy || 'user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialTilesMistris.unshift(newItem);
        return normalizeTilesMistri(newItem);
    }

    const collection = db.collection('tiles_mistris');
    await collection.insertOne(newItem);
    return normalizeTilesMistri(newItem);
};

export const updateTilesMistriStatusService = async (id, status) => {
    const db = getDB();
    const updateFields = { status, updatedAt: new Date().toISOString() };

    if (!db) {
        const index = initialTilesMistris.findIndex(item => item._id === id || item.id === id);
        if (index !== -1) {
            initialTilesMistris[index] = { ...initialTilesMistris[index], ...updateFields };
            return normalizeTilesMistri(initialTilesMistris[index]);
        }
        return null;
    }

    const collection = db.collection('tiles_mistris');
    await collection.updateOne({ _id: id }, { $set: updateFields });
    const doc = await collection.findOne({ _id: id });
    return doc ? normalizeTilesMistri(doc) : null;
};

export const deleteTilesMistriService = async (id) => {
    const db = getDB();
    if (!db) {
        initialTilesMistris = initialTilesMistris.filter(item => item._id !== id && item.id !== id);
        return true;
    }
    const collection = db.collection('tiles_mistris');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
