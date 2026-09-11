import app from './src/app.js';
import { connectDB } from './src/database/db.js';
import { config } from './src/config/db.config.js';
import { logger } from './src/utils/logger.js';

const PORT = config.port;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT} in ${config.nodeEnv} mode`);
            logger.info(`Smart City 26 Category API endpoints active at http://localhost:${PORT}/api`);
        });
    } catch (error) {
        logger.error('Failed to start server:', error);
        process.exit(1);
    }
};

if (process.env.VERCEL !== '1' && !process.env.VERCEL_ENV) {
    startServer();
}

export default app;
