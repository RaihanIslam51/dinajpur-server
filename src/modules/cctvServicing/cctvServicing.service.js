import CctvServicing from './cctvServicing.model.js';

const initialCctvServicings = [
    {
        id: 'cctv_1001',
        name: 'মোঃ সাজ্জাদ হোসেন (হেড আইপি ও এইচডি সিসিটিভি নিরাপত্তা ইঞ্জিনিয়ার)',
        phone: '01712-445566',
        alternatePhone: '01819-887766',
        photo: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: [
            'এইচডি (HD) ও আইপি (IP) সিসিটিভি ক্যামেরা ইনস্টলেশন',
            'ডিভিআর (DVR) / এনভিআর (NVR) কনফিগারেশন ও হার্ডডিস্ক সেটআপ',
            'মোবাইলে সিসিটিভি অনলাইন লাইভ ভিউ (Online Live View) সেটআপ'
        ],
        dailyWage: 600,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'চারু বাবুর মোড়, সিকিউরিটি ভিশন মার্কেট, দিনাজপুর সদর',
        isAvailable: true,
        description: '১০ বছরের অভিজ্ঞ সার্টিফাইড সিসিটিভি সিকিউরিটি টেকনিশিয়ান। হিকভিশন, ডাহুয়া ও জোভি ভিশন আইপি ক্যামেরা ফিটিং, মোবাইল আইপি অনলাইন কনফিগারেশন ও ডাটা ব্যাকআপ ফিক্সেশনে পারদর্শী।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        id: 'cctv_1002',
        name: 'মোঃ রাজিবুল ইসলাম (ওয়াইফাই পিটিজেড ও নাইট ভিশন ক্যামেরা বিশেষজ্ঞ)',
        phone: '01733-778899',
        alternatePhone: '01912-112233',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: [
            'ওয়াইফাই সিসিটিভি (WiFi IP Camera) ও ৩৬০ ডিগ্রি পিটিজেড সেটআপ',
            'সিসিটিভি ক্যামেরা নো-ডিসপ্লে (No Display) ও নাইট ভিশন ফিক্স',
            'ক্যামেরা পাওয়ার সাপ্লাই, ক্যাট-৬ (Cat6) ও বিএনসি (BNC) কেবলিং'
        ],
        dailyWage: 500,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'স্টেশন রোড, ডেল্টা টেকনোলজি বিল্ডিং, দিনাজপুর সদর',
        isAvailable: true,
        description: 'ওয়াইফাই মেমরি কার্ড ক্যামেরা, ৩৬০ ডিগ্রি রোটেশনাল পিটিজেড ক্যামেরা ইনস্টলেশন ও সিসিটিভি নো-ডিসপ্লে প্রবলেম সমাধান করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cctv_1003',
        name: 'মোঃ জাহিদ হাসান',
        phone: '01822-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 6,
        specialties: [
            'অফিস, বাসা ও শপিং মল সিসিটিভি ওয়্যারিং ও প্যানেল ফিটিং',
            'ডিভিআর (DVR) / এনভিআর (NVR) কনফিগারেশন ও হার্ডডিস্ক সেটআপ',
            'এইচডি (HD) ও আইপি (IP) সিসিটিভি ক্যামেরা ইনস্টলেশন'
        ],
        dailyWage: 500,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ বাসস্ট্যান্ড সংলগ্ন ডিজিটাল সিকিউরিটি পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জ ও আশপাশের শপিং মল, রাইস মিল ও বাসাবাড়িতে নিরাপদ সিসিটিভি ক্যামেরা ডিস্ট্রিবিউশন ওয়্যারিং করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cctv_1004',
        name: 'মোঃ আরিফুল ইসলাম',
        phone: '01911-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: [
            'মোবাইলে সিসিটিভি অনলাইন লাইভ ভিউ (Online Live View) সেটআপ',
            'সিসিটিভি ক্যামেরা বাৎসরিক মেনটেন্যান্স (AMC) সার্ভিস',
            'ক্যামেরা পাওয়ার সাপ্লাই, ক্যাট-৬ (Cat6) ও বিএনসি (BNC) কেবলিং'
        ],
        dailyWage: 450,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর বাসস্ট্যান্ড সংলগ্ন সিসিটিভি পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে পুরাতন সিসিটিভি ক্যামেরা মেরামত, ডিভিআর পাসওয়ার্ড রিকভারি ও স্মার্টফোনে লাইভ ভিউ কানেকশন সার্ভিস।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cctv_1005',
        name: 'মোঃ তোফাজ্জল হোসেন',
        phone: '01715-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: [
            'এইচডি (HD) ও আইপি (IP) সিসিটিভি ক্যামেরা ইনস্টলেশন',
            'অফিস, বাসা ও শপিং মল সিসিটিভি ওয়্যারিং ও প্যানেল ফিটিং',
            'ওয়াইফাই সিসিটিভি (WiFi IP Camera) ও ৩৬০ ডিগ্রি পিটিজেড সেটআপ'
        ],
        dailyWage: 550,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী ঢাকা মোড় সিকিউরিটি সলিউশন, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ী ও বিরামপুর এলাকার ব্যাংক, জুয়েলারি শপ ও বাসাবাড়ির জন্য ব্র্যান্ডেড সিসিটিভি ক্যামেরা সেটআপ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cctv_1006',
        name: 'মোঃ সুমন মিয়া',
        phone: '01833-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        experienceYears: 5,
        specialties: [
            'সিসিটিভি ক্যামেরা নো-ডিসপ্লে (No Display) ও নাইট ভিশন ফিক্স',
            'ক্যামেরা পাওয়ার সাপ্লাই, ক্যাট-৬ (Cat6) ও বিএনসি (BNC) কেবলিং',
            'ডিভিআর (DVR) / এনভিআর (NVR) কনফিগারেশন ও হার্ডডিস্ক সেটআপ'
        ],
        dailyWage: 400,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর বাজার গলি, দিনাজপুর',
        isAvailable: true,
        description: 'ক্যামেরা ডিসপ্লে না আসা, এডাপ্টার পুড়ে যাওয়া ও ড্যামেজ ক্যাট-৬ ক্যাবল বদলানো দ্রুত সমাধান করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cctv_1007',
        name: 'মোঃ আনিসুর রহমান',
        phone: '01744-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: [
            'ডিভিআর (DVR) / এনভিআর (NVR) কনফিগারেশন ও হার্ডডিস্ক সেটআপ',
            'মোবাইলে সিসিটিভি অনলাইন লাইভ ভিউ (Online Live View) সেটআপ',
            'সিসিটিভি ক্যামেরা বাৎসরিক মেনটেন্যান্স (AMC) সার্ভিস'
        ],
        dailyWage: 500,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ কাঁচাবাজার আইটি টেক, দিনাজপুর',
        isAvailable: true,
        description: 'এনভিআর কনফিগারেশন, হার্ডডিস্ক ফরমেট প্রবলেম ও বাৎসরিক সার্ভিস চুক্তিতে সিসিটিভি ক্যামেরা মেরামত করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cctv_1008',
        name: 'মোঃ রফিকুল ইসলাম',
        phone: '01925-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 6,
        specialties: [
            'ওয়াইফাই সিসিটিভি (WiFi IP Camera) ও ৩৬০ ডিগ্রি পিটিজেড সেটআপ',
            'এইচডি (HD) ও আইপি (IP) সিসিটিভি ক্যামেরা ইনস্টলেশন'
        ],
        dailyWage: 450,
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা পাকেরহাট সিসিটিভি টেক, দিনাজপুর',
        isAvailable: true,
        description: 'ওয়াইফাই সিসিটিভি ক্যামেরা সেটআপ ও নাইট ভিশন ইনফারেড রেঞ্জ টিউনিং করে থাকি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cctv_1009',
        name: 'মোঃ শহিদুল ইসলাম',
        phone: '01755-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: [
            'অফিস, বাসা ও শপিং মল সিসিটিভি ওয়্যারিং ও প্যানেল ফিটিং',
            'সিসিটিভি ক্যামেরা নো-ডিসপ্লে (No Display) ও নাইট ভিশন ফিক্স',
            'মোবাইলে সিসিটিভি অনলাইন লাইভ ভিউ (Online Live View) সেটআপ'
        ],
        dailyWage: 500,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ স্টেশন রোড সিকিউরিটি পলি, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জ ও বোচাগঞ্জে আধুনিক নাইট ভিশন সিসিটিভি ইনস্টলেশন ও মোবাইল ভিউ কনফিগারেশন করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cctv_1010',
        name: 'মোঃ মুরাদ হাসান',
        phone: '01866-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        experienceYears: 6,
        specialties: [
            'এইচডি (HD) ও আইপি (IP) সিসিটিভি ক্যামেরা ইনস্টলেশন',
            'ক্যামেরা পাওয়ার সাপ্লাই, ক্যাট-৬ (Cat6) ও বিএনসি (BNC) কেবলিং'
        ],
        dailyWage: 450,
        district: 'দিনাজপুর',
        upazila: 'বিরল',
        address: 'বিরল হাইওয়ে মোড় সিসিটিভি হাব, দিনাজপুর',
        isAvailable: true,
        description: 'বিরল উপজেলায় নতুন বাসা-বাড়ি ও কোল্ড স্টোরেজের সিসিটিভি ক্যামেরা ওয়্যারিং কাজ নিখুঁতভাবে করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'cctv_1011',
        name: 'মোঃ মোসাদ্দেক হোসেন',
        phone: '01777-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        experienceYears: 11,
        specialties: [
            'ডিভিআর (DVR) / এনভিআর (NVR) কনফিগারেশন ও হার্ডডিস্ক সেটআপ',
            'অফিস, বাসা ও শপিং মল সিসিটিভি ওয়্যারিং ও প্যানেল ফিটিং',
            'সিসিটিভি ক্যামেরা বাৎসরিক মেনটেন্যান্স (AMC) সার্ভিস'
        ],
        dailyWage: 600,
        district: 'দিনাজপুর',
        upazila: 'হাকিমপুর',
        address: 'হিলি বন্দর সিকিউরিটি সলিউশন, হাকিমপুর, দিনাজপুর',
        isAvailable: true,
        description: 'হিলি স্থলবন্দর সংলগ্ন ইম্পোর্ট-এক্সপোর্ট অফিস, গুদাম ও ব্যবসা প্রতিষ্ঠানের সার্বক্ষণিক সিসিটিভি ক্যামেরা সার্ভিস প্রদান করি।',
        workSampleImages: [],
        status: 'approved'
    }
];

class CctvServicingService {
    async getAll(query = {}) {
        try {
            const filter = {};
            if (query.status) {
                filter.status = query.status;
            }
            if (query.upazila && query.upazila !== 'সকল উপজেলা') {
                filter.upazila = query.upazila;
            }
            if (query.isAvailable !== undefined) {
                filter.isAvailable = query.isAvailable === 'true';
            }

            let cctvServicings = await CctvServicing.find(filter).sort({ createdAt: -1 });
            if (!cctvServicings || cctvServicings.length === 0) {
                return initialCctvServicings.filter(item => {
                    if (query.status && item.status !== query.status) return false;
                    if (query.upazila && query.upazila !== 'সকল উপজেলা' && item.upazila !== query.upazila) return false;
                    return true;
                });
            }
            return cctvServicings;
        } catch (error) {
            console.error('Error fetching cctv servicings:', error);
            return initialCctvServicings;
        }
    }

    async getById(id) {
        try {
            if (id.startsWith('cctv_')) {
                return initialCctvServicings.find(m => m.id === id) || null;
            }
            return await CctvServicing.findById(id);
        } catch (error) {
            return initialCctvServicings.find(m => m.id === id) || null;
        }
    }

    async create(data) {
        try {
            const cctvServicing = new CctvServicing(data);
            return await cctvServicing.save();
        } catch (error) {
            throw error;
        }
    }

    async updateStatus(id, status) {
        try {
            if (id.startsWith('cctv_')) {
                const item = initialCctvServicings.find(m => m.id === id);
                if (item) {
                    item.status = status;
                    return item;
                }
            }
            return await CctvServicing.findByIdAndUpdate(id, { status }, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            if (id.startsWith('cctv_')) {
                const idx = initialCctvServicings.findIndex(m => m.id === id);
                if (idx !== -1) {
                    initialCctvServicings.splice(idx, 1);
                    return { message: 'Deleted successfully' };
                }
            }
            return await CctvServicing.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}

export default new CctvServicingService();
