/**
 * FireService Routes
 */
import { Router } from 'express';
import { getFireServices, getFireServiceById, createFireService } from './fireService.controller.js';

const router = Router();

router.get('/', getFireServices);
router.get('/:id', getFireServiceById);
router.post('/', createFireService);

export default router;
