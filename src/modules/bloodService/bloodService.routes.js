/**
 * BloodService API Routes
 */
import express from 'express';
import {
    getBloodServices,
    getBloodServiceById,
    createBloodService,
    updateBloodService,
    deleteBloodService
} from './bloodService.controller.js';

const router = express.Router();

router.get('/', getBloodServices);
router.get('/:id', getBloodServiceById);
router.post('/', createBloodService);
router.put('/:id', updateBloodService);
router.delete('/:id', deleteBloodService);

export default router;
