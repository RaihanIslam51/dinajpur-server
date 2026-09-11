import express from 'express';
import {
    getAllEndocrinologyController,
    getEndocrinologyByIdController,
    createEndocrinologyController,
    updateEndocrinologyStatusController,
    deleteEndocrinologyController
} from './endocrinology.controller.js';

const router = express.Router();

router.get('/', getAllEndocrinologyController);
router.get('/:id', getEndocrinologyByIdController);
router.post('/', createEndocrinologyController);
router.put('/:id/status', updateEndocrinologyStatusController);
router.delete('/:id', deleteEndocrinologyController);

export default router;
