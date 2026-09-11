/**
 * BloodService Controller
 */
import {
    getAllBloodServicesService,
    getBloodServiceByIdService,
    createBloodServiceService,
    updateBloodServiceService,
    deleteBloodServiceService
} from './bloodService.service.js';
import { formatResponse } from '../../utils/responseFormatter.js';

export const getBloodServices = async (req, res, next) => {
    try {
        const items = await getAllBloodServicesService(req.query);
        res.status(200).json(formatResponse(true, items, 'Blood service records retrieved successfully'));
    } catch (err) {
        next(err);
    }
};

export const getBloodServiceById = async (req, res, next) => {
    try {
        const item = await getBloodServiceByIdService(req.params.id);
        if (!item) {
            return res.status(404).json(formatResponse(false, null, 'Blood service record not found'));
        }
        res.status(200).json(formatResponse(true, item, 'Blood service details retrieved'));
    } catch (err) {
        next(err);
    }
};

export const createBloodService = async (req, res, next) => {
    try {
        if (!req.body.name || !req.body.contactNumber || !req.body.bloodGroup) {
            return res.status(400).json(formatResponse(false, null, 'Donor name, blood group, and contact number are required'));
        }
        const newRecord = await createBloodServiceService(req.body);
        res.status(201).json(formatResponse(true, newRecord, 'Blood service record created successfully'));
    } catch (err) {
        next(err);
    }
};

export const updateBloodService = async (req, res, next) => {
    try {
        const updated = await updateBloodServiceService(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json(formatResponse(false, null, 'Blood service record not found'));
        }
        res.status(200).json(formatResponse(true, updated, 'Blood service record updated successfully'));
    } catch (err) {
        next(err);
    }
};

export const deleteBloodService = async (req, res, next) => {
    try {
        const success = await deleteBloodServiceService(req.params.id);
        if (!success) {
            return res.status(404).json(formatResponse(false, null, 'Blood service record not found or already deleted'));
        }
        res.status(200).json(formatResponse(true, null, 'Blood service record deleted successfully'));
    } catch (err) {
        next(err);
    }
};
