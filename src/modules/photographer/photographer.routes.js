import express from 'express';
import {
    getAllPhotographers,
    getPhotographerById,
    createPhotographer,
    updatePhotographerStatus,
    deletePhotographer
} from './photographer.controller.js';

const router = express.Router();

router.get('/', getAllPhotographers);
router.get('/:id', getPhotographerById);
router.post('/', createPhotographer);
router.patch('/:id/status', updatePhotographerStatus);
router.delete('/:id', deletePhotographer);

export default router;
