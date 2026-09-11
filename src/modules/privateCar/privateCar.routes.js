import express from 'express';
import {
    getAllPrivateCars,
    getPrivateCarById,
    createPrivateCar,
    updatePrivateCar,
    deletePrivateCar,
} from './privateCar.controller.js';

const router = express.Router();

router.get('/', getAllPrivateCars);
router.get('/:id', getPrivateCarById);
router.post('/', createPrivateCar);
router.put('/:id', updatePrivateCar);
router.delete('/:id', deletePrivateCar);

export default router;
