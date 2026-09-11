/**
 * CourierService Service Layer
 * Dinajpur Smart City Platform
 */
import { getDB } from '../../database/db.js';
import { ObjectId } from 'mongodb';

export const normalizeCourierService = (data) => {
    return {
        companyName: data.companyName || data.name || '',
        logo: data.logo || 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80',
        description: data.description || '',
        address: data.address || '',
        phone: data.phone || data.contactNumber || '',
        email: data.email || '',
        website: data.website || '',
        serviceAreas: Array.isArray(data.serviceAreas) 
            ? data.serviceAreas 
            : (Array.isArray(data.deliveryAreas) ? data.deliveryAreas : ['দিনাজপুর শহর', 'সারা বাংলাদেশ']),
        deliveryTypes: Array.isArray(data.deliveryTypes) 
            ? data.deliveryTypes 
            : (data.serviceType ? [data.serviceType] : ['হোম ডেলিভারি', 'ব্রাঞ্চ পিকআপ']),
        deliveryCharge: Array.isArray(data.deliveryCharge) 
            ? data.deliveryCharge 
            : [
                { areaType: 'দিনাজপুর শহরের ভেতরে', charge: '৬০ টাকা' },
                { areaType: 'দিনাজপুর জেলার বাইরে (সারা দেশ)', charge: '১3০ টাকা' }
            ],
        estimatedDeliveryTime: data.estimatedDeliveryTime || data.deliveryTime || '২৪ - ৪৮ ঘণ্টা',
        cashOnDelivery: data.cashOnDelivery !== undefined ? Boolean(data.cashOnDelivery) : true,
        trackingAvailable: data.trackingAvailable !== undefined ? Boolean(data.trackingAvailable) : true,
        trackingUrl: data.trackingUrl || '',
        pickupService: data.pickupService !== undefined ? Boolean(data.pickupService) : true,
        officeHours: data.officeHours || 'সকাল ৯:০০ - রাত ৮:০০',
        location: {
            latitude: Number(data.location?.latitude) || 25.6217,
            longitude: Number(data.location?.longitude) || 88.6354
        },
        isVerified: data.isVerified !== undefined ? Boolean(data.isVerified) : true,
        status: data.status || 'active',
        createdAt: data.createdAt || new Date(),
        updatedAt: new Date()
    };
};

export const seedCourierServices = [
    {
        companyName: 'সুন্দরবন কুরিয়ার সার্ভিস (Sundarban Courier)',
        logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80',
        description: 'বাংলাদেশের অন্যতম বৃহত্তম ও নির্ভরযোগ্য কুরিয়ার ও পার্সেল সার্ভিস প্রদানকারী প্রতিষ্ঠান। ডকুমেন্টস, পার্সেল এবং ভারী মালামাল নিরাপদ পরিবহনে বিশ্বস্ত।',
        address: 'স্টেশন রোড, পুরাতন বাসস্ট্যান্ড সংলগ্ন, দিনাজপুর সদর, দিনাজপুর',
        phone: '01711482930',
        email: 'dinajpur@sundarbancourier.com',
        website: 'https://sundarbancourier.com.bd',
        serviceAreas: ['দিনাজপুর শহর', 'সকল উপজেলা', 'সারা বাংলাদেশ', 'আন্তর্জাতিক'],
        deliveryTypes: ['হোম ডেলিভারি', 'ব্রাঞ্চ পিকআপ', 'এক্সপ্রেস পার্সেল', 'ডকুমেন্ট ফাইল'],
        deliveryCharge: [
            { areaType: 'দিনাজপুর শহর (হোম ডেলিভারি)', charge: '৬০ টাকা (১ কেজি)' },
            { areaType: 'ঢাকার ভেতরে', charge: '১০০ টাকা (১ কেজি)' },
            { areaType: 'ঢাকার বাইরে অন্যান্য জেলা', charge: '১৩০ টাকা (১ কেজি)' }
        ],
        estimatedDeliveryTime: '২৪ - ৪৮ ঘণ্টা',
        cashOnDelivery: true,
        trackingAvailable: true,
        trackingUrl: 'https://sundarbancourier.com.bd/tracking',
        pickupService: true,
        officeHours: 'সকাল ৮:৩০ - রাত ৯:০০ (শুক্রবার বিকেল ৪:০০ - ৮:০০)',
        location: { latitude: 25.6245, longitude: 88.6382 },
        isVerified: true,
        status: 'active'
    },
    {
        companyName: 'এস. এ. পরিবহন (SA Paribahan Courier)',
        logo: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=400&q=80',
        description: 'দেশের প্রধান শহরগুলোতে দ্রুত পার্সেল, মানি ট্রান্সফার এবং ভারী পণ্য পরিবহনে জনপ্রিয় ও দ্রুতগামী সার্ভিস।',
        address: 'মালদহপট্টি, গণেশতলা রোড, দিনাজপুর সদর, দিনাজপুর',
        phone: '01713245678',
        email: 'info@saparibahan.com',
        website: 'https://saparibahan.com',
        serviceAreas: ['দিনাজপুর শহর', 'রংপুর বিভাগ', 'ঢাকা', 'চট্টগ্রাম', 'সারা বাংলাদেশ'],
        deliveryTypes: ['ব্রাঞ্চ পিকআপ', 'এক্সপ্রেস ডেলিভারি', 'মানি ট্রান্সফার সার্ভিস'],
        deliveryCharge: [
            { areaType: 'কাগজপত্র ও ডকুমেন্টস', charge: '৫০ টাকা' },
            { areaType: 'প্যাকেট বা পার্সেল (১ কেজি)', charge: '১২০ টাকা' }
        ],
        estimatedDeliveryTime: '২৪ ঘণ্টা',
        cashOnDelivery: true,
        trackingAvailable: true,
        trackingUrl: 'https://saparibahan.com/trace-parcel',
        pickupService: false,
        officeHours: 'সকাল ৯:০০ - রাত ৮:৩০',
        location: { latitude: 25.6268, longitude: 88.6371 },
        isVerified: true,
        status: 'active'
    },
    {
        companyName: 'স্টিডফাস্ট কুরিয়ার (Steadfast Courier)',
        logo: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=400&q=80',
        description: 'ই-কমার্স উদ্যোক্তা ও সাধারণ গ্রাহকদের জন্য নির্ভরযোগ্য লজিস্টিকস ও ক্যাশ অন ডেলিভারি সেবাদাতা প্রতিষ্ঠান।',
        address: 'উপশহর ব্লক-৪, দিনাজপুর সদর, দিনাজপুর',
        phone: '09604333888',
        email: 'support@steadfast.com.bd',
        website: 'https://steadfast.com.bd',
        serviceAreas: ['দিনাজপুর শহর', 'উপজেলা কেন্দ্রসমূহ', 'সারা বাংলাদেশ (৬৪ জেলা)'],
        deliveryTypes: ['ডোরস্টেপ পিকআপ', 'হোম ডেলিভারি', 'ই-কমার্স পার্সেল'],
        deliveryCharge: [
            { areaType: 'দিনাজপুর ইনসাইড সিটি', charge: '৫০ টাকা' },
            { areaType: 'আউটসাইড দিনাজপুর (সাব-আরবান)', charge: '৮০ টাকা' },
            { areaType: 'অল বাংলাদেশ হোম ডেলিভারি', charge: '১৩০ টাকা' }
        ],
        estimatedDeliveryTime: '২৪ - ৭২ ঘণ্টা',
        cashOnDelivery: true,
        trackingAvailable: true,
        trackingUrl: 'https://steadfast.com.bd/tracking',
        pickupService: true,
        officeHours: 'সকাল ৯:০০ - রাত ৮:০০',
        location: { latitude: 25.6321, longitude: 88.6415 },
        isVerified: true,
        status: 'active'
    },
    {
        companyName: 'রেডএক্স লজিস্টিকস (RedX Logistics)',
        logo: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=400&q=80',
        description: 'আধুনিক প্রযুক্তিনির্ভর অ্যাপস চালিত কুরিয়ার সার্ভিস। ডিজিটাল ট্র্যাকিং ও দ্রুত ক্যাশ অন ডেলিভারি রিফান্ড সুবিধা।',
        address: 'কেবি রোড, সুইহারী, দিনাজপুর সদর, দিনাজপুর',
        phone: '09612223334',
        email: 'contact@redx.com.bd',
        website: 'https://redx.com.bd',
        serviceAreas: ['দিনাজপুর সদর', 'সারা বাংলাদেশ'],
        deliveryTypes: ['ডোরস্টেপ পিকআপ', 'হোম ডেলিভারি', 'রিটার্ন সার্ভিস'],
        deliveryCharge: [
            { areaType: 'লোকাল ডেলিভারি (১ কেজি)', charge: '৬০ টাকা' },
            { areaType: 'ন্যাশনাল ডেলিভারি (১ কেজি)', charge: '১২০ টাকা' }
        ],
        estimatedDeliveryTime: '২৪ - ৪৮ ঘণ্টা',
        cashOnDelivery: true,
        trackingAvailable: true,
        trackingUrl: 'https://redx.com.bd/track',
        pickupService: true,
        officeHours: 'সকাল ৯:৩০ - রাত ৭:৩০',
        location: { latitude: 25.6204, longitude: 88.6318 },
        isVerified: true,
        status: 'active'
    },
    {
        companyName: 'পাঠাও কুরিয়ার (Pathao Courier)',
        logo: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=400&q=80',
        description: 'দ্রুত ও নিরাপদ পার্সেল ডেলিভারি সার্ভিস। ডিজিটাল অ্যাপভিত্তিক লাইভ পার্সেল ট্র্যাকিং ও ইনস্ট্যান্ট ক্যাশআউট।',
        address: 'চারু বাবুর মোড়, দিনাজপুর সদর, দিনাজপুর',
        phone: '09610000000',
        email: 'support@pathao.com',
        website: 'https://pathao.com/courier',
        serviceAreas: ['দিনাজপুর মেট্রো', 'সারা বাংলাদেশ'],
        deliveryTypes: ['অন-ডিমান্ড পিকআপ', 'ডোর-টু-ডোর ডেলিভারি', 'নেক্সট ডে ডেলিভারি'],
        deliveryCharge: [
            { areaType: 'দিনাজপুর সিটি ডেলিভারি', charge: '৬০ টাকা' },
            { areaType: 'অন্যান্য জেলা', charge: '১৩০ টাকা' }
        ],
        estimatedDeliveryTime: '২৪ - ৪৮ ঘণ্টা',
        cashOnDelivery: true,
        trackingAvailable: true,
        trackingUrl: 'https://pathao.com/tracking',
        pickupService: true,
        officeHours: 'সকাল ৯:০০ - রাত ৮:০০',
        location: { latitude: 25.6251, longitude: 88.6349 },
        isVerified: true,
        status: 'active'
    }
];

export const getAllCourierServicesService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        return seedCourierServices.map((item, idx) => ({ _id: (idx + 1).toString(), ...normalizeCourierService(item) }));
    }
    try {
        const collection = db.collection('courierServices');
        let filter = {};
        if (query.status && query.status !== 'all') {
            filter.status = query.status;
        }
        if (query.search) {
            filter.$or = [
                { companyName: { $regex: query.search, $options: 'i' } },
                { description: { $regex: query.search, $options: 'i' } },
                { address: { $regex: query.search, $options: 'i' } }
            ];
        }

        let items = await collection.find(filter).toArray();
        if (items.length === 0 && (!query.status || query.status === 'active')) {
            console.log('Seeding initial Courier Services data...');
            const normalizedSeeds = seedCourierServices.map(normalizeCourierService);
            await collection.insertMany(normalizedSeeds);
            items = await collection.find(filter).toArray();
        }
        return items.map(item => ({ ...item, ...normalizeCourierService(item) }));
    } catch (err) {
        console.error('Error in getAllCourierServicesService:', err);
        return seedCourierServices.map((item, idx) => ({ _id: (idx + 1).toString(), ...normalizeCourierService(item) }));
    }
};

export const getCourierServiceByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        const item = seedCourierServices[0];
        return { _id: id, ...normalizeCourierService(item) };
    }
    const collection = db.collection('courierServices');
    let queryId = id;
    try {
        if (typeof id === 'string' && id.length === 24) {
            queryId = new ObjectId(id);
        }
    } catch (e) {
        queryId = id;
    }
    const item = await collection.findOne({ _id: queryId });
    return item ? { ...item, ...normalizeCourierService(item) } : null;
};

export const createCourierServiceService = async (data) => {
    const db = getDB();
    const normalized = normalizeCourierService(data);
    if (!db) return { _id: Date.now().toString(), ...normalized };
    const collection = db.collection('courierServices');
    const result = await collection.insertOne(normalized);
    return { _id: result.insertedId, ...normalized };
};

export const updateCourierServiceService = async (id, data) => {
    const db = getDB();
    const normalized = normalizeCourierService(data);
    if (!db) return { _id: id, ...normalized };
    const collection = db.collection('courierServices');
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

export const deleteCourierServiceService = async (id) => {
    const db = getDB();
    if (!db) return true;
    const collection = db.collection('courierServices');
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
