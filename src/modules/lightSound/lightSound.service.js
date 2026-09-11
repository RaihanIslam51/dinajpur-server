import LightSound from './lightSound.model.js';

export const INITIAL_LIGHT_SOUNDS = [
    {
        name: 'স্মার্ট বিটস সাউন্ড & রয়্যাল লাইটিং',
        phone: '01716-223344',
        alternatePhone: '01815-556677',
        photo: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
        serviceType: 'কনসার্ট & স্টেজ সাউন্ড সিস্টেম',
        experienceYears: 10,
        specialties: [
            'হাই-বেস ৪-ওয়ে আউটডোর সাউন্ড বক্স সেটআপ',
            'ডিজিটাল মিক্সার কনসোল ও ওয়ারলেস মাইক্রোফোন',
            'স্মোক ফগ, ফায়ার স্পার্ক ও বিম পার লাইটিং'
        ],
        dailyWage: 12000,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, ডিজিটাল সাউন্ড কমপ্লেক্স (২য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '১০ বছরের অভিজ্ঞ ওপেন এয়ার কনসার্ট, বিয়ের রিসেপশন ও সেমিনারের প্রফেশনাল সাউন্ড ইঞ্জিনিয়ারিং এবং আধুনিক স্টেজ লাইটিং টিম।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'মেসার্স ডাইনামিক ডিজে সাউন্ড & ড্যান্স ফ্লোর',
        phone: '01727-667788',
        alternatePhone: '01916-889900',
        photo: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডিজে পার্টি & ড্যান্স ফ্লোর সাউন্ড',
        experienceYears: 7,
        specialties: [
            'মেহেদী রাত ও বার্থডে পার্টির ডিজে সেটআপ',
            'এলইডি ড্যান্স ফ্লোর ম্যাট ও লেজার থিম লাইটিং',
            'অটোমেটিক জেনারেটর পাওয়ার সাপোর্ট'
        ],
        dailyWage: 8000,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'জেল রোড, ডিজে মিউজিক জোন, দিনাজপুর সদর',
        isAvailable: true,
        description: 'গায়ে হলুদ, মেহেদি রাত ও পিকনিকের জন্য হাই-ভলিউম সাউন্ড সিস্টেম, ডিজে কনসোল এবং কালারফুল লেজার ড্যান্স ফ্লোর লাইটিং।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ ভয়েস সাউন্ড & অটো ইলেকট্রনিক্স',
        phone: '01836-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মাইক & সেমিনার পাবলিক এনাউন্সমেন্ট',
        experienceYears: 8,
        specialties: [
            'ওয়াজ মাহফিল, মিটিং ও ইসলামিক সাংস্কৃতিক অনুষ্ঠান',
            'ইউনিট হরন মাইক, স্ট্যান্ড মাইক ও ডিজিটাল এমপ্লিফায়ার',
            'জরুরি পাওয়ার জেনারেটর সার্ভিস'
        ],
        dailyWage: 5000,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ বিজয় চত্বর, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জে পাবলিক সেমিনার, সমাবেশ ও ধর্মীয় ওয়াজ মাহফিলের স্বচ্ছ স্পিকার ও মাইক সরবরাহ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর সাউন্ড ভিশন & আলোকসজ্জা',
        phone: '01747-990011',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ওয়েডিং & মেহেরাফুল লাইটিং',
        experienceYears: 12,
        specialties: [
            'বিয়ের তোরণ ও স্টেজের প্রিমিয়াম মরিচ বাতি লাইটিং',
            'এলইডি স্টেজ ব্যাকড্রপ ওয়াল লাইট',
            'হেভি বেস স্পিকার ও ওয়েটার পিএ সিস্টেম'
        ],
        dailyWage: 10000,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর সেন্ট্রাল বাসস্ট্যান্ড, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুর রেলওয়ে জংশন এলাকা ও জেলাব্যাপী বড় সামাজিক ইভেন্টের সাউন্ড ও ব্লেজিং লাইট প্রোভাইডার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী সুপার বিটস সাউন্ড সিস্টেম',
        phone: '01920-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
        serviceType: 'কনসার্ট & স্টেজ সাউন্ড সিস্টেম',
        experienceYears: 6,
        specialties: [
            'সাংস্কৃতিক অনুষ্ঠান ও বার্ষিক ক্রীড়া প্রতিযোগিতা মাইকিং',
            'হাই-পাওয়ার এমপ্লিফায়ার উইথ অডিও মিক্সার',
            'স্পটলাইট ও ব্লেজার বাতি সেটআপ'
        ],
        dailyWage: 6000,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, সুপার সাউন্ড, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে কনসার্ট, মেলা ও সামাজিক অনুষ্ঠানের উচ্চমানের অডিও স্পিকার সাউন্ড সার্ভিস।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ উৎসব লাইটিং & ডিজে ল্যাব',
        phone: '01728-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডিজে পার্টি & ড্যান্স ফ্লোর সাউন্ড',
        experienceYears: 5,
        specialties: [
            'হলুদ সন্ধ্যা ডিজে বক্স ও বিট লাইট',
            'স্মোক ফগ ও বাবল মেশিন ডেকোরেশন',
            'পোর্টাবল জেনারেটর সার্ভিস'
        ],
        dailyWage: 5500,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ কাঁচাবাজার, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে পারিবারিক হলুদ সন্ধ্যা, আকিকা ও বার্থডে পার্টির সাশ্রয়ী ডিজে ও লাইটিং সার্ভিস।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ মেগাসাউন্ড & এলইডিক্স',
        phone: '01839-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80',
        serviceType: 'কনসার্ট & স্টেজ সাউন্ড সিস্টেম',
        experienceYears: 9,
        specialties: [
            'বিশাল স্টেজ সাউন্ড মনিটর ও সাব-উফার',
            'মুভিং হেড পার লাইট ও লেজার বিম',
            'সাউন্ড প্রফেশনাল সাউন্ড ক্রু টিম'
        ],
        dailyWage: 9000,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ স্টেশন রোড, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে স্টেজের আধুনিক মুভিং হেড বাতি, ফগ মেশিন ও কনসার্ট লেভেল ক্রিস্টাল ক্লিয়ার সাউন্ড।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর মেগামাইক & সাউন্ড সার্ভিস',
        phone: '01929-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মাইক & সেমিনার পাবলিক এনাউন্সমেন্ট',
        experienceYears: 8,
        specialties: [
            'রাজনৈতিক সমাবেশ, ওয়াজ ও সরকারি অনুষ্ঠান মাইক',
            'ব্যাটারি ব্যাকআপ উইথ এমপ্লিফায়ার মাইক',
            'জরুরি প্রচারের মাইকিং হর্ন'
        ],
        dailyWage: 4500,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দর ও রাণীরবন্দরে যেকোনো বড় জনসভা বা ধর্মীয় অনুষ্ঠানের স্বচ্ছ মাইকিং সার্ভিস।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট রয়্যাল বিটস & লাইট ল্যাব',
        phone: '01740-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ওয়েডিং & মেহেরাফুল লাইটিং',
        experienceYears: 10,
        specialties: [
            'বিয়ের গেট ও শামিয়ানা লাইটিং ঝালর',
            'ডান্স লাইট ও ফ্লাশ কালার ল্যাম্প',
            'ডিজিটাল মনিটর অডিও স্পিকার'
        ],
        dailyWage: 7000,
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট জিরো পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে বিয়ে ও ধর্মীয় সুন্নতে খাতনার মনকাড়া কালার লাইটিং এবং সাউন্ড বক্স সরবরাহ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল ডিজিটাল সাউন্ড পয়েন্ট',
        phone: '01850-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
        serviceType: 'কনসার্ট & স্টেজ সাউন্ড সিস্টেম',
        experienceYears: 7,
        specialties: [
            'পিকনিক ও মিউজিক পার্টির হাই-বেস স্পিকার',
            'করলেস মাইক ও ব্লুটুথ অডিও স্টেশন',
            'জেনারেটর ব্যাকআপ'
        ],
        dailyWage: 5000,
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে ঘরোয়া মিউজিক পার্টি, পিকনিক ও বিয়ের ডেকোরেশন সাউন্ড সুবিধা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'খানসামা পারফেক্ট সাউন্ড & লাইট হাউজ',
        phone: '01940-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডিজে পার্টি & ড্যান্স ফ্লোর সাউন্ড',
        experienceYears: 6,
        specialties: [
            'গায়ে হলুদ রাতের ডিজে স্পিকার সেটআপ',
            'স্মোক ফগ ও বাবল মেশিন এডিফেক্ট',
            'স্টেজের পার লাইট ও বিম লাইট'
        ],
        dailyWage: 4500,
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা নতুন বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'খানসামায় আনন্দঘন গায়ে হলুদ ও জন্মদিনের জমকালো লাইটিং ও ডিজে সাউন্ড।',
        workSampleImages: [],
        status: 'approved'
    }
];

export async function seedLightSounds() {
    try {
        const count = await LightSound.countDocuments();
        if (count === 0) {
            await LightSound.insertMany(INITIAL_LIGHT_SOUNDS);
            console.log('Successfully seeded Initial Light & Sound data.');
        }
    } catch (error) {
        console.error('Error seeding Light & Sound data:', error);
    }
}

export async function getAllLightSoundsFromDB(query = {}) {
    await seedLightSounds();
    const filter = {};
    if (query.status) filter.status = query.status;
    if (query.upazila && query.upazila !== 'সকল উপজেলা') filter.upazila = query.upazila;
    if (query.serviceType && query.serviceType !== 'সকল লাইট ও সাউন্ড সেবা') filter.serviceType = query.serviceType;

    return await LightSound.find(filter).sort({ createdAt: -1 });
}

export async function getLightSoundByIdFromDB(id) {
    return await LightSound.findById(id);
}

export async function createLightSoundInDB(data) {
    const newItem = new LightSound(data);
    return await newItem.save();
}

export async function updateLightSoundStatusInDB(id, status) {
    return await LightSound.findByIdAndUpdate(
        id,
        { status },
        { new: true, runValidators: true }
    );
}

export async function deleteLightSoundFromDB(id) {
    return await LightSound.findByIdAndDelete(id);
}
