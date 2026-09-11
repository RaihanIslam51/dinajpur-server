import mongoose from 'mongoose';
import Nutrition from './nutrition.model.js';

export const INITIAL_NUTRITION_SEED = [
    {
        name: 'ডাঃ ফারহানা ইয়াসমিন (চিফ ডায়েটিশিয়ান & নিউট্রিশনিস্ট)',
        degrees: 'BSc & MSc (Food & Nutrition - DU), PGD (Clinical Dietetics), Member (BNDA)',
        hospitalAffiliation: 'বিভাগীয় প্রধান (নিউট্রিশন অ্যান্ড ডায়েটেটিক্স), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ হাসপাতাল',
        phone: '01712-889900',
        alternatePhone: '01812-112233',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ক্লিনিক্যাল নিউট্রিশনিস্ট & ডায়েটিশিয়ান',
        experienceYears: 16,
        specialties: [
            'মেদ কমানো ও স্থায়ী ওজন বৃদ্ধি (Weight Loss & Gain) ডায়েট',
            'ডায়াবেটিস, থাইরয়েড ও ফ্যাটি লিভার রোগীদের কাস্টমাইজড ফুড চার্ট',
            'গর্ভবতী ও প্রসূতি মায়েদের উচ্চ পুষ্টি উপাদান ব্যবস্থাপনা'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'হাসপাতাল মোড়, নিউট্রিশন & ফিটনেস কেয়ার সেন্টার (২য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '১৬ বছরের অভিজ্ঞ চিফ ডায়াবেটিক ও ক্লিনিক্যাল নিউট্রিশনিস্ট। বৈজ্ঞানিক ক্যালোরি কাউন্টিং ও ঘরের খাবারের সাহায্যে রোগ প্রতিরোধে পুষ্টি পরামর্শ।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর ডায়াবেটিক & কিডনি ডায়েট ক্লিনিক',
        degrees: 'বিশেষায়িত ক্লিনিক্যাল নিউট্রিশন সেবা কেন্দ্র',
        hospitalAffiliation: 'দিনাজপুর ডায়াবেটিক সায়েন্স ইন্সটিটিউট',
        phone: '01734-556677',
        alternatePhone: '01919-445566',
        photo: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডায়াবেটিস & কিডনি রোগীদের নিউট্রিশন প্ল্যান',
        experienceYears: 14,
        specialties: [
            'ক্রিয়েটিনিন নিয়ন্ত্রণ ও কিডনি রোগীদের সোডিয়াম-পটাশিয়াম ডায়েট',
            'ইনসুলিন রেজিস্ট্যান্স ও টাইপ-২ ডায়াবেটিক রিভার্সাল থেরাপি',
            'উচ্চ রক্তচাপ ও ইউরিক এসিড কমানোর ডায়েট প্ল্যান'
        ],
        visitingFee: 700,
        chamberTime: 'সকাল ৯:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'গনেশতলা মোড়, ডায়াবেটিক নিউট্রিশন ভবন, দিনাজপুর সদর',
        isAvailable: true,
        description: 'ক্রনিক কিডনি ডিজিজ (CKD) ও দীর্ঘমেয়াদী ডায়াবেটিসে আক্রান্ত রোগীদের জন্য বিশেষায়িত সোডিয়াম-প্রোটিন পরিমিত খাবারের চার্ট কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'মোসাঃ সুলতানা রাজিয়া (শিশু ও মাতৃত্বকালীন পুষ্টি বিশেষজ্ঞ)',
        degrees: 'BSc (Nutrition & Food Science), MPH (Maternal & Child Nutrition)',
        hospitalAffiliation: 'সিনিয়র নিউট্রিশনিস্ট, দিনাজপুর মা ও শিশু কল্যাণ কেন্দ্র',
        phone: '01821-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
        serviceType: 'শিশু & মাতৃত্বকালীন পুষ্টি বিশেষজ্ঞ (Maternal & Child Nutrition)',
        experienceYears: 12,
        specialties: [
            'শিশুর অপুষ্টিকথন ও বুদ্ধিবিকাশে ব্যালেন্সড ডায়েট চার্ট',
            'মায়ের বুকের দুধ বৃদ্ধি ও গর্ভাবস্থায় রক্তস্বল্পতা দূরীকরণ',
            'অটিস্টিক ও পিকি ইটার (Picky Eater) শিশুদের খাওয়ার অভ্যাস উন্নয়ন'
        ],
        visitingFee: 600,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৭:৩০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর, চাইল্ড & মেটারনাল নিউট্রিশন চেম্বার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'শিশুর সঠিক শারীরিক গঠন, মানসিক বিকাশ এবং গর্ভবতী মায়ের সুষম পুষ্টি নিশ্চিতে অভিজ্ঞ নিউট্রিশন কনসালটেন্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বীরগঞ্জ রয়্যাল ডায়েট & স্লিমিং সেন্টারে',
        degrees: 'ফিটনেস ও স্লিম বডি নিউট্রিশন হাব',
        hospitalAffiliation: 'বীরগঞ্জ ডিজিটাল হেলথ সেন্টার',
        phone: '01752-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ওজন নিয়ন্ত্রণ (Weight Gain/Loss) ডায়েট চার্ট',
        experienceYears: 10,
        specialties: [
            '১ মাসে সুস্থ উপায়ে ৩-৫ কেজি ওজন কমানোর ডায়েট প্ল্যান',
            'স্লিম কিন্তু শীরণহীন শরীরের জন্য প্রোটিনসমৃদ্ধ খাদ্য তালিকা',
            'বডি মাস ইনডেক্স (BMI) ও মেটাবলিক রেট স্কেলিং'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ জিরো পয়েন্ট, মেইন রোড, দিনাজপুর',
        isAvailable: true,
        description: 'বীরগঞ্জে দ্রুত ওজন নিয়ন্ত্রণ, পেটের অতিরিক্ত মেদ ঝরানো ও ফিটনেস ধরে রাখার জনপ্রিয় ডায়েটিশিয়ান কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'পার্বতীপুর ফিটনেস & থাইরয়েড নিউট্রিশন চেম্বার',
        degrees: 'MBBS, PGD (Clinical Nutrition - BIRDEM)',
        hospitalAffiliation: 'কনসালটেন্ট (নিউট্রিশন), পার্বতীপুর সেন্ট্রাল হাসপাতাল',
        phone: '01932-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
        serviceType: 'থাইরয়েড & পিসিওএস (PCOS/PCOD) ডায়েট বিশেষজ্ঞ',
        experienceYears: 13,
        specialties: [
            'হাইপো-থাইরয়েডিজমে ওজন নিয়ন্ত্রণ ও হরমোন ব্যালেন্সিং',
            'পিসিওএস (PCOS) আক্রান্ত মহিলাদের সুষম খাদ্য পরামর্শ',
            'কৈশোর ও বয়ঃসন্ধিকালের পুষ্টিহীনতা দূরীকরণ'
        ],
        visitingFee: 600,
        chamberTime: 'বিকাল ৩:৩০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'পার্বতীপুর বাসস্ট্যান্ড মোড়, ফিটনেস নিউট্রিশন, দিনাজপুর',
        isAvailable: true,
        description: 'পার্বতীপুরে পিসিওএস, থাইরয়েড ও হরমোন জনিত মেদ সমস্যায় ভোগা মহিলাদের জন্য আধুনিক ডায়েট পরামর্শ কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ফুলবাড়ী গ্রীন লাইফ নিউট্রিশন কর্নার',
        degrees: 'BSc (Nutrition Science), Certified Sports Nutritionist',
        hospitalAffiliation: 'সিনিয়র নিউট্রিশন অফিসার, ফুলবাড়ী কম্যুনিটি হেলথ',
        phone: '01763-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'স্পোর্টস & জিম নিউট্রিশন বিশেষজ্ঞ (Sports Nutrition)',
        experienceYears: 9,
        specialties: [
            'খেলোয়াড় ও জিমকারীদের মাসল বিল্ডিং ও প্রোটিন ডায়েট',
            'দৈনন্দিন এনার্জি বুস্টিং অর্গানিক খাদ্য তালিকা',
            'ভিটামিন ও মিনারেল ঘাটতি পূরণ গাইড'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, নিউট্রিশন পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ফুলবাড়ীতে অ্যাথলেট, খেলোয়াড় এবং জিম করা তরুণদের জন্য বিশেষায়িত প্রোটিন ও অর্গানিক খাদ্যাভ্যাস পরিকল্পনা।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ ফ্যামিলি পুষ্টি পরামর্শ কেন্দ্র',
        degrees: 'পুষ্টি ও স্বাস্থ্য শিক্ষা ডিপ্লোমাধারীক কেন্দ্র',
        hospitalAffiliation: 'নবাবগঞ্জ মডেল ডায়াগনস্টিক',
        phone: '01844-332211',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ক্লিনিক্যাল নিউট্রিশনিস্ট & ডায়েটিশিয়ান',
        experienceYears: 8,
        specialties: [
            'পারিবারিক প্রতিদিনের সুষম খাদ্যতালিকা প্রস্তুতকরণ',
            'বয়স্কদের হজম সমস্যা ও কোষ্ঠকাঠিন্য দূরীকরণে ডায়েট',
            'রক্তে কোলেস্টেরল ও ট্রাইগ্লিসারাইড কমানোর উপায়'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ মেইন বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জে কম খরচে পুরো পরিবারের জন্য পুষ্টিকর ও ঘরে তৈরি বাজেটবান্ধব খাদ্য তালিকা প্রণয়ন।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ সেতাবগঞ্জ নিউট্রিশন সেবা',
        degrees: 'BSc (Nutrition), PGT (Clinical Dietetics)',
        hospitalAffiliation: 'কনসালটেন্ট নিউট্রিশনিস্ট, সেতাবগঞ্জ সেবা ক্লিনিক',
        phone: '01954-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ওজন নিয়ন্ত্রণ (Weight Gain/Loss) ডায়েট চার্ট',
        experienceYears: 11,
        specialties: [
            'দুর্বল ও কৃশকায় ব্যক্তিদের প্রাকৃতিক উপায়ে ওজন বৃদ্ধি',
            'গ্যাস্ট্রিক, এসিডিটি ও আলসার মুক্ত খাবারের চার্ট',
            'হার্ট ডিজিজ রোগীদের চর্বিমুক্ত ডায়েট'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ পৌর মার্কেট, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'সেতাবগঞ্জে সাধারণ ও জটিল রোগীদের প্রাকৃতিক ও দেশীয় উপাদানে ডায়েট চার্ট প্রস্তুতকারক।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর নিউট্রিশন ফার্স্ট এইড পয়েন্ট',
        degrees: 'সহজ খাদ্য তালিকা ও বিএমআই পরামর্শক',
        hospitalAffiliation: 'চিরিরবন্দর সেবা কেন্দ্র',
        phone: '01774-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ক্লিনিক্যাল নিউট্রিশনিস্ট & ডায়েটিশিয়ান',
        experienceYears: 7,
        specialties: [
            'ক্যালোরি মেপে ওজন কমানোর প্রাথমিক গাইড',
            'অতিরিক্ত চা/কফি আসক্তি ও ঘুমের ব্যাঘাত মুক্ত খাবার',
            'স্কুলগামী শিশুদের টিফিন পরিকল্পনা'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ৯:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রাণীরবন্দর বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'চিরিরবন্দরে সাশ্রয়ী ফি-তে সুষম খাবার গ্রহণ ও স্বাস্থ্যকর জীবনধারা বিষয়ক প্রাথমিক পরামর্শ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ঘোড়াঘাট ডায়েট & লাইফস্টাইল কেয়ার',
        degrees: 'BSc (Nutrition & Food Science)',
        hospitalAffiliation: 'ঘোড়াঘাট ডিজিটাল ডায়াগনস্টিক',
        phone: '01864-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ডায়াবেটিস & কিডনি রোগীদের নিউট্রিশন প্ল্যান',
        experienceYears: 8,
        specialties: [
            'বয়স্ক রোগীদের জন্য নরম ও সহজে হজমযোগ্য খাবার',
            'স্ট্রোক ও প্যারালাইসিস রোগীদের টিউব ফিডিং (Ryle\'s Tube) ডায়েট',
            'ব্লাড প্রেশার ও হাইপারটেনশন নিয়ন্ত্রণ ডায়েট'
        ],
        visitingFee: 400,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শনি ও মঙ্গলবার)',
        district: 'দিনাজপুর',
        upazila: 'ঘোড়াঘাট',
        address: 'ঘোড়াঘাট জিরো পয়েন্ট, দিনাজপুর',
        isAvailable: true,
        description: 'ঘোড়াঘাটে দীর্ঘমেয়াদী অসুস্থ রোগীদের বিশেষায়িত পুষ্টি ও স্বাস্থ্যকর লাইফস্টাইল কনসালটেন্সি।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'কাহারোল কান্তনগর পুষ্টি সেবা চেম্বার',
        degrees: 'পারিবারিক পুষ্টি পরামর্শ কেন্দ্র',
        hospitalAffiliation: 'কাহারোল সেবা ডিজিটাল ল্যাব',
        phone: '01955-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
        serviceType: 'শিশু & মাতৃত্বকালীন পুষ্টি বিশেষজ্ঞ (Maternal & Child Nutrition)',
        experienceYears: 6,
        specialties: [
            'গ্রামীন পুষ্টিকর খাবারের তালিকা ও ক্যালোরি চার্ট',
            'শিশুদের কৃমি ও অপ পুষ্টি রোধে খাবারের নিয়মাবলী',
            'স্বাস্থ্যসম্মত রান্নার টিপস'
        ],
        visitingFee: 300,
        chamberTime: 'সকাল ১০:০০ - রাত ৮:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'কাহারোল',
        address: 'কাহারোল মেইন বাজার, দিনাজপুর',
        isAvailable: true,
        description: 'কাহারোলে স্বল্প আয়ের পরিবার ও মা-শিশুদের জন্য পুষ্টিকর দেশীয় শাকসবজি ও ফলমূল নির্ভর খাদ্য গাইড।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const seedNutritionData = async () => {
    try {
        if (mongoose.connection.readyState !== 1) return;
        const count = await Nutrition.countDocuments();
        if (count === 0) {
            await Nutrition.insertMany(INITIAL_NUTRITION_SEED);
            console.log('✅ Nutrition Module pre-populated with 11 initial seed entries');
        }
    } catch (err) {
        console.error('⚠️ Failed to seed Nutrition module:', err);
    }
};

export const getNutritionServices = async (filter = {}) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            return INITIAL_NUTRITION_SEED;
        }
        await seedNutritionData();
        const data = await Nutrition.find(filter).sort({ createdAt: -1 });
        if (!data || data.length === 0) {
            return INITIAL_NUTRITION_SEED;
        }
        return data;
    } catch (err) {
        console.error('getNutritionServices error:', err);
        return INITIAL_NUTRITION_SEED;
    }
};

export const getNutritionServiceById = async (id) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            return INITIAL_NUTRITION_SEED.find(item => item.id === id || item._id === id) || null;
        }
        return await Nutrition.findById(id);
    } catch (err) {
        return INITIAL_NUTRITION_SEED.find(item => item.id === id || item._id === id) || null;
    }
};

export const createNutritionService = async (data) => {
    return await Nutrition.create(data);
};

export const updateNutritionService = async (id, data) => {
    return await Nutrition.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteNutritionService = async (id) => {
    return await Nutrition.findByIdAndDelete(id);
};
