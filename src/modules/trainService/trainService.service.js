/**
 * TrainService Service Layer
 * Dinajpur Smart City Platform
 */
import { getDB } from '../../database/db.js';
import { ObjectId } from 'mongodb';

export const normalizeTrainService = (data) => {
    return {
        trainName: data.trainName || data.name || data.title || '',
        trainNumber: data.trainNumber || '705',
        trainType: data.trainType || 'আন্তঃনগর (Intercity)',
        route: data.route || 'পঞ্চগড় - দিনাজপুর - ঢাকা',
        startStation: data.startStation || 'বীর মুক্তিযোদ্ধা সিরাজুল ইসলাম (পঞ্চগড়)',
        endStation: data.endStation || 'ঢাকা (কমলাপুর)',
        stops: Array.isArray(data.stops) 
            ? data.stops 
            : ['দিনাজপুর', 'ফুলবাড়ী', 'পার্বতীপুর', 'নাটোর', 'জয়দেবপুর', 'ঢাকা'],
        departureTime: data.departureTime || 'সকাল ০৯:৫০ মি.',
        arrivalTime: data.arrivalTime || 'সন্ধ্যা ০৬:৫০ মি.',
        schedule: Array.isArray(data.schedule) 
            ? data.schedule 
            : ['দৈনিক নিয়মিত চলাচল করে'],
        offDays: Array.isArray(data.offDays) 
            ? data.offDays 
            : (data.offDay ? [data.offDay] : ['মঙ্গলবার']),
        ticketPrice: Array.isArray(data.ticketPrice) 
            ? data.ticketPrice 
            : [
                { seatClass: 'শোভন চেয়ার', price: '৪৫০ টাকা' },
                { seatClass: 'স্নিগ্ধা (এসি চেয়ার)', price: '৮৬০ টাকা' },
                { seatClass: 'এসি সিট (AC Seat)', price: '১০৩৫ টাকা' },
                { seatClass: 'এসি বার্থ (AC Berth)', price: '১৫৫৫ টাকা' }
            ],
        seatClasses: Array.isArray(data.seatClasses) 
            ? data.seatClasses 
            : ['শোভন চেয়ার', 'স্নিগ্ধা', 'এসি সিট', 'এসি বার্থ'],
        onlineTicketLink: data.onlineTicketLink || 'https://eticket.railway.gov.bd',
        counterInfo: data.counterInfo || 'দিনাজপুর রেলওয়ে স্টেশন টিকিট কাউন্টার, প্ল্যাটফর্ম ১',
        contactNumber: data.contactNumber || data.phone || '01711223344',
        status: data.status || 'active',
        createdAt: data.createdAt || new Date(),
        updatedAt: new Date()
    };
};

export const seedTrainServices = [
    {
        trainName: 'একতা এক্সপ্রেস (Ekota Express)',
        trainNumber: '৭০৫ / ৭০৬',
        trainType: 'আন্তঃনগর (Intercity)',
        route: 'পঞ্চগড় - দিনাজপুর - ঢাকা (কমলাপুর)',
        startStation: 'বীর মুক্তিযোদ্ধা সিরাজুল ইসলাম রেলওয়ে স্টেশন (পঞ্চগড়)',
        endStation: 'ঢাকা কমলাপুর রেলওয়ে স্টেশন',
        stops: ['পঞ্চগড়', 'দিনাজপুর', 'ফুলবাড়ী', 'পার্বতীপুর', 'শান্তাহার', 'নাটোর', 'জয়দেবপুর', 'ঢাকা'],
        departureTime: 'দিনাজপুর ছাড়ার সময়: রাত ০৯:৫০ মি.',
        arrivalTime: 'ঢাকা পৌঁছানোর সময়: সকাল ০৬:১০ মি.',
        schedule: ['প্রতিদিন রাতে দিনাজপুর থেকে ঢাকার উদ্দেশ্যে যাত্রা করে'],
        offDays: ['মঙ্গলবার'],
        ticketPrice: [
            { seatClass: 'শোভন চেয়ার', price: '৪৫০ টাকা' },
            { seatClass: 'স্নিগ্ধা (এসি)', price: '৮৬০ টাকা' },
            { seatClass: 'এসি সিট', price: '১০৩৫ টাকা' },
            { seatClass: 'এসি বার্থ', price: '১৫৫৫ টাকা' }
        ],
        seatClasses: ['শোভন চেয়ার', 'স্নিগ্ধা', 'এসি সিট', 'এসি বার্থ'],
        onlineTicketLink: 'https://eticket.railway.gov.bd',
        counterInfo: 'দিনাজপুর রেলওয়ে জংশন প্রধান টিকিট কাউন্টার, প্ল্যাটফর্ম ১',
        contactNumber: '01711223344',
        status: 'active'
    },
    {
        trainName: 'দ্রুতযান এক্সপ্রেস (Dootojan Express)',
        trainNumber: '৭৫৭ / ৭৫৮',
        trainType: 'আন্তঃনগর (Intercity)',
        route: 'পঞ্চগড় - দিনাজপুর - ঢাকা (কমলাপুর)',
        startStation: 'পঞ্চগড়',
        endStation: 'ঢাকা কমলাপুর',
        stops: ['পঞ্চগড়', 'দিনাজপুর', 'পার্বতীপুর', 'বিরামপুর', 'জয়পুরহাট', 'শান্তাহার', 'নাটোর', 'ঢাকা'],
        departureTime: 'দিনাজপুর ছাড়ার সময়: সকাল ০৮:৪০ মি.',
        arrivalTime: 'ঢাকা পৌঁছানোর সময়: বিকাল ০৫:২৫ মি.',
        schedule: ['প্রতিদিন সকালে দিনাজপুর থেকে ঢাকার উদ্দেশ্যে ছাড়ি'],
        offDays: ['বুধবার'],
        ticketPrice: [
            { seatClass: 'শোভন চেয়ার', price: '৪৫০ টাকা' },
            { seatClass: 'স্নিগ্ধা (এসি)', price: '৮৬০ টাকা' },
            { seatClass: 'এসি সিট', price: '১০৩৫ টাকা' }
        ],
        seatClasses: ['শোভন চেয়ার', 'স্নিগ্ধা', 'এসি সিট'],
        onlineTicketLink: 'https://eticket.railway.gov.bd',
        counterInfo: 'দিনাজপুর রেলওয়ে স্টেসন কাউন্টার ৩',
        contactNumber: '01712334455',
        status: 'active'
    },
    {
        trainName: 'পঞ্চগড় এক্সপ্রেস (Panchagarh Express)',
        trainNumber: '৭৯৩ / ৭৯৪',
        trainType: 'সুপারফাস্ট আন্তঃনগর (Superfast Intercity)',
        route: 'পঞ্চগড় - দিনাজপুর - ঢাকা (কমলাপুর)',
        startStation: 'পঞ্চগড়',
        endStation: 'ঢাকা কমলাপুর',
        stops: ['পঞ্চগড়', 'দিনাজপুর', 'পার্বতীপুর', 'শান্তাহার', 'ঢাকা'],
        departureTime: 'দিনাজপুর ছাড়ার সময়: দুপুর ০১:৩০ মি.',
        arrivalTime: 'ঢাকা পৌঁছানোর সময়: রাত ০৯:৪০ মি.',
        schedule: ['বিরতিহীন দ্রুতগতির সুপারফাস্ট সার্ভিস'],
        offDays: ['কোন সাপ্তাহিক বন্ধ নেই (সপ্তাহে ৭ দিন)'],
        ticketPrice: [
            { seatClass: 'শোভন চেয়ার', price: '৪৮০ টাকা' },
            { seatClass: 'স্নিগ্ধা (এসি)', price: '৯২০ টাকা' },
            { seatClass: 'এসি বার্থ', price: '১৬৫০ টাকা' }
        ],
        seatClasses: ['শোভন চেয়ার', 'স্নিগ্ধা', 'এসি বার্থ'],
        onlineTicketLink: 'https://eticket.railway.gov.bd',
        counterInfo: 'দিনাজপুর প্রধান স্টেশন ভিআইপি কাউন্টার',
        contactNumber: '01713445566',
        status: 'active'
    },
    {
        trainName: 'কাঞ্চন কম্যুটার / এক্সপ্রেস (Kanchan Commuter)',
        trainNumber: '৪১ / ৪২',
        trainType: 'কম্যুটার / এক্সপ্রেস (Commuter)',
        route: 'দিনাজপুর - রাধানগর - পঞ্চগড়',
        startStation: 'দিনাজপুর জংশন',
        endStation: 'পঞ্চগড়',
        stops: ['দিনাজপুর', 'মঙ্গলপুর', 'সেতাবগঞ্জ', 'পীরগঞ্জ', 'ঠাকুরগাঁও', 'পঞ্চগড়'],
        departureTime: 'দিনাজপুর ছাড়ার সময়: দুপুর ১২:১৫ মি.',
        arrivalTime: 'পঞ্চগড় পৌঁছানোর সময়: দুপুর ০২:৩০ মি.',
        schedule: ['আঞ্চলিক যাত্রীদের জন্য প্রতিদিন চলাচল করে'],
        offDays: ['রবিবার'],
        ticketPrice: [
            { seatClass: 'শোভন (সাধারণ)', price: '৫০ টাকা' },
            { seatClass: 'শোভন চেয়ার', price: '৮০ টাকা' }
        ],
        seatClasses: ['শোভন', 'শোভন চেয়ার'],
        onlineTicketLink: 'https://eticket.railway.gov.bd',
        counterInfo: 'দিনাজপুর স্টেশন লোকাল কাউন্টার ২',
        contactNumber: '01714556677',
        status: 'active'
    },
    {
        trainName: 'দুলারী এক্সপ্রেস (Dularie Express)',
        trainNumber: '৫১ / ৫২',
        trainType: 'মেইল / লোকাল (Mail Train)',
        route: 'দিনাজপুর - সান্তাহার - বগুড়া',
        startStation: 'দিনাজপুর',
        endStation: 'সান্তাহার / বগুড়া',
        stops: ['দিনাজপুর', 'আউলিযাপুকুর', 'ফুলবাড়ী', 'বিরামপুর', 'হিলি', 'পাঁচবিবি', 'জয়পুরহাট', 'সান্তাহার'],
        departureTime: 'দিনাজপুর ছাড়ার সময়: সকাল ০৬:০০ মি.',
        arrivalTime: 'সান্তাহার পৌঁছানোর সময়: সকাল ১০:১৫ মি.',
        schedule: ['প্রতিদিন সকালে ছেড়ে যায়'],
        offDays: ['কোন বন্ধ নেই'],
        ticketPrice: [
            { seatClass: 'সাধারণ লোকাল', price: '৪০ টাকা' },
            { seatClass: 'দ্বিতীয় শ্রেণী', price: '৬৫ টাকা' }
        ],
        seatClasses: ['সাধারণ লোকাল', 'দ্বিতীয় শ্রেণী'],
        onlineTicketLink: 'https://eticket.railway.gov.bd',
        counterInfo: 'দিনাজপুর প্ল্যাটফর্ম ২ কাউন্টার',
        contactNumber: '01715667788',
        status: 'active'
    }
];

export const getAllTrainServicesService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        return seedTrainServices.map((item, idx) => ({ _id: (idx + 1).toString(), ...normalizeTrainService(item) }));
    }
    try {
        const collection = db.collection('trainServices');
        let filter = {};
        if (query.status && query.status !== 'all') {
            filter.status = query.status;
        }
        if (query.search) {
            filter.$or = [
                { trainName: { $regex: query.search, $options: 'i' } },
                { trainNumber: { $regex: query.search, $options: 'i' } },
                { route: { $regex: query.search, $options: 'i' } }
            ];
        }

        let items = await collection.find(filter).toArray();
        if (items.length === 0 && (!query.status || query.status === 'active')) {
            console.log('Seeding initial Train Services data...');
            const normalizedSeeds = seedTrainServices.map(normalizeTrainService);
            await collection.insertMany(normalizedSeeds);
            items = await collection.find(filter).toArray();
        }
        return items.map(item => ({ ...item, ...normalizeTrainService(item) }));
    } catch (err) {
        console.error('Error in getAllTrainServicesService:', err);
        return seedTrainServices.map((item, idx) => ({ _id: (idx + 1).toString(), ...normalizeTrainService(item) }));
    }
};

export const getTrainServiceByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        const item = seedTrainServices[0];
        return { _id: id, ...normalizeTrainService(item) };
    }
    const collection = db.collection('trainServices');
    let queryId = id;
    try {
        if (typeof id === 'string' && id.length === 24) {
            queryId = new ObjectId(id);
        }
    } catch (e) {
        queryId = id;
    }
    const item = await collection.findOne({ _id: queryId });
    return item ? { ...item, ...normalizeTrainService(item) } : null;
};

export const createTrainServiceService = async (data) => {
    const db = getDB();
    const normalized = normalizeTrainService(data);
    if (!db) return { _id: Date.now().toString(), ...normalized };
    const collection = db.collection('trainServices');
    const result = await collection.insertOne(normalized);
    return { _id: result.insertedId, ...normalized };
};

export const updateTrainServiceService = async (id, data) => {
    const db = getDB();
    const normalized = normalizeTrainService(data);
    if (!db) return { _id: id, ...normalized };
    const collection = db.collection('trainServices');
    let queryId = id;
    try {
        if (typeof id === 'string' && id.length === 24) {
            queryId = new ObjectId(id);
        }
    } catch (e) {
        queryId = id;
    }
    await collection.updateOne({ _id: queryId }, { $set: normalized });
    return { _id: id, ...normalized };
};

export const deleteTrainServiceService = async (id) => {
    const db = getDB();
    if (!db) return true;
    const collection = db.collection('trainServices');
    let queryId = id;
    try {
        if (typeof id === 'string' && id.length === 24) {
            queryId = new ObjectId(id);
        }
    } catch (e) {
        queryId = id;
    }
    const result = await collection.deleteOne({ _id: queryId });
    return result.deletedCount > 0;
};
