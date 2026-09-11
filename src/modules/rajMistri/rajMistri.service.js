/**
 * Raj Mistri Service Layer with MongoDB support & initial seed data
 */
import { getDB } from '../../database/db.js';

let initialRajMistris = [
    {
        _id: 'mistri_1001',
        categoryId: 'cat_mistri_raj',
        userId: 'usr_201',
        name: 'মোঃ রফিকুল ইসলাম (হেড রাজ মিস্ত্রি)',
        phone: '01712-345678',
        alternatePhone: '01812-987654',
        photo: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: 12,
        specialties: ['গাঁথুনি', 'পলেস্তারা', 'ছাদ ঢালাই', 'টাইলস'],
        dailyWage: 950,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'কালীতলা, পুলহাট রোড, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দীর্ঘ ১২ বছর ধরে দিনাজপুর শহরে আবাসিক ও বাণিজ্যিক ভবনের হেড রাজ মিস্ত্রি হিসেবে বিশ্বস্ততার সাথে কাজ করছি। অভিজ্ঞ ১০ জনের দক্ষ টিম রয়েছে।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'
        ],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 10 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'mistri_1002',
        categoryId: 'cat_mistri_raj',
        userId: 'usr_202',
        name: 'আব্দুস সালাম (টাইলস ও মার্বেল বিশেষজ্ঞ)',
        phone: '01911-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['টাইলস', 'টয়লেট/বাথরুম ফিটিং', 'পলেস্তারা'],
        dailyWage: 850,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বিরল',
        address: 'বিরল বাজার রোড, বিরল, দিনাজপুর',
        isAvailable: true,
        description: 'ফ্লোর ও বাথরুমের উন্নতমানের টাইলস ও মার্বেল ফিটিং এর কাজে বিশেষ পারদর্শী। সূক্ষ্ম ও নিখুঁত ফিনিশিং এর গ্যারান্টি।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
        ],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 5 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'mistri_1003',
        categoryId: 'cat_mistri_raj',
        userId: 'usr_203',
        name: 'জাহাঙ্গীর আলম (ছাদ ও পলেস্তারা মিস্ত্রি)',
        phone: '01733-445566',
        alternatePhone: '01555-667788',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['ছাদ ঢালাই', 'গাঁথুনি', 'রঙের কাজ'],
        dailyWage: 900,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর বাস স্ট্যান্ড এলাকা, দিনাজপুর',
        isAvailable: false,
        description: 'বিল্ডিং ও ছাদ ঢালাইয়ের ওয়াটারপ্রুফিং সহ দীর্ঘদিনের অভিজ্ঞতা। আধুনিক সাটারিং ও ভাইব্রেটর মেশিন সহ কাজ সম্পন্ন করি।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    }
];

const normalizeRajMistri = (doc) => {
    if (!doc) return doc;
    return {
        ...doc,
        id: doc._id || doc.id,
        categoryId: doc.categoryId || 'cat_mistri_raj',
        name: doc.name || 'মিস্ত্রি',
        phone: doc.phone || '',
        alternatePhone: doc.alternatePhone || '',
        photo: doc.photo || 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: typeof doc.experienceYears === 'number' ? doc.experienceYears : 0,
        specialties: Array.isArray(doc.specialties) ? doc.specialties : ['গাঁথুনি'],
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

export const getAllRajMistrisService = async (query = {}) => {
    const db = getDB();

    if (!db) {
        let filtered = [...initialRajMistris];

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
        return filtered.map(normalizeRajMistri);
    }

    try {
        const collection = db.collection('raj_mistris');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialRajMistris);
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
        return rawDocs.map(normalizeRajMistri);
    } catch (err) {
        return initialRajMistris.map(normalizeRajMistri);
    }
};

export const getRajMistriByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        const found = initialRajMistris.find(item => item._id === id || item.id === id);
        return found ? normalizeRajMistri(found) : null;
    }
    const collection = db.collection('raj_mistris');
    const doc = await collection.findOne({ _id: id });
    return doc ? normalizeRajMistri(doc) : null;
};

export const createRajMistriService = async (data) => {
    const db = getDB();

    const newItem = {
        _id: 'mistri_' + Date.now(),
        categoryId: data.categoryId || 'cat_mistri_raj',
        userId: data.userId || null,
        name: data.name,
        phone: data.phone,
        alternatePhone: data.alternatePhone || '',
        photo: data.photo || 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: Number(data.experienceYears) || 0,
        specialties: Array.isArray(data.specialties) ? data.specialties : ['গাঁথুনি'],
        dailyWage: data.dailyWage ? Number(data.dailyWage) : null,
        division: data.division || 'রংপুর',
        district: data.district || 'দিনাজপুর',
        upazila: data.upazila || 'দিনাজপুর সদর',
        address: data.address || '',
        isAvailable: data.isAvailable !== undefined ? Boolean(data.isAvailable) : true,
        description: data.description || '',
        workSampleImages: Array.isArray(data.workSampleImages) ? data.workSampleImages : [],
        status: data.status || 'pending', // Default starts as pending for user submissions
        submittedBy: data.submittedBy || 'user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialRajMistris.unshift(newItem);
        return normalizeRajMistri(newItem);
    }

    const collection = db.collection('raj_mistris');
    await collection.insertOne(newItem);
    return normalizeRajMistri(newItem);
};

export const updateRajMistriStatusService = async (id, status) => {
    const db = getDB();
    const updateFields = { status, updatedAt: new Date().toISOString() };

    if (!db) {
        const index = initialRajMistris.findIndex(item => item._id === id || item.id === id);
        if (index !== -1) {
            initialRajMistris[index] = { ...initialRajMistris[index], ...updateFields };
            return normalizeRajMistri(initialRajMistris[index]);
        }
        return null;
    }

    const collection = db.collection('raj_mistris');
    await collection.updateOne({ _id: id }, { $set: updateFields });
    const doc = await collection.findOne({ _id: id });
    return doc ? normalizeRajMistri(doc) : null;
};

export const deleteRajMistriService = async (id) => {
    const db = getDB();
    if (!db) {
        initialRajMistris = initialRajMistris.filter(item => item._id !== id && item.id !== id);
        return true;
    }
    const collection = db.collection('raj_mistris');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
