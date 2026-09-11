/**
 * Sanitary Mistri (Sanitary & Bathroom Technician) Express Router
 */
import express from 'express';
import {
    getAllSanitaryMistris,
    getSanitaryMistriById,
    createSanitaryMistri,
    updateSanitaryMistriStatus,
    deleteSanitaryMistri
} from './sanitaryMistri.controller.js';

const router = express.Router();

router.get('/', getAllSanitaryMistris);
router.get('/:id', getSanitaryMistriById);
router.post('/', createSanitaryMistri);
router.patch('/:id/status', updateSanitaryMistriStatus);
router.delete('/:id', deleteSanitaryMistri);

export default router;
