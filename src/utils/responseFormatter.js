/**
 * Standard API Response Formatter
 */
export const successResponse = (res, data = [], message = 'Success', status = 200, meta = null) => {
    return res.status(status).json({
        success: true,
        message,
        data,
        ...(meta && { meta })
    });
};

export const errorResponse = (res, message = 'Internal Server Error', status = 500, error = null) => {
    return res.status(status).json({
        success: false,
        message,
        ...(error && { error: typeof error === 'object' ? error.message || error : error })
    });
};

export const formatResponse = (success, message, data = null, error = null) => {
    return {
        success,
        message,
        ...(data !== null && { data }),
        ...(error !== null && { error })
    };
};

