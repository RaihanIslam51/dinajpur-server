import WifiTechnician from './wifiTechnician.model.js';

const INITIAL_WIFI_TECHNICIAN_DATA = [
    {
        name: 'মোঃ তানভীর আহমেদ (হেড ওয়াইফাই ও অপটিক্যাল ফাইবার স্লাইসিং স্পেশালিস্ট)',
        phone: '01712-112233',
        alternatePhone: '01812-445566',
        photo: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: ['অপটিক্যাল ফাইবার কেবল স্লাইসিং ও টিজে বক্স ফিটিং', 'বাসাবাড়ি ও অফিস নতুন ওয়াইফাই রাউটার সেটআপ', 'অনলাইন ইন্টারনেট লাইন ডিস্টার্ব ও স্লো স্পিড ফিক্স'],
        dailyWage: 800,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'কালীতলা মোড়, ব্রডব্যান্ড নেটওয়ার্ক পয়েন্ট, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দীর্ঘ ৯ বছর ধরে টিপি-লিংক, টেন্ডা, ডি-লিংক ও ডাবল ব্যান্ড ডুয়াল ওনু স্লাইসিং, ফাইবার লিক মেরামত এবং হাই-স্পিড ব্রডব্যান্ড রাউটার কনফিগারেশনের কাজ করছি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ নাজমুল হুদা (মেশ নেটওয়ার্কিং ও ওয়াইফাই রেঞ্জ এক্সটেন্ডার টেকনিশিয়ান)',
        phone: '01911-778899',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: ['ওয়াইফাই রেঞ্জ এক্সটেন্ডার ও মেশ নেটওয়ার্কিং', 'বাসাবাড়ি ও অফিস নতুন ওয়াইফাই রাউটার সেটআপ'],
        dailyWage: 750,
        district: 'দিনাজপুর',
        upazila: 'বিরল',
        address: 'বিরল বাসস্ট্যান্ড শপিং কমপ্লেক্স, দিনাজপুর',
        isAvailable: true,
        description: 'বহুতল ভবন ও বড় ফ্ল্যাটের ওয়াইফাই ডেড জোন দূরীকরণে মেশ রাউটার ইনস্টলেশন, ডাবল অ্যান্টেনা সিগন্যাল বুস্টার সেটআপ করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ রিয়াদুল ইসলাম (মাইক্রোটিক রাউটার ও ব্যালেন্স কনফিগারেশন এক্সপার্ট)',
        phone: '01733-556677',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['মাইক্রোটিক রাউটার ও ব্যান্ডউইথ কনফিগারেশন', 'ল্যান (LAN) নেটওয়ার্কিং ও ক্যাবলিং'],
        dailyWage: 900,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর নিউ মার্কেট নেটওয়ার্ক জোন, দিনাজপুর',
        isAvailable: true,
        description: 'অফিস, সাইবার ক্যাফে ও প্রাতিষ্ঠানিক ব্যান্ডউইথ লিমিটিং, হটস্পট বিলিং সিস্টেম সেটআপ ও মাইক্রোটিক ফায়ারওয়াল কনফিগারেশন।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ আতিকুর রহমান (স্লো স্পিড ও ড্রপ লাইন সার্ভিস মাস্টার)',
        phone: '01815-334455',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['অনলাইন ইন্টারনেট লাইন ডিস্টার্ব ও স্লো স্পিড ফিক্স', 'ওয়াইফাই পাসওয়ার্ড ও সিকিউরিটি রিসেট'],
        dailyWage: 700,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ হাইওয়ে মোড় নেটওয়ার্ক সার্ভিস, দিনাজপুর',
        isAvailable: false,
        description: 'ইন্টারনেট লাইন ঘন ঘন কাটা পড়া, পিং লস ডায়াগনস্টিক, নতুন ওনু (ONU) কানেকশন ও রাউটার ফার্মওয়্যার আপডেট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ জাহিদুল ইসলাম (সিসিটিভি আইপি ক্যামেরা ও নেটওয়ার্ক ক্যাবলিং)',
        phone: '01719-223344',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        experienceYears: 11,
        specialties: ['সিসিটিভি আইপি ক্যামেরা নেটওয়ার্কিং', 'ল্যান (LAN) নেটওয়ার্কিং ও ক্যাবলিং'],
        dailyWage: 850,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'বাসাবাড়ি ও শোরুমের আইপি ক্যামেরা অনলাইন ভিউ কনফিগারেশন, ক্যাট-৬ ক্যাবলিং লেআউট ও আরজে৪৫ পাঞ্চিং।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ সাজ্জাদ হোসেন (ফাইবার জয়েন্টিং ও লেজার পাওয়ার মিটার টেকনিশিয়ান)',
        phone: '01915-667788',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        experienceYears: 6,
        specialties: ['অপটিক্যাল ফাইবার কেবল স্লাইসিং ও টিজে বক্স ফিটিং', 'অনলাইন ইন্টারনেট লাইন ডিস্টার্ব ও স্লো স্পিড ফিক্স'],
        dailyWage: 750,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ বাজার গলি, দিনাজপুর',
        isAvailable: true,
        description: 'ফাইবার অপটিক্যাল ক্যাবলের ডিবি লেভেল রিডিং মেজারমেন্ট, ফাইবার ড্রপ ক্যাবল জয়েন্টিং ও প্যাচকর্ড স্লাইসিং।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ মেহেদী হাসান (ওয়াইফাই পাসওয়ার্ড ও সিকিউরিটি হ্যাক প্রতিরোধ টেকনিশিয়ান)',
        phone: '01714-889900',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        experienceYears: 5,
        specialties: ['ওয়াইফাই পাসওয়ার্ড ও সিকিউরিটি রিসেট', 'বাসাবাড়ি ও অফিস নতুন ওয়াইফাই রাউটার সেটআপ'],
        dailyWage: 650,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'রাউটার ম্যাক ফিল্টারিং (Mac Filtering), ডাব্লুপিএ৩ সিকিউরিটি সেটআপ, ওয়াইফাই চোর ব্লক করা ও পাসওয়ার্ড পরিবর্তন।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ আশরাফুল আলম (অফিস ও কর্পোরেট ব্রডব্যান্ড নেটওয়ার্ক ইঞ্জিনিয়ার)',
        phone: '01812-112233',
        photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
        experienceYears: 12,
        specialties: ['মাইক্রোটিক রাউটার ও ব্যান্ডউইথ কনফিগারেশন', 'ল্যান (LAN) নেটওয়ার্কিং ও ক্যাবলিং'],
        dailyWage: 950,
        district: 'দিনাজপুর',
        upazila: 'বিরামপুর',
        address: 'বিরামপুর ব্যাংক রোড, দিনাজপুর',
        isAvailable: true,
        description: 'মাল্টি-অফিস ভিপিএন (VPN) নেটওয়ার্কিং, লোড ব্যালেন্সিং ডাবল লাইন কানেক্টিভিটি ও সার্ভার রুম স্ট্রাকচার্ড ক্যাবলিং।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ শাহাদাত হোসেন (ডুয়াল ব্যান্ড গেইমিং রাউটার কনফিগারার)',
        phone: '01718-778899',
        photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: ['বাসাবাড়ি ও অফিস নতুন ওয়াইফাই রাউটার সেটআপ', 'ওয়াইফাই রেঞ্জ এক্সটেন্ডার ও মেশ নেটওয়ার্কিং'],
        dailyWage: 750,
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা পাকেরহাট, দিনাজপুর',
        isAvailable: true,
        description: '৫ গিগাহার্টজ হাই স্পিড গেইমিং ও স্ট্রিম রাউটার ফাইন টিউনিং, লো লেটেন্সি পিং অপটিমাইজেশন সেটআপ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ সাইফুর রহমান (আইএসপি ফাইবার স্প্লাইসিং ও ডিস্ট্রিবিউশন টেকনিশিয়ান)',
        phone: '01917-445566',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['অপটিক্যাল ফাইবার কেবল স্লাইসিং ও টিজে বক্স ফিটিং', 'অনলাইন ইন্টারনেট লাইন ডিস্টার্ব ও স্লো স্পিড ফিক্স'],
        dailyWage: 800,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ কাঁচাবাজার সংলগ্ন, দিনাজপুর',
        isAvailable: true,
        description: 'ওটিডিআর ফাইবার ব্রেক লোকেশন ডিটেকশন, কোর স্প্লাইসিং ও ক্যাবল টিজে কভার বক্স প্রটেকশন।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ রুবেল হোসেন (বাসাবাড়ি ওয়াইফাই ও ক্যাট-৬ প্যাচকর্ড সংযোগকারী)',
        phone: '01715-334455',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 6,
        specialties: ['বাসাবাড়ি ও অফিস নতুন ওয়াইফাই রাউটার সেটআপ', 'ল্যান (LAN) নেটওয়ার্কিং ও ক্যাবলিং'],
        dailyWage: 700,
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'স্মার্ট টিভি, পিসি ও ল্যাপটপের জন্য ক্যাবল কানেকশন, সুনির্দিষ্ট ফাস্ট স্পিড ডাটা ক্যাবলিং ও সিকিউরিটি রাউটিং।',
        workSampleImages: [],
        status: 'approved'
    }
];

class WifiTechnicianService {
    async seedInitialDataIfNeeded() {
        try {
            const count = await WifiTechnician.countDocuments();
            if (count === 0) {
                console.log('Seeding initial WiFi Technician data...');
                await WifiTechnician.insertMany(INITIAL_WIFI_TECHNICIAN_DATA);
                console.log('Initial WiFi Technician data seeded successfully.');
            }
        } catch (error) {
            console.error('Error seeding WiFi Technician data:', error);
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

        return await WifiTechnician.find(filter).sort({ createdAt: -1 });
    }

    async getById(id) {
        return await WifiTechnician.findById(id);
    }

    async create(data) {
        const item = new WifiTechnician(data);
        return await item.save();
    }

    async updateStatus(id, status) {
        return await WifiTechnician.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );
    }

    async delete(id) {
        return await WifiTechnician.findByIdAndDelete(id);
    }
}

export default new WifiTechnicianService();
