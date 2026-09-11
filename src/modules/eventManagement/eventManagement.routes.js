import express from 'express';
import {
    getAllEventManagements,
    getEventManagementById,
    createEventManagement,
    updateEventManagementStatus,
    deleteEventManagement
} from './eventManagement.controller.js';

const router = express.Router();

router.get('/', getAllEventManagements);
router.get('/:id', getEventManagementById);
router.post('/', createEventManagement);
router.patch('/:id/status', updateEventManagementStatus);
router.delete('/:id', deleteEventManagement);

export default router;
