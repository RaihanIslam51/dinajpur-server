import express from 'express';
import {
    getAllSurgeryController,
    getSurgeryByIdController,
    createSurgeryController,
    updateSurgeryStatusController,
    deleteSurgeryController
} from './surgery.controller.js';

const router = express.Router();

router.get('/', getAllSurgeryController);
router.get('/:id', getSurgeryByIdController);
router.post('/', createSurgeryController);
router.put('/:id/status', updateSurgeryStatusController);
router.delete('/:id', deleteSurgeryController);

export default router;
