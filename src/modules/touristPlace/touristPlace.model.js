/**
 * TouristPlace (দর্শনীয় স্থান) Model Schema
 */
export const touristPlaceSchema = {
    collectionName: 'tourist_places',
    fields: {
        id: 'ObjectId',
        name: 'String',             // দর্শনীয় স্থানের নাম (e.g. রামসাগর দিঘি)
        category: 'String',         // ক্যাটাগরি (e.g. ঐতিহাসিক স্থান, প্রাকৃতিক সৌন্দর্য, বিনোদন পার্ক)
        description: 'String',      // বিস্তারিত বিবরণ
        shortDescription: 'String', // সংক্ষিপ্ত বিবরণ
        images: 'Array',            // ছবি গ্যালারি [String]
        coverImage: 'String',       // কভার ছবি URL
        address: 'String',          // ঠিকানা (e.g. তেজপুর, রামসাগর)
        area: 'String',             // এলাকা / উপজেলা (e.g. দিনাজপুর সদর)
        location: 'String',         // ম্যাপ স্থানাঙ্ক / লোকেশন টেক্সট
        openingTime: 'String',      // খোলা হওয়ার সময় (e.g. 09:00 AM)
        closingTime: 'String',      // বন্ধ হওয়ার সময় (e.g. 06:00 PM)
        entryFee: 'Number',         // প্রবেশ ফি (৳)
        contactNumber: 'String',    // যোগাযোগের নম্বর
        facilities: 'Array',        // সুযোগ-সুবিধা [String] (e.g. পার্কিং, খাবার হোটেল, টয়লেট)
        bestTimeToVisit: 'String',  // উপযুক্ত সময় (e.g. অক্টোবর - মার্চ)
        howToGo: 'String',          // যাতায়াত ব্যবস্থা / কীভাবে যাবেন
        nearbyPlaces: 'Array',      // আশেপাশের দর্শনীয় স্থান [String]
        isFeatured: 'Boolean',      // ফিচার্ড কিনা
        isVerified: 'Boolean',      // যাচাইকৃত কিনা
        status: 'String',           // স্ট্যাটাস (active, pending, archived)
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
