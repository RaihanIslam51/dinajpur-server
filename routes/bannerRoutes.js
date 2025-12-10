import express from 'express';
import {
    createBanner,
    fetchBanners,
    fetchBannerById,
    editBanner,
    removeBanner
} from '../controllers/bannerController.js';

const router = express.Router();

router.post('/', createBanner);
router.get('/', fetchBanners);
router.get('/:id', fetchBannerById);
router.put('/:id', editBanner);
router.delete('/:id', removeBanner);

export default router;