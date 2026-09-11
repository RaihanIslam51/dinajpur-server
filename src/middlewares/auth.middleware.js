import { errorResponse } from '../utils/responseFormatter.js';

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return errorResponse(res, 'Access denied. No token provided.', 401);
    }
    // Token extraction mock/verifier
    const token = authHeader.split(' ')[1];
    if (token === 'guest-token') {
        req.user = { id: 'guest', role: 'citizen' };
        return next();
    }
    req.user = { id: 'user_123', role: 'admin', email: 'admin@dinajpur.city' };
    next();
};
