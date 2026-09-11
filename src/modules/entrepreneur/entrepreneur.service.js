/**
 * Entrepreneur Service Layer
 * Dinajpur Smart City Platform
 */
import { getDB } from '../../database/db.js';
import { ObjectId } from 'mongodb';

export const normalizeEntrepreneur = (data) => {
    return {
        name: data.name || data.title || '',
        profileImage: data.profileImage || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
        businessName: data.businessName || data.name || '',
        businessCategory: data.businessCategory || 'হস্তশিল্প ও কুটির শিল্প',
        logo: data.logo || 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=400&q=80',
        coverImage: data.coverImage || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        description: data.description || '',
        story: data.story || 'শূন্য থেকে শুরু করে কঠোর পরিশ্রম ও সততার মাধ্যমে আজ দিনাজপুরের অন্যতম সফল উদ্যোগ প্রতিষ্ঠিত হয়েছে।',
        products: Array.isArray(data.products) 
            ? data.products 
            : ['হস্তশিল্প পণ্য', 'নকশী কাঁথা', 'হাতে বোনা শাড়ি'],
        services: Array.isArray(data.services) 
            ? data.services 
            : ['পাইকারি সরবরাহ', 'অনলাইন অর্ডার', 'কাস্টম ডিজাইন'],
        phone: data.phone || data.contactPhone || '01711223344',
        email: data.email || '',
        website: data.website || '',
        socialLinks: typeof data.socialLinks === 'object' && data.socialLinks !== null
            ? data.socialLinks
            : { facebook: 'https://facebook.com', instagram: '', youtube: '' },
        address: data.address || 'দিনাজপুর সদর, দিনাজপুর',
        location: {
            latitude: Number(data.location?.latitude) || 25.6217,
            longitude: Number(data.location?.longitude) || 88.6354
        },
        establishedYear: data.establishedYear || '২০১৯',
        teamSize: data.teamSize || '১৫ জন',
        achievements: Array.isArray(data.achievements) 
            ? data.achievements 
            : ['জয়িতা পুরস্কার ২০২০', 'সেরা ক্ষুদ্র উদ্যোক্তা সম্মাননা'],
        isFeatured: data.isFeatured !== undefined ? Boolean(data.isFeatured) : true,
        isVerified: data.isVerified !== undefined ? Boolean(data.isVerified) : true,
        status: data.status || 'active',
        createdAt: data.createdAt || new Date(),
        updatedAt: new Date()
    };
};

export const seedEntrepreneurs = [
    {
        name: 'মোছাঃ ফরিদা পারভীন',
        profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
        businessName: 'দিনাজপুরি হস্তশিল্প ও ফ্যাশন হাউস (Dinajpur Handicrafts)',
        businessCategory: 'হস্তশিল্প ও কুটির শিল্প',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=400&q=80',
        coverImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        description: 'দিনাজপুরের ঐতিহ্যবাহী হস্তশিল্প, হাতে সেলাই করা নকশী কাঁথা, হাতের কাজ করা থ্রি-পিস ও বুটিকস পণ্য প্রস্তুতকারক। ৫০ জন স্থানীয় নারীর কর্মসংস্থান সৃষ্টি করেছে এই উদ্যোগ।',
        story: '২০১৮ সালে মাত্র ৫,০০০ টাকা মূলধন নিয়ে যাত্রা শুরু করেছিলেন ফরিদা পারভীন। প্রথমে নিজেদের তৈরি হাতে সেলাই করা নকশী কাঁথা ও পোশাক প্রতিবেশীদের কাছে বিক্রি করতেন। কঠোর পরিশ্রম ও কোয়ালিটি ধরে রাখার কারণে আজ দেশের গণ্ডি পেরিয়ে বিদেশেও তার তৈরি হস্তশিল্প সমাদৃত।',
        products: ['হাতে সেলাই করা নকশী কাঁথা', 'হস্তশিল্প বুটিকস থ্রি-পিস', 'হাতে বোনা চাদর', 'ঐতিহ্যবাহী শোপিস'],
        services: ['পাইকারি সরবরাহ (Wholesale)', 'কাস্টম সাইজ ও কালার সেলাই', 'কুরিয়ার মারফত হোম ডেলিভারি'],
        phone: '01711889900',
        email: 'farida.handicrafts@gmail.com',
        website: 'https://facebook.com/dinajpurhandicrafts',
        socialLinks: { facebook: 'https://facebook.com/dinajpurhandicrafts', instagram: '', youtube: '' },
        address: 'সুইহারী মির্জাপুর রোড, দিনাজপুর সদর, দিনাজপুর',
        location: { latitude: 25.6235, longitude: 88.6391 },
        establishedYear: '২০১৮',
        teamSize: '৫০ জন নারী কারিগর',
        achievements: ['জাতীয় জয়িতা পুরস্কার ২০২০', 'শ্রেষ্ঠ নারী উদ্যোক্তা স্মারক ২০২১'],
        isFeatured: true,
        isVerified: true,
        status: 'active'
    },
    {
        name: 'ইঞ্জিনিয়ার মোঃ রুহুল আমিন',
        profileImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
        businessName: 'কাটারীভোগ পিওর এগ্রো প্রোডাক্টস (Kataribhog Pure Agro)',
        businessCategory: 'কৃষি প্রক্রিয়াজাতকরণ',
        logo: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=400&q=80',
        coverImage: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
        description: 'দিনাজপুরের বিখ্যাত সুগন্ধি কাটারীভোগ চাল, ভেজালমুক্ত ঘানি ভাঙা খাঁটি সরিষার তেল ও খাঁটি মধু সরাসরি কৃষকের জমি থেকে সংগ্রহ করে সারা দেশে ডেলিভারি দেওয়া হয়।',
        story: 'বুয়েট থেকে পাস করার পর চাকরির পেছনে না ছুটে দিনাজপুরের কৃষি ঐতিহ্যকে সমৃদ্ধ করতে এই উদ্যোগ শুরু করেন রুহুল আমিন। রাসায়নিকমুক্ত অরিজিনাল কাটারীভোগ চালের বিশ্বস্ততার ব্র্যান্ড হিসেবে সমাদৃত।',
        products: ['অরিজিনাল দিনাজপুরি কাটারীভোগ চাল', 'ঘানি ভাঙা সরিষার তেল', 'সুন্দরবনের খাঁটি মধু', 'অর্গানিক কাটারী চিড়া'],
        services: ['সারা দেশে হোম ডেলিভারি', 'ই-কমার্স অনলাইন অর্ডার', 'করপোরেট গিফটিং প্যাকেজ'],
        phone: '01712990011',
        email: 'info@kataribhogagro.com',
        website: 'https://kataribhogagro.com',
        socialLinks: { facebook: 'https://facebook.com/kataribhogagro', instagram: 'https://instagram.com/kataribhog', youtube: '' },
        address: 'উপশহর মেইন রোড, দিনাজপুর সদর, দিনাজপুর',
        location: { latitude: 25.6330, longitude: 88.6420 },
        establishedYear: '২০২০',
        teamSize: '২০ জন কর্মকর্তা-কর্মচারী',
        achievements: ['সেরা এগ্রো এন্টারপ্রাইজ অ্যাওয়ার্ড ২০২২', 'আইএসও প্রমিত মান সনদ'],
        isFeatured: true,
        isVerified: true,
        status: 'active'
    },
    {
        name: 'মোছাঃ শারমিন আক্তার',
        profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
        businessName: 'দিনাজপুর লিচু ফুডস অ্যান্ড প্রসেসিং (Dinajpur Litchi Delights)',
        businessCategory: 'খাদ্য ও পানীয়',
        logo: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
        coverImage: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
        description: 'দিনাজপুরের ঐতিহ্যবাহী সুস্বাদু বোম্বাই ও বেদানা লিচু প্রক্রিয়াজাত করে ফ্রুট জুস, স্পেশাল লিচুর আচার, ড্রাই লিচু এবং ক্যান্ডি প্রস্তুতকারী প্রথম উদ্যোগ।',
        story: 'লিচুর মৌসুমে প্রচুর লিচু নষ্ট হওয়া দেখে শারমিন আক্তার লিচু প্রক্রিয়াজাতকরণের উদ্যোগ নেন। প্রযুক্তিগত প্রশিক্ষণ নিয়ে এখন তিনি সারা বছর লিচুর স্বাদ অক্ষুণ্ন রেখে ক্যান্ডি ও আচার প্রস্তুত করছেন।',
        products: ['স্পেশাল দিনাজপুরের লিচুর আচার', 'ন্যাচারাল ড্রাইড লিচু (Dried Litchi)', 'বোম্বাই লিচু ক্যান্ডি', 'লিচু ড্রিংকস স্কোয়াশ'],
        services: ['সারা দেশে কুরিয়ার সেলস', 'পাইকারি ডিলারশিপ প্রদান', 'সুপারশপ সাপ্লাই'],
        phone: '01713001122',
        email: 'sharmin.litchi@gmail.com',
        website: 'https://facebook.com/dinajpurlitchidelights',
        socialLinks: { facebook: 'https://facebook.com/dinajpurlitchidelights', instagram: '', youtube: '' },
        address: 'কেবি রোড, সুইহারী, দিনাজপুর সদর',
        location: { latitude: 25.6208, longitude: 88.6322 },
        establishedYear: '২০২১',
        teamSize: '১২ জন কর্মী',
        achievements: ['বিসিক ইনোভেশন ফেয়ার পুরস্কার ২০২১'],
        isFeatured: true,
        isVerified: true,
        status: 'active'
    },
    {
        name: 'মাহমুদুল হাসান',
        profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        businessName: 'টেকদিনাজপুর সফটওয়্যার ল্যাব (TechDinajpur Software Lab)',
        businessCategory: 'আইটি ও ফ্রিল্যান্সিং',
        logo: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80',
        coverImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
        description: 'দিনাজপুরের তরুণ ফ্রিল্যান্সার ও আইটি প্রফেশনালদের সমন্বয়ে গঠিত সফটওয়্যার ফার্ম। ওয়েব ডেভেলপমেন্ট, ই-কমার্স সলিউশন ও মোবাইল অ্যাপস তৈরিতে বিশ্বস্ত।',
        story: 'কম্পিউটার সায়েন্সে পড়াশোনা শেষ করে দিনাজপুরে তরুণদের আইটি কর্মসংস্থান সৃষ্টির লক্ষ্য নিয়ে মাহমুদুল হাসান ফ্রিল্যান্সার টিম নিয়ে সফটওয়্যার ল্যাব প্রতিষ্ঠা করেন।',
        products: ['স্মার্ট ই-কমার্স প্ল্যাটফর্ম', 'হাসপাতাল ম্যানেজমেন্ট সফটওয়্যার', 'স্কুল অ্যান্ড কলেজ ইআরপি'],
        services: ['ওয়েবসাইট ডেভেলপমেন্ট', 'মোবাইল অ্যাপস ডেভেলপমেন্ট', 'এসইও ও ডিজিটাল মার্কেটিং'],
        phone: '01714112233',
        email: 'contact@techdinajpur.com',
        website: 'https://techdinajpur.com',
        socialLinks: { facebook: 'https://facebook.com/techdinajpur', instagram: '', youtube: '' },
        address: 'চারু বাবুর মোড়, গণেশতলা, দিনাজপুর সদর',
        location: { latitude: 25.6255, longitude: 88.6355 },
        establishedYear: '২০১৯',
        teamSize: '১৮ জন আইটি বিশেষজ্ঞ',
        achievements: ['বেসিস ফ্রিল্যান্সার অ্যাওয়ার্ড ২০১৯ (দিনাজপুর জেলা)'],
        isFeatured: true,
        isVerified: true,
        status: 'active'
    }
];

export const getAllEntrepreneursService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        return seedEntrepreneurs.map((item, idx) => ({ _id: (idx + 1).toString(), ...normalizeEntrepreneur(item) }));
    }
    try {
        const collection = db.collection('entrepreneurs');
        let filter = {};
        if (query.status && query.status !== 'all') {
            filter.status = query.status;
        }
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { businessName: { $regex: query.search, $options: 'i' } },
                { businessCategory: { $regex: query.search, $options: 'i' } },
                { address: { $regex: query.search, $options: 'i' } }
            ];
        }

        let items = await collection.find(filter).toArray();
        if (items.length === 0 && (!query.status || query.status === 'active')) {
            console.log('Seeding initial Entrepreneurs data...');
            const normalizedSeeds = seedEntrepreneurs.map(normalizeEntrepreneur);
            await collection.insertMany(normalizedSeeds);
            items = await collection.find(filter).toArray();
        }
        return items.map(item => ({ ...item, ...normalizeEntrepreneur(item) }));
    } catch (err) {
        console.error('Error in getAllEntrepreneursService:', err);
        return seedEntrepreneurs.map((item, idx) => ({ _id: (idx + 1).toString(), ...normalizeEntrepreneur(item) }));
    }
};

export const getEntrepreneurByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        const item = seedEntrepreneurs[0];
        return { _id: id, ...normalizeEntrepreneur(item) };
    }
    const collection = db.collection('entrepreneurs');
    let queryId = id;
    try {
        if (typeof id === 'string' && id.length === 24) {
            queryId = new ObjectId(id);
        }
    } catch (e) {
        queryId = id;
    }
    const item = await collection.findOne({ _id: queryId });
    return item ? { ...item, ...normalizeEntrepreneur(item) } : null;
};

export const createEntrepreneurService = async (data) => {
    const db = getDB();
    const normalized = normalizeEntrepreneur(data);
    if (!db) return { _id: Date.now().toString(), ...normalized };
    const collection = db.collection('entrepreneurs');
    const result = await collection.insertOne(normalized);
    return { _id: result.insertedId, ...normalized };
};

export const updateEntrepreneurService = async (id, data) => {
    const db = getDB();
    const normalized = normalizeEntrepreneur(data);
    if (!db) return { _id: id, ...normalized };
    const collection = db.collection('entrepreneurs');
    let queryId = id;
    try {
        if (typeof id === 'string' && id.length === 24) {
            queryId = new ObjectId(id);
        }
    } catch (e) {
        queryId = id;
    }
    await collection.updateOne({ _id: queryId }, { $set: normalized });
    return { _id: id, ...normalized };
};

export const deleteEntrepreneurService = async (id) => {
    const db = getDB();
    if (!db) return true;
    const collection = db.collection('entrepreneurs');
    let queryId = id;
    try {
        if (typeof id === 'string' && id.length === 24) {
            queryId = new ObjectId(id);
        }
    } catch (e) {
        queryId = id;
    }
    const result = await collection.deleteOne({ _id: queryId });
    return result.deletedCount > 0;
};
