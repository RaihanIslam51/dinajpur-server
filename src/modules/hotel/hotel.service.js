/**
 * Hotel (হোটেল) Service Layer with Full Field Normalization & MongoDB support
 */
import { getDB } from '../../database/db.js';

let initialHotels = [
    {
        _id: 'hotel_001',
        name: 'হোটেল ডায়মন্ড আবাসিক (Hotel Diamond Residential)',
        logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&auto=format&fit=crop&q=80',
        coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'দিনাজপুর শহরের অন্যতম সুপরিচিত ও নির্ভরযোগ্য আবাসিক হোটেল। রেলস্টেশন ও টার্মিনাল সংলগ্ন হওয়ার কারণে যাতায়াত অত্যন্ত সহজ। নিরাপদ পরিবেশ ও পরিচ্ছন্ন রুম সরবরাহ করা হয়।',
        hotelType: 'আবাসিক হোটেল (Residential Hotel)',
        starRating: 'Standard Deluxe',
        address: 'স্টেশন রোড, দিনাজপুর সদর, দিনাজপুর',
        area: 'স্টেশন রোড',
        phone: '0531-65432',
        email: 'hoteldiamond.dinajpur@gmail.com',
        website: 'https://hoteldiamonddinajpur.com',
        rooms: ['সিঙ্গেল নন-এসি (৳৮০০)', 'সিঙ্গেল এসি (৳১৪০০)', 'ডাবল এসি ডেলাক্স (৳২২০০)', 'ফ্যামিলি সু্যট (৳৩৫০০)'],
        amenities: ['২৪/৭ জেনারেটর', 'রুম সার্ভিস', 'এসি ও গিজার', 'ফ্রি ওয়াই-ফাই', 'সিকিউরিটি ক্যামেরা', 'লিফ্ট সুবিধা'],
        checkInTime: '12:00 PM',
        checkOutTime: '11:00 AM',
        bookingAvailable: true,
        restaurantAvailable: true,
        parking: true,
        wifi: true,
        breakfast: true,
        location: 'স্টেশন রোড, দিনাজপুর',
        priceRange: '৳৮০০ - ৳৩৫০০',
        rating: 4.5,
        reviews: ['দুর্দান্ত সেবা এবং পরিষ্কার রুম। রেলস্টেশন একদম কাছে।', 'স্বল্প খরচে ভালো থাকার জায়গা।'],
        isFeatured: true,
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'hotel_002',
        name: 'হোটেল কানাই আন্তর্জাতিক (Hotel Kanai International)',
        logo: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=300&auto=format&fit=crop&q=80',
        coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1000&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'দিনাজপুরের প্রিমিয়াম থ্রি-স্টার মানের বিলাসবহুল আন্তর্জাতিক হোটেল। কর্পোরেট মিটিং, ভ্রমণার্থী ও ভিআইপি অতিথিদের জন্য আধুনিক এয়ারকন্ডিশন রুম ও কনফারেন্স হল।',
        hotelType: 'প্রিমিয়াম হোটেল (Premium 3-Star Hotel)',
        starRating: '3-Star Premium',
        address: 'সুইহারী মোড়, দিনাজপুর সদর, দিনাজপুর',
        area: 'সুইহারী',
        phone: '01711-889900',
        email: 'info@hotelkanai.com',
        website: 'https://hotelkanai.com',
        rooms: ['এক্সিকিউটিভ এসি (৳২৫০০)', 'রয়েল ডেলাক্স এসি (৳৩৫০০)', 'প্রেসিডেন্সিয়াল সু্যট (৳৬০০০)'],
        amenities: ['মাল্টি-কুইজিন রেস্টুরেন্ট', 'কনফারেন্স রুম', 'ফিটনেস সেন্টার', 'লন্ড্রি সার্ভিস', 'পিকআপ ও ড্রপ সেবা'],
        checkInTime: '01:00 PM',
        checkOutTime: '12:00 PM',
        bookingAvailable: true,
        restaurantAvailable: true,
        parking: true,
        wifi: true,
        breakfast: true,
        location: 'সুইহারী, দিনাজপুর',
        priceRange: '৳২৫০০ - ৳৬০০০',
        rating: 4.8,
        reviews: ['রেস্টুরেন্টের খাবার খুব সুস্বাদু। রুম সার্ভিস চমৎকার।'],
        isFeatured: true,
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'hotel_003',
        name: 'রামসাগর নেচার ইন রেসোর্ট (Ramsagar Nature Inn)',
        logo: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&auto=format&fit=crop&q=80',
        coverImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'রামসাগর দিঘীর মনোরম প্রাকৃতিক পরিবেশে অবস্থিত আকর্ষণীয় ইকো-রেসোর্ট। পর্যটক ও পরিবার নিয়ে শান্ত পরিবেশে সময় কাটানোর অনন্য স্থান।',
        hotelType: 'রেসোর্ট (Ecology Resort)',
        starRating: 'Resort Deluxe',
        address: 'রামসাগর জাতীয় উদ্যান সংলগ্ন, দিনাজপুর সদর',
        area: 'রামসাগর',
        phone: '01712-990011',
        email: 'booking@ramsagarnatureinn.com',
        website: 'https://ramsagarnatureinn.com',
        rooms: ['লেকল্যান্ড কটেজ (৳৩০০০)', 'ফ্যামিলি ভিলা (৳৫০০০)'],
        amenities: ['লেক ভিউ বারান্দা', 'গার্ডেন ওয়াচ টাওয়ার', 'বারবিকিউ কর্নার', 'বোটিং সুবিধা', 'ওপেন স্পেস পার্কিং'],
        checkInTime: '12:30 PM',
        checkOutTime: '11:30 AM',
        bookingAvailable: true,
        restaurantAvailable: true,
        parking: true,
        wifi: false,
        breakfast: true,
        location: 'রামসাগর, দিনাজপুর',
        priceRange: '৳৩০০০ - ৳৫০০০',
        rating: 4.6,
        reviews: ['রামসাগরের কাছে হওয়ায় অসাধারণ ভিউ পাওয়া যায়। প্রকৃতিপ্রেমীদের জন্য দারুণ।'],
        isFeatured: true,
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    }
];

const normalizeDoc = (doc) => {
    if (!doc) return doc;

    const imagesArr = Array.isArray(doc.images) ? doc.images : 
        (doc.image ? [doc.image] : ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80']);

    const roomsArr = Array.isArray(doc.rooms) ? doc.rooms : 
        (doc.roomTypes ? (Array.isArray(doc.roomTypes) ? doc.roomTypes : [doc.roomTypes]) : ['Standard Room']);

    const amenitiesArr = Array.isArray(doc.amenities) ? doc.amenities : 
        (doc.facilities ? (Array.isArray(doc.facilities) ? doc.facilities : [doc.facilities]) : ['এসি', 'ওয়াই-ফাই', 'রুম সার্ভিস']);

    return {
        ...doc,
        name: doc.name || doc.hotelName || doc.title || 'হোটেল',
        logo: doc.logo || doc.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&auto=format&fit=crop&q=80',
        coverImage: doc.coverImage || doc.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&auto=format&fit=crop&q=80',
        images: imagesArr,
        description: doc.description || 'দিনাজপুর শহরের আরামদায়ক ও নিরাপদ হোটেল।',
        hotelType: doc.hotelType || 'আবাসিক হোটেল',
        starRating: doc.starRating || 'Standard',
        address: doc.address || doc.location || 'দিনাজপুর',
        area: doc.area || doc.location || 'দিনাজপুর সদর',
        phone: doc.phone || doc.contactNumber || '01700-000000',
        email: doc.email || '',
        website: doc.website || '',
        rooms: roomsArr,
        amenities: amenitiesArr,
        checkInTime: doc.checkInTime || '12:00 PM',
        checkOutTime: doc.checkOutTime || '11:00 AM',
        bookingAvailable: doc.bookingAvailable !== undefined ? Boolean(doc.bookingAvailable) : true,
        restaurantAvailable: doc.restaurantAvailable !== undefined ? Boolean(doc.restaurantAvailable) : true,
        parking: doc.parking !== undefined ? Boolean(doc.parking) : true,
        wifi: doc.wifi !== undefined ? Boolean(doc.wifi) : true,
        breakfast: doc.breakfast !== undefined ? Boolean(doc.breakfast) : false,
        location: doc.location || doc.area || 'দিনাজপুর',
        priceRange: doc.priceRange || (doc.pricePerNight ? `৳${doc.pricePerNight} / রাত` : '৳১০০০ - ৳৩০০০'),
        rating: Number(doc.rating) || 4.0,
        reviews: Array.isArray(doc.reviews) ? doc.reviews : ['ভালো সেবা'],
        isFeatured: doc.isFeatured !== undefined ? Boolean(doc.isFeatured) : (doc.featured !== undefined ? Boolean(doc.featured) : true),
        isVerified: doc.isVerified !== undefined ? Boolean(doc.isVerified) : true,
        status: doc.status || 'active'
    };
};

export const getAllHotelsService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        let filtered = [...initialHotels];
        if (query.hotelType) {
            filtered = filtered.filter(item => item.hotelType.includes(query.hotelType));
        }
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
        const collection = db.collection('hotels');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialHotels);
        }

        let filter = {};
        if (query.hotelType) filter.hotelType = { $regex: query.hotelType, $options: 'i' };
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { hotelName: { $regex: query.search, $options: 'i' } },
                { area: { $regex: query.search, $options: 'i' } },
                { address: { $regex: query.search, $options: 'i' } }
            ];
        }
        const rawDocs = await collection.find(filter).sort({ createdAt: -1 }).toArray();
        return rawDocs.map(normalizeDoc);
    } catch (err) {
        return initialHotels.map(normalizeDoc);
    }
};

export const getHotelByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        return normalizeDoc(initialHotels.find(item => item._id === id) || null);
    }
    const collection = db.collection('hotels');
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const createHotelService = async (data) => {
    const db = getDB();

    const roomsArr = Array.isArray(data.rooms) ? data.rooms : 
        (typeof data.rooms === 'string' ? data.rooms.split(',').map(s => s.trim()).filter(Boolean) : []);

    const amenitiesArr = Array.isArray(data.amenities) ? data.amenities : 
        (typeof data.amenities === 'string' ? data.amenities.split(',').map(s => s.trim()).filter(Boolean) : []);

    const imagesArr = Array.isArray(data.images) ? data.images : 
        (typeof data.images === 'string' ? data.images.split(',').map(s => s.trim()).filter(Boolean) : []);

    const reviewsArr = Array.isArray(data.reviews) ? data.reviews : 
        (typeof data.reviews === 'string' ? data.reviews.split(',').map(s => s.trim()).filter(Boolean) : []);

    const newItem = {
        _id: 'hotel_' + Date.now(),
        name: data.name,
        logo: data.logo || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&auto=format&fit=crop&q=80',
        coverImage: data.coverImage || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&auto=format&fit=crop&q=80',
        images: imagesArr.length > 0 ? imagesArr : ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80'],
        description: data.description || '',
        hotelType: data.hotelType || 'আবাসিক হোটেল',
        starRating: data.starRating || 'Standard',
        address: data.address || 'দিনাজপুর',
        area: data.area || 'দিনাজপুর সদর',
        phone: data.phone || '01700-000000',
        email: data.email || '',
        website: data.website || '',
        rooms: roomsArr,
        amenities: amenitiesArr,
        checkInTime: data.checkInTime || '12:00 PM',
        checkOutTime: data.checkOutTime || '11:00 AM',
        bookingAvailable: Boolean(data.bookingAvailable),
        restaurantAvailable: Boolean(data.restaurantAvailable),
        parking: Boolean(data.parking),
        wifi: Boolean(data.wifi),
        breakfast: Boolean(data.breakfast),
        location: data.location || data.area || 'দিনাজপুর',
        priceRange: data.priceRange || '৳১০০০ - ৳৩০০০',
        rating: Number(data.rating) || 4.5,
        reviews: reviewsArr,
        isFeatured: Boolean(data.isFeatured),
        isVerified: data.isVerified !== undefined ? Boolean(data.isVerified) : true,
        status: data.status || 'active',

        // Legacy compatibility mappings
        hotelName: data.name,
        contactNumber: data.phone,
        roomTypes: roomsArr,
        facilities: amenitiesArr,

        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialHotels.unshift(newItem);
        return normalizeDoc(newItem);
    }

    const collection = db.collection('hotels');
    await collection.insertOne(newItem);
    return normalizeDoc(newItem);
};

export const updateHotelService = async (id, data) => {
    const db = getDB();
    const updatedData = { ...data, updatedAt: new Date().toISOString() };
    if (!db) {
        const index = initialHotels.findIndex(item => item._id === id);
        if (index !== -1) {
            initialHotels[index] = { ...initialHotels[index], ...updatedData };
            return normalizeDoc(initialHotels[index]);
        }
        return null;
    }
    const collection = db.collection('hotels');
    await collection.updateOne({ _id: id }, { $set: updatedData });
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const deleteHotelService = async (id) => {
    const db = getDB();
    if (!db) {
        initialHotels = initialHotels.filter(item => item._id !== id);
        return true;
    }
    const collection = db.collection('hotels');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
