import express from 'express';
import {
    getPublicPainMedicineList,
    getAdminPainMedicineList,
    registerPainMedicineDoctor,
    updatePainMedicineDoctorStatus,
    deletePainMedicineDoctor
} from './painMedicine.controller.js';

const router = express.Router();

router.get('/', getPublicPainMedicineList);
router.get('/admin', getAdminPainMedicineList);
router.post('/', registerPainMedicineDoctor);
router.put('/:id', updatePainMedicineDoctorStatus);
router.delete('/:id', deletePainMedicineDoctor);

export default router;
