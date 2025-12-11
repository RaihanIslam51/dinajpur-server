import express from 'express';
const router = express.Router();
import * as featuredController from '../controllers/featuredController.js';

// Create new featured item
router.post('/', featuredController.createFeatured);

// Get all featured items
router.get('/', featuredController.getAllFeatured);

// Get featured item by ID
router.get('/:id', featuredController.getFeaturedById);

// Update featured item
router.put('/:id', featuredController.updateFeatured);

// Delete featured item
router.delete('/:id', featuredController.deleteFeatured);

export default router;
