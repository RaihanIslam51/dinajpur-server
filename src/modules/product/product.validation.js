/**
 * ShoppingStore / Product Input Validation
 */
export const validateProduct = (data = {}) => {
    const errors = [];
    if (!data.name && !data.title && !data.shopName) {
        errors.push('দোকান বা স্টোরের নাম দেওয়া আবশ্যক।');
    }
    if (!data.phone && !data.contactPhone) {
        errors.push('ফোন নম্বর দেওয়া আবশ্যক।');
    }
    return {
        isValid: errors.length === 0,
        errors
    };
};

