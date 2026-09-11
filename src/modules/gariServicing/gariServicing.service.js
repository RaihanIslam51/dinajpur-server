import GariServicing from './gariServicing.model.js';

const INITIAL_GARI_SERVICING_DATA = [
    {
        name: 'মোঃ রফিকুল ইসলাম (হেড প্রাইভেট কার ও জিপ মেকানিক)',
        phone: '01712-998877',
        alternatePhone: '01812-445566',
        photo: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80',
        experienceYears: 16,
        specialties: ['প্রাইভেট কার ও জিপ সার্ভিসিং', 'ইঞ্জিন ওভারহোলিং ও টিউনিং', 'হুইল অ্যালাইনমেন্ট ও ব্রেক সার্ভিস'],
        dailyWage: 1200,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'সুইহারী অটোরিকশা ও কার গ্যারেজ, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দীর্ঘ ১৬ বছর ধরে টয়োটা, হিরো, নিসান, হাইএস এবং বিলাসবহুল প্রাইভেট কার ও জিপের সানি মোটরস ইঞ্জিন ওভারহোলিং, কম্পিউটার স্ক্যানিং ও সাসপেনশন ফিক্সিং করে আসছি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ জাহিদ হাসান (মোটরসাইকেল ও স্পোর্টস বাইক টিউনিং মাস্টার)',
        phone: '01911-556677',
        photo: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['মোটরসাইকেল ও স্কুটি রিপেয়ার', 'ইঞ্জিন ওভারহোলিং ও টিউনিং'],
        dailyWage: 900,
        district: 'দিনাজপুর',
        upazila: 'বিরল',
        address: 'বিরল বাসস্ট্যান্ড বাইক গ্যারেজ, দিনাজপুর',
        isAvailable: true,
        description: 'ইয়ামাহা, হোন্ডা, বাজাজ, টিভিএস সহ সব ব্র্যান্ডের মেকানিক্যাল সার্ভিসিং, কার্বুরেটর/এফআই সিস্টেম ক্লিনিং এবং ইঞ্জিন টিউনিং স্পেশালিস্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ কাওসার আহমেদ (অটোবাইক, ইজিবাইক ও ব্যাটারি চার্জার টেকনিশিয়ান)',
        phone: '01733-112233',
        photo: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=600&q=80',
        experienceYears: 12,
        specialties: ['অটোবাইক ও ইজিবাইক মেরামত', 'এসি, ইলেকট্রিক্যাল ও ওয়ারিং ফিক্স'],
        dailyWage: 850,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর বাস টার্মিনাল গ্যারেজ, দিনাজপুর',
        isAvailable: true,
        description: 'ইজিবাইক ও অটোবাইকের মোটর ওয়্যারিং, কন্ট্রোলার বক্স রিপেয়ার, ব্যাটারি মেইনটেন্যান্স ও অ্যাক্সেল চেঞ্জিং অভিজ্ঞতায় শীর্ষে।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ মকবুল হোসেন (পিকআপ, ট্রাক ও বাস হেভি মেকানিক)',
        phone: '01815-443322',
        photo: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80',
        experienceYears: 18,
        specialties: ['পিকআপ, ট্রাক ও বাস মেকানিক', 'ইঞ্জিন ওভারহোলিং ও টিউনিং'],
        dailyWage: 1300,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ হাইওয়ে অটো ওয়ার্কশপ, দিনাজপুর',
        isAvailable: false,
        description: 'টাটা, আইশার, অশোক লেল্যান্ড হেভি কমার্শিয়াল ট্রাক, বাস ও পিকআপ ডাবল ডিফারেনশিয়াল, গিয়ারবক্স ও প্রেসার প্লেট ফিক্সিং রিপেয়ার করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ শাহিন আলম (অটোমোবাইল এসি ও কনডেনসার মেকানিক)',
        phone: '01719-889900',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 11,
        specialties: ['এসি, ইলেকট্রিক্যাল ও ওয়ারিং ফিক্স', 'প্রাইভেট কার ও জিপ সার্ভিসিং'],
        dailyWage: 1000,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাধানগর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'গাড়ির এসি গ্যাস রিফিল, কম্প্রেসার মেরামতি, ড্যাশবোর্ড লিক ডায়াগনস্টিক ও হিটিং কুলিং ডাবল সার্কিট ফিক্সিং।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ শফিকুল ইসলাম (কার ডেন্টিং, পেইন্টিং ও বাম্পার রিনোভেশন)',
        phone: '01915-223344',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 14,
        specialties: ['কার ডেন্টিং ও পেইন্টিং', 'প্রাইভেট কার ও জিপ সার্ভিসিং'],
        dailyWage: 1100,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ স্টেশন রোড ওয়ার্কশপ, দিনাজপুর',
        isAvailable: true,
        description: 'দুর্ঘটনাগ্রস্ত গাড়ির বডি ডেন্টিং, অরিজিনাল কালার ম্যাচিং স্প্রে পেইন্ট, পলিশ ও গ্লাস ফাইবার গ্লস কোটিং।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ আমিনুল ইসলাম (হুইল অ্যালাইনমেন্ট, ব্যালেন্সিং ও ব্রেক মাস্টার)',
        phone: '01714-778899',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: ['হুইল অ্যালাইনমেন্ট ও ব্রেক সার্ভিস', 'প্রাইভেট কার ও জিপ সার্ভিসিং'],
        dailyWage: 950,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী ঢাকা মোড় অটো সার্ভিস, দিনাজপুর',
        isAvailable: true,
        description: 'ডিজিটাল কম্পিউটার লেজার হুইল অ্যালাইনমেন্ট, টায়ার ব্যালেন্সিং, ব্রেক শু/প্যাড চেঞ্জ ও এবিএস ব্রেক মেরামত।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ নূরে আলম (সিএনজি ও এলপিজি কনভার্সন মেকানিক)',
        phone: '01812-554433',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        experienceYears: 13,
        specialties: ['ইঞ্জিন ওভারহোলিং ও টিউনিং', 'প্রাইভেট কার ও জিপ সার্ভিসিং'],
        dailyWage: 1000,
        district: 'দিনাজপুর',
        upazila: 'বিরামপুর',
        address: 'বিরামপুর বাসস্ট্যান্ড মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'সিএনজি ও এলপিজি সিলিন্ডার সিকিউরিটি চেক, কিট সার্ভিসিং, গ্যাস টিউনিং ও পেট্রোল-গ্যাস ডুয়াল মোড কনভার্সন।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ গোলাম রব্বানী (বাইক মডিফিকেশন ও ডিজিটাল মিটার কারিগর)',
        phone: '01718-332211',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['মোটরসাইকেল ও স্কুটি রিপেয়ার', 'এসি, ইলেকট্রিক্যাল ও ওয়ারিং ফিক্স'],
        dailyWage: 850,
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা পাকেরহাট বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'স্পোর্টস বাইক এলইডি ডেকোরেশন, সাইরেন ফিক্সিং, ডিজিটাল স্পিডোমিটার রিপেয়ার ও ডাবল ডিস্ক ব্রেক ইনস্টলেশন।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ রুবেল হোসেন (হাইড্রোলিক জ্যাক ও সাসপেনশন ফিক্সার)',
        phone: '01917-665544',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['পিকআপ, ট্রাক ও বাস মেকানিক', 'হুইল অ্যালাইনমেন্ট ও ব্রেক সার্ভিস'],
        dailyWage: 950,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ কাঁচাবাজার অটো গ্যারেজ, দিনাজপুর',
        isAvailable: true,
        description: 'কোল্ড শু রিবন্ডিং, শক অ্যাবজরবার বুশিং, স্টীয়ারিং বক্স কলাম ফিক্সিং এবং হাইড্রোলিক সিউয়েজ রিপেয়ার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ বাবুল আক্তার (স্কুটি ও অটো মোবাইল মেকানিক কারিগর)',
        phone: '01715-221100',
        photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: ['মোটরসাইকেল ও স্কুটি রিপেয়ার', 'অটোবাইক ও ইজিবাইক মেরামত'],
        dailyWage: 800,
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার মেইন রোড, দিনাজপুর',
        isAvailable: true,
        description: 'সব ধরনের মহিলা স্কুটার, বেল্ট ড্রাইভ গিয়ারবক্স, সেলফ স্টার্টার মোটর সার্ভিসিং এবং কার্বুরেটর টিউনিং।',
        workSampleImages: [],
        status: 'approved'
    }
];

class GariServicingService {
    async seedInitialDataIfNeeded() {
        try {
            const count = await GariServicing.countDocuments();
            if (count === 0) {
                console.log('Seeding initial Gari Servicing data...');
                await GariServicing.insertMany(INITIAL_GARI_SERVICING_DATA);
                console.log('Initial Gari Servicing data seeded successfully.');
            }
        } catch (error) {
            console.error('Error seeding Gari Servicing data:', error);
        }
    }

    async getAll(query = {}) {
        await this.seedInitialDataIfNeeded();
        const filter = {};

        if (query.status) {
            filter.status = query.status;
        }

        if (query.upazila && query.upazila !== 'সকল') {
            filter.upazila = query.upazila;
        }

        if (query.specialty && query.specialty !== 'সকল') {
            filter.specialties = { $in: [query.specialty] };
        }

        if (query.search) {
            const searchRegex = new RegExp(query.search, 'i');
            filter.$or = [
                { name: searchRegex },
                { address: searchRegex },
                { specialties: searchRegex }
            ];
        }

        return await GariServicing.find(filter).sort({ createdAt: -1 });
    }

    async getById(id) {
        return await GariServicing.findById(id);
    }

    async create(data) {
        const item = new GariServicing(data);
        return await item.save();
    }

    async updateStatus(id, status) {
        return await GariServicing.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );
    }

    async delete(id) {
        return await GariServicing.findByIdAndDelete(id);
    }
}

export default new GariServicingService();
