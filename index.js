import express from 'express';
import cors from 'cors';
import { connectDB } from './db/db.js';
import { PORT } from './config/config.js';
import postRoutes from './routes/usersRoutes.js';
import bannerRoutes from './routes/bannerRoutes.js';
import featuredRoutes from './routes/featuredRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




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