/**
 * MunicipalService (পৌর সেবা) Service Layer with MongoDB support & field normalization
 */
import { getDB } from '../../database/db.js';

let initialMunicipalServices = [
    {
        _id: 'muni_001',
        name: 'ই-ট্রেড লাইসেন্স ইস্যু ও নবায়ন (E-Trade License)',
        serviceType: 'লাইসেন্স ও সনদ',
        description: 'দিনাজপুর পৌরসভা এলাকায় ব্যবসা পরিচালনার জন্য ডিজিটাল ট্রেড লাইসেন্স আবেদন, নতুন ইস্যু ও বার্ষিক অনলাইন নবায়ন সেবা।',
        officeName: 'দিনাজপুর পৌরসভা - কর ও রাজস্ব শাখা',
        address: 'পৌরসভা ভবন, পৌরসভা মোড়, দিনাজপুর সদর, দিনাজপুর',
        phone: '0531-63100',
        hotline: '01711-445566',
        email: 'info@dinajpurpoureshava.gov.bd',
        website: 'https://dinajpurpoureshava.gov.bd/etrade',
        requiredDocuments: ['ব্যবসায়িক প্রতিষ্ঠানের দোকান ভাড়ার চুক্তিপত্র / মালিকানার কাগজ', 'মালিকের জাতীয় পরিচয়পত্র (NID) ২ কপি', '২ কপি পাসপোর্ট সাইজ ছবি', 'হালনাগাদ হোল্ডিং ট্যাক্স রসিদ'],
        serviceFee: '৳৫০০ - ৳৫০০০ (ব্যবসায়ের মূলধন ও ধরণ অনুযায়ী) + ১৫% ভ্যাট',
        processingTime: '৩ - ৫ কর্মদিবস',
        applicationMethod: 'অনলাইন ই-সেবা পোর্টাল অথবা পৌরসভার ওয়ান-স্টপ সার্ভিস কাউন্টার',
        onlineApplication: true,
        officeHours: 'রবি-বৃহস্পতিবার: সকাল ৯:০০ AM - বিকাল ৪:০০ PM',
        location: 'পৌরসভা মোড়, দিনাজপুর',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'muni_002',
        name: 'নাগরিকত্ব ও চারিত্রিক সনদপত্র (Citizenship Certificate)',
        serviceType: 'লাইসেন্স ও সনদ',
        description: 'পৌরসভার স্থায়ী অধিবাসীদের জন্য ওয়ার্ড কাউন্সিলরের সত্যায়ন সাপেক্ষে অনলাইন নাগরিকত্ব ও চরিত্র সনদ প্রদান সেবা।',
        officeName: 'দিনাজপুর পৌরসভা - সাধারণ শাখা (কাউন্সিলর কার্যালয়)',
        address: 'পৌরসভা ভবন, দিনাজপুর সদর, দিনাজপুর',
        phone: '0531-63102',
        hotline: '01712-889900',
        email: 'certificate@dinajpurpoureshava.gov.bd',
        website: 'https://dinajpurpoureshava.gov.bd/certificate',
        requiredDocuments: ['আবেদনকারীর NID / জন্ম সনদের কপি', 'সংশ্লিষ্ট ওয়ার্ড কাউন্সিলরের সুপারিশপত্র', '১ কপি পাসপোর্ট সাইজ ছবি'],
        serviceFee: '৳১০০ (একশত টাকা মাত্র)',
        processingTime: '১ - ২ কর্মদিবস',
        applicationMethod: 'সরাসরি কাউন্সিলর কার্যালয় অথবা অনলাইন পোর্টাল',
        onlineApplication: true,
        officeHours: 'রবি-বৃহস্পতিবার: সকাল ৯:০০ AM - বিকাল ৪:০০ PM',
        location: 'পৌরসভা ভবন, দিনাজপুর',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'muni_003',
        name: 'জন্ম ও মৃত্যু নিবন্ধন সংশোধন ও ই-সনদ (Birth & Death Registration)',
        serviceType: 'লাইসেন্স ও সনদ',
        description: 'অনলাইন জন্ম-মৃত্যু নিবন্ধন পোর্টালের মাধ্যমে নতুন আবেদন গ্রহণ, সনদপত্র প্রদান ও তথ্য সংশোধনের সরকারি সেবা।',
        officeName: 'দিনাজপুর পৌরসভা - স্বাস্থ্য ও জন্ম-মৃত্যু শাখা',
        address: 'পৌরসভা ভবন, ২য় তলা, দিনাজপুর সদর',
        phone: '0531-63105',
        hotline: '16100',
        email: 'bdris@dinajpurpoureshava.gov.bd',
        website: 'https://bdris.gov.bd',
        requiredDocuments: ['হাসপাতালের ছাড়পত্র / ইপিআই টিকাদান কার্ড', 'পিতা-মাতার NID ও অনলাইন জন্ম সনদ', 'বাসার হোল্ডিং ট্যাক্স রসিদ'],
        serviceFee: '৪৫ দিনের মধ্যে বিনামূল্যে (বিলম্বে ৳৫০-৳১০০)',
        processingTime: '২ - ৪ কর্মদিবস',
        applicationMethod: 'bdris.gov.bd অনলাইন পোর্টালে আবেদন জমা দিয়ে পৌরসভায় প্রিন্ট কপি সংগ্রহ',
        onlineApplication: true,
        officeHours: 'রবি-বৃহস্পতিবার: সকাল ৯:০০ AM - বিকাল ৪:০০ PM',
        location: 'পৌরসভা মোড়, দিনাজপুর',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'muni_004',
        name: 'পৌর বর্জ্য ব্যবস্থাপনা ও নর্দমা পরিষ্কার সেবা (Sanitation & Waste Disposal)',
        serviceType: 'স্বাস্থ্য ও পরিচ্ছন্নতা',
        description: 'শহরের বাসাবাড়ি ও বাণিজ্যিক এলাকার ময়লা-আবর্জনা অপসারণ, পরিচ্ছন্নতা ড্রাইভ ও সেপ্টিক ট্যাংক ভ্যাকুয়াম সার্ভিস।',
        officeName: 'দিনাজপুর পৌরসভা - পরিচ্ছন্নতা শাখা',
        address: 'পৌরসভা রোড, দিনাজপুর সদর',
        phone: '0531-63110',
        hotline: '01713-778899',
        email: 'cleanliness@dinajpurpoureshava.gov.bd',
        website: '',
        requiredDocuments: ['সরাসরি হটলাইনে বা কাউন্সিলরের মাধ্যমে লিখিত বা মৌখিক অনুরোধ'],
        serviceFee: 'বর্জ্য অপসারণ: বিনামূল্যে (সেপ্টিক ট্যাংক পরিষ্কার: সরকারি রেট অনুযায়ী ৳১৫০০)',
        processingTime: '২৪ ঘণ্টার মধ্যে দ্রুত সাড়া',
        applicationMethod: 'পৌর হটলাইনে সরাসরি কল বা কন্ট্রোল রুমে লিখিত আবেদন',
        onlineApplication: false,
        officeHours: '২৪/৭ জরুরী কন্ট্রোল রুম চালু',
        location: 'দিনাজপুর পৌরসভা',
        status: 'active',
        createdAt: new Date().toISOString()
    }
];

const normalizeDoc = (doc) => {
    if (!doc) return doc;

    const docsArr = Array.isArray(doc.requiredDocuments) ? doc.requiredDocuments : 
        (doc.documents ? (Array.isArray(doc.documents) ? doc.documents : [doc.documents]) : ['জাতীয় পরিচয়পত্রের ফটোকপি']);

    return {
        ...doc,
        name: doc.name || doc.title || 'পৌর সেবা',
        serviceType: doc.serviceType || doc.category || 'লাইসেন্স ও সনদ',
        description: doc.description || 'দিনাজপুর পৌরসভার নাগরিক সুবিধা ও ই-সেবা।',
        officeName: doc.officeName || 'দিনাজপুর পৌরসভা কার্যালয়',
        address: doc.address || doc.location || 'পৌরসভা মোড়, দিনাজপুর সদর',
        phone: doc.phone || doc.contactPhone || '0531-63100',
        hotline: doc.hotline || doc.phone || '0531-63100',
        email: doc.email || '',
        website: doc.website || '',
        requiredDocuments: docsArr,
        serviceFee: doc.serviceFee || 'বিনামূল্যে / নির্ধারিত সরকারি ফি',
        processingTime: doc.processingTime || '১-৩ কর্মদিবস',
        applicationMethod: doc.applicationMethod || 'অনলাইন বা পৌরসভা ওয়ান স্টপ সার্ভিস কাউন্টার',
        onlineApplication: doc.onlineApplication !== undefined ? Boolean(doc.onlineApplication) : true,
        officeHours: doc.officeHours || 'রবি-বৃহস্পতিবার: ৯:০০ AM - ৪:০০ PM',
        location: doc.location || 'দিনাজপুর পৌরসভা',
        status: doc.status || 'active'
    };
};

export const getAllMunicipalServicesService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        let filtered = [...initialMunicipalServices];
        if (query.serviceType) {
            filtered = filtered.filter(item => item.serviceType.includes(query.serviceType));
        }
        if (query.search) {
            const q = query.search.toLowerCase();
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(q) || 
                item.officeName.toLowerCase().includes(q) || 
                item.description.toLowerCase().includes(q)
            );
        }
        return filtered.map(normalizeDoc);
    }

    try {
        const collection = db.collection('municipalServices');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialMunicipalServices);
        }

        let filter = {};
        if (query.serviceType) {
            filter.serviceType = { $regex: query.serviceType, $options: 'i' };
        }
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { officeName: { $regex: query.search, $options: 'i' } },
                { description: { $regex: query.search, $options: 'i' } }
            ];
        }

        const rawDocs = await collection.find(filter).sort({ createdAt: -1 }).toArray();
        return rawDocs.map(normalizeDoc);
    } catch (err) {
        return initialMunicipalServices.map(normalizeDoc);
    }
};

export const getMunicipalServiceByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        return normalizeDoc(initialMunicipalServices.find(item => item._id === id) || null);
    }
    const collection = db.collection('municipalServices');
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const createMunicipalServiceService = async (data) => {
    const db = getDB();

    const docsArr = Array.isArray(data.requiredDocuments) ? data.requiredDocuments : 
        (typeof data.requiredDocuments === 'string' ? data.requiredDocuments.split('\n').map(s => s.trim()).filter(Boolean) : []);

    const newItem = {
        _id: 'muni_' + Date.now(),
        name: data.name,
        serviceType: data.serviceType || 'লাইসেন্স ও সনদ',
        description: data.description || '',
        officeName: data.officeName || 'দিনাজপুর পৌরসভা কার্যালয়',
        address: data.address || 'পৌরসভা মোড়, দিনাজপুর',
        phone: data.phone || '0531-63100',
        hotline: data.hotline || data.phone || '0531-63100',
        email: data.email || '',
        website: data.website || '',
        requiredDocuments: docsArr,
        serviceFee: data.serviceFee || 'বিনামূল্যে',
        processingTime: data.processingTime || '১-৩ কর্মদিবস',
        applicationMethod: data.applicationMethod || 'অনলাইন পোর্টাল বা কাউন্টার',
        onlineApplication: Boolean(data.onlineApplication),
        officeHours: data.officeHours || 'রবি-বৃহস্পতিবার: ৯:০০ AM - ৪:০০ PM',
        location: data.location || 'দিনাজপুর পৌরসভা',
        status: data.status || 'active',

        // Legacy compatibility
        title: data.name,
        contactPhone: data.phone,

        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialMunicipalServices.unshift(newItem);
        return normalizeDoc(newItem);
    }

    const collection = db.collection('municipalServices');
    await collection.insertOne(newItem);
    return normalizeDoc(newItem);
};

export const updateMunicipalServiceService = async (id, data) => {
    const db = getDB();
    const updatedData = { ...data, updatedAt: new Date().toISOString() };

    if (!db) {
        const index = initialMunicipalServices.findIndex(item => item._id === id);
        if (index !== -1) {
            initialMunicipalServices[index] = { ...initialMunicipalServices[index], ...updatedData };
            return normalizeDoc(initialMunicipalServices[index]);
        }
        return null;
    }
    const collection = db.collection('municipalServices');
    await collection.updateOne({ _id: id }, { $set: updatedData });
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const deleteMunicipalServiceService = async (id) => {
    const db = getDB();
    if (!db) {
        initialMunicipalServices = initialMunicipalServices.filter(item => item._id !== id);
        return true;
    }
    const collection = db.collection('municipalServices');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
