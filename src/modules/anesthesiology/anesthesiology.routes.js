import express from 'express';
import * as anesthesiologyController from './anesthesiology.controller.js';

const router = express.Router();

router.get('/', anesthesiologyController.getAnesthesiologists);
router.get('/:id', anesthesiologyController.getAnesthesiologistById);
router.post('/', anesthesiologyController.createAnesthesiologist);
router.put('/:id', anesthesiologyController.updateAnesthesiologist);
router.delete('/:id', anesthesiologyController.deleteAnesthesiologist);

export default router;
