/**
 * Entrepreneur Routes
 * Mounted at: /api/entrepreneurs
 */
import { Router } from 'express';
import {
    getEntrepreneurs,
    getEntrepreneurById,
    createEntrepreneur,
    updateEntrepreneur,
    deleteEntrepreneur
} from './entrepreneur.controller.js';

const router = Router();

router.get('/', getEntrepreneurs);
router.get('/:id', getEntrepreneurById);
router.post('/', createEntrepreneur);
router.put('/:id', updateEntrepreneur);
router.delete('/:id', deleteEntrepreneur);

export default router;
