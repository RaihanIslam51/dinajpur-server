import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

// Get train services collection
const getTrainServicesCollection = async () => {
    const db = await getDB();
    return db.collection('TrainServices');
};

// Insert new train service
const insertTrainService = async (trainServiceData) => {
    try {
        const collection = await getTrainServicesCollection();
        const result = await collection.insertOne({
            ...trainServiceData,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        console.log('✅ Train service inserted into database:', result.insertedId);
        return result;
    } catch (error) {
        console.error('❌ Error inserting train service:', error);
        throw error;
    }
};

// Get all train services with optional filters
const getAllTrainServices = async (filters = {}) => {
    try {
        const collection = await getTrainServicesCollection();
        const query = {};

        // Apply filters
        if (filters.trainType) {
            query.trainType = filters.trainType;
        }

        if (filters.route) {
            query.route = { $regex: filters.route, $options: 'i' };
        }

        if (filters.departureStation) {
            query.departureStation = { $regex: filters.departureStation, $options: 'i' };
        }

        if (filters.arrivalStation) {
            query.arrivalStation = { $regex: filters.arrivalStation, $options: 'i' };
        }

        if (filters.frequency) {
            query.frequency = filters.frequency;
        }

        if (filters.status) {
            query.status = filters.status;
        }

        if (filters.featured === true) {
            query.featured = true;
        }

        const trainServices = await collection.find(query).sort({ createdAt: -1 }).toArray();
        console.log(`✅ ${trainServices.length} train services found in database`);
        return trainServices;
    } catch (error) {
        console.error('❌ Error fetching train services:', error);
        throw error;
    }
};

// Get train service by ID
const getTrainServiceById = async (id) => {
    try {
        const collection = await getTrainServicesCollection();
        const trainService = await collection.findOne({ _id: new ObjectId(id) });

        if (trainService) {
            console.log('✅ Train service found by ID:', id);
        } else {
            console.log('⚠️ Train service not found by ID:', id);
        }

        return trainService;
    } catch (error) {
        console.error('❌ Error fetching train service by ID:', error);
        throw error;
    }
};

// Update train service
const updateTrainService = async (id, updateData) => {
    try {
        const collection = await getTrainServicesCollection();
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
            console.log('✅ Train service updated in database:', id);
        } else {
            console.log('⚠️ Train service not found or no changes made:', id);
        }

        return result;
    } catch (error) {
        console.error('❌ Error updating train service:', error);
        throw error;
    }
};

// Delete train service
const deleteTrainService = async (id) => {
    try {
        const collection = await getTrainServicesCollection();
        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount > 0) {
            console.log('✅ Train service deleted from database:', id);
        } else {
            console.log('⚠️ Train service not found for deletion:', id);
        }

        return result;
    } catch (error) {
        console.error('❌ Error deleting train service:', error);
        throw error;
    }
};

// Get featured train services
const getFeaturedTrainServices = async () => {
    try {
        const collection = await getTrainServicesCollection();
        const featuredTrainServices = await collection.find({ featured: true, status: 'active' }).sort({ createdAt: -1 }).toArray();
        console.log(`✅ ${featuredTrainServices.length} featured train services found`);
        return featuredTrainServices;
    } catch (error) {
        console.error('❌ Error fetching featured train services:', error);
        throw error;
    }
};

// Search train services
const searchTrainServices = async (searchTerm) => {
    try {
        const collection = await getTrainServicesCollection();
        const query = {
            $or: [
                { trainName: { $regex: searchTerm, $options: 'i' } },
                { trainNumber: { $regex: searchTerm, $options: 'i' } },
                { route: { $regex: searchTerm, $options: 'i' } },
                { departureStation: { $regex: searchTerm, $options: 'i' } },
                { arrivalStation: { $regex: searchTerm, $options: 'i' } },
                { description: { $regex: searchTerm, $options: 'i' } }
            ],
            status: 'active'
        };

        const trainServices = await collection.find(query).sort({ createdAt: -1 }).toArray();
        console.log(`✅ ${trainServices.length} train services found for search term: "${searchTerm}"`);
        return trainServices;
    } catch (error) {
        console.error('❌ Error searching train services:', error);
        throw error;
    }
};

// Get train services by route
const getTrainServicesByRoute = async (route) => {
    try {
        const collection = await getTrainServicesCollection();
        const trainServices = await collection.find({
            route: { $regex: route, $options: 'i' },
            status: 'active'
        }).sort({ createdAt: -1 }).toArray();

        console.log(`✅ ${trainServices.length} train services found for route: "${route}"`);
        return trainServices;
    } catch (error) {
        console.error('❌ Error fetching train services by route:', error);
        throw error;
    }
};

export {
    insertTrainService,
    getAllTrainServices,
    getTrainServiceById,
    updateTrainService,
    deleteTrainService,
    getFeaturedTrainServices,
    searchTrainServices,
    getTrainServicesByRoute
};