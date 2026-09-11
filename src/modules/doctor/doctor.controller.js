/**
 * Doctor Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateDoctor } from './doctor.validation.js';
import {
    getAllDoctorsService,
    getDoctorByIdService,
    createDoctorService
} from './doctor.service.js';

export const getDoctors = async (req, res) => {
    try {
        const items = await getAllDoctorsService(req.query);
        return successResponse(res, items, 'Doctor items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch doctor items', 500, error);
    }
};

export const getDoctorById = async (req, res) => {
    try {
        const item = await getDoctorByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Doctor not found', 404);
        return successResponse(res, item, 'Doctor details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching doctor detail', 500, error);
    }
};

export const createDoctor = async (req, res) => {
    try {
        const validation = validateDoctor(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const created = await createDoctorService(req.body);
        return successResponse(res, created, 'Doctor created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create doctor', 500, error);
    }
};
