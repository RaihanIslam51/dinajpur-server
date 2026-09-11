/**
 * Hotel (হোটেল) Model Schema
 */
export const hotelSchema = {
    collectionName: 'hotels',
    fields: {
        id: 'ObjectId',
        name: 'String',                   // হোটেলের নাম (e.g. হোটেল ডায়মন্ড আবাসিক)
        logo: 'String',                   // লোগো চিত্র URL
        coverImage: 'String',             // কভার চিত্র URL
        images: 'Array',                  // হোটেল ও রুমের গ্যালারি ছবিসমূহ [String]
        description: 'String',            // বিবরণী ও নিয়মাবলী
        hotelType: 'String',              // ধরণ (আবাসিক হোটেল, থ্রি-স্টার, রেসোর্ট, গেস্ট হাউস)
        starRating: 'String',             // স্টার রেটিং (3-Star, Standard, Deluxe, Luxury)
        address: 'String',                // ঠিকানা (e.g. স্টেশন রোড, দিনাজপুর সদর)
        area: 'String',                   // এলাকা (e.g. স্টেশন রোড, সুইহারী, উপশহর)
        phone: 'String',                  // রুম বুকিং ফোন নম্বর
        email: 'String',                  // ইমেইল ঠিকানা
        website: 'String',                // ওয়েবসাইট URL
        rooms: 'Array',                   // রুমের ধরণ ও ভাড়ার তালিকা [String]
        amenities: 'Array',               // সুযোগ-সুবিধাসমূহ [String] (e.g. এসি, জেনারেটর, পার্কিং)
        checkInTime: 'String',            // চেক-ইন সময় (e.g. 12:00 PM)
        checkOutTime: 'String',           // চেক-আউট সময় (e.g. 11:00 AM)
        bookingAvailable: 'Boolean',      // অগ্রিম বুকিং সুবিধা আছে কিনা (true/false)
        restaurantAvailable: 'Boolean',   // নিজস্ব রেস্টুরেন্ট/ডাইনিং আছে কিনা (true/false)
        parking: 'Boolean',               // পার্কিং সুবিধা আছে কিনা (true/false)
        wifi: 'Boolean',                  // ফ্রি ওয়াই-ফাই আছে কিনা (true/false)
        breakfast: 'Boolean',             // বিনামূল্যে ব্রেকফাস্ট আছে কিনা (true/false)
        location: 'String',               // জিপিএস / অবস্থান
        priceRange: 'String',             // ভাড়ার সীমা (e.g. ৳৮০০ - ৳৩৫০০)
        rating: 'Number',                 // ইউজার রেটিং (1.0 to 5.0)
        reviews: 'Array',                 // রিভিউ ও কমেন্টসমূহ [String]
        isFeatured: 'Boolean',            // ফিচার্ড হোটেল (true/false)
        isVerified: 'Boolean',            // স্মার্ট সিটি যাচাইকৃত (true/false)
        status: 'String',                 // স্ট্যাটাস (active, pending, archived)
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
