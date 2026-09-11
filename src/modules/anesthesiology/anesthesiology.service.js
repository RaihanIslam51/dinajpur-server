import Anesthesiology from './anesthesiology.model.js';

const initialSeedData = [
    {
        _id: 'anes-101',
        name: 'প্রফেসর ডা. মো. আহসানুল কবীর',
        title: 'অ্যানেস্থেসিওলজি ও ক্রিটিক্যাল কেয়ার বিশেষজ্ঞ',
        degree: 'MBBS, DA, FCPS (Anesthesiology)',
        speciality: 'জেনারেল অ্যানেস্থেসিয়া, স্পাইনাল-এপিডিউরাল ও আইসিইউ কেয়ার',
        workplace: 'দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ ও হাসপাতাল',
        chamber: 'দিনাজপুর সার্জিক্যাল অ্যানেস্থেসিয়া ও আইসিইউ কনসালটেশন সেন্টার',
        address: 'মেডিকেল কলেজ রোড, কেবি রোড, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        phone: '01711-223344',
        serialPhone: '01711-223345',
        visitingHours: 'বিকাল ৪:০০ - রাত ৯:০০ (ওটি ও আইসিইউ অন-কল)',
        offDay: 'শুক্রবার',
        fee: '৮০০ টাকা',
        experience: '১৮+ বছর',
        services: [
            'জেনারেল ও রিজিওনাল অ্যানেস্থেসিয়া',
            'স্পাইনাল ও এপিডিউরাল ব্লক',
            'পেইন-ফ্রি ডেলিভারি (Epidural Analgesia)',
            'আইসিইউ ও পোস্ট-অপারেটিভ ক্রিটিক্যাল কেয়ার'
        ],
        rating: 4.9,
        reviewCount: 78,
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
        isApproved: true
    },
    {
        _id: 'anes-102',
        name: 'ডা. মোসাম্মৎ তাহমিনা বেগম',
        title: 'কনসালটেন্ট - অ্যানেস্থেসিওলজি ও পেইন ম্যানেজমেন্ট',
        degree: 'MBBS, MCPS, MD (Anesthesiology)',
        speciality: 'গাইনি ও পেডিয়াট্রিক অ্যানেস্থেসিয়া, পোস্ট-ওটি পেইন রিলিফ',
        workplace: 'দিনাজপুর জেনারেল হাসপাতাল',
        chamber: 'বীরগঞ্জ আইসিইউ ও অ্যানেস্থেসিয়া কেয়ার পয়েন্ট',
        address: 'হাসপাতাল মোড়, বীরগঞ্জ, দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        phone: '01712-334455',
        serialPhone: '01712-334456',
        visitingHours: 'বিকাল ৩:৩০ - রাত ৮:৩০',
        offDay: 'বৃহস্পতিবার',
        fee: '৭০০ টাকা',
        experience: '১২+ বছর',
        services: [
            'গাইনোকোলজিক্যাল সার্জারি অ্যানেস্থেসিয়া',
            'পেডিয়াট্রিক অ্যানেস্থেসিয়া',
            'লোকাল ও নার্ভ ব্লক ক্যাটালিসিস',
            'জরুরি আইসিইউ ভেন্টিলেটর ম্যানেজমেন্ট'
        ],
        rating: 4.8,
        reviewCount: 62,
        image: 'https://images.unsplash.com/photo-1594824813566-8885542f7d54?auto=format&fit=crop&q=80&w=400',
        isApproved: true
    },
    {
        _id: 'anes-103',
        name: 'ডা. মো. রফিকুল ইসলাম চৌধুরী',
        title: 'নিউরো ও অর্থোপেডিক অ্যানেস্থেসিয়া বিশেষজ্ঞ',
        degree: 'MBBS, DA (BSMMU), Fellow in Neuro-Anesthesia',
        speciality: 'ব্রেইন, স্পাইন ও মেজর অর্থোপেডিক ট্রমা সার্জারি অ্যানেস্থেসিয়া',
        workplace: 'দিনাজপুর ট্রমা ও অ্যানেস্থেসিয়া কেয়ার হাসপাতাল',
        chamber: 'পার্বতীপুর সার্জিক্যাল অ্যানেস্থেসিয়া সেন্টার',
        address: 'বাসস্ট্যান্ড রোড, পার্বতীপুর, দিনাজপুর',
        upazila: 'পার্বতীপুর',
        phone: '01713-445566',
        serialPhone: '01713-445567',
        visitingHours: 'বিকাল ৪:০০ - রাত ৮:০০',
        offDay: 'শুক্রবার',
        fee: '৭০০ টাকা',
        experience: '১৪+ বছর',
        services: [
            'নিউরোসার্জারি অ্যানেস্থেসিয়া',
            'অর্থোপেডিক স্পাইনাল ও সিডিউশন ব্লক',
            'ডিজিটাল সিসিইউ ও মনিটরিং কেয়ার',
            'অপারেশন পরবর্তী পেইন পাম্প ম্যানেজমেন্ট'
        ],
        rating: 4.7,
        reviewCount: 45,
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
        isApproved: true
    },
    {
        _id: 'anes-104',
        name: 'ডা. মোসাম্মৎ নাজমুন নাহার',
        title: 'অ্যানেস্থেসিওলজিস্ট ও ইনটেনসিভিস্ট',
        degree: 'MBBS, FCPS (Anesthesiology)',
        speciality: 'কার্ডিয়াক অ্যানেস্থেসিয়া, থোরাসিক সার্জারি ও এইচডিইউ কেয়ার',
        workplace: 'দিনাজপুর হার্ট ও ক্রিটিক্যাল কেয়ার সেন্টার',
        chamber: 'ফুলবাড়ী অ্যানেস্থেসিয়া ও আইসিইউ ইউনিট',
        address: 'পৌরসভা মোড়, ফুলবাড়ী, দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        phone: '01714-556677',
        serialPhone: '01714-556678',
        visitingHours: 'বিকাল ৪:৩০ - রাত ৮:৩০',
        offDay: 'সোম ও শুক্রবার',
        fee: '৭৫০ টাকা',
        experience: '১০+ বছর',
        services: [
            'হাই-রিস্ক পেশেন্ট অ্যানেস্থেসিয়া',
            'ইনভেসিভ আর্টেরিয়াল লাইন মনিটরিং',
            'কার্ডিয়াক ও চেস্ট সার্জারি সাপোর্ট',
            'আইসিইউ সিআরআরটি ও সিডিউশন'
        ],
        rating: 4.8,
        reviewCount: 51,
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
        isApproved: true
    },
    {
        _id: 'anes-105',
        name: 'ডা. মো. কামরুল হাসান ভূঁইয়া',
        title: 'অ্যানেস্থেসিওলজি ও সিডিউশন কনসালটেন্ট',
        degree: 'MBBS, DA (DMC)',
        speciality: 'ল্যাপারোস্কোপিক ও ইউরোলজি সার্জারি অ্যানেস্থেসিয়া',
        workplace: 'দিনাজপুর সেন্ট্রাল সার্জিক্যাল ক্লিনিক',
        chamber: 'চিরিরবন্দর অ্যানেস্থেসিয়া হেল্প ডেস্ক',
        address: 'রেলওয়ে স্টেশন রোড, চিরিরবন্দর, দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        phone: '01715-667788',
        serialPhone: '01715-667789',
        visitingHours: 'বিকাল ৩:০০ - সন্ধ্যা ৭:০০',
        offDay: 'রবিবার',
        fee: '৬০০ টাকা',
        experience: '৯+ বছর',
        services: [
            'ল্যাপারোস্কোপিক জিবি সার্জারি অ্যানেস্থেসিয়া',
            'টার্প (TURP) ও ইউরোলজি ব্লক',
            'শর্ট কেস সিডিউশন (Day-care Sedation)',
            'পোস্ট-অপারেটিভ রিকভারি মনিটরিং'
        ],
        rating: 4.6,
        reviewCount: 39,
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400',
        isApproved: true
    },
    {
        _id: 'anes-106',
        name: 'ডা. মোসাম্মৎ সাবরিনা পারভীন',
        title: 'অবস্টেট্রিক অ্যানেস্থেসিয়া বিশেষজ্ঞ',
        degree: 'MBBS, MD (Anesthesiology)',
        speciality: 'ব্যথাহীন প্রসূতি ও সিজারিয়ান অ্যানেস্থেসিয়া',
        workplace: 'দিনাজপুর মা ও শিশু হাসপাতাল',
        chamber: 'দিনাজপুর লেবার অ্যানেস্থেসিয়া ক্লিনিক',
        address: 'পোল্ট্রি ফার্ম মোড়, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        phone: '01716-778899',
        serialPhone: '01716-778800',
        visitingHours: 'বিকাল ৪:০০ - রাত ৯:০০',
        offDay: 'বুধবার',
        fee: '৭০০ টাকা',
        experience: '১১+ বছর',
        services: [
            'ব্যথাহীন প্রসূতি স্পাইনাল কেয়ার',
            'ইমার্জেন্সি সিজারিয়ান সিডিউশন',
            'মাদার অ্যান্ড চাইল্ড পোস্ট-ওটি পেইন রিলিফ',
            'হাই-রিস্ক প্রেগন্যান্সি অ্যানেস্থেসিয়া'
        ],
        rating: 4.9,
        reviewCount: 68,
        image: 'https://images.unsplash.com/photo-1594824813566-8885542f7d54?auto=format&fit=crop&q=80&w=400',
        isApproved: true
    },
    {
        _id: 'anes-107',
        name: 'ডা. মো. শরিফুল হক',
        title: 'সার্জিক্যাল অ্যানেস্থেসিয়া ও আল্ট্রাসাউন্ড নার্ভ ব্লক বিশেষজ্ঞ',
        degree: 'MBBS, DA, PGT (Anesthesia)',
        speciality: 'ইউএসজি গাইডেড নার্ভ ব্লক ও প্লাস্টিক সার্জারি অ্যানেস্থেসিয়া',
        workplace: 'দিনাজপুর ট্রমা ও অর্থোপেডিক সেন্টার',
        chamber: 'বোচাগঞ্জ অ্যানেস্থেসিয়া সেবামূল',
        address: 'সেতাবগঞ্জ বাজার, বোচাগঞ্জ, দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        phone: '01717-889900',
        serialPhone: '01717-889901',
        visitingHours: 'বিকাল ৪:০০ - রাত ৮:০০',
        offDay: 'শুক্রবার',
        fee: '৬৫০ টাকা',
        experience: '৮+ বছর',
        services: [
            'ইউএসজি গাইডেড পেরিফেরাল নার্ভ ব্লক',
            'প্লাস্টিক ও রিকনস্ট্রাক্টিভ সার্জারি অ্যানেস্থেসিয়া',
            'টোটাল আইভি অ্যানেস্থেসিয়া (TIVA)',
            'পোস্ট-ট্রমা পেইন সাপোর্ট'
        ],
        rating: 4.7,
        reviewCount: 34,
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
        isApproved: true
    },
    {
        _id: 'anes-108',
        name: 'ডা. মোসাম্মৎ রোকেয়া সুলতানা',
        title: 'অ্যানেস্থেসিওলজিস্ট ও আইসিইউ কনসালটেন্ট',
        degree: 'MBBS, FCPS (Anesthesiology)',
        speciality: 'মেজর এবডমিনাল ও ইএইচইউ/আইসিইউ কেয়ার',
        workplace: 'দিনাজপুর স্পেশালাইজড সার্জিক্যাল হাসপাতাল',
        chamber: 'নবাবগঞ্জ অ্যানেস্থেসিয়া সেবামূল',
        address: 'নবাবগঞ্জ বাজার, নবাবগঞ্জ, দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        phone: '01718-990011',
        serialPhone: '01718-990012',
        visitingHours: 'সকাল ১০:০০ - দুপুর ২:০০',
        offDay: 'সোমবার',
        fee: '৬০০ টাকা',
        experience: '৭+ বছর',
        services: [
            'মেজর পেটের অস্ত্রোপচার অ্যানেস্থেসিয়া',
            'ভেন্টিলেটর ও সেন্ট্রাল লাইন মনিটরিং',
            'পোস্ট-অপারেটিভ এনালজেসিয়া',
            'জরুরি ট্রমা ও শক ম্যানেজমেন্ট'
        ],
        rating: 4.6,
        reviewCount: 29,
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
        isApproved: true
    },
    {
        _id: 'anes-109',
        name: 'ডা. মো. তৌহিদ হাসান',
        title: 'সিনিয়র অ্যানেস্থেসিওলজিস্ট',
        degree: 'MBBS, DA (BSMMU)',
        speciality: 'ইএনটি, ডেন্টাল ও ম্যাক্সিলোফেসিয়াল সার্জারি অ্যানেস্থেসিয়া',
        workplace: 'দিনাজপুর ইএনটি ও ডেন্টাল সার্জারি সেন্টার',
        chamber: 'হাকিমপুর অ্যানেস্থেসিয়া পয়েন্ট',
        address: 'বাংলাহিলি বাজার, হাকিমপুর, দিনাজপুর',
        upazila: 'হাকিমপুর',
        phone: '01719-001122',
        serialPhone: '01719-001123',
        visitingHours: 'বিকাল ৪:০০ - রাত ৮:০০',
        offDay: 'শুক্রবার',
        fee: '৬৫০ টাকা',
        experience: '১০+ বছর',
        services: [
            'ডিফিকাল্ট এয়ারওয়ে অ্যানেস্থেসিয়া',
            'ইএনটি ও ফেসিয়াল সার্জারি সিডিউশন',
            'পেডিয়াট্রিক এয়ারওয়ে কন্ট্রোল',
            'জরুরি ট্র্যাকিওস্টমি মনিটরিং'
        ],
        rating: 4.7,
        reviewCount: 36,
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
        isApproved: true
    },
    {
        _id: 'anes-110',
        name: 'ডা. মোসাম্মৎ নাজমিন আকতার',
        title: 'অ্যানেস্থেসিওলজি ও ক্রিটিক্যাল কেয়ার বিশেষজ্ঞ',
        degree: 'MBBS, MCPS (Anesthesiology)',
        speciality: 'জেরিয়াট্রিক অ্যানেস্থেসিয়া ও বয়স্ক রোগীদের ওটি কেয়ার',
        workplace: 'দিনাজপুর কেয়ার হাসপাতাল',
        chamber: 'ঘোড়াঘাট অ্যানেস্থেসিয়া ক্লিনিক',
        address: 'কেসি রোড, ঘোড়াঘাট, দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        phone: '01720-112233',
        serialPhone: '01720-112234',
        visitingHours: 'বিকাল ৩:৩০ - রাত ৭:৩০',
        offDay: 'বৃহস্পতিবার',
        fee: '৬০০ টাকা',
        experience: '৯+ বছর',
        services: [
            'বয়স্ক রোগীর সার্জারি অ্যানেস্থেসিয়া',
            'কার্ডিও-ভাস্কুলার পেশেন্ট ওটি সাপোর্ট',
            'সাব-এরাকনয়েড স্পাইনাল ব্লক',
            'পোস্ট-অপারেটিভ পেইন ম্যানেজমেন্ট'
        ],
        rating: 4.6,
        reviewCount: 31,
        image: 'https://images.unsplash.com/photo-1594824813566-8885542f7d54?auto=format&fit=crop&q=80&w=400',
        isApproved: true
    },
    {
        _id: 'anes-111',
        name: 'ডা. মো. জহুরুল ইসলাম',
        title: 'অনকোলজি ও সার্জিক্যাল অ্যানেস্থেসিয়া বিশেষজ্ঞ',
        degree: 'MBBS, DA, MS (Anesthesiology)',
        speciality: 'ক্যান্সার সার্জারি অ্যানেস্থেসিয়া ও প্যালিয়াটিভ পেইন কেয়ার',
        workplace: 'দিনাজপুর ক্যান্সার ও সার্জারি হাসপাতাল',
        chamber: 'কাহারোল অ্যানেস্থেসিয়া সেন্টার',
        address: 'কাহারোল বাজার, কাহারোল, দিনাজপুর',
        upazila: 'কাহারোল',
        phone: '01721-223344',
        serialPhone: '01721-223345',
        visitingHours: 'বিকাল ৪:০০ - রাত ৮:০০',
        offDay: 'শুক্রবার',
        fee: '৭০০ টাকা',
        experience: '১২+ বছর',
        services: [
            'মেজর অনকোলজিক্যাল সার্জারি অ্যানেস্থেসিয়া',
            'ক্যানসার পেশেন্ট আইসিইউ এনালজেসিয়া',
            'এপিডুরাল সিডিউশন ইনফিউশন',
            'প্যালিয়াটিভ পেইন ও ট্রমা কন্ট্রোল'
        ],
        rating: 4.8,
        reviewCount: 42,
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400',
        isApproved: true
    }
];

export const getAllAnesthesiologists = async () => {
    try {
        const data = await Anesthesiology.find({}).sort({ createdAt: -1 });
        if (data && data.length > 0) {
            return data;
        }
        return initialSeedData;
    } catch (error) {
        console.warn('MongoDB query skipped/failed, using in-memory fallback for Anesthesiology:', error.message);
        return initialSeedData;
    }
};

export const getAnesthesiologistById = async (id) => {
    try {
        const doc = await Anesthesiology.findById(id);
        if (doc) return doc;
        return initialSeedData.find((item) => item._id === id) || null;
    } catch (error) {
        return initialSeedData.find((item) => item._id === id) || null;
    }
};

export const createAnesthesiologist = async (data) => {
    try {
        const newDoc = new Anesthesiology(data);
        const saved = await newDoc.save();
        return saved;
    } catch (error) {
        console.warn('MongoDB save skipped, simulating creation for Anesthesiology:', error.message);
        const simulated = { _id: 'anes-' + Date.now(), ...data, isApproved: true };
        initialSeedData.unshift(simulated);
        return simulated;
    }
};

export const updateAnesthesiologist = async (id, updateData) => {
    try {
        const updated = await Anesthesiology.findByIdAndUpdate(id, updateData, { new: true });
        if (updated) return updated;
        const index = initialSeedData.findIndex((item) => item._id === id);
        if (index !== -1) {
            initialSeedData[index] = { ...initialSeedData[index], ...updateData };
            return initialSeedData[index];
        }
        return null;
    } catch (error) {
        const index = initialSeedData.findIndex((item) => item._id === id);
        if (index !== -1) {
            initialSeedData[index] = { ...initialSeedData[index], ...updateData };
            return initialSeedData[index];
        }
        return null;
    }
};

export const deleteAnesthesiologist = async (id) => {
    try {
        const deleted = await Anesthesiology.findByIdAndDelete(id);
        if (deleted) return deleted;
        const index = initialSeedData.findIndex((item) => item._id === id);
        if (index !== -1) {
            const removed = initialSeedData.splice(index, 1);
            return removed[0];
        }
        return null;
    } catch (error) {
        const index = initialSeedData.findIndex((item) => item._id === id);
        if (index !== -1) {
            const removed = initialSeedData.splice(index, 1);
            return removed[0];
        }
        return null;
    }
};
