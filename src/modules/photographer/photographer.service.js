import Photographer from './photographer.model.js';

const initialPhotographers = [
    {
        id: 'pho_1001',
        name: 'মোঃ তানভীর হাসান (হেড ওয়েডিং ফটোগ্রাফার ও ড্রোন অপারেটর)',
        phone: '01718-334455',
        alternatePhone: '01816-778899',
        photo: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=600&q=80',
        photographyType: 'ওয়েডিং ও সিনেমাটিক ভিডিওগ্রাফি',
        experienceYears: 9,
        specialties: [
            'ওয়েডিং ক্যানডিড ফটোশুট ও গায়ে হলুদ সিনেমাটিক ভিডিও',
            '৪কে ড্রোন (4K Drone) অ্যারিয়েল কভারেজ ও হাইলাইটস ফিল্ম',
            'প্রি-ওয়েডিং ও পোস্ট-ওয়েডিং আউটডোর ফটোশুট'
        ],
        dailyWage: 5000,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'চারু বাবুর মোড়, সিকিউরিটি ভিশন মার্কেট (২য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '৯ বছরের অভিজ্ঞ ফুল-ফ্রেম ক্যানন/সোনি আলফা ফটোগ্রাফার ও ৪কে ড্রোন পাইলট। বিয়ে, রিসেপশন ও হলুদের অ্যালবাম ও সিনেমাটিক ট্রেইলার তৈরিতে পারদর্শী।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        id: 'pho_1002',
        name: 'মোঃ রাজিবুল ইসলাম (বেবি শুট ও ফ্যামিলি পোর্ট্রেট এক্সপার্ট)',
        phone: '01730-556677',
        alternatePhone: '01921-889900',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        photographyType: 'বার্থডে, বেবি শুট ও পোর্ট্রেট',
        experienceYears: 7,
        specialties: [
            'নিউবর্ন ও কিউট বেবি পোর্ট্রেট শুট উইথ থিম সেটআপ',
            'বার্থডে পার্টি ও অ্যানিভার্সারি ইভেন্ট কভারেজ',
            'স্টুডিও লাইটিং উইথ ফ্যামিলি পোর্ট্রেট অ্যালবাম'
        ],
        dailyWage: 3500,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'স্টেশন রোড, ড্রিম ফটো স্টুডিও, দিনাজপুর সদর',
        isAvailable: true,
        description: 'বাচ্চাদের জন্মদিনের রঙিন থিম পোর্ট্রেট ও পারিবারিক অ্যালবামের সুন্দর মেমোরি তৈরি করে থাকি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'pho_1003',
        name: 'মোঃ আজহারুল ইসলাম (প্রোডাক্ট ও ই-কমার্স ফটোগ্রাফার)',
        phone: '01834-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        photographyType: 'প্রোডাক্ট ও মডেল ক্যাটালগ শুট',
        experienceYears: 6,
        specialties: [
            'অনলাইন ই-কমার্স ও ফেসবুক পেজ প্রোডাক্ট ফটোশুট',
            'মডেল পোশাক ও ক্যাটালগ লাইটিং শুট',
            'ফটোপয়েন্ট ব্যাকগ্রাউন্ড রিমুভাল ও প্রফেশনাল রিটার্চিং'
        ],
        dailyWage: 4000,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ পুরানো বাসস্ট্যান্ড সংলগ্ন স্টুডিও, দিনাজপুর',
        isAvailable: true,
        description: 'অনলাইন শপ ও ব্র্যান্ডিংয়ের জন্য প্রোডাক্ট ও মডেলের হাই-রেজুলেশন ক্যাটালগ ছবি তোলে থাকি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'pho_1004',
        name: 'মোঃ শফিকুল ইসলাম (করপোরেট ও সেমিনার ভিডিওগ্রাফার)',
        phone: '01745-112233',
        alternatePhone: '01614-667788',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        photographyType: 'করপোরেট ইভেন্ট ও ডকুমেন্টারি',
        experienceYears: 10,
        specialties: [
            'অফিসিয়াল সেমিনার, এজিএম ও ওয়ার্কশপ কভারেজ',
            'ডকুমেন্টারি ও শর্ট ফিল্ম সীন ভিডিওগ্রাফি',
            'মাল্টি-ক্যামেরা লাইভ স্ট্রিমিং ও প্রজেক্টর সেটআপ'
        ],
        dailyWage: 6000,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর নতুন বাজার, ফোকাস মিডিয়া লিমিটেড, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুর ও দিনাজপুরে সরকারি ও বেসরকারি সংস্থার সেমিনার, সভা ও ইভেন্টের মাল্টি-ক্যামেরা ভিডিও রেকর্ড ও ইউটিউব লাইভ স্ট্রিমিং সম্পন্ন করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'pho_1005',
        name: 'মোঃ জাহিদ হাসান (আউটডোর ও কাপল পোর্ট্রেট স্পেশালিস্ট)',
        phone: '01929-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        photographyType: 'প্রি-ওয়েডিং ও আউটডোর শুট',
        experienceYears: 5,
        specialties: [
            'প্রাকৃতিক লোকেশনে প্রি-ওয়েডিং ও পোস্ট-ওয়েডিং কাপল শুট',
            'ন্যাচারাল সানলাইট পোর্ট্রেট ওBokeh লাইটিং',
            'ইনস্টাগ্রাম রিলস (Reels) ও শর্টস সিনেমাটিক এডিটিং'
        ],
        dailyWage: 3000,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'রামসাগর মোড়, রামসাগর পার্ক সংলগ্ন ফটো ক্লাব, দিনাজপুর সদর',
        isAvailable: true,
        description: 'রামসাগর, কান্তজী জিউ মন্দির ও সুফিয়া পার্কে কাপলদের সিনেমাটিক রিলস ও প্রাকৃতিক পোর্ট্রেট ফটোশুট করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'pho_1006',
        name: 'মেসার্স ক্লিক মিডিয়া ও ডিজিটাল স্টুডিও',
        phone: '01721-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80',
        photographyType: 'ওয়েডিং ও সামাজিক উৎসব',
        experienceYears: 12,
        specialties: [
            'বিবাহ ও আকিকার ঐতিহ্যবাহী ও আধুনিক ডিজিটাল অ্যালবাম',
            'ফটোগ্লাস মগ, ফটোফ্রেম ও ডিজিটাল ল্যামিনেশন',
            'মেহেরাফুল ও ক্যানডিড ওয়েডিং ভিডিও'
        ],
        dailyWage: 4500,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, ক্লিক মিডিয়া, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে ১২ বছর ধরে বিশ্বস্ততার সাথে বিয়ের ক্যামেরা টিম সার্ভিস ও কালার প্রিন্টিং সেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'pho_1007',
        name: 'মোঃ সাদ্দাম হোসেন (ফ্যাশন পোর্ট্রেট ও মেকআপ ফটোশুট)',
        phone: '01819-887766',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        photographyType: 'ফ্যাশন পোর্ট্রেট ও ব্রাইডাল লুক',
        experienceYears: 8,
        specialties: [
            'পার্লার ব্রাইডাল মেকআপ ও কনে ফটোশুট',
            'ফ্যাশন মডেল পোর্টফোলিও ও গ্ল্যামারাস লাইটিং',
            'স্কিন মেকআপ মেটিন ও হাই-এন্ড ফটো এডিটিং'
        ],
        dailyWage: 4000,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাজার, ফ্যাশন ফটো কেয়ার, দিনাজপুর',
        isAvailable: true,
        description: 'বিউটি পার্লারের কনে মেকআপ পোর্টফোলিও এবং মডেলদের হাই-কোয়ালিটি গ্ল্যামার শুট সার্ভিস।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'pho_1008',
        name: 'মোঃ তানজিম আহমেদ (ড্রোন ও রিলস মেকার)',
        phone: '01917-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        photographyType: 'সিনেমাটিক ড্রোন ও শর্ট ভিডিও',
        experienceYears: 6,
        specialties: [
            'ডিজেআই (DJI) ৪কে ড্রোন দিয়ে আকাশপথের ভিডিওগ্রাফি',
            'ইনস্টাগ্রাম ও ফেসবুকের ভাইরাল রিলস শুটিং',
            'লাইটিং সোর্সিং ও ফাস্ট এডিটিং ডেলিভারি'
        ],
        dailyWage: 3500,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর লিঙ্ক রোড, সিনেমাটিক ফটো স্টুডিও, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দর এলাকায় ড্রোন দিয়ে ইভেন্ট কভারেজ এবং ট্রাভেল/ওয়েডিং সিনেমাটিক ভিডিও তৈরি করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'pho_1009',
        name: 'মোঃ খোরশেদ আলম (স্পোর্টস ও রিয়েল এস্টেট ফটোগ্রাফার)',
        phone: '01738-776655',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
        photographyType: 'স্পোর্টস, আর্কিটেকচার ও প্রপার্টি',
        experienceYears: 9,
        specialties: [
            'স্পোর্টস টুর্নামেন্ট ও কালচারাল প্রোগ্রাম শুটিং',
            'রিয়েল এস্টেট ও বাসা বাড়ীর ভেতরের ওয়াইড-অ্যাঙ্গেল ছবি',
            'এইচডিআর আর্কিটেকচারাল ফটোগ্রাফি'
        ],
        dailyWage: 3500,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ বাজার, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'খেলার মাঠের অ্যাকশন স্পোর্টস ফটোগ্রাফি এবং প্রপার্টি/বাসা বিক্রির রিয়েল এস্টেট ছবি তুলে থাকি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'pho_1010',
        name: 'মেসার্স লেন্স পয়েন্ট মিডিয়া ল্যাব',
        phone: '01847-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        photographyType: 'সম্পূর্ণ ইভেন্ট ফটো ও ভিডিও প্যাকেজ',
        experienceYears: 11,
        specialties: [
            '২ দিনব্যাপী হলুদ ও বিয়ের অল-ইন-ওয়ান মেমোরি প্যাকেজ',
            'প্রিমিয়াম লেদার বাউন্ডেড ৩ডি এলবাম',
            'লাইভ এলইডি স্ক্রিন ও প্রজেক্টর প্রজেকশন'
        ],
        dailyWage: 7000,
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট বাসস্ট্যান্ড, লেন্স পয়েন্ট মিডিয়া, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে সম্পূর্ণ প্রফেশনাল সনি ও ক্যানন ডিএসএলআর/মিররলেস ক্যামেরা ক্রু টিম।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'pho_1011',
        name: 'মোঃ আশরাফুল ইসলাম (পাসপোর্ট ফটো ও সাধারণ ইভেন্ট মেকার)',
        phone: '01758-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        photographyType: 'লোকাল ইভেন্ট ও ফটো প্রিন্ট',
        experienceYears: 8,
        specialties: [
            'পাসপোর্ট, স্ট্যাম্প ও ইনস্ট্যান্ট ফটো এডিটিং',
            'পারিবারিক খাৎনা, আকিকা ও ছোটখাটো ঘরোয়া শুট',
            'ডিজিটাল ফটোল্যাব ফোটো ফ্রেমিং'
        ],
        dailyWage: 2500,
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার, ডিজিটাল ল্যাব, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে বিশ্বস্ততার সাথে ইনস্ট্যান্ট ফটো এডিটিং, ফ্রেম এবং ঘরোয়া অনুষ্ঠানের ক্যাজুয়াল ছবি তোলা হয়।',
        workSampleImages: [],
        status: 'approved'
    }
];

class PhotographerService {
    async getAll(query = {}) {
        try {
            const filter = {};
            if (query.status) filter.status = query.status;
            if (query.upazila && query.upazila !== 'সকল উপজেলা') {
                filter.upazila = query.upazila;
            }

            let photographers = await Photographer.find(filter).sort({ createdAt: -1 });
            if (!photographers || photographers.length === 0) {
                return initialPhotographers.filter(item => {
                    if (query.status && item.status !== query.status) return false;
                    if (query.upazila && query.upazila !== 'সকল উপজেলা' && item.upazila !== query.upazila) return false;
                    return true;
                });
            }
            return photographers;
        } catch (error) {
            console.error('Error fetching photographers:', error);
            return initialPhotographers;
        }
    }

    async getById(id) {
        try {
            if (id.startsWith('pho_')) {
                return initialPhotographers.find(m => m.id === id) || null;
            }
            return await Photographer.findById(id);
        } catch (error) {
            return initialPhotographers.find(m => m.id === id) || null;
        }
    }

    async create(data) {
        try {
            const photographer = new Photographer(data);
            return await photographer.save();
        } catch (error) {
            throw error;
        }
    }

    async updateStatus(id, status) {
        try {
            if (id.startsWith('pho_')) {
                const item = initialPhotographers.find(m => m.id === id);
                if (item) {
                    item.status = status;
                    return item;
                }
            }
            return await Photographer.findByIdAndUpdate(id, { status }, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            if (id.startsWith('pho_')) {
                const idx = initialPhotographers.findIndex(m => m.id === id);
                if (idx !== -1) {
                    initialPhotographers.splice(idx, 1);
                    return { message: 'Deleted successfully' };
                }
            }
            return await Photographer.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}

export default new PhotographerService();
