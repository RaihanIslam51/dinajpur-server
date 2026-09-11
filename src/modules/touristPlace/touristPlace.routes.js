/**
 * TouristPlace (দর্শনীয় স্থান) Routes
 */
import { Router } from 'express';
import {
    getTouristPlaces,
    getTouristPlaceById,
    createTouristPlace,
    updateTouristPlace,
    deleteTouristPlace
} from './touristPlace.controller.js';

const router = Router();

router.get('/', getTouristPlaces);
router.get('/:id', getTouristPlaceById);
router.post('/', createTouristPlace);
router.put('/:id', updateTouristPlace);
router.delete('/:id', deleteTouristPlace);

export default router;
