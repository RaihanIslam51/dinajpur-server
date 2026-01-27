import { getDB, ObjectId } from '../db/db.js';

// Create indexes for better performance
const createIndexes = async () => {
    try {
        const db = await getDB();
        await db.collection('TouristPlaces').createIndex({ status: 1 });
        await db.collection('TouristPlaces').createIndex({ name: 1 });
        await db.collection('TouristPlaces').createIndex({ createdAt: -1 });
        await db.collection('TouristPlaces').createIndex({ location: 1 });
        console.log('Tourist Places indexes created successfully');
    } catch (error) {
        console.log('Tourist Places index creation skipped:', error.message);
    }
};

// Initialize indexes
// setTimeout(createIndexes, 2000); // Disabled for serverless compatibility

// Insert a new tourist place
export const insertTouristPlace = async (touristPlaceData) => {
    const db = await getDB();
    const result = await db.collection('TouristPlaces').insertOne({
        ...touristPlaceData,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return result;
};

// Get all tourist places with optional filters
export const getAllTouristPlaces = async (filters = {}) => {
    const db = await getDB();
    const query = {};
    
    if (filters.status) {
        query.status = filters.status;
    }
    
    if (filters.location) {
        query.location = { $regex: filters.location, $options: 'i' };
    }
    
    const touristPlaces = await db.collection('TouristPlaces')
        .find(query)
        .sort({ createdAt: -1 })
        .toArray();
    
    return touristPlaces;
};

// Get tourist place by ID
export const getTouristPlaceById = async (id) => {
    const db = await getDB();
    const touristPlace = await db.collection('TouristPlaces').findOne({ _id: new ObjectId(id) });
    return touristPlace;
};

// Update tourist place
export const updateTouristPlace = async (id, updateData) => {
    const db = await getDB();
    const result = await db.collection('TouristPlaces').updateOne(
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

// Delete tourist place
export const deleteTouristPlace = async (id) => {
    const db = await getDB();
    const result = await db.collection('TouristPlaces').deleteOne({ _id: new ObjectId(id) });
    return result;
};

// Get featured tourist places
export const getFeaturedTouristPlaces = async (limit = 6) => {
    const db = await getDB();
    const touristPlaces = await db.collection('TouristPlaces')
        .find({ status: 'active', featured: true })
        .sort({ createdAt: -1 })
        .limit(limit)
        .toArray();
    
    return touristPlaces;
};

// Search tourist places
export const searchTouristPlaces = async (searchTerm) => {
    const db = await getDB();
    const touristPlaces = await db.collection('TouristPlaces')
        .find({
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { description: { $regex: searchTerm, $options: 'i' } },
                { location: { $regex: searchTerm, $options: 'i' } },
                { address: { $regex: searchTerm, $options: 'i' } }
            ],
            status: 'active'
        })
        .sort({ createdAt: -1 })
        .toArray();
    
    return touristPlaces;
};

export default {
    insertTouristPlace,
    getAllTouristPlaces,
    getTouristPlaceById,
    updateTouristPlace,
    deleteTouristPlace,
    getFeaturedTouristPlaces,
    searchTouristPlaces
};
