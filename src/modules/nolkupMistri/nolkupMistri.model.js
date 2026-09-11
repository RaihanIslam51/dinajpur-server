/**
 * Nolkup Mistri (Tube-well & Plumbing Technician) Model Schema Definition
 */

export const NOLKUP_SPECIALTIES = [
    'নলকূপ বসানো/বোরিং',
    'হ্যান্ড পাম্প/টিবওয়েল মেরামত',
    'সাবমার্সিবল পাম্প ইনস্টলেশন',
    'পানির পাইপ ফিটিং ও পাইপলাইন',
    'মোবাইল ওয়াটার পাম্প মোটর মেরামত',
    'বাথরুম ও ওয়াটার ট্যাঙ্ক ফিলিং'
];

export const DINAJPUR_UPAZILAS = [
    'দিনাজপুর সদর',
    'বিরল',
    'বোচাগঞ্জ',
    'কাহারোল',
    'বীরগঞ্জ',
    'খানসামা',
    'চিরিরবন্দর',
    'পার্বতীপুর',
    'ফুলবাড়ী',
    'নবাবগঞ্জ',
    'বিরামপুর',
    'হাকিমপুর',
    'ঘোড়াঘাট'
];

export function validateNolkupMistriData(data) {
    const errors = [];

    if (!data.name || data.name.trim().length < 3) {
        errors.push('নাম অন্তত ৩ অক্ষরের হতে হবে');
    }

    const phoneRegex = /^01[3-9]\d{8}$/;
    const cleanPhone = (data.phone || '').replace(/[- sticky\s]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
        errors.push('সঠিক ১১ ডিজিটের বাংলাদেশী মোবাইল নম্বর প্রদান করুন (যেমন: 01712345678)');
    }

    if (!data.upazila) {
        errors.push('উপজেলা নির্বাচন করা আবশ্যক');
    }

    if (data.experienceYears === undefined || isNaN(Number(data.experienceYears))) {
        errors.push('অভিজ্ঞতার বছর সঠিকভাবে প্রদান করুন');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}
