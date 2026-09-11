/**
 * ShoppingStore / Product Service Layer
 * Isolated collection handling for 'products' (Shopping Stores) with 20 normalized fields
 */
import { getDB } from '../../database/db.js';
import { ObjectId } from 'mongodb';

// Helper to normalize array fields from array or comma-separated string
const normalizeArray = (val) => {
    if (Array.isArray(val)) return val.map(item => typeof item === 'object' ? item : String(item).trim()).filter(Boolean);
    if (typeof val === 'string' && val.trim()) {
        return val.split(',').map(item => item.trim()).filter(Boolean);
    }
    return [];
};

// Normalize input data to strictly conform to all 20 schema fields
const normalizeProductData = (data = {}) => {
    const storeName = data.name || data.title || data.shopName || data.productName || 'দিনাজপুর শপিং মল';
    return {
        name: storeName,
        productName: storeName,
        category: data.category || 'অন্যান্য',

        description: data.description || 'দিনাজপুর শহরের প্রিমিয়াম কেনাকাটা কেন্দ্র।',
        logo: data.logo || 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=300&q=80',
        coverImage: data.coverImage || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
        images: normalizeArray(data.images || data.photos),
        address: data.address || 'দিনাজপুর সদর',
        area: data.area || data.locationArea || 'দিনাজপুর সদর',
        phone: data.phone || data.contactPhone || '01700-000000',
        email: data.email || 'info@shoppingstore.com',
        website: data.website || 'https://dinajpurshopping.com',
        openingTime: data.openingTime || '10:00 AM',
        closingTime: data.closingTime || '09:30 PM',
        products: normalizeArray(data.products || data.items),
        services: normalizeArray(data.services || data.offers),
        paymentMethods: normalizeArray(data.paymentMethods || data.payments || ['ক্যাশ', 'বিকাশ', 'নগদ']),
        location: data.location || 'https://maps.google.com/?q=Dinajpur+Shopping+Center',
        isFeatured: Boolean(data.isFeatured || data.featured),
        isVerified: data.isVerified !== undefined ? Boolean(data.isVerified) : true,
        status: data.status || 'active',
        updatedAt: new Date()
    };
};

// Initial seed data for Shopping Stores in Dinajpur
const getInitialSeedProducts = () => [
    {
        name: 'দিনাজপুর ড্রেস পার্ক & ফ্যাশন',
        category: 'পোশাক ও ফ্যাশন',
        description: 'দিনাজপুরের অন্যতম সেরা পোশাক ব্র্যান্ড। সেরা মানের শার্ট, প্যান্ট, পাঞ্জাবি, শাড়ি ও লেডিস থ্রি-পিস কালেকশন।',
        logo: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=300&q=80',
        coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
        images: [
            'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80'
        ],
        address: 'মালদহ পট্টি মার্কেট রোড, দিনাজপুর সদর',
        area: 'দিনাজপুর সদর',
        phone: '01712-889900',
        email: 'dresspark.dinajpur@gmail.com',
        website: 'https://facebook.com/dressparkdinajpur',
        openingTime: '10:00 AM',
        closingTime: '09:30 PM',
        products: ['প্রিমিয়াম কটন পাঞ্জাবি (১৫০০-৩৫০০৳)', 'এক্সক্লুসিভ বেনারসী ও জামদানি শাড়ি', 'ফরমাল শার্ট ও ক্যাজুয়াল টি-শার্ট', 'লেডিস ব্র্যান্ডেড থ্রি-পিস'],
        services: ['ট্রায়াল রুম সুবিধা', 'হোম ডেলিভারি (দিনাজপুর সদর)', 'সাইজ এক্সচেঞ্জ সুবিধা', 'কার্ড ও মোবাইল ব্যাংকিং'],
        paymentMethods: ['ক্যাশ', 'বিকাশ', 'নগদ', 'ডেবিট/ক্রেডিট কার্ড', 'পস'],
        location: 'https://maps.google.com/?q=25.6265,88.6360',
        isFeatured: true,
        isVerified: true,
        status: 'active',
        createdAt: new Date('2026-09-01')
    },
    {
        name: 'মেগা মার্ট প্লাস - সুপারশপ',
        category: 'সুপারশপ & গ্রোসারি',
        description: 'এক ছাদের নিচে দৈনিক সকল বাজার, অর্গানিক ফলমূল, দেশি-বিদেশি স্ন্যাকস, ড্রাই ফ্রুটস ও হোম কেয়ার সামগ্রী।',
        logo: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=300&q=80',
        coverImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1000&q=80',
        images: [
            'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80'
        ],
        address: 'স্টেশন রোড সংলগ্ন, চারু বাবুর মোড়, দিনাজপুর',
        area: 'দিনাজপুর সদর',
        phone: '01711-223344',
        email: 'info@megamartplus.com',
        website: 'https://megamartplus.com',
        openingTime: '08:00 AM',
        closingTime: '10:00 PM',
        products: ['অরিজিনাল দিনাজপুরের কাটারীভোগ চাল', 'খাঁটি গাওয়া ঘি ও মধু', 'ইম্পোর্টেড চকলেট ও ড্রাই ফ্রুটস', 'হোম অ্যান্ড কিচেন কেয়ার'],
        services: ['ফ্রি পার্কিং স্থান', 'ফাস্ট হোম ডেলিভারি', 'মেম্বারশিপ ক্যাশব্যাক পয়েন্ট'],
        paymentMethods: ['ক্যাশ', 'বিকাশ', 'নগদ', 'রকেট', 'কার্ড'],
        location: 'https://maps.google.com/?q=25.6290,88.6375',
        isFeatured: true,
        isVerified: true,
        status: 'active',
        createdAt: new Date('2026-09-02')
    },
    {
        name: 'ডিজিটাল কম্পিউটার ও গ্যাজেট ওয়ার্ল্ড',
        category: 'কম্পিউটার ও ইলেকট্রনিক্স',
        description: 'দিনাজপুরের নির্ভরযোগ্য ল্যাপটপ, ডেক্সটপ, সিসিটিভি ক্যামেরা ও কম্পিউটার পার্টস ভেন্ডর।',
        logo: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300&q=80',
        coverImage: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1000&q=80',
        images: [
            'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
        ],
        address: 'উপশহর ২ নং সেক্টর মার্কেট, দিনাজপুর',
        area: 'উপশহর',
        phone: '01823-445566',
        email: 'sales@dinajpurgadgets.com',
        website: 'https://facebook.com/dinajpurgadgets',
        openingTime: '10:00 AM',
        closingTime: '08:30 PM',
        products: ['ব্র্যান্ডেড কোর i5 / i7 ল্যাপটপ (Asus, Dell, HP)', 'গেমিং পিসি ও গ্রাফিক্স কার্ড', 'ডাহুয়া / হিকভিশন সিসিটিভি ক্যামেরা সেট', 'স্মার্টওয়াচ ও এয়ারপডস'],
        services: ['ওয়ারেন্টি সার্ভিসিং সেন্টার', 'অন-সাইট সিসিটিভি ইনস্টলেশন', 'ইএমআই (EMI) সুবিধা'],
        paymentMethods: ['ক্যাশ', 'বিকাশ', 'ব্যাংক ট্রান্সফার', 'কার্ড (০% EMI)'],
        location: 'https://maps.google.com/?q=25.6350,88.6450',
        isFeatured: false,
        isVerified: true,
        status: 'active',
        createdAt: new Date('2026-09-03')
    },
    {
        name: 'রাজবাড়ী জুয়েলার্স & গোল্ড হাউস',
        category: 'জুয়েলারি ও অলংকার',
        description: '২২ ক্যারেট হলের মার্কযুক্ত খাঁটি সোনার গহনা, ডায়মন্ড নোথ ও রূপার ঐতিহ্যবাহী অলংকার সংগ্রাহক।',
        logo: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&q=80',
        coverImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80',
        images: [
            'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
        ],
        address: 'সোনার পট্টি, গনেশতলা রোড, দিনাজপুর',
        area: 'গনেশতলা',
        phone: '01715-998877',
        email: 'rajbarijewelers@gmail.com',
        website: 'https://facebook.com/rajbarijewelers',
        openingTime: '11:00 AM',
        closingTime: '08:00 PM',
        products: ['২২ ক্যারেট সোনার ব্রাইডাল নেকলেস সেট', 'হালকা ওজনের গোল্ড চেইন ও রিং', 'ডায়মন্ড নোজপিন ও ইয়াররিং', 'রূপার পায়েল ও থালা-বাটি'],
        services: ['স্বর্ণ পরীক্ষা ও এসিড টেস্ট', 'পুরাতন সোনা এক্সচেঞ্জ সুবিধা', 'কাস্টম ডিজাইন তৈরি'],
        paymentMethods: ['ক্যাশ', 'ব্যাংক ট্রান্সফার', 'ডেবিট/ক্রেডিট কার্ড'],
        location: 'https://maps.google.com/?q=25.6250,88.6350',
        isFeatured: false,
        isVerified: true,
        status: 'active',
        createdAt: new Date('2026-09-04')
    },
    {
        name: 'উত্তরবঙ্গ ফার্নিচার গ্যালারি',
        category: 'ফার্নিচার ও হোম ডেকোর',
        description: 'খাঁটি সেগুন কাঠের আধুনিক খাট, সোফা সেট, ডাইনিং টেবিল ও মেলামাইন আলমারির বিশাল সম্ভার।',
        logo: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=300&q=80',
        coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
        images: [
            'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80'
        ],
        address: 'মেডিকেল মোড় সংলগ্ন, সুইহারী, দিনাজপুর',
        area: 'সুইহারী',
        phone: '01730-112233',
        email: 'contact@uttarbangafurniture.com',
        website: 'https://uttarbangafurniture.com',
        openingTime: '09:30 AM',
        closingTime: '09:00 PM',
        products: ['চিটাগং সেগুন কাঠের কিং সাইজ খাট', 'আধুনিক ফ্যাব্রিক সোফা সেট (৫ সিটার)', '৬ চেয়ারের গ্লাস টপ ডাইনিং টেবিল', 'অফিস টেবিল ও এক্সিকিউটিভ চেয়ার'],
        services: ['বিনামূল্যে হোম ডেলিভারি (পৌর এলাকা)', '১০ বছরের ঘুনপোকা ওয়ারেন্টি', 'কাস্টম মাপ অনুযায়ী অর্ডার নেওয়া'],
        paymentMethods: ['ক্যাশ', 'বিকাশ', 'নগদ', 'কার্ড'],
        location: 'https://maps.google.com/?q=25.6310,88.6420',
        isFeatured: true,
        isVerified: true,
        status: 'active',
        createdAt: new Date('2026-09-05')
    }
];

export const getAllProductsService = async (query = {}) => {
    const db = getDB();
    const seeds = getInitialSeedProducts();
    if (!db) {
        return seeds;
    }
    try {
        const collection = db.collection('products');
        const count = await collection.countDocuments();

        // Check if old legacy items exist (containing 'seller' or 'condition')
        const legacyCount = await collection.countDocuments({ $or: [{ seller: { $exists: true } }, { condition: { $exists: true } }] });
        if (count === 0 || legacyCount > 0) {
            try {
                await collection.deleteMany({});
                try { await db.collection('Products').deleteMany({}); } catch (err) {}
                await collection.insertMany(seeds);
            } catch (e) {
                console.error('Seeding warning in products:', e);
            }
        }

        const filter = {};
        if (query.category && query.category !== 'all' && query.category !== 'সকল' && query.category !== 'সকল ক্যাটাগরি') {
            filter.category = query.category;
        }
        if (query.area && query.area !== 'all' && query.area !== 'সকল' && query.area !== 'সকল এলাকা') {
            filter.area = query.area;
        }
        if (query.status && query.status !== 'all') {
            filter.status = { $regex: new RegExp(`^${query.status}$`, 'i') };
        }
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { shopName: { $regex: query.search, $options: 'i' } },
                { category: { $regex: query.search, $options: 'i' } },
                { address: { $regex: query.search, $options: 'i' } },
                { area: { $regex: query.search, $options: 'i' } },
                { description: { $regex: query.search, $options: 'i' } }
            ];
        }

        let items = await collection.find(filter).sort({ isFeatured: -1, createdAt: -1 }).toArray();
        if (items.length === 0 && Object.keys(filter).length === 0) {
            await collection.deleteMany({});
            await collection.insertMany(seeds);
            items = await collection.find({}).sort({ isFeatured: -1, createdAt: -1 }).toArray();
        }

        return items.map(item => ({
            _id: item._id,
            ...normalizeProductData(item)
        }));
    } catch (err) {
        console.error('Error in getAllProductsService:', err);
        return seeds.map(s => normalizeProductData(s));
    }
};




export const getProductByIdService = async (id) => {
    const db = getDB();
    const seeds = getInitialSeedProducts();
    if (!db) return seeds[0];

    const collection = db.collection('products');
    let filter = { _id: id };
    if (ObjectId.isValid(id)) {
        filter = { $or: [{ _id: new ObjectId(id) }, { _id: id }] };
    }
    const item = await collection.findOne(filter);
    return item || seeds[0];
};

export const createProductService = async (data) => {
    const db = getDB();
    const normalized = normalizeProductData(data);
    const newItem = { ...normalized, createdAt: new Date() };

    if (!db) {
        return { _id: 'prod_' + Date.now(), ...newItem };
    }
    const collection = db.collection('products');
    const result = await collection.insertOne(newItem);
    return { _id: result.insertedId, ...newItem };
};

export const updateProductService = async (id, data) => {
    const db = getDB();
    const normalized = normalizeProductData(data);

    if (!db) {
        return { _id: id, ...normalized };
    }
    const collection = db.collection('products');
    let filter = { _id: id };
    if (ObjectId.isValid(id)) {
        filter = { $or: [{ _id: new ObjectId(id) }, { _id: id }] };
    }
    await collection.updateOne(filter, { $set: normalized });
    return await collection.findOne(filter);
};

export const deleteProductService = async (id) => {
    const db = getDB();
    if (!db) return true;

    const collection = db.collection('products');
    let filter = { _id: id };
    if (ObjectId.isValid(id)) {
        filter = { $or: [{ _id: new ObjectId(id) }, { _id: id }] };
    }
    const result = await collection.deleteOne(filter);
    return result.deletedCount > 0;
};

