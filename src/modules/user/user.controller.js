/**
 * User Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateUser } from './user.validation.js';
import {
    getAllUsersService,
    getUserByIdService,
    createUserService
} from './user.service.js';

export const getUsers = async (req, res) => {
    try {
        const items = await getAllUsersService(req.query);
        return successResponse(res, items, 'User items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch user items', 500, error);
    }
};

export const getUserById = async (req, res) => {
    try {
        const item = await getUserByIdService(req.params.id);
        if (!item) return errorResponse(res, 'User not found', 404);
        return successResponse(res, item, 'User details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching user detail', 500, error);
    }
};

export const createUser = async (req, res) => {
    try {
        const validation = validateUser(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const created = await createUserService(req.body);
        return successResponse(res, created, 'User created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create user', 500, error);
    }
};
