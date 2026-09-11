import express from 'express';
import {
    getAllHepatologyController,
    getHepatologyByIdController,
    createHepatologyController,
    updateHepatologyStatusController,
    deleteHepatologyController
} from './hepatology.controller.js';

const router = express.Router();

router.get('/', getAllHepatologyController);
router.get('/:id', getHepatologyByIdController);
router.post('/', createHepatologyController);
router.put('/:id/status', updateHepatologyStatusController);
router.delete('/:id', deleteHepatologyController);

export default router;
