/**
 * Job Model Schema
 * Represents 24 fields for Job Information (চাকরি তথ্য)
 */
export const jobSchema = {
    collectionName: 'jobs',
    fields: {
        id: 'ObjectId',
        title: 'String',                   // চাকরির পদবী
        companyName: 'String',             // প্রতিষ্ঠানের নাম
        companyLogo: 'String',             // লোগো URL
        description: 'String',             // বিবরণ
        jobType: 'String',                 // চাকরির ধরন (ফুল-টাইম, পার্ট-টাইম, চুক্তিভিত্তিক, রিমোট)
        employmentType: 'String',          // নিয়োগের ধরন (সরকারি, বেসরকারি, এনজিও, ব্যাংক, চুক্তিভিত্তিক)
        category: 'String',                // ক্যাটাগরি (আইটি, ব্যাংক, শিক্ষকতা, বিপণন, প্রকৌশল, স্বাস্থ্য)
        salaryMin: 'Number',               // সর্বনিম্ন বেতন
        salaryMax: 'Number',               // সর্বোচ্চ বেতন
        salaryType: 'String',              // বেতনের ধরন (মাসিক, বার্ষিক, আলোচনা সাপেক্ষে, দৈনিক)
        location: 'String',                // কর্মস্থল
        vacancy: 'Number',                 // পদসংখ্যা
        educationRequirement: 'String',    // শিক্ষাগত যোগ্যতা
        experienceRequirement: 'String',   // অভিজ্ঞতা
        skills: 'Array',                   // প্রয়োজনীয় স্কিলসমূহ []
        responsibilities: 'Array',         // দায়িত্বসমূহ []
        benefits: 'Array',                 // সুযোগ-সুবিধাসমূহ []
        applicationDeadline: 'String',     // আবেদনের শেষ তারিখ (YYYY-MM-DD)
        applicationMethod: 'String',       // আবেদনের প্রক্রিয়া (অনলাইন লিংক, ইমেইল, সরাসরি/ডাকযোগে, ফোন)
        applicationLink: 'String',         // আবেদন লিংক
        contactEmail: 'String',            // যোগাযোগের ইমেইল
        contactPhone: 'String',            // যোগাযোগের নম্বর
        postedDate: 'String',              // প্রকাশের তারিখ (YYYY-MM-DD)
        isFeatured: 'Boolean',             // ফিচার্ড জব
        status: 'String',                  // স্ট্যাটাস ('Active', 'Expired', 'Draft')
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};

export default jobSchema;
