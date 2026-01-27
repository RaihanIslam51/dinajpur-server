import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

// Get entrepreneurs collection
const getEntrepreneursCollection = async () => {
    const db = await getDB();
    return db.collection('Entrepreneurs');
};

// Insert new entrepreneur
const insertEntrepreneur = async (entrepreneurData) => {
    try {
        const collection = await getEntrepreneursCollection();
        const result = await collection.insertOne({
            ...entrepreneurData,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        
        console.log('✅ Entrepreneur inserted into database:', result.insertedId);
        return result;
    } catch (error) {
        console.error('❌ Error inserting entrepreneur:', error);
        throw error;
    }
};

// Get all entrepreneurs with optional filters
const getAllEntrepreneurs = async (filters = {}) => {
    try {
        const collection = await getEntrepreneursCollection();
        const query = {};

        // Apply filters
        if (filters.businessType) {
            query.businessType = filters.businessType;
        }

        if (filters.location) {
            query.location = { $regex: filters.location, $options: 'i' };
        }

        if (filters.foundedYear) {
            query.foundedYear = parseInt(filters.foundedYear);
        }

        if (filters.featured !== undefined) {
            query.featured = filters.featured === 'true' || filters.featured === true;
        }

        if (filters.status) {
            query.status = filters.status;
        }

        // Search functionality
        if (filters.search) {
            query.$or = [
                { entrepreneurName: { $regex: filters.search, $options: 'i' } },
                { businessName: { $regex: filters.search, $options: 'i' } },
                { location: { $regex: filters.search, $options: 'i' } },
                { description: { $regex: filters.search, $options: 'i' } }
            ];
        }

        const entrepreneurs = await collection.find(query).sort({ createdAt: -1 }).toArray();
        console.log(`✅ Retrieved ${entrepreneurs.length} entrepreneurs from database`);
        
        return entrepreneurs;
    } catch (error) {
        console.error('❌ Error getting entrepreneurs:', error);
        throw error;
    }
};

// Get entrepreneur by ID
const getEntrepreneurById = async (id) => {
    try {
        const collection = await getEntrepreneursCollection();
        const entrepreneur = await collection.findOne({ _id: new ObjectId(id) });
        
        if (entrepreneur) {
            console.log('✅ Entrepreneur found:', entrepreneur.entrepreneurName);
        } else {
            console.log('⚠️ Entrepreneur not found with ID:', id);
        }
        
        return entrepreneur;
    } catch (error) {
        console.error('❌ Error getting entrepreneur by ID:', error);
        throw error;
    }
};

// Update entrepreneur
const updateEntrepreneur = async (id, updateData) => {
    try {
        const collection = await getEntrepreneursCollection();
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { 
                $set: {
                    ...updateData,
                    updatedAt: new Date()
                }
            }
        );
        
        console.log('✅ Entrepreneur updated:', result.modifiedCount, 'document(s) modified');
        return result;
    } catch (error) {
        console.error('❌ Error updating entrepreneur:', error);
        throw error;
    }
};

// Delete entrepreneur
const deleteEntrepreneur = async (id) => {
    try {
        const collection = await getEntrepreneursCollection();
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        
        console.log('✅ Entrepreneur deleted:', result.deletedCount, 'document(s) deleted');
        return result;
    } catch (error) {
        console.error('❌ Error deleting entrepreneur:', error);
        throw error;
    }
};

// Get featured entrepreneurs
const getFeaturedEntrepreneurs = async () => {
    try {
        const collection = await getEntrepreneursCollection();
        const entrepreneurs = await collection
            .find({ featured: true, status: 'active' })
            .sort({ createdAt: -1 })
            .toArray();
        
        console.log(`✅ Retrieved ${entrepreneurs.length} featured entrepreneurs`);
        return entrepreneurs;
    } catch (error) {
        console.error('❌ Error getting featured entrepreneurs:', error);
        throw error;
    }
};

// Search entrepreneurs
const searchEntrepreneurs = async (searchTerm) => {
    try {
        const collection = await getEntrepreneursCollection();
        const entrepreneurs = await collection
            .find({
                $or: [
                    { entrepreneurName: { $regex: searchTerm, $options: 'i' } },
                    { businessName: { $regex: searchTerm, $options: 'i' } },
                    { location: { $regex: searchTerm, $options: 'i' } },
                    { description: { $regex: searchTerm, $options: 'i' } },
                    { successStory: { $regex: searchTerm, $options: 'i' } }
                ]
            })
            .toArray();
        
        console.log(`✅ Found ${entrepreneurs.length} entrepreneurs matching "${searchTerm}"`);
        return entrepreneurs;
    } catch (error) {
        console.error('❌ Error searching entrepreneurs:', error);
        throw error;
    }
};

export {
    insertEntrepreneur,
    getAllEntrepreneurs,
    getEntrepreneurById,
    updateEntrepreneur,
    deleteEntrepreneur,
    getFeaturedEntrepreneurs,
    searchEntrepreneurs
};
