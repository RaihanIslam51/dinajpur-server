import express from 'express';
import * as mobileServicingController from './mobileServicing.controller.js';

const router = express.Router();

router.get('/', mobileServicingController.getAllMobileServicing);
router.get('/:id', mobileServicingController.getMobileServicingById);
router.post('/', mobileServicingController.createMobileServicing);
router.patch('/:id/status', mobileServicingController.updateStatus);
router.delete('/:id', mobileServicingController.deleteMobileServicing);

export default router;
