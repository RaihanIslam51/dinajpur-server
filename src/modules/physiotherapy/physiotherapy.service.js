import mongoose from 'mongoose';
import Physiotherapy from './physiotherapy.model.js';

export const initialPhysiotherapyData = [
    {
        _id: 'pt-101',
        name: 'ড. মো: মাহমুদুল হাসান (পিপিটি)',
        title: 'প্রধান কনসালটেন্ট, ফিজিওথেরাপি ও রিহ্যাবিলিটেশন',
        degree: 'BPT (DU), MPT (Musculoskeletal), PGD in Sports Medicine',
        speciality: 'কোমর, ঘাড় ও হাঁটু ব্যথার ম্যানুয়াল থেরাপি এবং হাড় ভাঙা পরবর্তী জয়েন্ট মোবিলাইজেশন',
        workplace: 'এম আব্দুর রহিম মেডিকেল কলেজ ও হাসপাতাল, দিনাজপুর',
        chamber: 'দিনাজপুর ফিজিওথেরাপি অ্যান্ড রিহ্যাব সেন্টার',
        address: 'কেবি রোড, সুইহারী, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        phone: '01711-332211',
        serialPhone: '01711-332212',
        visitingHours: 'বিকাল ৩:৩০ - রাত ৮:৩০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '৬০০ টাকা',
        experience: '১৫+ বছর',
        services: [
            'পএলআইডি (PLID) বা ডিস্ক প্রোল্যাপ্স জটিলতা নিরাময়',
            'হাঁটু ক্ষয় (Osteoarthritis) ও কাঁধ জমে যাওয়া (Frozen Shoulder)',
            'কম্পিউটারাইজড সারভিক্যাল ও লাম্বার ট্র্যাকশন',
            'আল্ট্রাসাউন্ড থেরাপি (UST) ও শর্টওয়েভ ডায়াথার্মি (SWD)'
        ],
        rating: 4.9,
        reviewCount: 112,
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'pt-102',
        name: 'ড. মোসাম্মাত ফাতেমা পারভীন',
        title: 'নিউরো-রিহ্যাবিলিটেশন ও চাইল্ড ডেভেলপমেন্ট বিশেষজ্ঞ',
        degree: 'BPT (CRP), MS in Disability Studies (DU)',
        speciality: 'স্ট্রোক প্যারালাইসিস, ফেসিয়াল পালসি (মুখ বেঁকে যাওয়া) ও শিশুদের সেরিব্রাল পালসি',
        workplace: '২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল, দিনাজপুর',
        chamber: 'লাইফ স্পাইন অ্যান্ড নিউরো ফিজিওথেরাপি কেয়ার',
        address: 'জেল রোড, বালুবাড়ী, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        phone: '01712-445566',
        serialPhone: '01712-445567',
        visitingHours: 'বিকাল ৪:০০ - রাত ৯:০০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '৬০০ টাকা',
        experience: '১৩+ বছর',
        services: [
            'স্ট্রোক পরবর্তী অবশ অঙ্গ সক্রিয়করণ ও চালনা শিক্ষা',
            'মুখের বেলস পালসি (Bell\'s Palsy) মাসাজ ও স্টিমুলেশন',
            'প্রতিবন্ধী শিশুদের পেশির নমনীয়তা ও হাঁটার থেরাপি',
            'প্যারালাইজড রোগীদের হোম বেসড ফিজিওথেরাপি সেশন'
        ],
        rating: 4.8,
        reviewCount: 88,
        image: 'https://images.unsplash.com/photo-1594824813566-88855ce78905?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'pt-103',
        name: 'বীরগঞ্জ আধুনিক ফিজিওথেরাপি অ্যান্ড পেন কেয়ার',
        title: 'উপজেলা ফিজিওথেরাপি ও রিহ্যাব পয়েন্ট',
        degree: 'সিনিয়র ফিজিওথেরাপিস্ট ও ড্রায় নিডলিং বিশেষজ্ঞ টিম',
        speciality: 'বাত ব্যথা, সায়াটিকা ও খেলাধুলাজনিত ইনজুরি নিরাময়',
        workplace: 'বীরগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স উইং',
        chamber: 'বীরগঞ্জ ফিজিওথেরাপি সেন্টার',
        address: 'নতুন বাসস্ট্যান্ড এলাকা, বীরগঞ্জ, দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        phone: '01713-556677',
        serialPhone: '01713-556678',
        visitingHours: 'সকাল ৯:০০ - রাত ৮:০০',
        offDay: 'খোলা প্রতিদিন',
        fee: '৫০০ টাকা',
        experience: '১২+ বছর',
        services: [
            'পায়ের গোড়ালি ব্যথা (Plantar Fasciitis) থেরাপি',
            'সায়াটিকার তীব্র কোমর থেকে পা পর্যন্ত টান ধরা ব্যথা নিরাময়',
            'ড্রাই নিডলিং ও ট্রিগার পয়েন্ট থেরাপি',
            'ইলেকট্রিক্যাল নার্ভ স্টিমুলেশন (TENS)'
        ],
        rating: 4.7,
        reviewCount: 65,
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'pt-104',
        name: 'ড. মো: তানজিম আহমেদ (বিপিটি)',
        title: 'স্পোর্টস ইনজুরি ও অর্থোপেডিক রিহ্যাব বিশেষজ্ঞ',
        degree: 'BPT (DU), Certified Kinesio Taping Practitioner',
        speciality: 'টেনিস এলবো, লিগামেন্ট ইনজুরি ও পোস্ট-অপারেটিভ সার্জারি রিহ্যাব',
        workplace: 'দিনাজপুর স্পোর্টস অ্যাথলেটিক একাডেমি',
        chamber: 'পার্বতীপুর ফিজিওথেরাপি ও অর্থো রিহ্যাব',
        address: 'রেলওয়ে জংশন মোড়, পার্বতীপুর, দিনাজপুর',
        upazila: 'পার্বতীপুর',
        phone: '01714-667788',
        serialPhone: '01714-667789',
        visitingHours: 'বিকাল ৪:০০ - রাত ৮:৩০',
        offDay: 'বৃহস্পতিবার বন্ধ',
        fee: '৫০০ টাকা',
        experience: '১০+ বছর',
        services: [
            'ACL ও লিগামেন্ট অপারেশনের পর হাঁটু ভাঁজ করা থেরাপি',
            'কনুই ও কাঁধের লিগামেন্ট স্প্রেইন নিরাময়',
            'কাইনেসিও টেপিং ও মাসল কেয়ার',
            'পেশির দুর্বলতা ও শক্তি বৃদ্ধি ব্যায়াম'
        ],
        rating: 4.9,
        reviewCount: 71,
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'pt-105',
        name: 'ফুলবাড়ী রিহ্যাবিলিটেশন ও ফিজিওথেরাপি ক্লিনিক',
        title: 'প্যারালাইসিস ও ব্যাক পেইন সেন্টার',
        degree: 'বিপিটি ও ফিজিওথেরাপি টেকনোলজিস্ট দল',
        speciality: 'মেরুদণ্ডের স্পন্ডাইলোসিস ও স্ট্রোক পরবর্তী পুনর্বাসন',
        workplace: 'ফুলবাড়ী উপজেলা প্রাণিসম্পদ সংলগ্ন হেলথ সেন্টার',
        chamber: 'ফুলবাড়ী ফিজিওথেরাপি অ্যান্ড পেন রিলিফ',
        address: 'মেডিকেল রোড, ফুলবাড়ী, দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        phone: '01715-778899',
        serialPhone: '01715-778800',
        visitingHours: 'সকাল ৯:৩০ - সন্ধ্যা ৭:৩০',
        offDay: 'রবিবার বন্ধ',
        fee: '৪০০ টাকা',
        experience: '৯+ বছর',
        services: [
            'সারভিক্যাল স্পন্ডাইলোসিস বা ঘাড়ে ব্যথা থেরাপি',
            'হাঁটুর জন্য আইআরআর (IRR) ও হিট থেরাপি',
            'শরীরের প্যারালাইজড অংশ মাসাজ ও মোবিলাইজেশন',
            'বয়স্কদের ভারসাম্য বজায় রাখা প্রশিক্ষণ'
        ],
        rating: 4.6,
        reviewCount: 47,
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'pt-106',
        name: 'বোচাগঞ্জ ডিজিটাল ফিজিওথেরাপি সেন্টার',
        title: 'হাড়, জোড়া ও নার্ভ ফিজিওথেরাপি সেন্টার',
        degree: 'BPT (HSTU), MS in Rehabilitation',
        speciality: 'সায়াটিকা, স্পাইন ব্যাকপেইন ও প্যারালাইসিস ফিজিওথেরাপি',
        workplace: 'বোচাগঞ্জ পশু হাসপাতাল মোড় সংলগ্ন হেলথ কমপ্লেক্স',
        chamber: 'সেতাবগঞ্জ ফিজিওথেরাপি পয়েন্ট',
        address: 'সেতাবগঞ্জ বাজার, বোচাগঞ্জ, দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        phone: '01716-889900',
        serialPhone: '01716-889901',
        visitingHours: 'বিকাল ৩:৩০ - রাত ৭:৩০',
        offDay: 'সোমবার বন্ধ',
        fee: '৫০০ টাকা',
        experience: '১১+ বছর',
        services: [
            'কোমর ও পিঠের শক্ত পেশি নরমকরণ',
            'হাঁটুর লিগামেন্ট ইনজুরি থেরাপি',
            'ইলেকট্রিক স্পাইনাল ট্র্যাকশন',
            'হোম ডেলিভারি ফিজিওথেরাপি সরঞ্জাম পরামর্শ'
        ],
        rating: 4.8,
        reviewCount: 52,
        image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    }
];

export const getAllPhysiotherapyService = async (query = {}) => {
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

            const data = await Physiotherapy.find(filter).sort({ rating: -1 });
            if (data && data.length > 0) {
                return data;
            }
        }
    } catch (error) {
        console.warn('MongoDB query failed for Physiotherapy, falling back to initial seed data:', error.message);
    }

    let filtered = [...initialPhysiotherapyData];
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

export const getPhysiotherapyByIdService = async (id) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const item = await Physiotherapy.findById(id);
            if (item) return item;
        }
    } catch (error) {
        console.warn(`MongoDB getById failed for Physiotherapy ${id}:`, error.message);
    }
    return initialPhysiotherapyData.find((item) => item._id === id) || null;
};

export const createPhysiotherapyService = async (data) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const newItem = new Physiotherapy(data);
            return await newItem.save();
        }
    } catch (error) {
        console.warn('MongoDB create failed for Physiotherapy:', error.message);
    }
    const newItem = {
        _id: 'pt-' + Date.now(),
        ...data,
        rating: 5.0,
        reviewCount: 1,
        isApproved: true,
        createdAt: new Date(),
    };
    initialPhysiotherapyData.unshift(newItem);
    return newItem;
};

export const updatePhysiotherapyService = async (id, data) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const updated = await Physiotherapy.findByIdAndUpdate(id, data, { new: true });
            if (updated) return updated;
        }
    } catch (error) {
        console.warn(`MongoDB update failed for Physiotherapy ${id}:`, error.message);
    }
    const index = initialPhysiotherapyData.findIndex((item) => item._id === id);
    if (index !== -1) {
        initialPhysiotherapyData[index] = { ...initialPhysiotherapyData[index], ...data };
        return initialPhysiotherapyData[index];
    }
    return null;
};

export const deletePhysiotherapyService = async (id) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const deleted = await Physiotherapy.findByIdAndDelete(id);
            if (deleted) return deleted;
        }
    } catch (error) {
        console.warn(`MongoDB delete failed for Physiotherapy ${id}:`, error.message);
    }
    const index = initialPhysiotherapyData.findIndex((item) => item._id === id);
    if (index !== -1) {
        const deleted = initialPhysiotherapyData[index];
        initialPhysiotherapyData.splice(index, 1);
        return deleted;
    }
    return null;
};
