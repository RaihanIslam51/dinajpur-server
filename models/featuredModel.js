import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

// Create indexes for better performance
const createIndexes = async () => {
    try {
        const db = await getDB();
        await db.collection('Featured').createIndex({ status: 1 });
        await db.collection('Featured').createIndex({ createdAt: -1 });
        console.log('Featured indexes created successfully');
    } catch (error) {
        console.log('Featured index creation skipped:', error.message);
    }
};

// Indexes will be created on-demand or via migration script
// setTimeout(createIndexes, 2000); // Disabled for serverless compatibility

// Insert a new featured item
export const insertFeatured = async (featuredData) => {
    const db = await getDB();
    const result = await db.collection('Featured').insertOne({
        ...featuredData,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return result;
};

// Get all featured items
export const getAllFeatured = async () => {
    const db = await getDB();
    const featured = await db.collection('Featured').find({}).sort({ createdAt: -1 }).toArray();
    return featured;
};

// Get featured item by ID
export const getFeaturedById = async (id) => {
    const db = await getDB();
    const featured = await db.collection('Featured').findOne({ _id: new ObjectId(id) });
    return featured;
};

// Update featured item
export const updateFeatured = async (id, updateData) => {
    const db = await getDB();
    const result = await db.collection('Featured').updateOne(
        { _id: new ObjectId(id) },
        { $set: { ...updateData, updatedAt: new Date() } }
    );
    return result;
};

// Delete featured item
export const deleteFeatured = async (id) => {
    const db = await getDB();
    const result = await db.collection('Featured').deleteOne({ _id: new ObjectId(id) });
    return result;
};

export default {
    insertFeatured,
    getAllFeatured,
    getFeaturedById,
    updateFeatured,
    deleteFeatured
};
