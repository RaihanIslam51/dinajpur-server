import express from 'express';
import {
    getAllVeterinary,
    getVeterinaryById,
    createVeterinary,
    updateVeterinary,
    deleteVeterinary,
} from './veterinary.controller.js';

const router = express.Router();

router.get('/', getAllVeterinary);
router.get('/:id', getVeterinaryById);
router.post('/', createVeterinary);
router.put('/:id', updateVeterinary);
router.delete('/:id', deleteVeterinary);

export default router;
