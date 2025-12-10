import { MongoClient, ObjectId } from 'mongodb';
import { mongoURI } from '../config/config.js';

let db;

export const connectDB = async () => {
    if (db) {
        return db;
    }

    try {
        const client = new MongoClient(mongoURI);
        await client.connect();
        db = client.db('saidpurcity');
        console.log('MongoDB connected successfully');
        return db;
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        throw error;
    }
};

export const getDB = () => {
    if (!db) {
        throw new Error('Database not connected');
    }
    return db;
};

export { ObjectId };