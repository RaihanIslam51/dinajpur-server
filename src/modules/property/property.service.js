/**
 * Property Service Layer
 * Dinajpur Smart City Platform
 */
import { getDB } from '../../database/db.js';
import { ObjectId } from 'mongodb';

export const normalizeProperty = (data) => {
    return {
        title: data.title || data.name || '',
        propertyType: data.propertyType || 'ফ্ল্যাট / অপার্টমেন্ট',
        listingType: data.listingType || 'বিক্রি (For Sale)',
        description: data.description || '',
        images: Array.isArray(data.images) && data.images.length > 0 
            ? data.images 
            : ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'],
        address: data.address || '',
        area: data.area || 'দিনাজপুর সদর',
        location: {
            latitude: Number(data.location?.latitude) || 25.6217,
            longitude: Number(data.location?.longitude) || 88.6354
        },
        size: data.size || '১৪৫০ বর্গফুট',
        price: data.price || '৬৫,০০,০০০ টাকা',
        pricePerUnit: data.pricePerUnit || '৪,৪৮২ টাকা/বর্গফুট',
        bedrooms: Number(data.bedrooms) || 3,
        bathrooms: Number(data.bathrooms) || 2,
        floor: data.floor || '৪র্থ তলা',
        parking: data.parking !== undefined ? Boolean(data.parking) : true,
        facing: data.facing || 'দক্ষিণমুখী',
        roadWidth: data.roadWidth || '২০ ফুট রাস্তা',
        landType: data.landType || 'বাস্তুবাড়ী',
        ownerName: data.ownerName || 'হাজী মোঃ রফিকুল ইসলাম',
        ownerPhone: data.ownerPhone || data.phone || '01711998877',
        agentName: data.agentName || 'দিনাজপুর রিয়েল এস্টেট এজেন্ট',
        agentPhone: data.agentPhone || '01712887766',
        documentsAvailable: data.documentsAvailable !== undefined ? Boolean(data.documentsAvailable) : true,
        utilities: Array.isArray(data.utilities) 
            ? data.utilities 
            : ['বিদ্যুৎ সংযোগ', 'ওয়াসা পানি', 'লিফট', 'সিসিটিভি নিরাপত্তা', 'জেনারেটর بیکআপ'],
        postedDate: data.postedDate || new Date().toISOString().split('T')[0],
        isFeatured: data.isFeatured !== undefined ? Boolean(data.isFeatured) : true,
        isVerified: data.isVerified !== undefined ? Boolean(data.isVerified) : true,
        status: data.status || 'active',
        createdAt: data.createdAt || new Date(),
        updatedAt: new Date()
    };
};

export const seedProperties = [
    {
        title: 'উপশহরে ৩ বেডরুমের আল্ট্রা লাক্সারি ফ্ল্যাট বিক্রি',
        propertyType: 'ফ্ল্যাট / অপার্টমেন্ট',
        listingType: 'বিক্রি (For Sale)',
        description: 'দিনাজপুর উপশহর ব্লক-৪ এর মূল সড়কের পাশে একেবারেই নতুন ব্র্যান্ড নিউ ৩ বেডরুম, ৩ বাথরুম ও ২ ব্যালকোনির সুন্দর ফ্ল্যাট বিক্রি করা হবে। সার্বক্ষণিক লিফট, জেনারেটর ব্যাকআপ ও ২৪ ঘন্টা সিসিটিভি গার্ডের ব্যবস্থা রয়েছে।',
        images: [
            'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
        ],
        address: 'ব্লক-৪, উপশহর প্রধান সড়ক, দিনাজপুর সদর, দিনাজপুর',
        area: 'উপশহর',
        location: { latitude: 25.6321, longitude: 88.6415 },
        size: '১৫৫০ বর্গফুট',
        price: '৭০,০০,০০০ টাকা',
        pricePerUnit: '৪,৫১৬ টাকা/বর্গফুট',
        bedrooms: 3,
        bathrooms: 3,
        floor: '৪র্থ তলা (৪-এ)',
        parking: true,
        facing: 'দক্ষিণ-পূর্বমুখী',
        roadWidth: '৩০ ফুট চওড়া রাস্তা',
        landType: 'আবাসিক জমি',
        ownerName: 'ইঞ্জিনিয়ার মোঃ গোলাম রব্বানী',
        ownerPhone: '01711223399',
        agentName: 'স্মার্ট শহর প্রপার্টি মিডিয়া',
        agentPhone: '01712334488',
        documentsAvailable: true,
        utilities: ['বিদ্যুৎ সংযোগ', 'গভীর নলকূপ পানি', 'আধুনিক লিফট', 'জেনারেটর ব্যাকআপ', 'গ্যারেজ পার্কিং'],
        postedDate: '২০২৬-০৯-০৫',
        isFeatured: true,
        isVerified: true,
        status: 'active'
    },
    {
        title: 'সুইহারী চত্বর সংলগ্ন ৫ শতাংশ নিষ্কণ্টক আবাসিক জমি বিক্রি',
        propertyType: 'আবাসিক জমি',
        listingType: 'বিক্রি (For Sale)',
        description: 'দিনাজপুর শহরের সুইহারী পুলিশ ফাঁড়ির সন্নিকটে উঁচু ও ভরাটকৃত সম্পূর্ণ নিষ্কণ্টক ৫ শতাংশ বসতবাড়ির জমি বিক্রি হবে। খতিয়ান প্রস্তুত, নামজারি সম্পন্ন। সরাসরি বাউন্ডারি দিয়ে ঘর করার উপযোগী।',
        images: [
            'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
        ],
        address: 'সুইহারী বিদ্যুৎ ভবন রোড, দিনাজপুর সদর, দিনাজপুর',
        area: 'সুইহারী',
        location: { latitude: 25.6210, longitude: 88.6385 },
        size: '৫ শতাংশ (৩.০২ কাঠা)',
        price: '৪৫,০০,০০০ টাকা',
        pricePerUnit: '৯,০০,০০০ টাকা/শতাংশ',
        bedrooms: 0,
        bathrooms: 0,
        floor: 'সমতল ভূমি',
        parking: true,
        facing: 'দক্ষিণমুখী',
        roadWidth: '১৬ ফুট পাকা রাস্তা',
        landType: 'বাস্তুবাড়ী (আবাসিক)',
        ownerName: 'হাজী রফিক আহমেদ',
        ownerPhone: '01713445588',
        agentName: 'দিনাজপুর ল্যান্ড এজেন্সি',
        agentPhone: '01714556699',
        documentsAvailable: true,
        utilities: ['বিদ্যুৎ লাইন সংযোগ সুবিধা', 'সুয়ারেজ ড্রেন', 'গ্যাস লাইন সুবিধা'],
        postedDate: '২০২৬-০৯-০৭',
        isFeatured: true,
        isVerified: true,
        status: 'active'
    },
    {
        title: 'কেন্দ্রীয় বাসস্ট্যান্ড সংলগ্ন ১০ শতাংশ বাণিজ্যিক প্লট বিক্রি',
        propertyType: 'বাণিজ্যিক জমি / প্লট',
        listingType: 'বিক্রি (For Sale)',
        description: 'হাইওয়ের কোল ঘেষে দিনাজপুর সেন্ট্রাল বাসস্ট্যান্ড সংলগ্ন ১০ শতাংশ হাই-ভ্যালু বাণিজ্যিক জমি। শোরুম, হোটেল বা কোল্ড স্টোরেজ ডিপো তৈরির জন্য পারফেক্ট লোকেশন।',
        images: [
            'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80'
        ],
        address: 'হাইওয়ে মোড়, সেন্ট্রাল বাসস্ট্যান্ড সংলগ্ন, দিনাজপুর সদর',
        area: 'বাসস্ট্যান্ড এলাকা',
        location: { latitude: 25.6180, longitude: 88.6310 },
        size: '১০ শতাংশ',
        price: '১,২০,০০,০০০ টাকা',
        pricePerUnit: '১২,০০,০০০ টাকা/শতাংশ',
        bedrooms: 0,
        bathrooms: 0,
        floor: 'বাণিজ্যিক প্লট',
        parking: true,
        facing: 'উত্তর-পশ্চিমমুখী',
        roadWidth: '৫০ ফুট চার লেন হাইওয়ে',
        landType: 'বাণিজ্যিক জমি',
        ownerName: 'চৌধুরী ট্রেডার্স',
        ownerPhone: '01715667700',
        agentName: 'উত্তরবঙ্গ রিয়েলটরস',
        agentPhone: '01716778811',
        documentsAvailable: true,
        utilities: ['হাই ভোল্টেজ বিদ্যুৎ লাইন', 'ডাবল ড্রেন সিস্টেম', 'ট্রাক লোডিং স্পেস'],
        postedDate: '২০২৬-০৯-০২',
        isFeatured: true,
        isVerified: true,
        status: 'active'
    },
    {
        title: 'রাজবাটী এলাকায় রেডি ২ বেডরুমের সাশ্রয়ী ফ্ল্যাট',
        propertyType: 'ফ্ল্যাট / অপার্টমেন্ট',
        listingType: 'বিক্রি (For Sale)',
        description: 'রাজবাটী গণেশতলা মোড়ে অবস্থিত ২ বেডরুম, ২ বাথরুম ও ১ বারান্দার অত্যন্ত ছিমছাম সাশ্রয়ী রেডি ফ্ল্যাট। ব্যাংক লোন সুবিধা রয়েছে।',
        images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'
        ],
        address: 'রাজবাটী মেইন রোড, দিনাজপুর সদর, দিনাজপুর',
        area: 'রাজবাটী',
        location: { latitude: 25.6275, longitude: 88.6350 },
        size: '১০৫০ বর্গফুট',
        price: '৪২,০০,০০০ টাকা',
        pricePerUnit: '৪,০০০ টাকা/বর্গফুট',
        bedrooms: 2,
        bathrooms: 2,
        floor: '২য় তলা',
        parking: false,
        facing: 'পশ্চিমমুখী',
        roadWidth: '১২ ফুট রাস্তা',
        landType: 'আবাসিক ফ্ল্যাট',
        ownerName: 'ড. আনিসুর রহমান',
        ownerPhone: '01717889922',
        agentName: 'সিটি হোম প্রপার্টিজ',
        agentPhone: '01718990033',
        documentsAvailable: true,
        utilities: ['বিদ্যুৎ মিটার', 'ওয়াসা পানি', 'সিসিটিভি ক্যামেরা'],
        postedDate: '২০২৬-০৯-০৮',
        isFeatured: false,
        isVerified: true,
        status: 'active'
    }
];

export const getAllPropertiesService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        return seedProperties.map((item, idx) => ({ _id: (idx + 1).toString(), ...normalizeProperty(item) }));
    }
    try {
        const collection = db.collection('properties');
        let filter = {};
        if (query.status && query.status !== 'all') {
            filter.status = query.status;
        }
        if (query.search) {
            filter.$or = [
                { title: { $regex: query.search, $options: 'i' } },
                { propertyType: { $regex: query.search, $options: 'i' } },
                { address: { $regex: query.search, $options: 'i' } },
                { area: { $regex: query.search, $options: 'i' } }
            ];
        }

        let items = await collection.find(filter).toArray();
        if (items.length === 0 && (!query.status || query.status === 'active')) {
            console.log('Seeding initial Properties data...');
            const normalizedSeeds = seedProperties.map(normalizeProperty);
            await collection.insertMany(normalizedSeeds);
            items = await collection.find(filter).toArray();
        }
        return items.map(item => ({ ...item, ...normalizeProperty(item) }));
    } catch (err) {
        console.error('Error in getAllPropertiesService:', err);
        return seedProperties.map((item, idx) => ({ _id: (idx + 1).toString(), ...normalizeProperty(item) }));
    }
};

export const getPropertyByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        const item = seedProperties[0];
        return { _id: id, ...normalizeProperty(item) };
    }
    const collection = db.collection('properties');
    let queryId = id;
    try {
        if (typeof id === 'string' && id.length === 24) {
            queryId = new ObjectId(id);
        }
    } catch (e) {
        queryId = id;
    }
    const item = await collection.findOne({ _id: queryId });
    return item ? { ...item, ...normalizeProperty(item) } : null;
};

export const createPropertyService = async (data) => {
    const db = getDB();
    const normalized = normalizeProperty(data);
    if (!db) return { _id: Date.now().toString(), ...normalized };
    const collection = db.collection('properties');
    const result = await collection.insertOne(normalized);
    return { _id: result.insertedId, ...normalized };
};

export const updatePropertyService = async (id, data) => {
    const db = getDB();
    const normalized = normalizeProperty(data);
    if (!db) return { _id: id, ...normalized };
    const collection = db.collection('properties');
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

export const deletePropertyService = async (id) => {
    const db = getDB();
    if (!db) return true;
    const collection = db.collection('properties');
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
