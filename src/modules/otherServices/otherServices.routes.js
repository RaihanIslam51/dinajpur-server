import express from 'express';
import {
    getAllOtherServices,
    getOtherServiceById,
    createOtherService,
    updateOtherServiceStatus,
    deleteOtherService
} from './otherServices.controller.js';

const router = express.Router();

router.get('/', getAllOtherServices);
router.get('/:id', getOtherServiceById);
router.post('/', createOtherService);
router.patch('/:id/status', updateOtherServiceStatus);
router.delete('/:id', deleteOtherService);

export default router;
