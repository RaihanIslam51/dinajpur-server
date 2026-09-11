/**
 * Sanitary Mistri (Sanitary & Bathroom Technician) Service Layer with MongoDB support & 10+ initial seed data entries
 */
import { getDB } from '../../database/db.js';

let initialSanitaryMistris = [
    {
        _id: 'sanitary_1001',
        categoryId: 'cat_mistri_sanitary',
        userId: 'usr_601',
        name: 'মোঃ খোরশেদ আলম (হেড স্যানিটারি মিস্ত্রি & লাক্সারি বাথরুম ফিটিং বিশেষজ্ঞ)',
        phone: '01712-445566',
        alternatePhone: '01812-778899',
        photo: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: 14,
        specialties: ['বাথরুম ফিটিং ও কমোড ইনস্টলেশন', 'বেসিন, সিঙ্ক ও কল/ট্যাপ ফিটিং', 'গিজার ও হট ওয়াটার লাইন ইনস্টলেশন'],
        dailyWage: 950,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'কালীতলা মেইন রোড, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দীর্ঘ ১৪ বছর ধরে বাসা-বাড়ি, হোটেল ও অ্যাপার্টমেন্টে অত্যাধুনিক স্যানিটারি ফিটিং, ওয়াল হ্যাং কমোড, হট অ্যান্ড কোল্ড ওয়াটার মিক্সার এবং গিজার সংযোগের কাজ অভিজ্ঞ টিমের সাথে করছি।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
        ],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 15 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'sanitary_1002',
        categoryId: 'cat_mistri_sanitary',
        userId: 'usr_602',
        name: 'মোঃ রুবেল হোসেন (কমোড, বেসিন ও মডার্ন হাই-লং ফিটিং স্পেশালিস্ট)',
        phone: '01911-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['বাথরুম ফিটিং ও কমোড ইনস্টলেশন', 'বেসিন, সিঙ্ক ও কল/ট্যাপ ফিটিং'],
        dailyWage: 900,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বিরল',
        address: 'বিরল বাস স্ট্যান্ড, দিনাজপুর',
        isAvailable: true,
        description: 'হাই জিনিক প্যাটার্ন কমোড সেটআপ, কাউন্টারটপ বেসিন, গ্লাস শাওয়ার এনক্লোজার এবং আধুনিক পলিমার সিঙ্ক স্যানিটারি ফিটিং করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 13 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'sanitary_1003',
        categoryId: 'cat_mistri_sanitary',
        userId: 'usr_603',
        name: 'মোঃ জহির উদ্দিন (গিজার ও হট ওয়াটার পাইপলাইন টেকনিশিয়ান)',
        phone: '01733-889900',
        alternatePhone: '01555-223344',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 12,
        specialties: ['গিজার ও হট ওয়াটার লাইন ইনস্টলেশন', 'স্যানিটারি পাইপলাইন ও ড্রেনেজ লাইন'],
        dailyWage: 900,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর নতুন বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'ইলেকট্রিক ও সোলার গিজার ইনসুলেটেড পিপিআর পাইপিং, বাথরুমের গরম পানির মিক্সার টেপ এবং প্রেশার টেস্ট সম্পন্ন করে ফিটিং করি।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 12 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'sanitary_1004',
        categoryId: 'cat_mistri_sanitary',
        userId: 'usr_604',
        name: 'মোঃ শফিকুল ইসলাম (স্যানিটারি স্যুয়ারেজ ও সেপটিক ট্যাংক ড্রেনেজ মিস্ত্রি)',
        phone: '01815-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 15,
        specialties: ['পয়ঃনিষ্কাশন ও সেপটিক ট্যাংক স্যুয়ারেজ', 'স্যানিটারি পাইপলাইন ও ড্রেনেজ লাইন'],
        dailyWage: 950,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ বাজার রোড, দিনাজপুর',
        isAvailable: false,
        description: 'বহুতল ভবনের মূল স্যুয়ারেজ ড্রেন আউটলেট, সেপটিক ট্যাংক কানেকশন, পি-ট্র্যাপ ফিটিং এবং দুর্গন্ধমুক্ত এয়ার ভেন্ট পাইপিং কাজ করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 10 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'sanitary_1005',
        categoryId: 'cat_mistri_sanitary',
        userId: 'usr_605',
        name: 'মোঃ মিজানুর রহমান (ওয়াটার ট্যাঙ্ক, শাওয়ার ও প্লাম্বিং ফিক্সচার টেকনিশিয়ান)',
        phone: '01719-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: ['ওয়াটার হেড ট্যাঙ্ক ও শাওয়ার সেটআপ', 'বেসিন, সিঙ্ক ও কল/ট্যাপ ফিটিং'],
        dailyWage: 850,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাধানগর, দিনাজপুর',
        isAvailable: true,
        description: 'ছাদের ৫০০-২০০০ লিটার প্লাস্টিক ওয়াটার ট্যাঙ্ক ইনস্টলেশন, ওভারফ্লো পাইপিং, কনসিল্ড ফ্লাশ ও রেইন শাওয়ার ফিটিং।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 9 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'sanitary_1006',
        categoryId: 'cat_mistri_sanitary',
        userId: 'usr_606',
        name: 'মোঃ গোলাম কিবরিয়া (কমার্শিয়াল ওয়াশরুম ও টয়লেট ফিটিং স্পেশালিস্ট)',
        phone: '01915-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        experienceYears: 11,
        specialties: ['বাথরুম ফিটিং ও কমোড ইনস্টলেশন', 'পয়ঃনিষ্কাশন ও সেপটিক ট্যাংক স্যুয়ারেজ'],
        dailyWage: 900,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'বোচাগঞ্জ সেতাবগঞ্জ বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'অফিস, শোরুম ও রেস্তোরাঁর কমার্শিয়াল বাথরুম স্যানিটারি ওয়্যার, সেন্সর ট্যাপ ও সোপ ডিসপেনসার সেটআপের কাজ করি।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 8 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'sanitary_1007',
        categoryId: 'cat_mistri_sanitary',
        userId: 'usr_607',
        name: 'মোঃ আশরাফুল হক (কিচেন সিঙ্ক ও ওয়াটার ডিসপেনসার স্যানিটারি মিস্ত্রি)',
        phone: '01714-443322',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        experienceYears: 13,
        specialties: ['বেসিন, সিঙ্ক ও কল/ট্যাপ ফিটিং', 'স্যানিটারি পাইপলাইন ও ড্রেনেজ লাইন'],
        dailyWage: 850,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'রান্নাঘরের ডাবল ও সিঙ্গেল বোউল সিঙ্ক ইনস্টলেশন, গ্রে ওয়াটার ড্রেন পাইপ ফিটিং ও আর-ও ওয়াটার পিউরিফায়ার ফিল্টার লাইন।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 7 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'sanitary_1008',
        categoryId: 'cat_mistri_sanitary',
        userId: 'usr_608',
        name: 'মোঃ আক্তারুজ্জামান (বাথরুম লিক মেরামতের মাস্টার মিস্ত্রি)',
        phone: '01812-665544',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['স্যানিটারি পাইপলাইন ও ড্রেনেজ লাইন', 'বাথরুম ফিটিং ও কমোড ইনস্টলেশন'],
        dailyWage: 800,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বিরামপুর',
        address: 'বিরামপুর ঢাকা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'বাথরুমের ফ্লোর লিক, দেয়ালের পানি চুইয়ে পড়া, ফ্লাশ ফ্লোট মেরামত ও পুরনো কমোড খুলে নতুন ফিটিং করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 6 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'sanitary_1009',
        categoryId: 'cat_mistri_sanitary',
        userId: 'usr_609',
        name: 'মোঃ নজরুল ইসলাম (স্মার্ট বাথরুম ডেকর ও জয়েন্ট ড্রেন টেকনিশিয়ান)',
        phone: '01718-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
        experienceYears: 16,
        specialties: ['বাথরুম ফিটিং ও কমোড ইনস্টলেশন', 'ওয়াটার হেড ট্যাঙ্ক ও শাওয়ার সেটআপ'],
        dailyWage: 1000,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা পাকেরহাট বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'আধুনিক ফিটিং যেমন থার্মোস্ট্যাটিক শাওয়ার, অ্যাঙ্গেল স্টপ কক, ও হাই-প্রেসার জেট স্প্রে ইনস্টলেশনের কাজ অভিজ্ঞতায় পরিপক্ক।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 5 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'sanitary_1010',
        categoryId: 'cat_mistri_sanitary',
        userId: 'usr_610',
        name: 'মোঃ সাইদুর রহমান (স্যানিটারি প্লাস্টিক ও পিপিআর পাইপ স্পেশালিস্ট)',
        phone: '01917-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: ['স্যানিটারি পাইপলাইন ও ড্রেনেজ লাইন', 'গিজার ও হট ওয়াটার লাইন ইনস্টলেশন'],
        dailyWage: 800,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ কাঁচাবাজার, দিনাজপুর',
        isAvailable: true,
        description: 'হিটিং গান দিয়ে পিপিআর ওয়েল্ডিং পাইপ জয়েন্টিং, ইউপিভিসি স্যুয়ারেজ সকেট সীলিং এবং ওয়াটার লাইন ফিক্সিং।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 4 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'sanitary_1011',
        categoryId: 'cat_mistri_sanitary',
        userId: 'usr_611',
        name: 'মোঃ রাজু আহমেদ (ফ্লাশ পাইপ ও ট্যাপ চেঞ্জ কারিগর)',
        phone: '01715-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['বেসিন, সিঙ্ক ও কল/ট্যাপ ফিটিং', 'বাথরুম ফিটিং ও কমোড ইনস্টলেশন'],
        dailyWage: 850,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'নতুন বাসার বাথরুম এক্সেসরিজ টাওয়েল রেল, সোপ ডিশ, লুকিং গ্লাস ও ট্যাপ স্পাউট ফিটিং করা হয়।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    }
];

const normalizeSanitaryMistri = (doc) => {
    if (!doc) return doc;
    return {
        ...doc,
        id: doc._id || doc.id,
        categoryId: doc.categoryId || 'cat_mistri_sanitary',
        name: doc.name || 'স্যানিটারি মিস্ত্রি',
        phone: doc.phone || '',
        alternatePhone: doc.alternatePhone || '',
        photo: doc.photo || 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: typeof doc.experienceYears === 'number' ? doc.experienceYears : 0,
        specialties: Array.isArray(doc.specialties) ? doc.specialties : ['বাথরুম ফিটিং ও কমোড ইনস্টলেশন'],
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

export const getAllSanitaryMistrisService = async (query = {}) => {
    const db = getDB();

    if (!db) {
        let filtered = [...initialSanitaryMistris];

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
        return filtered.map(normalizeSanitaryMistri);
    }

    try {
        const collection = db.collection('sanitary_mistris');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialSanitaryMistris);
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
        return rawDocs.map(normalizeSanitaryMistri);
    } catch (err) {
        return initialSanitaryMistris.map(normalizeSanitaryMistri);
    }
};

export const getSanitaryMistriByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        const found = initialSanitaryMistris.find(item => item._id === id || item.id === id);
        return found ? normalizeSanitaryMistri(found) : null;
    }
    const collection = db.collection('sanitary_mistris');
    const doc = await collection.findOne({ _id: id });
    return doc ? normalizeSanitaryMistri(doc) : null;
};

export const createSanitaryMistriService = async (data) => {
    const db = getDB();

    const newItem = {
        _id: 'sanitary_' + Date.now(),
        categoryId: data.categoryId || 'cat_mistri_sanitary',
        userId: data.userId || null,
        name: data.name,
        phone: data.phone,
        alternatePhone: data.alternatePhone || '',
        photo: data.photo || 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: Number(data.experienceYears) || 0,
        specialties: Array.isArray(data.specialties) ? data.specialties : ['বাথরুম ফিটিং ও কমোড ইনস্টলেশন'],
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
        initialSanitaryMistris.unshift(newItem);
        return normalizeSanitaryMistri(newItem);
    }

    const collection = db.collection('sanitary_mistris');
    await collection.insertOne(newItem);
    return normalizeSanitaryMistri(newItem);
};

export const updateSanitaryMistriStatusService = async (id, status) => {
    const db = getDB();
    const updateFields = { status, updatedAt: new Date().toISOString() };

    if (!db) {
        const index = initialSanitaryMistris.findIndex(item => item._id === id || item.id === id);
        if (index !== -1) {
            initialSanitaryMistris[index] = { ...initialSanitaryMistris[index], ...updateFields };
            return normalizeSanitaryMistri(initialSanitaryMistris[index]);
        }
        return null;
    }

    const collection = db.collection('sanitary_mistris');
    await collection.updateOne({ _id: id }, { $set: updateFields });
    const doc = await collection.findOne({ _id: id });
    return doc ? normalizeSanitaryMistri(doc) : null;
};

export const deleteSanitaryMistriService = async (id) => {
    const db = getDB();
    if (!db) {
        initialSanitaryMistris = initialSanitaryMistris.filter(item => item._id !== id && item.id !== id);
        return true;
    }
    const collection = db.collection('sanitary_mistris');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
