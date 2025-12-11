import { getDB, ObjectId } from '../db/db.js';

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