/**
 * HouseRental (বাসা ভাড়া) Model Schema
 */
export const houseRentalSchema = {
    collectionName: 'house_rentals',
    fields: {
        id: 'ObjectId',
        title: 'String',            // শিরোনাম (e.g. ৩ বেডরুমের সুসজ্জিত ফ্ল্যাট ভাড়া)
        propertyType: 'String',     // প্রপার্টি টাইপ (e.g. ফ্ল্যাট / এপার্টমেন্ট, সাবলেট, মেস)
        description: 'String',      // বিস্তারিত বিবরণ
        images: 'Array',            // ছবি গ্যালারি [String]
        address: 'String',          // ঠিকানা (e.g. রাজবাড়ী মোড়, দিনাজপুর)
        area: 'String',             // এলাকা / উপজেলা (e.g. উপশহর, দিনাজপুর সদর)
        location: 'String',         // ম্যাপ অবস্থান / জিপিএস
        bedrooms: 'Number',         // বেডরুম সংখ্যা
        bathrooms: 'Number',        // বাথরুম সংখ্যা
        balcony: 'Number',          // বারান্দা সংখ্যা
        floor: 'String',            // কত তলা (e.g. ৩য় তলা)
        totalFloors: 'String',      // মোট তলা (e.g. ৫ তলা ভবন)
        size: 'Number',             // আয়তন (sqft)
        rent: 'Number',             // মাসিক ভাড়া (৳)
        serviceCharge: 'Number',    // সার্ভিস চার্জ (৳)
        advanceAmount: 'Number',    // অগ্রিম জামানত (৳)
        availableFrom: 'String',    // কোন মাস থেকে খালি (e.g. ১লা অক্টোবর)
        furnished: 'String',        // ফার্নিচার স্ট্যাটাস (Full Furnished, Semi, Unfurnished)
        parking: 'String',          // পার্কিং সুবিধা (গাড়ি/বাইক পার্কিং)
        gas: 'String',              // গ্যাস সুবিধা (লাইন গ্যাস / সিলিন্ডার)
        water: 'String',            // পানি সুবিধা (২৪ ঘণ্টা ডিপ ওয়াটার)
        electricity: 'String',      // বিদ্যুৎ সুবিধা (প্রি-পেইড মিটার)
        contactName: 'String',       // যোগাযোগকারীর নাম
        contactPhone: 'String',      // যোগাযোগ নম্বর
        ownerId: 'String',          // মালিক আইডি
        status: 'String',           // স্ট্যাটাস (active, rented, pending, archived)
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
