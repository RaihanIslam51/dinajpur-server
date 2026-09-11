/**
 * FireService / Emergency Service Layer
 * Isolated collection handling for 'fireServices' with 13 normalized fields
 */
import { getDB } from '../../database/db.js';
import { ObjectId } from 'mongodb';

// Helper to normalize array fields from comma-separated string or array
const normalizeArray = (val) => {
    if (Array.isArray(val)) return val.map(item => String(item).trim()).filter(Boolean);
    if (typeof val === 'string' && val.trim()) {
        return val.split(',').map(item => item.trim()).filter(Boolean);
    }
    return [];
};

// Normalize input data to strictly conform to all 13 schema fields
const normalizeFireServiceData = (data = {}) => {
    return {
        name: data.name || data.stationName || 'দিনাজপুর জরুরি সেবা কেন্দ্র',
        serviceType: data.serviceType || data.stationType || 'ফায়ার সার্ভিস',
        description: data.description || 'জরুরি অগ্নিনির্বাপণ ও উদ্ধার কাজে ২৪ ঘণ্টা নিয়োজিত।',
        phone: data.phone || data.officeNumber || '01700-000000',
        hotline: data.hotline || data.emergencyNumber || '999',
        alternativePhone: data.alternativePhone || '',
        address: data.address || 'দিনাজপুর সদর',
        area: data.area || data.location || 'দিনাজপুর',
        available24Hours: data.available24Hours !== undefined ? Boolean(data.available24Hours) : (data.operatingHours ? data.operatingHours.includes('২৪') : true),
        responseTime: data.responseTime || data.avgResponseTime || '৫-১০ মিনিট',
        serviceAreas: normalizeArray(data.serviceAreas || data.coverageArea || data.services),
        location: data.location || 'https://maps.google.com/?q=Dinajpur+Fire+Station',
        status: data.status || 'Active',
        isFeatured: Boolean(data.isFeatured || data.featured),
        updatedAt: new Date()
    };
};

// Seed initial emergency services for Dinajpur if database collection is empty
const getInitialSeedEmergencyServices = () => [
    {
        name: 'দিনাজপুর ফায়ার সার্ভিস ও সিভিল ডিফেন্স স্টেশন',
        serviceType: 'ফায়ার সার্ভিস',
        description: 'অগ্নি দুর্ঘটনা, সড়ক দুর্ঘটনা ও যে কোনো প্রাকৃতিক দুর্যোগে দ্রুততম সময়ে ফায়ার ফাইটিং ও রেসকিউ অপারেশনের জন্য নিবেদিত।',
        phone: '0531-65123',
        hotline: '999',
        alternativePhone: '01730-002233',
        address: 'কেবি রোড, জেল রোড সংলগ্ন, দিনাজপুর সদর',
        area: 'দিনাজপুর সদর',
        available24Hours: true,
        responseTime: '৫-১০ মিনিট',
        serviceAreas: ['দিনাজপুর সদর', 'পুনর্ভবা এলাকা', 'কাঞ্চন সেতু মোড়', 'বোল্লাবাজার'],
        location: 'https://maps.google.com/?q=25.6279,88.6332',
        status: 'Active',
        isFeatured: true,
        createdAt: new Date('2026-09-01')
    },
    {
        name: 'দিনাজপুর ফায়ার স্টেশন এ্যাম্বুলেন্স সার্ভিস Unit-1',
        serviceType: 'এ্যাম্বুলেন্স সেবা',
        description: 'ফায়ারের নিজস্ব আধুনিক সরকারি এ্যাম্বুলেন্স ব্যবস্থা। যে কোনো দুর্ঘটনায় মুমূর্ষু রোগীকে হাসপাতালে পৌঁছে দেওয়ার জন্য প্রস্তুত।',
        phone: '01730-002234',
        hotline: '01711-445566',
        alternativePhone: '0531-65123',
        address: 'ফায়ার স্টেশন কম্পাউন্ড, দিনাজপুর সদর',
        area: 'দিনাজপুর সদর ও আশেপাশের এলাকা',
        available24Hours: true,
        responseTime: '১০-১৫ মিনিট',
        serviceAreas: ['দিনাজপুর পৌরসভা', 'এম আবদুর রহিম মেডিকেল সংলগ্ন', 'কোতোয়ালী এলাকা'],
        location: 'https://maps.google.com/?q=25.6279,88.6332',
        status: 'Active',
        isFeatured: true,
        createdAt: new Date('2026-09-02')
    },
    {
        name: 'জাতীয় জরুরি সেবা ৯৯৯ (দিনাজপুর জেলা রেসপন্স টিম)',
        serviceType: 'জাতীয় জরুরি সেবা ৯৯৯',
        description: 'বাংলাদেশ পুলিশের অধীনে ফায়ার সার্ভিস, অ্যাম্বুলেন্স ও পুলিশি সহায়তার জন্য ২৪ ঘণ্টা সচল টোল-ফ্রি জাতীয় হটলাইন।',
        phone: '999',
        hotline: '999',
        alternativePhone: '01713-373333',
        address: 'পুলিশ সুপার কার্যালয়, দিনাজপুর',
        area: 'সমগ্র দিনাজপুর জেলা',
        available24Hours: true,
        responseTime: '৩-৫ মিনিট',
        serviceAreas: ['দিনাজপুর জেলা', 'সকল উপজেলা ও ইউনিয়ন'],
        location: 'https://maps.google.com/?q=25.6280,88.6340',
        status: 'Active',
        isFeatured: true,
        createdAt: new Date('2026-09-03')
    },
    {
        name: 'নেসকো বিদ্যুৎ জরুরি কন্ট্রোল রুম (দিনাজপুর বিক্রয় ও বিতরণ বিভাগ-১)',
        serviceType: 'বিদ্যুৎ সেবা',
        description: 'ঝড়-বৃষ্টি বা কারিগরি ত্রুটিতে লাইনে আগুন লাগলে বা বিদ্যুৎ সংযোগ বিচ্ছিন্ন হলে দ্রুত লাইন কাটার জরুরি টিম।',
        phone: '01755-667788',
        hotline: '16163',
        alternativePhone: '0531-64500',
        address: 'নেসকো ভবন, সুইহারী, দিনাজপুর',
        area: 'দিনাজপুর শহর',
        available24Hours: true,
        responseTime: '১৫-২০ মিনিট',
        serviceAreas: ['সুইহারী', 'গনেশতলা', 'চারু বাবুর মোড়', 'কালীতলা'],
        location: 'https://maps.google.com/?q=25.6300,88.6400',
        status: 'Active',
        isFeatured: false,
        createdAt: new Date('2026-09-04')
    },
    {
        name: 'বোচাগঞ্জ উপজেলা ফায়ার স্টেশন',
        serviceType: 'ফায়ার সার্ভিস',
        description: 'বোচাগঞ্জ ও সেতাবগঞ্জ মিল এলাকায় যে কোনো জরুরি অগ্নি দুর্ঘটনা ও উদ্ধার কাজের জন্য প্রস্তুত স্টেশন।',
        phone: '01730-002235',
        hotline: '999',
        alternativePhone: '0532-356000',
        address: 'সেতাবগঞ্জ রোড, বোচাগঞ্জ, দিনাজপুর',
        area: 'বোচাগঞ্জ উপজেলা',
        available24Hours: true,
        responseTime: '৮-১২ মিনিট',
        serviceAreas: ['সেতাবগঞ্জ পৌরসভা', 'বোচাগঞ্জ ইউনিয়নসমূহ', 'পীরগঞ্জ সীমানা'],
        location: 'https://maps.google.com/?q=25.7950,88.4600',
        status: 'Active',
        isFeatured: false,
        createdAt: new Date('2026-09-05')
    }
];

export const getAllFireServicesService = async (query = {}) => {
    const db = getDB();
    const seeds = getInitialSeedEmergencyServices();
    if (!db) {
        return seeds;
    }
    try {
        const collection = db.collection('fireServices');
        const count = await collection.countDocuments();

        if (count === 0) {
            try {
                await collection.insertMany(seeds);
            } catch (e) {
                console.error('Seeding warning in fireServices:', e);
            }
        }

        const filter = {};
        if (query.serviceType && query.serviceType !== 'all' && query.serviceType !== 'সকল') {
            filter.serviceType = query.serviceType;
        }
        if (query.status && query.status !== 'all') {
            filter.status = { $regex: new RegExp(`^${query.status}$`, 'i') };
        }
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { stationName: { $regex: query.search, $options: 'i' } },
                { serviceType: { $regex: query.search, $options: 'i' } },
                { area: { $regex: query.search, $options: 'i' } },
                { location: { $regex: query.search, $options: 'i' } }
            ];
        }

        let items = await collection.find(filter).sort({ isFeatured: -1, createdAt: -1 }).toArray();
        if (items.length === 0 && Object.keys(filter).length === 0) {
            await collection.deleteMany({});
            await collection.insertMany(seeds);
            items = await collection.find({}).sort({ isFeatured: -1, createdAt: -1 }).toArray();
        }
        return items.length > 0 ? items : seeds;
    } catch (err) {
        console.error('Error in getAllFireServicesService:', err);
        return seeds;
    }
};

export const getFireServiceByIdService = async (id) => {
    const db = getDB();
    const seeds = getInitialSeedEmergencyServices();
    if (!db) return seeds[0];

    const collection = db.collection('fireServices');
    let filter = { _id: id };
    if (ObjectId.isValid(id)) {
        filter = { $or: [{ _id: new ObjectId(id) }, { _id: id }] };
    }
    const item = await collection.findOne(filter);
    return item || seeds[0];
};

export const createFireServiceService = async (data) => {
    const db = getDB();
    const normalized = normalizeFireServiceData(data);
    const newItem = { ...normalized, createdAt: new Date() };

    if (!db) {
        return { _id: 'fs_' + Date.now(), ...newItem };
    }
    const collection = db.collection('fireServices');
    const result = await collection.insertOne(newItem);
    return { _id: result.insertedId, ...newItem };
};

export const updateFireServiceService = async (id, data) => {
    const db = getDB();
    const normalized = normalizeFireServiceData(data);

    if (!db) {
        return { _id: id, ...normalized };
    }
    const collection = db.collection('fireServices');
    let filter = { _id: id };
    if (ObjectId.isValid(id)) {
        filter = { $or: [{ _id: new ObjectId(id) }, { _id: id }] };
    }
    await collection.updateOne(filter, { $set: normalized });
    return await collection.findOne(filter);
};

export const deleteFireServiceService = async (id) => {
    const db = getDB();
    if (!db) return true;

    const collection = db.collection('fireServices');
    let filter = { _id: id };
    if (ObjectId.isValid(id)) {
        filter = { $or: [{ _id: new ObjectId(id) }, { _id: id }] };
    }
    const result = await collection.deleteOne(filter);
    return result.deletedCount > 0;
};
