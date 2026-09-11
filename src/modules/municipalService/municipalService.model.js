/**
 * MunicipalService (পৌর সেবা) Model Schema
 */
export const municipalServiceSchema = {
    collectionName: 'municipalServices',
    fields: {
        id: 'ObjectId',
        name: 'String',                   // সেবার নাম (e.g. ট্রেড লাইসেন্স ইস্যু ও নবায়ন)
        serviceType: 'String',            // সেবার ধরণ (লাইসেন্স ও সনদ, কর ও রাজস্ব, পরিচ্ছন্নতা, অবকাঠামো)
        description: 'String',            // সেবার বিশদ বিবরণী ও নিয়মাবলী
        officeName: 'String',             // শাখা / বিভাগ (e.g. দিনাজপুর পৌরসভা - ট্রেড লাইসেন্স শাখা)
        address: 'String',                // ঠিকানা (e.g. পৌরসভা মোড়, দিনাজপুর সদর)
        phone: 'String',                  // দায়িত্বপ্রাপ্ত কর্মকর্তার ফোন নম্বর
        hotline: 'String',                // পৌরসভার হেল্পলাইন / হটলাইন (e.g. 0531-63100)
        email: 'String',                  // ইমেইল ঠিকানা
        website: 'String',                // ই-সেবা পোর্টাল URL (e.g. https://dinajpurpoureshava.gov.bd)
        requiredDocuments: 'Array',       // প্রয়োজনীয় কাগজপত্রসমূহ [String]
        serviceFee: 'String',             // নির্ধারিত সেবা ফি (e.g. ৳৫০০ + ১৫% ভ্যাট)
        processingTime: 'String',         // প্রসেসিং সময় (e.g. ৩-৫ কর্মদিবস)
        applicationMethod: 'String',      // আবেদন পদ্ধতি (e.g. অনলাইন ই-পোর্টাল বা সরাসরি ওয়াই-এস-সি কাউন্টার)
        onlineApplication: 'Boolean',     // অনলাইন আবেদনের সুবিধা আছে কিনা (true/false)
        officeHours: 'String',            // অফিস সময় (e.g. রবি-বৃহস্পতিবার: ৯:০০ AM - ৪:০০ PM)
        location: 'String',               // জিও লোকেশন / ম্যাপ অবস্থান
        status: 'String',                 // স্ট্যাটাস (active, pending, archived)
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
