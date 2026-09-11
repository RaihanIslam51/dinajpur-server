import express from 'express';
import {
    getPublicOncologyList,
    getAdminOncologyList,
    registerOncologyDoctor,
    updateOncologyDoctorStatus,
    deleteOncologyDoctor
} from './oncology.controller.js';

const router = express.Router();

router.get('/', getPublicOncologyList);
router.get('/admin', getAdminOncologyList);
router.post('/', registerOncologyDoctor);
router.put('/:id', updateOncologyDoctorStatus);
router.delete('/:id', deleteOncologyDoctor);

export default router;
