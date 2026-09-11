import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import { config } from '../config/db.config.js';
import { logger } from '../utils/logger.js';

let db = null;
let client = null;

// Disable Mongoose buffering so API endpoints return fallback seed data instantly if MongoDB Atlas DNS is offline
mongoose.set('bufferCommands', false);

export const connectDB = async () => {
    if (db && mongoose.connection.readyState === 1) return db;
    
    try {
        if (!client) {
            client = new MongoClient(config.mongoUri, { serverSelectionTimeoutMS: 3000 });
            await client.connect();
            db = client.db();
            logger.info('MongoDB Connected successfully to Smart City Database');
        }
    } catch (err) {
        logger.warn('MongoDB Atlas connection skipped, using fallback:', err.message);
    }

    try {
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(config.mongoUri, { serverSelectionTimeoutMS: 3000 });
            logger.info('Mongoose Connected to MongoDB Atlas');
        }
    } catch (err) {
        logger.warn('Mongoose connection skipped, using fallback:', err.message);
    }

    return db;
};

export const getDB = () => db;
