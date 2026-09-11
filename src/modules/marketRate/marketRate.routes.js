/**
 * MarketRate (আজকের বাজার দর) Routes
 */
import { Router } from 'express';
import {
    getMarketRates,
    getMarketRateById,
    createMarketRate,
    updateMarketRate,
    deleteMarketRate
} from './marketRate.controller.js';

const router = Router();

router.get('/', getMarketRates);
router.get('/:id', getMarketRateById);
router.post('/', createMarketRate);
router.put('/:id', updateMarketRate);
router.delete('/:id', deleteMarketRate);

export default router;
