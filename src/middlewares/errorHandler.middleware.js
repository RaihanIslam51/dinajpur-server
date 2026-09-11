import { errorResponse } from '../utils/responseFormatter.js';
import { logger } from '../utils/logger.js';

export const errorHandler = (err, req, res, next) => {
    logger.error('Unhandled Error:', err);
    const status = err.status || err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return errorResponse(res, message, status, err);
};

export const notFoundHandler = (req, res) => {
    return errorResponse(res, `Route not found - ${req.originalUrl}`, 404);
};
