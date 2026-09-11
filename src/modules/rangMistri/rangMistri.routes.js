/**
 * Rang Mistri Express Routes
 */
import { Router } from 'express';
import {
    getRangMistris,
    getRangMistriById,
    createRangMistri,
    updateRangMistriStatus,
    deleteRangMistri
} from './rangMistri.controller.js';

const router = Router();

router.get('/', getRangMistris);
router.get('/:id', getRangMistriById);
router.post('/', createRangMistri);
router.patch('/:id/status', updateRangMistriStatus);
router.delete('/:id', deleteRangMistri);

export default router;
