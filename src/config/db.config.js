import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT || 5000,
    mongoUri: process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/dinajpur_city',
    jwtSecret: process.env.JWT_SECRET || 'smart_city_secret_key_2026',
    nodeEnv: process.env.NODE_ENV || 'development'
};
