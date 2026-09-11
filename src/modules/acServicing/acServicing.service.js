import AcServicing from './acServicing.model.js';

const INITIAL_AC_SERVICING_DATA = [
    {
        name: 'মোঃ কামরুল হাসান (হেড এসি কুলিং ও ইনভার্টার পিসিবি সার্কিট স্পেশালিস্ট)',
        phone: '01712-334455',
        alternatePhone: '01812-667788',
        photo: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 13,
        specialties: ['ইনভার্টার এসি পিসিবি (PCB) সার্কিট মেরামত', 'এসি গ্যাস রিফিলিং ও লিক ফিক্স', 'নতুন এসি ইনস্টলেশন ও আনইনস্টলেশন'],
        dailyWage: 1000,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'গনেশতলা এসি ও ফ্রিজ সার্ভিসিং সেন্টার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দীর্ঘ ১৩ বছর ধরে গ্রী, জেনারেল, মিডিয়া, ওয়ালটন, স্যামসাং ও এলজি ইনভার্টার/নন-ইনভার্টার স্প্লিট এসি ওয়াশিং, গ্যাস চার্জিং ও পিসিবি মাদারবোর্ড মেরামত করে আসছি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ আজহারুল ইসলাম (এসি মাস্টার প্রেশার ওয়াটার ওয়াশিং মিস্ত্রি)',
        phone: '01911-667788',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: ['এসি মাস্টার ওয়াটার ওয়াশিং সার্ভিস', 'এসি পানি পড়া ও নয়েজ সলিউশন'],
        dailyWage: 800,
        district: 'দিনাজপুর',
        upazila: 'বিরল',
        address: 'বিরল কলেজ রোড এসি কেয়ার, দিনাজপুর',
        isAvailable: true,
        description: 'হাই প্রেসার পাম্প ওয়াশার দিয়ে ইনডোর ও আউটডোর ইউনিটের ধূলাবালি ও দুর্গন্ধমুক্ত ফোমিং ডীপ সার্ভিসিং করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ রফিকুল ইসলাম (এসি গ্যাস রিফিলিং ও কপার পাইপিং স্পেশালিস্ট)',
        phone: '01733-990011',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 11,
        specialties: ['এসি গ্যাস রিফিলিং ও লিক ফিক্স', 'নতুন এসি ইনস্টলেশন ও আনইনস্টলেশন'],
        dailyWage: 950,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর বাস টার্মিনাল মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'R22, R32 ও R410A ফ্রেন গ্যাস ভ্যাকুয়াম চার্জিং, নাইট্রোজেন প্রেশার লিক টেস্ট ও কপার পাইপিং ফ্লেয়ার সকেট ফিটিং।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ শফিকুল ইসলাম (কম্প্রেসার ও ক্যাপাসিটর চেঞ্জ মাস্টার মিস্ত্রি)',
        phone: '01815-223344',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 14,
        specialties: ['কম্প্রেসার ও ক্যাপাসিটর চেঞ্জ', 'ইনভার্টার এসি পিসিবি (PCB) সার্কিট মেরামত'],
        dailyWage: 1000,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ পুরাতন বাসস্ট্যান্ড, দিনাজপুর',
        isAvailable: false,
        description: '১.৫ টন ও ২ টন এসির লক হয়ে যাওয়া কম্প্রেসার ওভারহোলিং, ক্যাপাসিটর চেঞ্জ ও ম্যাগনেটিক কন্টাক্টর ওভারলোড ফিক্স।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ মোস্তাক আহমেদ (কমার্শিয়াল ক্যাসেট ও চিলার এসি মেইনটেন্যান্স ইঞ্জিনিয়ার)',
        phone: '01719-778899',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        experienceYears: 15,
        specialties: ['কমার্শিয়াল ও চিলার এসি মেইনটেন্যান্স', 'নতুন এসি ইনস্টলেশন ও আনইনস্টলেশন'],
        dailyWage: 1200,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাধানগর মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'ব্যাংক, শোরুম, কনফারেন্স হল ও বহুতল ভবনের সিলিং ক্যাসেট এসি, ডাক্ট এসি ও চিলার প্ল্যান্ট মেইনটেন্যান্স করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ তারেক রহমান (এসি পানি পড়া ড্রেন ফিক্স ও নয়েজ সলিউশন কারিগর)',
        phone: '01915-112233',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['এসি পানি পড়া ও নয়েজ সলিউশন', 'এসি মাস্টার ওয়াটার ওয়াশিং সার্ভিস'],
        dailyWage: 800,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ মোড় এসি পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ইনডোর ব্লোয়ার ভাইব্রেশন নয়েজ সলিউশন, আইসিং ফিক্সিং এবং ড্রেন ট্র্যাপ আইস ব্লকেজ ক্লিয়ারিং করা হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ সাইফুর রহমান (নতুন ওয়াল মাউন্ট ও স্প্লিট এসি ইনস্টলার)',
        phone: '01714-556677',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['নতুন এসি ইনস্টলেশন ও আনইনস্টলেশন', 'এসি গ্যাস রিফিলিং ও লিক ফিক্স'],
        dailyWage: 900,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'নতুন ও পুরাতন ১ টন থেকে ৩ টন স্প্লিট এসি দেয়াল ড্রিলিং, আয়রন অ্যাঙ্গেল ব্র্যাকেট সেটআপ ও কানেকশন সার্ভিস।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ একরামুল হক (রেফ্রিজারেটর, ডিপ ফ্রিজ ও এসি কম্বো টেকনিশিয়ান)',
        phone: '01812-334455',
        photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
        experienceYears: 12,
        specialties: ['রেফ্রিজারেটর ও ডিপ ফ্রিজ মেরামত', 'কম্প্রেসার ও ক্যাপাসিটর চেঞ্জ'],
        dailyWage: 850,
        district: 'দিনাজপুর',
        upazila: 'বিরামপুর',
        address: 'বিরামপুর ঢাকা রোড, দিনাজপুর',
        isAvailable: true,
        description: 'ডিজিটাল নো-ফ্রস্ট ফ্রিজ, নরমাল ফ্রিজ ও বাসাবাড়ির এসির গ্যাস চার্ট, থার্মোস্ট্যাট সেন্সর চেঞ্জ ও কুলিং রিপেয়ার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ জাহেদুল ইসলাম (ইনভার্টার এসি ইলেকট্রনিক সেন্সর সার্ভিস মিস্ত্রি)',
        phone: '01718-223344',
        photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: ['ইনভার্টার এসি পিসিবি (PCB) সার্কিট মেরামত', 'এসি গ্যাস রিফিলিং ও লিক ফিক্স'],
        dailyWage: 850,
        district: 'দিনাজপুর',
        upazila: 'खानসামা',
        address: 'খানসামা পাকেরহাট বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'স্মার্ট ইনভার্টার এসির ই১/ই৪/এফ৩ এরর কোড ডায়াগনস্টিক, রিমোট সেন্সর রিপ্লেসমেন্ট ও ডিসপ্লে বোর্ড ফিক্স।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ রুবেল হোসেন (আউটডোর ইউনিট সার্ভিসিং ও প্রটেক্টর মেকানিক)',
        phone: '01917-889900',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: ['এসি মাস্টার ওয়াটার ওয়াশিং সার্ভিস', 'কম্প্রেসার ও ক্যাপাসিটর চেঞ্জ'],
        dailyWage: 800,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ কাঁচাবাজার গলি, দিনাজপুর',
        isAvailable: true,
        description: 'আউটডোর কনডেনসার কয়েল ক্যামিক্যালি ওয়াশ, ফ্যান মোটর অয়েল বিয়ারিং চেঞ্জ ও প্রটেক্টিভ কভারিং।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোঃ হাসানুর রহমান (হোম এসি সার্ভিস ইমার্জেন্সি টেকনিশিয়ান)',
        phone: '01715-445566',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['এসি গ্যাস রিফিলিং ও লিক ফিক্স', 'এসি পানি পড়া ও নয়েজ সলিউশন'],
        dailyWage: 800,
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার মেইন রোড, দিনাজপুর',
        isAvailable: true,
        description: 'জরুরি ভিত্তিতে বাসা বা অফিসে গিয়ে কপার পাইপ ব্র্যাজিং сварকা, গ্যাস রিফিল ও ওয়াশিং সার্ভিস দেওয়া হয়।',
        workSampleImages: [],
        status: 'approved'
    }
];

class AcServicingService {
    async seedInitialDataIfNeeded() {
        try {
            const count = await AcServicing.countDocuments();
            if (count === 0) {
                console.log('Seeding initial AC Servicing data...');
                await AcServicing.insertMany(INITIAL_AC_SERVICING_DATA);
                console.log('Initial AC Servicing data seeded successfully.');
            }
        } catch (error) {
            console.error('Error seeding AC Servicing data:', error);
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

        return await AcServicing.find(filter).sort({ createdAt: -1 });
    }

    async getById(id) {
        return await AcServicing.findById(id);
    }

    async create(data) {
        const item = new AcServicing(data);
        return await item.save();
    }

    async updateStatus(id, status) {
        return await AcServicing.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );
    }

    async delete(id) {
        return await AcServicing.findByIdAndDelete(id);
    }
}

export default new AcServicingService();
