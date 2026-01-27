import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

// Insert a new property listing
export const insertProperty = async (propertyData) => {
    try {
        const db = await getDB();
        const collection = db.collection('Properties');
        
        const property = {
            ...propertyData,
            price: parseFloat(propertyData.price) || 0,
            area: parseFloat(propertyData.area) || 0,
            bedrooms: propertyData.bedrooms ? parseInt(propertyData.bedrooms) : null,
            bathrooms: propertyData.bathrooms ? parseInt(propertyData.bathrooms) : null,
            floors: propertyData.floors ? parseInt(propertyData.floors) : null,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const result = await collection.insertOne(property);
        console.log('✅ Property inserted into database:', result.insertedId);
        return result;
    } catch (error) {
        console.error('❌ Error inserting property into database:', error);
        throw error;
    }
};

// Get all properties with optional filters
export const getAllProperties = async (filters = {}) => {
    try {
        const db = await getDB();
        const collection = db.collection('Properties');
        
        const query = {};
        
        if (filters.propertyType) {
            query.propertyType = filters.propertyType;
        }
        
        if (filters.location) {
            query.location = new RegExp(filters.location, 'i');
        }
        
        if (filters.priceMin) {
            query.price = { ...query.price, $gte: parseFloat(filters.priceMin) };
        }
        
        if (filters.priceMax) {
            query.price = { ...query.price, $lte: parseFloat(filters.priceMax) };
        }
        
        if (filters.bedrooms) {
            query.bedrooms = parseInt(filters.bedrooms);
        }
        
        if (filters.featured !== undefined) {
            query.featured = filters.featured === 'true' || filters.featured === true;
        }
        
        if (filters.status) {
            query.status = filters.status;
        }
        
        if (filters.search) {
            query.$or = [
                { title: new RegExp(filters.search, 'i') },
                { propertyType: new RegExp(filters.search, 'i') },
                { location: new RegExp(filters.search, 'i') },
                { description: new RegExp(filters.search, 'i') }
            ];
        }

        const properties = await collection
            .find(query)
            .sort({ createdAt: -1 })
            .toArray();
        
        console.log(`✅ Found ${properties.length} properties in database`);
        return properties;
    } catch (error) {
        console.error('❌ Error fetching properties from database:', error);
        throw error;
    }
};

// Get a single property by ID
export const getPropertyById = async (id) => {
    try {
        const db = await getDB();
        const collection = db.collection('Properties');
        
        const property = await collection.findOne({ _id: new ObjectId(id) });
        
        if (property) {
            console.log('✅ Property found in database:', id);
        } else {
            console.log('⚠️ Property not found in database:', id);
        }
        
        return property;
    } catch (error) {
        console.error('❌ Error fetching property from database:', error);
        throw error;
    }
};

// Update a property
export const updateProperty = async (id, updateData) => {
    try {
        const db = await getDB();
        const collection = db.collection('Properties');
        
        const dataToUpdate = { ...updateData };
        
        if (dataToUpdate.price) {
            dataToUpdate.price = parseFloat(dataToUpdate.price);
        }
        
        if (dataToUpdate.area) {
            dataToUpdate.area = parseFloat(dataToUpdate.area);
        }
        
        if (dataToUpdate.bedrooms) {
            dataToUpdate.bedrooms = parseInt(dataToUpdate.bedrooms);
        }
        
        if (dataToUpdate.bathrooms) {
            dataToUpdate.bathrooms = parseInt(dataToUpdate.bathrooms);
        }
        
        if (dataToUpdate.floors) {
            dataToUpdate.floors = parseInt(dataToUpdate.floors);
        }
        
        dataToUpdate.updatedAt = new Date();

        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: dataToUpdate }
        );

        console.log('✅ Property updated in database:', id);
        return result;
    } catch (error) {
        console.error('❌ Error updating property in database:', error);
        throw error;
    }
};

// Delete a property
export const deleteProperty = async (id) => {
    try {
        const db = await getDB();
        const collection = db.collection('Properties');
        
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        
        console.log('✅ Property deleted from database:', id);
        return result;
    } catch (error) {
        console.error('❌ Error deleting property from database:', error);
        throw error;
    }
};

// Get featured properties
export const getFeaturedProperties = async () => {
    try {
        const db = await getDB();
        const collection = db.collection('Properties');
        
        const properties = await collection
            .find({ featured: true, status: 'active' })
            .sort({ createdAt: -1 })
            .toArray();
        
        console.log(`✅ Found ${properties.length} featured properties in database`);
        return properties;
    } catch (error) {
        console.error('❌ Error fetching featured properties from database:', error);
        throw error;
    }
};

// Search properties
export const searchProperties = async (searchTerm) => {
    try {
        const db = await getDB();
        const collection = db.collection('Properties');
        
        const properties = await collection
            .find({
                $or: [
                    { title: new RegExp(searchTerm, 'i') },
                    { propertyType: new RegExp(searchTerm, 'i') },
                    { location: new RegExp(searchTerm, 'i') },
                    { description: new RegExp(searchTerm, 'i') }
                ]
            })
            .sort({ createdAt: -1 })
            .toArray();
        
        console.log(`✅ Search found ${properties.length} properties in database`);
        return properties;
    } catch (error) {
        console.error('❌ Error searching properties in database:', error);
        throw error;
    }
};

// Get properties by type
export const getPropertiesByType = async (propertyType) => {
    try {
        const db = await getDB();
        const collection = db.collection('Properties');
        
        const properties = await collection
            .find({ propertyType: propertyType, status: 'active' })
            .sort({ createdAt: -1 })
            .toArray();
        
        console.log(`✅ Found ${properties.length} ${propertyType} properties in database`);
        return properties;
    } catch (error) {
        console.error('❌ Error fetching properties by type from database:', error);
        throw error;
    }
};
