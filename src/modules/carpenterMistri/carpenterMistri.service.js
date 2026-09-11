/**
 * Carpenter Mistri Service Layer with MongoDB support & initial seed data
 */
import { getDB } from '../../database/db.js';

let initialCarpenterMistris = [
    {
        _id: 'carpenter_1001',
        categoryId: 'cat_mistri_carpenter',
        userId: 'usr_301',
        name: 'মোঃ কামরুল হাসান (হেড কাঠের মিস্ত্রি)',
        phone: '01711-223344',
        alternatePhone: '01811-998877',
        photo: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
        experienceYears: 15,
        specialties: ['ফার্নিচার তৈরি', 'খাট/আলমারি তৈরি', 'ফার্নিচার পলিশ/রিপেয়ার', 'কেবিনেট/ইন্টেরিয়র'],
        dailyWage: 1000,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'কালীতলা কাঠ পট্টি, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দীর্ঘ ১৫ বছর ধরে দিনাজপুর শহরে উন্নতমানের সেগুন, কড়ই ও মেহগনি কাঠের রাজকীয় ফার্নিচার তৈরি, ডাইনিং, খাট, আলমারি ও কেবিনেট ফিনিশিং এর কাজ করছি। আমাদের ৬ জনের অভিজ্ঞ টিম রয়েছে।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'
        ],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 12 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'carpenter_1002',
        categoryId: 'cat_mistri_carpenter',
        userId: 'usr_302',
        name: 'আব্দুল গফুর (দরজা-জানালা ও চৌকাঠ মিস্ত্রি)',
        phone: '01912-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['দরজা-জানালা ফিটিং', 'ফার্নিচার তৈরি', 'ফার্নিচার পলিশ/রিপেয়ার'],
        dailyWage: 900,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'বিরল',
        address: 'বিরল বাস স্ট্যান্ড বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'নতুন বাসার কাঠের দরজা-জানালা ফিটিং, চৌকাঠ সেট করা এবং পুরোনো কাঠের ফার্নিচারের গ্লসি পলিশ ও মেরামত নিখুঁতভাবে করে থাকি।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
        ],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 6 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'carpenter_1003',
        categoryId: 'cat_mistri_carpenter',
        userId: 'usr_303',
        name: 'মোঃ জাকির হোসেন (কেবিনেট ও কিচেন ডিজাইন মিস্ত্রি)',
        phone: '01733-998877',
        alternatePhone: '01555-112233',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 12,
        specialties: ['কেবিনেট/ইন্টেরিয়র', 'ফার্নিচার তৈরি', 'দরজা-জানালা ফিটিং'],
        dailyWage: 1100,
        division: 'রংপুর',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাধানগর বাজার, দিনাজপুর',
        isAvailable: false,
        description: 'আধুনিক মডুলার কিচেন কেবিনেট, ওয়াল কেবিনেট এবং সুদৃশ্য কাঠের ইন্টেরিয়র সলিউশন কাস্টমাইজড ডিজাইনে তৈরি করি।',
        workSampleImages: [],
        status: 'approved',
        submittedBy: 'admin',
        createdAt: new Date(Date.now() - 3 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    }
];

const normalizeCarpenterMistri = (doc) => {
    if (!doc) return doc;
    return {
        ...doc,
        id: doc._id || doc.id,
        categoryId: doc.categoryId || 'cat_mistri_carpenter',
        name: doc.name || 'কার্পেন্টার মিস্ত্রি',
        phone: doc.phone || '',
        alternatePhone: doc.alternatePhone || '',
        photo: doc.photo || 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
        experienceYears: typeof doc.experienceYears === 'number' ? doc.experienceYears : 0,
        specialties: Array.isArray(doc.specialties) ? doc.specialties : ['ফার্নিচার তৈরি'],
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

export const getAllCarpenterMistrisService = async (query = {}) => {
    const db = getDB();

    if (!db) {
        let filtered = [...initialCarpenterMistris];

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
        return filtered.map(normalizeCarpenterMistri);
    }

    try {
        const collection = db.collection('carpenter_mistris');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialCarpenterMistris);
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
        return rawDocs.map(normalizeCarpenterMistri);
    } catch (err) {
        return initialCarpenterMistris.map(normalizeCarpenterMistri);
    }
};

export const getCarpenterMistriByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        const found = initialCarpenterMistris.find(item => item._id === id || item.id === id);
        return found ? normalizeCarpenterMistri(found) : null;
    }
    const collection = db.collection('carpenter_mistris');
    const doc = await collection.findOne({ _id: id });
    return doc ? normalizeCarpenterMistri(doc) : null;
};

export const createCarpenterMistriService = async (data) => {
    const db = getDB();

    const newItem = {
        _id: 'carpenter_' + Date.now(),
        categoryId: data.categoryId || 'cat_mistri_carpenter',
        userId: data.userId || null,
        name: data.name,
        phone: data.phone,
        alternatePhone: data.alternatePhone || '',
        photo: data.photo || 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
        experienceYears: Number(data.experienceYears) || 0,
        specialties: Array.isArray(data.specialties) ? data.specialties : ['ফার্নিচার তৈরি'],
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
        initialCarpenterMistris.unshift(newItem);
        return normalizeCarpenterMistri(newItem);
    }

    const collection = db.collection('carpenter_mistris');
    await collection.insertOne(newItem);
    return normalizeCarpenterMistri(newItem);
};

export const updateCarpenterMistriStatusService = async (id, status) => {
    const db = getDB();
    const updateFields = { status, updatedAt: new Date().toISOString() };

    if (!db) {
        const index = initialCarpenterMistris.findIndex(item => item._id === id || item.id === id);
        if (index !== -1) {
            initialCarpenterMistris[index] = { ...initialCarpenterMistris[index], ...updateFields };
            return normalizeCarpenterMistri(initialCarpenterMistris[index]);
        }
        return null;
    }

    const collection = db.collection('carpenter_mistris');
    await collection.updateOne({ _id: id }, { $set: updateFields });
    const doc = await collection.findOne({ _id: id });
    return doc ? normalizeCarpenterMistri(doc) : null;
};

export const deleteCarpenterMistriService = async (id) => {
    const db = getDB();
    if (!db) {
        initialCarpenterMistris = initialCarpenterMistris.filter(item => item._id !== id && item.id !== id);
        return true;
    }
    const collection = db.collection('carpenter_mistris');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
