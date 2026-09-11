/**
 * BusService (বাস সেবা) Routes
 */
import { Router } from 'express';
import {
    getBusServices,
    getBusServiceById,
    createBusService,
    updateBusService,
    deleteBusService
} from './busService.controller.js';

const router = Router();

router.get('/', getBusServices);
router.get('/:id', getBusServiceById);
router.post('/', createBusService);
router.put('/:id', updateBusService);
router.delete('/:id', deleteBusService);

export default router;
