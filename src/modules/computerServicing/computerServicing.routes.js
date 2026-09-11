import express from 'express';
import * as computerServicingController from './computerServicing.controller.js';

const router = express.Router();

router.get('/', computerServicingController.getAllComputerServicing);
router.get('/:id', computerServicingController.getComputerServicingById);
router.post('/', computerServicingController.createComputerServicing);
router.patch('/:id/status', computerServicingController.updateStatus);
router.delete('/:id', computerServicingController.deleteComputerServicing);

export default router;
