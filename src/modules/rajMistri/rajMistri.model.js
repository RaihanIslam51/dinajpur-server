/**
 * Raj Mistri (রাজ মিস্ত্রি) Model Schema
 */
export const rajMistriSchema = {
    collectionName: 'raj_mistris',
    fields: {
        id: 'ObjectId',
        categoryId: 'String',           // মিস্ত্রি সেবা / রাজ মিস্ত্রি সাব-ক্যাটাগরি ID
        userId: 'String',               // রেজিস্টার্ড ইউজার ID (ঐচ্ছিক)
        name: 'String',                 // মিস্ত্রির নাম
        phone: 'String',                // প্রাথমিক মোবাইল নম্বর (required)
        alternatePhone: 'String',       // বিকল্প মোবাইল নম্বর (optional)
        photo: 'String',                // প্রোফাইল ছবির URL
        experienceYears: 'Number',      // অভিজ্ঞতা (বছর)
        specialties: 'Array',           // দক্ষতা (e.g. ["গাঁথুনি", "পলেস্তারা", "টাইলস", "ছাদ ঢালাই"])
        dailyWage: 'Number',            // আনুমানিক দৈনিক মজুরি (টাকা)
        division: 'String',             // বিভাগ
        district: 'String',             // জেলা (e.g. দিনাজপুর)
        upazila: 'String',              // উপজেলা (e.g. দিনাজপুর সদর, বিরল)
        address: 'String',              // বিস্তারিত কর্মক্ষেত্র / ঠিকানা
        isAvailable: 'Boolean',         // বর্তমানে কাজের জন্য উপলব্ধ কিনা (default: true)
        description: 'String',          // সংক্ষিপ্ত অভিজ্ঞতা / বায়ো
        workSampleImages: 'Array',      // কাজের নমুনা ছবিসমূহ (Array of image URLs)
        status: 'String',               // স্ট্যাটাস (pending, approved, rejected)
        submittedBy: 'String',          // তথ্য জমাদানকারীর ID বা নাম
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
