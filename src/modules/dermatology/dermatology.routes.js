import express from 'express';
import {
    getAllDermatologyController,
    getDermatologyByIdController,
    createDermatologyController,
    updateDermatologyStatusController,
    deleteDermatologyController
} from './dermatology.controller.js';

const router = express.Router();

router.get('/', getAllDermatologyController);
router.get('/:id', getDermatologyByIdController);
router.post('/', createDermatologyController);
router.put('/:id/status', updateDermatologyStatusController);
router.delete('/:id', deleteDermatologyController);

export default router;
