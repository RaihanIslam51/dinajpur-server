import {
    insertBanner,
    getAllBanners,
    getBannerById,
    updateBanner,
    deleteBanner
} from '../models/bannerModel.js';

export const createBanner = async (req, res) => {
    try {
        const bannerData = {
            ...req.body,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        const result = await insertBanner(bannerData);

        res.status(201).json({
            success: true,
            message: 'Banner created successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const fetchBanners = async (req, res) => {
    try {
        const banners = await getAllBanners();
        res.status(200).json({
            success: true,
            data: banners,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const fetchBannerById = async (req, res) => {
    try {
        const banner = await getBannerById(req.params.id);

        if (!banner) {
            return res.status(404).json({
                success: false,
                message: 'Banner not found',
            });
        }

        res.status(200).json({
            success: true,
            data: banner,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const editBanner = async (req, res) => {
    try {
        const updateData = {
            ...req.body,
            updatedAt: new Date(),
        };

        const result = await updateBanner(req.params.id, updateData);

        if (result.matchedCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'Banner not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Banner updated successfully',
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const removeBanner = async (req, res) => {
    try {
        const result = await deleteBanner(req.params.id);

        if (result.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'Banner not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Banner deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};