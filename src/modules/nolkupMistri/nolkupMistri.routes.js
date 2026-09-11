/**
 * Nolkup Mistri (Tube-well & Plumbing Technician) Express Router
 */
import express from 'express';
import {
    getAllNolkupMistris,
    getNolkupMistriById,
    createNolkupMistri,
    updateNolkupMistriStatus,
    deleteNolkupMistri
} from './nolkupMistri.controller.js';

const router = express.Router();

router.get('/', getAllNolkupMistris);
router.get('/:id', getNolkupMistriById);
router.post('/', createNolkupMistri);
router.patch('/:id/status', updateNolkupMistriStatus);
router.delete('/:id', deleteNolkupMistri);

export default router;
