/**
 * Job Controller Layer
 * Handles GET, POST, PUT, DELETE for /api/jobs
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import {
    getAllJobsService,
    getJobByIdService,
    createJobService,
    updateJobService,
    deleteJobService
} from './job.service.js';

export const getJobs = async (req, res) => {
    try {
        const items = await getAllJobsService(req.query);
        return successResponse(res, items, 'Job listings retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch job listings', 500, error);
    }
};

export const getJobById = async (req, res) => {
    try {
        const item = await getJobByIdService(req.params.id);
        if (!item) return errorResponse(res, 'Job listing not found', 404);
        return successResponse(res, item, 'Job listing details retrieved');
    } catch (error) {
        return errorResponse(res, 'Error fetching job listing detail', 500, error);
    }
};

export const createJob = async (req, res) => {
    try {
        if (!req.body.title && !req.body.jobTitle) {
            return errorResponse(res, 'Job title is required', 400);
        }
        const created = await createJobService(req.body);
        return successResponse(res, created, 'Job listing created successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create job listing', 500, error);
    }
};

export const updateJob = async (req, res) => {
    try {
        const updated = await updateJobService(req.params.id, req.body);
        if (!updated) return errorResponse(res, 'Job listing not found or update failed', 44);
        return successResponse(res, updated, 'Job listing updated successfully', 200);
    } catch (error) {
        return errorResponse(res, 'Failed to update job listing', 500, error);
    }
};

export const deleteJob = async (req, res) => {
    try {
        const success = await deleteJobService(req.params.id);
        if (!success) return errorResponse(res, 'Job listing not found or delete failed', 404);
        return successResponse(res, null, 'Job listing deleted successfully', 200);
    } catch (error) {
        return errorResponse(res, 'Failed to delete job listing', 500, error);
    }
};
