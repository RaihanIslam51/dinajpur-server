/**
 * DiagnosticCenter Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateDiagnosticCenter } from './diagnosticCenter.validation.js';
import {
    getAllDiagnosticCentersService,
    getDiagnosticCenterByIdService,
    createDiagnosticCenterService,
    updateDiagnosticCenterService,
    deleteDiagnosticCenterService
} from './diagnosticCenter.service.js';

export const getDiagnosticCenters = async (req, res) => {
    try {
        const items = await getAllDiagnosticCentersService(req.query);
        return successResponse(res, items, 'DiagnosticCenter items retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch diagnosticCenter items', 500, error);
    }
};

export const getDiagnosticCenterById = async (req, res) => {
    try {
        const item = await getDiagnosticCenterByIdService(req.params.id);
        if (!item) return errorResponse(res, 'DiagnosticCenter not found', 404);
        return successResponse(res, item, 'DiagnosticCenter details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching diagnosticCenter detail', 500, error);
    }
};

export const createDiagnosticCenter = async (req, res) => {
    try {
        const validation = validateDiagnosticCenter(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const created = await createDiagnosticCenterService(req.body);
        return successResponse(res, created, 'DiagnosticCenter created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create diagnosticCenter', 500, error);
    }
};

export const updateDiagnosticCenter = async (req, res) => {
    try {
        const updated = await updateDiagnosticCenterService(req.params.id, req.body);
        if (!updated) return errorResponse(res, 'DiagnosticCenter not found', 404);
        return successResponse(res, updated, 'DiagnosticCenter updated successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to update diagnosticCenter', 500, error);
    }
};

export const deleteDiagnosticCenter = async (req, res) => {
    try {
        const deleted = await deleteDiagnosticCenterService(req.params.id);
        if (!deleted) return errorResponse(res, 'DiagnosticCenter not found', 404);
        return successResponse(res, null, 'DiagnosticCenter deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete diagnosticCenter', 500, error);
    }
};
