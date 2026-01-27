import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

// Get courier services collection
const getCourierServicesCollection = async () => {
    const db = await getDB();
    return db.collection('CourierServices');
};

// Insert new courier service
const insertCourierService = async (courierServiceData) => {
    try {
        const collection = await getCourierServicesCollection();
        const result = await collection.insertOne({
            ...courierServiceData,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        console.log('✅ Courier service inserted into database:', result.insertedId);
        return result;
    } catch (error) {
        console.error('❌ Error inserting courier service:', error);
        throw error;
    }
};

// Get all courier services with optional filters
const getAllCourierServices = async (filters = {}) => {
    try {
        const collection = await getCourierServicesCollection();
        const query = {};

        // Apply filters
        if (filters.serviceType) {
            query.serviceType = filters.serviceType;
        }

        if (filters.deliveryArea) {
            query.deliveryAreas = { $in: [filters.deliveryArea] };
        }

        if (filters.deliveryTime) {
            query.deliveryTime = filters.deliveryTime;
        }

        if (filters.companyName) {
            query.companyName = { $regex: filters.companyName, $options: 'i' };
        }

        if (filters.status) {
            query.status = filters.status;
        }

        if (filters.featured === true) {
            query.featured = true;
        }

        const courierServices = await collection.find(query).sort({ createdAt: -1 }).toArray();
        console.log(`✅ ${courierServices.length} courier services found in database`);
        return courierServices;
    } catch (error) {
        console.error('❌ Error fetching courier services:', error);
        throw error;
    }
};

// Get courier service by ID
const getCourierServiceById = async (id) => {
    try {
        const collection = await getCourierServicesCollection();
        const courierService = await collection.findOne({ _id: new ObjectId(id) });

        if (courierService) {
            console.log('✅ Courier service found by ID:', id);
        } else {
            console.log('⚠️ Courier service not found by ID:', id);
        }

        return courierService;
    } catch (error) {
        console.error('❌ Error fetching courier service by ID:', error);
        throw error;
    }
};

// Update courier service
const updateCourierService = async (id, updateData) => {
    try {
        const collection = await getCourierServicesCollection();
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
            console.log('✅ Courier service updated in database:', id);
        } else {
            console.log('⚠️ Courier service not found or no changes made:', id);
        }

        return result;
    } catch (error) {
        console.error('❌ Error updating courier service:', error);
        throw error;
    }
};

// Delete courier service
const deleteCourierService = async (id) => {
    try {
        const collection = await getCourierServicesCollection();
        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount > 0) {
            console.log('✅ Courier service deleted from database:', id);
        } else {
            console.log('⚠️ Courier service not found for deletion:', id);
        }

        return result;
    } catch (error) {
        console.error('❌ Error deleting courier service:', error);
        throw error;
    }
};

// Get featured courier services
const getFeaturedCourierServices = async () => {
    try {
        const collection = await getCourierServicesCollection();
        const featuredCourierServices = await collection.find({ featured: true, status: 'active' }).sort({ createdAt: -1 }).toArray();
        console.log(`✅ ${featuredCourierServices.length} featured courier services found`);
        return featuredCourierServices;
    } catch (error) {
        console.error('❌ Error fetching featured courier services:', error);
        throw error;
    }
};

// Search courier services
const searchCourierServices = async (searchTerm) => {
    try {
        const collection = await getCourierServicesCollection();
        const query = {
            $or: [
                { companyName: { $regex: searchTerm, $options: 'i' } },
                { serviceType: { $regex: searchTerm, $options: 'i' } },
                { deliveryAreas: { $in: [new RegExp(searchTerm, 'i')] } },
                { description: { $regex: searchTerm, $options: 'i' } }
            ],
            status: 'active'
        };

        const courierServices = await collection.find(query).sort({ createdAt: -1 }).toArray();
        console.log(`✅ ${courierServices.length} courier services found for search term: "${searchTerm}"`);
        return courierServices;
    } catch (error) {
        console.error('❌ Error searching courier services:', error);
        throw error;
    }
};

// Get courier services by delivery area
const getCourierServicesByArea = async (area) => {
    try {
        const collection = await getCourierServicesCollection();
        const courierServices = await collection.find({
            deliveryAreas: { $in: [new RegExp(area, 'i')] },
            status: 'active'
        }).sort({ createdAt: -1 }).toArray();

        console.log(`✅ ${courierServices.length} courier services found for area: "${area}"`);
        return courierServices;
    } catch (error) {
        console.error('❌ Error fetching courier services by area:', error);
        throw error;
    }
};

export {
    insertCourierService,
    getAllCourierServices,
    getCourierServiceById,
    updateCourierService,
    deleteCourierService,
    getFeaturedCourierServices,
    searchCourierServices,
    getCourierServicesByArea
};