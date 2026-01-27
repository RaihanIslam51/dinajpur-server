import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

// Get diagnostic centers collection
const getDiagnosticCentersCollection = async () => {
    const db = await getDB();
    return db.collection('DiagnosticCenters');
};

// Insert new diagnostic center
const insertDiagnosticCenter = async (diagnosticCenterData) => {
    try {
        const collection = await getDiagnosticCentersCollection();
        const result = await collection.insertOne({
            ...diagnosticCenterData,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        console.log('✅ Diagnostic center inserted into database:', result.insertedId);
        return result;
    } catch (error) {
        console.error('❌ Error inserting diagnostic center:', error);
        throw error;
    }
};

// Get all diagnostic centers with optional filters
const getAllDiagnosticCenters = async (filters = {}) => {
    try {
        const collection = await getDiagnosticCentersCollection();
        const query = {};

        // Apply filters
        if (filters.centerType) {
            query.centerType = filters.centerType;
        }

        if (filters.location) {
            query.location = { $regex: filters.location, $options: 'i' };
        }

        if (filters.services) {
            query.services = { $in: [filters.services] };
        }

        if (filters.emergencyService === true) {
            query.emergencyService = true;
        }

        if (filters.homeCollection === true) {
            query.homeCollection = true;
        }

        if (filters.status) {
            query.status = filters.status;
        }

        if (filters.featured === true) {
            query.featured = true;
        }

        const diagnosticCenters = await collection.find(query).sort({ createdAt: -1 }).toArray();
        console.log(`✅ ${diagnosticCenters.length} diagnostic centers found in database`);
        return diagnosticCenters;
    } catch (error) {
        console.error('❌ Error fetching diagnostic centers:', error);
        throw error;
    }
};

// Get diagnostic center by ID
const getDiagnosticCenterById = async (id) => {
    try {
        const collection = await getDiagnosticCentersCollection();
        const diagnosticCenter = await collection.findOne({ _id: new ObjectId(id) });

        if (diagnosticCenter) {
            console.log('✅ Diagnostic center found by ID:', id);
        } else {
            console.log('⚠️ Diagnostic center not found by ID:', id);
        }

        return diagnosticCenter;
    } catch (error) {
        console.error('❌ Error fetching diagnostic center by ID:', error);
        throw error;
    }
};

// Update diagnostic center
const updateDiagnosticCenter = async (id, updateData) => {
    try {
        const collection = await getDiagnosticCentersCollection();
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    ...updateData,
                    updatedAt: new Date()
                }
            }
        );

        if (result.modifiedCount > 0) {
            console.log('✅ Diagnostic center updated in database:', id);
        } else {
            console.log('⚠️ Diagnostic center not found or no changes made:', id);
        }

        return result;
    } catch (error) {
        console.error('❌ Error updating diagnostic center:', error);
        throw error;
    }
};

// Delete diagnostic center
const deleteDiagnosticCenter = async (id) => {
    try {
        const collection = await getDiagnosticCentersCollection();
        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount > 0) {
            console.log('✅ Diagnostic center deleted from database:', id);
        } else {
            console.log('⚠️ Diagnostic center not found for deletion:', id);
        }

        return result;
    } catch (error) {
        console.error('❌ Error deleting diagnostic center:', error);
        throw error;
    }
};

// Get featured diagnostic centers
const getFeaturedDiagnosticCenters = async () => {
    try {
        const collection = await getDiagnosticCentersCollection();
        const featuredDiagnosticCenters = await collection.find({ featured: true, status: 'active' }).sort({ createdAt: -1 }).toArray();
        console.log(`✅ ${featuredDiagnosticCenters.length} featured diagnostic centers found`);
        return featuredDiagnosticCenters;
    } catch (error) {
        console.error('❌ Error fetching featured diagnostic centers:', error);
        throw error;
    }
};

// Search diagnostic centers
const searchDiagnosticCenters = async (searchTerm) => {
    try {
        const collection = await getDiagnosticCentersCollection();
        const query = {
            $or: [
                { centerName: { $regex: searchTerm, $options: 'i' } },
                { centerType: { $regex: searchTerm, $options: 'i' } },
                { location: { $regex: searchTerm, $options: 'i' } },
                { services: { $in: [new RegExp(searchTerm, 'i')] } },
                { description: { $regex: searchTerm, $options: 'i' } }
            ],
            status: 'active'
        };

        const diagnosticCenters = await collection.find(query).sort({ createdAt: -1 }).toArray();
        console.log(`✅ ${diagnosticCenters.length} diagnostic centers found for search term: "${searchTerm}"`);
        return diagnosticCenters;
    } catch (error) {
        console.error('❌ Error searching diagnostic centers:', error);
        throw error;
    }
};

// Get diagnostic centers by location
const getDiagnosticCentersByLocation = async (location) => {
    try {
        const collection = await getDiagnosticCentersCollection();
        const diagnosticCenters = await collection.find({
            location: { $regex: location, $options: 'i' },
            status: 'active'
        }).sort({ createdAt: -1 }).toArray();

        console.log(`✅ ${diagnosticCenters.length} diagnostic centers found for location: "${location}"`);
        return diagnosticCenters;
    } catch (error) {
        console.error('❌ Error fetching diagnostic centers by location:', error);
        throw error;
    }
};

// Get diagnostic centers by service
const getDiagnosticCentersByService = async (service) => {
    try {
        const collection = await getDiagnosticCentersCollection();
        const diagnosticCenters = await collection.find({
            services: { $in: [new RegExp(service, 'i')] },
            status: 'active'
        }).sort({ createdAt: -1 }).toArray();

        console.log(`✅ ${diagnosticCenters.length} diagnostic centers found for service: "${service}"`);
        return diagnosticCenters;
    } catch (error) {
        console.error('❌ Error fetching diagnostic centers by service:', error);
        throw error;
    }
};

export {
    insertDiagnosticCenter,
    getAllDiagnosticCenters,
    getDiagnosticCenterById,
    updateDiagnosticCenter,
    deleteDiagnosticCenter,
    getFeaturedDiagnosticCenters,
    searchDiagnosticCenters,
    getDiagnosticCentersByLocation,
    getDiagnosticCentersByService
};