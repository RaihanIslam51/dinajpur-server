/**
 * Featured Routes
 */
import { Router } from 'express';
import { getFeatureds, getFeaturedById, createFeatured } from './featured.controller.js';

const router = Router();

router.get('/', getFeatureds);
router.get('/:id', getFeaturedById);
router.post('/', createFeatured);

export default router;
