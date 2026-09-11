import express from 'express';
import {
    getAllNeurology,
    getNeurologyById,
    createNeurology,
    updateNeurology,
    deleteNeurology
} from './neurology.controller.js';

const router = express.Router();

router.get('/', getAllNeurology);
router.get('/:id', getNeurologyById);
router.post('/', createNeurology);
router.put('/:id', updateNeurology);
router.delete('/:id', deleteNeurology);

export default router;
