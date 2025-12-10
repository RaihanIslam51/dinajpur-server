import {
    insertUsers,
    getAllUsers,
    getUsersById,
    updateUsers,
    deleteUsers,
    getUserByNameAndPhone,
    updateUserRole as updateUserRoleModel,
    updateUserStatus as updateUserStatusModel,
    getUsersCount
} from '../models/userModel.js';

export const createUsers = async (req, res) => {
    try {
        const { name, phone } = req.body;

        // Validate required fields
        if (!name || !phone) {
            return res.status(400).json({
                success: false,
                message: 'Name and phone number are required',
            });
        }

        // Check if user already exists
        const existingUser = await getUserByNameAndPhone(name, phone);
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User with this name and phone number already exists',
            });
        }

        const postData = {
            ...req.body,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        console.log('Creating user with data:', postData);
        const result = await insertUsers(postData);
        console.log('User created successfully:', result);

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: result,
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const fetchUsers = async (req, res) => {
    try {
        const posts = await getAllUsers();
        res.status(200).json({
            success: true,
            data: posts,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const fetchUsersById = async (req, res) => {
    try {
        const post = await getUsersById(req.params.id);

        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }

        res.status(200).json({
            success: true,
            data: post,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const editUsers = async (req, res) => {
    try {
        const updateData = {
            ...req.body,
            updatedAt: new Date(),
        };

        const result = await updateUsers(req.params.id, updateData);

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Post updated successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const removeUsers = async (req, res) => {
    try {
        const result = await deleteUsers(req.params.id);

        if (result.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'Post not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Post deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { name, phone } = req.body;

        // Validate input
        if (!name || !phone) {
            return res.status(400).json({
                success: false,
                message: 'Name and phone number are required',
            });
        }

        const user = await getUserByNameAndPhone(name, phone);

        if (user) {
            res.status(200).json({
                success: true,
                message: 'Login successful',
                user,
            });
        } else {
            res.status(401).json({
                success: false,
                message: 'Invalid name or phone number. Please check your credentials.',
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateUserRole = async (req, res) => {
    try {
        const { role } = req.body;
        const result = await updateUserRoleModel(req.params.id, role);

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'User role updated successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateUserStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const result = await updateUserStatusModel(req.params.id, status);

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'User status updated successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getTotalUsers = async (req, res) => {
    try {
        const count = await getUsersCount();
        res.status(200).json({
            success: true,
            data: count,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};