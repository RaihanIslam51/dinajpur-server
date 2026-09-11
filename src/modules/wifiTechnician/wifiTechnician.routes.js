import express from 'express';
import * as wifiTechnicianController from './wifiTechnician.controller.js';

const router = express.Router();

router.get('/', wifiTechnicianController.getAllWifiTechnician);
router.get('/:id', wifiTechnicianController.getWifiTechnicianById);
router.post('/', wifiTechnicianController.createWifiTechnician);
router.patch('/:id/status', wifiTechnicianController.updateStatus);
router.delete('/:id', wifiTechnicianController.deleteWifiTechnician);

export default router;
