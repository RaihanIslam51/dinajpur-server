/**
 * Hotel Routes
 */
import { Router } from 'express';
import { getHotels, getHotelById, createHotel, updateHotel, deleteHotel } from './hotel.controller.js';

const router = Router();

router.get('/', getHotels);
router.get('/:id', getHotelById);
router.post('/', createHotel);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);

export default router;
