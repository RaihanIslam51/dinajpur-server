import express from 'express';
import {
    getAllCardiologyController,
    getCardiologyByIdController,
    createCardiologyController,
    updateCardiologyStatusController,
    deleteCardiologyController
} from './cardiology.controller.js';

const router = express.Router();

router.get('/', getAllCardiologyController);
router.get('/:id', getCardiologyByIdController);
router.post('/', createCardiologyController);
router.put('/:id/status', updateCardiologyStatusController);
router.delete('/:id', deleteCardiologyController);

export default router;
