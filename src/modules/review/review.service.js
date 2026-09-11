/**
 * Review Service Layer
 */
import { getDB } from '../../database/db.js';

export const getAllReviewsService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        return [
            { id: '1', name: 'Sample Review 1', description: 'Smart City Verified Service', phone: '01700000000', address: 'Dinajpur' }
        ];
    }
    try {
        const collection = db.collection('reviews');
        return await collection.find(query).toArray();
    } catch (err) {
        return [{ id: '1', name: 'Sample Review', phone: '01700000000' }];
    }
};

export const getReviewByIdService = async (id) => {
    const db = getDB();
    if (!db) return { id, name: 'Sample Review Detail', phone: '01700000000' };
    const collection = db.collection('reviews');
    return await collection.findOne({ _id: id });
};

export const createReviewService = async (data) => {
    const db = getDB();
    const newItem = { ...data, createdAt: new Date() };
    if (!db) return { id: Date.now().toString(), ...newItem };
    const collection = db.collection('reviews');
    const result = await collection.insertOne(newItem);
    return { _id: result.insertedId, ...newItem };
};
