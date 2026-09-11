/**
 * HouseRental (বাসা ভাড়া) Service Layer with Full Field Normalization
 */
import { getDB } from '../../database/db.js';

let initialHouseRentals = [
    {
        _id: 'hr_001',
        title: '৩ বেডরুমের আলো-বাতাসপূর্ণ চমৎকার ফ্যামিলি ফ্ল্যাট ভাড়া',
        propertyType: 'ফ্ল্যাট / এপার্টমেন্ট',
        description: 'উপশহর ১ নং ব্লকে সম্পূর্ণ নতুন নির্মিত ৩ বেড, ৩ বাথ, ২ বারান্দা সম্বলিত ফ্ল্যাট। লিফট, জেনারেটর, কার পার্কিং ও ২৪ ঘণ্টা নিরাপত্তা সুবিধা রয়েছে।',
        images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'
        ],
        address: 'ব্লক-১, রোড-৪, উপশহর',
        area: 'উপশহর',
        location: '25.6411, 88.6388',
        bedrooms: 3,
        bathrooms: 3,
        balcony: 2,
        floor: '৩য় তলা',
        totalFloors: '৬ তলা ভবন',
        size: 1350,
        rent: 14000,
        serviceCharge: 1500,
        advanceAmount: 28000,
        availableFrom: '১লা অক্টোবর',
        furnished: 'Unfurnished',
        parking: 'গাড়ি ও মোটরসাইকেল পার্কিং আছে',
        gas: 'সিলিন্ডার গ্যাস',
        water: '২৪ ঘণ্টা ডিপ টিউবওয়েল পানি',
        electricity: 'ডেসকো প্রি-পেইড পৃথক মিটার',
        contactName: 'মোঃ রফিকুল ইসলাম',
        contactPhone: '01711-887766',
        ownerId: 'usr_owner_01',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'hr_002',
        title: '২ বেডরুমের সাশ্রয়ী মূল্যে সুন্দর ফ্যামিলি বাসা',
        propertyType: 'ফ্ল্যাট / এপার্টমেন্ট',
        description: 'রাজবাড়ী মোড় সংলগ্ন মনোরম পরিবেশে ২ বেড, ২ বাথ, ১ বারান্দা বিশিষ্ট বাসা। নিচ তলা, ছোট ফ্যামিলি বা চাকরিজীবীদের জন্য উপযুক্ত।',
        images: [
            'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800'
        ],
        address: 'রাজবাড়ী মোড়, প্রধান সড়ক সংলগ্ন',
        area: 'দিনাজপুর সদর',
        location: '25.6322, 88.6477',
        bedrooms: 2,
        bathrooms: 2,
        balcony: 1,
        floor: '১ম তলা (নিচ তলা)',
        totalFloors: '৩ তলা ভবন',
        size: 950,
        rent: 8500,
        serviceCharge: 500,
        advanceAmount: 17000,
        availableFrom: 'চলতি মাস থেকে খালি',
        furnished: 'Semi-Furnished',
        parking: 'শুধুমাত্র মোটরসাইকেল পার্কিং',
        gas: 'লাইন গ্যাস সুবিধা',
        water: '২৪ ঘণ্টা সচল সাপ্লাই ওয়াটার',
        electricity: 'পৃথক ডিজিটাল মিটার',
        contactName: 'ইঞ্জিনিয়ার মাসুম রেজা',
        contactPhone: '01712-445566',
        ownerId: 'usr_owner_02',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'hr_003',
        title: 'ছাত্র / চাকরিজীবীদের জন্য ব্যাচেলর মেস সিট ভাড়া',
        propertyType: 'মেস / সিট',
        description: 'দিনাজপুর সরকারি কলেজ ও কেবিএম কলেজ সংলগ্ন নিরিবিলি পরিবেশে সিট খালি আছে। পড়ার উপযুক্ত পরিবেশ, ওয়াইফাই ও বুয়া সুবিধা রয়েছে।',
        images: [
            'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800'
        ],
        address: 'কলেজ রোড, সুইহারী',
        area: 'সুইহারী',
        location: '25.6188, 88.6412',
        bedrooms: 1,
        bathrooms: 1,
        balcony: 1,
        floor: '২য় তলা',
        totalFloors: '৪ তলা ভবন',
        size: 250,
        rent: 2200,
        serviceCharge: 300,
        advanceAmount: 2200,
        availableFrom: 'তাৎক্ষণিক খালি',
        furnished: 'Full Furnished (খাটিয়া, টেবিল, চেয়ার)',
        parking: 'বাইক সাইকেল গ্যারেজ',
        gas: 'সিলিন্ডার (মিল সিস্টেমে রান্না)',
        water: '২৪ ঘণ্টা পানি সাপ্লাই',
        electricity: 'শেয়ার্ড মিটার বিল',
        contactName: 'মেস ম্যানেজার রানা',
        contactPhone: '01713-990011',
        ownerId: 'usr_owner_03',
        status: 'active',
        createdAt: new Date().toISOString()
    }
];

const normalizeDoc = (doc) => {
    if (!doc) return doc;
    return {
        ...doc,
        title: doc.title || doc.houseType || 'বাসা ভাড়া',
        propertyType: doc.propertyType || doc.houseType || 'ফ্ল্যাট / এপার্টমেন্ট',
        rent: Number(doc.rent !== undefined && doc.rent !== null && doc.rent !== 0 ? doc.rent : doc.rentAmount) || 0,
        serviceCharge: Number(doc.serviceCharge) || 0,
        advanceAmount: Number(doc.advanceAmount !== undefined ? doc.advanceAmount : doc.advanceDeposit) || 0,
        size: Number(doc.size || doc.sizeArea) || 1000,
        bedrooms: Number(doc.bedrooms) || 2,
        bathrooms: Number(doc.bathrooms) || 1,
        balcony: Number(doc.balcony) || 1,
        floor: doc.floor || doc.floorNumber || '২য় তলা',
        totalFloors: doc.totalFloors || '৪ তলা ভবন',
        availableFrom: doc.availableFrom || 'খালি আছে',
        furnished: doc.furnished || doc.furnishingStatus || 'Unfurnished',
        parking: doc.parking || (doc.parkingAvailable ? 'পার্কিং আছে' : 'পার্কিং নেই'),
        gas: doc.gas || 'সিলিন্ডার গ্যাস',
        water: doc.water || '২৪ ঘণ্টা পানি',
        electricity: doc.electricity || 'পৃথক মিটার',
        contactName: doc.contactName || doc.ownerName || 'বাড়িওয়ালা',
        contactPhone: doc.contactPhone || doc.phone || '01700-000000',
        area: doc.area || 'দিনাজপুর সদর',
        address: doc.address || doc.location || 'দিনাজপুর'
    };
};

export const getAllHouseRentalsService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        let filtered = [...initialHouseRentals];
        if (query.propertyType) {
            filtered = filtered.filter(item => item.propertyType === query.propertyType);
        }
        if (query.area) {
            filtered = filtered.filter(item => item.area === query.area);
        }
        if (query.bedrooms) {
            filtered = filtered.filter(item => Number(item.bedrooms) === Number(query.bedrooms));
        }
        if (query.search) {
            const q = query.search.toLowerCase();
            filtered = filtered.filter(item => 
                item.title.toLowerCase().includes(q) || 
                item.address.toLowerCase().includes(q) || 
                item.area.toLowerCase().includes(q)
            );
        }
        return filtered.map(normalizeDoc);
    }

    try {
        const collection = db.collection('house_rentals');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialHouseRentals);
        }

        let filter = {};
        if (query.propertyType) filter.propertyType = query.propertyType;
        if (query.area) filter.area = query.area;
        if (query.bedrooms) filter.bedrooms = Number(query.bedrooms);
        if (query.search) {
            filter.$or = [
                { title: { $regex: query.search, $options: 'i' } },
                { address: { $regex: query.search, $options: 'i' } },
                { area: { $regex: query.search, $options: 'i' } }
            ];
        }
        const rawDocs = await collection.find(filter).sort({ createdAt: -1 }).toArray();
        return rawDocs.map(normalizeDoc);
    } catch (err) {
        return initialHouseRentals.map(normalizeDoc);
    }
};

export const getHouseRentalByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        return normalizeDoc(initialHouseRentals.find(item => item._id === id) || null);
    }
    const collection = db.collection('house_rentals');
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const createHouseRentalService = async (data) => {
    const db = getDB();
    const newItem = {
        _id: 'hr_' + Date.now(),
        title: data.title,
        propertyType: data.propertyType || 'ফ্ল্যাট / এপার্টমেন্ট',
        description: data.description || '',
        images: Array.isArray(data.images) ? data.images : (data.images ? [data.images] : []),
        address: data.address || '',
        area: data.area || 'দিনাজপুর সদর',
        location: data.location || '',
        bedrooms: Number(data.bedrooms) || 2,
        bathrooms: Number(data.bathrooms) || 1,
        balcony: Number(data.balcony) || 1,
        floor: data.floor || '২য় তলা',
        totalFloors: data.totalFloors || '৪ তলা',
        size: Number(data.size) || 1000,
        rent: Number(data.rent) || 0,
        serviceCharge: Number(data.serviceCharge) || 0,
        advanceAmount: Number(data.advanceAmount) || 0,
        availableFrom: data.availableFrom || 'আগামী মাস থেকে',
        furnished: data.furnished || 'Unfurnished',
        parking: data.parking || 'সুবিধা আছে',
        gas: data.gas || 'সিলিন্ডার গ্যাস',
        water: data.water || '২৪ ঘণ্টা পানি',
        electricity: data.electricity || 'পৃথক মিটার',
        contactName: data.contactName || 'বাড়িওয়ালা',
        contactPhone: data.contactPhone || '01700-000000',
        ownerId: data.ownerId || 'usr_default',
        status: data.status || 'active',

        // Legacy compatibility mappings
        houseType: data.propertyType || 'ফ্ল্যাট / এপার্টমেন্ট',
        rentAmount: Number(data.rent) || 0,
        sizeArea: Number(data.size) || 1000,
        advanceDeposit: Number(data.advanceAmount) || 0,
        furnishingStatus: data.furnished || 'Unfurnished',
        floorNumber: data.floor || '২য় তলা',
        phone: data.contactPhone || '01700-000000',
        ownerName: data.contactName || 'বাড়িওয়ালা',

        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialHouseRentals.unshift(newItem);
        return normalizeDoc(newItem);
    }

    const collection = db.collection('house_rentals');
    await collection.insertOne(newItem);
    return normalizeDoc(newItem);
};

export const updateHouseRentalService = async (id, data) => {
    const db = getDB();
    const updatedData = { ...data, updatedAt: new Date().toISOString() };
    if (!db) {
        const index = initialHouseRentals.findIndex(item => item._id === id);
        if (index !== -1) {
            initialHouseRentals[index] = { ...initialHouseRentals[index], ...updatedData };
            return normalizeDoc(initialHouseRentals[index]);
        }
        return null;
    }
    const collection = db.collection('house_rentals');
    await collection.updateOne({ _id: id }, { $set: updatedData });
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const deleteHouseRentalService = async (id) => {
    const db = getDB();
    if (!db) {
        initialHouseRentals = initialHouseRentals.filter(item => item._id !== id);
        return true;
    }
    const collection = db.collection('house_rentals');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
