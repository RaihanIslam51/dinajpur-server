import express from 'express';
import {
    getAllLightSounds,
    getLightSoundById,
    createLightSound,
    updateLightSoundStatus,
    deleteLightSound
} from './lightSound.controller.js';

const router = express.Router();

router.get('/', getAllLightSounds);
router.get('/:id', getLightSoundById);
router.post('/', createLightSound);
router.patch('/:id/status', updateLightSoundStatus);
router.delete('/:id', deleteLightSound);

export default router;
