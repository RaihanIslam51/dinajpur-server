/**
 * ElectricityOffice Routes
 * Mounted at: /api/electricity-offices
 */
import { Router } from 'express';
import {
    getElectricityOffices,
    getElectricityOfficeById,
    createElectricityOffice,
    updateElectricityOffice,
    deleteElectricityOffice
} from './electricityOffice.controller.js';

const router = Router();

router.get('/', getElectricityOffices);
router.get('/:id', getElectricityOfficeById);
router.post('/', createElectricityOffice);
router.put('/:id', updateElectricityOffice);
router.delete('/:id', deleteElectricityOffice);

export default router;
