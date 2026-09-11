/**
 * PoliceStation API Routes
 */
import express from 'express';
import {
    getPoliceStations,
    getPoliceStationById,
    createPoliceStation,
    updatePoliceStation,
    deletePoliceStation
} from './policeStation.controller.js';

const router = express.Router();

router.get('/', getPoliceStations);
router.get('/:id', getPoliceStationById);
router.post('/', createPoliceStation);
router.put('/:id', updatePoliceStation);
router.delete('/:id', deletePoliceStation);

export default router;
