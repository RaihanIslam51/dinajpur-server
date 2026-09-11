/**
 * Job Service Layer
 * Isolated collection handling for 'jobs' with 24 normalized fields
 */
import { getDB } from '../../database/db.js';
import { ObjectId } from 'mongodb';

// Helper to normalize array fields from comma-separated string or array
const normalizeArray = (val) => {
    if (Array.isArray(val)) return val.map(item => String(item).trim()).filter(Boolean);
    if (typeof val === 'string' && val.trim()) {
        return val.split(',').map(item => item.trim()).filter(Boolean);
    }
    return [];
};

// Normalize job input data to strictly conform to all 24 schema fields
const normalizeJobData = (data = {}) => {
    const salaryMinVal = Number(data.salaryMin) || (typeof data.salary === 'number' ? data.salary : 0);
    const salaryMaxVal = Number(data.salaryMax) || 0;
    const vacancyVal = Number(data.vacancy) || 1;

    return {
        title: data.title || data.jobTitle || 'সাধারণ পদবী',
        companyName: data.companyName || data.company || 'অনির্দিষ্ট প্রতিষ্ঠান',
        companyLogo: data.companyLogo || (Array.isArray(data.images) && data.images[0]) || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
        description: data.description || 'চাকরির বিস্তারিত বিবরণ শীঘ্রই হালনাগাদ করা হবে।',
        jobType: data.jobType || 'ফুল-টাইম',
        employmentType: data.employmentType || 'বেসরকারি',
        category: data.category || 'আইটি ও সফটওয়্যার',
        salaryMin: salaryMinVal,
        salaryMax: salaryMaxVal,
        salaryType: data.salaryType || 'মাসিক',
        location: data.location || data.address || 'দিনাজপুর সদর',
        vacancy: vacancyVal,
        educationRequirement: data.educationRequirement || data.education || 'স্নাতক/সমমান',
        experienceRequirement: data.experienceRequirement || data.experience || 'অভিজ্ঞতা প্রযোজ্য নয়',
        skills: normalizeArray(data.skills || data.requirements),
        responsibilities: normalizeArray(data.responsibilities),
        benefits: normalizeArray(data.benefits),
        applicationDeadline: data.applicationDeadline || data.deadline || '2026-12-31',
        applicationMethod: data.applicationMethod || (data.applicationLink ? 'অনলাইন লিংক' : 'ইমেইল'),
        applicationLink: data.applicationLink || '',
        contactEmail: data.contactEmail || 'hr@example.com',
        contactPhone: data.contactPhone || '01700-000000',
        postedDate: data.postedDate || new Date().toISOString().split('T')[0],
        isFeatured: Boolean(data.isFeatured || data.featured),
        status: data.status || 'Active',
        updatedAt: new Date()
    };
};

// Seed initial jobs for Dinajpur if database collection is empty
const getInitialSeedJobs = () => [
    {
        title: 'সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার (React & Node.js)',
        companyName: 'টেকদিনাজপুর আইটি সলিউশনস',
        companyLogo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400',
        description: 'আমরা দিনাজপুর সদরের আধুনিক আইটি পার্কে একজন অভিজ্ঞ ফুল-স্ট্যাক ওয়েব ডেভেলপার খুঁজছি। আধুনিক ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট এবং টিম লিডিংয়ে দক্ষ প্রার্থীদের প্রাধান্য দেওয়া হবে।',
        jobType: 'ফুল-টাইম',
        employmentType: 'বেসরকারি',
        category: 'আইটি ও সফটওয়্যার',
        salaryMin: 45000,
        salaryMax: 65000,
        salaryType: 'মাসিক',
        location: 'কেবি রোড, দিনাজপুর সদর',
        vacancy: 3,
        educationRequirement: 'স্নাতক (B.Sc in CSE / Software Engineering / IT)',
        experienceRequirement: '২-৪ বছরের বাস্তব কাজের অভিজ্ঞতা',
        skills: ['JavaScript', 'React.js', 'Node.js', 'MongoDB', 'REST API', 'Git'],
        responsibilities: [
            'ওয়েব অ্যাপ্লিকেশন কোডিং ও আর্কিটেকচার ডিজাইন করা',
            'জুনিয়র ডেভেলপারদের গাইড ও কোড রিভিউ করা',
            'ডাটাবেস অপ্টিমাইজেশন ও সার্ভার ডেপ্লয়মেন্ট পরিচালনা',
            'ক্লায়েন্টের সাথে টেকনিক্যাল মিটিং ও রেয়ারমেন্ট অ্যানালাইসিস'
        ],
        benefits: ['উৎসব বোনাস (বছরে ২ টি)', 'পারফর্মেন্স বোনাস', 'ফ্রি লাঞ্চ ও স্ন্যাক্স', 'বাৎসরিক ট্যুর'],
        applicationDeadline: '2026-10-31',
        applicationMethod: 'অনলাইন লিংক',
        applicationLink: 'https://techdinajpur.com/careers/senior-dev',
        contactEmail: 'career@techdinajpur.com',
        contactPhone: '01711-223344',
        postedDate: '2026-09-01',
        isFeatured: true,
        status: 'Active',
        createdAt: new Date('2026-09-01')
    },
    {
        title: 'অফিসার - ক্যাশ ও ফাইন্যান্স',
        companyName: 'দিনাজপুর বহুমুখী সমবায় ব্যাংক লিঃ',
        companyLogo: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400',
        description: 'দিনাজপুর ব্যাংক লিমিটেডের নতুন উপ-শাখার জন্য ক্যাশ কাউন্টার পরিচালনা এবং দৈনিক হিসাব সংরক্ষণের জন্য উৎসাহী তরুণ-তরুণী আবশ্যক।',
        jobType: 'ফুল-টাইম',
        employmentType: 'ব্যাংক ও ফাইন্যান্স',
        category: 'ব্যাংক ও ফাইন্যান্স',
        salaryMin: 22000,
        salaryMax: 28000,
        salaryType: 'মাসিক',
        location: 'মডেল থানা রোড, দিনাজপুর',
        vacancy: 5,
        educationRequirement: 'স্নাতক / স্নাতকোত্তর (হিসাববিজ্ঞান / ফাইন্যান্স / ফিনান্সিয়াল ম্যানেজমেন্ট)',
        experienceRequirement: '১ বছরের অভিজ্ঞতা (নতুনদেরও আবেদনের সুযোগ রয়েছে)',
        skills: ['Cash Management', 'Tally Prime', 'MS Excel', 'Customer Service'],
        responsibilities: [
            'দৈনিক নগদ লেনদেন ও ভাউচার এন্ট্রি করা',
            'গ্রাহকদের হিসাব খোলা ও ব্যালান্স বিবরণী প্রদান',
            'ক্যাশ কাউন্টারের দৈনন্দিন সমাপনী হিসাব তৈরি'
        ],
        benefits: ['উৎসব ভাতা', 'প্রভিডেন্ট ফান্ড', 'গ্র্যাচুয়াইটি', 'মেডিকেল কভারেজ'],
        applicationDeadline: '2026-10-15',
        applicationMethod: 'ইমেইল',
        applicationLink: '',
        contactEmail: 'hr@dinajpurbank.com',
        contactPhone: '01722-334455',
        postedDate: '2026-09-05',
        isFeatured: true,
        status: 'Active',
        createdAt: new Date('2026-09-05')
    },
    {
        title: 'লেকচারার - ইংরেজি ও গণিত',
        companyName: 'দিনাজপুর মডেল স্কুল ও কলেজ',
        companyLogo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
        description: 'মাধ্যমিক ও উচ্চ মাধ্যমিক স্তরে ইংরেজি ও গণিত বিষয়ে পাঠদানের জন্য মেধা ও পারদর্শিতা সম্পন্ন শিক্ষক/শিক্ষিকা নিয়োগ দেওয়া হবে।',
        jobType: 'ফুল-টাইম',
        employmentType: 'শিক্ষকতা',
        category: 'শিক্ষকতা',
        salaryMin: 25000,
        salaryMax: 35000,
        salaryType: 'মাসিক',
        location: 'ইকবাল হাইস্কুল সংলগ্ন, দিনাজপুর সদর',
        vacancy: 4,
        educationRequirement: 'এম.এ (ইংরেজি) / এম.এসসি (গণিত)',
        experienceRequirement: '১-২ বছরের শিক্ষকতার অভিজ্ঞতা (NTRCA সনদপ্রাপ্তদের অগ্রাধিকার)',
        skills: ['Classroom Management', 'Lesson Planning', 'English Communication', 'Mathematics Pedagogy'],
        responsibilities: [
            'নিয়মিত ক্লাস নেওয়া ও পাঠদান পরিচালনা',
            'পরীক্ষার প্রশ্নপত্র প্রণয়ন ও উত্তরপত্র মূল্যায়ন',
            'শিক্ষার্থীদের প্রোগ্রেস রিপোর্ট প্রস্তুত করা'
        ],
        benefits: ['উৎসব ভাতা (৫০%)', 'প্রভিডেন্ট ফান্ড', 'ইনক্রিমেন্ট সুযোগ'],
        applicationDeadline: '2026-10-20',
        applicationMethod: 'সরাসরি জমা / ডাকযোগে',
        applicationLink: '',
        contactEmail: 'info@dinajpurmodelschool.edu.bd',
        contactPhone: '01733-445566',
        postedDate: '2026-09-08',
        isFeatured: false,
        status: 'Active',
        createdAt: new Date('2026-09-08')
    },
    {
        title: 'ফিল্ড প্রোগ্রাম অফিসার (কৃষি ও গ্রামীণ উন্নয়ন)',
        companyName: 'উত্তরবঙ্গ সামাজিক উন্নয়ন সংস্থা (NGO)',
        companyLogo: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400',
        description: 'দিনাজপুর জেলার বিভিন্ন উপজেলায় স্থানীয় কৃষকদের আধুনিক কৃষি প্রযুক্তি ও প্রাকৃতিক সার ব্যবহারে সচেতন করার জন্য ফিল্ড অফিসার নিয়োগ দেওয়া হবে।',
        jobType: 'চুক্তিভিত্তিক',
        employmentType: 'এনজিও',
        category: 'এনজিও / উন্নয়ন সংস্থা',
        salaryMin: 28000,
        salaryMax: 35000,
        salaryType: 'মাসিক',
        location: 'বিরল ও বোচাগঞ্জ উপজেলা, দিনাজপুর',
        vacancy: 6,
        educationRequirement: 'স্নাতক (কৃষি বিজ্ঞান / পরিবেশ বিজ্ঞান / সমাজবিজ্ঞান)',
        experienceRequirement: '২ বছরের এনজিও ফিল্ড ওয়ার্কের অভিজ্ঞতা',
        skills: ['Community Mobilization', 'Reporting', 'Motorcycle Driving (Valid License)', 'Bengali & Local Language'],
        responsibilities: [
            'কৃষক দলের সাথে নিয়মিত বৈঠক ও প্রশিক্ষণ আয়োজন',
            'মাঠ পর্যায়ের ডাটা সংগ্রহ ও প্রজেক্ট ম্যানেজারকে রিপোর্ট জমা',
            'কৃষি প্রদর্শনী প্লট স্থাপন ও তদারকি'
        ],
        benefits: ['বাইক ফুয়েল এলাউন্স', 'মোবাইল বিল এলাউন্স', 'লাইফ ইন্স্যুরেন্স'],
        applicationDeadline: '2026-10-25',
        applicationMethod: 'ইমেইল',
        applicationLink: '',
        contactEmail: 'jobs@northbanglango.org',
        contactPhone: '01744-556677',
        postedDate: '2026-09-09',
        isFeatured: false,
        status: 'Active',
        createdAt: new Date('2026-09-09')
    }
];

export const getAllJobsService = async (query = {}) => {
    const db = getDB();
    const seeds = getInitialSeedJobs();
    if (!db) {
        return seeds;
    }
    try {
        const collection = db.collection('jobs');
        const count = await collection.countDocuments();
        
        if (count === 0) {
            try {
                await collection.insertMany(seeds);
            } catch (e) {
                console.error('Seeding warning:', e);
            }
        }

        const filter = {};
        if (query.category && query.category !== 'all' && query.category !== 'সকল ক্যাটাগরি') {
            filter.category = query.category;
        }
        if (query.jobType && query.jobType !== 'all' && query.jobType !== 'সকল ধরন') {
            filter.jobType = query.jobType;
        }
        if (query.search) {
            filter.$or = [
                { title: { $regex: query.search, $options: 'i' } },
                { jobTitle: { $regex: query.search, $options: 'i' } },
                { companyName: { $regex: query.search, $options: 'i' } },
                { company: { $regex: query.search, $options: 'i' } },
                { location: { $regex: query.search, $options: 'i' } },
                { category: { $regex: query.search, $options: 'i' } }
            ];
        }

        let items = await collection.find(filter).sort({ isFeatured: -1, createdAt: -1 }).toArray();
        if (items.length === 0 && Object.keys(filter).length === 0) {
            // Re-seed if empty
            await collection.deleteMany({});
            await collection.insertMany(seeds);
            items = await collection.find({}).sort({ isFeatured: -1, createdAt: -1 }).toArray();
        }
        return items.length > 0 ? items : seeds;
    } catch (err) {
        console.error('Error in getAllJobsService:', err);
        return seeds;
    }
};

export const getJobByIdService = async (id) => {
    const db = getDB();
    const seeds = getInitialSeedJobs();
    if (!db) {
        return seeds[0];
    }
    const collection = db.collection('jobs');
    let filter = { _id: id };
    if (ObjectId.isValid(id)) {
        filter = { $or: [{ _id: new ObjectId(id) }, { _id: id }] };
    }
    const item = await collection.findOne(filter);
    return item || seeds[0];
};

export const createJobService = async (data) => {
    const db = getDB();
    const normalized = normalizeJobData(data);
    const newItem = { ...normalized, createdAt: new Date() };

    if (!db) {
        return { _id: 'job_' + Date.now(), ...newItem };
    }
    const collection = db.collection('jobs');
    const result = await collection.insertOne(newItem);
    return { _id: result.insertedId, ...newItem };
};

export const updateJobService = async (id, data) => {
    const db = getDB();
    const normalized = normalizeJobData(data);
    
    if (!db) {
        return { _id: id, ...normalized };
    }
    const collection = db.collection('jobs');
    let filter = { _id: id };
    if (ObjectId.isValid(id)) {
        filter = { $or: [{ _id: new ObjectId(id) }, { _id: id }] };
    }
    await collection.updateOne(filter, { $set: normalized });
    return await collection.findOne(filter);
};

export const deleteJobService = async (id) => {
    const db = getDB();
    if (!db) return true;
    
    const collection = db.collection('jobs');
    let filter = { _id: id };
    if (ObjectId.isValid(id)) {
        filter = { $or: [{ _id: new ObjectId(id) }, { _id: id }] };
    }
    const result = await collection.deleteOne(filter);
    return result.deletedCount > 0;
};
