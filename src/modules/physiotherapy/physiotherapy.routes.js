import express from 'express';
import {
    getAllPhysiotherapy,
    getPhysiotherapyById,
    createPhysiotherapy,
    updatePhysiotherapy,
    deletePhysiotherapy,
} from './physiotherapy.controller.js';

const router = express.Router();

router.get('/', getAllPhysiotherapy);
router.get('/:id', getPhysiotherapyById);
router.post('/', createPhysiotherapy);
router.put('/:id', updatePhysiotherapy);
router.delete('/:id', deletePhysiotherapy);

export default router;
