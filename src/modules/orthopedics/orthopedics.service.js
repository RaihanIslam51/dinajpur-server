import Orthopedics from './orthopedics.model.js';
import mongoose from 'mongoose';

const INITIAL_ORTHOPEDICS_DATA = [
    {
        name: 'ডাঃ প্রফেসর মোঃ শফিকুল ইসলাম (অর্থোপেডিক বিশেষজ্ঞ)',
        degrees: 'MBBS, MS (Orthopedics - BSMMU), D-Ortho, Fellow (Spine & Joint Replacement - India)',
        hospitalAffiliation: 'প্রফেসর & বিভাগীয় প্রধান (অর্থোপেডিক বিভাগ), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01715-998877',
        alternatePhone: '01818-445566',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'অর্থোপেডিক & ট্রমা সার্জন',
        experienceYears: 23,
        specialties: [
            'হাঁটু ও নিতম্ব (Knee & Hip Replacement) কৃত্রিম হাড় প্রতিস্থাপন সার্জারি',
            'ভাঙা হাড়ের জটিল প্লাস্টার, রড ও প্লেট ফিক্সেশন (Trauma Surgery)',
            'মেরুদণ্ডে ব্যথা, বাত-ব্যথা (Arthritis) ও ডিস্ক প্রোল্যাপ্স (PLID) চিকিৎসা'
        ],
        visitingFee: 900,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, দিনাজপুর হাড়-জোড় & স্পাইন কেয়ার (৩য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '২৩ বছরের অভিজ্ঞ প্রখ্যাত অর্থোপেডিক ও ট্রমা সার্জন। হাড় ভাঙা, বাত-ব্যথা ও জয়েন্ট রিপ্লেসমেন্ট সার্জারিতে দিনাজপুরের শীর্ষ বিশেষজ্ঞ।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর ট্রমা 24/7 & ডিজিটাল এক্স-রে হাড় সেন্টার',
        degrees: 'জরুরি হাড় ভাঙা ফিক্সেশন, ডিজিটাল এক্স-রে & প্লাস্টার কাস্ট ল্যাব',
        hospitalAffiliation: 'দিনাজপুর অর্থোপেডিক ইনস্টিটিউট & রিহ্যাব',
        phone: '01739-887766',
        alternatePhone: '01919-554433',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ট্রমা, হাড় ভাঙা & ইমার্জেন্সি কেয়ার',
        experienceYears: 16,
        specialties: [
            '২৪ ঘণ্টা এক্সিডেন্ট বা আঘাতপ্রাপ্ত হাড়ের জরুরি প্লাস্টার ও ব্যান্ডেজ',
            'ডিজিটাল কম্পিউটারাইজড হাই-রেজুলেশন বোন এক্স-রে (High-Res X-Ray)',
            'প্লাস্টার কাটা ও ফিজিওথেরাপি গাইডেন্স'
        ],
        visitingFee: 700,
        chamberTime: '২৪ ঘণ্টা খোলা (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'জেল রোড, ট্রমা টাওয়ার, দিনাজপুর সদর',
        isAvailable: true,
        description: '২৪ ঘণ্টা যেকোনো হাড় ভাঙা ও দুর্ঘটনাজনিত আঘাতের তাত্ক্ষণিক এক্স-রে, প্লাস্টার ও সার্জারি সাপোর্ট সেন্টার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ মোসাম্মৎ শারমিন সুলতানা (স্পাইন & অর্থোপেডিক সার্জন)',
        degrees: 'MBBS, MS (Orthopedic Surgery), Fellowship in Pediatric Orthopedics',
        hospitalAffiliation: 'সহযোগী অধ্যাপক (অর্থোপেডিকস), এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01831-998877',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মেরুদণ্ড (Spine Surgery) & বাত-ব্যথা বিশেষজ্ঞ',
        experienceYears: 15,
        specialties: [
            'কোমর ও ঘাড় ব্যথার মাইক্রো-স্পাইন সার্জারি ও ফিজিওথেরাপি',
            'শিশুদের জন্মগত হাড় বাঁকা (Clubfoot) ও হাড়ের ত্রুটি সংশোধন',
            'অস্টিওপোরোসিস (হাড় ক্ষয়) ও রিউমাটয়েড আথ্রাইটিস ব্যবস্থাপনা'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর, স্পাইন & বোন কেয়ার চেম্বার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'মেরুদণ্ডের ডিস্ক প্রোল্যাপ্স ও শিশুদের হাড়ের জটিল রোগের চিকিৎসায় অভিজ্ঞ নারী অর্থোপেডিক বিশেষজ্ঞ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ কামরুল হাসান (আর্থ্রোস্কোপি & স্পোর্টস ইনজুরি বিশেষজ্ঞ)',
        degrees: 'MBBS, D-Ortho (DU), Fellowship in Arthroscopy & Sports Medicine (Thailand)',
        hospitalAffiliation: 'কনসালটেন্ট (অর্থোপেডিকস), জেনারেল হাসপাতাল, দিনাজপুর',
        phone: '01712-443322',
        alternatePhone: '01912-778899',
        photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
        serviceType: 'স্পোর্টস ইনজুরি & আর্থ্রোস্কোপিক সার্জারি',
        experienceYears: 13,
        specialties: [
            'খেলোয়াড়দের হাঁটুর লিগামেন্ট ছেঁড়া (ACL / PCL Tear) কি-হোল সার্জারি',
            'কাঁধ সরে যাওয়া (Shoulder Dislocation) ও লিগামেন্ট পুনর্গঠন',
            'আর্থ্রোস্কোপিক উপায়ে জয়েন্ট ক্লিনিং'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৩:৩০ - সন্ধ্যা ৭:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ বাসস্ট্যান্ড, অর্থো কেয়ার পয়েন্ট, বীরগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'খেলাধুলা ও দুর্ঘটনায় লিগামেন্ট আঘাতপ্রাপ্তদের আধুনিক কি-হোল আর্থ্রোস্কোপিক সার্জারিতে দক্ষ বিশেষজ্ঞ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর বোন ডেনসিটোমেট্রি & বাত রোগ ক্লিনিক',
        degrees: 'DEXA বোন ডেনসিটি টেস্ট, রিউমাটোলজি & জয়েন্ট কেয়ার সেন্টার',
        hospitalAffiliation: 'দিনাজপুর অস্টিওপোরোসিস এন্ড বোন রিসার্চ ইন্সটিটিউট',
        phone: '01755-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'বাত-ব্যথা & ফিজিওথেরাপি রিহ্যাব সেন্টার',
        experienceYears: 14,
        specialties: [
            'হাড়ের ঘনত্ব (DEXA Scan) মেপে অস্টিওপোরোসিস নির্ণয়',
            'গেঁটে বাত, ইউরিক এসিড বৃদ্ধি ও ক্রনিক হাড় ক্ষয় চিকিৎসা',
            'ইলেকট্রো-থেরাপি, লেজার থেরাপি & স্পাইনাল ড্র্যাকশন'
        ],
        visitingFee: 650,
        chamberTime: 'বিকাল ৫:০০ - রাত ৯:০০ (রবিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'নতুন বাজার, বোন কেয়ার প্লাজা, পার্বতীপুর, দিনাজপুর',
        isAvailable: true,
        description: 'বয়স্কদের হাড় ক্ষয় প্রতিরোধ ও ক্রনিক বাত ব্যথার সর্বাধুনিক ফিজিওথেরাপি ও ডায়াগনস্টিক কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ মোসাম্মৎ পারভীন আক্তার (পিডিয়াট্রিক অর্থোপেডিকস)',
        degrees: 'MBBS, MS (Orthopedics), Training in Child Bone Deformity Repair',
        hospitalAffiliation: 'সহযোগী অধ্যাপক (শিশু অর্থোপেডিক বিভাগ), এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01822-445566',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
        serviceType: 'শিশু অর্থোপেডিক (Child Bone Specialist)',
        experienceYears: 12,
        specialties: [
            'শিশুদের বাঁকা পা (Knock Knees / Bow Legs) সোজা করার চিকিৎসা',
            'হাড়ের রিকেটস রোগ ও ভিটামিন-ডি এর ঘাটতিজনিত হাড়ের সমস্যা',
            'শিশুদের জন্মগত হাড় ভাঙা ও ডিসলোকেশন'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, চাইল্ড বোন কেয়ার, ফুলবাড়ী, দিনাজপুর',
        isAvailable: true,
        description: 'নবজাতক ও শিশুদের হাড়ের জটিলতা, হাড়ের বৃদ্ধি সমস্যা ও বাঁকা পায়ের চিকিৎসায় প্রখ্যাত শিশু অর্থোপেডিক।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ মোঃ আতিকুর রহমান (হাড়-জোড় ও ফ্র্যাকচার বিশেষজ্ঞ)',
        degrees: 'MBBS, D-Ortho (BSMMU), FCPS (Surgery)',
        hospitalAffiliation: 'সিনিয়র কনসালটেন্ট (অর্থোপেডিকস), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01744-112233',
        alternatePhone: '01944-778899',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'অর্থোপেডিক & ট্রমা সার্জন',
        experienceYears: 18,
        specialties: [
            'হাত, পা ও কাঁধের জটিল হাড় ভাঙা অপারেশন (ILIZAROV Technique)',
            'হাড় না জোড়া লাগা (Non-union Bone Fracture) সংশোধন',
            'টেন্ডন ও নার্ভ ইনজুরি মেলামোরাম'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:৩০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'হাসপাতাল রোড, অর্থো প্লাজা, দিনাজপুর সদর',
        isAvailable: true,
        description: 'জটিল হাড় ভাঙা ও এলিজারভ পদ্ধতিতে দীর্ঘমেয়াদী হাড় জোড়া লাগানোর অভিজ্ঞ ট্রমা বিশেষজ্ঞ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ আর্থ্রাইটিস & স্পাইন কেয়ার সেন্টার',
        degrees: 'বাত-ব্যথা, প্যারালাইসিস ও হাড় ক্ষয় আধুনিক ফিজিওথেরাপি ল্যাব',
        hospitalAffiliation: 'নবাবগঞ্জ সেন্ট্রাল বোন কেয়ার',
        phone: '01788-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'বাত-ব্যথা & ফিজিওথেরাপি রিহ্যাব সেন্টার',
        experienceYears: 9,
        specialties: [
            'ঘাড়, কোমর ও হাঁটুর ক্ষয়জনিত বাত ব্যথার বৈজ্ঞানিক ফিজিওথেরাপি',
            'স্ট্রোক পরবর্তী অবশ অঙ্গ-প্রত্যঙ্গের হাড় রিহ্যাবিলিটেশন',
            'মেডিকেল আকুপাংচার & আল্ট্রাসাউন্ড থেরাপি'
        ],
        visitingFee: 500,
        chamberTime: 'সকাল ৯:০০ - সন্ধ্যা ৬:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাজার রোড, অর্থো পয়েন্ট, নবাবগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'নবাবগঞ্জ অঞ্চলের বাত-ব্যথায় কষ্ট পাওয়া রোগীদের জন্য আধুনিক ফিজিওথেরাপি ও হাড় কেয়ার চিকিৎসাকেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ ট্রমা & ডিজিটাল প্লাস্টার সেন্টার',
        degrees: 'হাড় ভাঙা শনাক্তকরণ, প্লাস্টার & ফিজিওথেরাপি চেম্বার',
        hospitalAffiliation: 'সেতাবগঞ্জ হেলথ কমপ্লেক্স রোড',
        phone: '01811-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ট্রমা, হাড় ভাঙা & ইমার্জেন্সি কেয়ার',
        experienceYears: 11,
        specialties: [
            'হালকা ও ওয়াটারপ্রুফ ফাইবারগ্লাস প্লাস্টার (Fiberglass Cast)',
            'মচকানো (Sprain) ও পেশির টানে বিশেষ ব্যান্ডেজ গাইড',
            'হাড় ভাঙা পরবর্তী জয়েন্ট মুভমেন্ট ট্রেনিং'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৩:০০ - রাত ৭:৩০ (রবিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ বড় মাঠ সংলগ্ন, বোন চেম্বার, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'জরুরি আঘাত ও হাড় ভাঙায় ফাইবারগ্লাস প্লাস্টার এবং দ্রুত সুস্থতার নির্ভরযোগ্য কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বিরামপুর অর্থোপেডিক & জয়েন্ট রিপ্লেসমেন্ট কেয়ার',
        degrees: 'হাড়-জোড় রিপ্লেসমেন্ট, ট্রমা সার্জারি & ফিজিওথেরাপি সেন্টার',
        hospitalAffiliation: 'বিরামপুর মডেল অর্থোপেডিক ক্লিনিক',
        phone: '01719-334455',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'জয়েন্ট রিপ্লেসমেন্ট & অর্থোপেডিক সার্জারি',
        experienceYears: 14,
        specialties: [
            'বয়স্ক রোগীদের নিতম্ব হাড় ভাঙার প্রস্থেটিক রিপ্লেসমেন্ট',
            'হাঁটুর হাড় ক্ষয়জনিত প্রচণ্ড ব্যথায় কাস্টমাইজড ইনজেকশন',
            'মেরুদণ্ডে ব্যথার ইনভেসিভ ব্লক ইনজেকশন'
        ],
        visitingFee: 650,
        chamberTime: 'সকাল ১০:০০ - বিকাল ৫:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বিরামপুর',
        address: 'বিরামপুর বাসস্ট্যান্ড রোড, কেয়ার ভবন, বিরামপুর, দিনাজপুর',
        isAvailable: true,
        description: 'দক্ষিণাঞ্চলের বয়স্ক ও আঘাতপ্রাপ্ত রোগীদের হাড়-জোড় অস্ত্রোপচার ও চিকিৎসায় অভিজ্ঞ কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর ট্রমা & ফিজিওথেরাপি প্লাজা',
        degrees: 'ইমার্জেন্সি হাড় ফিক্সেশন & স্পাইন রিহ্যাব ল্যাব',
        hospitalAffiliation: 'চিরিরবন্দর মডেল অর্থো কেয়ার',
        phone: '01855-778899',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
        serviceType: 'বাত-ব্যথা & ফিজিওথেরাপি রিহ্যাব সেন্টার',
        experienceYears: 8,
        specialties: [
            'পেশি ফাইবার ইনজুরি ও কাঁধ জমা (Frozen Shoulder) থেরাপি',
            'ডিস্ক প্রোল্যাপ্সের ট্রাকশন থেরাপি',
            'দুর্ঘটনার পর দ্রুত স্বাভাবিক হাঁটার ট্রেইনিং'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (সোম ও শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রেলগেট মোড়, অর্থো প্লাজা, চিরিরবন্দর, দিনাজপুর',
        isAvailable: true,
        description: 'হাড় ভাঙা পরবর্তী জটিলতা ও বাত-ব্যথায় আধুনিক ফিজিওথেরাপি ও হাড় সেবা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const getOrthopedists = async () => {
    try {
        if (mongoose.connection.readyState !== 1) {
            return INITIAL_ORTHOPEDICS_DATA;
        }
        let list = await Orthopedics.find({ status: 'approved' }).sort({ createdAt: -1 });
        if (!list || list.length === 0) {
            await Orthopedics.insertMany(INITIAL_ORTHOPEDICS_DATA);
            list = await Orthopedics.find({ status: 'approved' }).sort({ createdAt: -1 });
        }
        return list && list.length > 0 ? list : INITIAL_ORTHOPEDICS_DATA;
    } catch (err) {
        console.error('Orthopedics Service Error:', err);
        return INITIAL_ORTHOPEDICS_DATA;
    }
};

export const getAllOrthopedistsAdmin = async () => {
    try {
        if (mongoose.connection.readyState !== 1) {
            return INITIAL_ORTHOPEDICS_DATA;
        }
        let list = await Orthopedics.find().sort({ createdAt: -1 });
        if (!list || list.length === 0) {
            await Orthopedics.insertMany(INITIAL_ORTHOPEDICS_DATA);
            list = await Orthopedics.find().sort({ createdAt: -1 });
        }
        return list && list.length > 0 ? list : INITIAL_ORTHOPEDICS_DATA;
    } catch (err) {
        console.error('Orthopedics Admin Service Error:', err);
        return INITIAL_ORTHOPEDICS_DATA;
    }
};

export const createOrthopedist = async (data) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            const newItem = { id: `ortho_${Date.now()}`, ...data, status: 'pending' };
            INITIAL_ORTHOPEDICS_DATA.unshift(newItem);
            return newItem;
        }
        const newDoc = new Orthopedics(data);
        return await newDoc.save();
    } catch (err) {
        console.error('Create Orthopedics Error:', err);
        throw err;
    }
};

export const updateOrthopedistStatus = async (id, status) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            const match = INITIAL_ORTHOPEDICS_DATA.find(d => (d._id === id || d.id === id));
            if (match) match.status = status;
            return match;
        }
        return await Orthopedics.findByIdAndUpdate(id, { status }, { new: true });
    } catch (err) {
        console.error('Update Orthopedics Status Error:', err);
        throw err;
    }
};

export const deleteOrthopedist = async (id) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            const idx = INITIAL_ORTHOPEDICS_DATA.findIndex(d => (d._id === id || d.id === id));
            if (idx !== -1) INITIAL_ORTHOPEDICS_DATA.splice(idx, 1);
            return true;
        }
        return await Orthopedics.findByIdAndDelete(id);
    } catch (err) {
        console.error('Delete Orthopedics Error:', err);
        throw err;
    }
};
