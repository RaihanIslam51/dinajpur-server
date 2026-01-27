import { getDB, ObjectId } from '../db/db.js';

// Create indexes for better performance
const createIndexes = async () => {
    try {
        const db = await getDB();
        await db.collection('HouseRentals').createIndex({ status: 1 });
        await db.collection('HouseRentals').createIndex({ location: 1 });
        await db.collection('HouseRentals').createIndex({ rentAmount: 1 });
        await db.collection('HouseRentals').createIndex({ houseType: 1 });
        await db.collection('HouseRentals').createIndex({ createdAt: -1 });
        console.log('House Rentals indexes created successfully');
    } catch (error) {
        console.log('House Rentals index creation skipped:', error.message);
    }
};

// Initialize indexes
// setTimeout(createIndexes, 2000); // Disabled for serverless compatibility

// Insert a new house rental
export const insertHouseRental = async (houseRentalData) => {
    const db = await getDB();
    const result = await db.collection('HouseRentals').insertOne({
        ...houseRentalData,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return result;
};

// Get all house rentals with optional filters
export const getAllHouseRentals = async (filters = {}) => {
    const db = await getDB();
    const query = {};
    
    if (filters.status) {
        query.status = filters.status;
    }
    
    if (filters.location) {
        query.location = { $regex: filters.location, $options: 'i' };
    }

    if (filters.houseType) {
        query.houseType = filters.houseType;
    }

    if (filters.maxRent) {
        query.rentAmount = { $lte: parseInt(filters.maxRent) };
    }
    
    const houseRentals = await db.collection('HouseRentals')
        .find(query)
        .sort({ createdAt: -1 })
        .toArray();
    
    return houseRentals;
};

// Get house rental by ID
export const getHouseRentalById = async (id) => {
    const db = await getDB();
    const houseRental = await db.collection('HouseRentals').findOne({ _id: new ObjectId(id) });
    return houseRental;
};

// Update house rental
export const updateHouseRental = async (id, updateData) => {
    const db = await getDB();
    const result = await db.collection('HouseRentals').updateOne(
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

// Delete house rental
export const deleteHouseRental = async (id) => {
    const db = await getDB();
    const result = await db.collection('HouseRentals').deleteOne({ _id: new ObjectId(id) });
    return result;
};

// Get featured house rentals
export const getFeaturedHouseRentals = async (limit = 6) => {
    const db = await getDB();
    const houseRentals = await db.collection('HouseRentals')
        .find({ status: 'active', featured: true })
        .sort({ createdAt: -1 })
        .limit(limit)
        .toArray();
    
    return houseRentals;
};

// Search house rentals
export const searchHouseRentals = async (searchTerm) => {
    const db = await getDB();
    const houseRentals = await db.collection('HouseRentals')
        .find({
            $or: [
                { location: { $regex: searchTerm, $options: 'i' } },
                { address: { $regex: searchTerm, $options: 'i' } },
                { houseType: { $regex: searchTerm, $options: 'i' } },
                { amenities: { $regex: searchTerm, $options: 'i' } }
            ],
            status: 'active'
        })
        .sort({ createdAt: -1 })
        .toArray();
    
    return houseRentals;
};

export default {
    insertHouseRental,
    getAllHouseRentals,
    getHouseRentalById,
    updateHouseRental,
    deleteHouseRental,
    getFeaturedHouseRentals,
    searchHouseRentals
};
