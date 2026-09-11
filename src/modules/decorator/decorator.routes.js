import express from 'express';
import {
    getAllDecorators,
    getDecoratorById,
    createDecorator,
    updateDecoratorStatus,
    deleteDecorator
} from './decorator.controller.js';

const router = express.Router();

router.get('/', getAllDecorators);
router.get('/:id', getDecoratorById);
router.post('/', createDecorator);
router.patch('/:id/status', updateDecoratorStatus);
router.delete('/:id', deleteDecorator);

export default router;
