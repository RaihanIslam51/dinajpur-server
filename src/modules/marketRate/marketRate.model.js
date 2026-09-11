/**
 * MarketRate (আজকের বাজার দর) Model Schema
 */
export const marketRateSchema = {
    collectionName: 'market_rates',
    fields: {
        id: 'ObjectId',
        productName: 'String',      // পণ্যের নাম (e.g. চাল (নাজিরশাইল))
        category: 'String',         // ক্যাটাগরি (e.g. চাল ও দানা শস্য, শাকসবজি, মাংস ও মাছ)
        unit: 'String',             // একক (e.g. কেজি, লিটার, ডজন, হালি)
        price: 'Number',            // বর্তমান মূল্য (৳)
        previousPrice: 'Number',    // পূর্বের মূল্য (৳)
        minimumPrice: 'Number',     // সর্বনিম্ন মূল্য (৳)
        maximumPrice: 'Number',     // সর্বোচ্চ মূল্য (৳)
        marketName: 'String',       // বাজারের নাম (e.g. বাহাদুর বাজার)
        marketLocation: 'String',   // বাজারের অবস্থান (e.g. দিনাজপুর সদর)
        priceDate: 'Date',          // দর প্রকাশের তারিখ
        source: 'String',           // তথ্য সূত্র (e.g. বাজার মনিটরিং কমিটি)
        image: 'String',            // পণ্যের ছবি URL
        description: 'String',      // বিবরণ / পণ্যের মান সংক্রান্ত মন্তব্য
        status: 'String',           // স্ট্যাটাস (active, pending, archived)
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
