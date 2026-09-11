/**
 * Doctor Service Layer
 */
import { getDB } from '../../database/db.js';

export const getAllDoctorsService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        return [
            { id: '1', name: 'Sample Doctor 1', description: 'Smart City Verified Service', phone: '01700000000', address: 'Dinajpur' }
        ];
    }
    try {
        const collection = db.collection('doctors');
        return await collection.find(query).toArray();
    } catch (err) {
        return [{ id: '1', name: 'Sample Doctor', phone: '01700000000' }];
    }
};

export const getDoctorByIdService = async (id) => {
    const db = getDB();
    if (!db) return { id, name: 'Sample Doctor Detail', phone: '01700000000' };
    const collection = db.collection('doctors');
    return await collection.findOne({ _id: id });
};

export const createDoctorService = async (data) => {
    const db = getDB();
    const newItem = { ...data, createdAt: new Date() };
    if (!db) return { id: Date.now().toString(), ...newItem };
    const collection = db.collection('doctors');
    const result = await collection.insertOne(newItem);
    return { _id: result.insertedId, ...newItem };
};
