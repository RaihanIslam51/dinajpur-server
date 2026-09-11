import BikeMistri from './bikeMistri.model.js';

const INITIAL_BIKE_MISTRI_DATA = [
    {
        name: 'মোঃ জাহিদ হাসান (স্পোর্টস বাইক ও এফআই ইঞ্জিন টিউনিং স্পেশালিস্ট)',
        phone: '01712-445566',
        alternatePhone: '01812-778899',
        photo: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80',
        experienceYears: 14,
        specialties: ['বাইক ইঞ্জিন ওভারহোলিং ও টিউনিং', 'কার্বুরেটর ও এফআই (FI) ফিটিং', 'ডিজিটাল মিটার ও ইলেকট্রিক্যাল ওয়্যারিং'],
        dailyWage: 950,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'সুইহারী বাসস্ট্যান্ডের বিপরীতে, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দীর্ঘ ১৪ বছর ধরে ইয়ামাহা, হোন্ডা, বাজাজ, টিভিএস ও সুজুকি বাইকের এফআই থ্রটল বডি ক্লিন, কম্পিউটার স্ক্যানিং ও ইঞ্জিন ফুল ওভারহোলিং করে আসছি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ শরিফুল ইসলাম (কার্বুরেটর ও টিউনিং মাস্টার মিস্ত্রি)',
        phone: '01911-332211',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 11,
        specialties: ['কার্বুরেটর ও এফআই (FI) ফিটিং', 'ব্রেক শু, ক্লাচ ও গিয়ার ফিক্স'],
        dailyWage: 900,
        district: 'দিনাজপুর',
        upazila: 'বিরল',
        address: 'বিরল মেইন বাজার বাইক গ্যারেজ, দিনাজপুর',
        isAvailable: true,
        description: 'সব ধরনের কার্বুরেটর টিউনিং, মাইলেজ প্রবলেম ফিক্সিং, ক্লাচ প্লেট পরিবর্তন ও গিয়ারবক্স স্মুথ করার অভিজ্ঞ মিস্ত্রি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ রবিন হোসেন (সাসপেনশন ও শকঅ্যাবজরবার রিপেয়ার মিস্ত্রি)',
        phone: '01733-887766',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['সাসপেনশন ও শকঅ্যাবজরবার সার্ভিস', 'চেইন সেট ও স্প্রোকেট চেঞ্জ'],
        dailyWage: 850,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর রেলওয়ে জংশন মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'ফ্রন্ট ফর্ক শকার অয়েল সিল রিপ্লেসমেন্ট, রেয়ার মনোশক প্রেশার রিজেস্ট ও হাইড্রোলিক সাসপেনশন মেরামত করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ আক্তারুজ্জামান (ব্রেক শু, ডিস্ক ব্রেক ও ক্লাচ প্লেট এক্সপার্ট)',
        phone: '01815-112233',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 15,
        specialties: ['ব্রেক শু, ক্লাচ ও গিয়ার ফিক্স', 'বাইক ইঞ্জিন ওভারহোলিং ও টিউনিং'],
        dailyWage: 900,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ উত্তরপাড়া অটো বাইক পয়েন্ট, দিনাজপুর',
        isAvailable: false,
        description: 'এবিএস ও সিবিএস ডিস্ক ব্রেক মাস্টার সিলিন্ডার ফ্লাশিং, ক্লাচ ক্যাবল, প্রেসার প্লেট ও জেনুইন পার্টস ফিটিং করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ মাহাবুব আলম (ডিজিটাল মিটার, ওয়্যারিং ও লাইটিং কারিগর)',
        phone: '01719-556677',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: ['ডিজিটাল মিটার ও ইলেকট্রিক্যাল ওয়্যারিং', 'স্কুটি ও সেলফ স্টার্টার মেরামত'],
        dailyWage: 850,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাধানগর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'বাইকের ডিজিটাল স্পিডোমিটার ডিসপ্লে ফিক্স, এলইডি হেডলাইট প্রজেক্টর ইনস্টলেশন ও ব্যাটারি ফুল শট সার্কিট ওয়্যারিং রিপেয়ার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ কামরুল হাসান (বাইক মডিফিকেশন, ডেন্টিং ও স্প্রে পেইন্টার)',
        phone: '01915-998877',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        experienceYears: 12,
        specialties: ['বাইক মডিফিকেশন ও ডেটিং পেইন্টিং', 'বাইক ইঞ্জিন ওভারহোলিং ও টিউনিং'],
        dailyWage: 1000,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ কলেজ রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাস্টম ক্যাফে রেসার/ক্রুজার মডিফিকেশন, ফুয়েল ট্যাঙ্ক ডেন্ট রিমুভাল, স্পেশাল কালার কোটেড শাইন পেইন্ট ও স্টিকার ফিটিং।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ আসাদুল হক (চেইন সেট, ও-রিং চেইন ও স্প্রোকেট চেঞ্জ মিস্ত্রি)',
        phone: '01714-332211',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['চেইন সেট ও স্প্রোকেট চেঞ্জ', 'ব্রেক শু, ক্লাচ ও গিয়ার ফিক্স'],
        dailyWage: 800,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড় গ্যারেজ, দিনাজপুর',
        isAvailable: true,
        description: 'ব্র্যান্ডের রোলন ও ও-রিং চেইন লুব্রিকেশন, হেভি ডিউটি ড্রাইভ স্প্রোকেট ও চেইন টেনশনার টাইট ফিক্সিং।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ আজমির হোসেন (স্কুটি, প্লেজার ও সেলফ স্টার্টার স্পেশালিস্ট)',
        phone: '01812-990011',
        photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
        experienceYears: 13,
        specialties: ['স্কুটি ও সেলফ স্টার্টার মেরামত', 'কার্বুরেটর ও এফআই (FI) ফিটিং'],
        dailyWage: 850,
        district: 'দিনাজপুর',
        upazila: 'বিরামপুর',
        address: 'বিরামপুর ঢাকা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'টিভিএস জুপিটার, সুজুকি অ্যাক্সেস, মাহিন্দ্রা ও অন্যান্য স্কুটারের ড্রাইভ বেল্ট, ক্লাচ ওয়েট এবং সেলফ স্টার্ট রিলে মেরামত করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ ফরিদুল ইসলাম (ইঞ্জিন ক্র্যাঙ্ক শ্যাফ্ট ও পিস্টন ফিটিং মিস্ত্রি)',
        phone: '01718-445566',
        photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
        experienceYears: 16,
        specialties: ['বাইক ইঞ্জিন ওভারহোলিং ও টিউনিং', 'সাসপেনশন ও শকঅ্যাবজরবার সার্ভিস'],
        dailyWage: 1000,
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা পাকেরহাট বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'পিস্টন রিং বোরিং, হেড ভালভ গ্রাইন্ডিং, ক্র্যাঙ্ক অ্যালাইনমেন্ট এবং মোবিল ওয়েল পাম্প নিখুঁতভাবে সার্ভিস করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ সাইদুর রহমান (বাইক পলিশ, ওয়াশ ও কমপ্লিট ওভারহোলিং কারিগর)',
        phone: '01917-112233',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: ['বাইক ইঞ্জিন ওভারহোলিং ও টিউনিং', 'ডিজিটাল মিটার ও ইলেকট্রিক্যাল ওয়্যারিং'],
        dailyWage: 800,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'প্রতিটি সার্ভিসে ফোম ওয়াশ, চেইন ক্লিনিং লুব্রিকেশন, স্পার্ক প্লাগ ক্লিনিং ও এয়ার ফিল্টার পরিবর্তন করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ আশরাফ আলী (বাইকের টায়ার, এলয় রিম ও টিউবলেস ফিক্সার)',
        phone: '01715-778899',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['ব্রেক শু, ক্লাচ ও গিয়ার ফিক্স', 'সাসপেনশন ও শকঅ্যাবজরবার সার্ভিস'],
        dailyWage: 850,
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'এলয় হুইল বেন্ডিং কারেকশন, টিউবলেস টায়ার পাংচার রিপেয়ার ও রিম বিয়ারিং পরিবর্তন স্পেশালিস্ট।',
        workSampleImages: [],
        status: 'approved'
    }
];

class BikeMistriService {
    async seedInitialDataIfNeeded() {
        try {
            const count = await BikeMistri.countDocuments();
            if (count === 0) {
                console.log('Seeding initial Bike Mistri data...');
                await BikeMistri.insertMany(INITIAL_BIKE_MISTRI_DATA);
                console.log('Initial Bike Mistri data seeded successfully.');
            }
        } catch (error) {
            console.error('Error seeding Bike Mistri data:', error);
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

        return await BikeMistri.find(filter).sort({ createdAt: -1 });
    }

    async getById(id) {
        return await BikeMistri.findById(id);
    }

    async create(data) {
        const item = new BikeMistri(data);
        return await item.save();
    }

    async updateStatus(id, status) {
        return await BikeMistri.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );
    }

    async delete(id) {
        return await BikeMistri.findByIdAndDelete(id);
    }
}

export default new BikeMistriService();
