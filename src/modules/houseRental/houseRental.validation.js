/**
 * HouseRental (বাসা ভাড়া) Validation Rules
 */
export const validateHouseRental = (data) => {
    const errors = [];

    if (!data.title || typeof data.title !== 'string' || data.title.trim() === '') {
        errors.push('title (শিরোনাম) আবশ্যক।');
    }
    if (!data.propertyType || typeof data.propertyType !== 'string' || data.propertyType.trim() === '') {
        errors.push('propertyType (প্রপার্টি টাইপ) আবশ্যক।');
    }
    if (!data.address || typeof data.address !== 'string' || data.address.trim() === '') {
        errors.push('address (ঠিকানা) আবশ্যক।');
    }
    if (data.rent === undefined || data.rent === null || isNaN(Number(data.rent))) {
        errors.push('rent (মাসিক ভাড়া) আবশ্যক এবং একটি সংখ্যা হতে হবে।');
    }
    if (!data.contactPhone || typeof data.contactPhone !== 'string' || data.contactPhone.trim() === '') {
        errors.push('contactPhone (যোগাযোগ নম্বর) আবশ্যক।');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};
