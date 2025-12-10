import { getDB, ObjectId } from '../db/db.js';

export const insertBanner = async (data) => {
    return await getDB().collection('Banners').insertOne(data);
};

export const getAllBanners = async () => {
    return await getDB()
        .collection('Banners')
        .find({})
        .sort({ createdAt: -1 })
        .toArray();
};

export const getBannerById = async (id) => {
    return await getDB()
        .collection('Banners')
        .findOne({ _id: new ObjectId(id) });
};

export const updateBanner = async (id, data) => {
    return await getDB()
        .collection('Banners')
        .updateOne(
            { _id: new ObjectId(id) },
            { $set: data }
        );
};

export const deleteBanner = async (id) => {
    return await getDB()
        .collection('Banners')
        .deleteOne({ _id: new ObjectId(id) });
};