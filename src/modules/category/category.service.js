/**
 * Category & Subcategory Entries Service Layer (MongoDB Database Operations)
 */
import { getDB } from '../../database/db.js';

let initialCategories = [
    {
        _id: 'cat_mistri_seba',
        name: 'মিস্ত্রি সেবা',
        icon: 'mechanic.png',
        subcategories: [
            'রাজ মিস্ত্রি', 'কার্পেন্টার মিস্ত্রি', 'রং মিস্ত্রি', 'প্লাম্বিং/নলকূপ মিস্ত্রি',
            'স্যানিটারি মিস্ত্রি', 'টাইলস মিস্ত্রি', 'গ্রিল মিস্ত্রি', 'পর্দা মিস্ত্রি',
            'গাড়ী সার্ভিসিং', 'বাইকের মিস্ত্রি', 'WiFi টেকনিশিয়ান', 'এসি সার্ভিসিং',
            'ফ্রিজ সার্ভিসিং', 'ইলেকট্রিকের মিস্ত্রি', 'ইলেকট্রিশিয়ান', 'মোবাইল সার্ভিসিং',
            'কম্পিউটার সার্ভিসিং', 'CCTV সার্ভিসিং', 'টিভি সার্ভিসিং', 'অন্যান্য সার্ভিস'
        ],
        displayIn: 'allcategory',
        status: 'active'
    },
    {
        _id: 'cat_doctor',
        name: 'ডাক্তার',
        icon: 'doctor.png',
        subcategories: [
            'হৃদযন্ত্র বিষয়ক', 'সার্জারি বিষয়ক', 'ডেন্টিস্ট্রি', 'চর্ম ও যৌন রোগ বিষয়ক',
            'ডায়াবেটিস ও হরমোন', 'নাক, কান ও গলা বিষয়ক', 'চক্ষু বিষয়ক', 'লিভার বিষয়ক',
            'ইউরোলজি', 'গর্ভধারণ বিষয়ক', 'শিশু রোগ বিষয়ক', 'মেডিসিন'
        ],
        displayIn: 'allcategory',
        status: 'active'
    },
    {
        _id: 'cat_education',
        name: 'শিক্ষা প্রতিষ্ঠান',
        icon: 'university.png',
        subcategories: ['স্কুল', 'কলেজ', 'মাদ্রাসা', 'কোচিং সেন্টার', 'প্রশিক্ষণ কেন্দ্র'],
        displayIn: 'allcategory',
        status: 'active'
    },
    {
        _id: 'cat_marriage',
        name: 'বিবাহ সেবা',
        icon: 'couple.png',
        subcategories: ['ক্যাটারিং সার্ভিস', 'বাবুর্চি', 'ফটোগ্রাফার', 'ইভেন্ট ম্যানেজমেন্ট', 'কমিউনিটি সেন্টার', 'পার্লার'],
        displayIn: 'allcategory',
        status: 'active'
    }
];

let initialCategoryEntries = [
    // মিস্ত্রি সেবা -> রাজ মিস্ত্রি
    {
        _id: 'entry_mistri_101',
        categoryId: 'cat_mistri_seba',
        categoryName: 'মিস্ত্রি সেবা',
        subcategoryName: 'রাজ মিস্ত্রি',
        name: 'মোঃ রফিকুল ইসলাম (হেড রাজ মিস্ত্রি)',
        phone: '01712345678',
        address: 'কালীতলা, পুলহাট রোড, দিনাজপুর সদর',
        designation: 'হেড রাজ মিস্ত্রি (১০ জনের দক্ষ টিম)',
        qualification: '১২ বছরের অভিজ্ঞতা | বিশেষত্ব: গাঁথুনি, ছাদ ঢালাই, পলেস্তারা ও টাইলস',
        description: 'দীর্ঘ ১২ বছর ধরে দিনাজপুর শহরে আবাসিক ও বাণিজ্যিক ভবনের হেড রাজ মিস্ত্রি হিসেবে সুনাম ও দক্ষতার সাথে কাজ করছি।',
        image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'entry_mistri_102',
        categoryId: 'cat_mistri_seba',
        categoryName: 'মিস্ত্রি সেবা',
        subcategoryName: 'রাজ মিস্ত্রি',
        name: 'আব্দুস সালাম (টাইলস ও মার্বেল কারিগর)',
        phone: '01911223344',
        address: 'বিরল বাজার রোড, বিরল, দিনাজপুর',
        designation: 'টাইলস ও মার্বেল বিশেষজ্ঞ',
        qualification: '৮ বছরের অভিজ্ঞতা | বিশেষত্ব: ফ্লোর টাইলস, বাথরুম ফিটিং, পলেস্তারা',
        description: 'বাসাবাড়ি ও অফিসের ফ্লোর এবং বাথরুমের মার্বেল ও টাইলস অত্যন্ত নিখুঁতভাবে বসানোর কাজ সম্পন্ন করি।',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'entry_mistri_103',
        categoryId: 'cat_mistri_seba',
        categoryName: 'মিস্ত্রি সেবা',
        subcategoryName: 'রাজ মিস্ত্রি',
        name: 'জাহাঙ্গীর আলম (ছাদ ঢালাই ও পলেস্তারা মিস্ত্রি)',
        phone: '01733445566',
        address: 'চিরিরবন্দর বাস স্ট্যান্ড এলাকা, দিনাজপুর',
        designation: 'ছাদ ও গাঁথুনি মিস্ত্রি',
        qualification: '১০ বছরের অভিজ্ঞতা | বিশেষত্ব: ছাদ ঢালাই, ইটের গাঁথুনি, আধুনিক প্লাস্টার',
        description: 'বিল্ডিং নির্মাণ, আধুনিক ছাদ ঢালাই এবং দেয়াল প্লাস্টারের কাজ যত্নসহকারে ও সময়মতো শেষ করা হয়।',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    // মিস্ত্রি সেবা -> কার্পেন্টার মিস্ত্রি
    {
        _id: 'entry_mistri_104',
        categoryId: 'cat_mistri_seba',
        categoryName: 'মিস্ত্রি সেবা',
        subcategoryName: 'কার্পেন্টার মিস্ত্রি',
        name: 'মোঃ কামরুল হাসান (কাঠের মিস্ত্রি)',
        phone: '01711223344',
        address: 'কালীতলা কাঠ পট্টি, দিনাজপুর সদর',
        designation: 'কার্পেন্টার বিশেষজ্ঞ',
        qualification: '১৫ বছরের অভিজ্ঞতা | বিশেষত্ব: খাট, আলমারি, ডোর ও কেবিনেট ফিনিশিং',
        description: 'উন্নতমানের সেগুন ও কড়ই কাঠের ফার্নিচার তৈরি এবং রিপেয়ারিংয়ের কাজ করা হয়।',
        image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    // মিস্ত্রি সেবা -> ইলেকট্রিশিয়ান
    {
        _id: 'entry_mistri_105',
        categoryId: 'cat_mistri_seba',
        categoryName: 'মিস্ত্রি সেবা',
        subcategoryName: 'ইলেকট্রিশিয়ান',
        name: 'মাহাবুব আলম (ইলেকট্রিক টেকনিশিয়ান)',
        phone: '01819887766',
        address: 'বাসুনিয়াপট্টি, দিনাজপুর সদর',
        designation: 'হাউস ওয়ারিং ও সার্ভিসিং',
        qualification: '১০ বছরের অভিজ্ঞতা | বিশেষত্ব: নতুন হাউস ওয়ারিং, আইপিএস ও শর্ট সার্কিট রিপ্রেয়ার',
        description: 'বাসা-বাড়ি ও বাণিজ্যিক প্রতিষ্ঠানের নিরাপদ ইলেকট্রিক ওয়ারিং ও মেরামত সেবা প্রদান করি।',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    // মিস্ত্রি সেবা -> প্লাম্বিং/নলকূপ মিস্ত্রি
    {
        _id: 'entry_mistri_106',
        categoryId: 'cat_mistri_seba',
        categoryName: 'মিস্ত্রি সেবা',
        subcategoryName: 'প্লাম্বিং/নলকূপ মিস্ত্রি',
        name: 'মোঃ শফিকুল ইসলাম (প্লাম্বার)',
        phone: '01912334455',
        address: 'বালুবাড়ী, দিনাজপুর সদর',
        designation: 'স্যানিটারি ও প্লাম্বিং মিস্ত্রি',
        qualification: '৭ বছরের অভিজ্ঞতা | বিশেষত্ব: পানির পাম্প ইনস্টলেশন, পাইপ ফিটিং ও বাথরুম লাইন',
        description: 'পানির পাম্প বোড়িং, স্যানিটারি ফিটিং ও পানির পাইপ ব্লকেজ সমাধান করা হয়।',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    // মিস্ত্রি সেবা -> রং মিস্ত্রি
    {
        _id: 'entry_mistri_107',
        categoryId: 'cat_mistri_seba',
        categoryName: 'মিস্ত্রি সেবা',
        subcategoryName: 'রং মিস্ত্রি',
        name: 'মোঃ আনোয়ার হোসেন (হেড রং মিস্ত্রি)',
        phone: '01712112233',
        address: 'কালীতলা মেইন রোড, দিনাজপুর সদর',
        designation: 'হেড রং মিস্ত্রি',
        qualification: '১৪ বছরের অভিজ্ঞতা | বিশেষত্ব: বিল্ডিং পেইন্টিং, ইন্টেরিয়র পেইন্ট, ওয়েদার কোট',
        description: 'বাসা-বাড়ি ও বাণিজ্যিক ভবনের এশিয়ান পেইন্টস ও বার্জার পেইন্টিং এর কাজ সুনামের সাথে করছি।',
        image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        status: 'active',
        createdAt: new Date().toISOString()
    }
];

export const getAllCategorysService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        return initialCategories;
    }
    try {
        const collection = db.collection('categorys');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialCategories);
        }
        return await collection.find(query).toArray();
    } catch (err) {
        return initialCategories;
    }
};

export const getCategoryByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        const found = initialCategories.find(c => c._id === id || c.id === id);
        return found || { id, name: 'Sample Category Detail', phone: '01700000000' };
    }
    const collection = db.collection('categorys');
    return await collection.findOne({ _id: id });
};

export const createCategoryService = async (data) => {
    const db = getDB();
    const newItem = { _id: 'cat_' + Date.now(), ...data, createdAt: new Date().toISOString() };
    if (!db) {
        initialCategories.unshift(newItem);
        return newItem;
    }
    const collection = db.collection('categorys');
    await collection.insertOne(newItem);
    return newItem;
};

// ==========================================
// CATEGORY ENTRIES (Subcategory DB Operations)
// ==========================================

export const getAllCategoryEntriesService = async (query = {}) => {
    const db = getDB();

    let filter = {};
    if (query.status) filter.status = query.status;
    if (query.categoryId) filter.categoryId = query.categoryId;
    if (query.categoryName) filter.categoryName = query.categoryName;
    if (query.subcategoryName && query.subcategoryName !== 'all') {
        filter.subcategoryName = query.subcategoryName;
    }
    if (query.search) {
        const q = query.search;
        filter.$or = [
            { name: { $regex: q, $options: 'i' } },
            { designation: { $regex: q, $options: 'i' } },
            { qualification: { $regex: q, $options: 'i' } },
            { address: { $regex: q, $options: 'i' } },
            { phone: { $regex: q, $options: 'i' } },
            { description: { $regex: q, $options: 'i' } }
        ];
    }

    if (!db) {
        let list = [...initialCategoryEntries];
        if (filter.status) list = list.filter(e => e.status === filter.status);
        if (filter.categoryId) list = list.filter(e => e.categoryId === filter.categoryId);
        if (filter.categoryName) list = list.filter(e => e.categoryName === filter.categoryName);
        if (filter.subcategoryName) list = list.filter(e => e.subcategoryName === filter.subcategoryName);
        if (query.search) {
            const s = query.search.toLowerCase();
            list = list.filter(e => 
                (e.name && e.name.toLowerCase().includes(s)) ||
                (e.phone && e.phone.includes(s)) ||
                (e.address && e.address.toLowerCase().includes(s)) ||
                (e.subcategoryName && e.subcategoryName.toLowerCase().includes(s))
            );
        }
        return list;
    }

    try {
        const collection = db.collection('category_entries');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialCategoryEntries);
        }
        return await collection.find(filter).sort({ createdAt: -1 }).toArray();
    } catch (err) {
        return initialCategoryEntries;
    }
};

export const getCategoryEntryByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        return initialCategoryEntries.find(e => e._id === id || e.id === id) || null;
    }
    const collection = db.collection('category_entries');
    return await collection.findOne({ _id: id });
};

export const createCategoryEntryService = async (data) => {
    const db = getDB();
    const newItem = {
        _id: 'entry_' + Date.now(),
        categoryId: data.categoryId || '',
        categoryName: data.categoryName || '',
        subcategoryName: data.subcategoryName || '',
        name: data.name || '',
        image: data.image || '',
        designation: data.designation || '',
        qualification: data.qualification || '',
        address: data.address || '',
        phone: data.phone || '',
        email: data.email || '',
        description: data.description || '',
        status: data.status || 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialCategoryEntries.unshift(newItem);
        return newItem;
    }

    const collection = db.collection('category_entries');
    await collection.insertOne(newItem);
    return newItem;
};

export const updateCategoryEntryService = async (id, data) => {
    const db = getDB();
    const updateData = { ...data, updatedAt: new Date().toISOString() };

    if (!db) {
        const idx = initialCategoryEntries.findIndex(e => e._id === id || e.id === id);
        if (idx !== -1) {
            initialCategoryEntries[idx] = { ...initialCategoryEntries[idx], ...updateData };
            return initialCategoryEntries[idx];
        }
        return null;
    }

    const collection = db.collection('category_entries');
    await collection.updateOne({ _id: id }, { $set: updateData });
    return await collection.findOne({ _id: id });
};

export const deleteCategoryEntryService = async (id) => {
    const db = getDB();
    if (!db) {
        initialCategoryEntries = initialCategoryEntries.filter(e => e._id !== id && e.id !== id);
        return true;
    }
    const collection = db.collection('category_entries');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
