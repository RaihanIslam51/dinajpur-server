import express from 'express';
import * as electricianController from './electrician.controller.js';

const router = express.Router();

router.get('/', electricianController.getAllElectricians);
router.get('/:id', electricianController.getElectricianById);
router.post('/', electricianController.createElectrician);
router.patch('/:id/status', electricianController.updateStatus);
router.delete('/:id', electricianController.deleteElectrician);

export default router;
