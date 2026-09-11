/**
 * PoliceStation (থানা পুলিশ) Service Layer with Full Field Normalization & MongoDB support
 */
import { getDB } from '../../database/db.js';

let initialPoliceStations = [
    {
        _id: 'ps_001',
        name: 'দিনাজপুর কোতোয়ালী মডেল থানা',
        policeStationType: 'মডেল থানা (Model Police Station)',
        description: 'দিনাজপুর শহরের প্রধান প্রশাসনিক ও আইন-শৃঙ্খলা রক্ষাকারী সদর মডেল থানা। নাগরিক নিরাপত্তা, জরুরি পুলিশিং, জিডি গ্রহণ এবং ২৪ ঘণ্টা অপরাধ দমনে নিয়োজিত।',
        address: 'কালীতলা, দিনাজপুর সদর, দিনাজপুর',
        area: 'দিনাজপুর সদর',
        phone: '02589921100',
        emergencyNumber: '01713-373800',
        ocName: 'মো: ফরিদ হোসেন (ভারপ্রাপ্ত কর্মকর্তা)',
        ocPhone: '01713-373801',
        email: 'oc.kotwali.dinajpur@police.gov.bd',
        website: 'https://dinajpur.police.gov.bd',
        serviceAreas: ['দিনাজপুর পৌরসভা (১-১২ নং ওয়ার্ড)', 'সুইহারী', 'উপশহর', 'বালুবাড়ী', 'গোবিন্দপুর', 'পুনর্ভবা পাড়', 'পাহাড়পুর'],
        complaintMethods: ['সরাসরি থানায় ডিউটি অফিসার', 'অনলাইন জিডি (Online GD)', 'জরুরি ৯৯৯ কল', 'ইমেইল ও জাতীয় হেল্পলাইন'],
        onlineGD: true,
        location: 'কালীতলা, দিনাজপুর সদর',
        officeHours: '২৪ ঘণ্টা (জরুরি পুলিশ সেবা)',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'ps_002',
        name: 'ফুলবাড়ী থানা',
        policeStationType: 'উপজেলা থানা (Upazila Police Station)',
        description: 'ফুলবাড়ী উপজেলা ও আশপাশের পূর্বাঞ্চলীয় সীমান্ত ও পৌর এলাকার নিরাপত্তা নিশ্চিতে নিয়োজিত সুসজ্জিত থানা।',
        address: 'ফুলবাড়ী বাস টার্মিনাল সংলগ্ন, ফুলবাড়ী, দিনাজপুর',
        area: 'ফুলবাড়ী',
        phone: '05327-56002',
        emergencyNumber: '01713-373805',
        ocName: 'মো: মোস্তাফিজুর রহমান (ওসি)',
        ocPhone: '01713-373806',
        email: 'oc.fulbari.dinajpur@police.gov.bd',
        website: 'https://dinajpur.police.gov.bd/fulbari',
        serviceAreas: ['ফুলবাড়ী পৌরসভা', 'এলুয়াড়ী', 'আলাদিপুর', 'কাজীহাল', 'খয়েরবাড়ী', 'বেতদিঘী'],
        complaintMethods: ['সরাসরি থানায় ডিউটি অফিসার', 'অনলাইন জিডি', 'জরুরি ৯৯৯ সার্ভিস'],
        onlineGD: true,
        location: 'ফুলবাড়ী, দিনাজপুর',
        officeHours: '২৪ ঘণ্টা খোলা',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'ps_003',
        name: 'পার্বতীপুর মডেল থানা',
        policeStationType: 'মডেল থানা (Model Police Station)',
        description: 'পার্বতীপুর রেলওয়ে জংশন ও কয়লাখনি এলাকা বেষ্টিত গুরুত্বপূর্ণ মডেল থানা। শিল্প ও সর্বসাধারণের নিরাপদ চলাচলে নিয়োজিত।',
        address: 'স্টেশন রোড, পার্বতীপুর, দিনাজপুর',
        area: 'পার্বতীপুর',
        phone: '05334-74222',
        emergencyNumber: '01713-373810',
        ocName: 'ডা. মো: আব্দুল মতিন (ভারপ্রাপ্ত কর্মকর্তা)',
        ocPhone: '01713-373811',
        email: 'oc.parbatipur.dinajpur@police.gov.bd',
        website: 'https://dinajpur.police.gov.bd/parbatipur',
        serviceAreas: ['পার্বতীপুর পৌরসভা', 'মনমথপুর', 'হরিরামপুর', 'মোস্তফাপুর', 'হাবড়া', 'পলাশবাড়ী'],
        complaintMethods: ['সরাসরি থানায় যোগাযোগ', 'অনলাইন জিডি অ্যাপ', '৯৯৯ হটলাইন'],
        onlineGD: true,
        location: 'পার্বতীপুর স্টেশন রোড',
        officeHours: '২৪ ঘণ্টা খোলা',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'ps_004',
        name: 'দশমাইল হাইওয়ে পুলিশ ফাঁড়ি',
        policeStationType: 'হাইওয়ে পুলিশ (Highway Police Outpost)',
        description: 'দিনাজপুর-রংপুর-বগুড়া জাতীয় মহাসড়কে দ্রুত ট্রাফিক নিয়ন্ত্রণ, সড়ক দুর্ঘটনা উদ্ধার ও হাইওয়ে নিরাপত্তার জন্য নিবেদিত পুলিশ ফাঁড়ি।',
        address: 'দশমাইল মোড়, কাহারোল/সদর সীমানা, দিনাজপুর',
        area: 'দশমাইল',
        phone: '01713-373850',
        emergencyNumber: '01713-373851',
        ocName: 'ইন্সপেক্টর (হাইওয়ে) মো: কামরুল ইসলাম',
        ocPhone: '01713-373852',
        email: 'doshmile.highway@police.gov.bd',
        website: 'https://highway.police.gov.bd',
        serviceAreas: ['দশমাইল মহাসড়ক', 'দিনাজপুর-সৈয়দপুর হাইওয়ে', 'কাহারোল বাইপাস'],
        complaintMethods: ['হাইওয়ে প্যাট্রোলিং কল', 'জরুরি ৯৯৯ রেসপন্স', 'সরাসরি ফাঁড়িতে তথ্য প্রদান'],
        onlineGD: false,
        location: 'দশমাইল মোড়, দিনাজপুর',
        officeHours: '২৪ ঘণ্টা খোলা (হাইওয়ে টহল)',
        status: 'active',
        createdAt: new Date().toISOString()
    }
];

const normalizeDoc = (doc) => {
    if (!doc) return doc;

    const sAreas = Array.isArray(doc.serviceAreas) ? doc.serviceAreas : 
        (doc.jurisdiction ? (Array.isArray(doc.jurisdiction) ? doc.jurisdiction : [doc.jurisdiction]) : ['দিনাজপুর সদর']);

    const cMethods = Array.isArray(doc.complaintMethods) ? doc.complaintMethods : 
        (doc.services ? (Array.isArray(doc.services) ? doc.services : [doc.services]) : ['সরাসরি থানায় যোগাযোগ', 'অনলাইন জিডি', 'জরুরি ৯৯৯']);

    return {
        ...doc,
        name: doc.name || doc.stationName || doc.title || 'পুলিশ থানা',
        policeStationType: doc.policeStationType || doc.officerRank || 'উপজেলা থানা',
        description: doc.description || 'দিনাজপুর জেলার আইন-শৃঙ্খলা ও নিরাপত্তা সেবায় নিয়োজিত থানা।',
        address: doc.address || doc.location || 'দিনাজপুর',
        area: doc.area || doc.location || 'দিনাজপুর সদর',
        phone: doc.phone || doc.contactNumber || '02589921100',
        emergencyNumber: doc.emergencyNumber || doc.phone || '999',
        ocName: doc.ocName || doc.officerInCharge || 'ভারপ্রাপ্ত কর্মকর্তা (ওসি)',
        ocPhone: doc.ocPhone || doc.officerContact || doc.emergencyNumber || '01700-000000',
        email: doc.email || 'info@dinajpur.police.gov.bd',
        website: doc.website || 'https://dinajpur.police.gov.bd',
        serviceAreas: sAreas,
        complaintMethods: cMethods,
        onlineGD: doc.onlineGD !== undefined ? Boolean(doc.onlineGD) : true,
        location: doc.location || doc.area || 'দিনাজপুর',
        officeHours: doc.officeHours || doc.workingHours || '২৪ ঘণ্টা খোলা',
        status: doc.status || 'active'
    };
};

export const getAllPoliceStationsService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        let filtered = [...initialPoliceStations];
        if (query.policeStationType) {
            filtered = filtered.filter(item => item.policeStationType.includes(query.policeStationType));
        }
        if (query.search) {
            const q = query.search.toLowerCase();
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(q) || 
                item.area.toLowerCase().includes(q) || 
                item.ocName.toLowerCase().includes(q)
            );
        }
        return filtered.map(normalizeDoc);
    }

    try {
        const collection = db.collection('police_stations');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialPoliceStations);
        }

        let filter = {};
        if (query.policeStationType) filter.policeStationType = { $regex: query.policeStationType, $options: 'i' };
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { stationName: { $regex: query.search, $options: 'i' } },
                { area: { $regex: query.search, $options: 'i' } },
                { ocName: { $regex: query.search, $options: 'i' } }
            ];
        }
        const rawDocs = await collection.find(filter).sort({ createdAt: -1 }).toArray();
        return rawDocs.map(normalizeDoc);
    } catch (err) {
        return initialPoliceStations.map(normalizeDoc);
    }
};

export const getPoliceStationByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        return normalizeDoc(initialPoliceStations.find(item => item._id === id) || null);
    }
    const collection = db.collection('police_stations');
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const createPoliceStationService = async (data) => {
    const db = getDB();

    const serviceAreasArr = Array.isArray(data.serviceAreas) ? data.serviceAreas : 
        (typeof data.serviceAreas === 'string' ? data.serviceAreas.split(',').map(s => s.trim()).filter(Boolean) : []);

    const complaintMethodsArr = Array.isArray(data.complaintMethods) ? data.complaintMethods : 
        (typeof data.complaintMethods === 'string' ? data.complaintMethods.split(',').map(s => s.trim()).filter(Boolean) : []);

    const newItem = {
        _id: 'ps_' + Date.now(),
        name: data.name,
        policeStationType: data.policeStationType || 'উপজেলা থানা',
        description: data.description || '',
        address: data.address || 'দিনাজপুর',
        area: data.area || 'দিনাজপুর সদর',
        phone: data.phone || '02589921100',
        emergencyNumber: data.emergencyNumber || '999',
        ocName: data.ocName || 'ভারপ্রাপ্ত কর্মকর্তা (ওসি)',
        ocPhone: data.ocPhone || '01700-000000',
        email: data.email || '',
        website: data.website || '',
        serviceAreas: serviceAreasArr,
        complaintMethods: complaintMethodsArr,
        onlineGD: Boolean(data.onlineGD),
        location: data.location || data.area || 'দিনাজপুর',
        officeHours: data.officeHours || '২৪ ঘণ্টা খোলা',
        status: data.status || 'active',

        // Legacy compatibility mappings
        stationName: data.name,
        contactNumber: data.phone,
        officerInCharge: data.ocName,
        officerContact: data.ocPhone,
        workingHours: data.officeHours || '২৪ ঘণ্টা খোলা',
        jurisdiction: serviceAreasArr,

        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialPoliceStations.unshift(newItem);
        return normalizeDoc(newItem);
    }

    const collection = db.collection('police_stations');
    await collection.insertOne(newItem);
    return normalizeDoc(newItem);
};

export const updatePoliceStationService = async (id, data) => {
    const db = getDB();
    const updatedData = { ...data, updatedAt: new Date().toISOString() };
    if (!db) {
        const index = initialPoliceStations.findIndex(item => item._id === id);
        if (index !== -1) {
            initialPoliceStations[index] = { ...initialPoliceStations[index], ...updatedData };
            return normalizeDoc(initialPoliceStations[index]);
        }
        return null;
    }
    const collection = db.collection('police_stations');
    await collection.updateOne({ _id: id }, { $set: updatedData });
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const deletePoliceStationService = async (id) => {
    const db = getDB();
    if (!db) {
        initialPoliceStations = initialPoliceStations.filter(item => item._id !== id);
        return true;
    }
    const collection = db.collection('police_stations');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
