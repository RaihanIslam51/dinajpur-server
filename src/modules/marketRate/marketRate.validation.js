/**
 * MarketRate (আজকের বাজার দর) Validation Rules
 */
export const validateMarketRate = (data) => {
    const errors = [];

    if (!data.productName || typeof data.productName !== 'string' || data.productName.trim() === '') {
        errors.push('productName is required.');
    }
    if (!data.category || typeof data.category !== 'string' || data.category.trim() === '') {
        errors.push('category is required.');
    }
    if (!data.unit || typeof data.unit !== 'string' || data.unit.trim() === '') {
        errors.push('unit is required.');
    }
    if (data.price === undefined || data.price === null || isNaN(Number(data.price))) {
        errors.push('price must be a valid number.');
    }
    if (!data.marketName || typeof data.marketName !== 'string' || data.marketName.trim() === '') {
        errors.push('marketName is required.');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};
