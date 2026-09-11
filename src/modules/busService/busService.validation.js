/**
 * BusService (বাস সেবা) Validation Rules
 */
export const validateBusService = (data) => {
    const errors = [];

    if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') {
        errors.push('name (বাসের নাম / কোম্পানি) আবশ্যক।');
    }
    if (!data.serviceType || typeof data.serviceType !== 'string' || data.serviceType.trim() === '') {
        errors.push('serviceType (সার্ভিস টাইপ) আবশ্যক।');
    }
    if (!data.route || typeof data.route !== 'string' || data.route.trim() === '') {
        errors.push('route (রুটের নাম) আবশ্যক।');
    }
    if (!data.phone || typeof data.phone !== 'string' || data.phone.trim() === '') {
        errors.push('phone (কাউন্টার ফোন নম্বর) আবশ্যক।');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};
