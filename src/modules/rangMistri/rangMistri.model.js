/**
 * Rang Mistri (Painter) Schema Definition
 */
export const rangMistriSchema = {
    name: 'String (Required)',
    phone: 'String (Required, BD Phone 01XXXXXXXXX)',
    alternatePhone: 'String (Optional)',
    photo: 'String (URL, Optional)',
    experienceYears: 'Number (Default: 0)',
    specialties: 'Array of Strings (e.g. বিল্ডিং পেইন্টিং, ইন্টেরিয়র পেইন্ট, অ্যালুমিনিয়াম/উড বার্নিশ, ওয়ালপেপার ও স্টেনসিল, ওয়েদার কোট/এক্সটেরিয়র, পুটিং ও প্রাইমার)',
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
