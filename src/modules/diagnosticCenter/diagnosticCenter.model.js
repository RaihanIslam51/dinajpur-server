/**
 * DiagnosticCenter (ডায়াগনস্টিক সেন্টার) Model Schema
 */
export const diagnosticCenterSchema = {
    collectionName: 'diagnosticCenters',
    fields: {
        id: 'ObjectId',
        name: 'String',                   // ডায়াগনস্টিক সেন্টারের নাম (e.g. পপুলার ডায়াগনস্টিক সেন্টার)
        logo: 'String',                   // লোগো চিত্র URL
        coverImage: 'String',             // কভার চিত্র URL
        images: 'Array',                  // ল্যাব ও ডায়াগনস্টিক গ্যালারি ছবিসমূহ [String]
        description: 'String',            // বিবরণী ও পরিচিতি
        address: 'String',                // ঠিকানা (e.g. মেডিকেল মোড়, জেল রোড, দিনাজপুর সদর)
        area: 'String',                   // এলাকা (e.g. মেডিকেল মোড়, বালুবাড়ী)
        phone: 'String',                  // পরীক্ষা বুকিং ও সিরিয়াল নম্বর
        emergencyPhone: 'String',         // জরুরী হটলাইন নম্বর (e.g. 0531-65432)
        email: 'String',                  // ইমেইল ঠিকানা
        website: 'String',                // অনলাইন রিপোর্ট পোল্টাল URL
        services: 'Array',                // নির্ণয় ও চিকিৎসাসেবাসমূহ [String] (e.g. ডিজিটাল এক্স-রে, সিটি স্ক্যান, এমআরআই)
        tests: 'Array',                   // উপলব্ধ প্যাথলজি টেস্টসমূহ [String] (e.g. সিবিসি, লিপিড প্রোফাইল, টিএসএইচ)
        testPackages: 'Array',            // হেলথ চেকআপ প্যাকেজসমূহ [String] (e.g. ফুল বডি চেকআপ, এক্সিকিউটিভ হার্ট চেকআপ)
        doctors: 'Array',                 // বিশেষজ্ঞ কনসালট্যান্ট ও প্যাথলজিস্টদের তালিকা [String]
        openingTime: 'String',            // খোলার সময় (e.g. 07:00 AM)
        closingTime: 'String',           // বন্ধের সময় (e.g. 11:00 PM)
        homeSampleCollection: 'Boolean',  // বাসা থেকে রক্তের নমুনা সংগ্রহের সুবিধা (true/false)
        onlineReport: 'Boolean',          // ওয়েবসাইট থেকে ই-রিপোর্ট ডাউনলোডের সুযোগ (true/false)
        ambulance: 'Boolean',             // ২৪/৭ এম্বুলেন্স সুবিধা (true/false)
        location: 'String',               // জিও লোকেশন / গুগল ম্যাপ
        isVerified: 'Boolean',            // স্মার্ট সিটি যাচাইকৃত ডায়াগনস্টিক কেন্দ্র (true/false)
        status: 'String',                 // স্ট্যাটাস (active, pending, archived)
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
