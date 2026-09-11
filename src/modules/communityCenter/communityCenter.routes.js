import express from 'express';
import {
    getAllCommunityCenters,
    getCommunityCenterById,
    createCommunityCenter,
    updateCommunityCenterStatus,
    deleteCommunityCenter
} from './communityCenter.controller.js';

const router = express.Router();

router.get('/', getAllCommunityCenters);
router.get('/:id', getCommunityCenterById);
router.post('/', createCommunityCenter);
router.patch('/:id/status', updateCommunityCenterStatus);
router.delete('/:id', deleteCommunityCenter);

export default router;
