import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

// Get hospitals collection
const getHospitalsCollection = async () => {
    const db = await getDB();
    return db.collection('Hospitals');
};

// Insert new hospital
const insertHospital = async (hospitalData) => {
    try {
        const collection = await getHospitalsCollection();
        const result = await collection.insertOne({
            ...hospitalData,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        
        console.log('✅ Hospital inserted into database:', result.insertedId);
        return result;
    } catch (error) {
        console.error('❌ Error inserting hospital:', error);
        throw error;
    }
};

// Get all hospitals with optional filters
const getAllHospitals = async (filters = {}) => {
    try {
        const collection = await getHospitalsCollection();
        const query = {};

        // Apply filters
        if (filters.hospitalType) {
            query.hospitalType = filters.hospitalType;
        }

        if (filters.location) {
            query.location = { $regex: filters.location, $options: 'i' };
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
                { hospitalName: { $regex: filters.search, $options: 'i' } },
                { location: { $regex: filters.search, $options: 'i' } },
                { departments: { $regex: filters.search, $options: 'i' } },
                { specializations: { $regex: filters.search, $options: 'i' } }
            ];
        }

        const hospitals = await collection.find(query).sort({ createdAt: -1 }).toArray();
        console.log(`✅ Retrieved ${hospitals.length} hospitals from database`);
        
        return hospitals;
    } catch (error) {
        console.error('❌ Error getting hospitals:', error);
        throw error;
    }
};

// Get hospital by ID
const getHospitalById = async (id) => {
    try {
        const collection = await getHospitalsCollection();
        const hospital = await collection.findOne({ _id: new ObjectId(id) });
        
        if (hospital) {
            console.log('✅ Hospital found:', hospital.hospitalName);
        } else {
            console.log('⚠️ Hospital not found with ID:', id);
        }
        
        return hospital;
    } catch (error) {
        console.error('❌ Error getting hospital by ID:', error);
        throw error;
    }
};

// Update hospital
const updateHospital = async (id, updateData) => {
    try {
        const collection = await getHospitalsCollection();
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { 
                $set: {
                    ...updateData,
                    updatedAt: new Date()
                }
            }
        );
        
        console.log('✅ Hospital updated:', result.modifiedCount, 'document(s) modified');
        return result;
    } catch (error) {
        console.error('❌ Error updating hospital:', error);
        throw error;
    }
};

// Delete hospital
const deleteHospital = async (id) => {
    try {
        const collection = await getHospitalsCollection();
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        
        console.log('✅ Hospital deleted:', result.deletedCount, 'document(s) deleted');
        return result;
    } catch (error) {
        console.error('❌ Error deleting hospital:', error);
        throw error;
    }
};

// Get featured hospitals
const getFeaturedHospitals = async () => {
    try {
        const collection = await getHospitalsCollection();
        const hospitals = await collection
            .find({ featured: true, status: 'active' })
            .sort({ createdAt: -1 })
            .toArray();
        
        console.log(`✅ Retrieved ${hospitals.length} featured hospitals`);
        return hospitals;
    } catch (error) {
        console.error('❌ Error getting featured hospitals:', error);
        throw error;
    }
};

// Search hospitals
const searchHospitals = async (searchTerm) => {
    try {
        const collection = await getHospitalsCollection();
        const hospitals = await collection
            .find({
                $or: [
                    { hospitalName: { $regex: searchTerm, $options: 'i' } },
                    { location: { $regex: searchTerm, $options: 'i' } },
                    { departments: { $regex: searchTerm, $options: 'i' } },
                    { specializations: { $regex: searchTerm, $options: 'i' } },
                    { description: { $regex: searchTerm, $options: 'i' } }
                ]
            })
            .toArray();
        
        console.log(`✅ Found ${hospitals.length} hospitals matching "${searchTerm}"`);
        return hospitals;
    } catch (error) {
        console.error('❌ Error searching hospitals:', error);
        throw error;
    }
};

export {
    insertHospital,
    getAllHospitals,
    getHospitalById,
    updateHospital,
    deleteHospital,
    getFeaturedHospitals,
    searchHospitals
};
