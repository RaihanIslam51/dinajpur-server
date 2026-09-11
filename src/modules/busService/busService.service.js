/**
 * BusService (বাস সেবা) Service Layer with Full Field Normalization
 */
import { getDB } from '../../database/db.js';

let initialBusServices = [
    {
        _id: 'bs_001',
        name: 'এস আর ট্রাভেলস (SR Travels)',
        serviceType: 'এসি স্কা নিয়ে (AC Scania / Hyundai)',
        description: 'দিনাজপুর থেকে ঢাকা গাবতলী/মহাখালী রুটে আরামদায়ক প্রিমিয়াম এসি স্লিপার ও চেয়ার কোচ সেবা।',
        phone: '01711-234567',
        address: 'কেন্দ্রীয় বাস টার্মিনাল কাউন্টার, দিনাজপুর',
        route: 'দিনাজপুর ⇄ ঢাকা',
        startPoint: 'দিনাজপুর কেন্দ্রীয় বাস টার্মিনাল',
        endPoint: 'গাবতলী / মহাখালী বাস টার্মিনাল, ঢাকা',
        stops: ['ফুলবাড়ী', 'বিরামপুর', 'গোবিন্দগঞ্জ', 'বগুড়া বাইপাস'],
        fare: 1200,
        rent: 25000,
        schedule: ['07:30 AM', '10:00 AM', '09:30 PM', '10:45 PM'],
        vehicleType: 'Hyundai Universe Express AC',
        availability: 'প্রতিদিন সচল',
        location: 'দিনাজপুর বাস টার্মিনাল',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'bs_002',
        name: 'শ্যামলী এন আর ট্রাভেলস (Shyamoli NR)',
        serviceType: 'নন-এসি চেয়ার কোচ (Non-AC Deluxe)',
        description: 'দিনাজপুর থেকে ঢাকা ও চট্টগ্রাম রুটে নিয়মানুগ ও নির্ভরযোগ্য নন-এসি বাস সেবা।',
        phone: '01712-345678',
        address: 'দশমাইল কাউন্টার ও টার্মিনাল কাউন্টার, দিনাজপুর',
        route: 'দিনাজপুর ⇄ ঢাকা ⇄ চট্টগ্রাম',
        startPoint: 'দিনাজপুর কেন্দ্রীয় টার্মিনাল',
        endPoint: 'আকমল আলী রোড, অলংকার মোড়, চট্টগ্রাম',
        stops: ['রংপুর', 'বগুড়া', 'সিরাজগঞ্জ', 'ঢাকা', 'কুমিল্লা'],
        fare: 850,
        rent: 20000,
        schedule: ['06:30 AM', '08:00 AM', '08:30 PM', '09:45 PM'],
        vehicleType: 'Hino 1J Non-AC Deluxe 36-Seat',
        availability: 'প্রতিদিন সচল',
        location: 'দিনাজপুর টার্মিনাল',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'bs_003',
        name: 'হানিফ এন্টারপ্রাইজ (Hanif Enterprise)',
        serviceType: 'এসি ও নন-এসি মিক্সড',
        description: 'দেশের অন্যতম দীর্ঘমেয়াদী পরিবহন সংস্থা। ২৪ ঘণ্টা কাউন্টার সাপোর্ট রয়েছে।',
        phone: '01713-456789',
        address: 'সুইহারী কাউন্টার ও সেন্ট্রাল টার্মিনাল, দিনাজপুর',
        route: 'দিনাজপুর ⇄ ঢাকা ⇄ সিলেট',
        startPoint: 'দিনাজপুর সুইহারী মোড়',
        endPoint: 'কদমতলী বাস টার্মিনাল, সিলেট',
        stops: ['ফুলবাড়ী', 'বগুড়া', 'ঢাকা বাইপাস', 'ভৈরব', 'সিলেট'],
        fare: 900,
        rent: 22000,
        schedule: ['09:00 AM', '11:00 AM', '10:00 PM', '11:30 PM'],
        vehicleType: 'Hino RM2 AC & Deluxe',
        availability: 'প্রতিদিন সচল',
        location: 'সুইহারী মোড়, দিনাজপুর',
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'bs_004',
        name: 'দিনাজপুর জেলা মোটর মালিক সমিতি লোকাল ডাইরেক্ট',
        serviceType: 'লোকাল ডাইরেক্ট গেইটলক',
        description: 'দিনাজপুর থেকে রংপুর, সৈয়দপুর, ঠাকুরগাঁও ও পঞ্চগড় রুটে ঘনঘন লোকাল ডাইরেক্ট বাস সেবা।',
        phone: '01714-567890',
        address: 'মেডিকেল মোড় ও চেরাঘী বাস স্ট্যান্ড',
        route: 'দিনাজপুর ⇄ রংপুর / সৈয়দপুর',
        startPoint: 'মেডিকেল মোড়, দিনাজপুর',
        endPoint: 'কেন্দ্রীয় বাস টার্মিনাল, রংপুর',
        stops: ['সৈয়দপুর মোড়', 'তাজহাট', 'মেডিকেল মোড়'],
        fare: 120,
        rent: 8000,
        schedule: ['প্রতি ১৫ মিনিট পর পর সকাল ০৬:০০ হতে রাত ০৯:০০ পর্যন্ত'],
        vehicleType: 'Local Gate-Lock Mini Bus',
        availability: 'প্রতিদিন সচল (১৫ মি. ব্যবধানে)',
        location: 'মেডিকেল মোড়, দিনাজপুর',
        status: 'active',
        createdAt: new Date().toISOString()
    }
];

const normalizeDoc = (doc) => {
    if (!doc) return doc;

    const scheduleArr = Array.isArray(doc.schedule) ? doc.schedule : 
        (doc.departureTimes ? (Array.isArray(doc.departureTimes) ? doc.departureTimes : [doc.departureTimes]) : 
        (doc.schedule ? [doc.schedule] : ['08:00 AM', '09:00 PM']));

    const stopsArr = Array.isArray(doc.stops) ? doc.stops : (doc.stops ? [doc.stops] : []);

    return {
        ...doc,
        name: doc.name || doc.busServiceName || doc.serviceName || doc.companyName || doc.operatorName || 'বাস সেবা',
        serviceType: doc.serviceType || doc.busType || 'ডেলাক্স বাস',
        phone: doc.phone || doc.contactNumber || doc.counterPhone || doc.bookingNumber || '01700-000000',
        address: doc.address || doc.counterAddress || doc.departurePoint || doc.location || 'দিনাজপুর টার্মিনাল',
        route: doc.route || `${doc.startPoint || doc.departurePoint || 'দিনাজপুর'} ⇄ ${doc.endPoint || doc.destinationPoint || 'ঢাকা'}`,
        startPoint: doc.startPoint || doc.departurePoint || doc.location || 'দিনাজপুর',
        endPoint: doc.endPoint || doc.destinationPoint || 'ঢাকা',
        stops: stopsArr,
        fare: Number(doc.fare !== undefined && doc.fare !== null && doc.fare !== 0 ? doc.fare : doc.ticketPrice) || 0,
        rent: Number(doc.rent) || 0,
        schedule: scheduleArr,
        vehicleType: doc.vehicleType || doc.busType || 'সাধারণ বাস',
        availability: doc.availability || 'প্রতিদিন সচল',
        location: doc.location || 'দিনাজপুর বাস টার্মিনাল'
    };
};

export const getAllBusServicesService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        let filtered = [...initialBusServices];
        if (query.serviceType) {
            filtered = filtered.filter(item => item.serviceType.includes(query.serviceType));
        }
        if (query.search) {
            const q = query.search.toLowerCase();
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(q) || 
                item.route.toLowerCase().includes(q) || 
                item.endPoint.toLowerCase().includes(q)
            );
        }
        return filtered.map(normalizeDoc);
    }

    try {
        const collection = db.collection('bus_services');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialBusServices);
        }

        let filter = {};
        if (query.serviceType) filter.serviceType = { $regex: query.serviceType, $options: 'i' };
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { busServiceName: { $regex: query.search, $options: 'i' } },
                { route: { $regex: query.search, $options: 'i' } },
                { endPoint: { $regex: query.search, $options: 'i' } }
            ];
        }
        const rawDocs = await collection.find(filter).sort({ createdAt: -1 }).toArray();
        return rawDocs.map(normalizeDoc);
    } catch (err) {
        return initialBusServices.map(normalizeDoc);
    }
};

export const getBusServiceByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        return normalizeDoc(initialBusServices.find(item => item._id === id) || null);
    }
    const collection = db.collection('bus_services');
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const createBusServiceService = async (data) => {
    const db = getDB();
    const stopsArr = Array.isArray(data.stops) ? data.stops : 
        (typeof data.stops === 'string' ? data.stops.split(',').map(s => s.trim()).filter(Boolean) : []);
    
    const scheduleArr = Array.isArray(data.schedule) ? data.schedule : 
        (typeof data.schedule === 'string' ? data.schedule.split(',').map(s => s.trim()).filter(Boolean) : []);

    const newItem = {
        _id: 'bs_' + Date.now(),
        name: data.name,
        serviceType: data.serviceType || 'নন-এসি চেয়ার কোচ',
        description: data.description || '',
        phone: data.phone || '01700-000000',
        address: data.address || '',
        route: data.route || `${data.startPoint || 'দিনাজপুর'} ⇄ ${data.endPoint || 'ঢাকা'}`,
        startPoint: data.startPoint || 'দিনাজপুর',
        endPoint: data.endPoint || 'ঢাকা',
        stops: stopsArr,
        fare: Number(data.fare) || 0,
        rent: Number(data.rent) || 0,
        schedule: scheduleArr,
        vehicleType: data.vehicleType || 'সাধারণ বাস',
        availability: data.availability || 'প্রতিদিন সচল',
        location: data.location || 'দিনাজপুর বাস টার্মিনাল',
        status: data.status || 'active',

        // Legacy compatibility mappings
        busServiceName: data.name,
        busType: data.serviceType || 'নন-এসি চেয়ার কোচ',
        departurePoint: data.startPoint || 'দিনাজপুর',
        destinationPoint: data.endPoint || 'ঢাকা',
        counterAddress: data.address || '',
        contactNumber: data.phone || '01700-000000',
        ticketPrice: Number(data.fare) || 0,
        departureTimes: scheduleArr,

        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialBusServices.unshift(newItem);
        return normalizeDoc(newItem);
    }

    const collection = db.collection('bus_services');
    await collection.insertOne(newItem);
    return normalizeDoc(newItem);
};

export const updateBusServiceService = async (id, data) => {
    const db = getDB();
    const updatedData = { ...data, updatedAt: new Date().toISOString() };
    if (!db) {
        const index = initialBusServices.findIndex(item => item._id === id);
        if (index !== -1) {
            initialBusServices[index] = { ...initialBusServices[index], ...updatedData };
            return normalizeDoc(initialBusServices[index]);
        }
        return null;
    }
    const collection = db.collection('bus_services');
    await collection.updateOne({ _id: id }, { $set: updatedData });
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const deleteBusServiceService = async (id) => {
    const db = getDB();
    if (!db) {
        initialBusServices = initialBusServices.filter(item => item._id !== id);
        return true;
    }
    const collection = db.collection('bus_services');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
