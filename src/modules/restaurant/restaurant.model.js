/**
 * Restaurant (রেস্টুরেন্ট) Model Schema
 */
export const restaurantSchema = {
    collectionName: 'restaurants',
    fields: {
        id: 'ObjectId',
        name: 'String',                   // রেস্টুরেন্টের নাম (e.g. রূপসী বাংলা রেস্টুরেন্ট)
        logo: 'String',                   // লোগো চিত্র URL
        coverImage: 'String',             // কভার ব্যানার চিত্র URL
        images: 'Array',                  // খাবারের গ্যালারি ছবিসমূহ [String]
        description: 'String',            // বিবরণী ও বিশেষত্ব
        cuisineType: 'Array',             // খাবারের ধরনসমূহ [String] (e.g. বাংলা, চাইনিজ, ফাস্টফুড, বিরিয়ানি)
        address: 'String',                // ঠিকানা (e.g. মডার্ন মোড়, দিনাজপুর)
        area: 'String',                   // এলাকা (e.g. পুলহাট, বালুবাড়ী, সদর)
        phone: 'String',                  // বুকিং ও ক্যাটারিং ফোন নম্বর
        email: 'String',                  // ইমেইল ঠিকানা
        website: 'String',                // ওয়েবসাইট / ফেসবুক পেজ URL
        menu: 'Array',                    // স্পেশাল ডিশ ও খাবারের তালিকা [String]
        openingTime: 'String',            // খোলার সময় (e.g. 10:00 AM)
        closingTime: 'String',           // বন্ধের সময় (e.g. 11:00 PM)
        priceRange: 'String',             // মূল্য সীমা (e.g. ৳১৫০ - ৳১২০০)
        facilities: 'Array',              // সুবিধাসমূহ [String] (e.g. এসি, ফ্যামিলি কেবিন, লাইভ মিউজিক)
        deliveryAvailable: 'Boolean',      // হোম ডেলিভারি সুবিধা আছে কিনা (true/false)
        takeaway: 'Boolean',              // টেক-অ্যাওয়ে সুবিধা (true/false)
        reservationAvailable: 'Boolean',  // অগ্রিম টেবিল রেজালভেশন সুবিধা (true/false)
        paymentMethods: 'Array',          // পেমেন্ট মাধ্যম [String] (ক্যাশ, বিকাশ, নগদ, কার্ড)
        location: 'String',               // গুগল ম্যাপ / জিও লোকেশন
        rating: 'Number',                 // রেটিং (1.0 to 5.0)
        totalReviews: 'Number',           // মোট রিভিউ সংখ্যা
        isFeatured: 'Boolean',            // ফিচার্ড রেস্টুরেন্ট (true/false)
        isVerified: 'Boolean',            // স্মার্ট সিটি যাচাইকৃত (true/false)
        status: 'String',                 // স্ট্যাটাস (active, pending, archived)
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
