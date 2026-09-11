/**
 * Doctor Routes
 */
import { Router } from 'express';
import { getDoctors, getDoctorById, createDoctor } from './doctor.controller.js';

const router = Router();

router.get('/', getDoctors);
router.get('/:id', getDoctorById);
router.post('/', createDoctor);

export default router;
