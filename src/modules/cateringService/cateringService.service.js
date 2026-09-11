import CateringService from './cateringService.model.js';

const initialCateringServices = [
    {
        id: 'cat_1001',
        name: 'শাহজাহান বাবুর্চি ও রয়্যাল ক্যাটারিং সার্ভিস',
        phone: '01717-223344',
        alternatePhone: '01815-667788',
        photo: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80',
        cateringType: 'বিয়ে, গায়ে হলুদ ও করপোরেট বুফে',
        experienceYears: 18,
        specialties: [
            'দম কাচ্চি বিরিয়ানি, খাসির রেজালা ও শাহী বোরহানি এক্সপার্ট',
            'বিয়ে, আকিকা, খাৎনা ও করপোরেট মিটিংয়ে সর্বাধুনিক বুফে সেটআপ',
            '১০০০ থেকে ৫০০০ মানুষের নিখুঁত রান্না ও ওয়েটার ম্যানেজমেন্ট'
        ],
        dailyWage: 350,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'সুইহারী, কিচেন এন্ড ক্যাটারিং হাউস, দিনাজপুর সদর',
        isAvailable: true,
        description: '১৮ বছরের অভিজ্ঞ দিনাজপুরের রয়্যাল বাবুর্চি দল। বিয়ে, গায়ে হলুদ, বার্ষিকী ও করপোরেট অনুষ্ঠানে শাহী কাচ্চি, রোস্ট, রেজালা ও বোরহানি নিখুঁত স্বাদে পরিবেশন করি।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        id: 'cat_1002',
        name: 'উত্তরবঙ্গ মেজবানি ও ঐতিহ্যবাহী ক্যাটারার্স',
        phone: '01729-445566',
        alternatePhone: '01920-778899',
        photo: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
        cateringType: 'ঐতিহ্যবাহী মেজবান ও সামাজিক অনুষ্ঠান',
        experienceYears: 14,
        specialties: [
            'চাটগাঁই মেজবানি গরুর মাংস, নলার ঝোল ও চনার ডাল',
            'বিয়ে ও বড় ধরনের গণভোজের ঐতিহ্যবাহী রান্না',
            'লাইভ জিলাপি ও শাহী ফিরনি ডেজার্ট কাউন্টার'
        ],
        dailyWage: 300,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'বালুয়াডাঙ্গা, মেজবান হাউস, দিনাজপুর সদর',
        isAvailable: true,
        description: 'বিশেষ স্বাদের মেজবানি মাংস ও ডাল চচ্চড়ির নির্ভরযোগ্য ক্যাটারিং সার্ভিস। সম্পূর্ণ নিজস্ব তৈজসপত্র ও ওয়েটারসহ সার্ভিস দেওয়া হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cat_1003',
        name: 'আরিফ বাবুর্চি ও ইভেন্ট ক্যাটারিং',
        phone: '01833-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
        cateringType: 'বিয়ে, জন্মদিন ও পারিবারিক আপ্যায়ন',
        experienceYears: 10,
        specialties: [
            'মোরগ পোলাও, বিফ ভুনা ও স্পেশাল চিকেন রোস্ট',
            'বার্থডে পার্টি ও হোম গেট-টুগেদার স্মল প্যাক ক্যাটারিং',
            'সালাদ আর্ট ও ফুড ডেকোরেশন'
        ],
        dailyWage: 280,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ বাসস্ট্যান্ড সংলগ্ন ফুড কেয়ার, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জ এলাকার জনপ্রিয় বাবুর্চি দল। বিয়ে, আকিকা ও জন্মদিনের ঘরোয়া ও বড় প্রোগ্রামে সুস্বাদু পোলাও ও রোস্টের রান্না করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cat_1004',
        name: 'স্মার্ট ফুডস বিআইপি ক্যাটারিং সার্ভিস',
        phone: '01744-001122',
        alternatePhone: '01613-556677',
        photo: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
        cateringType: 'করপোরেট লাঞ্চ, সেমিনার ও অফিসিয়াল ইভেন্ট',
        experienceYears: 12,
        specialties: [
            'অফিসিয়াল সেমিনার, ওয়ার্কশপ ও বার্ষিক সাধারণ সভা (AGM) লাঞ্চ বক্স',
            'চায়নিজ ফ্রাইড রাইস, চিলি চিকেন ও থাই স্যুপ সার্ভিস',
            'প্রিমিয়াম টি-ব্রেক, কফি ও স্ন্যাকস স্টল'
        ],
        dailyWage: 400,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর সেন্ট্রাল প্লাজা, স্মার্ট ক্যাটারার্স, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুর ও দিনাজপুরে ব্যাংক, এনজিও ও কর্পোরেট অফিসের মিটিং ও সেমিনারে হাইজিনিক লাঞ্চ বক্স ও কফি প্যাক ক্যাটারিং সরবরাহ করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cat_1005',
        name: 'মোঃ দুলাল হোসেন (মিষ্টি, দধি ও শাহী ডেজার্ট এক্সপার্ট)',
        phone: '01928-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
        cateringType: 'ডেজার্ট, মিষ্টি ও স্পেশাল বোরহানি স্টল',
        experienceYears: 15,
        specialties: [
            'দিনাজপুরের ঐতিহ্যবাহী পাপড় মিষ্টি, কাঁচাগোল্লা ও মিষ্টি দই',
            'শাহী ফিরনি, জর্দা, গোলাপ জামুন ও ক্ষীরসা ডেজার্ট',
            'বিবাহের গেটে ঠান্ডা বোরহানি ও ম্যাঙ্গো জুস কর্নার'
        ],
        dailyWage: 320,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'গনেশতলা সুইট মার্কেট, দিনাজপুর সদর',
        isAvailable: true,
        description: 'বিবাহ ও যেকোনো শুভ সামাজিক অনুষ্ঠানে সরাসরি ভেন্যুতে তৈরি তাজা জিলাপি, জর্দা ও বোরহানি কাউন্টার পরিচালনা করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cat_1006',
        name: 'মেসার্স মা মণি ক্যাটারিং এন্ড বাবুর্চি ঘর',
        phone: '01720-998877',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=600&q=80',
        serviceType: 'বিয়ে ও সামাজিক ভোজ',
        experienceYears: 16,
        specialties: [
            'বিফ খাসি বিরিয়ানি ও টিক্কা কাবাব',
            'সকল ধরনের ফ্রাই, গ্রিল ও তন্দুরি কিচেন সাপোর্ট',
            'অনুষ্ঠানের ডাইনিং টিবিল ওয়েটার ও বয় ম্যানেজমেন্ট'
        ],
        dailyWage: 300,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, ক্যাটারার্স প্লাজা, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ী এলাকার সেরা ওয়েটার ও বাবুর্চি দল। বিয়ে ও পারিবারিক আপ্যায়নে সম্পূর্ণ ঝামেলামুক্ত ক্যাটারিং সেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cat_1007',
        name: 'বরেন্দ্র চাটগাঁইয়া ও শাহী পাকঘর',
        phone: '01818-776655',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
        cateringType: 'শাহী বিরিয়ানি ও কাচ্চি স্পেশাল',
        experienceYears: 11,
        specialties: [
            'পুরান ঢাকার স্টাইলে খাসির কাচ্চি ও আলু বোখারা চাটনি',
            'গ্রিল চিকেন ও বাটার নান রুটি লাইভ স্টল',
            'ভিআইপি টেবিল সার্ভিস ও প্রিমিয়াম ক্রকেরিজ সার্ভিস'
        ],
        dailyWage: 350,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাসস্ট্যান্ড, শাহী পাকঘর, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে রয়্যাল স্বাদের খাঁটি খাসির কাচ্চি ও বোরহানি রান্নার বিশ্বস্ত ব্র্যান্ড।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cat_1008',
        name: 'মেসার্স গোল্ডেন চামচ ক্যাটারিং এন্ড ডেকোরেশন',
        phone: '01916-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80',
        cateringType: 'সম্পূর্ণ ইভেন্ট ও ক্যাটারিং প্যাকেজ',
        experienceYears: 9,
        specialties: [
            'প্যান্ডেল ডেকোরেশন, চেয়ার-টেবিল ও ক্যাটারিং লাইটিং',
            'ফ্রাইড রাইস, কিসমিস পোলাও ও চিকেন ফ্রাই',
            'ফাস্টফুড ও স্নেকস কাউন্টার ইভেন্ট'
        ],
        dailyWage: 320,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রেলগেট সংলগ্ন, গোল্ডেন ইভেন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে বিয়ে ও সামাজিক অনুষ্ঠানের সামিয়ানা ডেকোরেশন এবং খাবার পরিবেশন একসাথে কম্বো প্যাকেজে সরবরাহ করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cat_1009',
        name: 'মোঃ খলিল বাবুর্চি (সুস্বাদু খিচুড়ি ও হাঁসের মাংস বিশেষজ্ঞ)',
        phone: '01737-665544',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80',
        cateringType: 'পারিবারিক ও পিকনিক ক্যাটারিং',
        experienceYears: 13,
        specialties: [
            'শীতকালীন হাঁসের মাংস ভুনা ও চালের আটার রুটি',
            'ভুনা খিচুড়ি, ডিম ভুনা ও রুই মাছের দোপিয়াজা',
            'শিক্ষা সফর ও পিকনিকের স্পেশাল খাবার প্যাকেজ'
        ],
        dailyWage: 280,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ বাজার, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'বোচাগঞ্জে হাঁসের মাংস ভুনা, বুটের ডাল খিচুড়ি এবং পিকনিকের স্পেশাল মেনু তৈরিতে অভিজ্ঞ পারদর্শী।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cat_1010',
        name: 'গ্রিন ভ্যালি ব্যাংকুয়েট ও ক্যাটারিং হাউস',
        phone: '01846-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80',
        cateringType: 'প্রিমিয়াম রিফুয়েলিং ও নাইট পার্টি বুফে',
        experienceYears: 8,
        specialties: [
            'নাইট পার্টি, রিইউনিয়ন ও এভারগ্রিন মিউজিক্যাল নাইট ফুড',
            'বিফ কাবাব, শিক কাবাব ও পরোটা জোন',
            'প্রফেশনাল লেডি এন্ড জেন্টলমেন ডাইনিং ক্রু'
        ],
        dailyWage: 380,
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট বাসস্ট্যান্ড, গ্রিন ভ্যালি ক্যাটারিং, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে নাইট পার্টি ও রিইউনিয়ন ইভেন্টের জন্য বারবিকিউ ও ক্যাটারিং বুফে সার্ভিস দেওয়া হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cat_1011',
        name: 'মোঃ আশরাফুল আলম (হাজীর বিরিয়ানি ও লোকাল ডিশ মাস্টার)',
        phone: '01757-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80',
        cateringType: 'বিয়ে ও আকিকা রান্না',
        experienceYears: 10,
        specialties: [
            'স্পেশাল চিকেন বিরিয়ানি ও ডিম কোপ্তা',
            'গরুর হাড়ি কাচ্চি ও আলুর রোস্ট',
            'স্বল্প বাজেটে মানসম্পন্ন সুস্বাদু আপ্যায়ন'
        ],
        dailyWage: 260,
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে সাধারণ ও বড় সামাজিক অনুষ্ঠানে সাশ্রয়ী খরচে সুস্বাদু বিরিয়ানি ও পোলাও রান্নার বিশ্বস্ত বাবুর্চি।',
        workSampleImages: [],
        status: 'approved'
    }
];

class CateringServiceService {
    async getAll(query = {}) {
        try {
            const filter = {};
            if (query.status) filter.status = query.status;
            if (query.upazila && query.upazila !== 'সকল উপজেলা') {
                filter.upazila = query.upazila;
            }

            let cateringServices = await CateringService.find(filter).sort({ createdAt: -1 });
            if (!cateringServices || cateringServices.length === 0) {
                return initialCateringServices.filter(item => {
                    if (query.status && item.status !== query.status) return false;
                    if (query.upazila && query.upazila !== 'সকল উপজেলা' && item.upazila !== query.upazila) return false;
                    return true;
                });
            }
            return cateringServices;
        } catch (error) {
            console.error('Error fetching catering services:', error);
            return initialCateringServices;
        }
    }

    async getById(id) {
        try {
            if (id.startsWith('cat_')) {
                return initialCateringServices.find(m => m.id === id) || null;
            }
            return await CateringService.findById(id);
        } catch (error) {
            return initialCateringServices.find(m => m.id === id) || null;
        }
    }

    async create(data) {
        try {
            const cateringService = new CateringService(data);
            return await cateringService.save();
        } catch (error) {
            throw error;
        }
    }

    async updateStatus(id, status) {
        try {
            if (id.startsWith('cat_')) {
                const item = initialCateringServices.find(m => m.id === id);
                if (item) {
                    item.status = status;
                    return item;
                }
            }
            return await CateringService.findByIdAndUpdate(id, { status }, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            if (id.startsWith('cat_')) {
                const idx = initialCateringServices.findIndex(m => m.id === id);
                if (idx !== -1) {
                    initialCateringServices.splice(idx, 1);
                    return { message: 'Deleted successfully' };
                }
            }
            return await CateringService.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}

export default new CateringServiceService();
