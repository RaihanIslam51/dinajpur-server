import express from 'express';
import * as bikeMistriController from './bikeMistri.controller.js';

const router = express.Router();

router.get('/', bikeMistriController.getAllBikeMistri);
router.get('/:id', bikeMistriController.getBikeMistriById);
router.post('/', bikeMistriController.createBikeMistri);
router.patch('/:id/status', bikeMistriController.updateStatus);
router.delete('/:id', bikeMistriController.deleteBikeMistri);

export default router;
