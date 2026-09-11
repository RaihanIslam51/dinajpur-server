import mongoose from 'mongoose';
import Pediatrics from './pediatrics.model.js';

export const initialPediatricsData = [
    {
        _id: 'ped-101',
        name: 'অধ্যাপক ড. মো: রফিকুল ইসলাম',
        title: 'প্রবীণ শিশু রোগ ও নবজাতক বিশেষজ্ঞ',
        degree: 'MBBS, FCPS (Pediatrics), MD (Child Health)',
        speciality: 'নবজাতকের জটিল আইসিইউ ও শিশু রোগ বিশেষজ্ঞ',
        workplace: 'দিনাজপুর এম এ আর মেডিকেল কলেজ ও হাসপাতাল',
        chamber: 'দিনাজপুর চাইল্ড কেয়ার ও নিউবর্ন সেন্টার',
        address: 'স্টেশন রোড, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        phone: '01711-889901',
        serialPhone: '01711-889902',
        visitingHours: 'বিকাল ৪:০০ - রাত ৮:৩০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '১০০০ টাকা',
        experience: '২২+ বছর',
        services: ['এনআইসিইউ ও পিআইসিইউ কনসালটেশন', 'নবজাতকের জন্ডিস চিকিৎসা', 'শিশুর হাঁপানি ও এলার্জি', 'বাড়তি ওজন ও পুষ্টি পরামর্শ'],
        rating: 4.9,
        reviewCount: 94,
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'ped-102',
        name: 'ড. মোসাম্মাত সাবরিনা পারভীন',
        title: 'শিশু পুষ্টি ও নিউরোলজি বিশেষজ্ঞ',
        degree: 'MBBS, DCH (DU), Fellow in Child Development',
        speciality: 'শিশুর মানসিক বৃদ্ধি, অটিজম ও নিউরোলজি specialist',
        workplace: 'দিনাজপুর জেনারেল হাসপাতাল',
        chamber: 'মাদার এন্ড চাইল্ড মেডিকেল সেন্টার',
        address: 'হাসপাতাল মোড়, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        phone: '01712-778811',
        serialPhone: '01712-778812',
        visitingHours: 'বিকাল ৫:০০ - রাত ৯:০০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '৮০০ টাকা',
        experience: '১৫+ বছর',
        services: ['শিশুর বিকাশ ও অটিজম অ্যাসেসমেন্ট', 'শিশু নিউরোলজি ও ফিটনেস', 'খাদ্যে অরুচি ও অপুষ্টি মেটানো', 'টিকা প্রদান সার্ভিস'],
        rating: 4.8,
        reviewCount: 68,
        image: 'https://images.unsplash.com/photo-1594824813566-88855ce78347?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'ped-103',
        name: 'বীরগঞ্জ চাইল্ড কেয়ার ও ভ্যাকসিনেশন সেন্টার',
        title: 'বিশেষায়িত শিশু ও নবজাতক ক্লিনিক',
        degree: 'প্রফেশনাল পেডিয়াট্রিক টিম',
        speciality: '২৪/৭ শিশু জরুরী চিকিৎসা ও টিকাদান',
        workplace: 'বীরগঞ্জ উপজেলা চাইল্ড উইং',
        chamber: 'বীরগঞ্জ চাইল্ড কেয়ার সেন্টার',
        address: 'নতুন বাসস্ট্যান্ড এলাকা, বীরগঞ্জ, দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        phone: '01713-667722',
        serialPhone: '01713-667723',
        visitingHours: 'সকাল ৯:০০ - রাত ৯:০০',
        offDay: 'খোলা প্রতিদিন',
        fee: '৬০০ টাকা',
        experience: '১২+ বছর',
        services: ['নবজাতক সাকশন ও ফটোথেরাপি', 'নিউমোনিয়া ও ডায়রিয়া কেয়ার', 'শিশুর নিয়মিত ভ্যাকসিনেশান', 'নেবুলাইজেশন সার্ভিস'],
        rating: 4.7,
        reviewCount: 52,
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'ped-104',
        name: 'ড. মো: কামরুল হাসান',
        title: 'শিশু হৃদরোগ ও কিডনি রোগ বিশেষজ্ঞ',
        degree: 'MBBS, MD (Pediatrics), Training in Pediatric Cardiology',
        speciality: 'শিশুদের জন্মগত হৃদরোগ ও মূত্রনালীর ইনফেকশন',
        workplace: 'দিনাজপুর মেডিকেল কলেজ',
        chamber: 'সেবা শিশু হাসপাতাল ও ডায়াগনস্টিক',
        address: 'জেল রোড, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        phone: '01714-556633',
        serialPhone: '01714-556634',
        visitingHours: 'বিকাল ৩:৩০ - রাত ৮:০০',
        offDay: 'বৃহস্পতিবার ও শুক্রবার বন্ধ',
        fee: '৮০০ টাকা',
        experience: '১৪+ বছর',
        services: ['শিশুর ইকোকার্ডিওগ্রাফি', 'জন্মগত হার্টের ছিদ্র ডায়াগনোসিস', 'শিশুর প্রোটিনুরিয়া ও নেফোটিক সিন্ড্রোম', 'জ্বর ও খিঁচুনি চিকিৎসা'],
        rating: 4.9,
        reviewCount: 75,
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'ped-105',
        name: 'ফুলবাড়ী কিডস কেয়ার অ্যান্ড নিউবর্ন ক্লিনিক',
        title: 'উপজেলা শিশু স্বাস্থ্য সেবা কেন্দ্র',
        degree: 'অভিজ্ঞ শিশু ডাক্তারবৃন্দ',
        speciality: 'শিশুর জরুরি জ্বর, বমি ও শ্বাসকষ্ট ম্যানেজমেন্ট',
        workplace: 'ফুলবাড়ী হেলথ কেয়ার সেন্টার',
        chamber: 'ফুলবাড়ী কিডস কেয়ার সেন্টার',
        address: 'মেডিকেল রোড, ফুলবাড়ী, দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        phone: '01715-445544',
        serialPhone: '01715-445545',
        visitingHours: 'সকাল ১০:০০ - রাত ৮:০০',
        offDay: 'রবিবার বন্ধ',
        fee: '৫০০ টাকা',
        experience: '১০+ বছর',
        services: ['শিশুর তীব্র জ্বর ও সর্দি-কাশি', 'শিশুর পানিশূন্যতা ও ওআরএস গাইডেন্স', 'ওজন বৃদ্ধির ডায়েট চার্ট', 'ডিজিটাল ইমার্জেন্সি স্যালাইন'],
        rating: 4.6,
        reviewCount: 41,
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'ped-106',
        name: 'পার্বতীপুর নিউবর্ন এন্ড পেডিয়াট্রিক ক্লিনিক',
        title: 'নবজাতক ও শিশু বিশেষজ্ঞ চেম্বার',
        degree: 'MBBS, DCH (Pediatrics)',
        speciality: 'কম ওজনের নবজাতকের যত্ন ও ইনকিউবেটর সাপোর্ট',
        workplace: 'পার্বতীপুর উপজেলা স্বাস্থ্য কমপ্লেক্স',
        chamber: 'পার্বতীপুর নিউবর্ন সেন্টার',
        address: 'রেলওয়ে জংশন মোড়, পার্বতীপুর, দিনাজপুর',
        upazila: 'পার্বতীপুর',
        phone: '01716-334455',
        serialPhone: '01716-334456',
        visitingHours: 'বিকাল ৪:০০ - রাত ৮:০০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '৬০০ টাকা',
        experience: '১১+ বছর',
        services: ['কম ওজনের শিশুর বিশেষ যত্ন', 'ইনকিউবেটর ও অক্সিজেন সেবা', 'নবজাতক জন্ডিস স্ক্রিনিং', 'মায়ের দুধ ও সঠিক ল্যাচিং শিক্ষা'],
        rating: 4.8,
        reviewCount: 57,
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'ped-107',
        name: 'ড. মো: তানভীর আহমেদ',
        title: 'শিশু এলার্জি ও শ্বাসকষ্ট বিশেষজ্ঞ',
        degree: 'MBBS, MD (Pediatrics), FCPS (Part 2)',
        speciality: 'শিশুর অ্যাজমা, টনসিল ও এলার্জি ডায়াগনোসিস',
        workplace: 'দিনাজপুর মেডিকেল কলেজ',
        chamber: 'পপুলার শিশু ও এলার্জি সেন্টার',
        address: 'কেবি রোড, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        phone: '01717-223366',
        serialPhone: '01717-223367',
        visitingHours: 'বিকাল ৪:৩০ - রাত ৮:৩০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '৭০০ টাকা',
        experience: '৯+ বছর',
        services: ['শিশু অ্যাজমা ইনহেলার ট্রেনিং', 'বারবার সর্দি লাগার স্থায়ী চিকিৎসা', 'ত্বকের চর্ম ও এলার্জি র‍্যাশ', 'খাদ্যে এলার্জি সনাক্তকরণ'],
        rating: 4.7,
        reviewCount: 39,
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'ped-108',
        name: 'চিরিরবন্দর শিশু রোগ ক্লিনিক',
        title: 'জরুরি শিশু স্বাস্থ্য কেন্দ্র',
        degree: 'পেডিয়াট্রিক কনসালট্যান্ট টিম',
        speciality: 'শিশুদের মৌসুমী রোগবালাই ও পেটের পীড়া',
        workplace: 'চিরিরবন্দর উপজেলা স্বাস্থ্য কমপ্লেক্স',
        chamber: 'চিরিরবন্দর শিশু ডিরেক্টরি চেম্বার',
        address: 'কলেজ মোড়, চিরিরবন্দর, দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        phone: '01718-112277',
        serialPhone: '01718-112278',
        visitingHours: 'সকাল ৯:৩০ - বিকাল ৫:০০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '৪০০ টাকা',
        experience: '৮+ বছর',
        services: ['শিশুর পাতলা পায়খানা ও বমি', 'পেট ব্যথা ও কৃমির চিকিৎসা', 'শিশুর বয়স অনুযায়ী সঠিক খাদ্যতালিকা', 'জরুরি নেবুলাইজার'],
        rating: 4.5,
        reviewCount: 31,
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'ped-109',
        name: 'বোচাগঞ্জ শিশু স্বাস্থ্য ও নিউবর্ন কেয়ার',
        title: 'সেতাবগঞ্জ শিশু পরামর্শ কেন্দ্র',
        degree: 'MBBS, DCH',
        speciality: 'শিশুর মেধা বিকাশ ও শারীরিক গঠন পরামর্শ',
        workplace: 'বোচাগঞ্জ উপজেলা হাসপাতাল',
        chamber: 'সেতাবগঞ্জ কিডস কেয়ার',
        address: 'সেতাবগঞ্জ বাজার, বোচাগঞ্জ, দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        phone: '01719-001188',
        serialPhone: '01719-001189',
        visitingHours: 'বিকাল ৩:০০ - সন্ধ্যা ৭:৩০',
        offDay: 'সোমবার বন্ধ',
        fee: '৫০০ টাকা',
        experience: '১০+ বছর',
        services: ['শিশুর তোতলামি ও কথা বলতে দেরী হওয়া', 'বয়স অনুযায়ী স্বাভাবিক হাঁটা ও ওজন পরীক্ষা', 'ভিটামিন ও আয়রন ঘাটতি পূরণ', 'শিশুর ত্বকের যত্ন'],
        rating: 4.6,
        reviewCount: 35,
        image: 'https://images.unsplash.com/photo-1594824813566-88855ce78347?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'ped-110',
        name: 'নবাবগঞ্জ নিউবর্ন ও চাইল্ড কেয়ার স্পেশালিস্ট',
        title: 'শিশুর জরুরি চিকিৎসালয়',
        degree: 'MBBS, MD (Pediatrics)',
        speciality: 'শিশুর রিকোটস, টাইফয়েড ও ডেঙ্গু জ্বর কেয়ার',
        workplace: 'নবাবগঞ্জ উপজেলা স্বাস্থ্য উইং',
        chamber: 'নবাবগঞ্জ শিশু সেবা কেন্দ্র',
        address: 'নবাবগঞ্জ বাজার রোড, নবাবগঞ্জ, দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        phone: '01720-998811',
        serialPhone: '01720-998812',
        visitingHours: 'বিকাল ৪:০০ - রাত ৮:০০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '৫০০ টাকা',
        experience: '৯+ বছর',
        services: ['শিশুর ডেঙ্গু ও টাইফয়েড পর্যবেক্ষণ', 'হাড়ের রিকেটস ও রিকভারি', 'শিশুর মূত্রনালী ইনফেকশন', 'জরুরী রক্ত ও ফ্লুইড চার্ট'],
        rating: 4.7,
        reviewCount: 29,
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'ped-111',
        name: 'ঘোড়াঘাট শিশু ও কিশোর স্বাস্থ্য পয়েন্ট',
        title: 'কিশোর ও শিশু রোগ চিকিৎসা কেন্দ্র',
        degree: 'MBBS, FCPS (Pediatrics)',
        speciality: 'কিশোর-কিশোরী স্বাস্থ্য ও শৈশবকালীন বৃদ্ধি পর্যবেক্ষণ',
        workplace: 'ঘোড়াঘাট স্বাস্থ্য কমপ্লেক্স',
        chamber: 'ঘোড়াঘাট কিডস হেলথ পয়েন্ট',
        address: 'রানিগঞ্জ বাজার, ঘোড়াঘাট, দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        phone: '01721-887722',
        serialPhone: '01721-887723',
        visitingHours: 'বিকাল ৩:৩০ - রাত ৭:৩০',
        offDay: 'বুধবার বন্ধ',
        fee: '৫০০ টাকা',
        experience: '৮+ বছর',
        services: ['কিশোর স্বাস্থ্য ও বয়ঃসন্ধিকালের খাদ্যতালিকায় পরামর্শ', 'শিশুর অতিরিক্ত চঞ্চলতা (ADHD)', 'শিশুর কৃমি ও রক্তস্বল্পতা', 'নিয়মিত গ্রোথ মনিটরিং'],
        rating: 4.8,
        reviewCount: 26,
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
];

export const getAllPediatricsService = async (query = {}) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const { search, upazila } = query;
            let filter = { isApproved: true };

            if (upazila && upazila !== 'সব উপজেলা') {
                filter.upazila = upazila;
            }

            if (search) {
                const searchRegex = new RegExp(search, 'i');
                filter.$or = [
                    { name: searchRegex },
                    { speciality: searchRegex },
                    { degree: searchRegex },
                    { workplace: searchRegex },
                    { chamber: searchRegex },
                    { address: searchRegex },
                ];
            }

            const data = await Pediatrics.find(filter).sort({ rating: -1 });
            if (data && data.length > 0) {
                return data;
            }
        }
    } catch (error) {
        console.warn('MongoDB query failed for Pediatrics, falling back to initial seed data:', error.message);
    }

    let filtered = [...initialPediatricsData];
    if (query.upazila && query.upazila !== 'সব উপজেলা') {
        filtered = filtered.filter((item) => item.upazila === query.upazila);
    }
    if (query.search) {
        const s = query.search.toLowerCase();
        filtered = filtered.filter(
            (item) =>
                item.name.toLowerCase().includes(s) ||
                item.speciality.toLowerCase().includes(s) ||
                item.chamber.toLowerCase().includes(s) ||
                item.address.toLowerCase().includes(s)
        );
    }
    return filtered;
};

export const getPediatricsByIdService = async (id) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const item = await Pediatrics.findById(id);
            if (item) return item;
        }
    } catch (error) {
        console.warn(`MongoDB getById failed for Pediatrics ${id}:`, error.message);
    }
    return initialPediatricsData.find((item) => item._id === id) || null;
};

export const createPediatricsService = async (data) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const newItem = new Pediatrics(data);
            return await newItem.save();
        }
    } catch (error) {
        console.warn('MongoDB create failed for Pediatrics:', error.message);
    }
    const newItem = {
        _id: 'ped-' + Date.now(),
        ...data,
        rating: 5.0,
        reviewCount: 1,
        isApproved: true,
        createdAt: new Date(),
    };
    initialPediatricsData.unshift(newItem);
    return newItem;
};

export const updatePediatricsService = async (id, data) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const updated = await Pediatrics.findByIdAndUpdate(id, data, { new: true });
            if (updated) return updated;
        }
    } catch (error) {
        console.warn(`MongoDB update failed for Pediatrics ${id}:`, error.message);
    }
    const index = initialPediatricsData.findIndex((item) => item._id === id);
    if (index !== -1) {
        initialPediatricsData[index] = { ...initialPediatricsData[index], ...data };
        return initialPediatricsData[index];
    }
    return null;
};

export const deletePediatricsService = async (id) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const deleted = await Pediatrics.findByIdAndDelete(id);
            if (deleted) return deleted;
        }
    } catch (error) {
        console.warn(`MongoDB delete failed for Pediatrics ${id}:`, error.message);
    }
    const index = initialPediatricsData.findIndex((item) => item._id === id);
    if (index !== -1) {
        const deleted = initialPediatricsData[index];
        initialPediatricsData.splice(index, 1);
        return deleted;
    }
    return null;
};
