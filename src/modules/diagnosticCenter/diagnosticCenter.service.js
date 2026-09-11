/**
 * DiagnosticCenter (ডায়াগনস্টিক সেন্টার) Service Layer with MongoDB support & field normalization
 */
import { getDB } from '../../database/db.js';

let initialDiagnosticCenters = [
    {
        _id: 'diag_001',
        name: 'পপুলার ডায়াগনস্টিক সেন্টার (Popular Diagnostic Center Ltd.)',
        logo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&auto=format&fit=crop&q=80',
        coverImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1000&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'দিনাজপুর অঞ্চলে সর্বাধুনিক অটোমেটেড প্যাথলজি ল্যাব, ১২৮-স্লাইস সিটি স্ক্যান, ১.৫ টেপলা এমআরআই, ৪ডি আল্ট্রাসোনোগ্রাফি ও আন্তর্জাতিক মানের ডায়াগনস্টিক সেবা।',
        address: 'মেডিকেল কলেজ মোড়, জেল রোড, দিনাজপুর সদর, দিনাজপুর',
        area: 'মেডিকেল মোড়',
        phone: '0531-65432',
        emergencyPhone: '01711-889900',
        email: 'dinajpur@populardiagnostic.com',
        website: 'https://populardiagnostic.com/reports',
        services: ['অটোমেটেড প্যাথলজি ল্যাব', '১২৮-স্লাইস সিটি স্ক্যান', '১.৫টি এমআরআই', 'ডিজিটাল ৪ডি আল্ট্রাসোনোগ্রাফি', '১২ লিড ইসিজি ও ইকো'],
        tests: ['সিবিসি (CBC)', 'লিপিড প্রোফাইল', 'সিরাম ক্রিয়েটিনিন', 'টিএসএইচ (TSH)', 'ভিটামিন ডি ও বি১২'],
        testPackages: ['এক্সিকিউটিভ হেলথ চেকআপ (৳৩৫০০)', 'ডায়াবেটিস কমপ্লিট কেয়ার (৳১৮০০)', 'হৃদরোগ স্ক্রিনিং প্যাকেজ (৳৪৫০০)'],
        doctors: ['অধ্যাপক ডা: মো: রফিকুল ইসলাম (মেডিসিন)', 'ডা: ফারহানা ইয়াসমিন (গাইনি)', 'ডা: সাজ্জাদ হোসেন (হৃদরোগ)'],
        openingTime: '07:00 AM',
        closingTime: '11:00 PM',
        homeSampleCollection: true,
        onlineReport: true,
        ambulance: true,
        location: 'মেডিকেল মোড়, দিনাজপুর',
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'diag_002',
        name: 'জিয়া হার্ট ফাউন্ডেশন ডায়াগনস্টিক (Zia Heart Foundation Diagnostic)',
        logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&auto=format&fit=crop&q=80',
        coverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'বিশেষায়িত হৃদরোগ নির্ণয় ও ইটিটি, ইকোকার্ডিওগ্রাম, কালার ডপলার, এনজিওগ্রাম পারপাস টেস্ট এবং সাশ্রয়ী মূল্যে সর্বোচ্চ মানের প্যাথলজি সেবা।',
        address: 'জিয়া হার্ট ফাউন্ডেশন রোড, রাজবাড়ি, দিনাজপুর সদর',
        area: 'রাজবাড়ি',
        phone: '0531-64321',
        emergencyPhone: '01712-334455',
        email: 'info@ziaheartfoundation.org',
        website: 'https://ziaheartfoundation.org',
        services: ['ইটিটি (ETT)', 'ইকোকার্ডিওগ্রাম (Echo)', 'কালার ডপলার', 'কার্ডিয়াক এঞ্জিওগ্রাম হেল্প ল্যাব', 'প্যাথলজি'],
        tests: ['ট্রোপোনিন আই (Troponin-I)', 'সিআরপি (CRP)', 'লিপিড প্রোফাইল (Lipid Profile)', 'ইসিজি (ECG)'],
        testPackages: ['হার্ট কার্ডিয়াক চেকআপ (৳৩০০০)', 'সিরিয়র সিটিজেন হেলথ প্যাকেজ (৳৪০০০)'],
        doctors: ['ডা: এ কে এম মোস্তাফিজুর রহমান (কার্ডিওলজিস্ট)', 'ডা: শাহীনুর রহমান (প্যাথলজিস্ট)'],
        openingTime: '08:00 AM',
        closingTime: '10:00 PM',
        homeSampleCollection: true,
        onlineReport: true,
        ambulance: true,
        location: 'রাজবাড়ি, দিনাজপুর',
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'diag_003',
        name: 'মেডিনোভা মেডিকেল সার্ভিসেস (Medinova Medical Services)',
        logo: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=300&auto=format&fit=crop&q=80',
        coverImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1000&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'অভিজ্ঞ প্রফেসর ও রোগনির্ণয় বিশেষজ্ঞদের তত্ত্বাবধানে পরিচ্ছন্ন ল্যাব, সাশ্রয়ী ফি ও দ্রুত সময়ে নিখুঁত রিপোর্ট প্রদান।',
        address: 'হাসপাতাল রোড, সুইহারী, দিনাজপুর সদর',
        area: 'সুইহারী',
        phone: '01711-224466',
        emergencyPhone: '01711-224466',
        email: 'medinova.dnj@gmail.com',
        website: '',
        services: ['ডিজিটাল এক্স-রে', 'ইউএসজি (USG)', 'প্যাথলজিক্যাল ল্যাব', 'ইউরিন অটোএনালাইজার'],
        tests: ['সিবিসি', 'ইউরিন আর/ই', 'হরমোন পরীক্ষা', 'ভিটামিন ডি'],
        testPackages: ['সাধারণ প্যাথলজি প্যাকেজ (৳১০০০)'],
        doctors: ['ডা: রুবিনা আক্তার (গাইনি ও প্রসূতি)'],
        openingTime: '08:00 AM',
        closingTime: '09:30 PM',
        homeSampleCollection: false,
        onlineReport: true,
        ambulance: false,
        location: 'সুইহারী, দিনাজপুর',
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    }
];

const normalizeDoc = (doc) => {
    if (!doc) return doc;

    const servicesArr = Array.isArray(doc.services) ? doc.services : 
        (doc.facilities ? (Array.isArray(doc.facilities) ? doc.facilities : [doc.facilities]) : ['প্যাথলজি ল্যাব']);

    const testsArr = Array.isArray(doc.tests) ? doc.tests : ['সিবিসি', 'লিপিড প্রোফাইল'];
    const packagesArr = Array.isArray(doc.testPackages) ? doc.testPackages : [];
    const doctorsArr = Array.isArray(doc.doctors) ? doc.doctors : [];

    return {
        ...doc,
        name: doc.name || doc.title || 'ডায়াগনস্টিক সেন্টার',
        logo: doc.logo || doc.image || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&auto=format&fit=crop&q=80',
        coverImage: doc.coverImage || doc.image || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1000&auto=format&fit=crop&q=80',
        images: Array.isArray(doc.images) ? doc.images : (doc.image ? [doc.image] : []),
        description: doc.description || 'দিনাজপুর শহরের আধুনিক ও নির্ভরযোগ্য ডায়াগনস্টিক সেবা কেন্দ্র।',
        address: doc.address || doc.location || 'দিনাজপুর',
        area: doc.area || doc.location || 'দিনাজপুর সদর',
        phone: doc.phone || doc.contactPhone || '01700-000000',
        emergencyPhone: doc.emergencyPhone || doc.phone || '01700-000000',
        email: doc.email || '',
        website: doc.website || '',
        services: servicesArr,
        tests: testsArr,
        testPackages: packagesArr,
        doctors: doctorsArr,
        openingTime: doc.openingTime || '07:00 AM',
        closingTime: doc.closingTime || '11:00 PM',
        homeSampleCollection: doc.homeSampleCollection !== undefined ? Boolean(doc.homeSampleCollection) : true,
        onlineReport: doc.onlineReport !== undefined ? Boolean(doc.onlineReport) : true,
        ambulance: doc.ambulance !== undefined ? Boolean(doc.ambulance) : true,
        location: doc.location || doc.area || 'দিনাজপুর',
        isVerified: doc.isVerified !== undefined ? Boolean(doc.isVerified) : true,
        status: doc.status || 'active'
    };
};

export const getAllDiagnosticCentersService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        let filtered = [...initialDiagnosticCenters];
        if (query.search) {
            const q = query.search.toLowerCase();
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(q) || 
                item.area.toLowerCase().includes(q) || 
                item.address.toLowerCase().includes(q)
            );
        }
        return filtered.map(normalizeDoc);
    }

    try {
        const collection = db.collection('diagnosticCenters');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialDiagnosticCenters);
        }

        let filter = {};
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { area: { $regex: query.search, $options: 'i' } },
                { address: { $regex: query.search, $options: 'i' } }
            ];
        }

        const rawDocs = await collection.find(filter).sort({ createdAt: -1 }).toArray();
        return rawDocs.map(normalizeDoc);
    } catch (err) {
        return initialDiagnosticCenters.map(normalizeDoc);
    }
};

export const getDiagnosticCenterByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        return normalizeDoc(initialDiagnosticCenters.find(item => item._id === id) || null);
    }
    const collection = db.collection('diagnosticCenters');
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const createDiagnosticCenterService = async (data) => {
    const db = getDB();

    const servicesArr = Array.isArray(data.services) ? data.services : 
        (typeof data.services === 'string' ? data.services.split('\n').map(s => s.trim()).filter(Boolean) : []);

    const testsArr = Array.isArray(data.tests) ? data.tests : 
        (typeof data.tests === 'string' ? data.tests.split(',').map(s => s.trim()).filter(Boolean) : []);

    const packagesArr = Array.isArray(data.testPackages) ? data.testPackages : 
        (typeof data.testPackages === 'string' ? data.testPackages.split('\n').map(s => s.trim()).filter(Boolean) : []);

    const doctorsArr = Array.isArray(data.doctors) ? data.doctors : 
        (typeof data.doctors === 'string' ? data.doctors.split('\n').map(s => s.trim()).filter(Boolean) : []);

    const imagesArr = Array.isArray(data.images) ? data.images : 
        (typeof data.images === 'string' ? data.images.split(',').map(s => s.trim()).filter(Boolean) : []);

    const newItem = {
        _id: 'diag_' + Date.now(),
        name: data.name,
        logo: data.logo || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&auto=format&fit=crop&q=80',
        coverImage: data.coverImage || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1000&auto=format&fit=crop&q=80',
        images: imagesArr,
        description: data.description || '',
        address: data.address || 'দিনাজপুর',
        area: data.area || 'দিনাজপুর সদর',
        phone: data.phone || '01700-000000',
        emergencyPhone: data.emergencyPhone || data.phone || '01700-000000',
        email: data.email || '',
        website: data.website || '',
        services: servicesArr,
        tests: testsArr,
        testPackages: packagesArr,
        doctors: doctorsArr,
        openingTime: data.openingTime || '07:00 AM',
        closingTime: data.closingTime || '11:00 PM',
        homeSampleCollection: Boolean(data.homeSampleCollection),
        onlineReport: Boolean(data.onlineReport),
        ambulance: Boolean(data.ambulance),
        location: data.location || data.area || 'দিনাজপুর',
        isVerified: data.isVerified !== undefined ? Boolean(data.isVerified) : true,
        status: data.status || 'active',

        // Legacy compatibility
        title: data.name,
        contactPhone: data.phone,

        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialDiagnosticCenters.unshift(newItem);
        return normalizeDoc(newItem);
    }

    const collection = db.collection('diagnosticCenters');
    await collection.insertOne(newItem);
    return normalizeDoc(newItem);
};

export const updateDiagnosticCenterService = async (id, data) => {
    const db = getDB();
    const updatedData = { ...data, updatedAt: new Date().toISOString() };

    if (!db) {
        const index = initialDiagnosticCenters.findIndex(item => item._id === id);
        if (index !== -1) {
            initialDiagnosticCenters[index] = { ...initialDiagnosticCenters[index], ...updatedData };
            return normalizeDoc(initialDiagnosticCenters[index]);
        }
        return null;
    }
    const collection = db.collection('diagnosticCenters');
    await collection.updateOne({ _id: id }, { $set: updatedData });
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const deleteDiagnosticCenterService = async (id) => {
    const db = getDB();
    if (!db) {
        initialDiagnosticCenters = initialDiagnosticCenters.filter(item => item._id !== id);
        return true;
    }
    const collection = db.collection('diagnosticCenters');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
