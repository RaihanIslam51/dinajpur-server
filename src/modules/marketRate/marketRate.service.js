/**
 * MarketRate (আজকের বাজার দর) Service Layer
 */
import { getDB } from '../../database/db.js';

// In-memory initial store for rich mock data if database is connecting asynchronously
let initialMarketRates = [
    {
        _id: 'mr_001',
        productName: 'চাল (নাজিরশাইল / কটারিভোগ)',
        category: 'চাল ও শস্য',
        unit: 'কেজি',
        price: 72,
        previousPrice: 75,
        minimumPrice: 70,
        maximumPrice: 75,
        marketName: 'বাহাদুর বাজার',
        marketLocation: 'দিনাজপুর সদর',
        priceDate: new Date().toISOString().split('T')[0],
        source: 'দিনাজপুর বাজার মনিটরিং সেল',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
        description: 'উন্নত মানের কটারিভোগ ও নাজিরশাইল চাল। সরবরাহের ঘাটতি না থাকায় দাম ৩ টাকা কমেছে।',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'mr_002',
        productName: 'দেশি পেঁয়াজ',
        category: 'শাকসবজি ও মশলা',
        unit: 'কেজি',
        price: 65,
        previousPrice: 60,
        minimumPrice: 62,
        maximumPrice: 68,
        marketName: 'সুইহারী বাজার',
        marketLocation: 'দিনাজপুর সদর',
        priceDate: new Date().toISOString().split('T')[0],
        source: 'দিনাজপুর ব্যবসায়ী সমিতি',
        image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400',
        description: 'ভালো মানের দেশি পেঁয়াজ। বাজারে সরবরাহ কিছুটা কম থাকায় দাম ৫ টাকা বৃদ্ধি পেয়েছে।',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'mr_003',
        productName: 'সয়াবিন তেল (বোতলজাত)',
        category: 'তেল ও চর্বি',
        unit: 'লিটার',
        price: 168,
        previousPrice: 168,
        minimumPrice: 165,
        maximumPrice: 170,
        marketName: 'বাহাদুর বাজার',
        marketLocation: 'দিনাজপুর সদর',
        priceDate: new Date().toISOString().split('T')[0],
        source: 'বাণিজ্য মন্ত্রণালয় নির্ধারিত দর',
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400',
        description: 'লিটার প্রতি সরকার নির্ধারিত মূল্যে বিক্রি হচ্ছে।',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'mr_004',
        productName: 'বয়লার মুরগি',
        category: 'মাংস ও ডিম',
        unit: 'কেজি',
        price: 160,
        previousPrice: 170,
        minimumPrice: 155,
        maximumPrice: 165,
        marketName: 'গনেশতলা বাজার',
        marketLocation: 'দিনাজপুর সদর',
        priceDate: new Date().toISOString().split('T')[0],
        source: 'পোল্ট্রি অ্যাসোসিয়েশন দিনাজপুর',
        image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=400',
        description: 'খামারের তাজা বয়লার মুরগি। দাম ১০ টাকা কমেছে।',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'mr_005',
        productName: 'আলু (ডায়মন্ড)',
        category: 'শাকসবজি ও মশলা',
        unit: 'কেজি',
        price: 35,
        previousPrice: 35,
        minimumPrice: 32,
        maximumPrice: 38,
        marketName: 'বাহাদুর বাজার',
        marketLocation: 'দিনাজপুর সদর',
        priceDate: new Date().toISOString().split('T')[0],
        source: 'কৃষি সম্প্রসারণ অধিদপ্তর',
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400',
        description: 'হিমাগারের ডায়মন্ড আলু। বাজারে সুনির্দিষ্ট দামে বিক্রি হচ্ছে।',
        status: 'active',
        createdAt: new Date().toISOString()
    }
];

export const getAllMarketRatesService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        let filtered = [...initialMarketRates];
        if (query.category) {
            filtered = filtered.filter(item => item.category === query.category);
        }
        if (query.search) {
            const q = query.search.toLowerCase();
            filtered = filtered.filter(item => item.productName.toLowerCase().includes(q) || item.marketName.toLowerCase().includes(q));
        }
        return filtered;
    }

    try {
        const collection = db.collection('market_rates');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialMarketRates);
        }
        
        let filter = {};
        if (query.category) filter.category = query.category;
        if (query.search) {
            filter.$or = [
                { productName: { $regex: query.search, $options: 'i' } },
                { marketName: { $regex: query.search, $options: 'i' } }
            ];
        }
        return await collection.find(filter).sort({ priceDate: -1, createdAt: -1 }).toArray();
    } catch (err) {
        return initialMarketRates;
    }
};

export const getMarketRateByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        return initialMarketRates.find(item => item._id === id) || null;
    }
    const collection = db.collection('market_rates');
    return await collection.findOne({ _id: id });
};

export const createMarketRateService = async (data) => {
    const db = getDB();
    const newItem = {
        _id: 'mr_' + Date.now(),
        productName: data.productName,
        category: data.category || 'অন্যান্য',
        unit: data.unit || 'কেজি',
        price: Number(data.price) || 0,
        previousPrice: Number(data.previousPrice) || Number(data.price) || 0,
        minimumPrice: Number(data.minimumPrice) || Number(data.price) || 0,
        maximumPrice: Number(data.maximumPrice) || Number(data.price) || 0,
        marketName: data.marketName || 'দিনাজপুর বাজার',
        marketLocation: data.marketLocation || 'দিনাজপুর সদর',
        priceDate: data.priceDate || new Date().toISOString().split('T')[0],
        source: data.source || 'সরেজমিন বাজার জরিপ',
        image: data.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
        description: data.description || '',
        status: data.status || 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialMarketRates.unshift(newItem);
        return newItem;
    }

    const collection = db.collection('market_rates');
    await collection.insertOne(newItem);
    return newItem;
};

export const updateMarketRateService = async (id, data) => {
    const db = getDB();
    const updatedData = { ...data, updatedAt: new Date().toISOString() };
    if (!db) {
        const index = initialMarketRates.findIndex(item => item._id === id);
        if (index !== -1) {
            initialMarketRates[index] = { ...initialMarketRates[index], ...updatedData };
            return initialMarketRates[index];
        }
        return null;
    }
    const collection = db.collection('market_rates');
    await collection.updateOne({ _id: id }, { $set: updatedData });
    return await collection.findOne({ _id: id });
};

export const deleteMarketRateService = async (id) => {
    const db = getDB();
    if (!db) {
        initialMarketRates = initialMarketRates.filter(item => item._id !== id);
        return true;
    }
    const collection = db.collection('market_rates');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
