/**
 * Complaint (অভিযোগ) Model Schema
 */
export const complaintSchema = {
    collectionName: 'complaints',
    fields: {
        id: 'ObjectId',
        trackingCode: 'String',            // ট্র্যাকিং কোড (e.g. CMP-2026-9812)
        title: 'String',                   // অভিযোগের বিষয় / শিরোনাম
        category: 'String',                // অভিযোগের ক্যাটাগরি (e.g. বিদ্যুৎ ও আলো, সড়ক ও কালভার্ট, বর্জ্য ব্যবস্থাপনা)
        description: 'String',             // বিস্তারিত বিবরণ
        location: 'String',                // ওয়ার্ড / এলাকা
        isAnonymous: 'Boolean',            // নাম গোপন কিনা (true/false)
        complainantName: 'String',         // আবেদনকারীর নাম (যদি isAnonymous: false হয়)
        complainantPhone: 'String',        // ফোন নম্বর (যদি isAnonymous: false হয়)
        status: 'String',                  // স্ট্যাটাস (pending, in_progress, resolved)
        agreeVotes: 'Number',              // একমত ভোটের সংখ্যা
        disagreeVotes: 'Number',           // দ্বিমত ভোটের সংখ্যা
        adminNotes: 'String',              // কর্তৃপক্ষের মন্তব্য
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
