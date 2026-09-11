/**
 * TrainService Routes
 * Mounted at: /api/train-services
 */
import { Router } from 'express';
import {
    getTrainServices,
    getTrainServiceById,
    createTrainService,
    updateTrainService,
    deleteTrainService
} from './trainService.controller.js';

const router = Router();

router.get('/', getTrainServices);
router.get('/:id', getTrainServiceById);
router.post('/', createTrainService);
router.put('/:id', updateTrainService);
router.delete('/:id', deleteTrainService);

export default router;
