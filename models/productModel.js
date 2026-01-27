import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

// Insert a new product
export const insertProduct = async (productData) => {
    try {
        const db = await getDB();
        const collection = db.collection('Products');
        
        const product = {
            ...productData,
            price: parseFloat(productData.price) || 0,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const result = await collection.insertOne(product);
        console.log('✅ Product inserted into database:', result.insertedId);
        return result;
    } catch (error) {
        console.error('❌ Error inserting product into database:', error);
        throw error;
    }
};

// Get all products with optional filters
export const getAllProducts = async (filters = {}) => {
    try {
        const db = await getDB();
        const collection = db.collection('Products');
        
        const query = {};
        
        if (filters.productType) {
            query.productType = filters.productType;
        }
        
        if (filters.category) {
            query.category = filters.category;
        }
        
        if (filters.location) {
            query.location = new RegExp(filters.location, 'i');
        }
        
        if (filters.searchTerm) {
            query.$or = [
                { productName: new RegExp(filters.searchTerm, 'i') },
                { description: new RegExp(filters.searchTerm, 'i') },
                { category: new RegExp(filters.searchTerm, 'i') }
            ];
        }

        if (filters.status) {
            query.status = filters.status;
        }
        
        const products = await collection.find(query).sort({ createdAt: -1 }).toArray();
        console.log(`✅ Retrieved ${products.length} products from database`);
        return products;
    } catch (error) {
        console.error('❌ Error retrieving products from database:', error);
        throw error;
    }
};

// Get a single product by ID
export const getProductById = async (id) => {
    try {
        const db = await getDB();
        const collection = db.collection('Products');
        
        if (!ObjectId.isValid(id)) {
            throw new Error('Invalid product ID');
        }
        
        const product = await collection.findOne({ _id: new ObjectId(id) });
        
        if (product) {
            console.log('✅ Product retrieved from database:', id);
        } else {
            console.log('⚠️ Product not found:', id);
        }
        
        return product;
    } catch (error) {
        console.error('❌ Error retrieving product from database:', error);
        throw error;
    }
};

// Update a product
export const updateProduct = async (id, updateData) => {
    try {
        const db = await getDB();
        const collection = db.collection('Products');
        
        if (!ObjectId.isValid(id)) {
            throw new Error('Invalid product ID');
        }

        const updatedProduct = {
            ...updateData,
            price: updateData.price ? parseFloat(updateData.price) : undefined,
            updatedAt: new Date()
        };

        // Remove undefined values
        Object.keys(updatedProduct).forEach(key => 
            updatedProduct[key] === undefined && delete updatedProduct[key]
        );

        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updatedProduct }
        );
        
        console.log('✅ Product updated in database:', id);
        return result;
    } catch (error) {
        console.error('❌ Error updating product in database:', error);
        throw error;
    }
};

// Delete a product
export const deleteProduct = async (id) => {
    try {
        const db = await getDB();
        const collection = db.collection('Products');
        
        if (!ObjectId.isValid(id)) {
            throw new Error('Invalid product ID');
        }
        
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        console.log('✅ Product deleted from database:', id);
        return result;
    } catch (error) {
        console.error('❌ Error deleting product from database:', error);
        throw error;
    }
};
