import express from 'express';
import {
    getAllEntController,
    getEntByIdController,
    createEntController,
    updateEntStatusController,
    deleteEntController
} from './ent.controller.js';

const router = express.Router();

router.get('/', getAllEntController);
router.get('/:id', getEntByIdController);
router.post('/', createEntController);
router.put('/:id/status', updateEntStatusController);
router.delete('/:id', deleteEntController);

export default router;
