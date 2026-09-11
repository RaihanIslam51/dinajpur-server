import mongoose from 'mongoose';
import BehaviorHypertension from './behaviorHypertension.model.js';

export const initialBehaviorHypertensionData = [
    {
        _id: 'bh-101',
        name: 'ড. মো: আনিসুর রহমান',
        title: 'অধ্যাপক ও প্রধান, মনোরোগ বিদ্যা বিভাগ',
        degree: 'MBBS, FCPS (Psychiatry), MD (Psychiatry)',
        speciality: 'আচরণগত মানসিক সমস্যা, ডিপ্রেশন, এনজাইটি ও হাইপারটেনশন',
        workplace: 'এম আব্দুর রহিম মেডিকেল কলেজ ও হাসপাতাল, দিনাজপুর',
        chamber: 'পপুলার ডায়াগনস্টিক সেন্টার, দিনাজপুর',
        address: 'জেল রোড, বালুবাড়ী, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        phone: '01711-223344',
        serialPhone: '01711-223345',
        visitingHours: 'বিকাল ৪:৩০ - রাত ৮:৩০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '৮০০ টাকা',
        experience: '২০+ বছর',
        services: [
            'উচ্চ রক্তচাপজনিত মানসিক উৎকণ্ঠা ও স্ট্রোক পরবর্তী রিহ্যাব',
            'কোগনিটিভ বিহেভিওরাল থেরাপি (CBT)',
            'ডিপ্রেশন, বাইপোলার ও প্যানিক অ্যাটাক ম্যানেজমেন্ট',
            'অনিদ্রা ও সাইকোসোমেটিক মাথাব্যথা নিরাময়'
        ],
        rating: 4.9,
        reviewCount: 94,
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'bh-102',
        name: 'ড. মোসাম্মাত তানিয়া শারমিন',
        title: 'সহকারী অধ্যাপক (মনোরোগ ও বিহেভিওরাল মেডিসিন)',
        degree: 'MBBS, DPM, MCPS (Psychiatry)',
        speciality: 'কিশোর-কিশোরী ও নারীদের আচরণগত সমস্যা, ওসিডি ও রক্তচাপ মনিটরিং',
        workplace: 'এম আব্দুর রহিম মেডিকেল কলেজ, দিনাজপুর',
        chamber: 'মেডিনোভা ডায়াগনস্টিক সেন্টার',
        address: 'কেবি রোড, সুইহারী, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        phone: '01712-334455',
        serialPhone: '01712-334456',
        visitingHours: 'বিকাল ৪:০০ - রাত ৯:০০',
        offDay: 'শুক্রবার বন্ধ',
        fee: '৭০০ টাকা',
        experience: '১৪+ বছর',
        services: [
            'নারীদের গর্ভকালীন ও প্রসব পরবর্তী বিষণ্ণতা ও উচ্চ রক্তচাপ',
            'অহেতুক ভয়, সিজোফ্রেনিয়া ও সাইকোসিস কেয়ার',
            'ডিজিটাল আসক্তি ও আচরণগত কাউন্সেলিং',
            'লাইফস্টাইল ও স্ট্রেস রিডাকশন ডায়েট'
        ],
        rating: 4.8,
        reviewCount: 76,
        image: 'https://images.unsplash.com/photo-1594824813566-88855ce78905?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'bh-103',
        name: 'ড. মো: রাজিবুল হাসান (মেডিসিন ও কার্ডিও-বিহেভিওর স্পেশালিস্ট)',
        title: 'কনসালটেন্ট, মেডিসিন ও উচ্চ রক্তচাপ বিভাগ',
        degree: 'MBBS, BCS (Health), MD (Internal Medicine)',
        speciality: 'উচ্চ রক্তচাপ (Hypertension), ডায়াবেটিস ও মানসিক চাপ নিয়ন্ত্রণ',
        workplace: '২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল, দিনাজপুর',
        chamber: 'বীরগঞ্জ ডিজিটাল ল্যাব ও চেম্বার',
        address: 'নতুন বাসস্ট্যান্ড মোড়, বীরগঞ্জ, দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        phone: '01713-445566',
        serialPhone: '01713-445567',
        visitingHours: 'বিকাল ৩:৩০ - রাত ৮:০০',
        offDay: 'বৃহস্পতিবার বন্ধ',
        fee: '৬০০ টাকা',
        experience: '১২+ বছর',
        services: [
            'দীর্ঘমেয়াদী হাইপারটেনশন ও রক্তচাপ ওঠানামা নিয়ন্ত্রণ',
            'হৃদরোগ ঝুঁকিতে মানসিক স্বাস্থ্যের ভূমিকা বিশ্লেষণ',
            'মেডিসিন কম্বিনেশন ও প্রেশার চার্টিং',
            'প্যানিক অ্যাটাকে দ্রুত রক্তচাপ ভারসাম্য আনয়ন'
        ],
        rating: 4.7,
        reviewCount: 58,
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'bh-104',
        name: 'ড. মো: মাহফুজুর রহমান',
        title: 'সাইকিয়াট্রিস্ট ও নিউরো-বিহেভিওরাল স্পেশালিস্ট',
        degree: 'MBBS, MD (Psychiatry), Fellow (Neuro-psychiatry)',
        speciality: 'স্মৃতিভ্রংশ (Dementia), অ্যালঝেইমার ও প্রবীণদের উচ্চ রক্তচাপ ব্যবস্থাপনা',
        workplace: 'দিনাজপুর ডায়াবেটিক ও জেনারেল হাসপাতাল',
        chamber: 'পার্বতীপুর সেন্ট্রাল ক্লিনিক',
        address: 'রেলওয়ে মোড়, পার্বতীপুর, দিনাজপুর',
        upazila: 'পার্বতীপুর',
        phone: '01714-556677',
        serialPhone: '01714-556678',
        visitingHours: 'বিকাল ৪:০০ - রাত ৮:৩০',
        offDay: 'রবিবার বন্ধ',
        fee: '৬০০ টাকা',
        experience: '১৫+ বছর',
        services: [
            'বার্ধক্যজনিত আচরণগত মেজাজ পরিবর্তন',
            'হাইপারটেনসিভ এনসেফালোপ্যাথি প্রতিরোধ',
            'স্মৃতিশক্তি দুর্বলতা ও পারকিনসন্স কাউন্সেলিং',
            'পারিবারিক মানসিক সহায়তা সেশন'
        ],
        rating: 4.9,
        reviewCount: 63,
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'bh-105',
        name: 'ফুলবাড়ী হাইপারটেনশন ও সাইকো-কেয়ার সেন্টার',
        title: 'উচ্চ রক্তচাপ ও মানসিক স্বাস্থ্য কনসালটেন্সি',
        degree: 'প্রফেশনাল সাইকোলজিস্ট ও কার্ডিও-মেডিসিন বিশেষজ্ঞ দল',
        speciality: 'দৈনন্দিন রক্তচাপ মনিটরিং ও স্ট্রেস রিডাকশন',
        workplace: 'ফুলবাড়ী উপজেলা স্বাস্থ্য কমপ্লেক্স',
        chamber: 'ফুলবাড়ী সাইকো-কার্ডিও ক্লিনিক',
        address: 'মেডিকেল রোড, ফুলবাড়ী, দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        phone: '01715-667788',
        serialPhone: '01715-667789',
        visitingHours: 'সকাল ৯:০০ - সন্ধ্যা ৭:৩০',
        offDay: 'খোলা প্রতিদিন',
        fee: '৫০০ টাকা',
        experience: '১০+ বছর',
        services: [
            '২৪ ঘণ্টা অ্যাম্বুলেটরি রক্তচাপ রেকর্ড (ABPM)',
            'মানসিক চাপ কমানোর মেডিটেশন গাইড',
            'অতিরিক্ত রাগ ও অধৈর্য্য আচরণ সংশোধন',
            'লবণ ও খাদ্যতালিকা পরিবর্তন টিপস'
        ],
        rating: 4.6,
        reviewCount: 41,
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    },
    {
        _id: 'bh-106',
        name: 'ড. মো: কামরুল হাসান',
        title: 'বিহেভিওরাল মেডিসিন ও লাইফস্টাইল বিশেষজ্ঞ',
        degree: 'MBBS, MPH, PGD in Mental Health',
        speciality: 'মানসিক উদ্বেগজনিত হাইপারটেনশন ও গ্যাস্ট্রিক ও বুকের ধড়ফড়ানি',
        workplace: 'বোচাগঞ্জ উপজেলা স্বাস্থ্য কেন্দ্র',
        chamber: 'সেতাবগঞ্জ হেলথ পয়েন্ট',
        address: 'সেতাবগঞ্জ বাজার, বোচাগঞ্জ, দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        phone: '01716-778899',
        serialPhone: '01716-778800',
        visitingHours: 'বিকাল ৩:৩০ - রাত ৭:৩০',
        offDay: 'সোমবার বন্ধ',
        fee: '৫০০ টাকা',
        experience: '১১+ বছর',
        services: [
            'অহেতুক অতিরিক্ত চিন্তা ও বুক ধড়ফড় সমাধান',
            'ব্লাড প্রেসার কমানোর স্বাভাবিক ব্যায়াম ও গাইড',
            'মাদক বা তামাক আসক্তি মুক্তি সহায়তা',
            'ফোবিয়া ও সোশাল এনজাইটি সাইকোথেরাপি'
        ],
        rating: 4.8,
        reviewCount: 49,
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
        isApproved: true,
    }
];

export const getAllBehaviorHypertensionService = async (query = {}) => {
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

            const data = await BehaviorHypertension.find(filter).sort({ rating: -1 });
            if (data && data.length > 0) {
                return data;
            }
        }
    } catch (error) {
        console.warn('MongoDB query failed for BehaviorHypertension, falling back to initial seed data:', error.message);
    }

    let filtered = [...initialBehaviorHypertensionData];
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

export const getBehaviorHypertensionByIdService = async (id) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const item = await BehaviorHypertension.findById(id);
            if (item) return item;
        }
    } catch (error) {
        console.warn(`MongoDB getById failed for BehaviorHypertension ${id}:`, error.message);
    }
    return initialBehaviorHypertensionData.find((item) => item._id === id) || null;
};

export const createBehaviorHypertensionService = async (data) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const newItem = new BehaviorHypertension(data);
            return await newItem.save();
        }
    } catch (error) {
        console.warn('MongoDB create failed for BehaviorHypertension:', error.message);
    }
    const newItem = {
        _id: 'bh-' + Date.now(),
        ...data,
        rating: 5.0,
        reviewCount: 1,
        isApproved: true,
        createdAt: new Date(),
    };
    initialBehaviorHypertensionData.unshift(newItem);
    return newItem;
};

export const updateBehaviorHypertensionService = async (id, data) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const updated = await BehaviorHypertension.findByIdAndUpdate(id, data, { new: true });
            if (updated) return updated;
        }
    } catch (error) {
        console.warn(`MongoDB update failed for BehaviorHypertension ${id}:`, error.message);
    }
    const index = initialBehaviorHypertensionData.findIndex((item) => item._id === id);
    if (index !== -1) {
        initialBehaviorHypertensionData[index] = { ...initialBehaviorHypertensionData[index], ...data };
        return initialBehaviorHypertensionData[index];
    }
    return null;
};

export const deleteBehaviorHypertensionService = async (id) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const deleted = await BehaviorHypertension.findByIdAndDelete(id);
            if (deleted) return deleted;
        }
    } catch (error) {
        console.warn(`MongoDB delete failed for BehaviorHypertension ${id}:`, error.message);
    }
    const index = initialBehaviorHypertensionData.findIndex((item) => item._id === id);
    if (index !== -1) {
        const deleted = initialBehaviorHypertensionData[index];
        initialBehaviorHypertensionData.splice(index, 1);
        return deleted;
    }
    return null;
};
