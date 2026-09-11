/**
 * Nolkup Mistri (Tube-well & Plumbing Technician) Service Layer with MongoDB support & 10+ initial seed data entries
 */
import { getDB } from '../../database/db.js';

let initialNolkupMistris = [
    {
        _id: 'nolkup_1001',
        categoryId: 'cat_mistri_nolkup',
        userId: 'usr_501',
        name: 'মোঃ আব্দুর রাজ্জাক (হেড নলকূপ মিস্ত্রি & ডিপ বোরিং স্পেশালিস্ট)',
        phone: '01712-334455',
        alternatePhone: '01812-667788',
        photo: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: 15,
        specialties: ['নলকূপ বসানো/বোরিং', 'সাবমার্সিবল পাম্প ইনস্টলেশন', 'পানির পাইপ ফিটিং ও পাইপলাইন'],
        dailyWage: 950,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'কালীতলা মেইন রোড, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দীর্ঘ ১৫ বছর ধরে দিনাজপুর জেলা জুড়ে বাসা-বাড়ি ও কৃষি জমিতে ১.৫" থেকে ৪" ব্যাসের গভীর নলকূপ বসানো ও সাবমার্সিবল পাম্প ফিটিংয়ের কাজ করছি। ১০ জনের দক্ষ টিম রয়েছে।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
        ],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 15 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'nolkup_1002',
        categoryId: 'cat_mistri_nolkup',
        userId: 'usr_502',
        name: 'মোঃ মফিজুল ইসলাম (সাবমার্সিবল ও ওয়াটার মোটর টেকনিশিয়ান)',
        phone: '01911-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 11,
        specialties: ['সাবমার্সিবল পাম্প ইনস্টলেশন', 'মোবাইল ওয়াটার পাম্প মোটর মেরামত', 'পানির পাইপ ফিটিং ও পাইপলাইন'],
        dailyWage: 900,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বিরল',
        address: 'বিরল বাস স্ট্যান্ড, দিনাজপুর',
        isAvailable: true,
        description: 'আবাসিক ভবনের সাবমার্সিবল পাম্প স্থাপন, কন্ট্রোল বক্স সেটআপ এবং পানির মোটরের মেকানিক্যাল কয়েল ও বেয়ারিং মেরামতের কাজ সুনামের সাথে সম্পন্ন করি।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 14 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'nolkup_1003',
        categoryId: 'cat_mistri_nolkup',
        userId: 'usr_503',
        name: 'মোঃ লতিফ হোসেন (টিবওয়েল হ্যান্ড পাম্প ও পাইপ ফিটিং মিস্ত্রি)',
        phone: '01733-778899',
        alternatePhone: '01555-112233',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 14,
        specialties: ['হ্যান্ড পাম্প/টিবওয়েল মেরামত', 'নলকূপ বসানো/বোরিং', 'বাথরুম ও ওয়াটার ট্যাঙ্ক ফিলিং'],
        dailyWage: 850,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর নতুন বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'হাত চাপানি টিবওয়েলের লেদার চেঞ্জ, চেক ভালভ বসানো, ওয়াশার পরিবর্তন ও নতুন ফিল্টার পাইপ বসানোর কাজ করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 13 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'nolkup_1004',
        categoryId: 'cat_mistri_nolkup',
        userId: 'usr_504',
        name: 'মোঃ শামীম হোসেন (নলকূপ বোরিং ও প্লাস্টার পাইপ টেকনিশিয়ান)',
        phone: '01815-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: ['নলকূপ বসানো/বোরিং', 'পানির পাইপ ফিটিং ও পাইপলাইন'],
        dailyWage: 900,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ বাজার মোড়, দিনাজপুর',
        isAvailable: false,
        description: 'ম্যানুয়াল ফিল্টার বোরিং ও জিআই পাইপ টানা সহ আধুনিক প্লাস্টিক বোরিং পাইপ ফিটিং কাজ করি।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 11 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'nolkup_1005',
        categoryId: 'cat_mistri_nolkup',
        userId: 'usr_505',
        name: 'মোঃ হাবিবুর রহমান (স্যানিটারি ও ওয়াটার ট্যাঙ্ক ফিটিং মিস্ত্রি)',
        phone: '01719-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        experienceYears: 12,
        specialties: ['বাথরুম ও ওয়াটার ট্যাঙ্ক ফিলিং', 'পানির পাইপ ফিটিং ও পাইপলাইন', 'হ্যান্ড পাম্প/টিবওয়েল মেরামত'],
        dailyWage: 850,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাধানগর, দিনাজপুর',
        isAvailable: true,
        description: 'ছাদের ওয়াটার ট্যাঙ্ক পাইপলাইন সীলিং, স্যানিটারি ফিটিং ও পানির পাম্প সংযোগের কাজ সুনিপুণভাবে করি।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 10 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'nolkup_1006',
        categoryId: 'cat_mistri_nolkup',
        userId: 'usr_506',
        name: 'মোঃ জহিরুল ইসলাম (সাবমার্সিবল সার্ভিসিং ও পাম্প মিস্ত্রি)',
        phone: '01915-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['সাবমার্সিবল পাম্প ইনস্টলেশন', 'মোবাইল ওয়াটার পাম্প মোটর মেরামত'],
        dailyWage: 900,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'বোচাগঞ্জ সেতাবগঞ্জ বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'ডিপ টিউবওয়েল থেকে সাবমার্সিবল পাম্প উত্তোলন ও ওয়াটার প্রুফ ক্যাবল জয়েন্টিং এর বিশেষজ্ঞ সেবা।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 8 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'nolkup_1007',
        categoryId: 'cat_mistri_nolkup',
        userId: 'usr_507',
        name: 'মোঃ তারিকুল ইসলাম (টিবওয়েল মেরামত ও ফিল্টার ওয়াশ মিস্ত্রি)',
        phone: '01714-332211',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        experienceYears: 13,
        specialties: ['হ্যান্ড পাম্প/টিবওয়েল মেরামত', 'নলকূপ বসানো/বোরিং'],
        dailyWage: 850,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'পুরানো টিবওয়েলের পানি ওঠা বন্ধ হলে বা বালি উঠলে ফিল্টার ওয়াশিং ও লেদার সীল মেরামতের গ্যারান্টিযুক্ত কাজ করি।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 7 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'nolkup_1008',
        categoryId: 'cat_mistri_nolkup',
        userId: 'usr_508',
        name: 'মোঃ আকমল হোসেন (ওয়াটার পাইপলাইন ও বাথরুম স্যানিটারি মিস্ত্রি)',
        phone: '01812-554433',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['পানির পাইপ ফিটিং ও পাইপলাইন', 'বাথরুম ও ওয়াটার ট্যাঙ্ক ফিলিং'],
        dailyWage: 800,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বিরামপুর',
        address: 'বিরামপুর ঢাকা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'বাসাবাড়ির গিজার লাইন, ট্যাপ ফিটিং, ফ্লাশ ট্যাংক ওয়াশ ও ওয়াটার লাইন ব্লকেজ সমাধান করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 6 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'nolkup_1009',
        categoryId: 'cat_mistri_nolkup',
        userId: 'usr_509',
        name: 'মোঃ এরশাদ আলী (গভীর নলকূপ বোরিং টিম লিডার)',
        phone: '01718-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
        experienceYears: 16,
        specialties: ['নলকূপ বসানো/বোরিং', 'সাবমার্সিবল পাম্প ইনস্টলেশন'],
        dailyWage: 1000,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা পাকেরহাট বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'মাটির তলদেশের বিশুদ্ধ খাওয়ার পানির স্তর পরীক্ষা করে ২০০-৪০০ ফুট গভীর নলকূপ বসানোর অভিজ্ঞ টিম কারিগর।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 5 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'nolkup_1010',
        categoryId: 'cat_mistri_nolkup',
        userId: 'usr_510',
        name: 'মোঃ মোস্তফা কামাল (স্মার্ট ওয়াটার পাম্প অ্যান্ড প্লাম্বিং টেকনিশিয়ান)',
        phone: '01917-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: ['মোবাইল ওয়াটার পাম্প মোটর মেরামত', 'পানির পাইপ ফিটিং ও পাইপলাইন'],
        dailyWage: 800,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ কাঁচাবাজার, দিনাজপুর',
        isAvailable: true,
        description: 'অটোমেটিক ওয়াটার লেভেল কন্ট্রোলার ইনস্টলেশন ও মোটর পাম্প মেকানিক্যাল ট্রাবলশুটিং কাজ করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 4 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'nolkup_1011',
        categoryId: 'cat_mistri_nolkup',
        userId: 'usr_511',
        name: 'মোঃ আশরাফুল আলম (নলকূপ চেক ভালভ ও লেদার সীল কারিগর)',
        phone: '01715-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['হ্যান্ড পাম্প/টিবওয়েল মেরামত', 'বাথরুম ও ওয়াটার ট্যাঙ্ক ফিলিং'],
        dailyWage: 850,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'টিবওয়েলের যেকোনো জটিল পানির লিকেজ, কম প্রেসার ও পাম্প মেরামত দ্রুততম সময়ে সম্পন্ন করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    }
];

const normalizeNolkupMistri = (doc) => {
    if (!doc) return doc;
    return {
        ...doc,
        id: doc._id || doc.id,
        categoryId: doc.categoryId || 'cat_mistri_nolkup',
        name: doc.name || 'নলকূপ মিস্ত্রি',
        phone: doc.phone || '',
        alternatePhone: doc.alternatePhone || '',
        photo: doc.photo || 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: typeof doc.experienceYears === 'number' ? doc.experienceYears : 0,
        specialties: Array.isArray(doc.specialties) ? doc.specialties : ['নলকূপ বসানো/বোরিং'],
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

export const getAllNolkupMistrisService = async (query = {}) => {
    const db = getDB();

    if (!db) {
        let filtered = [...initialNolkupMistris];

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
        return filtered.map(normalizeNolkupMistri);
    }

    try {
        const collection = db.collection('nolkup_mistris');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialNolkupMistris);
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
        return rawDocs.map(normalizeNolkupMistri);
    } catch (err) {
        return initialNolkupMistris.map(normalizeNolkupMistri);
    }
};

export const getNolkupMistriByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        const found = initialNolkupMistris.find(item => item._id === id || item.id === id);
        return found ? normalizeNolkupMistri(found) : null;
    }
    const collection = db.collection('nolkup_mistris');
    const doc = await collection.findOne({ _id: id });
    return doc ? normalizeNolkupMistri(doc) : null;
};

export const createNolkupMistriService = async (data) => {
    const db = getDB();

    const newItem = {
        _id: 'nolkup_' + Date.now(),
        categoryId: data.categoryId || 'cat_mistri_nolkup',
        userId: data.userId || null,
        name: data.name,
        phone: data.phone,
        alternatePhone: data.alternatePhone || '',
        photo: data.photo || 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: Number(data.experienceYears) || 0,
        specialties: Array.isArray(data.specialties) ? data.specialties : ['নলকূপ বসানো/বোরিং'],
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
        initialNolkupMistris.unshift(newItem);
        return normalizeNolkupMistri(newItem);
    }

    const collection = db.collection('nolkup_mistris');
    await collection.insertOne(newItem);
    return normalizeNolkupMistri(newItem);
};

export const updateNolkupMistriStatusService = async (id, status) => {
    const db = getDB();
    const updateFields = { status, updatedAt: new Date().toISOString() };

    if (!db) {
        const index = initialNolkupMistris.findIndex(item => item._id === id || item.id === id);
        if (index !== -1) {
            initialNolkupMistris[index] = { ...initialNolkupMistris[index], ...updateFields };
            return normalizeNolkupMistri(initialNolkupMistris[index]);
        }
        return null;
    }

    const collection = db.collection('nolkup_mistris');
    await collection.updateOne({ _id: id }, { $set: updateFields });
    const doc = await collection.findOne({ _id: id });
    return doc ? normalizeNolkupMistri(doc) : null;
};

export const deleteNolkupMistriService = async (id) => {
    const db = getDB();
    if (!db) {
        initialNolkupMistris = initialNolkupMistris.filter(item => item._id !== id && item.id !== id);
        return true;
    }
    const collection = db.collection('nolkup_mistris');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
