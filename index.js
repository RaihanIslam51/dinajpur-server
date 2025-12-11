import express from 'express';
import cors from 'cors';
import { connectDB } from './db/db.js';
import { PORT } from './config/config.js';
import postRoutes from './routes/usersRoutes.js';
import bannerRoutes from './routes/bannerRoutes.js';
import featuredRoutes from './routes/featuredRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();

// Configure CORS to allow all origins
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control'],
    credentials: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to ensure database connection for each request
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({
            success: false,
            message: 'Database connection failed',
            error: error.message
        });
    }
});


app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use('/api/users', postRoutes);
app.use('/api/banners', bannerRoutes);
app.use('/api/featured', featuredRoutes);
app.use('/api/categories', categoryRoutes);














const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

startServer();

export default app;