import OtherServices from './otherServices.model.js';

const initialOtherServices = [
    {
        id: 'oth_1001',
        name: 'মোঃ আজহারুল ইসলাম (জেনারেটর, ওয়াটার মোটর ও ডিজেল ইঞ্জিনিয়ার)',
        phone: '01716-112233',
        alternatePhone: '01814-556677',
        photo: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80',
        serviceType: 'জেনারেটর ও ওয়াটার পাম্প/মোটর সার্ভিস',
        experienceYears: 11,
        specialties: [
            'ডিজেল ও পেট্রোল ক্যানোপি জেনারেটর সার্ভিসিং ও ওভারহোলিং',
            'বাসাবাড়ি ও সাবমার্সিবল ওয়াটার মোটর/পাম্প মেরামত ও কয়েল ওয়াইন্ডিং',
            'স্বয়ংক্রিয় অটো-স্টার্ট (ATS Panel) কন্ট্রোল সিস্টেম ফিটিং'
        ],
        dailyWage: 600,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'কেবি রোড, ইঞ্জিনিয়ারিং ওয়ার্কশপ মার্কেট, দিনাজপুর সদর',
        isAvailable: true,
        description: '১১ বছরের অভিজ্ঞ মেকানিক্যাল ও ইলেকট্রিক্যাল হেভি মোটর ইঞ্জিনিয়ার। কারখানার জেনারেটর, বাসা ও অটো-পাম্প ওভারহোলিং ও মোটর কয়েল রিওয়াইন্ডিংয়ে বিশ্বস্ত নাম।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        id: 'oth_1002',
        name: 'মোঃ শরিফুল ইসলাম (আইপিএস, ইউপিএস ও সোলার প্যানেল টেকনিশিয়ান)',
        phone: '01728-334455',
        alternatePhone: '01919-667788',
        photo: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80',
        serviceType: 'সোলার, আইপিএস ও ব্যাটারি সল্যুশন',
        experienceYears: 9,
        specialties: [
            'সোলার সিস্টেম ইনস্টলেশন, অন-গ্রিড/অফ-গ্রিড ইনভার্টার ফিক্স',
            'আইপিএস (IPS) ও সাইনওয়েভ ইনভার্টার বোর্ড মেকানিক্স',
            'টিউবুলার ব্যাটারি ওয়াটার টপ-আপ, ডিসচার্জ টিউনিং ও রিচার্জ কেয়ার'
        ],
        dailyWage: 500,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'গনেশতলা, রিনিউয়েবল পাওয়ার কেয়ার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'বাসাবাড়ি ও অফিসের আইপিএস সার্কিট বোর্ড মেরামত, সোলার প্যানেল ও চার্জ কন্ট্রোলার কনফিগারেশন দ্রুত সম্পন্ন করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'oth_1003',
        name: 'মোঃ আল-আমিন (গ্যাস স্টোভ, ওভেন ও কিচেন চিমনি এক্সপার্ট)',
        phone: '01832-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
        serviceType: 'গ্যাস চুলহা ও কিচেন অ্যাপ্লায়েন্স',
        experienceYears: 7,
        specialties: [
            'এলপিজি ও অটো-ইগনিশন গ্যাস স্টোভ (Gas Stove) মেরামত',
            'মাইক্রোওয়েভ ওভেন (Microwave Oven) হিট প্রবলেম ও গ্লাস রিপ্লেসমেন্ট',
            'কিচেন হুড/চিমনি অটো-ক্লিন ও ফিল্টার সার্ভিস'
        ],
        dailyWage: 450,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ পুরানো বাসস্ট্যান্ড সংলগ্ন হোম অ্যাপ্লায়েন্স সার্ভিস, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জ ও আশপাশে বাসায় গিয়ে গ্যাস চুলার লিক ফিক্সেশন, ইগনিশন স্পার্ক মেকানিক্স ও মাইক্রোওয়েভ ওভেনের সার্কিট মেরামত করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'oth_1004',
        name: 'মোঃ পারভেজ হোসেন (ওয়াটার ফিল্টার ও ওয়াটার পিউরিফায়ার স্পেশালিস্ট)',
        phone: '01743-990011',
        alternatePhone: '01612-445566',
        photo: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ওয়াটার পিউরিফায়ার ও আরও (RO) সার্ভিস',
        experienceYears: 8,
        specialties: [
            'RO ওয়াটার ফিল্টার ইনস্টলেশন ও মেমব্রেন (Membrane) চেঞ্জ',
            'ইউভি (UV) ও আলকালাইন কেমিক্যাল পিপি ফিল্টার সার্ভিসিং',
            'ওয়াটার পিউরিফায়ার পাম্প ও টিডিএস (TDS) অ্যাডজাস্টমেন্ট'
        ],
        dailyWage: 500,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর রূপালী প্লাজা, পিওর ওয়াটার কেয়ার, দিনাজপুর',
        isAvailable: true,
        description: 'সব ব্র্যান্ডের (Kent, Pureit, Lan Shan, Heron) রিভার্স অসমোসিস (RO) ওয়াটার পিউরিফায়ারের ফিল্টার মেমব্রেন ও পাম্প মেরামত করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'oth_1005',
        name: 'মোঃ ফারুক হোসেন (ওয়াশিং মেশিন ও ড্রায়ার মেকানিক)',
        phone: '01927-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ওয়াশিং মেশিন সার্ভিসিং',
        experienceYears: 10,
        specialties: [
            'ফ্রন্ট লোড ও টপ লোড অটোমেটিক ওয়াশিং মেশিন মেরামত',
            'ওয়াশিং মেশিন ড্রাম নয়েজ, বেল্ট রিপ্লেসমেন্ট ও ওয়াটার ড্রেন ফিক্স',
            'স্মার্ট ওয়াশিং মেশিন পিসিবি (PCB) সার্কিট বোর্ড সার্ভিস'
        ],
        dailyWage: 550,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'বাহাদুর বাজার, ইলেক্ট্রিক্যাল ও মেকানিক্স পয়েন্ট, দিনাজপুর সদর',
        isAvailable: true,
        description: 'স্যামসাং, এলজি, ওয়ালটন ও সিঙ্গার ওয়াশিং মেশিনের ওয়াটার লিক, ড্রাম ভাইব্রেশন ও সার্কিট জনিত ত্রুটি নিখুঁতভাবে সার্ভিস করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'oth_1006',
        name: 'মোঃ কামরুল ইসলাম (লকস্মিথ ও সেফ চাবি মাস্টার)',
        phone: '01719-887766',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80',
        serviceType: 'লকস্মিথ ও চাবি মেকার',
        experienceYears: 15,
        specialties: [
            'সব ধরনের ডিজিটাল লক, ডোর লক ও লকার মাস্টার চাবি মেকার',
            'গাড়ি, মোটরসাইকেল ও বাসার হারিয়ে যাওয়া চাবি তৈরি',
            'সেফ/লকার (Vault) আনলকিং ও কম্বিনেশন পাসওয়ার্ড ফিক্স'
        ],
        dailyWage: 400,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'লিলি মোড়, মাস্টার কি পয়েন্ট, দিনাজপুর সদর',
        isAvailable: true,
        description: '১৫ বছরের বিশ্বস্ত লকস্মিথ। বাড়ি, গাড়ি, ক্যাশ বাক্স ও ডিজিটাল লকের ডুপ্লিকেট চাবি তৈরি ও জরুরি আনলক সেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'oth_1007',
        name: 'মোঃ জসিম উদ্দিন (সাউন্ড, সাউন্ড সিস্টেম ও প্রেসার ওয়াশার স্পেশালিস্ট)',
        phone: '01817-665544',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
        serviceType: 'সাউন্ড সিস্টেম ও কার ওয়াশার সার্ভিস',
        experienceYears: 6,
        specialties: [
            'অডিও অ্যাম্পলিফায়ার, মিক্সার বোর্ড ও সাউন্ড বক্স সার্ভিস',
            'হাই প্রেসার ওয়াটার ক্লিনার (Pressure Washer Pump) মেকানিক',
            'ইভেন্ট সাউন্ড মাইক ও স্পিকার সেটআপ সাপোর্ট'
        ],
        dailyWage: 500,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা, ডিজিটাল সাউন্ড ও টেক কেয়ার, দিনাজপুর',
        isAvailable: true,
        description: 'সাউন্ড সিস্টেম অ্যাম্পলিফায়ার মিক্সার সার্ভিস এবং ওয়াশ পয়েন্টের হাই-প্রেসার ওয়াটার পাম্প দ্রুত মেরামত করে থাকি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'oth_1008',
        name: 'মোঃ রাজীব হোসেন (সিসিং ও কার ডেকোরেশন ইলেকট্রিক কেয়ার)',
        phone: '01915-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80',
        serviceType: 'অটোমোবাইল একসেসোরিজ ও অন্যান্য ইলেকট্রিক',
        experienceYears: 8,
        specialties: [
            'কার অডিও অ্যান্ডয়েড প্লেয়ার ও রিভার্স ক্যামেরা ইনস্টলেশন',
            'গাড়ির সিকিউরিটি অ্যালার্ম, হর্ন ও হিডেন ট্র্যাকার ফিটিং',
            'সব ধরনের ছোট ইলেকট্রনিক গ্যাজেট মেরামত'
        ],
        dailyWage: 450,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর লিঙ্ক রোড, অটো গ্যাজেট টেকনোলজি, দিনাজপুর',
        isAvailable: true,
        description: 'গাড়ির অ্যান্ডয়েড ডিসপ্লে মিউজিক সিস্টেম ফিটিং ও ইলেকট্রিক শর্টসার্কিট ফিক্সিংয়ের অভিজ্ঞ কারিগর।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'oth_1009',
        name: 'মোঃ জাহিদ মেকানিক (ইন্ডাস্ট্রিয়াল সেলাই মেশিন ও মেকানিক্যাল সার্ভিস)',
        phone: '01736-554433',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80',
        serviceType: 'সেলাই মেশিন ও ইন্ডাষ্ট্রিয়াল ইক্যুইপমেন্ট',
        experienceYears: 12,
        specialties: [
            'জুকি, সিঙ্গার ও জ্যাক ইন্ডাস্ট্রিয়াল সেলাই মেশিন ওভারহোলিং',
            'মেকানিক্যাল মোটর, বেল্ট টিউনিং ও নিডেল টাইমিং সেটআপ',
            'গার্মেন্টস ও টেইলার্স সুইং মেশিন সার্ভিসিং'
        ],
        dailyWage: 500,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাজার রোড, মেকানিক ওয়ার্কশপ, দিনাজপুর',
        isAvailable: true,
        description: 'দর্জি দোকান ও ফেব্রিক ওয়ার্কশপের ইন্ডাস্ট্রিয়াল জুকি সেলাই মেশিন ওভারহোলিং ও টাইম সেটআপ নিখুঁতভাবে সার্ভিস করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'oth_1010',
        name: 'মোঃ তারেক রহমান (রাইস কুকার, ইন্ডাকশন ও ব্লেন্ডার মেরামতকারী)',
        phone: '01845-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80',
        serviceType: 'হোম কিচেন ছোট ইলেকট্রনিক্স',
        experienceYears: 7,
        specialties: [
            'ইন্ডাকশন ও ইনফ্রারেড কুকার (Induction Cooker) কোয়েল চেঞ্জ',
            'রাইস কুকার (Rice Cooker) থার্মোস্ট্যাট ও হিট সুইচ ফিক্স',
            'ব্লেন্ডার, জুসার ও কারি কুকার কয়েল সোল্ডারিং'
        ],
        dailyWage: 400,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ বাজার, ইলেকট্রনিক্স সার্ভিস সেন্টার, দিনাজপুর',
        isAvailable: true,
        description: 'রাইস কুকার গরম না হওয়া, ইন্ডাকশন কুকারের E0/E1 এরর কোড সমাধান এবং ব্লেন্ডার মোটর টিউনিং করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'oth_1011',
        name: 'মোঃ সাইদুল ইসলাম (পোল্ট্রি ও ডেইরি ফার্ম ইক্যুইপমেন্ট মেকানিক)',
        phone: '01756-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ফার্ম ও এগ্রো ইক্যুইপমেন্ট মেকানিক',
        experienceYears: 9,
        specialties: [
            'ডেইরি ফার্ম মিল্কিং মেশিন ও ফগিং ফ্যান সার্ভিস',
            'ইনকিউবেটর অটো-টেম্পারেচার সার্কিট ও হিট কন্ট্রোলার',
            'পোল্ট্রি ফিড মিক্সার ও ফিড গ্রাইন্ডার মোটর মেরামত'
        ],
        dailyWage: 550,
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল এগ্রো সার্ভিস পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোল ও আশেপাশের ডেইরি এবং পোল্ট্রি খামারের ইনকিউবেটর, ফ্যান এবং মোটর মেকানিক্স হোম সার্ভিস দিয়ে থাকি।',
        workSampleImages: [],
        status: 'approved'
    }
];

class OtherServicesService {
    async getAll(query = {}) {
        try {
            const filter = {};
            if (query.status) filter.status = query.status;
            if (query.upazila && query.upazila !== 'সকল উপজেলা') {
                filter.upazila = query.upazila;
            }

            let otherServices = await OtherServices.find(filter).sort({ createdAt: -1 });
            if (!otherServices || otherServices.length === 0) {
                return initialOtherServices.filter(item => {
                    if (query.status && item.status !== query.status) return false;
                    if (query.upazila && query.upazila !== 'সকল উপজেলা' && item.upazila !== query.upazila) return false;
                    return true;
                });
            }
            return otherServices;
        } catch (error) {
            console.error('Error fetching other services:', error);
            return initialOtherServices;
        }
    }

    async getById(id) {
        try {
            if (id.startsWith('oth_')) {
                return initialOtherServices.find(m => m.id === id) || null;
            }
            return await OtherServices.findById(id);
        } catch (error) {
            return initialOtherServices.find(m => m.id === id) || null;
        }
    }

    async create(data) {
        try {
            const otherServices = new OtherServices(data);
            return await otherServices.save();
        } catch (error) {
            throw error;
        }
    }

    async updateStatus(id, status) {
        try {
            if (id.startsWith('oth_')) {
                const item = initialOtherServices.find(m => m.id === id);
                if (item) {
                    item.status = status;
                    return item;
                }
            }
            return await OtherServices.findByIdAndUpdate(id, { status }, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            if (id.startsWith('oth_')) {
                const idx = initialOtherServices.findIndex(m => m.id === id);
                if (idx !== -1) {
                    initialOtherServices.splice(idx, 1);
                    return { message: 'Deleted successfully' };
                }
            }
            return await OtherServices.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}

export default new OtherServicesService();
