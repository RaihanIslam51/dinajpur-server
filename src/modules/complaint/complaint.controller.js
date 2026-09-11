/**
 * Complaint Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import { validateComplaint } from './complaint.validation.js';
import {
    getAllComplaintsService,
    createComplaintService,
    voteComplaintService,
    updateComplaintStatusService,
    deleteComplaintService
} from './complaint.service.js';

export const getComplaints = async (req, res) => {
    try {
        const items = await getAllComplaintsService(req.query);
        return successResponse(res, items, 'Complaints retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch complaints', 500, error);
    }
};

export const createComplaint = async (req, res) => {
    try {
        const validation = validateComplaint(req.body);
        if (!validation.isValid) {
            return errorResponse(res, 'Validation error', 400, validation.errors);
        }
        const created = await createComplaintService(req.body);
        return successResponse(res, created, 'Complaint submitted successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to submit complaint', 500, error);
    }
};

export const voteComplaint = async (req, res) => {
    try {
        const { voteType, previousVote } = req.body;
        if (!['agree', 'disagree'].includes(voteType)) {
            return errorResponse(res, 'Invalid vote type', 400);
        }
        const updated = await voteComplaintService(req.params.id, voteType, previousVote);
        if (!updated) return errorResponse(res, 'Complaint not found', 404);
        return successResponse(res, updated, 'Vote recorded successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to record vote', 500, error);
    }
};

export const updateComplaintStatus = async (req, res) => {
    try {
        const { status, adminNotes } = req.body;
        const updated = await updateComplaintStatusService(req.params.id, status, adminNotes);
        if (!updated) return errorResponse(res, 'Complaint not found', 404);
        return successResponse(res, updated, 'Complaint status updated successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to update complaint status', 500, error);
    }
};

export const deleteComplaint = async (req, res) => {
    try {
        const deleted = await deleteComplaintService(req.params.id);
        if (!deleted) return errorResponse(res, 'Complaint not found', 404);
        return successResponse(res, null, 'Complaint deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete complaint', 500, error);
    }
};
