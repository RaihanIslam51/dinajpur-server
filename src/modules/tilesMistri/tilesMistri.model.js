/**
 * Tiles Mistri (Tiles & Marble Worker) Model Schema Definition
 */

export const TILES_SPECIALTIES = [
    'ফ্লোর টাইলস বসানো',
    'দেয়াল ও বাথরুম টাইলস',
    'মার্বেল ও গ্রানাইট ফিনিশিং',
    'সিঁড়ি ও পোর্চ টাইলস',
    'টাইলস গ্রাউটিং ও পয়েন্টিং',
    'পুরাতন টাইলস রিপেয়ার ও ড্যামেজ ফিটিং'
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

export function validateTilesMistriData(data) {
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
