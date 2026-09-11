import express from 'express';
import * as fridgeServicingController from './fridgeServicing.controller.js';

const router = express.Router();

router.get('/', fridgeServicingController.getAllFridgeServicing);
router.get('/:id', fridgeServicingController.getFridgeServicingById);
router.post('/', fridgeServicingController.createFridgeServicing);
router.patch('/:id/status', fridgeServicingController.updateStatus);
router.delete('/:id', fridgeServicingController.deleteFridgeServicing);

export default router;
