/**
 * Restaurant (রেস্টুরেন্ট) Service Layer with MongoDB support & field normalization
 */
import { getDB } from '../../database/db.js';

let initialRestaurants = [
    {
        _id: 'rest_001',
        name: 'রূপসী বাংলা রেস্টুরেন্ট (Ruposhi Bangla Restaurant)',
        logo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&auto=format&fit=crop&q=80',
        coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'দিনাজপুর শহরের প্রিমিয়াম ফ্যামিলি ডাইনিং ও রেস্টুরেন্ট। ঐতিহ্যবাহী খাসির মাংসের কাচ্চি, দেশীয় মাছের ভর্তা-ভাত, চাইনিজ ও থাই খাবারের বিশ্বস্ত ঠিকানা।',
        cuisineType: ['বাংলা খাবার', 'কাচ্চি বিরিয়ানি', 'চাইনিজ', 'থাই'],
        address: 'মডার্ন মোড়, ফুলবাড়ী বাসস্ট্যান্ড সংলগ্ন, দিনাজপুর সদর',
        area: 'মডার্ন মোড়',
        phone: '01712-334455',
        email: 'ruposhibangla.dinajpur@gmail.com',
        website: 'https://facebook.com/ruposhibangladinajpur',
        menu: ['কাচ্চি বিরিয়ানি ডেলাক্স (৳২৮০)', 'মোরগ পোলাও (৳২৩০)', 'চিকেন ফ্রাইড রাইস সেট (৳৩৫০)', 'রুপচাঁদা ফ্রাই (৳৪০০)'],
        openingTime: '10:30 AM',
        closingTime: '10:30 PM',
        priceRange: '৳১৫০ - ৳১০০০',
        facilities: ['এসি ফ্যামিলি কেবিন', 'কনফারেন্স ডাইনিং', 'কার পার্কিং', 'ফ্রি ওয়াই-ফাই', 'শিশুদের খেলার কর্নার'],
        deliveryAvailable: true,
        takeaway: true,
        reservationAvailable: true,
        paymentMethods: ['ক্যাশ', 'বিকাশ', 'নগদ', 'ডেবিট/ক্রেডিট কার্ড'],
        location: 'মডার্ন মোড়, দিনাজপুর',
        rating: 4.7,
        totalReviews: 184,
        isFeatured: true,
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'rest_002',
        name: 'কাচ্চি ঘর ও ফাস্টফুড ক্যাফে (Kacchi Ghor & Cafe)',
        logo: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=300&auto=format&fit=crop&q=80',
        coverImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1000&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'বাটার ও খাঁটি ঘি সমৃদ্ধ শাহি বাশকাটি চালের দম কাচ্চি এবং সুস্বাদু ফাস্টফুড আইটেমের জনপ্রিয় ডাইনিং স্পট। তরুণ ও শিক্ষার্থীদের জন্য আকর্ষণীয় পরিবেশ।',
        cuisineType: ['বিরিয়ানি', 'ফাস্টফুড', 'বার্গার', 'বেভারেজ'],
        address: 'কেবিএম কলেজ মোড়, সুইহারী, দিনাজপুর সদর',
        area: 'সুইহারী',
        phone: '01733-998877',
        email: 'kacchighor.dnj@gmail.com',
        website: 'https://kacchighordinajpur.com',
        menu: ['শাহি কাচ্চি বিরিয়ানি (৳২৪০)', 'চিকেন বার্গার উইথ চিজ (৳১৬০)', 'কোল্ড কফি ও বোরহানি (৳৮০)'],
        openingTime: '11:00 AM',
        closingTime: '11:00 PM',
        priceRange: '৳১০০ - ৳৫০০',
        facilities: ['এসি এরিয়া', 'কোল্ড ড্রিংকস কর্নার', 'দ্রুত টেবিল সার্ভিস', 'ফ্রি ওয়াই-ফাই'],
        deliveryAvailable: true,
        takeaway: true,
        reservationAvailable: false,
        paymentMethods: ['ক্যাশ', 'বিকাশ', 'নগদ'],
        location: 'কেবিএম মোড়, সুইহারী, দিনাজপুর',
        rating: 4.5,
        totalReviews: 96,
        isFeatured: true,
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'rest_003',
        name: 'হোটেল নবাব ও রেস্টুরেন্ট (Hotel Nabab & Restaurant)',
        logo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&auto=format&fit=crop&q=80',
        coverImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&auto=format&fit=crop&q=80',
        images: [
            'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=80'
        ],
        description: 'সকাল থেকে মধ্যরাত পর্যন্ত সুস্বাদু দেশীয় প্রাতরাশ, কাবাপ নান, শিক কাবাব, ডাল গীত ও ফ্যামিলি স্পেশাল মিলের বিশ্বস্ত কেন্দ্র।',
        cuisineType: ['বাংলা প্রাতরাশ', 'গ্রিল ও কাবাব', 'নান রুটি', 'ইন্ডিয়ান'],
        address: 'চারু বাবুর মোড়, স্টেশন রোড, দিনাজপুর সদর',
        area: 'স্টেশন রোড',
        phone: '01711-223344',
        email: 'nababrestaurant@gmail.com',
        website: '',
        menu: ['চিকেন চাপ ও বাটার নান (৳১৯০)', 'হাঁসের মাংসের ভুনা (৳২৩০)', 'স্পেশাল পরাটা ও ডাল ভাজি (৳৫০)'],
        openingTime: '07:00 AM',
        closingTime: '11:30 PM',
        priceRange: '৳৫০ - ৳৬০০',
        facilities: ['ওপেন কিচেন', 'প্রাতরাশ ব্যবস্থা', 'টেক-অ্যাওয়ে সার্ভিস', 'বাইক পার্কিং'],
        deliveryAvailable: true,
        takeaway: true,
        reservationAvailable: true,
        paymentMethods: ['ক্যাশ', 'বিকাশ'],
        location: 'চারু বাবুর মোড়, দিনাজপুর',
        rating: 4.4,
        totalReviews: 142,
        isFeatured: false,
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    }
];

const normalizeDoc = (doc) => {
    if (!doc) return doc;

    const imagesArr = Array.isArray(doc.images) ? doc.images : 
        (doc.image ? [doc.image] : ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80']);

    const cuisineArr = Array.isArray(doc.cuisineType) ? doc.cuisineType : 
        (doc.category ? [doc.category] : ['বাংলা খাবার']);

    const menuArr = Array.isArray(doc.menu) ? doc.menu : 
        (doc.menuItems ? (Array.isArray(doc.menuItems) ? doc.menuItems : [doc.menuItems]) : []);

    const facilitiesArr = Array.isArray(doc.facilities) ? doc.facilities : 
        (doc.amenities ? (Array.isArray(doc.amenities) ? doc.amenities : [doc.amenities]) : ['এসি', 'ওয়াই-ফাই']);

    const paymentArr = Array.isArray(doc.paymentMethods) ? doc.paymentMethods : ['ক্যাশ', 'বিকাশ'];

    return {
        ...doc,
        name: doc.name || doc.title || 'রেস্টুরেন্ট',
        logo: doc.logo || doc.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&auto=format&fit=crop&q=80',
        coverImage: doc.coverImage || doc.image || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&auto=format&fit=crop&q=80',
        images: imagesArr,
        description: doc.description || 'দিনাজপুর শহরের সুস্বাদু খাবার পরিবেশনকারী মানসম্মত রেস্টুরেন্ট।',
        cuisineType: cuisineArr,
        address: doc.address || doc.location || 'দিনাজপুর',
        area: doc.area || doc.location || 'দিনাজপুর সদর',
        phone: doc.phone || doc.contactPhone || '01700-000000',
        email: doc.email || '',
        website: doc.website || '',
        menu: menuArr,
        openingTime: doc.openingTime || '10:00 AM',
        closingTime: doc.closingTime || '10:30 PM',
        priceRange: doc.priceRange || '৳১০০ - ৳৮০০',
        facilities: facilitiesArr,
        deliveryAvailable: doc.deliveryAvailable !== undefined ? Boolean(doc.deliveryAvailable) : true,
        takeaway: doc.takeaway !== undefined ? Boolean(doc.takeaway) : true,
        reservationAvailable: doc.reservationAvailable !== undefined ? Boolean(doc.reservationAvailable) : true,
        paymentMethods: paymentArr,
        location: doc.location || doc.area || 'দিনাজপুর',
        rating: Number(doc.rating) || 4.5,
        totalReviews: Number(doc.totalReviews) || 120,
        isFeatured: doc.isFeatured !== undefined ? Boolean(doc.isFeatured) : (doc.featured !== undefined ? Boolean(doc.featured) : true),
        isVerified: doc.isVerified !== undefined ? Boolean(doc.isVerified) : true,
        status: doc.status || 'active'
    };
};

export const getAllRestaurantsService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        let filtered = [...initialRestaurants];
        if (query.cuisineType) {
            filtered = filtered.filter(item => 
                item.cuisineType.some(c => c.toLowerCase().includes(query.cuisineType.toLowerCase()))
            );
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
        const collection = db.collection('restaurants');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialRestaurants);
        }

        let filter = {};
        if (query.cuisineType) {
            filter.cuisineType = { $regex: query.cuisineType, $options: 'i' };
        }
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
        return initialRestaurants.map(normalizeDoc);
    }
};

export const getRestaurantByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        return normalizeDoc(initialRestaurants.find(item => item._id === id) || null);
    }
    const collection = db.collection('restaurants');
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const createRestaurantService = async (data) => {
    const db = getDB();

    const cuisineArr = Array.isArray(data.cuisineType) ? data.cuisineType : 
        (typeof data.cuisineType === 'string' ? data.cuisineType.split(',').map(s => s.trim()).filter(Boolean) : ['বাংলা খাবার']);

    const menuArr = Array.isArray(data.menu) ? data.menu : 
        (typeof data.menu === 'string' ? data.menu.split('\n').map(s => s.trim()).filter(Boolean) : []);

    const facilitiesArr = Array.isArray(data.facilities) ? data.facilities : 
        (typeof data.facilities === 'string' ? data.facilities.split('\n').map(s => s.trim()).filter(Boolean) : []);

    const paymentArr = Array.isArray(data.paymentMethods) ? data.paymentMethods : 
        (typeof data.paymentMethods === 'string' ? data.paymentMethods.split(',').map(s => s.trim()).filter(Boolean) : ['ক্যাশ', 'বিকাশ']);

    const imagesArr = Array.isArray(data.images) ? data.images : 
        (typeof data.images === 'string' ? data.images.split(',').map(s => s.trim()).filter(Boolean) : []);

    const newItem = {
        _id: 'rest_' + Date.now(),
        name: data.name,
        logo: data.logo || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&auto=format&fit=crop&q=80',
        coverImage: data.coverImage || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&auto=format&fit=crop&q=80',
        images: imagesArr.length > 0 ? imagesArr : ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80'],
        description: data.description || '',
        cuisineType: cuisineArr,
        address: data.address || 'দিনাজপুর',
        area: data.area || 'দিনাজপুর সদর',
        phone: data.phone || '01700-000000',
        email: data.email || '',
        website: data.website || '',
        menu: menuArr,
        openingTime: data.openingTime || '10:00 AM',
        closingTime: data.closingTime || '10:30 PM',
        priceRange: data.priceRange || '৳১০০ - ৳৮০০',
        facilities: facilitiesArr,
        deliveryAvailable: Boolean(data.deliveryAvailable),
        takeaway: Boolean(data.takeaway),
        reservationAvailable: Boolean(data.reservationAvailable),
        paymentMethods: paymentArr,
        location: data.location || data.area || 'দিনাজপুর',
        rating: Number(data.rating) || 4.5,
        totalReviews: Number(data.totalReviews) || 10,
        isFeatured: Boolean(data.isFeatured),
        isVerified: data.isVerified !== undefined ? Boolean(data.isVerified) : true,
        status: data.status || 'active',

        // Legacy field fallback
        title: data.name,
        contactPhone: data.phone,

        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialRestaurants.unshift(newItem);
        return normalizeDoc(newItem);
    }

    const collection = db.collection('restaurants');
    await collection.insertOne(newItem);
    return normalizeDoc(newItem);
};

export const updateRestaurantService = async (id, data) => {
    const db = getDB();
    const updatedData = { ...data, updatedAt: new Date().toISOString() };

    if (!db) {
        const index = initialRestaurants.findIndex(item => item._id === id);
        if (index !== -1) {
            initialRestaurants[index] = { ...initialRestaurants[index], ...updatedData };
            return normalizeDoc(initialRestaurants[index]);
        }
        return null;
    }
    const collection = db.collection('restaurants');
    await collection.updateOne({ _id: id }, { $set: updatedData });
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const deleteRestaurantService = async (id) => {
    const db = getDB();
    if (!db) {
        initialRestaurants = initialRestaurants.filter(item => item._id !== id);
        return true;
    }
    const collection = db.collection('restaurants');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
