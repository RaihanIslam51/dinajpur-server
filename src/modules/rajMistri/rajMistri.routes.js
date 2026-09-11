/**
 * Raj Mistri Routes Mapping
 */
import express from 'express';
import {
    getRajMistris,
    getRajMistriById,
    createRajMistri,
    approveRajMistri,
    rejectRajMistri,
    deleteRajMistri
} from './rajMistri.controller.js';

const router = express.Router();

router.get('/', getRajMistris);
router.get('/:id', getRajMistriById);
router.post('/', createRajMistri);
router.patch('/:id/approve', approveRajMistri);
router.patch('/:id/reject', rejectRajMistri);
router.delete('/:id', deleteRajMistri);

export default router;
