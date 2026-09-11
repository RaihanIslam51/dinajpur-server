import CommunityCenter from './communityCenter.model.js';

export const INITIAL_COMMUNITY_CENTERS = [
    {
        name: 'রয়েল রাজপ্রাসাদ কনভেনশন সেন্টার & ব্যাকুয়েট',
        phone: '01711-223344',
        alternatePhone: '01819-556677',
        photo: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
        centerType: 'লক্সারি কনভেনশন হল',
        capacity: 2000,
        rentPerDay: 45000,
        amenities: [
            'সম্পূর্ণ সেন্ট্রাল এসি হল রুম',
            '১০০+ গাড়ি পার্কিং সুবিধা',
            'ডিজিটাল এলইডি স্ক্রিন ও রয়্যাল স্টেজ',
            '২৪ ঘণ্টা হেভি জেনারেটর পাওয়ার ব্যাকআপ',
            'পৃথক আধুনিক ডাইনিং ও এসি ব্রাইডাল রুম'
        ],
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, রাজবাড়ী রোড, দিনাজপুর সদর',
        isAvailable: true,
        description: 'দিনাজপুর শহরের সর্বাধুনিক ও দৃষ্টিনন্দন লক্সারি কনভেনশন হল। বিবাহ, রিসেপশন, কর্পোরেট কনফারেন্স ও ভিআইপি প্রোগ্রামের সেরা ভেন্যু।',
        galleryImages: [
            'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর গ্র্যান্ড কমিউনিটি সেন্টার',
        phone: '01722-334455',
        alternatePhone: '01912-889900',
        photo: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80',
        centerType: 'কমিউনিটি সেন্টার ও পার্কিং',
        capacity: 1500,
        rentPerDay: 35000,
        amenities: [
            'বিশাল এয়ারকন্ডিশনড ব্যাংকুয়েট হল',
            'নিরাপদ সিসিটিভি ও সিকিউরিটি গার্ড',
            'বিশাল পরিচ্ছন্ন ডাইনিং এলাকা',
            'আধুনিক রন্ধনশালা ও আলাদা ওয়াশ জোন'
        ],
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'বালুবাড়ী প্রধান সড়ক, দিনাজপুর সদর',
        isAvailable: true,
        description: '১৫০০+ অতিথি ধারণক্ষমতা সম্পন্ন শীতাতপ নিয়ন্ত্রিত কমিউনিটি সেন্টার। মনোরম পরিবেশ ও সুপরিসর পার্কিং।',
        galleryImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ উৎসব প্যালেস & কমিউনিটি হল',
        phone: '01833-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
        centerType: 'এসি ব্যাংকুয়েট হল',
        capacity: 1200,
        rentPerDay: 28000,
        amenities: [
            'এসি হল রুম ও সাউন্ড সিস্টেম',
            'বাইক ও কার বিস্তৃত পার্কিং এলাকা',
            'ভিআইপি ড্রেসিং ও মেকআপ রুম',
            'অটোমেটিক জেনারেটর ব্যাকআপ'
        ],
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ বিজয় চত্বর সংলগ্ন, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জ উপজেলার কেন্দ্রস্থলে মনোরম আলো ও পরিবেশের এসি ব্যাংকুয়েট উৎসব হল।',
        galleryImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর সেন্ট্রাল কনভেনশন হল',
        phone: '01744-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
        centerType: 'লক্সারি কনভেনশন হল',
        capacity: 1800,
        rentPerDay: 38000,
        amenities: [
            'সেন্ট্রাল এসি হল ও সাউন্ডপ্রুফ ডিজাইন',
            'হেভি ডিউটি কিচেন এলাকা',
            'গাড়ি ও বাস পার্কিং সুবিধা',
            'ব্যান্ড ও লাইটিং সেটআপ পয়েন্ট'
        ],
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর নতুন বাজার প্রধান সড়ক, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুর রেলওয়ে জংশন ও শহরবাসীর জন্য সুপ্রশস্ত ভিআইপি বিয়ের অনুষ্ঠান হল।',
        galleryImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী সানরাইজ পার্টি সেন্টার',
        phone: '01955-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
        centerType: 'এসি ব্যাংকুয়েট হল',
        capacity: 1000,
        rentPerDay: 22000,
        amenities: [
            'এসি হল রুম ও আধুনিক স্টেজ',
            'ডাইনিং টেবিল-চেয়ার ও ওয়েটার সাপোর্ট',
            'সাউন্ড বক্স ও স্টেজ স্পটলাইট',
            'জেনারেটর সুবিধা'
        ],
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে আকিকা, গায়ে হলুদ ও বিয়ের সেরা বাজেটের আধুনিক পার্টি হল।',
        galleryImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ ড্রিম ক্যাসেল কমিউনিটি সেন্টার',
        phone: '01766-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
        centerType: 'কমিউনিটি সেন্টার ও পার্কিং',
        capacity: 1000,
        rentPerDay: 20000,
        amenities: [
            'সুপরিসর ডাইনিং ও এন্ট্রি গেট',
            'কার ও বাইক পার্কিং স্পেস',
            'আইসোলেটেড রান্নার ঘর',
            'জেনারেটর পরিষেবা'
        ],
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাসস্ট্যান্ড রোড, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জ এলাকায় বড় সামাজিক অনুষ্ঠান, বিয়ে ও বার্ষিক আয়োজনের নির্ভরযোগ্য কেন্দ্র।',
        galleryImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ মেগাসিটি কনভেনশন হল',
        phone: '01877-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
        centerType: 'লক্সারি কনভেনশন হল',
        capacity: 1500,
        rentPerDay: 30000,
        amenities: [
            'সম্পূর্ণ এসি হল ও ব্যাকড্রপ লাইটিং',
            'বিশাল ওপেন ডাইনিং প্লাজা',
            'ভিআইপি গেস্ট লবি ও গ্রুম রুম',
            '২৪ ঘন্টা জেনারেটর সার্ভিস'
        ],
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ স্টেশন রোড, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে সুপ্রশস্ত ডাইনিং ও কনভেনশন হলের দৃষ্টিনন্দন আন্তর্জাতিক মানের অভিজ্ঞতা।',
        galleryImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর গ্রীন ভ্যালি গার্ডেন & ব্যাংকুয়েট হল',
        phone: '01988-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
        centerType: 'এসি ব্যাংকুয়েট হল',
        capacity: 800,
        rentPerDay: 18000,
        amenities: [
            'গার্ডেন ভিউ এসি ব্যাংকুয়েট হল',
            'আউটডোর ও ইনডোর বসার সুবিধা',
            'পার্কিং ও সিসিটিভি ক্যামেরা',
            'জেনারেটর সাপোর্ট'
        ],
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর লিঙ্ক রোড, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে প্রাকৃতিক সবুজ পরিবেশ ও আধুনিক ব্যাংকুয়েট হল।',
        galleryImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট রয়্যাল প্যালেস কমিউনিটি কেন্দ্র',
        phone: '01799-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=800&q=80',
        centerType: 'সাশ্রয়ী সামাজিক হল',
        capacity: 900,
        rentPerDay: 16000,
        amenities: [
            'বিশাল সামাজিক হল ও স্টেজ',
            'সুপরিসর ডাইনিং টেবিল সুবিধা',
            'জেনারেটর পাওয়ার ব্যাকআপ',
            'কুকিং জেনারেটর স্পেস'
        ],
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট জিরো পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে সাশ্রয়ী ভাড়ায় বিয়ে, আকিকা ও সভা আয়োজনের আধুনিক হল।',
        galleryImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল উৎসব মোহনা কমিউনিটি সেন্টার',
        phone: '01811-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
        centerType: 'সাশ্রয়ী সামাজিক হল',
        capacity: 800,
        rentPerDay: 15000,
        amenities: [
            'এসি হল রুম ও আধুনিক ডাইনিং',
            'বাইক ও কার পার্কিং এরিয়া',
            'জেনারেটর পরিষেবা'
        ],
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোল উপজেলা সদরে পারিবারিক উৎসব ও বিয়ের নির্ভরযোগ্য পার্টি সেন্টার।',
        galleryImages: [],
        status: 'approved'
    },
    {
        name: 'খানসামা ড্রিমল্যান্ড পার্টি হাউজ',
        phone: '01922-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
        centerType: 'এসি ব্যাংকুয়েট হল',
        capacity: 700,
        rentPerDay: 14000,
        amenities: [
            'এসি ব্যাংকুয়েট ও বর-কনে ড্রেসিং রুম',
            'পরিচ্ছন্ন ওয়াশ জোন ও ডাইনিং',
            'জেনারেটর সাপোর্ট'
        ],
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা নতুন বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'খানসামায় জন্মদিন, গায়ে হলুদ ও ছোট বড় অনুষ্ঠানের পার্টি হল।',
        galleryImages: [],
        status: 'approved'
    }
];

export async function seedCommunityCenters() {
    try {
        const count = await CommunityCenter.countDocuments();
        if (count === 0) {
            await CommunityCenter.insertMany(INITIAL_COMMUNITY_CENTERS);
            console.log('Successfully seeded Initial Community Centers data.');
        }
    } catch (error) {
        console.error('Error seeding Community Centers data:', error);
    }
}

export async function getAllCommunityCentersFromDB(query = {}) {
    await seedCommunityCenters();
    const filter = {};
    if (query.status) filter.status = query.status;
    if (query.upazila && query.upazila !== 'সকল উপজেলা') filter.upazila = query.upazila;
    if (query.centerType && query.centerType !== 'সকল কমিউনিটি সেন্টার') filter.centerType = query.centerType;

    return await CommunityCenter.find(filter).sort({ createdAt: -1 });
}

export async function getCommunityCenterByIdFromDB(id) {
    return await CommunityCenter.findById(id);
}

export async function createCommunityCenterInDB(data) {
    const newCenter = new CommunityCenter(data);
    return await newCenter.save();
}

export async function updateCommunityCenterStatusInDB(id, status) {
    return await CommunityCenter.findByIdAndUpdate(
        id,
        { status },
        { new: true, runValidators: true }
    );
}

export async function deleteCommunityCenterFromDB(id) {
    return await CommunityCenter.findByIdAndDelete(id);
}
