import express from 'express';
import {
    getAllTvServicings,
    getTvServicingById,
    createTvServicing,
    updateTvServicingStatus,
    deleteTvServicing
} from './tvServicing.controller.js';

const router = express.Router();

router.get('/', getAllTvServicings);
router.get('/:id', getTvServicingById);
router.post('/', createTvServicing);
router.patch('/:id/status', updateTvServicingStatus);
router.delete('/:id', deleteTvServicing);

export default router;
