/**
 * BusService (বাস সেবা) Model Schema
 */
export const busServiceSchema = {
    collectionName: 'bus_services',
    fields: {
        id: 'ObjectId',
        name: 'String',             // কোম্পানি / বাসের নাম (e.g. এস আর ট্রাভেলস)
        serviceType: 'String',      // সার্ভিস টাইপ (e.g. এসি বিজনেস ক্লাস, নন-এসি চেয়ার)
        description: 'String',      // বিবরণ
        phone: 'String',            // কাউন্টার ফোন নম্বর (e.g. 01711-000000)
        address: 'String',          // কাউন্টার ঠিকানা (e.g. টার্মিনাল, দিনাজপুর)
        route: 'String',            // রুট (e.g. দিনাজপুর ⇄ ঢাকা)
        startPoint: 'String',       // যাত্রা শুরুর স্থান (e.g. দিনাজপুর টার্মিনাল)
        endPoint: 'String',         // গন্তব্যস্থল (e.g. মহাখালী / গাবতলী, ঢাকা)
        stops: 'Array',             // মধ্যবর্তী স্টপেজ [String] (e.g. গোবিন্দগঞ্জ, বগুড়া)
        fare: 'Number',             // টিকিটের ভাড়া (৳)
        rent: 'Number',             // রিজার্ভ বা ভাড়ার রেট (৳)
        schedule: 'Array',          // সময়সূচী [String] (e.g. ["07:30 AM", "10:00 PM"])
        vehicleType: 'String',      // বাসের ধরণ (e.g. হুন্দাই স্কা নিয়ে এসি)
        availability: 'String',     // প্রতিদিন সচল / সাপ্তাহিক অফডে
        location: 'String',         // টার্মিনাল অবস্থান / জিপিএস
        status: 'String',           // স্ট্যাটাস (active, pending, archived)
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
