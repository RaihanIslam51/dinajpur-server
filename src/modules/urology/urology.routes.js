import express from 'express';
import {
    getAllUrologyController,
    getUrologyByIdController,
    createUrologyController,
    updateUrologyStatusController,
    deleteUrologyController
} from './urology.controller.js';

const router = express.Router();

router.get('/', getAllUrologyController);
router.get('/:id', getUrologyByIdController);
router.post('/', createUrologyController);
router.put('/:id/status', updateUrologyStatusController);
router.delete('/:id', deleteUrologyController);

export default router;
