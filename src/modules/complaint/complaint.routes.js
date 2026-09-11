/**
 * Complaint API Routes
 */
import { Router } from 'express';
import {
    getComplaints,
    createComplaint,
    voteComplaint,
    updateComplaintStatus,
    deleteComplaint
} from './complaint.controller.js';

const router = Router();

router.get('/', getComplaints);
router.post('/', createComplaint);
router.post('/:id/vote', voteComplaint);
router.patch('/:id/status', updateComplaintStatus);
router.delete('/:id', deleteComplaint);

export default router;
