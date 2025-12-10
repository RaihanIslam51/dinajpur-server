import featuredModel from '../models/featuredModel.js';

// Create new featured item
export const createFeatured = async (req, res) => {
    try {
        const { title, subtitle, description, imageUrl, link, status } = req.body;

        if (!title || !imageUrl) {
            return res.status(400).json({
                success: false,
                message: 'Title and image are required'
            });
        }

        const featuredData = {
            title,
            subtitle: subtitle || '',
            description: description || '',
            imageUrl,
            link: link || '',
            status: status || 'active'
        };

        const result = await featuredModel.insertFeatured(featuredData);

        res.status(201).json({
            success: true,
            message: 'Featured item created successfully',
            data: result
        });
    } catch (error) {
        console.error('Error creating featured item:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create featured item',
            error: error.message
        });
    }
};

// Get all featured items
const getAllFeatured = async (req, res) => {
    try {
        const featured = await featuredModel.getAllFeatured();
        res.status(200).json({
            success: true,
            data: featured
        });
    } catch (error) {
        console.error('Error fetching featured items:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch featured items',
            error: error.message
        });
    }
};

// Get featured item by ID
const getFeaturedById = async (req, res) => {
    try {
        const { id } = req.params;
        const featured = await featuredModel.getFeaturedById(id);

        if (!featured) {
            return res.status(404).json({
                success: false,
                message: 'Featured item not found'
            });
        }

        res.status(200).json({
            success: true,
            data: featured
        });
    } catch (error) {
        console.error('Error fetching featured item:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch featured item',
            error: error.message
        });
    }
};

// Update featured item
const updateFeatured = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const result = await featuredModel.updateFeatured(id, updateData);

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'Featured item not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Featured item updated successfully'
        });
    } catch (error) {
        console.error('Error updating featured item:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update featured item',
            error: error.message
        });
    }
};

// Delete featured item
const deleteFeatured = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await featuredModel.deleteFeatured(id);

        if (result.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'Featured item not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Featured item deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting featured item:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete featured item',
            error: error.message
        });
    }
};

export default {
    createFeatured,
    getAllFeatured,
    getFeaturedById,
    updateFeatured,
    deleteFeatured
};
