import express from 'express';
import {
    getAllPediatrics,
    getPediatricsById,
    createPediatrics,
    updatePediatrics,
    deletePediatrics,
} from './pediatrics.controller.js';

const router = express.Router();

router.get('/', getAllPediatrics);
router.get('/:id', getPediatricsById);
router.post('/', createPediatrics);
router.put('/:id', updatePediatrics);
router.delete('/:id', deletePediatrics);

export default router;
