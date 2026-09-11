/**
 * HouseRental (বাসা ভাড়া) Routes
 */
import { Router } from 'express';
import {
    getHouseRentals,
    getHouseRentalById,
    createHouseRental,
    updateHouseRental,
    deleteHouseRental
} from './houseRental.controller.js';

const router = Router();

router.get('/', getHouseRentals);
router.get('/:id', getHouseRentalById);
router.post('/', createHouseRental);
router.put('/:id', updateHouseRental);
router.delete('/:id', deleteHouseRental);

export default router;
