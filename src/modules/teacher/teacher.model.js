/**
 * Teacher (শিক্ষক / হোম টিউটর) Model Schema
 */
export const teacherSchema = {
    collectionName: 'teachers',
    fields: {
        id: 'ObjectId',
        name: 'String',                   // শিক্ষকের নাম (e.g. তানভীর আহমেদ)
        profileImage: 'String',           // প্রোফাইল ছবি URL
        gender: 'String',                 // লিঙ্গ (পুরুষ / নারী)
        subject: 'String',                // পঠিত বিষয় / মূল বিষয় (e.g. গণিত ও পদার্থবিজ্ঞান)
        qualification: 'Array',           // শিক্ষাগত যোগ্যতা [String] (e.g. বিএসসি ইন সিএসই, এইচএসটিইউ)
        institution: 'String',            // বর্তমান বিশ্ববিদ্যালয় / প্রতিষ্ঠান (e.g. HSTU)
        experience: 'String',             // টিউশন ও শিক্ষাদান অভিজ্ঞতা (e.g. ৪ বছর+)
        specialization: 'String',         // বিশেষত্ব (e.g. এসএসসি ও এইচএসসি ফিজিক্স ও হায়ার ম্যাথ)
        teachingLevel: 'Array',           // পড়ানোর স্তরসমূহ [String] (e.g. Class 9-10, HSC, Admission)
        phone: 'String',                  // অভিভাবক যোগাযোগ ফোন নম্বর
        email: 'String',                  // ইমেইল ঠিকানা
        address: 'String',                // বর্তমান বাসস্থান / মেস ঠিকানা
        area: 'String',                   // টিউশনের এলাকা (e.g. সুইহারী, উপশহর, কেবিএম মোড়)
        onlineTeaching: 'Boolean',        // অনলাইন জুম/গুগল মিট ক্লাসের সুবিধা (true/false)
        homeTutoring: 'Boolean',          // বাসায় গিয়ে পড়ানোর সুবিধা (true/false)
        availableDays: 'Array',           // সপ্তাহে পড়ানোর দিনসমূহ [String] (e.g. সপ্তাহে ৩ দিন, সপ্তাহে ৪ দিন)
        availableTime: 'String',          // পড়ানোর সময়সূচী (e.g. বিকাল ৪:০০ - রাত ৮:০০)
        monthlyFee: 'String',             // আনুমানিক মাসিক বেতন (e.g. ৳৩৫০০ - ৳৫০০০)
        perClassFee: 'String',            // ক্লাস প্রতি ফি (e.g. ৳৪০০)
        rating: 'Number',                 // অভিভাবক ও শিক্ষার্থী রেটিং (1.0 to 5.0)
        totalReviews: 'Number',           // মোট রিভিউ / রেটিং সংখ্যা
        isVerified: 'Boolean',            // স্মার্ট সিটি ও আইডি কার্ড যাচাইকৃত (true/false)
        status: 'String',                 // স্ট্যাটাস (active, pending, archived)
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
