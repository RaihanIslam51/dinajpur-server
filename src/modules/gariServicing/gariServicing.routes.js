import express from 'express';
import * as gariServicingController from './gariServicing.controller.js';

const router = express.Router();

router.get('/', gariServicingController.getAllGariServicing);
router.get('/:id', gariServicingController.getGariServicingById);
router.post('/', gariServicingController.createGariServicing);
router.patch('/:id/status', gariServicingController.updateStatus);
router.delete('/:id', gariServicingController.deleteGariServicing);

export default router;
