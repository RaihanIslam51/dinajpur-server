import express from 'express';
import {
    getAllAlponaArtistsController,
    getAlponaArtistByIdController,
    createAlponaArtistController,
    updateAlponaArtistStatusController,
    deleteAlponaArtistController
} from './alponaArtist.controller.js';

const router = express.Router();

router.get('/', getAllAlponaArtistsController);
router.get('/:id', getAlponaArtistByIdController);
router.post('/', createAlponaArtistController);
router.put('/:id/status', updateAlponaArtistStatusController);
router.delete('/:id', deleteAlponaArtistController);

export default router;
