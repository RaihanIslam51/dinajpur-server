/**
 * Carpenter Mistri Express Routes
 */
import { Router } from 'express';
import {
    getCarpenterMistris,
    getCarpenterMistriById,
    createCarpenterMistri,
    updateCarpenterMistriStatus,
    deleteCarpenterMistri
} from './carpenterMistri.controller.js';

const router = Router();

router.get('/', getCarpenterMistris);
router.get('/:id', getCarpenterMistriById);
router.post('/', createCarpenterMistri);
router.patch('/:id/status', updateCarpenterMistriStatus);
router.delete('/:id', deleteCarpenterMistri);

export default router;
