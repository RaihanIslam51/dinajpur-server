/**
 * Hospital Controller
 */
import {
    getAllHospitalsService,
    getHospitalByIdService,
    createHospitalService,
    updateHospitalService,
    deleteHospitalService
} from './hospital.service.js';
import { formatResponse } from '../../utils/responseFormatter.js';

export const getAllHospitals = async (req, res, next) => {
    try {
        const hospitals = await getAllHospitalsService(req.query);
        res.status(200).json(formatResponse(true, hospitals, 'Hospitals retrieved successfully'));
    } catch (err) {
        next(err);
    }
};

export const getHospitalById = async (req, res, next) => {
    try {
        const hospital = await getHospitalByIdService(req.params.id);
        if (!hospital) {
            return res.status(404).json(formatResponse(false, null, 'Hospital not found'));
        }
        res.status(200).json(formatResponse(true, hospital, 'Hospital details retrieved'));
    } catch (err) {
        next(err);
    }
};

export const createHospital = async (req, res, next) => {
    try {
        if (!req.body.name || !req.body.phone) {
            return res.status(400).json(formatResponse(false, null, 'Hospital name and phone are required'));
        }
        const newHospital = await createHospitalService(req.body);
        res.status(201).json(formatResponse(true, newHospital, 'Hospital created successfully'));
    } catch (err) {
        next(err);
    }
};

export const updateHospital = async (req, res, next) => {
    try {
        const updated = await updateHospitalService(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json(formatResponse(false, null, 'Hospital not found'));
        }
        res.status(200).json(formatResponse(true, updated, 'Hospital updated successfully'));
    } catch (err) {
        next(err);
    }
};

export const deleteHospital = async (req, res, next) => {
    try {
        const success = await deleteHospitalService(req.params.id);
        if (!success) {
            return res.status(404).json(formatResponse(false, null, 'Hospital not found or already deleted'));
        }
        res.status(200).json(formatResponse(true, null, 'Hospital deleted successfully'));
    } catch (err) {
        next(err);
    }
};
