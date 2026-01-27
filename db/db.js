import { MongoClient, ObjectId } from 'mongodb';
import { mongoURI } from '../config/config.js';

let db;
let client;

export const connectDB = async () => {
    if (db) {
        console.log('Using existing database connection');
        return db;
    }

    try {
        if (!mongoURI) {
            throw new Error('MONGO_URI environment variable is not defined. Please set it in Vercel dashboard.');
        }
        
        console.log('Connecting to MongoDB...');
        client = new MongoClient(mongoURI, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        await client.connect();
        db = client.db('saidpurcity');
        console.log('MongoDB connected successfully to database: saidpurcity');
        return db;
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        console.error('MONGO_URI exists:', !!mongoURI);
        throw error;
    }
};

export const getDB = async () => {
    if (!db) {
        console.log('Database not connected, connecting now...');
        await connectDB();
    }
    
    if (!db) {
        throw new Error('Failed to establish database connection. Check MONGO_URI environment variable.');
    }
    
    return db;
};

export { ObjectId };