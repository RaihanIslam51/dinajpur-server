/**
 * Rang Mistri (Painter) Service Layer with MongoDB support & 10+ initial seed data entries
 */
import { getDB } from '../../database/db.js';

let initialRangMistris = [
    {
        _id: 'rang_1001',
        categoryId: 'cat_mistri_rang',
        userId: 'usr_401',
        name: 'মোঃ আনোয়ার হোসেন (হেড রং মিস্ত্রি)',
        phone: '01712-112233',
        alternatePhone: '01812-445566',
        photo: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: 14,
        specialties: ['বিল্ডিং পেইন্টিং', 'ইন্টেরিয়র পেইন্ট', 'ওয়েদার কোট/এক্সটেরিয়র', 'পুটিং ও প্রাইমার'],
        dailyWage: 900,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'কালীতলা মেইন রোড, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দীর্ঘ ১৪ বছর ধরে দিনাজপুর শহরের বাসা-বাড়ি ও বাণিজ্যিক ভবনের এশিয়ান পেইন্টস ও বার্জার পেইন্টিং এর কাজ সুনামের সাথে করছি। ৮ জনের দক্ষ রঙের কারিগর টিম রয়েছে।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80'
        ],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 15 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'rang_1002',
        categoryId: 'cat_mistri_rang',
        userId: 'usr_402',
        name: 'মোঃ দুলাল মিয়া (ইন্টেরিয়র ও উড বার্নিশ বিশেষজ্ঞ)',
        phone: '01911-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['ইন্টেরিয়র পেইন্ট', 'অ্যালুমিনিয়াম/উড বার্নিশ', 'ওয়ালপেপার ও স্টেনসিল'],
        dailyWage: 850,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'উপশহর ব্লক-৪, দিনাজপুর সদর',
        isAvailable: true,
        description: 'বাসা-বাড়ির ড্রয়িং রুম ও বেডরুমের গ্লসি টেক্সচার রং, ইতালিয়ান উড লাকার ও বার্নিশের সুনিপুণ কাজ করা হয়।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80'
        ],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 12 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'rang_1003',
        categoryId: 'cat_mistri_rang',
        userId: 'usr_403',
        name: 'মোঃ শফিকুল ইসলাম (এক্সটেরিয়র ও ওয়েদার কোট বিশেষজ্ঞ)',
        phone: '01733-556677',
        alternatePhone: '01555-889900',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 12,
        specialties: ['ওয়েদার কোট/এক্সটেরিয়র', 'বিল্ডিং পেইন্টিং', 'পুটিং ও প্রাইমার'],
        dailyWage: 950,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বিরল',
        address: 'বিরল বাস স্ট্যান্ড, দিনাজপুর',
        isAvailable: false,
        description: 'বহুতল ভবনের বাহিরের ওয়েদার শিল্ড রং, ড্যাম্প ওয়াটারপ্রুফিং ও আধুনিক এক্সটেরিয়র পেইন্টিং কাজ করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 10 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'rang_1004',
        categoryId: 'cat_mistri_rang',
        userId: 'usr_404',
        name: 'মোঃ রফিক মাস্টার (বার্নিশ ও উড পলিশ পেইন্টার)',
        phone: '01815-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 16,
        specialties: ['অ্যালুমিনিয়াম/উড বার্নিশ', 'ইন্টেরিয়র পেইন্ট'],
        dailyWage: 1000,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর নতুন বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'কাঠের দরজা, জানালা, ফার্নিচার ও কেবিনেটের মেটালিক ও ন্যাচারাল উড গ্লসি বার্নিশ ফিনিশিং করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 9 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'rang_1005',
        categoryId: 'cat_mistri_rang',
        userId: 'usr_405',
        name: 'জাহাঙ্গীর আলম (ওয়ালপেপার ও আর্ট পেইন্টার)',
        phone: '01719-887766',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['ওয়ালপেপার ও স্টেনসিল', 'ইন্টেরিয়র পেইন্ট'],
        dailyWage: 850,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'আধুনিক থ্রিডি ওয়ালপেপার ফিটিং, ওয়াল আর্ট স্টেনসিল ডিজাইন এবং রুমের আলপনা শেড রঙের কাজ করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 8 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'rang_1006',
        categoryId: 'cat_mistri_rang',
        userId: 'usr_406',
        name: 'মোঃ তারেক রহমান (পুটিং ও স্মুথ প্লাস্টার পেইন্টার)',
        phone: '01915-443322',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: ['পুটিং ও প্রাইমার', 'বিল্ডিং পেইন্টিং'],
        dailyWage: 800,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাধানগর, দিনাজপুর',
        isAvailable: true,
        description: 'দেয়ালের ফাটল সীলিং, নিখুঁত ওয়াল পুটিং ও প্লাস্টিক পেইন্টের প্রাইমার কভারেজ করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 7 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'rang_1007',
        categoryId: 'cat_mistri_rang',
        userId: 'usr_407',
        name: 'মোঃ সাজ্জাদ হোসেন (বিল্ডিং ও কমার্শিয়াল পেইন্টার)',
        phone: '01714-998877',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        experienceYears: 11,
        specialties: ['বিল্ডিং পেইন্টিং', 'ওয়েদার কোট/এক্সটেরিয়র'],
        dailyWage: 900,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'বোচাগঞ্জ সেতাবগঞ্জ বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'অফিস, শোরুম ও বড় বিল্ডিং এর দ্রুততম সময়ে রঙের কাজ সম্পন্ন করি।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 6 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'rang_1008',
        categoryId: 'cat_mistri_rang',
        userId: 'usr_408',
        name: 'মোঃ হারুনুর রশীদ (স্প্রে পেইন্টিং ও বার্নিশ মিস্ত্রি)',
        phone: '01812-332211',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
        experienceYears: 13,
        specialties: ['অ্যালুমিনিয়াম/উড বার্নিশ', 'ইন্টেরিয়র পেইন্ট'],
        dailyWage: 950,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'স্প্রে পেইন্টিং মেশিন দ্বারা উন্নত ফিনিশিং সহ কাঠ ও গ্রিলের রং করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 5 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'rang_1009',
        categoryId: 'cat_mistri_rang',
        userId: 'usr_409',
        name: 'মোঃ জাকারিয়া খাঁন (লাক্সারি হোম পেইন্ট টেকনিশিয়ান)',
        phone: '01718-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: ['ইন্টেরিয়র পেইন্ট', 'ওয়ালপেপার ও স্টেনসিল', 'পুটিং ও প্রাইমার'],
        dailyWage: 900,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বিরামপুর',
        address: 'বিরামপুর ঢাকা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'লাক্সারি সিল্ক পেইন্ট, রয়্যাল প্লে মেটালিক ফিনিশ ও রুমের নান্দনিক ডিজাইন প্রস্তুত করি।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 4 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'rang_1010',
        categoryId: 'cat_mistri_rang',
        userId: 'usr_410',
        name: 'মোঃ হাবিবুর রহমান (স্মার্ট হাউস পেইন্টার)',
        phone: '01917-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['বিল্ডিং পেইন্টিং', 'পুটিং ও প্রাইমার'],
        dailyWage: 850,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা পাকেরহাট বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'কম খরচে উন্নতমানের রঙের গ্যারান্টি সহ সততার সাথে কাজ করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 3 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'rang_1011',
        categoryId: 'cat_mistri_rang',
        userId: 'usr_411',
        name: 'মোঃ আসাদুল্লাহ (ওয়েদার প্রুফ ও ওয়াটারপ্রুফ পেইন্টার)',
        phone: '01715-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 15,
        specialties: ['ওয়েদার কোট/এক্সটেরিয়র', 'বিল্ডিং পেইন্টিং', 'অ্যালুমিনিয়াম/উড বার্নিশ'],
        dailyWage: 1000,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ কাঁচাবাজার, দিনাজপুর',
        isAvailable: true,
        description: 'ছাদের ওয়াটারপ্রুফ কোটিং, বাইরের দেয়ালের ওয়েদার প্রুফিং ও গ্লস কালার করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    }
];

const normalizeRangMistri = (doc) => {
    if (!doc) return doc;
    return {
        ...doc,
        id: doc._id || doc.id,
        categoryId: doc.categoryId || 'cat_mistri_rang',
        name: doc.name || 'রং মিস্ত্রি',
        phone: doc.phone || '',
        alternatePhone: doc.alternatePhone || '',
        photo: doc.photo || 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: typeof doc.experienceYears === 'number' ? doc.experienceYears : 0,
        specialties: Array.isArray(doc.specialties) ? doc.specialties : ['বিল্ডিং পেইন্টিং'],
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

export const getAllRangMistrisService = async (query = {}) => {
    const db = getDB();

    if (!db) {
        let filtered = [...initialRangMistris];

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
        return filtered.map(normalizeRangMistri);
    }

    try {
        const collection = db.collection('rang_mistris');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialRangMistris);
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
        return rawDocs.map(normalizeRangMistri);
    } catch (err) {
        return initialRangMistris.map(normalizeRangMistri);
    }
};

export const getRangMistriByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        const found = initialRangMistris.find(item => item._id === id || item.id === id);
        return found ? normalizeRangMistri(found) : null;
    }
    const collection = db.collection('rang_mistris');
    const doc = await collection.findOne({ _id: id });
    return doc ? normalizeRangMistri(doc) : null;
};

export const createRangMistriService = async (data) => {
    const db = getDB();

    const newItem = {
        _id: 'rang_' + Date.now(),
        categoryId: data.categoryId || 'cat_mistri_rang',
        userId: data.userId || null,
        name: data.name,
        phone: data.phone,
        alternatePhone: data.alternatePhone || '',
        photo: data.photo || 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: Number(data.experienceYears) || 0,
        specialties: Array.isArray(data.specialties) ? data.specialties : ['বিল্ডিং পেইন্টিং'],
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
        initialRangMistris.unshift(newItem);
        return normalizeRangMistri(newItem);
    }

    const collection = db.collection('rang_mistris');
    await collection.insertOne(newItem);
    return normalizeRangMistri(newItem);
};

export const updateRangMistriStatusService = async (id, status) => {
    const db = getDB();
    const updateFields = { status, updatedAt: new Date().toISOString() };

    if (!db) {
        const index = initialRangMistris.findIndex(item => item._id === id || item.id === id);
        if (index !== -1) {
            initialRangMistris[index] = { ...initialRangMistris[index], ...updateFields };
            return normalizeRangMistri(initialRangMistris[index]);
        }
        return null;
    }

    const collection = db.collection('rang_mistris');
    await collection.updateOne({ _id: id }, { $set: updateFields });
    const doc = await collection.findOne({ _id: id });
    return doc ? normalizeRangMistri(doc) : null;
};

export const deleteRangMistriService = async (id) => {
    const db = getDB();
    if (!db) {
        initialRangMistris = initialRangMistris.filter(item => item._id !== id && item.id !== id);
        return true;
    }
    const collection = db.collection('rang_mistris');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
