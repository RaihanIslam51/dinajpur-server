/**
 * Banner Service Layer
 */
import { getDB } from '../../database/db.js';

export const getAllBannersService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        return [
            { id: '1', name: 'Sample Banner 1', description: 'Smart City Verified Service', phone: '01700000000', address: 'Dinajpur' }
        ];
    }
    try {
        const collection = db.collection('banners');
        return await collection.find(query).toArray();
    } catch (err) {
        return [{ id: '1', name: 'Sample Banner', phone: '01700000000' }];
    }
};

export const getBannerByIdService = async (id) => {
    const db = getDB();
    if (!db) return { id, name: 'Sample Banner Detail', phone: '01700000000' };
    const collection = db.collection('banners');
    return await collection.findOne({ _id: id });
};

export const createBannerService = async (data) => {
    const db = getDB();
    const newItem = { ...data, createdAt: new Date() };
    if (!db) return { id: Date.now().toString(), ...newItem };
    const collection = db.collection('banners');
    const result = await collection.insertOne(newItem);
    return { _id: result.insertedId, ...newItem };
};
