/**
 * Banner Routes
 */
import { Router } from 'express';
import { getBanners, getBannerById, createBanner } from './banner.controller.js';

const router = Router();

router.get('/', getBanners);
router.get('/:id', getBannerById);
router.post('/', createBanner);

export default router;
