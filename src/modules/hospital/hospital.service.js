/**
 * Hospital (হাসপাতাল) Service Layer with Full Field Normalization & MongoDB support
 */
import { getDB } from '../../database/db.js';

let initialHospitals = [
    {
        _id: 'hosp_001',
        name: 'দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ হাসপাতাল',
        hospitalType: 'সরকারি বিশেষায়িত হাসপাতাল (Government Medical College)',
        description: 'উত্তরবঙ্গের সর্ববৃহৎ সরকারি চিকিৎসা সেবা প্রতিষ্ঠান। এখানে উন্নত চিকিৎসার জন্য ৫০০ শয্যা, আইসিইউ, সিসিইউ, ডায়ালিসিস সেন্টার এবং আধুনিক ওডি কমপ্লেক্স রয়েছে।',
        logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&auto=format&fit=crop&q=80',
        coverImage: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1000&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80'
        ],
        address: 'সুইহারী, দিনাজপুর সদর, দিনাজপুর',
        area: 'সুইহারী',
        phone: '02589922001',
        emergencyPhone: '01711-123456',
        email: 'info@dinajpurmedical.gov.bd',
        website: 'https://marmch.dinajpur.gov.bd',
        openingTime: '২৪ ঘণ্টা',
        closingTime: '২৪ ঘণ্টা',
        emergencyAvailable: true,
        icuAvailable: true,
        ccuAvailable: true,
        ambulanceAvailable: true,
        bedCount: 500,
        departments: ['মেডিসিন', 'সার্জারি', 'গাইনি ও প্রসূতি', 'শিশু রোগ', 'হৃদরোগ (Cardiology)', 'অস্থি ও অর্থোপেডিক্স', 'চক্ষু', 'নিউরোসার্জারি'],
        facilities: ['২৪/৭ জরুরি সেবা', 'আইসিইউ ও সিসিইউ', '২৪ ঘণ্টা ব্লাড ব্যাংক', 'ডিজিটাল এক্স-রে ও সিটি স্ক্যান', 'অ্যাম্বুলেন্স সার্ভিস', 'সেন্ট্রাল অক্সিজেন'],
        doctors: ['অধ্যাপক ডা. মো: এনামুল হক (মেডিসিন)', 'ডা. সাবরিনা সুলতানা (গাইনি স্পেশালিস্ট)', 'ডা. তারেক রহমান (হৃদরোগ বিশেষজ্ঞ)'],
        location: 'সুইহারী মোড়, দিনাজপুর',
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'hosp_002',
        name: 'জিয়া হার্ট ফাউন্ডেশন হাসপাতাল ও গবেষণা কেন্দ্র',
        hospitalType: 'বিশেষায়িত হৃদরোগ হাসপাতাল (Non-Profit Heart Specialized)',
        description: 'দিনাজপুরের প্রখ্যাত হৃদরোগ চিকিৎসা কেন্দ্র। ওপেন হার্ট সার্জারি, এঞ্জিওগ্রাম, পেসমেকার বসানো এবং জরুরি সিসিইউ কেয়ারে সেরা সুবিধা প্রদান করে।',
        logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=300&auto=format&fit=crop&q=80',
        coverImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80'
        ],
        address: 'গোবিন্দপুর, দিনাজপুর টার্মিনাল রোড, দিনাজপুর',
        area: 'গোবিন্দপুর',
        phone: '0531-63300',
        emergencyPhone: '01712-987654',
        email: 'contact@ziaheartfoundation.org',
        website: 'https://ziaheartfoundation.org',
        openingTime: '২৪ ঘণ্টা',
        closingTime: '২৪ ঘণ্টা',
        emergencyAvailable: true,
        icuAvailable: true,
        ccuAvailable: true,
        ambulanceAvailable: true,
        bedCount: 150,
        departments: ['কার্ডিওলজি (Cardiology)', 'কার্ডিওথোরাসিক সার্জারি', 'ইন্টারভেনশনাল কার্ডিওলোজি', 'ক্রিটিক্যাল কেয়ার'],
        facilities: ['ক্যাথল্যাব (Cath Lab)', 'এঞ্জিওগ্রাম ও স্টেন্টিং', 'সিসিইউ (CCU)', '২৪/৭ হৃদরোগ জরুরি বিভাগ', 'কার্ডিয়াক অ্যাম্বুলেন্স'],
        doctors: ['ডা. মোস্তাক আহমেদ (কার্ডিওলজিস্ট)', 'ডা. ফারহানা ইয়াসমিন (হৃদরোগ বিশেষজ্ঞ)'],
        location: 'গোবিন্দপুর, দিনাজপুর',
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'hosp_003',
        name: 'দিনাজপুর জেনারেল (সদর) হাসপাতাল',
        hospitalType: 'সরকারি সদর হাসপাতাল (District Govt Hospital)',
        description: 'দিনাজপুরের ১০০ শয্যা বিশিষ্ট ঐতিহ্যবাহী সদর হাসপাতাল। সাধারণ রোগী ভর্তি, বহিঃবিভাগ চিকিৎসা এবং বিনামূল্যে প্রাথমিক স্বাস্থ্যসেবা প্রদান করা হয়।',
        logo: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=300&auto=format&fit=crop&q=80',
        coverImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1000&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop&q=80'
        ],
        address: 'হাসপাতাল রোড, সদর, দিনাজপুর',
        area: 'সদর',
        phone: '0531-65233',
        emergencyPhone: '01715-456789',
        email: 'sadar.hospital@dinajpur.gov.bd',
        website: 'https://dinajpursadar.gov.bd',
        openingTime: '08:00 AM',
        closingTime: '02:30 PM (জরুরি ২৪ ঘণ্টা)',
        emergencyAvailable: true,
        icuAvailable: false,
        ccuAvailable: false,
        ambulanceAvailable: true,
        bedCount: 100,
        departments: ['সাধারণ মেডিসিন', 'শিশু স্বাস্থ্য', 'মাতৃত্ব ও গর্ভকালীন সেবা', 'চক্ষু', 'দন্ত বিভাগ'],
        facilities: ['২৪ ঘণ্টা জরুরি ইউনিট', 'প্যাথলজি ল্যাব', 'বিনামূল্যে ওষুধ বিতরণ', 'ইপিআই টিকাদান কেন্দ্র'],
        doctors: ['ডা. মো: রফিকুল ইসলাম (আরএমও)', 'ডা. নাসরিন আক্তার (কনসালট্যান্ট)'],
        location: 'হাসপাতাল রোড, দিনাজপুর',
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    }
];

const normalizeDoc = (doc) => {
    if (!doc) return doc;

    const imagesArr = Array.isArray(doc.images) ? doc.images : 
        (doc.image ? [doc.image] : ['https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80']);

    const depts = Array.isArray(doc.departments) ? doc.departments : 
        (doc.specializations ? (Array.isArray(doc.specializations) ? doc.specializations : [doc.specializations]) : ['সাধারণ মেডিসিন']);

    const facs = Array.isArray(doc.facilities) ? doc.facilities : 
        (doc.services ? (Array.isArray(doc.services) ? doc.services : [doc.services]) : ['জরুরি সেবা', 'অ্যাম্বুলেন্স']);

    const docs = Array.isArray(doc.doctors) ? doc.doctors : 
        (doc.consultants ? (Array.isArray(doc.consultants) ? doc.consultants : [doc.consultants]) : ['বিশেষজ্ঞ চিকিৎসক']);

    const hasEmergency = doc.emergencyAvailable !== undefined ? Boolean(doc.emergencyAvailable) : 
        (doc.operatingHours === '24 Hours' || (doc.services && doc.services.some(s => typeof s === 'string' && s.includes('Emergency'))));

    const hasICU = doc.icuAvailable !== undefined ? Boolean(doc.icuAvailable) : 
        (doc.services && doc.services.some(s => typeof s === 'string' && s.includes('ICU')));

    const hasAmbulance = doc.ambulanceAvailable !== undefined ? Boolean(doc.ambulanceAvailable) : 
        Boolean(doc.ambilanceNumber || (doc.services && doc.services.some(s => typeof s === 'string' && s.includes('Ambulance'))));

    return {
        ...doc,
        name: doc.name || doc.hospitalName || doc.title || 'হাসপাতাল',
        hospitalType: doc.hospitalType || doc.category || 'বেসরকারি হাসপাতাল',
        description: doc.description || 'দিনাজপুর শহরের নির্ভরযোগ্য স্বাস্থ্যসেবা প্রতিষ্ঠান।',
        logo: doc.logo || doc.image || 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&auto=format&fit=crop&q=80',
        coverImage: doc.coverImage || doc.image || 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1000&auto=format&fit=crop&q=80',
        images: imagesArr,
        address: doc.address || doc.location || 'দিনাজপুর',
        area: doc.area || doc.location || 'দিনাজপুর সদর',
        phone: doc.phone || doc.contactPhone || doc.appointmentNumber || '01700-000000',
        emergencyPhone: doc.emergencyPhone || doc.emergencyNumber || doc.ambilanceNumber || doc.phone || '01700-000000',
        email: doc.email || 'info@hospital.com',
        website: doc.website || '',
        openingTime: doc.openingTime || doc.operatingHours || '২৪ ঘণ্টা',
        closingTime: doc.closingTime || doc.operatingHours || '২৪ ঘণ্টা',
        emergencyAvailable: hasEmergency,
        icuAvailable: hasICU,
        ccuAvailable: doc.ccuAvailable !== undefined ? Boolean(doc.ccuAvailable) : false,
        ambulanceAvailable: hasAmbulance,
        bedCount: Number(doc.bedCount !== undefined ? doc.bedCount : doc.beds) || 50,
        departments: depts,
        facilities: facs,
        doctors: docs,
        location: doc.location || 'দিনাজপুর',
        isVerified: doc.isVerified !== undefined ? Boolean(doc.isVerified) : true,
        status: doc.status || 'active'
    };
};

export const getAllHospitalsService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        let filtered = [...initialHospitals];
        if (query.hospitalType) {
            filtered = filtered.filter(item => item.hospitalType.includes(query.hospitalType));
        }
        if (query.search) {
            const q = query.search.toLowerCase();
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(q) || 
                item.address.toLowerCase().includes(q) || 
                item.area.toLowerCase().includes(q)
            );
        }
        return filtered.map(normalizeDoc);
    }

    try {
        const collection = db.collection('hospitals');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialHospitals);
        }

        let filter = {};
        if (query.hospitalType) filter.hospitalType = { $regex: query.hospitalType, $options: 'i' };
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { hospitalName: { $regex: query.search, $options: 'i' } },
                { address: { $regex: query.search, $options: 'i' } },
                { area: { $regex: query.search, $options: 'i' } }
            ];
        }
        const rawDocs = await collection.find(filter).sort({ createdAt: -1 }).toArray();
        return rawDocs.map(normalizeDoc);
    } catch (err) {
        return initialHospitals.map(normalizeDoc);
    }
};

export const getHospitalByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        return normalizeDoc(initialHospitals.find(item => item._id === id) || null);
    }
    const collection = db.collection('hospitals');
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const createHospitalService = async (data) => {
    const db = getDB();

    const depts = Array.isArray(data.departments) ? data.departments : 
        (typeof data.departments === 'string' ? data.departments.split(',').map(s => s.trim()).filter(Boolean) : []);

    const facs = Array.isArray(data.facilities) ? data.facilities : 
        (typeof data.facilities === 'string' ? data.facilities.split(',').map(s => s.trim()).filter(Boolean) : []);

    const docs = Array.isArray(data.doctors) ? data.doctors : 
        (typeof data.doctors === 'string' ? data.doctors.split(',').map(s => s.trim()).filter(Boolean) : []);

    const imagesArr = Array.isArray(data.images) ? data.images : 
        (typeof data.images === 'string' ? data.images.split(',').map(s => s.trim()).filter(Boolean) : []);

    const newItem = {
        _id: 'hosp_' + Date.now(),
        name: data.name,
        hospitalType: data.hospitalType || 'বেসরকারি হাসপাতাল',
        description: data.description || '',
        logo: data.logo || 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300&auto=format&fit=crop&q=80',
        coverImage: data.coverImage || 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1000&auto=format&fit=crop&q=80',
        images: imagesArr.length > 0 ? imagesArr : ['https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&auto=format&fit=crop&q=80'],
        address: data.address || 'দিনাজপুর',
        area: data.area || 'দিনাজপুর সদর',
        phone: data.phone || '01700-000000',
        emergencyPhone: data.emergencyPhone || data.phone || '01700-000000',
        email: data.email || '',
        website: data.website || '',
        openingTime: data.openingTime || '২৪ ঘণ্টা',
        closingTime: data.closingTime || '২৪ ঘণ্টা',
        emergencyAvailable: Boolean(data.emergencyAvailable),
        icuAvailable: Boolean(data.icuAvailable),
        ccuAvailable: Boolean(data.ccuAvailable),
        ambulanceAvailable: Boolean(data.ambulanceAvailable),
        bedCount: Number(data.bedCount) || 50,
        departments: depts,
        facilities: facs,
        doctors: docs,
        location: data.location || data.area || 'দিনাজপুর',
        isVerified: data.isVerified !== undefined ? Boolean(data.isVerified) : true,
        status: data.status || 'active',

        // Legacy compatibility keys
        hospitalName: data.name,
        beds: Number(data.bedCount) || 50,
        emergencyNumber: data.emergencyPhone || data.phone,
        services: facs,
        specializations: depts,
        consultants: docs,

        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialHospitals.unshift(newItem);
        return normalizeDoc(newItem);
    }

    const collection = db.collection('hospitals');
    await collection.insertOne(newItem);
    return normalizeDoc(newItem);
};

export const updateHospitalService = async (id, data) => {
    const db = getDB();
    const updatedData = { ...data, updatedAt: new Date().toISOString() };
    if (!db) {
        const index = initialHospitals.findIndex(item => item._id === id);
        if (index !== -1) {
            initialHospitals[index] = { ...initialHospitals[index], ...updatedData };
            return normalizeDoc(initialHospitals[index]);
        }
        return null;
    }
    const collection = db.collection('hospitals');
    await collection.updateOne({ _id: id }, { $set: updatedData });
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const deleteHospitalService = async (id) => {
    const db = getDB();
    if (!db) {
        initialHospitals = initialHospitals.filter(item => item._id !== id);
        return true;
    }
    const collection = db.collection('hospitals');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
