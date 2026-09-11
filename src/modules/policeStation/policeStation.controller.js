/**
 * PoliceStation Controller
 */
import {
    getAllPoliceStationsService,
    getPoliceStationByIdService,
    createPoliceStationService,
    updatePoliceStationService,
    deletePoliceStationService
} from './policeStation.service.js';
import { formatResponse } from '../../utils/responseFormatter.js';

export const getPoliceStations = async (req, res, next) => {
    try {
        const items = await getAllPoliceStationsService(req.query);
        res.status(200).json(formatResponse(true, items, 'Police station records retrieved successfully'));
    } catch (err) {
        next(err);
    }
};

export const getPoliceStationById = async (req, res, next) => {
    try {
        const item = await getPoliceStationByIdService(req.params.id);
        if (!item) {
            return res.status(404).json(formatResponse(false, null, 'Police station record not found'));
        }
        res.status(200).json(formatResponse(true, item, 'Police station details retrieved'));
    } catch (err) {
        next(err);
    }
};

export const createPoliceStation = async (req, res, next) => {
    try {
        if (!req.body.name || !req.body.phone) {
            return res.status(400).json(formatResponse(false, null, 'Station name and phone number are required'));
        }
        const newStation = await createPoliceStationService(req.body);
        res.status(201).json(formatResponse(true, newStation, 'Police station created successfully'));
    } catch (err) {
        next(err);
    }
};

export const updatePoliceStation = async (req, res, next) => {
    try {
        const updated = await updatePoliceStationService(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json(formatResponse(false, null, 'Police station record not found'));
        }
        res.status(200).json(formatResponse(true, updated, 'Police station record updated successfully'));
    } catch (err) {
        next(err);
    }
};

export const deletePoliceStation = async (req, res, next) => {
    try {
        const success = await deletePoliceStationService(req.params.id);
        if (!success) {
            return res.status(404).json(formatResponse(false, null, 'Police station record not found or already deleted'));
        }
        res.status(200).json(formatResponse(true, null, 'Police station record deleted successfully'));
    } catch (err) {
        next(err);
    }
};
