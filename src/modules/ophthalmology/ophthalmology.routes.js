import express from 'express';
import {
    getAllOphthalmologyController,
    getOphthalmologyByIdController,
    createOphthalmologyController,
    updateOphthalmologyStatusController,
    deleteOphthalmologyController
} from './ophthalmology.controller.js';

const router = express.Router();

router.get('/', getAllOphthalmologyController);
router.get('/:id', getOphthalmologyByIdController);
router.post('/', createOphthalmologyController);
router.put('/:id/status', updateOphthalmologyStatusController);
router.delete('/:id', deleteOphthalmologyController);

export default router;
