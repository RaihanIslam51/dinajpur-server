/**
 * TouristPlace (দর্শনীয় স্থান) Service Layer
 */
import { getDB } from '../../database/db.js';

let initialTouristPlaces = [
    {
        _id: 'tp_001',
        name: 'রামসাগর জাতীয় উদ্যান ও দিঘি',
        category: 'প্রাকৃতিক সৌন্দর্য ও দিঘি',
        description: 'রামসাগর বাংলাদেশের মানবসৃষ্ট সর্ববৃহৎ দিঘি। রাজা রামনাথ ১৭৫০ খ্রিষ্টাব্দে এটি খনন করান। চারপাশে মনোরম সবুজ বনায়ন, চিড়িয়াখানা এবং শিশু পার্ক রয়েছে।',
        shortDescription: 'বাংলাদেশের মানবসৃষ্ট বৃহত্তম দিঘি ও মনোরম জাতীয় উদ্যান।',
        images: [
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
            'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800'
        ],
        coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        address: 'গ্রাম: তেজপুর, পোস্ট: রামসাগর',
        area: 'দিনাজপুর সদর',
        location: '25.5492, 88.6291',
        openingTime: '08:00 AM',
        closingTime: '06:00 PM',
        entryFee: 30,
        contactNumber: '01711-000000',
        facilities: ['পার্কিং ব্যবস্থা', 'রেস্ট হাউস', 'শিশু পার্ক', 'পিকনিক স্পট', 'নৌকা ভ্রমণ'],
        bestTimeToVisit: 'অক্টোবর থেকে মার্চ (শীতকাল)',
        howToGo: 'দিনাজপুর অটোস্ট্যান্ড থেকে সুনির্দিষ্ট অটো বা অটোবাইকে সরাসরি রামসাগর যাওয়া যায় (দূরত্ব ৮ কিমি)।',
        nearbyPlaces: ['দিনাজপুর রাজবাড়ী', 'মাতা সাগরা'],
        isFeatured: true,
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'tp_002',
        name: 'ঐতিহাসিক কান্তজীর মন্দির',
        category: 'ঐতিহাসিক ও ধর্মীয় স্থান',
        description: 'কান্তজীর মন্দির বা কান্তনগর মন্দির মধ্যযুগীয় হিন্দু স্থাপত্যের এক অনুপম নিদর্শন। ১৭২২ সালে মহারাজা প্রাণনাথ এর নির্মাণ শুরু করেন। মন্দিরের বাইরের গায়ে পোড়ামাটির অসাধারণ টেরাকোটা অলঙ্করণ দেখা যায়।',
        shortDescription: 'বিশ্বখ্যাত পোড়ামাটির টেরাকোটা শিল্পে সুশোভিত ঐতিহাসিক মন্দির।',
        images: [
            'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800',
            'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800'
        ],
        coverImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800',
        address: 'কান্তনগর, কাহারোল',
        area: 'কাহারোল',
        location: '25.7903, 88.6644',
        openingTime: '09:00 AM',
        closingTime: '05:30 PM',
        entryFee: 20,
        contactNumber: '01712-111222',
        facilities: ['গাইড সেবা', 'গাড়ি পার্কিং', 'স্মারক দোকান', 'প্রসাধনাগার'],
        bestTimeToVisit: 'কার্তিক মাসে ঐতিহ্যবাহী রাশমেলা ও শীতকাল',
        howToGo: 'দিনাজপুর-তেঁতুলিয়া মহাসড়ক হয়ে কাহারোল কান্তনগর মোড়ে নেমে আধা কিলোমিটার হেঁটে পৌছা যায়।',
        nearbyPlaces: ['নয়াবাদ মসজিদ', 'আটোয়ারী ইমামবাড়া'],
        isFeatured: true,
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'tp_003',
        name: 'দিনাজপুর রাজবাড়ী',
        category: 'ঐতিহাসিক প্রাসাদ',
        description: 'দিনাজপুরের প্রখ্যাত রাজপরিবারের রাজপ্রাসাদ। কুমার মহল, আয়না মহল ও বিখ্যাত মন্দির নিয়ে গঠিত বিশাল ঐতিহাসিক এলাকা।',
        shortDescription: 'প্রাচীন ঐতিহাসিক রাজপরিবারের সুবিশাল প্রাসাদ ও ধ্বংসাবশেষ।',
        images: [
            'https://images.unsplash.com/photo-1548625361-186a111b1580?w=800'
        ],
        coverImage: 'https://images.unsplash.com/photo-1548625361-186a111b1580?w=800',
        address: 'রাজবাড়ী মোড়, দিনাজপুর',
        area: 'দিনাজপুর সদর',
        location: '25.6322, 88.6477',
        openingTime: '09:00 AM',
        closingTime: '05:00 PM',
        entryFee: 0,
        contactNumber: '01713-333444',
        facilities: ['ফটোগ্রাফি স্পট', 'উন্মুক্ত বাগান'],
        bestTimeToVisit: 'সারা বছরই ঘুরে দেখা যায়',
        howToGo: 'দিনাজপুর শহর থেকে ইজিবাইক বা রিকশায় সরাসরি যাওয়া যায়।',
        nearbyPlaces: ['রামসাগর', 'চেহেলগাজী মাজার'],
        isFeatured: false,
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'tp_004',
        name: 'স্বপ্নপুরী থিম পার্ক',
        category: 'বিনোদনের পার্ক',
        description: 'উত্তরবঙ্গের সর্ববৃহৎ কৃত্রিম পিকনিক স্পট ও থিম পার্ক। এখানে রয়েছে লেক, ক্যাবল কার, চিড়িয়াখানা, সুইমিং পুল এবং চমৎকার ভাস্কর্য শিল্প।',
        shortDescription: 'পারিবারিক বিনোদন, ক্যাবল কার ও কৃত্রিম লেক বেষ্টিত বিশাল থিম পার্ক।',
        images: [
            'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800'
        ],
        coverImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800',
        address: 'কুশদহ, নবাবগঞ্জ',
        area: 'নবাবগঞ্জ',
        location: '25.4211, 88.9812',
        openingTime: '08:30 AM',
        closingTime: '06:30 PM',
        entryFee: 100,
        contactNumber: '01714-555666',
        facilities: ['ক্যাবল কার', 'কটেজ ও রেস্টহাউস', 'রেস্টুরেন্ট', 'সুইমিং পুল', 'বিশাল পার্কিং'],
        bestTimeToVisit: 'শীতকাল ও ছুটির দিনসমূহ',
        howToGo: 'দিনাজপুর বা ফুলবাড়ী বাসস্ট্যান্ড থেকে নবাবগঞ্জগামী বাসে স্বপ্নপুরীতে নামা যায়।',
        nearbyPlaces: ['নবাবগঞ্জ জাতীয় উদ্যান', 'আশুরার বিল'],
        isFeatured: true,
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    }
];

export const getAllTouristPlacesService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        let filtered = [...initialTouristPlaces];
        if (query.category) {
            filtered = filtered.filter(item => item.category === query.category);
        }
        if (query.area) {
            filtered = filtered.filter(item => item.area === query.area);
        }
        if (query.search) {
            const q = query.search.toLowerCase();
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(q) || 
                item.address.toLowerCase().includes(q) || 
                item.area.toLowerCase().includes(q)
            );
        }
        return filtered;
    }

    try {
        const collection = db.collection('tourist_places');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialTouristPlaces);
        }

        let filter = {};
        if (query.category) filter.category = query.category;
        if (query.area) filter.area = query.area;
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { address: { $regex: query.search, $options: 'i' } },
                { area: { $regex: query.search, $options: 'i' } }
            ];
        }
        return await collection.find(filter).sort({ isFeatured: -1, createdAt: -1 }).toArray();
    } catch (err) {
        return initialTouristPlaces;
    }
};

export const getTouristPlaceByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        return initialTouristPlaces.find(item => item._id === id) || null;
    }
    const collection = db.collection('tourist_places');
    return await collection.findOne({ _id: id });
};

export const createTouristPlaceService = async (data) => {
    const db = getDB();
    const newItem = {
        _id: 'tp_' + Date.now(),
        name: data.name,
        category: data.category || 'দর্শনীয় স্থান',
        description: data.description || '',
        shortDescription: data.shortDescription || '',
        images: Array.isArray(data.images) ? data.images : (data.images ? [data.images] : []),
        coverImage: data.coverImage || data.images?.[0] || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        address: data.address || '',
        area: data.area || 'দিনাজপুর সদর',
        location: data.location || '',
        openingTime: data.openingTime || '09:00 AM',
        closingTime: data.closingTime || '05:00 PM',
        entryFee: Number(data.entryFee) || 0,
        contactNumber: data.contactNumber || '',
        facilities: Array.isArray(data.facilities) ? data.facilities : [],
        bestTimeToVisit: data.bestTimeToVisit || 'সারা বছর',
        howToGo: data.howToGo || '',
        nearbyPlaces: Array.isArray(data.nearbyPlaces) ? data.nearbyPlaces : [],
        isFeatured: Boolean(data.isFeatured),
        isVerified: Boolean(data.isVerified !== undefined ? data.isVerified : true),
        status: data.status || 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialTouristPlaces.unshift(newItem);
        return newItem;
    }

    const collection = db.collection('tourist_places');
    await collection.insertOne(newItem);
    return newItem;
};

export const updateTouristPlaceService = async (id, data) => {
    const db = getDB();
    const updatedData = { ...data, updatedAt: new Date().toISOString() };
    if (!db) {
        const index = initialTouristPlaces.findIndex(item => item._id === id);
        if (index !== -1) {
            initialTouristPlaces[index] = { ...initialTouristPlaces[index], ...updatedData };
            return initialTouristPlaces[index];
        }
        return null;
    }
    const collection = db.collection('tourist_places');
    await collection.updateOne({ _id: id }, { $set: updatedData });
    return await collection.findOne({ _id: id });
};

export const deleteTouristPlaceService = async (id) => {
    const db = getDB();
    if (!db) {
        initialTouristPlaces = initialTouristPlaces.filter(item => item._id !== id);
        return true;
    }
    const collection = db.collection('tourist_places');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
