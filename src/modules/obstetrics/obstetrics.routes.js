import express from 'express';
import {
    getAllObstetrics,
    getObstetricsById,
    createObstetrics,
    updateObstetrics,
    deleteObstetrics
} from './obstetrics.controller.js';

const router = express.Router();

router.get('/', getAllObstetrics);
router.get('/:id', getObstetricsById);
router.post('/', createObstetrics);
router.put('/:id', updateObstetrics);
router.delete('/:id', deleteObstetrics);

export default router;
