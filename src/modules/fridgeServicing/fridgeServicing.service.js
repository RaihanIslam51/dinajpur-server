import FridgeServicing from './fridgeServicing.model.js';

const INITIAL_FRIDGE_SERVICING_DATA = [
    {
        id: 'fridge_1001',
        name: 'মোঃ জাহিদুল ইসলাম (হেড রেফ্রিজারেটর গ্যাস রিফিল ও ইনভার্টার ফ্রিজ স্পেশালিস্ট)',
        phone: '01712-112233',
        alternatePhone: '01812-445566',
        photo: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80',
        experienceYears: 11,
        specialties: ['রেফ্রিজারেটর ও ডিপ ফ্রিজ গ্যাস রিফিল', 'ইনভার্টার ফ্রিজ পিসিবি (PCB) সার্কিট বোর্ড মেরামত', 'ফ্রিজ ঠান্ডা না হওয়া ও কুলিং ফিক্স'],
        dailyWage: 1000,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'স্টেশন রোড, কোল্ড রিফ্রিজারেশন পয়েন্ট, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দীর্ঘ ১১ বছর ধরে ওয়ালটন, সিঙ্গার, স্যামসাং, হিটাচি ও এলজি ইনভার্টার ফ্রিজের পিসিবি মাদারবোর্ড মেরামত, R600a/R134a গ্যাস চার্জিং করে আসছি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'fridge_1002',
        name: 'মোঃ কামরুল হাসান (ডিপ ফ্রিজ ও বাণিজ্যিক ওয়াটার কুলার মেকানিক)',
        phone: '01911-778899',
        photo: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['ডিপ ফ্রিজ ও বাণিজ্যিক ওয়াটার কুলার মেরামত', 'রেফ্রিজারেটর ও ডিপ ফ্রিজ গ্যাস রিফিল'],
        dailyWage: 900,
        district: 'দিনাজপুর',
        upazila: 'বিরল',
        address: 'বিরল বাজার গলি, দিনাজপুর',
        isAvailable: true,
        description: 'দোকান, হোটেল ও বাসাবাড়ির আইসক্রিম ডিপ ফ্রিজ, ওয়াটার চিলার ও নরমাল রেফ্রিজারেটর মেরামত স্পেশালিস্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'fridge_1003',
        name: 'ইঞ্জিনিয়ার মোঃ তারেক হোসেন (ইনভার্টার ফ্রিজ পিসিবি (PCB) সার্কিট বোর্ড বিশেষজ্ঞ)',
        phone: '01733-556677',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 12,
        specialties: ['ইনভার্টার ফ্রিজ পিসিবি (PCB) সার্কিট বোর্ড মেরামত', 'কম্প্রেসার চেঞ্জ ও ক্যাপাসিটর ফিটিং'],
        dailyWage: 1200,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর বাসস্ট্যান্ড সংলগ্ন ইলেকট্রনিক্স জোন, দিনাজপুর',
        isAvailable: true,
        description: 'স্মার্ট ইনভার্টার ফ্রিজের সেন্সর প্রবলেম, ডিসপ্লে এরর সমাধান, পাওয়ার পিসিবি আইসি চেঞ্জিং এক্সপার্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'fridge_1004',
        name: 'মোঃ শহিদুল ইসলাম (কম্প্রেসার চেঞ্জ ও ক্যাপাসিটর ফিটিং মাস্টার)',
        phone: '01815-334455',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: ['কম্প্রেসার চেঞ্জ ও ক্যাপাসিটর ফিটিং', 'রেফ্রিজারেটর ও ডিপ ফ্রিজ গ্যাস রিফিল'],
        dailyWage: 950,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ হাইওয়ে মোড় কোল্ড সেকশন, দিনাজপুর',
        isAvailable: false,
        description: 'ফ্রিজের কম্প্রেসার ওভারহিট হওয়া, ট্রিপ করা বা শব্দ হওয়ার নিখুঁত রোগ নির্ণয় ও নতুন অরিজিনাল কম্প্রেসার ইনস্টলেশন।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'fridge_1005',
        name: 'মোঃ আশরাফুল আলম (ফ্রিজ ঠান্ডা না হওয়া ও কুলিং সমস্যা সমাধানকারী)',
        phone: '01719-223344',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: ['ফ্রিজ ঠান্ডা না হওয়া ও কুলিং ফিক্স', 'ফ্রিজের থার্মোস্ট্যাট ও টাইমার সুইচ চেঞ্জ'],
        dailyWage: 850,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর স্টেশন রোড, দিনাজপুর',
        isAvailable: true,
        description: 'উপরে বরফ জমে নিচে ঠান্ডা না হওয়া, থার্মোস্ট্যাট ড্রপ, থার্মাল ফিউজ কাটা সমস্যার স্থায়ী সমাধান দেওয়া হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'fridge_1006',
        name: 'মোঃ রশিদুল হাসান (নো-ফ্রস্ট (No-Frost) হিটার ও সেন্সর রিপ্লেসমেন্ট টেকনিশিয়ান)',
        phone: '01915-667788',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['নো-ফ্রস্ট (No-Frost) হিটার ও সেন্সর রিপ্লেসমেন্ট', 'ফ্রিজ ঠান্ডা না হওয়া ও কুলিং ফিক্স'],
        dailyWage: 900,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ বাজার গলি, দিনাজপুর',
        isAvailable: true,
        description: 'নো-ফ্রস্ট ফ্রিজের ডিফ্রস্ট হিটার কয়েল, ডিফ্রস্ট টাইমার, বায়োমেটাল সুইচ ও ফ্যান মোটর পারফেক্ট চেঞ্জ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'fridge_1007',
        name: 'মোঃ আজহারুল ইসলাম (ফ্রিজের থার্মোস্ট্যাট ও সুইচ চেঞ্জ মেকানিক)',
        phone: '01714-889900',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        experienceYears: 6,
        specialties: ['ফ্রিজের থার্মোস্ট্যাট ও টাইমার সুইচ চেঞ্জ', 'ফ্রিজের দরজা রাবার সিল ও বডি গ্যাসকেট লিক ফিক্স'],
        dailyWage: 800,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'ফ্রিজ অবিরাম চলতে থাকা বা বন্ধ না হওয়া সমস্যার অটো কাট-অফ থার্মোস্ট্যাট কন্ট্রোল পরিবর্তন করে মেরামত।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'fridge_1008',
        name: 'মোঃ সফিকুল ইসলাম (ওয়ালটন, স্যামসাং ও সিঙ্গার ফ্রিজ ডাইরেক্ট ওভারহোলিং)',
        phone: '01812-112233',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        experienceYears: 13,
        specialties: ['রেফ্রিজারেটর ও ডিপ ফ্রিজ গ্যাস রিফিল', 'ইনভার্টার ফ্রিজ পিসিবি (PCB) সার্কিট বোর্ড মেরামত'],
        dailyWage: 1100,
        district: 'দিনাজপুর',
        upazila: 'বিরামপুর',
        address: 'বিরামপুর মেইন রোড, দিনাজপুর',
        isAvailable: true,
        description: '১৩ বছরের অভিজ্ঞতায় যেকোনো ব্র্যান্ডের বাসাবাড়ির ডাবল ডোর ও ট্রিপল ডোর ফ্রিজ রিফ্রেশ ও ভ্যাকুয়াম টেস্ট সার্ভিস।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'fridge_1009',
        name: 'মোঃ মানসুর রহমান (ফ্রিজের দরজা রাবার সিল ও বডি গ্যাসকেট লিক ফিক্স)',
        phone: '01718-778899',
        photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: ['ফ্রিজের দরজা রাবার সিল ও বডি গ্যাসকেট লিক ফিক্স', 'ফ্রিজ ঠান্ডা না হওয়া ও কুলিং ফিক্স'],
        dailyWage: 850,
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা পাকেরহাট, দিনাজপুর',
        isAvailable: true,
        description: 'ফ্রিজের দরজা ঠিকমতো না লাগা, ম্যাগনেটিক রাবার সিল ও ড্রেন হোল ব্লকেজ পরিষ্কার করে কুলিং লক করা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'fridge_1010',
        name: 'মোঃ রফিকুল ইসলাম (রেফ্রিজারেটর কপার পাইপ ব্রেজিং ও লিকেজ সলিউশন)',
        phone: '01917-445566',
        photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['রেফ্রিজারেটর ও ডিপ ফ্রিজ গ্যাস রিফিল', 'কম্প্রেসার চেঞ্জ ও ক্যাপাসিটর ফিটিং'],
        dailyWage: 950,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ কাঁচাবাজার সংলগ্ন, দিনাজপুর',
        isAvailable: true,
        description: 'কপার ও অ্যালুমিনিয়াম জয়েন্ট ব্রাজিং, ফ্রেয়ন গ্যাস প্রেশার টেস্ট ও ক্যাপিলারি টিউব ওয়াশিং ফিটিং।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'fridge_1011',
        name: 'মোঃ রুবেল হোসেন (জরুরি বাসাবাড়ি হোম সার্ভিস ফ্রিজ টেকনিশিয়ান)',
        phone: '01715-334455',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 5,
        specialties: ['ফ্রিজ ঠান্ডা না হওয়া ও কুলিং ফিক্স', 'ফ্রিজের থার্মোস্ট্যাট ও টাইমার সুইচ চেঞ্জ'],
        dailyWage: 750,
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'জরুরি ভিত্তিতে দ্রুত বাসাবাড়িতে গিয়া ফ্রিজের যেকোনো সমস্যা পর্যবেক্ষণ ও সাশ্রয়ী খরচে তাৎক্ষণিক সমাধান।',
        workSampleImages: [],
        status: 'approved'
    }
];

class FridgeServicingService {
    async getAll(query = {}) {
        try {
            const filter = {};
            if (query.status) filter.status = query.status;
            if (query.upazila && query.upazila !== 'সকল') filter.upazila = query.upazila;
            if (query.isAvailable !== undefined) filter.isAvailable = query.isAvailable === 'true';

            const list = await FridgeServicing.find(filter).sort({ createdAt: -1 });
            if (!list || list.length === 0) {
                return INITIAL_FRIDGE_SERVICING_DATA;
            }
            return list;
        } catch (error) {
            return INITIAL_FRIDGE_SERVICING_DATA;
        }
    }

    async getById(id) {
        try {
            const doc = await FridgeServicing.findById(id);
            if (!doc) {
                return INITIAL_FRIDGE_SERVICING_DATA.find(item => item.id === id || item._id === id) || null;
            }
            return doc;
        } catch (error) {
            return INITIAL_FRIDGE_SERVICING_DATA.find(item => item.id === id || item._id === id) || null;
        }
    }

    async create(data) {
        try {
            const newDoc = new FridgeServicing(data);
            return await newDoc.save();
        } catch (error) {
            return {
                _id: 'fridge_' + Date.now(),
                ...data,
                status: data.status || 'pending',
                createdAt: new Date()
            };
        }
    }

    async updateStatus(id, status) {
        try {
            return await FridgeServicing.findByIdAndUpdate(id, { status }, { new: true });
        } catch (error) {
            return { id, status };
        }
    }

    async delete(id) {
        try {
            return await FridgeServicing.findByIdAndDelete(id);
        } catch (error) {
            return { id };
        }
    }
}

export default new FridgeServicingService();
