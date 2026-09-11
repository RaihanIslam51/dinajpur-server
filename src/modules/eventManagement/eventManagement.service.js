import EventManagement from './eventManagement.model.js';

const initialEventManagements = [
    {
        id: 'eve_1001',
        name: 'রয়্যাল উৎসব ইভেন্ট ম্যানেজমেন্ট এন্ড ডেকোরেশন',
        phone: '01719-445566',
        alternatePhone: '01817-889900',
        photo: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
        eventType: 'ওয়েডিং ও সার্বিক ইভেন্ট ডেকোরেশন',
        experienceYears: 12,
        specialties: [
            'বিয়ে ও গায়ে হলুদের রাজকীয় লাইভ ফ্লাওয়ার স্টেজ ডেকোরেশন',
            'এলইডি ওয়্যারলেস অ্যাম্বিয়েন্ট লাইটিং ও থিমিক এন্ট্রি গেট',
            'ভিআইপি ওয়েটার সার্ভিস ও সম্পূর্ণ ইভেন্ট প্ল্যানিং'
        ],
        dailyWage: 15000,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'কেবি রোড, রয়্যাল টাওয়ার (২য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '১২ বছরের অভিজ্ঞ দিনাজপুরের প্রিমিয়াম ইভেন্ট প্ল্যানার। বিয়ে, আকিকা, গায়ে হলুদ ও করপোরেট অনুষ্ঠানের অনন্য থিমিক স্টেজ ও ফ্লাওয়ার ডেকোরেশন সার্ভিস প্রদান করি।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        id: 'eve_1002',
        name: 'ড্রিমল্যান্ড বার্থডে ও ফ্যামিলি ইভেন্ট ডেকোরেশন',
        phone: '01731-667788',
        alternatePhone: '01922-990011',
        photo: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80',
        eventType: 'বার্থডে পার্টি ও ফ্যামিলি মেলা',
        experienceYears: 8,
        specialties: [
            'বাচ্চাদের বার্থডে ৩ডি বেলুন আর্ট ও থিম প্যান্ডেল',
            'ম্যাজিক শো, ডিজে মিউজিক ও সাউন্ড সিস্টেম আর্কিটেকচার',
            'কেক কাটিং স্টেজ ও এন্ট্রান্স গ্লাস ফার্নিচার'
        ],
        dailyWage: 8000,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'চারু বাবুর মোড়, ড্রিম ডেকোরেশন প্লাজা, দিনাজপুর সদর',
        isAvailable: true,
        description: 'বাচ্চাদের রঙিন বার্থডে পার্টি, আকিকা ও এনগেজমেন্টের ৩ডি বেলুন ব্যাকড্রপ ও লাইটিং ডেকোরেশন সার্ভিস।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'eve_1003',
        name: 'উত্তরবঙ্গ করপোরেট ইভেন্ট প্ল্যানার্স',
        phone: '01835-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
        eventType: 'করপোরেট সেমিনার ও প্রদর্শনী',
        experienceYears: 10,
        specialties: [
            'সরকারি ও বেসরকারী সেমিনার, এজিএম ও মেলা প্যাভিলিয়ন',
            'এলইডি ভিডিও ওয়াল (LED Video Wall) ও প্রফেশনাল সাউন্ড স্টেজ',
            'ব্যাজ, ক্যাটালগ ও ভিআইপি প্রটোকল সিকিউরিটি টিম'
        ],
        dailyWage: 20000,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ পুরানো বাসস্ট্যান্ড সংলগ্ন ইভেন্ট সেন্টার, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জ ও দিনাজপুরে ব্যাংক, এনজিও ও প্রাতিষ্ঠানিক সেমিনার, কনফারেন্স ও প্রদর্শনীর সাউন্ড ও প্রজেক্টর স্টেজ প্রস্তুত করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'eve_1004',
        name: 'স্মার্ট কাপল ইভেন্ট এন্ড মেহেরাফুল লাইটিং',
        phone: '01746-223344',
        alternatePhone: '01615-778899',
        photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
        eventType: 'গায়ে হলুদ ও প্রি-ওয়েডিং ইভেন্ট',
        experienceYears: 7,
        specialties: [
            'গায়ে হলুদের দেশীয় ট্র্যাডিশনাল বাঁশ ও গাঁদা ফুল স্টেজ',
            'মেহেরাফুল আলো, ফটো বুথ ও স্মোক মেশিন এফেক্ট',
            'লাইভ নাচ ও গান পরিবেশন ডিজিটাল সাউন্ড মিক্সার'
        ],
        dailyWage: 10000,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর সেন্ট্রাল রোড, মেহেরাফুল ডেকোরেটর, দিনাজপুর',
        isAvailable: true,
        description: 'গায়ে হলুদ ও মেহেদী সন্ধ্যার আকর্ষণীয় গ্রাম্য থিম ও গাঁদা ফুল ফটোবুথ ডেকোরেশনে পারদর্শী।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'eve_1005',
        name: 'মেসার্স প্রদীপ ডেকোরেটর ও প্যান্ডেল হাউস',
        phone: '01930-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80',
        eventType: 'সামাজিক মেলা, পূজা ও ওয়াজ মাহফিল',
        experienceYears: 15,
        specialties: [
            'বিশাল সামিয়ানা প্যান্ডেল, চেয়ার-টেবিল ও সোফা ভাড়া',
            'সাংস্কৃতিক মেলা, রামলীলা ও ধর্মীয় মহাসভা প্যান্ডেল',
            'জেনারেটর ব্যাকআপ উইথ হাই মেটাল টিউব লাইট'
        ],
        dailyWage: 12000,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'সুইহারী, প্রদীপ ডেকোরেটর মার্কেট, দিনাজপুর সদর',
        isAvailable: true,
        description: '১৫ বছরের পুরনো বিশ্বস্ত ডেকোরেটর। ১,০০০ থেকে ১০,০০০ মানুষের সামিয়ানা প্যান্ডেল, চেয়ার-টেবিল ও প্যান্ডেল লাইটিং লাইভ সার্ভিস।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'eve_1006',
        name: 'ফুলবাড়ী ফ্লাওয়ার গ্যালারি এন্ড ইভেন্ট ডেকোর',
        phone: '01722-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80',
        eventType: 'ওয়েডিং ফ্লাওয়ার ও এন্ট্রি গেট',
        experienceYears: 9,
        specialties: [
            'তাজা গোলাপ, রজনীগন্ধা ও জারবেরা ফুলের গেট ও গাড়ি সাজানো',
            'কনে বর ডায়াস ও স্টেজ ডেকোরেশন',
            'ওয়েডিং ক্রকেরিজ ও থালা-বাসন কিট সাপ্লাই'
        ],
        dailyWage: 9000,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, ফ্লাওয়ার কেয়ার, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে তাজা প্রাকৃতিক ফুল দিয়ে বিয়ের গেট, গাড়ি সাজানো এবং স্টেজ তৈরির নির্ভরযোগ্য প্রতিষ্ঠান।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'eve_1007',
        name: 'শাহী ইভেন্ট ম্যানেজমেন্ট এন্ড কালচারাল জোন',
        phone: '01820-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
        eventType: 'কনসার্ট, মেলা ও মিউজিক্যাল ইভেন্ট',
        experienceYears: 11,
        specialties: [
            'ওপেন এয়ার কনসার্ট ট্রাস স্টেজ ও সাউন্ড টাওয়ার',
            'বিম স্পট লাইটিং, কিয়স্ক ও ব্রপস ব্যাকড্রপ',
            'আর্টিস্ট সিকিউরিটি বাউন্ডারি ও ব্যারিকেড'
        ],
        dailyWage: 25000,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাজার, শাহী ইভেন্ট প্লাজা, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে খোলা মাঠের কনসার্ট, মেলা ও কালচারাল নাইট আয়োজনের হেভি ট্রাস স্টেজ ও প্রফেশনাল বিম লাইটিং সেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'eve_1008',
        name: 'মোঃ আজাদ রহমান (পিকনিক ও নাইট ক্যাম্পিং ইভেন্ট প্ল্যানার)',
        phone: '01918-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80',
        eventType: 'পিকনিক, শিক্ষা সফর ও নাইট ক্যাম্পিং',
        experienceYears: 6,
        specialties: [
            'পিকনিক স্পট ডেকোরেশন, তাবু (Tent) ও ক্যাম্পফায়ার ফিক্স',
            'সাউন্ড বক্স, বারবিকিউ কর্নার ও আউটডোর গেমস',
            'শিক্ষা সফর ইভেন্ট বাস ম্যানেজমেন্ট'
        ],
        dailyWage: 7000,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর লিঙ্ক রোড, আউটডোর ইভেন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'পিকনিক, বারবিকিউ নাইট ও তাঁবু ক্যাম্পিং এর যাবতীয় তাবু, সাউন্ড এবং রান্নার স্থান ডেকোরেশন সার্ভিস।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'eve_1009',
        name: 'মেসার্স আনন্দমেলা ইভেন্ট প্ল্যানার্স',
        phone: '01739-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80',
        eventType: 'স্কুল-কলেজ বার্ষিক ক্রীড়া ও সাংস্কৃতিক উৎসব',
        experienceYears: 13,
        specialties: [
            'বার্ষিক ক্রীড়া প্রতিযোগিতা প্যান্ডেল ও মার্চপাস্ট তোরণ',
            'পুরস্কার বিতরণী স্টেজ ও মেডেল ডায়াস',
            'সাংস্কৃতিক মঞ্চ ও গ্রিন রুম প্যান্ডেল'
        ],
        dailyWage: 11000,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ বাজার, আনন্দমেলা অফিস, দিনাজপুর',
        isAvailable: true,
        description: 'স্কুল, কলেজ ও মাদ্রাসার বার্ষিক ক্রীড়া প্রতিযোগিতা ও সাংস্কৃতিক মঞ্চ নির্মাণের দীর্ঘ দিনের অভিজ্ঞ প্রতিষ্ঠান।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'eve_1010',
        name: 'গ্রিন হেরিটেজ রিজোর্ট এন্ড ইভেন্ট জোন',
        phone: '01848-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80',
        eventType: 'প্রিমিয়াম ডেস্টিনেশন ওয়েডিং ও গেট টুগেদার',
        experienceYears: 10,
        specialties: [
            'ওপেন স্কাই ডেস্টিনেশন ওয়েডিং ও লেকসাইড ডেকোরেশন',
            'লাক্সারি লাইটিং কার্পেট ও ভেন্যু অ্যাম্বিয়েন্স',
            'ক্যাটারিং ও ফায়ারওয়ার্কস (আতশবাজি) ব্ল্যাঙ্ক প্যাক'
        ],
        dailyWage: 30000,
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট বাসস্ট্যান্ড সংলগ্ন, হেরিটেজ ভেন্যু, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাট ও দিনাজপুরে আন্তর্জাতিক মানের ডেস্টিনেশন ওয়েডিং ও ওপেন-স্কাই লেকসাইড ইভেন্ট ম্যানেজমেন্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'pho_1011',
        name: 'মোঃ আশরাফ হোসেন (লোকাল তোরণ ও প্যান্ডেল মেকার)',
        phone: '01759-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
        eventType: 'সাধারণ তোরণ ও ঘরোয়া প্যান্ডেল',
        experienceYears: 8,
        specialties: [
            'স্বল্প বাজেটে বাঁশ ও কাপড়ের প্রবেশ তোরণ',
            'ঘরোয়া মিলাদ মাহফিল ও খাৎনার প্যান্ডেল',
            'চেয়ার-টেবিল ভাড়া ও সাউন্ড বক্স সাপোর্ট'
        ],
        dailyWage: 5000,
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে স্বল্প বাজেটের মধ্যে সুন্দর কাপড়ের তোরণ ও ঘরোয়া অনুষ্ঠানের সামিয়ানা প্যান্ডেল ফিক্সিং।',
        workSampleImages: [],
        status: 'approved'
    }
];

class EventManagementService {
    async getAll(query = {}) {
        try {
            const filter = {};
            if (query.status) filter.status = query.status;
            if (query.upazila && query.upazila !== 'সকল উপজেলা') {
                filter.upazila = query.upazila;
            }

            let eventManagements = await EventManagement.find(filter).sort({ createdAt: -1 });
            if (!eventManagements || eventManagements.length === 0) {
                return initialEventManagements.filter(item => {
                    if (query.status && item.status !== query.status) return false;
                    if (query.upazila && query.upazila !== 'সকল উপজেলা' && item.upazila !== query.upazila) return false;
                    return true;
                });
            }
            return eventManagements;
        } catch (error) {
            console.error('Error fetching event managements:', error);
            return initialEventManagements;
        }
    }

    async getById(id) {
        try {
            if (id.startsWith('eve_')) {
                return initialEventManagements.find(m => m.id === id) || null;
            }
            return await EventManagement.findById(id);
        } catch (error) {
            return initialEventManagements.find(m => m.id === id) || null;
        }
    }

    async create(data) {
        try {
            const eventManagement = new EventManagement(data);
            return await eventManagement.save();
        } catch (error) {
            throw error;
        }
    }

    async updateStatus(id, status) {
        try {
            if (id.startsWith('eve_')) {
                const item = initialEventManagements.find(m => m.id === id);
                if (item) {
                    item.status = status;
                    return item;
                }
            }
            return await EventManagement.findByIdAndUpdate(id, { status }, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            if (id.startsWith('eve_')) {
                const idx = initialEventManagements.findIndex(m => m.id === id);
                if (idx !== -1) {
                    initialEventManagements.splice(idx, 1);
                    return { message: 'Deleted successfully' };
                }
            }
            return await EventManagement.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}

export default new EventManagementService();
