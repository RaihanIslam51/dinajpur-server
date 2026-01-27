import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

// Get bus services collection
const getBusServicesCollection = async () => {
    const db = await getDB();
    return db.collection('BusServices');
};

// Insert new bus service
const insertBusService = async (busServiceData) => {
    try {
        const collection = await getBusServicesCollection();
        const result = await collection.insertOne({
            ...busServiceData,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        
        console.log('✅ Bus service inserted into database:', result.insertedId);
        return result;
    } catch (error) {
        console.error('❌ Error inserting bus service:', error);
        throw error;
    }
};

// Get all bus services with optional filters
const getAllBusServices = async (filters = {}) => {
    try {
        const collection = await getBusServicesCollection();
        const query = {};

        // Apply filters
        if (filters.busType) {
            query.busType = filters.busType;
        }

        if (filters.route) {
            query.route = { $regex: filters.route, $options: 'i' };
        }

        if (filters.departurePoint) {
            query.departurePoint = { $regex: filters.departurePoint, $options: 'i' };
        }

        if (filters.destinationPoint) {
            query.destinationPoint = { $regex: filters.destinationPoint, $options: 'i' };
        }

        if (filters.maxFare) {
            query.fare = { $lte: parseInt(filters.maxFare) };
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
                { busServiceName: { $regex: filters.search, $options: 'i' } },
                { route: { $regex: filters.search, $options: 'i' } },
                { departurePoint: { $regex: filters.search, $options: 'i' } },
                { destinationPoint: { $regex: filters.search, $options: 'i' } },
                { operatorName: { $regex: filters.search, $options: 'i' } }
            ];
        }

        const busServices = await collection.find(query).sort({ createdAt: -1 }).toArray();
        console.log(`✅ Retrieved ${busServices.length} bus services from database`);
        
        return busServices;
    } catch (error) {
        console.error('❌ Error getting bus services:', error);
        throw error;
    }
};

// Get bus service by ID
const getBusServiceById = async (id) => {
    try {
        const collection = await getBusServicesCollection();
        const busService = await collection.findOne({ _id: new ObjectId(id) });
        
        if (busService) {
            console.log('✅ Bus service found:', busService.busServiceName);
        } else {
            console.log('⚠️ Bus service not found with ID:', id);
        }
        
        return busService;
    } catch (error) {
        console.error('❌ Error getting bus service by ID:', error);
        throw error;
    }
};

// Update bus service
const updateBusService = async (id, updateData) => {
    try {
        const collection = await getBusServicesCollection();
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { 
                $set: {
                    ...updateData,
                    updatedAt: new Date()
                }
            }
        );
        
        console.log('✅ Bus service updated:', result.modifiedCount, 'document(s) modified');
        return result;
    } catch (error) {
        console.error('❌ Error updating bus service:', error);
        throw error;
    }
};

// Delete bus service
const deleteBusService = async (id) => {
    try {
        const collection = await getBusServicesCollection();
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        
        console.log('✅ Bus service deleted:', result.deletedCount, 'document(s) deleted');
        return result;
    } catch (error) {
        console.error('❌ Error deleting bus service:', error);
        throw error;
    }
};

// Get featured bus services
const getFeaturedBusServices = async () => {
    try {
        const collection = await getBusServicesCollection();
        const busServices = await collection
            .find({ featured: true, status: 'active' })
            .sort({ createdAt: -1 })
            .toArray();
        
        console.log(`✅ Retrieved ${busServices.length} featured bus services`);
        return busServices;
    } catch (error) {
        console.error('❌ Error getting featured bus services:', error);
        throw error;
    }
};

// Search bus services
const searchBusServices = async (searchTerm) => {
    try {
        const collection = await getBusServicesCollection();
        const busServices = await collection
            .find({
                $or: [
                    { busServiceName: { $regex: searchTerm, $options: 'i' } },
                    { route: { $regex: searchTerm, $options: 'i' } },
                    { departurePoint: { $regex: searchTerm, $options: 'i' } },
                    { destinationPoint: { $regex: searchTerm, $options: 'i' } },
                    { operatorName: { $regex: searchTerm, $options: 'i' } },
                    { description: { $regex: searchTerm, $options: 'i' } }
                ]
            })
            .toArray();
        
        console.log(`✅ Found ${busServices.length} bus services matching "${searchTerm}"`);
        return busServices;
    } catch (error) {
        console.error('❌ Error searching bus services:', error);
        throw error;
    }
};

// Get bus services by route
const getBusServicesByRoute = async (departurePoint, destinationPoint) => {
    try {
        const collection = await getBusServicesCollection();
        const query = { status: 'active' };
        
        if (departurePoint) {
            query.departurePoint = { $regex: departurePoint, $options: 'i' };
        }
        
        if (destinationPoint) {
            query.destinationPoint = { $regex: destinationPoint, $options: 'i' };
        }
        
        const busServices = await collection.find(query).toArray();
        console.log(`✅ Found ${busServices.length} bus services for the route`);
        
        return busServices;
    } catch (error) {
        console.error('❌ Error getting bus services by route:', error);
        throw error;
    }
};

export {
    insertBusService,
    getAllBusServices,
    getBusServiceById,
    updateBusService,
    deleteBusService,
    getFeaturedBusServices,
    searchBusServices,
    getBusServicesByRoute
};
