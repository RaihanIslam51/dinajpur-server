import { getDB, ObjectId } from '../db/db.js';

// Create indexes for better performance
const createIndexes = async () => {
    try {
        const db = await getDB();
        await db.collection('FireServices').createIndex({ status: 1 });
        await db.collection('FireServices').createIndex({ location: 1 });
        await db.collection('FireServices').createIndex({ stationType: 1 });
        await db.collection('FireServices').createIndex({ createdAt: -1 });
        console.log('Fire Services indexes created successfully');
    } catch (error) {
        console.log('Fire Services index creation skipped:', error.message);
    }
};

// Initialize indexes
// setTimeout(createIndexes, 2000); // Disabled for serverless compatibility

// Insert a new fire service
export const insertFireService = async (fireServiceData) => {
    const db = await getDB();
    const result = await db.collection('FireServices').insertOne({
        ...fireServiceData,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return result;
};

// Get all fire services with optional filters
export const getAllFireServices = async (filters = {}) => {
    const db = await getDB();
    const query = {};
    
    if (filters.status) {
        query.status = filters.status;
    }
    
    if (filters.location) {
        query.location = { $regex: filters.location, $options: 'i' };
    }

    if (filters.stationType) {
        query.stationType = filters.stationType;
    }
    
    const fireServices = await db.collection('FireServices')
        .find(query)
        .sort({ createdAt: -1 })
        .toArray();
    
    return fireServices;
};

// Get fire service by ID
export const getFireServiceById = async (id) => {
    const db = await getDB();
    const fireService = await db.collection('FireServices').findOne({ _id: new ObjectId(id) });
    return fireService;
};

// Update fire service
export const updateFireService = async (id, updateData) => {
    const db = await getDB();
    const result = await db.collection('FireServices').updateOne(
        { _id: new ObjectId(id) },
        { 
            $set: {
                ...updateData,
                updatedAt: new Date()
            }
        }
    );
    return result;
};

// Delete fire service
export const deleteFireService = async (id) => {
    const db = await getDB();
    const result = await db.collection('FireServices').deleteOne({ _id: new ObjectId(id) });
    return result;
};

// Get featured fire services
export const getFeaturedFireServices = async (limit = 6) => {
    const db = await getDB();
    const fireServices = await db.collection('FireServices')
        .find({ status: 'active', featured: true })
        .sort({ createdAt: -1 })
        .limit(limit)
        .toArray();
    
    return fireServices;
};

// Search fire services
export const searchFireServices = async (searchTerm) => {
    const db = await getDB();
    const fireServices = await db.collection('FireServices')
        .find({
            $or: [
                { stationName: { $regex: searchTerm, $options: 'i' } },
                { location: { $regex: searchTerm, $options: 'i' } },
                { address: { $regex: searchTerm, $options: 'i' } },
                { services: { $regex: searchTerm, $options: 'i' } }
            ],
            status: 'active'
        })
        .sort({ createdAt: -1 })
        .toArray();
    
    return fireServices;
};

export default {
    insertFireService,
    getAllFireServices,
    getFireServiceById,
    updateFireService,
    deleteFireService,
    getFeaturedFireServices,
    searchFireServices
};
