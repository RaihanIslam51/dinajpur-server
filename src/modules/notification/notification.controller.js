/**
 * Notification Controller Layer
 */
import { successResponse, errorResponse } from '../../utils/responseFormatter.js';
import {
    getAllNotificationsService,
    createNotificationService,
    deleteNotificationService
} from './notification.service.js';

export const getNotifications = async (req, res) => {
    try {
        const items = await getAllNotificationsService(req.query);
        return successResponse(res, items, 'Notifications retrieved successfully', 200, { count: items.length });
    } catch (error) {
        return errorResponse(res, 'Failed to fetch notifications', 500, error);
    }
};

export const createNotification = async (req, res) => {
    try {
        const { title, message } = req.body;
        if (!title || !message) {
            return errorResponse(res, 'Title and Message are required fields', 400);
        }
        const created = await createNotificationService(req.body);
        return successResponse(res, created, 'Notification created and published successfully', 201);
    } catch (error) {
        return errorResponse(res, 'Failed to create notification', 500, error);
    }
};

export const deleteNotification = async (req, res) => {
    try {
        const deleted = await deleteNotificationService(req.params.id);
        if (!deleted) return errorResponse(res, 'Notification not found', 404);
        return successResponse(res, null, 'Notification deleted successfully');
    } catch (error) {
        return errorResponse(res, 'Failed to delete notification', 500, error);
    }
};
