import express from 'express';
import {
    getAllCateringServices,
    getCateringServiceById,
    createCateringService,
    updateCateringServiceStatus,
    deleteCateringService
} from './cateringService.controller.js';

const router = express.Router();

router.get('/', getAllCateringServices);
router.get('/:id', getCateringServiceById);
router.post('/', createCateringService);
router.patch('/:id/status', updateCateringServiceStatus);
router.delete('/:id', deleteCateringService);

export default router;
