/**
 * CourierService Routes
 * Mounted at: /api/courier-services
 */
import { Router } from 'express';
import {
    getCourierServices,
    getCourierServiceById,
    createCourierService,
    updateCourierService,
    deleteCourierService
} from './courierService.controller.js';

const router = Router();

router.get('/', getCourierServices);
router.get('/:id', getCourierServiceById);
router.post('/', createCourierService);
router.put('/:id', updateCourierService);
router.delete('/:id', deleteCourierService);

export default router;
