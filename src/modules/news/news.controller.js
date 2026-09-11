/**
 * News Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import {
    getAllNewsService,
    createNewsService,
    deleteNewsService
} from './news.service.js';

export const getNews = async (req, res) => {
    try {
        const items = await getAllNewsService(req.query);
        return successResponse(res, items, 'News articles retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch news articles', 500, error);
    }
};

export const createNews = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return errorResponse(res, 'Title and Content are required fields', 400);
        }
        const created = await createNewsService(req.body);
        return successResponse(res, created, 'News article published successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to publish news article', 500, error);
    }
};

export const deleteNews = async (req, res) => {
    try {
        const deleted = await deleteNewsService(req.params.id);
        if (!deleted) return errorResponse(res, 'News article not found', 404);
        return successResponse(res, null, 'News article deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete news article', 500, error);
    }
};
