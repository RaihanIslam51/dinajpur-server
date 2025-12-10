import dotenv from 'dotenv';

dotenv.config();

export const mongoURI = process.env.MONGO_URI;
export const PORT = process.env.PORT || 5000;
export const NODE_ENV = process.env.NODE_ENV || 'development';