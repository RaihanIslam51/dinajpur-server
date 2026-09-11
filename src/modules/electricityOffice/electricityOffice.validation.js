/**
 * ElectricityOffice Input Validation
 */
export const validateElectricityOffice = (data) => {
    const errors = [];
    if (!data.name && !data.title) {
        errors.push('Name or Title is required.');
    }
    return {
        isValid: errors.length === 0,
        errors
    };
};
