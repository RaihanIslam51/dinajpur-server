import express from 'express';
import {
    getAllPharmacies,
    getPharmacyById,
    createPharmacy,
    updatePharmacy,
    deletePharmacy
} from './pharmacy.controller.js';

const router = express.Router();

router.get('/', getAllPharmacies);
router.get('/:id', getPharmacyById);
router.post('/', createPharmacy);
router.put('/:id', updatePharmacy);
router.delete('/:id', deletePharmacy);

export default router;
