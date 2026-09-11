/**
 * BloodService (রক্ত সেবা) Service Layer with Full Field Normalization & MongoDB support
 */
import { getDB } from '../../database/db.js';

let initialBloodServices = [
    {
        _id: 'blood_001',
        name: 'দিনাজপুর রেড ক্রিসেন্ট ব্লাড ব্যাংক',
        serviceType: 'অফিসিয়াল ব্লাড ব্যাংক (Official Blood Bank)',
        bloodGroup: 'O+',
        contactNumber: '0531-65123',
        alternativePhone: '01711-998877',
        address: 'রেড ক্রিসেন্ট ভবন, স্টেশন রোড, দিনাজপুর',
        area: 'স্টেশন রোড',
        availability: '২৪ ঘণ্টা ব্লাড সংগ্রহ ও ব্যাংক সেবা',
        lastDonationDate: 'N/A (ব্লাড ব্যাংক)',
        availableForEmergency: true,
        hospital: 'এম আব্দুর রহিম মেডিকেল কলেজ ও সদর হাসপাতাল',
        location: 'স্টেশন রোড, দিনাজপুর',
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'blood_002',
        name: 'মো: আরিফুল ইসলাম (আরিফ)',
        serviceType: 'স্বেচ্ছাসেবক রক্তদাতা (Volunteer Donor)',
        bloodGroup: 'O+',
        contactNumber: '01711-234567',
        alternativePhone: '01811-234567',
        address: 'সুইহারী মোড়, দিনাজপুর সদর',
        area: 'সুইহারী',
        availability: 'সর্বশেষ রক্তদানের ৪ মাস অতিক্রান্ত (রক্তদানে প্রস্তুত)',
        lastDonationDate: '2026-01-15',
        availableForEmergency: true,
        hospital: 'দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ হাসপাতাল',
        location: 'সুইহারী, দিনাজপুর',
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'blood_003',
        name: 'সাদিয়া আফরিন রিমু',
        serviceType: 'স্বেচ্ছাসেবক রক্তদাতা (Volunteer Donor)',
        bloodGroup: 'A+',
        contactNumber: '01712-345678',
        alternativePhone: '01912-345678',
        address: 'উপশহর ৪ নম্বর ব্লক, দিনাজপুর',
        area: 'উপশহর',
        availability: 'জরুরি প্রয়োজনে যেকোনো সময় প্রস্তুত',
        lastDonationDate: '2026-02-10',
        availableForEmergency: true,
        hospital: 'দিনাজপুর জেনারেল (সদর) হাসপাতাল',
        location: 'উপশহর, দিনাজপুর',
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'blood_004',
        name: 'মেহেদী হাসান শুভ',
        serviceType: 'স্বেচ্ছাসেবক রক্তদাতা (Volunteer Donor)',
        bloodGroup: 'B+',
        contactNumber: '01713-456789',
        alternativePhone: '01513-456789',
        address: 'পাহাড়পুর, দিনাজপুর',
        area: 'পাহাড়পুর',
        availability: 'প্রস্তুত (নিয়মিত ডোনার)',
        lastDonationDate: '2026-03-01',
        availableForEmergency: true,
        hospital: 'জিয়া হার্ট ফাউন্ডেশন হাসপাতাল, দিনাজপুর',
        location: 'পাহাড়পুর, দিনাজপুর',
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'blood_005',
        name: 'বাঁধন (দিনাজপুর সরকারি কলেজ শাখা)',
        serviceType: 'রক্তদান সংস্থা / ক্লাব (Voluntary Blood Donation Club)',
        bloodGroup: 'AB+',
        contactNumber: '01714-567890',
        alternativePhone: '01714-000000',
        address: 'দিনাজপুর সরকারি কলেজ ক্যাম্পাস, দিনাজপুর',
        area: 'সদর',
        availability: 'সকল গ্রুপের রক্তদাতা সদস্য প্রস্তুত থাকে',
        lastDonationDate: 'N/A (রক্তদান সংস্থা)',
        availableForEmergency: true,
        hospital: 'দিনাজপুরের সকল হাসপাতাল ও ডায়াগনস্টিক',
        location: 'সরকারি কলেজ মোড়, দিনাজপুর',
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'blood_006',
        name: 'রেজাউল করিম (রেজা)',
        serviceType: 'স্বেচ্ছাসেবক রক্তদাতা (Volunteer Donor)',
        bloodGroup: 'O-',
        contactNumber: '01715-678901',
        alternativePhone: '01815-678901',
        address: 'বালুবাড়ী, দিনাজপুর',
        area: 'বালুবাড়ী',
        availability: 'বিরল ও নেগেটিভ গ্রুপের রক্তদাতা (প্রস্তুত)',
        lastDonationDate: '2025-11-20',
        availableForEmergency: true,
        hospital: 'দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        location: 'বালুবাড়ী, দিনাজপুর',
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    }
];

const normalizeDoc = (doc) => {
    if (!doc) return doc;

    let bg = doc.bloodGroup || doc.bloodTypes || 'O+';
    if (Array.isArray(bg)) bg = bg[0] || 'O+';

    return {
        ...doc,
        name: doc.name || doc.serviceName || doc.title || 'রক্তদাতা / সংগঠন',
        serviceType: doc.serviceType || (doc.serviceName && doc.serviceName.includes('Bank') ? 'ব্লাড ব্যাংক' : 'স্বেচ্ছাসেবক রক্তদাতা'),
        bloodGroup: bg,
        contactNumber: doc.contactNumber || doc.phone || doc.contactPhone || '01700-000000',
        alternativePhone: doc.alternativePhone || doc.emergencyNumber || doc.phone || '01700-000000',
        address: doc.address || doc.location || 'দিনাজপুর',
        area: doc.area || doc.location || 'দিনাজপুর সদর',
        availability: doc.availability || doc.operatingHours || 'জরুরি প্রয়োজনে উপলব্ধ',
        lastDonationDate: doc.lastDonationDate || '৩ মাস পূর্বে',
        availableForEmergency: doc.availableForEmergency !== undefined ? Boolean(doc.availableForEmergency) : true,
        hospital: doc.hospital || doc.doctorInCharge || 'দিনাজপুর সদর ও এম আব্দুর রহিম মেডিকেল কলেজ',
        location: doc.location || doc.area || 'দিনাজপুর',
        isVerified: doc.isVerified !== undefined ? Boolean(doc.isVerified) : true,
        status: doc.status || 'active'
    };
};

export const getAllBloodServicesService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        let filtered = [...initialBloodServices];
        if (query.bloodGroup && query.bloodGroup !== 'সকল') {
            filtered = filtered.filter(item => item.bloodGroup === query.bloodGroup);
        }
        if (query.search) {
            const q = query.search.toLowerCase();
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(q) || 
                item.bloodGroup.toLowerCase().includes(q) || 
                item.area.toLowerCase().includes(q) ||
                item.hospital.toLowerCase().includes(q)
            );
        }
        return filtered.map(normalizeDoc);
    }

    try {
        const collection = db.collection('blood_services');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialBloodServices);
        }

        let filter = {};
        if (query.bloodGroup && query.bloodGroup !== 'সকল') {
            filter.bloodGroup = query.bloodGroup;
        }
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { serviceName: { $regex: query.search, $options: 'i' } },
                { bloodGroup: { $regex: query.search, $options: 'i' } },
                { area: { $regex: query.search, $options: 'i' } },
                { hospital: { $regex: query.search, $options: 'i' } }
            ];
        }
        const rawDocs = await collection.find(filter).sort({ createdAt: -1 }).toArray();
        return rawDocs.map(normalizeDoc);
    } catch (err) {
        return initialBloodServices.map(normalizeDoc);
    }
};

export const getBloodServiceByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        return normalizeDoc(initialBloodServices.find(item => item._id === id) || null);
    }
    const collection = db.collection('blood_services');
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const createBloodServiceService = async (data) => {
    const db = getDB();

    const newItem = {
        _id: 'blood_' + Date.now(),
        name: data.name,
        serviceType: data.serviceType || 'স্বেচ্ছাসেবক রক্তদাতা',
        bloodGroup: data.bloodGroup || 'O+',
        contactNumber: data.contactNumber || '01700-000000',
        alternativePhone: data.alternativePhone || data.contactNumber || '01700-000000',
        address: data.address || 'দিনাজপুর',
        area: data.area || 'দিনাজপুর সদর',
        availability: data.availability || 'প্রস্তুত (২৪ ঘণ্টা)',
        lastDonationDate: data.lastDonationDate || new Date().toISOString().split('T')[0],
        availableForEmergency: Boolean(data.availableForEmergency),
        hospital: data.hospital || 'দিনাজপুরের যেকোনো হাসপাতাল',
        location: data.location || data.area || 'দিনাজপুর',
        isVerified: data.isVerified !== undefined ? Boolean(data.isVerified) : true,
        status: data.status || 'active',

        // Legacy compatibility mappings
        serviceName: data.name,
        emergencyNumber: data.alternativePhone || data.contactNumber,
        bloodTypes: [data.bloodGroup || 'O+'],

        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialBloodServices.unshift(newItem);
        return normalizeDoc(newItem);
    }

    const collection = db.collection('blood_services');
    await collection.insertOne(newItem);
    return normalizeDoc(newItem);
};

export const updateBloodServiceService = async (id, data) => {
    const db = getDB();
    const updatedData = { ...data, updatedAt: new Date().toISOString() };
    if (!db) {
        const index = initialBloodServices.findIndex(item => item._id === id);
        if (index !== -1) {
            initialBloodServices[index] = { ...initialBloodServices[index], ...updatedData };
            return normalizeDoc(initialBloodServices[index]);
        }
        return null;
    }
    const collection = db.collection('blood_services');
    await collection.updateOne({ _id: id }, { $set: updatedData });
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const deleteBloodServiceService = async (id) => {
    const db = getDB();
    if (!db) {
        initialBloodServices = initialBloodServices.filter(item => item._id !== id);
        return true;
    }
    const collection = db.collection('blood_services');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
