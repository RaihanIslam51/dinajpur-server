import mongoose from 'mongoose';
import Veterinary from './veterinary.model.js';

export const initialVeterinaryData = [
    {
        _id: 'vet-101',
        name: 'ড. মো: গোলাম রব্বানী',
        title: 'উপজেলা প্রাণিসম্পদ কর্মকর্তা ও প্রবীণ ভেটেরিনারি সার্জন',
        degree: 'DVM (BAU), MS in Surgery & Theriogenology',
        speciality: 'গবাদিপশুর সিজারিয়ান সার্জারি, বন্ধ্যাত্ব চিকিৎসা ও পেটস কেয়ার',
        workplace: 'জেলা প্রাণিসম্পদ দপ্তর ও পশু হাসপাতাল, দিনাজপুর',
        chamber: 'দিনাজপুর ভয়েস অব অ্যানিমেল অ্যান্ড পেট কেয়ার',
        address: 'পশু হাসপাতাল রোড, বালুবাড়ী, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        phone: '01711-998811',
        serialPhone: '01711-998812',
        visitingHours: 'বিকাল ৪:০০ - রাত ৮:৩০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '৬০০ টাকা',
        experience: '১৮+ বছর',
        services: ['গরু ও মহিষের জটিল সার্জারি', 'ক্যাট ও ডগ আল্ট্রাসোনোগ্রাফি', 'কৃত্রিম প্রজনন ও হরমোন থেরাপি', 'পশু পাখির জরুরি ওআরএস ও ভ্যাকসিন'],
        rating: 4.9,
        reviewCount: 88,
        image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'vet-102',
        name: 'ড. মোসাম্মাত ফাতেমা তুজ জোহরা',
        title: 'পেট এনিমেল ও স্মল এনিমেল বিশেষজ্ঞ',
        degree: 'DVM (HSTU), MS in Microbiology & Public Health',
        speciality: 'বিড়াল ও কুকুরের চর্মরোগ, গ্রুমিং ও সার্জারি',
        workplace: 'হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (HSTU)',
        chamber: 'দিনাজপুর পেট ক্লিনিক অ্যান্ড সার্জারি সেন্টার',
        address: 'কেবি রোড, সুইহারী, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        phone: '01712-887722',
        serialPhone: '01712-887723',
        visitingHours: 'বিকাল ৪:৩০ - রাত ৯:০০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '৫০০ টাকা',
        experience: '১২+ বছর',
        services: ['বিড়াল ও কুকুরের স্পেইং ও নিউটারিং', 'জলাতঙ্ক (Rabies) ভ্যাকসিনেশন', 'প্যারভো ভাইরাস ও মাইট চর্মরোগ', 'পেট ফুড ও নিউট্রিশন প্ল্যান'],
        rating: 4.8,
        reviewCount: 64,
        image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'vet-103',
        name: 'বীরগঞ্জ ভেটেরিনারি কেয়ার অ্যান্ড পোল্ট্রি ক্লিনিক',
        title: 'উপজেলা প্রাণিসম্পদ ও ডেইরি ফার্ম সেন্টার',
        degree: 'প্রফেশনাল ভেটেরিনারি টেকনিশিয়ান ও সার্জন টিম',
        speciality: 'উচ্চ ফলনশীল গাভীর দুগ্ধ বাড়ানোর ডায়েট ও চিকিৎসা',
        workplace: 'বীরগঞ্জ উপজেলা প্রাণিসম্পদ কমপ্লেক্স',
        chamber: 'বীরগঞ্জ ডেইরি ও পেট কেয়ার',
        address: 'নতুন বাসস্ট্যান্ড এলাকা, বীরগঞ্জ, দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        phone: '01713-776633',
        serialPhone: '01713-776634',
        visitingHours: 'সকাল ৯:০০ - রাত ৮:০০',
        offDay: 'খোলা প্রতিদিন',
        fee: '৪০০ টাকা',
        experience: '১৫+ বছর',
        services: ['গাভীর ওলান ফোলা (Mastitis) চিকিৎসা', 'পোল্ট্রি খামারের রানীক্ষেত ও গামবোরো প্রতিরোধ', 'ফ্যাট সমৃদ্ধ গো-খাদ্য ফরমুলেশন', 'কৃমিনাশক ড্রেঞ্চিং'],
        rating: 4.7,
        reviewCount: 51,
        image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'vet-104',
        name: 'ড. মো: শফিকুল ইসলাম (ভেটেরিনারি সার্জন)',
        title: 'ডেইরি ও ছাগল খামার বিশেষজ্ঞ',
        degree: 'DVM (HSTU), PGD in Poultry Disease',
        speciality: 'ব্ল্যাক বেঙ্গল ছাগলের পিপিআর (PPR) ও ডেইরি খামার চিকিৎসা',
        workplace: 'দিনাজপুর পশু হাসপাতাল',
        chamber: 'ফার্মার্স পেট এন্ড লাইভস্টক পয়েন্ট',
        address: 'পাহাড়পুর, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        phone: '01714-665544',
        serialPhone: '01714-665545',
        visitingHours: 'বিকাল ৩:৩০ - রাত ৮:০০',
        offDay: 'বৃহস্পতিবার বন্ধ',
        fee: '৫০০ টাকা',
        experience: '১৩+ বছর',
        services: ['ছাগল ও ভেড়ার পিপিআর ও নিউমোনিয়া', 'উচ্চ খামার প্রোডাকশন বৃদ্ধি', 'খুরারোগ (FMD) প্রতিরোধমূলক টিকা', 'জরুরি বিষক্রিয়া রিভার্সাল'],
        rating: 4.9,
        reviewCount: 72,
        image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'vet-105',
        name: 'ফুলবাড়ী পশু চিকিৎসা ও ডেইরি ফার্মিং কেয়ার',
        title: 'উপজেলা গবাদিপশু হাসপাতাল',
        degree: 'ভেটেরিনারি সার্জন টিম',
        speciality: 'কৃত্রিম প্রজনন ও হরমোন প্রয়োগে দ্রুত গর্ভধারণ',
        workplace: 'ফুলবাড়ী উপজেলা প্রাণিসম্পদ কেন্দ্র',
        chamber: 'ফুলবাড়ী অ্যানিমেল কেয়ার সেন্টার',
        address: 'মেডিকেল রোড, ফুলবাড়ী, দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        phone: '01715-554433',
        serialPhone: '01715-554434',
        visitingHours: 'সকাল ৯:৩০ - সন্ধ্যা ৭:৩০',
        offDay: 'রবিবার বন্ধ',
        fee: '৪০০ টাকা',
        experience: '১০+ বছর',
        services: ['গাভীর উন্নতজাতের কৃত্রিম প্রজনন (AI)', 'বাছুরের পাতলা পায়খানা কেয়ার', 'ঘাস ও সাইলেজ প্রস্তুতি পরামর্শ', 'পোল্ট্রি স্যাম্পলিং'],
        rating: 4.6,
        reviewCount: 43,
        image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'vet-106',
        name: 'পার্বতীপুর লাইভস্টক & পেট কেয়ার সেন্টার',
        title: 'ভেটেরিনারি মেডিসিন ও সার্জারি ক্লিনিক',
        degree: 'DVM, MS in Veterinary Medicine',
        speciality: 'বিড়াল, কুকুর, পাখি ও সৌখিন প্রাণীর চিকিৎসা',
        workplace: 'পার্বতীপুর উপজেলা প্রাণিসম্পদ কমপ্লেক্স',
        chamber: 'পার্বতীপুর পেট হাসপিটাল',
        address: 'রেলওয়ে জংশন মোড়, পার্বতীপুর, দিনাজপুর',
        upazila: 'পার্বতীপুর',
        phone: '01716-443322',
        serialPhone: '01716-443323',
        visitingHours: 'বিকাল ৪:০০ - রাত ৮:৩০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '৫০০ টাকা',
        experience: '১১+ বছর',
        services: ['পাখি ও খরগোশের চিকিৎসা', 'কুকুরের ভ্যাকসিনেশন ও কানের ইনফেকশন', 'গবাদিপশুর রুচি ও রক্তস্বল্পতা', 'খামার ডিজইনফেকশন'],
        rating: 4.8,
        reviewCount: 56,
        image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'vet-107',
        name: 'ড. মো: তানজিলুর রহমান',
        title: 'পোল্ট্রি ও হাঁস-মুরগির খামার বিশেষজ্ঞ',
        degree: 'DVM, MS in Poultry Science',
        speciality: 'লেয়ার ও ব্রয়লার খামারের ডিম উৎপাদন বৃদ্ধি ও রোগ নিয়ন্ত্রণ',
        workplace: 'দিনাজপুর সরকারি পোল্ট্রি ফার্ম',
        chamber: 'গ্রিন পোল্ট্রি ডায়াগনস্টিক অ্যান্ড কনসালটেন্সি',
        address: 'স্টেশন রোড, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        phone: '01717-332211',
        serialPhone: '01717-332212',
        visitingHours: 'বিকাল ৪:৩০ - রাত ৮:৩০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '৫০০ টাকা',
        experience: '৯+ বছর',
        services: ['পোল্ট্রি পোস্টমর্টেম ডায়াগনোসিস', 'মাইকোপ্লাজমা ও সালমোনেলা চিকিৎসা', 'বায়ো-সিকিউরিটি গাইডলাইন', 'ফিড ও পানি কোয়ালিটি টেস্ট'],
        rating: 4.7,
        reviewCount: 38,
        image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'vet-108',
        name: 'চিরিরবন্দর ভেটেরিনারি ফার্স্ট এইড পয়েন্ট',
        title: 'জরুরি পশু চিকিৎসা কেন্দ্র',
        degree: 'পশু স্বাস্থ্য প্রযুক্তিবিদ টিম',
        speciality: 'কৃমি, পেট ফাঁপা ও পশু দুর্ঘটনাকালীন ফার্স্ট এইড',
        workplace: 'চিরিরবন্দর উপজেলা প্রাণিসম্পদ অফিস',
        chamber: 'চিরিরবন্দর পেট অ্যান্ড লাইভস্টক চেম্বার',
        address: 'কলেজ মোড়, চিরিরবন্দর, দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        phone: '01718-221100',
        serialPhone: '01718-221101',
        visitingHours: 'সকাল ৯:৩০ - বিকাল ৫:০০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '৩০০ টাকা',
        experience: '৮+ বছর',
        services: ['গরুর পেট ফাঁপা (Bloat) রিপ্রেশন', 'পশুর আঘাতের সেলাই ও ব্যান্ডেজ', 'গর্ভবতী গাভীর বিশেষ ভিটামিন', 'কৃমিনাশক ট্যাবলেট সাজেশন'],
        rating: 4.5,
        reviewCount: 33,
        image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'vet-109',
        name: 'বোচাগঞ্জ পশু হাসপাতাল ও পেট কেয়ার',
        title: 'সেতাবগঞ্জ প্রাণিসম্পদ উইং',
        degree: 'DVM, PGT (Veterinary Surgery)',
        speciality: 'ছাগল ও গরুর হার্নিয়া ও কঠিন প্রসব করানো',
        workplace: 'বোচাগঞ্জ উপজেলা পশু হাসপাতাল',
        chamber: 'সেতাবগঞ্জ ভেটেরিনারি চেম্বার',
        address: 'সেতাবগঞ্জ বাজার, বোচাগঞ্জ, দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        phone: '01719-110022',
        serialPhone: '01719-110023',
        visitingHours: 'বিকাল ৩:০০ - সন্ধ্যা ৭:৩০',
        offDay: 'সোমবার বন্ধ',
        fee: '৪০০ টাকা',
        experience: '১০+ বছর',
        services: ['পশুর জটিল প্রসব (Dystocia) সমাধান', 'শিং কাটা ও কাস্ট্রেশন', 'ডগ ক্যাট অ্যান্টি-ওয়ার্ম ড্রেঞ্চিং', 'দুগ্ধ বৃদ্ধিকারক মিনারেলস'],
        rating: 4.6,
        reviewCount: 36,
        image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'vet-110',
        name: 'নবাবগঞ্জ পশু চিকিৎসা ও কৃত্রিম প্রজনন কেন্দ্র',
        title: 'পশু স্বাস্থ্য পরামর্শ কেন্দ্র',
        degree: 'DVM (BAU)',
        speciality: 'মহিষ ও গাভীর বন্ধ্যাত্ব দূরীকরণ ও বাছুর যত্ন',
        workplace: 'নবাবগঞ্জ উপজেলা প্রাণিসম্পদ কেন্দ্র',
        chamber: 'নবাবগঞ্জ ভেটেরিনারি কেয়ার',
        address: 'নবাবগঞ্জ বাজার রোড, নবাবগঞ্জ, দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        phone: '01720-001122',
        serialPhone: '01720-001123',
        visitingHours: 'বিকাল ৪:০০ - রাত ৮:০০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '৪০০ টাকা',
        experience: '৯+ বছর',
        services: ['বীজ প্রজনন অ্যালটমেন্ট', 'নবজাতক বাছুরের যত্ন', 'পশু খামারের স্বাস্থ্য ঝুঁকি মূল্যায়ন', 'টিকা ক্যালেন্ডার নির্দেশিকা'],
        rating: 4.7,
        reviewCount: 30,
        image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'vet-111',
        name: 'ঘোড়াঘাট অ্যানিমেল অ্যান্ড পোল্ট্রি হেলথ পয়েন্ট',
        title: 'পশু পাখি রোগ নিরাময় চেম্বার',
        degree: 'DVM (HSTU)',
        speciality: 'কবুতর, হাঁস ও কোয়েল পাখির চিকিৎসা এবং ক্যাট নিউট্রিশন',
        workplace: 'ঘোড়াঘাট পশু হাসপাতাল',
        chamber: 'ঘোড়াঘাট অ্যানিমেল পয়েন্ট',
        address: 'রানিগঞ্জ বাজার, ঘোড়াঘাট, দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        phone: '01721-998833',
        serialPhone: '01721-998834',
        visitingHours: 'বিকাল ৩:৩০ - রাত ৭:৩০',
        offDay: 'বুধবার বন্ধ',
        fee: '৪০০ টাকা',
        experience: '৮+ বছর',
        services: ['সৌখিন কবুতর ও পাখির রোগ চিকিৎসা', 'পোল্ট্রি মলিকিউলার ডায়াগনোসিস', 'বিড়ালের কৃমিনাশক ওষুধ', 'খামার স্প্রে ও জীবাণুমুক্তকরণ'],
        rating: 4.8,
        reviewCount: 27,
        image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
];

export const getAllVeterinaryService = async (query = {}) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const { search, upazila } = query;
            let filter = { isApproved: true };

            if (upazila && upazila !== 'সব উপজেলা' && upazila !== 'সকল উপজেলা') {
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

            const data = await Veterinary.find(filter).sort({ rating: -1 });
            if (data && data.length > 0) {
                return data;
            }
        }
    } catch (error) {
        console.warn('MongoDB query failed for Veterinary, falling back to initial seed data:', error.message);
    }

    let filtered = [...initialVeterinaryData];
    if (query.upazila && query.upazila !== 'সব উপজেলা' && query.upazila !== 'সকল উপজেলা') {
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

export const getVeterinaryByIdService = async (id) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const item = await Veterinary.findById(id);
            if (item) return item;
        }
    } catch (error) {
        console.warn(`MongoDB getById failed for Veterinary ${id}:`, error.message);
    }
    return initialVeterinaryData.find((item) => item._id === id) || null;
};

export const createVeterinaryService = async (data) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const newItem = new Veterinary(data);
            return await newItem.save();
        }
    } catch (error) {
        console.warn('MongoDB create failed for Veterinary:', error.message);
    }
    const newItem = {
        _id: 'vet-' + Date.now(),
        ...data,
        rating: 5.0,
        reviewCount: 1,
        isApproved: true,
        createdAt: new Date(),
    };
    initialVeterinaryData.unshift(newItem);
    return newItem;
};

export const updateVeterinaryService = async (id, data) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const updated = await Veterinary.findByIdAndUpdate(id, data, { new: true });
            if (updated) return updated;
        }
    } catch (error) {
        console.warn(`MongoDB update failed for Veterinary ${id}:`, error.message);
    }
    const index = initialVeterinaryData.findIndex((item) => item._id === id);
    if (index !== -1) {
        initialVeterinaryData[index] = { ...initialVeterinaryData[index], ...data };
        return initialVeterinaryData[index];
    }
    return null;
};

export const deleteVeterinaryService = async (id) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const deleted = await Veterinary.findByIdAndDelete(id);
            if (deleted) return deleted;
        }
    } catch (error) {
        console.warn(`MongoDB delete failed for Veterinary ${id}:`, error.message);
    }
    const index = initialVeterinaryData.findIndex((item) => item._id === id);
    if (index !== -1) {
        const deleted = initialVeterinaryData[index];
        initialVeterinaryData.splice(index, 1);
        return deleted;
    }
    return null;
};
