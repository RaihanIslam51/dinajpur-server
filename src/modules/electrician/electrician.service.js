import Electrician from './electrician.model.js';

const initialElectricians = [
    {
        id: 'electrician_1001',
        name: 'মোঃ আজহারুল ইসলাম (হেড ইলেকট্রিক ওয়্যারিং ও ইন্ডাস্ট্রিয়াল প্যানেল বিশেষজ্ঞ)',
        phone: '01712-887766',
        alternatePhone: '01819-112233',
        photo: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 12,
        specialties: [
            'হোম ও অফিস বিল্ডিং ইলেকট্রিক ওয়ারিং (Wiring)',
            'শর্ট সার্কিট (Short Circuit) ও ফিউজ/এমসিবি (MCB) ট্রিপ সমাধান',
            'ইন্ডাস্ট্রিয়াল ৩-ফেজ মোটর ও কন্ট্রোল প্যানেল সার্ভিস'
        ],
        dailyWage: 800,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মডার্ন মোড়, পাওয়ার হাউজ সংলগ্ন, দিনাজপুর সদর',
        isAvailable: true,
        description: '১২ বছরের অভিজ্ঞ সার্টিফাইড প্রধান ইলেকট্রিশিয়ান। বাসা-বাড়ি, কমার্শিয়াল ভবন ও ফ্যাক্টরির সম্পূর্ণ নিরাপদ ইলেকট্রিক ওয়্যারিং ও থ্রি-ফেজ কন্ট্রোল প্যানেল তৈরিতে পারদর্শী।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        id: 'electrician_1002',
        name: 'মোঃ শফিকুল ইসলাম (ইমারজেন্সি শর্ট সার্কিট ও আইপিএস স্পেশালিস্ট)',
        phone: '01733-556677',
        alternatePhone: '01912-334455',
        photo: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: [
            'শর্ট সার্কিট (Short Circuit) ও ফিউজ/এমসিবি (MCB) ট্রিপ সমাধান',
            'ইলেক্ট্রিক গিজার ও আইপিএস (IPS) / ইনভার্টার কানেকশন',
            'ইলেকট্রিক ইমারজেন্সি সার্ভিস (২৪/৭)'
        ],
        dailyWage: 750,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'গনেশতলা, বিদ্যুৎ অফিস গলি, দিনাজপুর সদর',
        isAvailable: true,
        description: 'জরুরি ইলেকট্রিক ফল্ট ও ফিউজ ট্রিপিং দ্রুত সমাধান করি। আইপিএস, ব্যাটারি সেটআপ ও ইলেকট্রিক গিজার কানেকশনে দীর্ঘদিনের অভিজ্ঞতা।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        id: 'electrician_1003',
        name: 'মোঃ রুবেল হোসেন',
        phone: '01822-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: [
            'ফ্যান, লাইট, সুইচ-সকেট ও বোর্ড ইনস্টলেশন',
            'সাব-মিটার ও মেইন সুইচ ইনস্টলেশন',
            'হোম ও অফিস বিল্ডিং ইলেকট্রিক ওয়ারিং (Wiring)'
        ],
        dailyWage: 650,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ পুরানো বাজার, ইলেকট্রিক পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'নতুন বাসা-বাড়ির কন্সিলেড ও ওপেন ওয়্যারিং, ডিস্ট্রিবিউশন বোর্ড (DB), সাব-মিটার এবং লাইটিং সেটআপ নিখুঁতভাবে করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'electrician_1004',
        name: 'মোঃ জিয়াউর রহমান',
        phone: '01911-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: [
            'আর্থিং (Earthing) ও থ্রি-ফেজ লোড ব্যালান্সিং',
            'ইন্ডাস্ট্রিয়াল ৩-ফেজ মোটর ও কন্ট্রোল প্যানেল সার্ভিস',
            'সাব-মিটার ও মেইন সুইচ ইনস্টলেশন'
        ],
        dailyWage: 700,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর নতুন বাজার, রেলওয়ে কলোনি মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুর ও আশপাশের এলাকায় রাইস মিল, ওয়ার্কশপ এবং বাসা-বাড়ির আর্থিং, কপার কেব্লিং ও সার্কিট ব্রেকার ইন্সটলেশন সার্ভিস প্রদান করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'electrician_1005',
        name: 'মোঃ জাহাঙ্গীর আলম',
        phone: '01715-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: [
            'হোম ও অফিস বিল্ডিং ইলেকট্রিক ওয়ারিং (Wiring)',
            'ইলেক্ট্রিক গিজার ও আইপিএস (IPS) / ইনভার্টার কানেকশন',
            'ফ্যান, লাইট, সুইচ-সকেট ও বোর্ড ইনস্টলেশন'
        ],
        dailyWage: 700,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, বিদ্যুৎ সার্ভিস সেন্টার, দিনাজপুর',
        isAvailable: true,
        description: '১০ বছরের দক্ষ ইলেকট্রিশিয়ান। নতুন বাড়ি, দোকান বা অফিসের কমপ্লিট বিদ্যুৎ ওয়্যারিং ও ডেকোরেটিভ লাইটিং কাজ করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'electrician_1006',
        name: 'মোঃ কামরুল হাসান',
        phone: '01833-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        experienceYears: 6,
        specialties: [
            'শর্ট সার্কিট (Short Circuit) ও ফিউজ/এমসিবি (MCB) ট্রিপ সমাধান',
            'ফ্যান, লাইট, সুইচ-সকেট ও বোর্ড ইনস্টলেশন',
            'ইলেকট্রিক ইমারজেন্সি সার্ভিস (২৪/৭)'
        ],
        dailyWage: 600,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দর ও রানীরবন্দর এলাকায় যেকোনো জরুরি ইলেকট্রিক সমস্যা, লাইট-ফ্যান ফিটিং ও সার্কিট ব্রেকার চেঞ্জ করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'electrician_1007',
        name: 'মোঃ সাখাওয়াত হোসেন',
        phone: '01744-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
        experienceYears: 11,
        specialties: [
            'আর্থিং (Earthing) ও থ্রি-ফেজ লোড ব্যালান্সিং',
            'হোম ও অফিস বিল্ডিং ইলেকট্রিক ওয়ারিং (Wiring)',
            'সাব-মিটার ও মেইন সুইচ ইনস্টলেশন'
        ],
        dailyWage: 800,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ কাঁচাবাজার গলি, ইলেকট্রিক ইলেকট্রনিক্স, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জ এলাকায় বড় বিল্ডিং, মার্কেট ও বহুতল ভবনের প্রফেশনাল পাইপ ফিলিং ও থ্রি-ফেজ ডিস্ট্রিবিউশন কাজ করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'electrician_1008',
        name: 'মোঃ মিজানুর রহমান',
        phone: '01925-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 5,
        specialties: [
            'ফ্যান, লাইট, সুইচ-সকেট ও বোর্ড ইনস্টলেশন',
            'ইলেক্ট্রিক গিজার ও আইপিএস (IPS) / ইনভার্টার কানেকশন'
        ],
        dailyWage: 550,
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা পাকেরহাট বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'পাকেরহাট ও খানসামা এলাকায় সাশ্রয়ী খরচে নতুন ইলেকট্রিক ফিটিংস ও আইপিএস সার্ভিস প্রদান করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'electrician_1009',
        name: 'মোঃ তারিকুল ইসলাম',
        phone: '01755-998800',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: [
            'ইলেকট্রিক ইমারজেন্সি সার্ভিস (২৪/৭)',
            'শর্ট সার্কিট (Short Circuit) ও ফিউজ/এমসিবি (MCB) ট্রিপ সমাধান',
            'সাব-মিটার ও মেইন সুইচ ইনস্টলেশন'
        ],
        dailyWage: 650,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ তিলক রোড, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জ ও বোচাগঞ্জে বাসাবাড়ির কারেন্ট চলে যাওয়া, সুইচ গ্যাং বোর্ড ড্যামেজ ও সাব-মিটার বসানোর কাজ করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'electrician_1010',
        name: 'মোঃ ফারুক হোসেন',
        phone: '01866-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: [
            'হোম ও অফিস বিল্ডিং ইলেকট্রিক ওয়ারিং (Wiring)',
            'ফ্যান, লাইট, সুইচ-সকেট ও বোর্ড ইনস্টলেশন',
            'ইলেক্ট্রিক গিজার ও আইপিএস (IPS) / ইনভার্টার কানেকশন'
        ],
        dailyWage: 600,
        district: 'দিনাজপুর',
        upazila: 'বিরল',
        address: 'বিরল বাসস্ট্যান্ড সংলগ্ন ইলেকট্রিক কেয়ার, দিনাজপুর',
        isAvailable: true,
        description: 'বিরল উপজেলায় সততা ও দক্ষতার সাথে ইলেকট্রিক কাজ সম্পন্ন করি। জরুরি ডাক পাওয়ার সাথে সাথে উপস্থিত হই।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'electrician_1011',
        name: 'মোঃ হারুনুর রশীদ',
        phone: '01777-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        experienceYears: 13,
        specialties: [
            'ইন্ডাস্ট্রিয়াল ৩-ফেজ মোটর ও কন্ট্রোল প্যানেল সার্ভিস',
            'আর্থিং (Earthing) ও থ্রি-ফেজ লোড ব্যালান্সিং',
            'হোম ও অফিস বিল্ডিং ইলেকট্রিক ওয়ারিং (Wiring)'
        ],
        dailyWage: 850,
        district: 'দিনাজপুর',
        upazila: 'হাকিমপুর',
        address: 'হিলি স্থলবন্দর মোড়, হাকিমপুর, দিনাজপুর',
        isAvailable: true,
        description: '১৩ বছরের অভিজ্ঞ প্রফেশনাল ইলেকট্রিক মেকানিক। স্থলবন্দর সংলগ্ন ওয়ারহাউজ, মিল ও বড় ভবনের হেভি ইলেকট্রিক সার্ভিস।',
        workSampleImages: [],
        status: 'approved'
    }
];

class ElectricianService {
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

            let electricians = await Electrician.find(filter).sort({ createdAt: -1 });
            if (!electricians || electricians.length === 0) {
                return initialElectricians.filter(item => {
                    if (query.status && item.status !== query.status) return false;
                    if (query.upazila && query.upazila !== 'সকল উপজেলা' && item.upazila !== query.upazila) return false;
                    return true;
                });
            }
            return electricians;
        } catch (error) {
            console.error('Error fetching electricians:', error);
            return initialElectricians;
        }
    }

    async getById(id) {
        try {
            if (id.startsWith('electrician_')) {
                return initialElectricians.find(m => m.id === id) || null;
            }
            return await Electrician.findById(id);
        } catch (error) {
            return initialElectricians.find(m => m.id === id) || null;
        }
    }

    async create(data) {
        try {
            const electrician = new Electrician(data);
            return await electrician.save();
        } catch (error) {
            throw error;
        }
    }

    async updateStatus(id, status) {
        try {
            if (id.startsWith('electrician_')) {
                const item = initialElectricians.find(m => m.id === id);
                if (item) {
                    item.status = status;
                    return item;
                }
            }
            return await Electrician.findByIdAndUpdate(id, { status }, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            if (id.startsWith('electrician_')) {
                const idx = initialElectricians.findIndex(m => m.id === id);
                if (idx !== -1) {
                    initialElectricians.splice(idx, 1);
                    return { message: 'Deleted successfully' };
                }
            }
            return await Electrician.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}

export default new ElectricianService();
