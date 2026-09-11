import express from 'express';
import {
    getAllNutrition,
    getNutritionById,
    createNutrition,
    updateNutrition,
    deleteNutrition
} from './nutrition.controller.js';

const router = express.Router();

router.get('/', getAllNutrition);
router.get('/:id', getNutritionById);
router.post('/', createNutrition);
router.put('/:id', updateNutrition);
router.delete('/:id', deleteNutrition);

export default router;
