import { MongoClient, ObjectId } from 'mongodb';
import { mongoURI } from '../config/config.js';

let db;
let client;

export const connectDB = async () => {
    if (db) {
        return db;
    }

    try {
        client = new MongoClient(mongoURI, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        await client.connect();
        db = client.db('saidpurcity');
        console.log('MongoDB connected successfully');
        return db;
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        throw error;
    }
};

export const getDB = async () => {
    if (!db) {
        console.log('Database not connected, connecting now...');
        // await connectDB();
    }
    return db;
};

export { ObjectId };