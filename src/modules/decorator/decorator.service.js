import Decorator from './decorator.model.js';

export const INITIAL_DECORATORS = [
    {
        name: 'মোঃ রফিকুল ইসলাম (রয়েল ডেকোরেটরস & শামিয়ানা)',
        phone: '01715-112233',
        alternatePhone: '01814-445566',
        photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
        decoratorType: 'ওয়েডিং & শামিয়ানা ডেকোরেটর',
        experienceYears: 12,
        specialties: [
            'বিয়ের রয়্যাল স্টেজ ও রাজকীয় গেট তোরণ',
            'ওয়াটারপ্রুফ মেগা প্যান্ডেল ও পলিথিন শামিয়ানা',
            'ভিআইপি সোফা, প্লাস্টিক চেয়ার ও ফ্যান ভাড়া'
        ],
        dailyWage: 8000,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'চারু বাবুর মোড়, রয়্যাল ডেকোরেটরস গলি, দিনাজপুর সদর',
        isAvailable: true,
        description: '১২ বছরের অভিজ্ঞ ডেকোরেশন ও প্যান্ডেল টিম। বিয়ে, রিসেপশন, ওয়াজ মাহফিল ও সরকারি মেলার প্যান্ডেল তৈরিতে নির্ভরযোগ্য নাম।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'মেসার্স গোলাপ লাইটিং & ডেকোরেশন হাউজ',
        phone: '01726-556677',
        alternatePhone: '01915-778899',
        photo: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
        decoratorType: 'মরিচ বাতি & আলোকসজ্জা',
        experienceYears: 9,
        specialties: [
            'এলইডি মরিচ বাতি ঝালর ও গেট আলোকসজ্জা',
            'লেজার ফগ, ফায়ারওয়ার্কস ও কালার লাইট সেটআপ',
            'জেনারেটর উইথ মেটাল হ্যালাইড লাইট'
        ],
        dailyWage: 6000,
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'জেল রোড, গোলাপ মার্কেট, দিনাজপুর সদর',
        isAvailable: true,
        description: 'বিয়ের বাড়ী, তোরণ ও সড়ক লাইটিং ডেকোরেশনে অত্যন্ত বিশ্বস্ত কালারফুল মরিচ বাতি সাপ্লাই।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ ফ্লাওয়ার আর্চ & গেইট সাজসজ্জা',
        phone: '01835-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80',
        decoratorType: 'গেট & ফ্লাওয়ার আর্চ ডেকোরেটর',
        experienceYears: 7,
        specialties: [
            'তাজা রজনীগন্ধা ও গোলাপ ফুলের রাজকীয় গেইট',
            'গায়ে হলুদ ফ্লাওয়ার ব্যাকড্রপ থিম',
            'কার ডেকোরেশন উইথ তাজা ফুল'
        ],
        dailyWage: 4500,
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ পুরানো বাসস্ট্যান্ড সংলগ্ন, দিনাজপুর',
        isAvailable: true,
        description: 'কাঁচা তাজা ফুল ও কালারফুল কাপড়ের সমন্বয়ে আকর্ষণীয় এন্ট্রি তোরণ সাজিয়ে থাকি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর মেগা প্যান্ডেল & ফার্নিচার রেন্টাল',
        phone: '01746-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80',
        decoratorType: 'প্যান্ডেল, চেয়ার & স্টেজ সরবরাহ',
        experienceYears: 15,
        specialties: [
            'বিশাল আয়তনের বাঁশের তোরণ ও শামীয়ানা',
            '১০০০+ প্লাস্টিক চেয়ার, টেবিল ও টেবিল কভার',
            'ডাইনিং ক্রকারি ও হাত ধোয়ার বেসিন সেটআপ'
        ],
        dailyWage: 10000,
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর সেন্ট্রাল বাসস্ট্যান্ড, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুর ও আশপাশের যেকোনো সামাজিক ভোজের চেয়ার, টেবিল, সামিয়ানা ও ক্রোকারিজ সরবরাহ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী ড্রিম ডেকোরেটরস & ইভেন্ট গেইট',
        phone: '01919-001122',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=600&q=80',
        decoratorType: 'ওয়েডিং & শামিয়ানা ডেকোরেটর',
        experienceYears: 8,
        specialties: [
            'বরের স্টেজ ও আকিকা ফ্রেম ডেকোরেশন',
            'রঙিন কাপড়ের ফ্যান ডেকোরেশন',
            'স্টেজ কার্পেট ও রেড কার্পেট ওয়ে'
        ],
        dailyWage: 5500,
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, ড্রিম ডেকোরেটরস, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে আধুনিক থিম স্টেজ, গেইট ও সাশ্রয়ী মূল্যে ডেকোরেশন আইটেম ভাড়া দেওয়া হয়।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ উৎসব ডেকোরেশন ল্যাব',
        phone: '01727-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80',
        decoratorType: 'প্যান্ডেল, চেয়ার & স্টেজ সরবরাহ',
        experienceYears: 6,
        specialties: [
            'জন্মদিন ও বাচ্চার আকিকা বেলুন আর্চ',
            'হাই-বেস পেপ বাদ্য ও লাইটিং তোরণ',
            'সামাজিক সভার সাউন্ড মিক্সার ও মাইক'
        ],
        dailyWage: 4000,
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ কাঁচাবাজার, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জ এলাকায় বিয়ে, সুন্নতে খাতনা ও বার্থডে পার্টির সাশ্রয়ী প্যান্ডেল ও ডেকোরেশন।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ রাজপ্রাসাদ ডেকোরেটর',
        phone: '01838-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80',
        decoratorType: 'ওয়েডিং & শামিয়ানা ডেকোরেটর',
        experienceYears: 10,
        specialties: [
            'রাজকীয় ৩ডি ওয়েডিং স্টেজ উইথ থিম লাইট',
            'প্যান্ডেল ওয়াটারপ্রুফ শামিয়ানা ফ্রেমিং',
            'ভিআইপি ডাইনিং চেয়ার ও সোফা সার্ভিস'
        ],
        dailyWage: 7500,
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ বাজার প্রধান সড়ক, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জ শহরের অন্যতম জনপ্রিয় ডেকোরেশন মাস্টার। বিয়ে ও সুন্নতে খাতনার সুন্দর স্টেজ তৈরি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর লাইটিং & মরিচ বাতি পয়েন্ট',
        phone: '01928-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
        decoratorType: 'মরিচ বাতি & আলোকসজ্জা',
        experienceYears: 7,
        specialties: [
            'বাড়ির চারপাশের মরিচ বাতি দিয়ে সাজসজ্জা',
            'এলইডি চেইন বাতি ও স্পটলাইট',
            'জেনারেটর ব্যাকআপ ও ইলেক্ট্রিক তার সেটআপ'
        ],
        dailyWage: 5000,
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দর ও রাণীরবন্দরে বিয়ের বাড়ির চারপাশে ঝকমকে আলোকসজ্জা এবং মরিচ বাতি সেবা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট ঐতিহ্য ডেকোরেটরস & সাউন্ড',
        phone: '01739-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80',
        decoratorType: 'প্যান্ডেল, চেয়ার & স্টেজ সরবরাহ',
        experienceYears: 11,
        specialties: [
            'বাঁশের তৈরি ঐতিহ্যবাহী বিশাল গেট',
            'ডাইনিং টেবিল, গ্লাস ও প্লেট রেন্টাল',
            'মঞ্চের পেছনের কাস্টম ব্যানার ফ্রেম'
        ],
        dailyWage: 4500,
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট জিরো পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে ১১ বছর ধরে বিশ্বস্ততার সাথে শামিয়ানা, বাঁশের তোরণ ও ভোজসভার সামগ্রী ভাড়া দিচ্ছি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল সিটি ডেকোরেটরস',
        phone: '01849-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=600&q=80',
        decoratorType: 'ওয়েডিং & শামিয়ানা ডেকোরেটর',
        experienceYears: 8,
        specialties: [
            'হলুদ ও বিয়ের আধুনিক কালার ডেকোরেশন',
            'প্লাস্টিক চেয়ার ও ভিআইপি বসার ব্যবস্থা',
            'প্যাডেল ফ্যান ও এয়ার কুলার ফ্রেম'
        ],
        dailyWage: 5000,
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল বাজার রোড, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে ঘরোয়া অনুষ্ঠান ও ডেকোরেশন প্যান্ডেলের জন্য প্রফেশনাল কারিগর দল।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'খানসামা পারফেক্ট ফ্লাওয়ার & লাইট ডেকোরেশন',
        phone: '01939-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80',
        decoratorType: 'গেট & ফ্লাওয়ার আর্চ ডেকোরেটর',
        experienceYears: 6,
        specialties: [
            'আর্টিফিশিয়াল ও রিয়েল ফ্লাওয়ার কম্বো গেট',
            'মেহেদী নাইট স্পেশাল ডেকোরেশন স্টেজ',
            'বর-কনে কার ডেকোরেশন সার্ভিস'
        ],
        dailyWage: 4000,
        district: 'দিনাজপুর',
        upazila: 'খানসামা',
        address: 'খানসামা নতুন বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'খানসামায় বিয়ের কার সাজানো ও মেহেদি রাতের তাজা ফুলের ব্যাকড্রপ সাজসজ্জা।',
        workSampleImages: [],
        status: 'approved'
    }
];

export async function seedDecorators() {
    try {
        const count = await Decorator.countDocuments();
        if (count === 0) {
            await Decorator.insertMany(INITIAL_DECORATORS);
            console.log('Successfully seeded Initial Decorators data.');
        }
    } catch (error) {
        console.error('Error seeding Decorators data:', error);
    }
}

export async function getAllDecoratorsFromDB(query = {}) {
    await seedDecorators();
    const filter = {};
    if (query.status) filter.status = query.status;
    if (query.upazila && query.upazila !== 'সকল উপজেলা') filter.upazila = query.upazila;
    if (query.decoratorType && query.decoratorType !== 'সকল ডেকোরেটর সেবা') filter.decoratorType = query.decoratorType;

    return await Decorator.find(filter).sort({ createdAt: -1 });
}

export async function getDecoratorByIdFromDB(id) {
    return await Decorator.findById(id);
}

export async function createDecoratorInDB(data) {
    const newDecorator = new Decorator(data);
    return await newDecorator.save();
}

export async function updateDecoratorStatusInDB(id, status) {
    return await Decorator.findByIdAndUpdate(
        id,
        { status },
        { new: true, runValidators: true }
    );
}

export async function deleteDecoratorFromDB(id) {
    return await Decorator.findByIdAndDelete(id);
}
