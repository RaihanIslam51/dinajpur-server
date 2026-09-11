import express from 'express';
import {
    getAllDentistryController,
    getDentistryByIdController,
    createDentistryController,
    updateDentistryStatusController,
    deleteDentistryController
} from './dentistry.controller.js';

const router = express.Router();

router.get('/', getAllDentistryController);
router.get('/:id', getDentistryByIdController);
router.post('/', createDentistryController);
router.put('/:id/status', updateDentistryStatusController);
router.delete('/:id', deleteDentistryController);

export default router;
