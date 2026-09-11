/**
 * Review Routes
 */
import { Router } from 'express';
import { getReviews, getReviewById, createReview } from './review.controller.js';

const router = Router();

router.get('/', getReviews);
router.get('/:id', getReviewById);
router.post('/', createReview);

export default router;
