/**
 * Sanitary Mistri (Sanitary & Bathroom Technician) Model Schema Definition
 */

export const SANITARY_SPECIALTIES = [
    'বাথরুম ফিটিং ও কমোড ইনস্টলেশন',
    'বেসিন, সিঙ্ক ও কল/ট্যাপ ফিটিং',
    'স্যানিটারি পাইপলাইন ও ড্রেনেজ লাইন',
    'ওয়াটার হেড ট্যাঙ্ক ও শাওয়ার সেটআপ',
    'গিজার ও হট ওয়াটার লাইন ইনস্টলেশন',
    'পয়ঃনিষ্কাশন ও সেপটিক ট্যাংক স্যুয়ারেজ'
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

export function validateSanitaryMistriData(data) {
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
