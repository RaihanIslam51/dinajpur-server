import express from 'express';
import {
    getAllAmbulances,
    getAmbulanceById,
    createAmbulance,
    updateAmbulance,
    deleteAmbulance,
} from './ambulance.controller.js';

const router = express.Router();

router.get('/', getAllAmbulances);
router.get('/:id', getAmbulanceById);
router.post('/', createAmbulance);
router.put('/:id', updateAmbulance);
router.delete('/:id', deleteAmbulance);

export default router;
