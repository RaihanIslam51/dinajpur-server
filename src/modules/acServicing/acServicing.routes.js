import express from 'express';
import * as acServicingController from './acServicing.controller.js';

const router = express.Router();

router.get('/', acServicingController.getAllAcServicing);
router.get('/:id', acServicingController.getAcServicingById);
router.post('/', acServicingController.createAcServicing);
router.patch('/:id/status', acServicingController.updateStatus);
router.delete('/:id', acServicingController.deleteAcServicing);

export default router;
