import express from 'express';
import {
    getAllCctvServicings,
    getCctvServicingById,
    createCctvServicing,
    updateCctvServicingStatus,
    deleteCctvServicing
} from './cctvServicing.controller.js';

const router = express.Router();

router.get('/', getAllCctvServicings);
router.get('/:id', getCctvServicingById);
router.post('/', createCctvServicing);
router.patch('/:id/status', updateCctvServicingStatus);
router.delete('/:id', deleteCctvServicing);

export default router;

