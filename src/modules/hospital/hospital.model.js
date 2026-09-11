/**
 * Hospital (হাসপাতাল) Model Schema
 */
export const hospitalSchema = {
    collectionName: 'hospitals',
    fields: {
        id: 'ObjectId',
        name: 'String',                // হাসপাতালের নাম (e.g. এম আব্দুর রহিম মেডিকেল কলেজ)
        hospitalType: 'String',        // প্রকার (e.g. সরকারি, বেসরকারি, বিশেষায়িত, জেনারেল)
        description: 'String',         // বিবরণ ও সেবার তথ্য
        logo: 'String',                // লোগো চিত্র URL
        coverImage: 'String',          // কভার চিত্র URL
        images: 'Array',               // হাসপাতালের অন্যান্য ছবিসমূহ [String]
        address: 'String',             // পূর্ণাঙ্গ ঠিকানা (e.g. সুইহারী, দিনাজপুর)
        area: 'String',                // এলাকা / থানা (e.g. সদর, দিনাজপুর)
        phone: 'String',               // বুকিং/তথ্য কেন্দ্র ফোন নম্বর
        emergencyPhone: 'String',      // জরুরি ২৫/৭ হটলাইন / অ্যাম্বুলেন্স নম্বর
        email: 'String',               // ইমেইল ঠিকানা
        website: 'String',             // ওয়েবসাইট URL
        openingTime: 'String',         // খোলার সময় (e.g. 08:00 AM / ২৪ ঘণ্টা)
        closingTime: 'String',         // বন্ধের সময় (e.g. 10:00 PM / ২৪ ঘণ্টা)
        emergencyAvailable: 'Boolean', // জরুরি বিভাগ সক্রিয় কিনা (true/false)
        icuAvailable: 'Boolean',       // আইসিইউ ইউনিট আছে কিনা (true/false)
        ccuAvailable: 'Boolean',       // সিসিইউ ইউনিট আছে কিনা (true/false)
        ambulanceAvailable: 'Boolean', // ২৪/৭ অ্যাম্বুলেন্স সেবা আছে কিনা (true/false)
        bedCount: 'Number',            // মোট শয্যা / বেড সংখ্যা
        departments: 'Array',          // বিভাগসমূহ [String] (e.g. মেডিসিন, সার্জারি, গাইনি)
        facilities: 'Array',           // সুযোগ-সুবিধাসমূহ [String] (e.g. ব্লাড ব্যাংক, সিটি স্ক্যান)
        doctors: 'Array',              // ডাক্তারদের তালিকা/নাম [String]
        location: 'String',            // জিপিএস / মানচিত্রের অবস্থান
        isVerified: 'Boolean',         // স্মার্ট সিটি যাচাইকৃত (true/false)
        status: 'String',              // স্ট্যাটাস (active, pending, archived)
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
