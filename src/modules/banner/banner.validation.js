/**
 * Banner Input Validation
 */
export const validateBanner = (data) => {
    const errors = [];
    if (!data.name && !data.title) {
        errors.push('Name or Title is required.');
    }
    return {
        isValid: errors.length === 0,
        errors
    };
};
