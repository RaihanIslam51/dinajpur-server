/**
 * PoliceStation (থানা পুলিশ) Model Schema
 */
export const policeStationSchema = {
    collectionName: 'police_stations',
    fields: {
        id: 'ObjectId',
        name: 'String',                // থানা / পুলিশ ফাঁড়ির নাম (e.g. দিনাজপুর কোতোয়ালী মডেল থানা)
        policeStationType: 'String',   // ধরণ (মডেল থানা, উপজেলা থানা, পুলিশ ফাঁড়ি, হাইওয়ে পুলিশ)
        description: 'String',         // বিবরণ ও জরুরি নির্দেশনা
        address: 'String',             // সম্পূর্ণ ঠিকানা (e.g. কালীতলা, দিনাজপুর সদর)
        area: 'String',                // এলাকা / উপজেলা (e.g. দিনাজপুর সদর, ফুলবাড়ী, বিরামপুর)
        phone: 'String',               // থানায় ডিউটি অফিসার / কন্ট্রোল রুম ফোন নম্বর
        emergencyNumber: 'String',     // জরুরি ৯৯৯ / থানা হটলাইন নম্বর
        ocName: 'String',              // ভারপ্রাপ্ত কর্মকর্তা (ওসি) স্যারের নাম
        ocPhone: 'String',             // ভারপ্রাপ্ত কর্মকর্তা (ওসি) মোবাইল নম্বর
        email: 'String',               // অফিসিয়াল ইমেইল ঠিকানা
        website: 'String',             // ওয়েবসাইট URL
        serviceAreas: 'Array',         // আওতাধীন সেবার এলাকা/ইউনিয়নসমূহ [String]
        complaintMethods: 'Array',     // অভিযোগ দেওয়ার পদ্ধতিসমূহ [String]
        onlineGD: 'Boolean',           // অনলাইন জিডি সুবিধা উপলব্ধ কিনা (true/false)
        location: 'String',            // জিপিএস / অবস্থান
        officeHours: 'String',         // অফিসিয়াল সেবা সময় (e.g. ২৪ ঘণ্টা খোলা)
        status: 'String',              // স্ট্যাটাস (active, pending, archived)
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
