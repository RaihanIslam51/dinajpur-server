import express from 'express';
import {
    getAllBehaviorHypertension,
    getBehaviorHypertensionById,
    createBehaviorHypertension,
    updateBehaviorHypertension,
    deleteBehaviorHypertension,
} from './behaviorHypertension.controller.js';

const router = express.Router();

router.get('/', getAllBehaviorHypertension);
router.get('/:id', getBehaviorHypertensionById);
router.post('/', createBehaviorHypertension);
router.put('/:id', updateBehaviorHypertension);
router.delete('/:id', deleteBehaviorHypertension);

export default router;
