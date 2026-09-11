/**
 * TouristPlace (দর্শনীয় স্থান) Validation Rules
 */
export const validateTouristPlace = (data) => {
    const errors = [];

    if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') {
        errors.push('name (নাম) আবশ্যক।');
    }
    if (!data.category || typeof data.category !== 'string' || data.category.trim() === '') {
        errors.push('category (ক্যাটাগরি) আবশ্যক।');
    }
    if (!data.address || typeof data.address !== 'string' || data.address.trim() === '') {
        errors.push('address (ঠিকানা) আবশ্যক।');
    }
    if (!data.area || typeof data.area !== 'string' || data.area.trim() === '') {
        errors.push('area (উপজেলা / এলাকা) আবশ্যক।');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};
