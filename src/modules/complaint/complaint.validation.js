/**
 * Complaint Validation logic
 */
export const validateComplaint = (data) => {
    const errors = [];

    if (!data.title || data.title.trim().length === 0) {
        errors.push('অভিযোগের বিষয় দেওয়া আবশ্যক');
    }

    if (!data.category || data.category.trim().length === 0) {
        errors.push('অভিযোগের ক্যাটাগরি নির্বাচন করুন');
    }

    if (!data.description || data.description.trim().length === 0) {
        errors.push('অভিযোগের বিস্তারিত বিবরণ দেওয়া আবশ্যক');
    }

    if (!data.location || data.location.trim().length === 0) {
        errors.push('এলাকা বা ওয়ার্ড নম্বর দেওয়া আবশ্যক');
    }

    if (!data.isAnonymous) {
        if (!data.complainantName || data.complainantName.trim().length === 0) {
            errors.push('নাম গোপন না থাকলে আবেদনকারীর নাম দেওয়া আবশ্যক');
        }
        if (!data.complainantPhone || data.complainantPhone.trim().length === 0) {
            errors.push('যোগাযোগের ফোন নম্বর দেওয়া আবশ্যক');
        }
    }

    return {
        isValid: errors.length === 0,
        errors
    };
};
