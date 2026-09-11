import express from 'express';
import {
    getPublicOrthopedicsList,
    getAdminOrthopedicsList,
    registerOrthopedicsDoctor,
    updateOrthopedicsDoctorStatus,
    deleteOrthopedicsDoctor
} from './orthopedics.controller.js';

const router = express.Router();

router.get('/', getPublicOrthopedicsList);
router.get('/admin', getAdminOrthopedicsList);
router.post('/', registerOrthopedicsDoctor);
router.put('/:id', updateOrthopedicsDoctorStatus);
router.delete('/:id', deleteOrthopedicsDoctor);

export default router;
