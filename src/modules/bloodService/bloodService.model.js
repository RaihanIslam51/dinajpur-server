/**
 * BloodService (রক্ত সেবা) Model Schema
 */
export const bloodServiceSchema = {
    collectionName: 'blood_services',
    fields: {
        id: 'ObjectId',
        name: 'String',                   // ডোনার বা রক্তদান সংস্থার নাম (e.g. মো: আরিফুল ইসলাম / রেড ক্রিসেন্ট)
        serviceType: 'String',            // সার্ভিস টাইপ (স্বেচ্ছাসেবক রক্তদাতা, ব্লাড ব্যাংক, রক্তদান সংস্থা)
        bloodGroup: 'String',             // রক্তের গ্রুপ (A+, A-, B+, B-, AB+, AB-, O+, O-)
        contactNumber: 'String',          // যোগাযোগের প্রধান ফোন নম্বর
        alternativePhone: 'String',       // বিকল্প / জরুরি ফোন নম্বর
        address: 'String',                // ঠিকানা
        area: 'String',                   // এলাকা / থানা (e.g. সুইহারী, দিনাজপুর সদর)
        availability: 'String',           // উপলব্ধতা (e.g. যেকোনো সময় প্রস্তুত / ৩ মাস পার হয়েছে)
        lastDonationDate: 'String',       // সর্বশেষ রক্তদানের তারিখ (YYYY-MM-DD)
        availableForEmergency: 'Boolean', // জরুরি প্রয়োজনে ২৪/৭ প্রস্তুত কিনা
        hospital: 'String',               // পছন্দনীয় / নিকটস্থ হাসপাতাল (e.g. আব্দুর রহিম মেডিকেল কলেজ)
        location: 'String',               // জিপিএস / লোকেশন
        isVerified: 'Boolean',            // স্মার্ট সিটি যাচাইকৃত (true/false)
        status: 'String',                 // স্ট্যাটাস (active, pending, archived)
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
