/**
 * Carpenter Mistri Schema Definition
 */
export const carpenterMistriSchema = {
    name: 'String (Required)',
    phone: 'String (Required, BD Phone 01XXXXXXXXX)',
    alternatePhone: 'String (Optional)',
    photo: 'String (URL, Optional)',
    experienceYears: 'Number (Default: 0)',
    specialties: 'Array of Strings (e.g. ফার্নিচার তৈরি, দরজা-জানালা ফিটিং, ফার্নিচার পলিশ/রিপেয়ার, কেবিনেট/ইন্টেরিয়র, খাট/আলমারি তৈরি)',
    dailyWage: 'Number (Optional)',
    division: 'String (Default: রংপুর)',
    district: 'String (Default: দিনাজপুর)',
    upazila: 'String (Required)',
    address: 'String (Required)',
    isAvailable: 'Boolean (Default: true)',
    description: 'String (Optional)',
    workSampleImages: 'Array of Strings (URLs, Optional)',
    status: 'String (Enum: pending, approved, rejected. Default: pending)',
    submittedBy: 'String (Default: user)',
    createdAt: 'Date',
    updatedAt: 'Date'
};
