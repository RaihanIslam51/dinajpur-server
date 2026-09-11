import ComputerServicing from './computerServicing.model.js';

const INITIAL_COMPUTER_SERVICING_DATA = [
    {
        id: 'computer_1001',
        name: 'মোঃ আশরাফুল আলম (হেড কম্পিউটার ও ল্যাপটপ মাদারবোর্ড আইসি (IC) এক্সপার্ট)',
        phone: '01712-112233',
        alternatePhone: '01812-445566',
        photo: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80',
        experienceYears: 11,
        specialties: ['ডেস্কটপ পিসি (Desktop PC) ফিটিং ও মাদারবোর্ড মেরামত', 'ল্যাপটপ মাদারবোর্ড আইসি (IC) ও পাওয়ার প্রবলেম সমাধান', 'এসএসডি (SSD) ও র‍্যাম (RAM) আপগ্রেড'],
        dailyWage: 600,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'কালীতলা কম্পিউটার শপিং সেন্টার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দীর্ঘ ১১ বছর ধরে ডেল, এইচপি, লেনেভো, অ্যাসুস ও এসার ল্যাপটপ এবং ডেস্কটপ মাদারবোর্ড চিপসেট রিপেয়ার, পাওয়ার নো-ডিসপ্লে ট্রাবলশুটিং করে আসছি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'computer_1002',
        name: 'মোঃ সাজ্জাদ হোসেন (ল্যাপটপ ডিসপ্লে স্ক্রিন ও কীবোর্ড রিপ্লেসমেন্ট মেকানিক)',
        phone: '01911-778899',
        photo: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['ল্যাপটপ ডিসপ্লে (Screen) ও কীবোর্ড রিপ্লেসমেন্ট', 'কম্পিউটার হিটিং প্রবলেম, ডিসপ্লে ফ্যান ও থার্মাল পেস্ট ফিক্স'],
        dailyWage: 500,
        district: 'দিনাজপুর',
        upazila: 'বিরল',
        address: 'বিরল বাসস্ট্যান্ড আইটি সেন্টার, দিনাজপুর',
        isAvailable: true,
        description: '১-ঘণ্টায় ল্যাপটপের ফাটা ফুল এইচডি (Full HD/IPS) ডিসপ্লে চেঞ্জ, ব্যাকলিট কীবোর্ড ফিটিং ও ফ্যান সার্ভিসিং।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'computer_1003',
        name: 'ইঞ্জিনিয়ার মোঃ নাজমুল হুদা (গেইমিং পিসি কাস্টম বিল্ড ও প্রসেসর থার্মাল ওভারহোলিং)',
        phone: '01733-556677',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 12,
        specialties: ['ডেস্কটপ পিসি (Desktop PC) ফিটিং ও মাদারবোর্ড মেরামত', 'কম্পিউটার হিটিং প্রবলেম, ডিসপ্লে ফ্যান ও থার্মাল পেস্ট ফিক্স'],
        dailyWage: 800,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর নিউ মার্কেট সংলগ্ন টেক প্ল্যাটফর্ম, দিনাজপুর',
        isAvailable: true,
        description: 'হাই-এন্ড গেইমিং ও এডিটিং পিসি বিল্ডিং, লিকুইড কুলার ইনস্টলেশন, থার্মাল গ্রীস পরিবর্তন ও ক্যাবল ম্যানেজমেন্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'computer_1004',
        name: 'মোঃ তারেক রহমান (উইন্ডোজ/ম্যাক সফটওয়্যার, ওএস ইন্সটল ও ড্রাইভার ফিক্সার)',
        phone: '01815-334455',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: ['উইন্ডোজ (Windows) ও ম্যাক ওএস (macOS) সফটওয়্যার সেটআপ', 'ডাটা রিকভারি (Data Recovery) ও ভাইরাস ক্লিন'],
        dailyWage: 400,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ হাইওয়ে মোড় ইনফোটেক, দিনাজপুর',
        isAvailable: false,
        description: 'অফিসিয়াল Windows 10/11 ইনস্টলেশন, ম্যাকবুক সফটওয়্যার রিস্টোর, অটোকেড, ফটোশপ ও প্রিমিয়ার প্রো ফুল সেটআপ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'computer_1005',
        name: 'মোঃ শহিদুল ইসলাম (এসএসডি (SSD) ও র‍্যাম (RAM) আপগ্রেড স্পেশালিস্ট)',
        phone: '01719-223344',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: ['এসএসডি (SSD) ও র‍্যাম (RAM) আপগ্রেড', 'ডেস্কটপ পিসি (Desktop PC) ফিটিং ও মাদারবোর্ড মেরামত'],
        dailyWage: 450,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর বাজার মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'পুরাতন স্লো পিসিতে NVMe M.2 SSD ফিটিং, RAM স্পিড আপগ্রেশন ও উইন্ডোজ ক্লোনিং করে ৫ গুণ গতি বৃদ্ধি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'computer_1006',
        name: 'মোঃ রশিদুল হাসান (হার্ডডিস্ক ডাটা রিকভারি (Data Recovery) ও ভাইরাস ক্লিন)',
        phone: '01915-667788',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: ['ডাটা রিকভারি (Data Recovery) ও ভাইরাস ক্লিন', 'উইন্ডোজ (Windows) ও ম্যাক ওএস (macOS) সফটওয়্যার সেটআপ'],
        dailyWage: 650,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ বাজার গলি, দিনাজপুর',
        isAvailable: true,
        description: 'ফরম্যাট হওয়া বা ডেড হার্ডডিস্ক, পেনড্রাইভ ও এসএসডি থেকে মোছা ফাইল, ছবি ও ফাইল রিকভারি সার্ভিস।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'computer_1007',
        name: 'মোঃ আজহারুল ইসলাম (ল্যাপটপ চার্জার পোর্ট, হিঞ্জ ও কাসিং বডি রিপেয়ার)',
        phone: '01714-889900',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        experienceYears: 6,
        specialties: ['ল্যাপটপ ডিসপ্লে (Screen) ও কীবোর্ড রিপ্লেসমেন্ট', 'ল্যাপটপ মাদারবোর্ড আইসি (IC) ও পাওয়ার প্রবলেম সমাধান'],
        dailyWage: 450,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'ল্যাপটপের ভাঙ্গা হিঞ্জ (Hinge) মেটাল গ্লু ফিক্সিং, কাসিং চেঞ্জ ও অরিজিনাল ডিসি চার্জিং পোর্ট সার্ভিস।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'computer_1008',
        name: 'মোঃ সফিকুল ইসলাম (অফিস কম্পিউটার সার্ভিসিং ও প্রিন্টার টোনার কার্টিজ ফিক্স)',
        phone: '01812-112233',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        experienceYears: 13,
        specialties: ['প্রিন্টার ও মনিটর রিপেয়ার সার্ভিস', 'ডেস্কটপ পিসি (Desktop PC) ফিটিং ও মাদারবোর্ড মেরামত'],
        dailyWage: 550,
        district: 'দিনাজপুর',
        upazila: 'বিরামপুর',
        address: 'বিরামপুর মেইন রোড, দিনাজপুর',
        isAvailable: true,
        description: 'ক্যানন, অ্যাপসন ও এইচপি লেজার/কালি প্রিন্টারের পেপার জ্যাম, কার্টিজ রিফিল ও অফিস নেটওয়ার্ক পিসি কন্ট্রোল।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'computer_1009',
        name: 'মোঃ মানসুর রহমান (মনিটর, পাওয়ার সাপ্লাই (PSU) ও গ্রাফিক্স কার্ড মেরামত)',
        phone: '01718-778899',
        photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: ['প্রিন্টার ও মনিটর রিপেয়ার সার্ভিস', 'ল্যাপটপ মাদারবোর্ড আইসি (IC) ও পাওয়ার প্রবলেম সমাধান'],
        dailyWage: 500,
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা পাকেরহাট, দিনাজপুর',
        isAvailable: true,
        description: 'এলইডি/এলসিডি মনিটরের ডিসপ্লে পাওয়ার আইসি, গ্রাফিক্স কার্ড ডিসপ্লে নয়েজ ও পিএসইউ টেস্ট ফিক্স।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'computer_1010',
        name: 'মোঃ রফিকুল ইসলাম (ল্যাপটপ বায়োস (BIOS) অনলকিং ও পাসওয়ার্ড রিমুভার)',
        phone: '01917-445566',
        photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: ['উইন্ডোজ (Windows) ও ম্যাক ওএস (macOS) সফটওয়্যার সেটআপ', 'ল্যাপটপ মাদারবোর্ড আইসি (IC) ও পাওয়ার প্রবলেম সমাধান'],
        dailyWage: 600,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ কাঁচাবাজার সংলগ্ন আইটি কর্নার, দিনাজপুর',
        isAvailable: true,
        description: 'ল্যাপটপ বায়োস পাসওয়ার্ড বাইপাস, বায়োস চিপ ইপ্রোম (EEPROM) প্রোগ্রামিং ও ওএস বুট রিপেয়ার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'computer_1011',
        name: 'মোঃ রুবেল হোসেন (জরুরি বাসাবাড়ি হোম সার্ভিস কম্পিউটার টেকনিশিয়ান)',
        phone: '01715-334455',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 5,
        specialties: ['ডেস্কটপ পিসি (Desktop PC) ফিটিং ও মাদারবোর্ড মেরামত', 'এসএসডি (SSD) ও র‍্যাম (RAM) আপগ্রেড'],
        dailyWage: 400,
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'জরুরি বাসাবাড়ি ও দোকান ভিজিট করে স্লো পিসি ফাস্ট করা, পাওয়ার অন সমস্যা ও পার্টস চেঞ্জিং সেবা।',
        workSampleImages: [],
        status: 'approved'
    }
];

class ComputerServicingService {
    async getAll(query = {}) {
        try {
            const filter = {};
            if (query.status) filter.status = query.status;
            if (query.upazila && query.upazila !== 'সকল') filter.upazila = query.upazila;
            if (query.isAvailable !== undefined) filter.isAvailable = query.isAvailable === 'true';

            const list = await ComputerServicing.find(filter).sort({ createdAt: -1 });
            if (!list || list.length === 0) {
                return INITIAL_COMPUTER_SERVICING_DATA;
            }
            return list;
        } catch (error) {
            return INITIAL_COMPUTER_SERVICING_DATA;
        }
    }

    async getById(id) {
        try {
            const doc = await ComputerServicing.findById(id);
            if (!doc) {
                return INITIAL_COMPUTER_SERVICING_DATA.find(item => item.id === id || item._id === id) || null;
            }
            return doc;
        } catch (error) {
            return INITIAL_COMPUTER_SERVICING_DATA.find(item => item.id === id || item._id === id) || null;
        }
    }

    async create(data) {
        try {
            const newDoc = new ComputerServicing(data);
            return await newDoc.save();
        } catch (error) {
            return {
                _id: 'computer_' + Date.now(),
                ...data,
                status: data.status || 'pending',
                createdAt: new Date()
            };
        }
    }

    async updateStatus(id, status) {
        try {
            return await ComputerServicing.findByIdAndUpdate(id, { status }, { new: true });
        } catch (error) {
            return { id, status };
        }
    }

    async delete(id) {
        try {
            return await ComputerServicing.findByIdAndDelete(id);
        } catch (error) {
            return { id };
        }
    }
}

export default new ComputerServicingService();
