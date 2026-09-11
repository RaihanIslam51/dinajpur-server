import TvServicing from './tvServicing.model.js';

const initialTvServicings = [
    {
        id: 'tv_1001',
        name: 'মোঃ হারুনুর রশিদ (চিফ স্মার্ট টিভি ও প্যানেল ইঞ্জিনিয়ার)',
        phone: '01715-998877',
        alternatePhone: '01812-334455',
        photo: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=600&q=80',
        experienceYears: 12,
        specialties: [
            'স্মার্ট অ্যান্ড্রয়েড, 4K UHD ও 8K OLED টিভি সার্ভিসিং',
            'এলইডি টিভি নো-ডিসপ্লে (No Display) ও ডিসপ্লে বার্নিং প্যানেল রিপেয়ার',
            'টিভি মাদারবোর্ড (Motherboard), প্রসেসর আইসি ও পাওয়ার সাপ্লাই মেরামত'
        ],
        dailyWage: 600,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'স্টেশন রোড, আধুনিক ইলেক্ট্রনিক্স মার্কেট (৩য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '১২ বছরের অভিজ্ঞ সার্টিফাইড টিভি ইঞ্জিনিয়ার। সোনি (Sony), স্যামসাং (Samsung), এলজি (LG), ওয়ালটন (Walton) ও ভিশন (Vision) স্মার্ট টিভির ডিসপ্লে প্যানেল বন্ডিং, নো-পাওয়ার ও সকার আইসি প্রবলেম ফিক্স করি।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        id: 'tv_1002',
        name: 'মোঃ শফিকুল ইসলাম (ব্যাকলাইট ও পিকচার প্যানেল স্পেশালিস্ট)',
        phone: '01726-112233',
        alternatePhone: '01918-445566',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: [
            'এলইডি টিভির ব্যাকলাইট (LED Backlight) চেঞ্জ ও ব্রাইটনেস ফিক্স',
            'পিকচার ভার্টিকাল/হরিজন্টাল দাগ (Vertical Lines) ও ডাবল ইমেজিং মেরামত',
            'স্মার্ট টিভি সফটওয়্যার ইনস্টলেশন ও রিমোট সেন্সর রিপেয়ার'
        ],
        dailyWage: 500,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'চারু বাবুর মোড়, ইলেকট্রনিক্স প্লাজা, দিনাজপুর সদর',
        isAvailable: true,
        description: 'অরিজিনাল ব্যাকলাইট স্ট্রিপ প্রতিস্থাপন, স্ক্রিন লাইনের কাজ এবং সফটওয়্যার ঝুলন্ত (Logo Sticking) প্রবলেম ১০০% গ্যারান্টিসহ সমাধান করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'tv_1003',
        name: 'মোঃ লিটন ইসলাম',
        phone: '01834-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: [
            'চায়না অ্যান্ডয়েড টিভি মেকার ও সিস্টেম সার্ভিস',
            'টিভি অডিও সাউন্ড প্রবলেম ও স্পিকার চেঞ্জ',
            'এচডিএমআই (HDMI) ও এভি (AV) পোর্ট সোল্ডারিং ও পার্টস চেঞ্জ'
        ],
        dailyWage: 500,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ পুরানো বাসস্ট্যান্ড সংলগ্ন টিভি মেকানিক সেন্টার, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জ এলাকার বিশ্বস্ত টিভি মিস্ত্রি। চায়না এলইডি, অ্যান্ড্রয়েড টিভি ও নরমাল এলইডি টিভির সাউন্ড, পিকচার ও পাওয়ার সেকশন দ্রুত সার্ভিসিং করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'tv_1004',
        name: 'মোঃ আজহারুল ইসলাম (পাওয়ার ব্যাংক ও সার্কিট বোর্ড মাস্টার)',
        phone: '01741-556677',
        alternatePhone: '01611-223344',
        photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 10,
        specialties: [
            'পাওয়ার কার্ড (Power Board) ও ডেড টিভি সার্ভিসিং',
            'ইউনিভার্সেল টিভি মাদারবোর্ড (Universal Combo Board) ফিটিং',
            'ভোল্টেজ প্রটেকশন ফিউজ ও ক্যাপাসিটর চেঞ্জ'
        ],
        dailyWage: 550,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর নতুন বাজার ইলেকট্রিক মার্কেট, দিনাজপুর',
        isAvailable: true,
        description: 'বজ্রপাত বা ভোল্টেজ শর্টে নষ্ট হওয়া ডেড এলইডি টিভি সচল করতে সার্বিক সার্কিট আইসি পরিবর্তন ও মাদারবোর্ড ফিটিং সার্ভিস প্রদান করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'tv_1005',
        name: 'মোঃ জাহিদ হাসান (স্মার্ট টিভি ও সাউন্ড সিস্টেম টেকনিশিয়ান)',
        phone: '01925-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
        experienceYears: 6,
        specialties: [
            'অ্যান্ড্রয়েড স্মার্ট টিভি ওাইফাই (WiFi) ও ব্লুটুথ প্রবলেম ফিক্স',
            'হোম থিয়েটার ও টিভি সাউন্ড আউটপুট প্যানেল মেরামত',
            'ওয়াল মাউন্ট ব্র্যাকেট (Wall Mount) ও টিভি ফিটিং'
        ],
        dailyWage: 450,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, স্যাটেলাইট ও টিভি কেয়ার, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে বাসা ও অফিসে গিয়ে স্মার্ট টিভি ওয়ালে ফিটিং, ওয়াইফাই সংযোগ ও অ্যান্ডয়েড অপটিমাইজেশন সার্ভিস দিয়ে থাকি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'tv_1006',
        name: 'মোঃ শামীম হোসেন',
        phone: '01718-443322',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        experienceYears: 8,
        specialties: [
            'সিআরটি (CRT) পুরানো টিভি ও কারেন্ট মেকানিক সার্ভিস',
            'এলইডি টিভি রেড লাইট ইন্ডিকেটর ব্লিন্কিং ব্লকিং সমাধান',
            'পাওয়ার ক্যাবল ও ইনভার্টার প্যানেল মেকানিক্স'
        ],
        dailyWage: 450,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ কেন্দ্রীয় বাজার, টিভি গ্যারেজ, দিনাজপুর',
        isAvailable: true,
        description: '৮ বছরের অভিজ্ঞতায় সিআরটি এবং এলইডি টিভির সব ধরনের হার্ডওয়্যার ত্রুটি দক্ষ হাতে মেরামত করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'tv_1007',
        name: 'মোঃ আসাদুজ্জামান (প্যানেল কোফ আইসি বন্ডিং এক্সপার্ট)',
        phone: '01815-776655',
        alternatePhone: '01799-881122',
        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        experienceYears: 11,
        specialties: [
            'COF IC ও গ্লাস প্যানেল রিপেয়ার বন্ডিং মেশিন টেকনোলজি',
            '4K/8K স্মার্ট টিভি কালার ফ্লিকারিং ও ব্লার স্ক্রিন সমাধান',
            'এলজি ও সোনি ট্রু-কালার ডিসপ্লে টিউনিং'
        ],
        dailyWage: 600,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মালদহ পটি, হাইটেক টিভি সার্ভিসিং সেন্টার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'লেজার ও কোফ বন্ডিং মেশিনের মাধ্যমে ডিসপ্লে প্যানেল নতুন মতন মেরামত করা হয়। অরিজিনাল পার্টসের নিশ্চয়তা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'tv_1008',
        name: 'মোঃ তানভীর আহমেদ',
        phone: '01914-665544',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
        experienceYears: 5,
        specialties: [
            'স্মার্ট টিভি অ্যান্ডয়েড ফ্রেমওয়্যার রি-ফ্ল্যাশ',
            'ওয়াল মার্সেল ও সিঙ্গার টিভি মাদারবোর্ড সার্ভিস',
            'ব্যাকলাইট চেঞ্জ ও রি-সোল্ডারিং'
        ],
        dailyWage: 400,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ বাজার, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'বোচাগঞ্জ এলাকায় স্বল্প খরচে বাসাবাড়ির এলইডি ও স্মার্ট টিভি টিউনিং ও মেকানিক সেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'tv_1009',
        name: 'মোঃ মোবারক হোসেন',
        phone: '01735-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
        experienceYears: 7,
        specialties: [
            'স্মার্ট ও সিআরটি টিভি মাদারবোর্ড প্রসেসর কুলিং ফিক্স',
            'টিভি অটো-অফ (Auto Shut-Off) প্রবলেম সল্যুশন',
            'পাওয়ার ট্রান্সফরমার ও ড্রাইভার বোর্ড চেইঞ্জ'
        ],
        dailyWage: 450,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রেলগেট সংলগ্ন টিভি মেকানিক শপ, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরের অভিজ্ঞ মেকানিক। টিভির অটোমেটিক বন্ধ হয়ে যাওয়া এবং ডিসপ্লে আবছা হওয়া দ্রুত ফিক্স করি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'tv_1010',
        name: 'মোঃ মোস্তাক হোসেন (হোম ডেলিভারি ও হোম সার্ভিস মেকানিক)',
        phone: '01844-332211',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
        experienceYears: 9,
        specialties: [
            'বাসায় গিয়ে অন-স্পট ব্যাকলাইট ও সার্কিট সার্ভিস',
            'ওয়াল্টন, ভিশন ও মিনিস্টার টিভি প্যানেল ও পার্টস ফেচিং',
            'স্মার্ট টিভি অ্যাপস ও ইউটিউব কনফিগারেশন'
        ],
        dailyWage: 500,
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট বাসস্ট্যান্ড, ডিজিটাল টিভি সার্ভিস, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাট ও আশপাশের এলাকায় বাসায় গিয়ে টিভি দেখা ও কাস্টমার ফ্রেন্ডলি সার্ভিসের নির্ভরযোগ্য নাম।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        id: 'tv_1011',
        name: 'মোঃ কামরুল হাসান (ডিসপ্লে ও গ্লাস প্যানেল টেকনিশিয়ান)',
        phone: '01755-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=600&q=80',
        experienceYears: 6,
        specialties: [
            'এলইডি ও ওএলইডি ভাঙা স্ক্রিন চেঞ্জ ও ডিসপ্লে ফ্রেম রিপেয়ার',
            'টিভি নো-পাওয়ার অ্যান্ড নো-পিকচার ট্রাবলশুটিং',
            'ইউনিভার্সেল টিভি রিমোট ও সেন্সর টিউনিং'
        ],
        dailyWage: 450,
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার, ইলেকট্রনিক্স সার্ভিস সেন্টার, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে সততার সাথে এলইডি ও স্মার্ট টিভির সমস্ত মেকানিক্যাল ও ইলেকট্রনিক প্রবলেম সলভ করে থাকি।',
        workSampleImages: [],
        status: 'approved'
    }
];

class TvServicingService {
    async getAll(query = {}) {
        try {
            const filter = {};
            if (query.status) filter.status = query.status;
            if (query.upazila && query.upazila !== 'সকল উপজেলা') {
                filter.upazila = query.upazila;
            }

            let tvServicings = await TvServicing.find(filter).sort({ createdAt: -1 });
            if (!tvServicings || tvServicings.length === 0) {
                return initialTvServicings.filter(item => {
                    if (query.status && item.status !== query.status) return false;
                    if (query.upazila && query.upazila !== 'সকল উপজেলা' && item.upazila !== query.upazila) return false;
                    return true;
                });
            }
            return tvServicings;
        } catch (error) {
            console.error('Error fetching TV servicings:', error);
            return initialTvServicings;
        }
    }

    async getById(id) {
        try {
            if (id.startsWith('tv_')) {
                return initialTvServicings.find(m => m.id === id) || null;
            }
            return await TvServicing.findById(id);
        } catch (error) {
            return initialTvServicings.find(m => m.id === id) || null;
        }
    }

    async create(data) {
        try {
            const tvServicing = new TvServicing(data);
            return await tvServicing.save();
        } catch (error) {
            throw error;
        }
    }

    async updateStatus(id, status) {
        try {
            if (id.startsWith('tv_')) {
                const item = initialTvServicings.find(m => m.id === id);
                if (item) {
                    item.status = status;
                    return item;
                }
            }
            return await TvServicing.findByIdAndUpdate(id, { status }, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            if (id.startsWith('tv_')) {
                const idx = initialTvServicings.findIndex(m => m.id === id);
                if (idx !== -1) {
                    initialTvServicings.splice(idx, 1);
                    return { message: 'Deleted successfully' };
                }
            }
            return await TvServicing.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}

export default new TvServicingService();
