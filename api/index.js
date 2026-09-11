import app from '../index.js';
import { connectDB } from '../src/database/db.js';

// Establish database connection
let isConnected = false;

const handler = async (req, res) => {
    // Connect to database if not already connected
    if (!isConnected) {
        try {
            console.log('Attempting to connect to database...');
            await connectDB();
            isConnected = true;
            console.log('Database connected successfully in serverless function');
        } catch (error) {
            console.error('Database connection failed in serverless function:', error);
            return res.status(500).json({
                success: false,
                message: 'Database connection failed',
                error: process.env.NODE_ENV === 'development' ? error.message : undefined
            });
        }
    }
    
    // Handle the request with Express app
    try {
        return app(req, res);
    } catch (error) {
        console.error('Error handling request:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

export default handler;
