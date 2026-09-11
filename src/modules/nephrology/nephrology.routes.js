import express from 'express';
import {
    getAllNephrology,
    getNephrologyById,
    createNephrology,
    updateNephrology,
    deleteNephrology
} from './nephrology.controller.js';

const router = express.Router();

router.get('/', getAllNephrology);
router.get('/:id', getNephrologyById);
router.post('/', createNephrology);
router.put('/:id', updateNephrology);
router.delete('/:id', deleteNephrology);

export default router;
