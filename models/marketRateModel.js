import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

const COLLECTION_NAME = 'MarketRates';

// Insert a new market rate
export const insertMarketRate = async (marketRateData) => {
    try {
        const db = await getDB();
        const collection = db.collection(COLLECTION_NAME);
        
        const marketRate = {
            ...marketRateData,
            price: parseFloat(marketRateData.price) || 0,
            previousPrice: marketRateData.previousPrice ? parseFloat(marketRateData.previousPrice) : null,
            date: marketRateData.date || new Date().toISOString().split('T')[0],
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const result = await collection.insertOne(marketRate);
        console.log('✅ Market rate inserted into database:', result.insertedId);
        return result;
    } catch (error) {
        console.error('❌ Error inserting market rate into database:', error);
        throw error;
    }
};

// Get all market rates with optional filters
export const getAllMarketRates = async (filters = {}) => {
    try {
        const db = await getDB();
        const collection = db.collection(COLLECTION_NAME);
        
        const query = {};
        
        if (filters.category) {
            query.category = filters.category;
        }
        
        if (filters.marketName) {
            query.marketName = new RegExp(filters.marketName, 'i');
        }
        
        if (filters.location) {
            query.location = new RegExp(filters.location, 'i');
        }
        
        if (filters.date) {
            query.date = filters.date;
        }
        
        if (filters.featured !== undefined) {
            query.featured = filters.featured === 'true' || filters.featured === true;
        }
        
        if (filters.status) {
            query.status = filters.status;
        }
        
        if (filters.search) {
            query.$or = [
                { productName: new RegExp(filters.search, 'i') },
                { category: new RegExp(filters.search, 'i') },
                { marketName: new RegExp(filters.search, 'i') }
            ];
        }

        const marketRates = await collection
            .find(query)
            .sort({ date: -1, createdAt: -1 })
            .toArray();
        
        console.log(`✅ Found ${marketRates.length} market rates in database`);
        return marketRates;
    } catch (error) {
        console.error('❌ Error fetching market rates from database:', error);
        throw error;
    }
};

// Get a single market rate by ID
export const getMarketRateById = async (id) => {
    try {
        const db = await getDB();
        const collection = db.collection(COLLECTION_NAME);
        
        const marketRate = await collection.findOne({ _id: new ObjectId(id) });
        
        if (marketRate) {
            console.log('✅ Market rate found in database:', id);
        } else {
            console.log('⚠️ Market rate not found in database:', id);
        }
        
        return marketRate;
    } catch (error) {
        console.error('❌ Error fetching market rate from database:', error);
        throw error;
    }
};

// Update a market rate
export const updateMarketRate = async (id, updateData) => {
    try {
        const db = await getDB();
        const collection = db.collection(COLLECTION_NAME);
        
        const dataToUpdate = { ...updateData };
        
        if (dataToUpdate.price) {
            dataToUpdate.price = parseFloat(dataToUpdate.price);
        }
        
        if (dataToUpdate.previousPrice) {
            dataToUpdate.previousPrice = parseFloat(dataToUpdate.previousPrice);
        }
        
        dataToUpdate.updatedAt = new Date();

        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: dataToUpdate }
        );

        console.log('✅ Market rate updated in database:', id);
        return result;
    } catch (error) {
        console.error('❌ Error updating market rate in database:', error);
        throw error;
    }
};

// Delete a market rate
export const deleteMarketRate = async (id) => {
    try {
        const db = await getDB();
        const collection = db.collection(COLLECTION_NAME);
        
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        
        console.log('✅ Market rate deleted from database:', id);
        return result;
    } catch (error) {
        console.error('❌ Error deleting market rate from database:', error);
        throw error;
    }
};

// Get featured market rates
export const getFeaturedMarketRates = async () => {
    try {
        const db = await getDB();
        const collection = db.collection(COLLECTION_NAME);
        
        const marketRates = await collection
            .find({ featured: true, status: 'active' })
            .sort({ date: -1, createdAt: -1 })
            .toArray();
        
        console.log(`✅ Found ${marketRates.length} featured market rates in database`);
        return marketRates;
    } catch (error) {
        console.error('❌ Error fetching featured market rates from database:', error);
        throw error;
    }
};

// Search market rates
export const searchMarketRates = async (searchTerm) => {
    try {
        const db = await getDB();
        const collection = db.collection(COLLECTION_NAME);
        
        const marketRates = await collection
            .find({
                $or: [
                    { productName: new RegExp(searchTerm, 'i') },
                    { category: new RegExp(searchTerm, 'i') },
                    { marketName: new RegExp(searchTerm, 'i') },
                    { location: new RegExp(searchTerm, 'i') }
                ]
            })
            .sort({ date: -1, createdAt: -1 })
            .toArray();
        
        console.log(`✅ Search found ${marketRates.length} market rates in database`);
        return marketRates;
    } catch (error) {
        console.error('❌ Error searching market rates in database:', error);
        throw error;
    }
};

// Get today's market rates
export const getTodayMarketRates = async () => {
    try {
        const db = await getDB();
        const collection = db.collection(COLLECTION_NAME);
        
        const today = new Date().toISOString().split('T')[0];
        
        const marketRates = await collection
            .find({ date: today, status: 'active' })
            .sort({ category: 1, productName: 1 })
            .toArray();
        
        console.log(`✅ Found ${marketRates.length} market rates for today in database`);
        return marketRates;
    } catch (error) {
        console.error('❌ Error fetching today\'s market rates from database:', error);
        throw error;
    }
};
