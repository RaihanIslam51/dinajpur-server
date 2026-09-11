import PainMedicine from './painMedicine.model.js';
import mongoose from 'mongoose';

const INITIAL_PAIN_MEDICINE_DATA = [
    {
        name: 'ডাঃ প্রফেসর মোঃ মোখলেছুর রহমান (পেইন মেডিসিন বিশেষজ্ঞ)',
        degrees: 'MBBS, FCPS (Anesthesiology), MD (Pain Medicine - BSMMU), Fellow (Pain Management - India)',
        hospitalAffiliation: 'প্রফেসর & বিভাগীয় প্রধান (পেইন ক্লিনিক), দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01711-332211',
        alternatePhone: '01819-887766',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'পেইন মেডিসিন & ইন্টারভেনশনাল ব্যথা বিশেষজ্ঞ',
        experienceYears: 22,
        specialties: [
            'ক্রনিক কোমর ও ঘাড় ব্যথার সি-আরম গাইডেড নার্ভ ব্লক ইনজেকশন (Facet Block)',
            'হাঁটুর হাড় ক্ষয়জনিত প্রচণ্ড ব্যথায় কাস্টমাইজড পিআরপি (PRP) থেরাপি',
            'ক্যান্সার জনিত অসহ্য ব্যথা নিয়ন্ত্রণ ও প্যালিয়েটিভ পেইন কেয়ার'
        ],
        visitingFee: 900,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'মেডিক্যাল মোড়, দিনাজপুর পেইন কেয়ার & ইন্টারভেনশনাল সেন্টার (২য় তলা), দিনাজপুর সদর',
        isAvailable: true,
        description: '২২ বছরের অভিজ্ঞ সিনিয়র পেইন সার্জন। অপারেশন ছাড়াই আধুনিক নার্ভ ব্লক ও ইনজেকশন থেরাপির মাধ্যমে ক্রনিক ব্যথা নিরাময়ের প্রখ্যাত বিশেষজ্ঞ।',
        workSampleImages: [
            'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
        ],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর আধুনিক ইন্টারভেনশনাল পেইন & রিহ্যাব ক্লিনিক',
        degrees: 'সি-আরম (C-Arm) গাইডেড পেইন ইনজেকশন & লেজার পেইন রিহ্যাব ল্যাব',
        hospitalAffiliation: 'দিনাজপুর পেইন কেয়ার এন্ড স্পাইন রিসার্চ ইন্সটিটিউট',
        phone: '01739-667788',
        alternatePhone: '01919-112233',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'কোমর, ঘাড় & হাঁটু ব্যথা ক্লিনিক',
        experienceYears: 16,
        specialties: [
            'অপারেশন ছাড়া সি-আরম ইমেজ গাইডেড এপিডিউরাল স্টেরয়েড ইনজেকশন',
            'ডিস্ক প্রোল্যাপ্স (PLID) জনিত সাইয়াটিকা (Sciatica) ব্যথার দ্রুত সমাধান',
            'ফ্রোজেন শোল্ডার (Frozen Shoulder) ও শোল্ডার ইনজেকশন কেয়ার'
        ],
        visitingFee: 750,
        chamberTime: 'সকাল ৯:০০ - রাত ৯:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'জেল রোড, পেইন টাওয়ার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'অপারেশন ছাড়াই দীর্ঘমেয়াদী কোমর, ঘাড় ও হাঁটুর ব্যথার আন্তর্জাতিক মানের ইনজেকশন ও ফিজিওথেরাপি কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ মোসাম্মৎ নাজিয়া সুলতানা (মাইগ্রেন ও নার্ভ পেইন বিশেষজ্ঞ)',
        degrees: 'MBBS, FCPS, Fellowship in Interventional Pain Management (AIPM)',
        hospitalAffiliation: 'সহযোগী অধ্যাপক (পেইন মেডিসিন), এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01831-223344',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মাইগ্রেন, ট্রাইজেমিনাল & স্নায়ু ব্যথা',
        experienceYears: 14,
        specialties: [
            'ক্রনিক মাইগ্রেন ও মাথাব্যথার বিশেষ নার্ভ ব্লক ইনজেকশন',
            'মুখমন্ডলের স্নায়ুর তীব্র ব্যথা (Trigeminal Neuralgia) আধুনিক চিকিৎসা',
            'ডায়াবেটিক নিউরোপ্যাথি ও হাত-পা ঝিঁঝিঁ করার পেইন থেরাপি'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'পাহাড়পুর, নার্ভ & পেইন চেম্বার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'মাইগ্রেন, ট্রাইজেমিনাল নিউরালজিয়া ও ডায়াবেটিক নার্ভ ব্যথার আধুনিক চিকিৎসায় অভিজ্ঞ পেইন বিশেষজ্ঞ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ তারিকুল ইসলাম (পিআরপি & জয়েন্ট ইনজেকশন স্পেশালিস্ট)',
        degrees: 'MBBS (RU), D-Ortho, Certified Interventional Pain Physician (CIPP)',
        hospitalAffiliation: 'কনসালটেন্ট (পেইন ক্লিনিক), জেনারেল হাসপাতাল, দিনাজপুর',
        phone: '01712-556677',
        alternatePhone: '01912-889900',
        photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
        serviceType: 'পিআরপি (PRP) & জয়েন্ট ইনজেকশন কেয়ার',
        experienceYears: 12,
        specialties: [
            'প্লাটিলেট রিচ প্লাজমা (PRP) ইনজেকশনের মাধ্যমে হাঁটু হাড়ের ক্ষয় রোধ',
            'গোড়ালির ব্যথা (Plantar Fasciitis) ও কুনুইয়ের ব্যথার (Tennis Elbow) চিকিৎসা',
            'জয়েন্ট ফ্লুইড (Viscosupplementation) ইনজেকশন প্রদান'
        ],
        visitingFee: 750,
        chamberTime: 'বিকাল ৩:৩০ - সন্ধ্যা ৭:৩০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        address: 'বীরগঞ্জ বাসস্ট্যান্ড, পেইন রিলিফ সেন্টার, বীরগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'হাঁটু ও গোড়ালির তীব্র ব্যথায় প্লাটিলেট রিচ প্লাজমা (PRP) ইনজেকশন চিকিৎসায় দিনাজপুরের স্বনামধন্য পেইন ফিজিশিয়ান।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'দিনাজপুর ক্যান্সার পেইন & প্যালিয়েটিভ স্পেশালিস্ট কেন্দ্র',
        degrees: 'অনকোলজি পেইন ম্যানেজমেন্ট, মরফিন ডোজ গাইডেন্স & হোম পেইন কেয়ার',
        hospitalAffiliation: 'দিনাজপুর ক্যান্সার পেইন সাপোর্ট ইউনিট',
        phone: '01755-112233',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'ক্যান্সার পেইন & প্যালিয়েটিভ কেয়ার',
        experienceYears: 15,
        specialties: [
            'ক্যান্সারের তীব্র ব্যথা উপশমে নার্ভ প্ল্যাক্সাস ব্লক (Celiac Plexus Block)',
            'প্যালিয়েটিভ কেয়ার ও মরফিন টাইট্রেশন সাপোর্ট',
            'অধ্যবসায়ী ক্যান্সার রোগীদের হোম-বেসড পেইন থেরাপি'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৫:০০ - রাত ৯:০০ (রবিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'পার্বতীপুর',
        address: 'নতুন বাজার, প্যালিয়েটিভ পেইন প্লাজা, পার্বতীপুর, দিনাজপুর',
        isAvailable: true,
        description: 'ক্যান্সার আক্রান্ত রোগীদের তীব্র যন্ত্রণা উপশমে বিশেষায়িত নার্ভ ব্লক ও প্যালিয়েটিভ পেইন কেয়ার ল্যাব।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ মোসাম্মৎ রোকেয়া বেগম (পোস্ট-সার্জারি পেইন ক্লিনিক)',
        degrees: 'MBBS, MD (Anesthesiology & Pain Medicine - BSMMU)',
        hospitalAffiliation: 'সহযোগী অধ্যাপক (পেইন ক্লিনিক), এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01822-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
        serviceType: 'পোস্ট-সার্জারি & দীর্ঘমেয়াদী ব্যথা',
        experienceYears: 13,
        specialties: [
            'অস্ত্রোপচার পরবর্তী দীর্ঘস্থায়ী কাইনটিক পেইন উপশম',
            'হার্পিস (Shingles / Post-herpetic Neuralgia) পরবর্তী চর্ম ও নার্ভ ব্যথা',
            'ফ্যাসেট জয়েন্ট (Facet Joint) আর্নিকুলার ইনজেকশন'
        ],
        visitingFee: 700,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        address: 'ফুলবাড়ী নিমতলা মোড়, পেইন কেয়ার ভবন, ফুলবাড়ী, দিনাজপুর',
        isAvailable: true,
        description: 'সার্জারি পরবর্তী ও হার্পিস পরবর্তী তীব্র নার্ভ ব্যথার বৈজ্ঞানিক চিকিৎসায় অত্যন্ত অভিজ্ঞ নারী পেইন স্পেশালিস্ট।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'ডাঃ মোঃ মাহফুজুর রহমান (স্পাইনাল পেইন & ড্রাই নিডলিং)',
        degrees: 'MBBS, D-Ortho, Certified Dry Needling & Interventional Pain Specialist',
        hospitalAffiliation: 'সিনিয়র কনসালটেন্ট, দিনাজপুর এম আব্দুর রহিম মেডিকেল কলেজ',
        phone: '01744-445566',
        alternatePhone: '01944-889900',
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
        serviceType: 'পেইন মেডিসিন & ইন্টারভেনশনাল ব্যথা বিশেষজ্ঞ',
        experienceYears: 17,
        specialties: [
            'পেশির দীর্ঘস্থায়ী স্প্যাজম ও ট্রিগার পয়েন্ট (Trigger Point) ড্রাই নিডলিং',
            'কোমর ও ঘাড় ব্যথার রেডিওফ্রিকোয়েন্সি অ্যাবলেশন (RFA)',
            'স্পাইনাল ক্যানাল স্টেনোসিস (Stenosis) ইনজেকশন থেরাপি'
        ],
        visitingFee: 800,
        chamberTime: 'বিকাল ৪:৩০ - রাত ৮:৩০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'দিনাজপুর সদর',
        address: 'হাসপাতাল রোড, স্পাইনাল পেইন সেন্টার, দিনাজপুর সদর',
        isAvailable: true,
        description: 'রেডিওফ্রিকোয়েন্সি অ্যাবলেশন ও ড্রাই নিডলিং প্রযুক্তির মাধ্যমে দীর্ঘমেয়াদী কোমর ব্যথা নিরাময়ে বিশেষজ্ঞ।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'নবাবগঞ্জ ব্যাক & নেক পেইন সোলিউশন',
        degrees: 'কোমর, ঘাড় ও সাইয়াটিকা ব্যথা উপশম কেন্দ্র',
        hospitalAffiliation: 'নবাবগঞ্জ সেন্ট্রাল পেইন সেন্টার',
        phone: '01788-667788',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
        serviceType: 'কোমর, ঘাড় & হাঁটু ব্যথা ক্লিনিক',
        experienceYears: 10,
        specialties: [
            'ভারী কাজ বা বসার কারণে সৃষ্ট কোমরের তীব্র টান ব্যথা উপশম',
            'কম্পিউটার বা মোবাইল ব্যবহারের ঘাড়ের স্পন্ডাইলোসিস (Spondylosis) চিকিৎসা',
            'মেডিকেল ট্রাকশন ও পেইন কারেক্টিভ এক্সারসাইজ'
        ],
        visitingFee: 500,
        chamberTime: 'সকাল ৯:০০ - সন্ধ্যা ৬:০০ (প্রতিদিন)',
        district: 'দিনাজপুর',
        upazila: 'নবাবগঞ্জ',
        address: 'নবাবগঞ্জ বাজার রোড, পেইন ক্লিনিক, নবাবগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'কোমর ও ঘাড়ের পেশীর অনাকাঙ্ক্ষিত টান ও বাত ব্যথায় কষ্ট পাওয়া রোগীদের আধুনিক চিকিৎসা কেন্দ্র।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বোচাগঞ্জ ইন্টারভেনশনাল পেইন & প্লাস্টার রিহ্যাব',
        degrees: 'আঘাতপ্রাপ্ত জয়েন্ট ব্যথা & প্লাস্টার পরবর্তীতে জয়েন্ট পেইন ল্যাব',
        hospitalAffiliation: 'সেতাবগঞ্জ কেয়ার হাসপাতাল রোড',
        phone: '01811-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
        serviceType: 'পিআরপি (PRP) & জয়েন্ট ইনজেকশন কেয়ার',
        experienceYears: 11,
        specialties: [
            'হাড় ভাঙার প্লাস্টার খোলার পর জয়েন্ট শক্ত বা ব্যথা হওয়া উপশম',
            'হাঁটুর লিগামেন্ট ব্যথা ও কার্টিলেজ ক্ষয় ইনজেকশন',
            'আল্ট্রাসাউন্ড গাইডেড বুর্সা (Bursa) ইনজেকশন'
        ],
        visitingFee: 550,
        chamberTime: 'বিকাল ৩:০০ - রাত ৭:৩০ (রবিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বোচাগঞ্জ',
        address: 'সেতাবগঞ্জ বড় মাঠ সংলগ্ন, পেইন প্লাজা, বোচাগঞ্জ, দিনাজপুর',
        isAvailable: true,
        description: 'হাড় ভাঙা পরবর্তী বা দীর্ঘমেয়াদী আঘাতের ব্যথায় বিশেষায়িত আল্ট্রাসাউন্ড গাইডেড পেইন ইনজেকশন চেম্বার।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'বিরামপুর আথ্রাইটিস & রিউম্যাটয়েড পেইন পয়েন্ট',
        degrees: 'রিউমাটয়েড আথ্রাইটিস, গেঁটে বাত & গাউটি পেইন সেন্টারে',
        hospitalAffiliation: 'বিরামপুর মডেল পেইন সেন্টার',
        phone: '01719-556677',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1594824813571-24a69c100d37?auto=format&fit=crop&w=600&q=80',
        serviceType: 'পেইন মেডিসিন & ইন্টারভেনশনাল ব্যথা বিশেষজ্ঞ',
        experienceYears: 13,
        specialties: [
            'গেঁটে বাত ও ইউরিক এসিডজনিত আঙুলের তীব্র ব্যথার চিকিৎসা',
            'এনকাইলোজিং স্পন্ডাইলাইটিস (Ankylosing Spondylitis) পেইন কেয়ার',
            'জয়েন্ট স্টেরয়েড ও ইনট্রা-আর্টিকুলার ইনজেকশন'
        ],
        visitingFee: 650,
        chamberTime: 'সকাল ১০:০০ - বিকাল ৫:০০ (বৃহস্পতিবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'বিরামপুর',
        address: 'বিরামপুর বাসস্ট্যান্ড রোড, কেয়ার ভবন, বিরামপুর, দিনাজপুর',
        isAvailable: true,
        description: 'গেঁটে বাত ও জয়েন্ট ইনফ্লেমেশনের কারণে সৃষ্টি হওয়া তীব্র যন্ত্রণায় অভিজ্ঞ পেইন ক্লিনিক।',
        workSampleImages: [],
        status: 'approved'
    },
    {
        name: 'চিরিরবন্দর নার্ভ পেইন & নিউরোপ্যাথি কেয়ার',
        degrees: 'ডায়াবেটিক পেইন, হাত-পা অসাড়তা & নার্ভ ব্লক সেন্টার',
        hospitalAffiliation: 'চিরিরবন্দর মডেল পেইন ক্লিনিক',
        phone: '01855-889900',
        alternatePhone: '',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
        serviceType: 'মাইগ্রেন, ট্রাইজেমিনাল & স্নায়ু ব্যথা',
        experienceYears: 9,
        specialties: [
            'হাত-পা জ্বালা-পোড়া (Burning Feet Syndrome) ও অসাড়তা চিকিৎসা',
            'স্নায়ু চাপ (Nerve Compression / Carpal Tunnel) পেইন কেয়ার',
            'নার্ভ রিজেনারেশন মেডিসিন ও ইনজেকশন'
        ],
        visitingFee: 500,
        chamberTime: 'বিকাল ৪:০০ - রাত ৮:০০ (সোম ও শুক্রবার বন্ধ)',
        district: 'দিনাজপুর',
        upazila: 'চিরিরবন্দর',
        address: 'চিরিরবন্দর রেলগেট মোড়, পেইন টাওয়ার, চিরিরবন্দর, দিনাজপুর',
        isAvailable: true,
        description: 'হাত-পা জ্বালা-পোড়া ও নার্ভের চাপের ব্যথায় বিশেষায়িত নিউরোপ্যাথি পেইন কেয়ার সেন্টার।',
        workSampleImages: [],
        status: 'approved'
    }
];

export const getPainSpecialists = async () => {
    try {
        if (mongoose.connection.readyState !== 1) {
            return INITIAL_PAIN_MEDICINE_DATA;
        }
        let list = await PainMedicine.find({ status: 'approved' }).sort({ createdAt: -1 });
        if (!list || list.length === 0) {
            await PainMedicine.insertMany(INITIAL_PAIN_MEDICINE_DATA);
            list = await PainMedicine.find({ status: 'approved' }).sort({ createdAt: -1 });
        }
        return list && list.length > 0 ? list : INITIAL_PAIN_MEDICINE_DATA;
    } catch (err) {
        console.error('PainMedicine Service Error:', err);
        return INITIAL_PAIN_MEDICINE_DATA;
    }
};

export const getAllPainSpecialistsAdmin = async () => {
    try {
        if (mongoose.connection.readyState !== 1) {
            return INITIAL_PAIN_MEDICINE_DATA;
        }
        let list = await PainMedicine.find().sort({ createdAt: -1 });
        if (!list || list.length === 0) {
            await PainMedicine.insertMany(INITIAL_PAIN_MEDICINE_DATA);
            list = await PainMedicine.find().sort({ createdAt: -1 });
        }
        return list && list.length > 0 ? list : INITIAL_PAIN_MEDICINE_DATA;
    } catch (err) {
        console.error('PainMedicine Admin Service Error:', err);
        return INITIAL_PAIN_MEDICINE_DATA;
    }
};

export const createPainSpecialist = async (data) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            const newItem = { id: `pain_${Date.now()}`, ...data, status: 'pending' };
            INITIAL_PAIN_MEDICINE_DATA.unshift(newItem);
            return newItem;
        }
        const newDoc = new PainMedicine(data);
        return await newDoc.save();
    } catch (err) {
        console.error('Create PainMedicine Error:', err);
        throw err;
    }
};

export const updatePainSpecialistStatus = async (id, status) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            const match = INITIAL_PAIN_MEDICINE_DATA.find(d => (d._id === id || d.id === id));
            if (match) match.status = status;
            return match;
        }
        return await PainMedicine.findByIdAndUpdate(id, { status }, { new: true });
    } catch (err) {
        console.error('Update PainMedicine Status Error:', err);
        throw err;
    }
};

export const deletePainSpecialist = async (id) => {
    try {
        if (mongoose.connection.readyState !== 1) {
            const idx = INITIAL_PAIN_MEDICINE_DATA.findIndex(d => (d._id === id || d.id === id));
            if (idx !== -1) INITIAL_PAIN_MEDICINE_DATA.splice(idx, 1);
            return true;
        }
        return await PainMedicine.findByIdAndDelete(id);
    } catch (err) {
        console.error('Delete PainMedicine Error:', err);
        throw err;
    }
};
