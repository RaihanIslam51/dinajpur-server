import { errorResponse } from '../utils/responseFormatter.js';

export const roleCheck = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return errorResponse(res, 'Forbidden. Insufficient permissions.', 403);
        }
        next();
    };
};
