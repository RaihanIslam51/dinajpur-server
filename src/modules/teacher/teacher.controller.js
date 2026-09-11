/**
 * Teacher Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateTeacher } from './teacher.validation.js';
import {
    getAllTeachersService,
    getTeacherByIdService,
    createTeacherService,
    updateTeacherService,
    deleteTeacherService
} from './teacher.service.js';

export const getTeachers = async (req, res) => {
    try {
        const items = await getAllTeachersService(req.query);
        return successResponse(res, items, 'Teacher items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch teacher items', 500, error);
    }
};

export const getTeacherById = async (req, res) => {
    try {
        const item = await getTeacherByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Teacher not found', 404);
        return successResponse(res, item, 'Teacher details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching teacher detail', 500, error);
    }
};

export const createTeacher = async (req, res) => {
    try {
        const validation = validateTeacher(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const created = await createTeacherService(req.body);
        return successResponse(res, created, 'Teacher created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create teacher', 500, error);
    }
};

export const updateTeacher = async (req, res) => {
    try {
        const updated = await updateTeacherService(req.params.id, req.body);
        if (!updated) return errorResponse(res, 'Teacher not found', 404);
        return successResponse(res, updated, 'Teacher updated successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to update teacher', 500, error);
    }
};

export const deleteTeacher = async (req, res) => {
    try {
        const deleted = await deleteTeacherService(req.params.id);
        if (!deleted) return errorResponse(res, 'Teacher not found', 404);
        return successResponse(res, null, 'Teacher deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete teacher', 500, error);
    }
};
