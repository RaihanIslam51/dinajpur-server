/**
 * ElectricityOffice Service Layer
 * Dinajpur Smart City Platform
 */
import { getDB } from '../../database/db.js';
import { ObjectId } from 'mongodb';

export const normalizeElectricityOffice = (data) => {
    return {
        name: data.name || data.title || '',
        officeType: data.officeType || 'নেসকো (NESCO)',
        description: data.description || '',
        address: data.address || '',
        area: data.area || 'দিনাজপুর সদর',
        phone: data.phone || data.contactNumber || '',
        emergencyNumber: data.emergencyNumber || data.emergencyPhone || '16999',
        email: data.email || '',
        website: data.website || 'https://nesco.gov.bd',
        serviceAreas: Array.isArray(data.serviceAreas) 
            ? data.serviceAreas 
            : ['দিনাজপুর পৌরসভা', 'সুইহারী', 'উপশহর'],
        officeHours: data.officeHours || 'সকাল ৯:০০ - বিকেল ৫:০০',
        complaintNumber: data.complaintNumber || data.hotline || '16999',
        services: Array.isArray(data.services) 
            ? data.services 
            : ['নতুন মিটার সংযোগ', 'প্রিপেইড কার্ড রিচার্জ', 'বিদ্যুৎ বিল প্রদান', 'মিটার সমাধান', 'জরুরি লাইন মেরামত'],
        location: {
            latitude: Number(data.location?.latitude) || 25.6217,
            longitude: Number(data.location?.longitude) || 88.6354
        },
        status: data.status || 'active',
        createdAt: data.createdAt || new Date(),
        updatedAt: new Date()
    };
};

export const seedElectricityOffices = [
    {
        name: 'নেসকো বিক্রয় ও বিতরণ বিভাগ-১ (NESCO Sales & Distribution Div-1)',
        officeType: 'নেসকো (NESCO)',
        description: 'দিনাজপুর শহরের প্রধান বিদ্যুৎ সরবরাহ ও নেটওয়ার্ক পরিচালনাকারী সরকারি সংস্থা। বিদ্যুৎ বিভ্রাট, বিল সংক্রান্ত সমস্যা ও নতুন সংযোগে সেবাদানে নিয়োজিত।',
        address: 'সুইহারী বিদ্যুৎ ভবন, দিনাজপুর সদর, দিনাজপুর',
        area: 'সুইহারী',
        phone: '02589923456',
        emergencyNumber: '01755600201',
        email: 'snd1.dinajpur@nesco.gov.bd',
        website: 'https://nesco.gov.bd',
        serviceAreas: ['দিনাজপুর সদর', 'সুইহারী', 'উপশহর', 'বাহাদুরবাজার', 'চারু বাবুর মোড়'],
        officeHours: 'সকাল ৯:০০ - বিকেল ৫:০০ (জরুরি সেবাকেন্দ্র ২৪/৭ চালু)',
        complaintNumber: '16999',
        services: ['নতুন স্মার্ট ও প্রিপেইড মিটার সংযোগ', 'স্মার্ট মিটার রিচার্জ সমস্যা সমাধান', 'বিদ্যুৎ বিল সংশোধন ও গ্রহণ', 'ট্রান্সফরমার ও লাইন মেরামত'],
        location: { latitude: 25.6225, longitude: 88.6389 },
        status: 'active'
    },
    {
        name: 'নেসকো বিক্রয় ও বিতরণ বিভাগ-২ (NESCO Sales & Distribution Div-2)',
        officeType: 'নেসকো (NESCO)',
        description: 'রাজবাটী ও দক্ষিণ দিনাজপুর অঞ্চলের গ্রাহকদের বিদ্যুৎ বণ্টন ও কন্ট্রোল রুম সেবা প্রদানকারী কার্যালয়।',
        address: 'রাজবাটী রোড, গণেশতলা সংলগ্ন, দিনাজপুর সদর, দিনাজপুর',
        area: 'রাজবাটী',
        phone: '02589923457',
        emergencyNumber: '01755600202',
        email: 'snd2.dinajpur@nesco.gov.bd',
        website: 'https://nesco.gov.bd',
        serviceAreas: ['রাজবাটী', 'কালীতলা', 'পাহাড়পুর', 'মুন্সিপাড়া', 'গাবতলী'],
        officeHours: 'সকাল ৯:০০ - বিকেল ৫:০০',
        complaintNumber: '16999',
        services: ['প্রিপেইড কার্ড ভেন্ডিং ও রিচার্জ', 'আবাসিক ও বাণিজ্যিক মিটার রূপান্তর', 'জরুরি ফিউজ মেরামত ও ফল্ট ক্লিয়ারিং'],
        location: { latitude: 25.6288, longitude: 88.6341 },
        status: 'active'
    },
    {
        name: 'দিনাজপুর পল্লি বিদ্যুৎ সমিতি-১ (Dinajpur Palli Bidyut Samiti-1)',
        officeType: 'পল্লি বিদ্যুৎ (Palli Bidyut)',
        description: 'দিনাজপুর গ্রামীণ এলাকা ও উপশহর অঞ্চলে নিরবচ্ছিন্ন ও মানসম্মত বিদ্যুৎ সেবা প্রদানকারী সমিতি।',
        address: 'উত্তরার মোড়, উপশহর রোড, দিনাজপুর সদর, দিনাজপুর',
        area: 'উপশহর',
        phone: '0531-65230',
        emergencyNumber: '01769400100',
        email: 'pbs1dinajpur@gmail.com',
        website: 'http://pbs1.dinajpur.gov.bd',
        serviceAreas: ['দিনাজপুর সদর উপজেলা', 'চিরিরবন্দর', 'বিরল', 'খানসামা'],
        officeHours: 'সকাল ৯:০০ - বিকেল ৫:০০ (কমপ্লেন সেল ২৪/৭)',
        complaintNumber: '01769400105',
        services: ['কৃষি ও শিল্প বিদ্যুৎ সংযোগ', 'অনলাইন বিল পরিশোধ সাপোর্ট', 'সোলার প্যানেল সংযোগ', 'জরুরি লাইন মেরামত ও কমপ্লেন সমাধান'],
        location: { latitude: 25.6351, longitude: 88.6482 },
        status: 'active'
    },
    {
        name: 'দিনাজপুর গ্রিড উপকেন্দ্র (Dinajpur 132/33 KV Grid Substation)',
        officeType: 'পাওয়ার গ্রিড (PGCB)',
        description: 'দিনাজপুর জেলার প্রধান জাতীয় গ্রিড সঞ্চালন উপকেন্দ্র। উচ্চ ভোল্টেজ বিদ্যুৎ সংযোগ ও জাতীয় সঞ্চালন গ্রিড তদারকি কেন্দ্র।',
        address: 'কালাইবাড়ী, চেরাডাঙ্গী রোড, দিনাজপুর সদর',
        area: 'কালাইবাড়ী',
        phone: '02589921122',
        emergencyNumber: '01711889900',
        email: 'grid.dinajpur@pgcb.gov.bd',
        website: 'https://pgcb.gov.bd',
        serviceAreas: ['দিনাজপুর জেলা বিদ্যুৎ গ্রিড সরবরাহ'],
        officeHours: '২৪ ঘন্টা শিফটিং ডিউটি',
        complaintNumber: '01711889900',
        services: ['জাতীয় সঞ্চালন গ্রিড অপারেশন', 'ভোল্টেজ স্ট্যাবিলাইজেশন', 'হাই ভোল্টেজ উপকেন্দ্র রক্ষণাবেক্ষণ'],
        location: { latitude: 25.6110, longitude: 88.6290 },
        status: 'active'
    }
];

export const getAllElectricityOfficesService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        return seedElectricityOffices.map((item, idx) => ({ _id: (idx + 1).toString(), ...normalizeElectricityOffice(item) }));
    }
    try {
        const collection = db.collection('electricityOffices');
        let filter = {};
        if (query.status && query.status !== 'all') {
            filter.status = query.status;
        }
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { officeType: { $regex: query.search, $options: 'i' } },
                { address: { $regex: query.search, $options: 'i' } }
            ];
        }

        let items = await collection.find(filter).toArray();
        if (items.length === 0 && (!query.status || query.status === 'active')) {
            console.log('Seeding initial Electricity Offices data...');
            const normalizedSeeds = seedElectricityOffices.map(normalizeElectricityOffice);
            await collection.insertMany(normalizedSeeds);
            items = await collection.find(filter).toArray();
        }
        return items.map(item => ({ ...item, ...normalizeElectricityOffice(item) }));
    } catch (err) {
        console.error('Error in getAllElectricityOfficesService:', err);
        return seedElectricityOffices.map((item, idx) => ({ _id: (idx + 1).toString(), ...normalizeElectricityOffice(item) }));
    }
};

export const getElectricityOfficeByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        const item = seedElectricityOffices[0];
        return { _id: id, ...normalizeElectricityOffice(item) };
    }
    const collection = db.collection('electricityOffices');
    let queryId = id;
    try {
        if (typeof id === 'string' && id.length === 24) {
            queryId = new ObjectId(id);
        }
    } catch (e) {
        queryId = id;
    }
    const item = await collection.findOne({ _id: queryId });
    return item ? { ...item, ...normalizeElectricityOffice(item) } : null;
};

export const createElectricityOfficeService = async (data) => {
    const db = getDB();
    const normalized = normalizeElectricityOffice(data);
    if (!db) return { _id: Date.now().toString(), ...normalized };
    const collection = db.collection('electricityOffices');
    const result = await collection.insertOne(normalized);
    return { _id: result.insertedId, ...normalized };
};

export const updateElectricityOfficeService = async (id, data) => {
    const db = getDB();
    const normalized = normalizeElectricityOffice(data);
    if (!db) return { _id: id, ...normalized };
    const collection = db.collection('electricityOffices');
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

export const deleteElectricityOfficeService = async (id) => {
    const db = getDB();
    if (!db) return true;
    const collection = db.collection('electricityOffices');
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
