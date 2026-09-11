import MobileServicing from './mobileServicing.model.js';

const INITIAL_MOBILE_SERVICING_DATA = [
    {
        id: 'mobile_1001',
        name: 'মোঃ আল-আমিন (হেড মোবাইল সার্ভিসিং ও মাদারবোর্ড আইসি (IC) এক্সপার্ট)',
        phone: '01712-112233',
        alternatePhone: '01812-445566',
        photo: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['মোবাইল মাদারবোর্ড আইসি (IC) ও ডেড ফোন মেরামত', 'মোবাইল ডিসপ্লে (Display/Touch) ও অরিজিনাল কম্বো চেঞ্জ', 'ওয়াটার ড্যামেজ (Water Damaged) মোবাইল সার্ভিসিং'],
        dailyWage: 500,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'কালীতলা শপিং সেন্টার গলি, মোবাইল কেয়ার পয়েন্ট, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দীর্ঘ ১০ বছর ধরে শাওমি, রিয়েলমি, স্যামসাং, আইফোন ও ওপ্পো ফোনের পাওয়ার আইসি, নেটওয়ার্ক আইসি রিপেয়ার, ডেড ফোন রিকভারি এবং ওসিএ গ্লাস চেঞ্জ করে আসছি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'mobile_1002',
        name: 'মোঃ কামরুল হাসান (স্মার্টফোন ডিসপ্লে ও অরিজিনাল কম্বো রিপ্লেসমেন্ট মাস্টার)',
        phone: '01911-778899',
        photo: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['মোবাইল ডিসপ্লে (Display/Touch) ও অরিজিনাল কম্বো চেঞ্জ', 'ক্যামেরা লেন্স ও ব্যাকশেল রিপ্লেসমেন্ট'],
        dailyWage: 400,
        district: 'দিনাজপুর',
        upazila: 'বিরল',
        address: 'বিরল বাসস্ট্যান্ড ইলেকট্রনিক্স সুপার মার্কেট, দিনাজপুর',
        isAvailable: true,
        description: 'সকল ব্র্যান্ডের স্মার্টফোনের ১-ঘণ্টায় অরিজিনাল কার্ভড ও অ্যামোলেড (AMOLED) ডিসপ্লে কম্বো চেঞ্জিং সেবা দেওয়া হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'mobile_1003',
        name: 'ইঞ্জিনিয়ার মোঃ আশরাফুল ইসলাম (আইফোন (iPhone) ও স্যামসাং ফ্লেগশিপ রিপেয়ার স্পেশালিস্ট)',
        phone: '01733-556677',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 12,
        specialties: ['আইফোন (iPhone) সার্ভিসিং ও গ্লাস চেঞ্জ', 'মোবাইল মাদারবোর্ড আইসি (IC) ও ডেড ফোন মেরামত'],
        dailyWage: 700,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর নিউ মার্কেট সংলগ্ন টেলিকম সেকশন, দিনাজপুর',
        isAvailable: true,
        description: 'আইফোন (iPhone 11-15 Pro Max) ফেস আইডি ট্রাবলশুট, ট্রু-টোন রিস্টোর, ব্যাটারি হেলথ রিসেট ও ব্যাক গ্লাস লেজার কাটিং সমাধান।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'mobile_1004',
        name: 'মোঃ তারেক রহমান (স্মার্টফোন ব্যাটারি, চার্জিং সকেট ও পোর্ট চেঞ্জার)',
        phone: '01815-334455',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: ['স্মার্টফোন ব্যাটারি ও চার্জিং পোর্ট চেঞ্জ', 'স্পিকার, মাইক্রোফোন ও নেটওয়ার্ক অ্যান্টেনা রিপেয়ার'],
        dailyWage: 350,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ হাইওয়ে মোড় ডিজিটাল টেলিকম, দিনাজপুর',
        isAvailable: false,
        description: 'মোবাইল চার্জ ধীরে হওয়া, কন্টাক্ট লুজ চার্জিং শট, পাওয়ার ড্রেন সমস্যার জন্য হাই অরিজিনাল ব্যাটারি ও টাইপ-সি (Type-C) পোর্ট ফিটিং।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'mobile_1005',
        name: 'মোঃ শহিদুল ইসলাম (ওয়াটার ড্যামেজ (Water Damaged) শর্ট সার্কিট ফিক্সার)',
        phone: '01719-223344',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: ['ওয়াটার ড্যামেজ (Water Damaged) মোবাইল সার্ভিসিং', 'মোবাইল মাদারবোর্ড আইসি (IC) ও ডেড ফোন মেরামত'],
        dailyWage: 450,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর স্টেশন রোড, দিনাজপুর',
        isAvailable: true,
        description: 'পানিতে পড়া বা ভিজে বন্ধ হয়ে যাওয়া ফোন আল্ট্রাসনিক ক্লিন, ফুল শর্ট রিমুভাল ও মাদারবোর্ড কয়েল ডায়াগনস্টিক।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'mobile_1006',
        name: 'মোঃ রশিদুল হাসান (মোবাইল সফটওয়্যার ফ্ল্যাশিং, এফআরপি (FRP) ও লক রিমুভাল)',
        phone: '01915-667788',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        experienceYears: 11,
        specialties: ['মোবাইল সফটওয়্যার ফ্ল্যাশিং ও এফআরপি (FRP) অনলকিং', 'মোবাইল মাদারবোর্ড আইসি (IC) ও ডেড ফোন মেরামত'],
        dailyWage: 400,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ বাজার গলি টেলিকম পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'প্যাটার্ন লক, গুগল একাউন্ট এফআরপি (FRP) বাইপাস, শাওমি এমআই একাউন্ট আনলক ও লেটেস্ট ওএস অফিশিয়াল ফ্ল্যাশিং।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'mobile_1007',
        name: 'মোঃ আজহারুল ইসলাম (স্পিকার, মাইক্রোফোন ও নেটওয়ার্ক রিসিভার মেকানিক)',
        phone: '01714-889900',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        experienceYears: 6,
        specialties: ['স্পিকার, মাইক্রোফোন ও নেটওয়ার্ক অ্যান্টেনা রিপেয়ার', 'স্মার্টফোন ব্যাটারি ও চার্জিং পোর্ট চেঞ্জ'],
        dailyWage: 350,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'কথা শোনা না যাওয়া, রিংটোন সাউন্ড স্পষ্ট না হওয়া, নয়েজ ক্যানসেলেশন মাইক ও অ্যান্টেনা ক্যাবল চেঞ্জ করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'mobile_1008',
        name: 'মোঃ সফিকুল ইসলাম (শাওমি, রিয়েলমি, ওপ্পো ও ভিভো কম্বো ও মাদারবোর্ড টেকনিশিয়ান)',
        phone: '01812-112233',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['মোবাইল ডিসপ্লে (Display/Touch) ও অরিজিনাল কম্বো চেঞ্জ', 'মোবাইল মাদারবোর্ড আইসি (IC) ও ডেড ফোন মেরামত'],
        dailyWage: 500,
        district: 'দিনাজপুর',
        upazila: 'বিরামপুর',
        address: 'বিরামপুর মেইন রোড, দিনাজপুর',
        isAvailable: true,
        description: 'চীনা ও গ্লোবাল ব্র্যান্ডের অ্যান্ড্রয়েড ফোনের প্রসেসর রিবলিং (CPU Reballing), ইএমএমসি (eMMC) ফ্ল্যাশ চিপ ও ডিসপ্লে লাইট আইসি ফিক্স।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'mobile_1009',
        name: 'মোঃ মানসুর রহমান (ক্যামেরা গ্লাস, ব্যাকশেল ও ফ্রেম বডি চেঞ্জ মেকানিক)',
        phone: '01718-778899',
        photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: ['ক্যামেরা লেন্স ও ব্যাকশেল রিপ্লেসমেন্ট', 'স্পিকার, মাইক্রোফোন ও নেটওয়ার্ক অ্যান্টেনা রিপেয়ার'],
        dailyWage: 350,
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা পাকেরহাট, দিনাজপুর',
        isAvailable: true,
        description: 'মোবাইলের পেছনের ফ্রেম বাঁকা হওয়া, ব্যাকপ্যানেল ফাটা, ক্যামেরা লেন্স স্ক্র্যাচ দূর করতে অরিজিনাল হাউজিং ইনস্টলেশন।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'mobile_1010',
        name: 'মোঃ রফিকুল ইসলাম (টাইপ-সি (Type-C) পোর্ট ও ফাস্ট চার্জিং আইসি চেঞ্জিং স্পেশালিস্ট)',
        phone: '01917-445566',
        photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['স্মার্টফোন ব্যাটারি ও চার্জিং পোর্ট চেঞ্জ', 'মোবাইল মাদারবোর্ড আইসি (IC) ও ডেড ফোন মেরামত'],
        dailyWage: 450,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ কাঁচাবাজার সংলগ্ন মোবাইল সিটি, দিনাজপুর',
        isAvailable: true,
        description: 'ফার্স্ট চার্জিং (Vooc, Dart, QC) প্রোটোকল ফিক্সিং, ওভার-ভোল্টেজ প্রটেকশন ড্রেন আইসি রিমুভাল ও নিখুঁত ঝালাই কাজ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'mobile_1011',
        name: 'মোঃ রুবেল হোসেন (জরুরি মোবাইল সার্ভিসিং ও তাৎক্ষণিক গ্লাস রিমুভাল)',
        phone: '01715-334455',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 5,
        specialties: ['মোবাইল ডিসপ্লে (Display/Touch) ও অরিজিনাল কম্বো চেঞ্জ', 'স্পিকার, মাইক্রোফোন ও নেটওয়ার্ক অ্যান্টেনা রিপেয়ার'],
        dailyWage: 300,
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'দ্রুত ২০ মিনিটের মধ্যে ভাঙা টাচ-গ্লাস পরিবর্তন, হেডফোন জ্যাফ ফিক্সিং ও বাটনার মোবাইল সাশ্রয়ী মেরামত।',
        workSampleImages: [],
        status: 'approved'
    }
];

class MobileServicingService {
    async getAll(query = {}) {
        try {
            const filter = {};
            if (query.status) filter.status = query.status;
            if (query.upazila && query.upazila !== 'সকল') filter.upazila = query.upazila;
            if (query.isAvailable !== undefined) filter.isAvailable = query.isAvailable === 'true';

            const list = await MobileServicing.find(filter).sort({ createdAt: -1 });
            if (!list || list.length === 0) {
                return INITIAL_MOBILE_SERVICING_DATA;
            }
            return list;
        } catch (error) {
            return INITIAL_MOBILE_SERVICING_DATA;
        }
    }

    async getById(id) {
        try {
            const doc = await MobileServicing.findById(id);
            if (!doc) {
                return INITIAL_MOBILE_SERVICING_DATA.find(item => item.id === id || item._id === id) || null;
            }
            return doc;
        } catch (error) {
            return INITIAL_MOBILE_SERVICING_DATA.find(item => item.id === id || item._id === id) || null;
        }
    }

    async create(data) {
        try {
            const newDoc = new MobileServicing(data);
            return await newDoc.save();
        } catch (error) {
            return {
                _id: 'mobile_' + Date.now(),
                ...data,
                status: data.status || 'pending',
                createdAt: new Date()
            };
        }
    }

    async updateStatus(id, status) {
        try {
            return await MobileServicing.findByIdAndUpdate(id, { status }, { new: true });
        } catch (error) {
            return { id, status };
        }
    }

    async delete(id) {
        try {
            return await MobileServicing.findByIdAndDelete(id);
        } catch (error) {
            return { id };
        }
    }
}

export default new MobileServicingService();
