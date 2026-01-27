import { getDB, ObjectId } from '../db/db.js';

// Create indexes for better performance
const createIndexes = async () => {
    try {
        const db = await getDB();
        await db.collection('Banners').createIndex({ status: 1 });
        await db.collection('Banners').createIndex({ createdAt: -1 });
        console.log('Banner indexes created successfully');
    } catch (error) {
        console.log('Banner index creation skipped:', error.message);
    }
};

// Initialize indexes after database connection
// setTimeout(createIndexes, 2000); // Disabled for serverless compatibility

export const insertBanner = async (data) => {
    const db = await getDB();
    return await db.collection('Banners').insertOne(data);
};

export const getAllBanners = async () => {
    const db = await getDB();
    return await db
        .collection('Banners')
        .find({})
        .sort({ createdAt: -1 })
        .toArray();
};

export const getBannerById = async (id) => {
    const db = await getDB();
    return await db
        .collection('Banners')
        .findOne({ _id: new ObjectId(id) });
};

export const updateBanner = async (id, data) => {
    const db = await getDB();
    return await db
        .collection('Banners')
        .updateOne(
            { _id: new ObjectId(id) },
            { $set: data }
        );
};

export const deleteBanner = async (id) => {
    const db = await getDB();
    return await db
        .collection('Banners')
        .deleteOne({ _id: new ObjectId(id) });
};