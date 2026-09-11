/**
 * News Service Layer with MongoDB support & initial seed news data
 */
import { getDB } from '../../database/db.js';

let initialNews = [
    {
        _id: 'news_1001',
        title: 'দিনাজপুরের সুস্বাদু কাটারীভোগ ধানের রেকর্ড বাম্পার ফলন: কৃষকদের মুখে হাসির ঝিলিক',
        excerpt: 'চলতি মৌসুমে দিনাজপুর জেলায় সুগন্ধি কাটারীভোগ ও জিরাকাঠি ধানের বাম্পার ফলন হয়েছে। অনুকূল আবহাওয়া ও আধুনিক কৃষি প্রযুক্তি ব্যবহারে এ বছর হেক্টর প্রতি রেকর্ড পরিমাণ ধান উৎপাদিত হয়েছে।',
        content: 'দিনাজপুর সদর, বিরল, ও চিরিরবন্দর উপজেলায় চলতি মৌসুমে ঐতিহ্যবাহী কাটারীভোগ ধানের অভাবনীয় বাম্পার ফলন হয়েছে। জেলা কৃষি সম্প্রসারণ অধিদপ্তরের তথ্য অনুযায়ী, এ বছর দিনাজপুরের বিভিন্ন উপজেলায় সুগন্ধি ধান চাষের লক্ষ্যমাত্রা ছাড়িয়ে গেছে।\n\nউপজেলা কৃষি কর্মকর্তা জানান, সময়মতো রাসায়নিক সার প্রদান, পর্যাপ্ত সেচ ও আধুনিক নিবিড় পরিচর্যার কারণে পোকামাকড়ের উপদ্রব অনেক কম ছিল। কৃষকরা জানান, বর্তমানে ধান মাড়াই ও শুকানোর কাজ পুরোদমে চলছে। বাজারে কাটারীভোগ ধানের ভালো দাম থাকায় স্থানীয় কৃষকরা অত্যন্ত আনন্দিত।',
        category: 'কৃষি ও শস্য',
        image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
        reporter: 'নিজস্ব প্রতিবেদক, দিনাজপুর',
        isLead: true,
        isBreaking: true,
        views: 1420,
        createdAt: new Date(Date.now() - 10 * 3600000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'news_1002',
        title: 'ঐতিহাসিক রামসাগর জাতীয় উদ্যানে পর্যটকদের উপচে পড়া ভিড়',
        excerpt: 'ছুটির দিনে দিনাজপুরের ঐতিহাসিক মানবসৃষ্ট দিঘি রামসাগরে ভ্রমণপিপাসুদের ব্যাপক সমাগম ঘটেছে। রামসাগরের মনোরম প্রাকৃতিক পরিবেশ পর্যটকদের মুগ্ধ করছে।',
        content: 'দিনাজপুর সদর থেকে ৮ কিলোমিটার দক্ষিণে অবস্থিত ঐতিহাসিক রামসাগর দিঘিতে সাপ্তাহিক ছুটির দিনে দেশের বিভিন্ন জেলা থেকে হাজারো পর্যটকের আগমন ঘটেছে। রামসাগর জাতীয় উদ্যানের মনোরম প্রাকৃতিক পরিবেশ, বিশাল জলাশয় ও সুউচ্চ টিলা দর্শনার্থীদের আকর্ষণের কেন্দ্রবিন্দুতে পরিণত হয়েছে।\n\nপর্যটন পুলিশ জানায়, দর্শনার্থীদের নিরাপত্তা নিশ্চিত করতে বিশেষ টহল জোরদার করা হয়েছে। রামসাগর ইকো পার্কের সৌন্দর্য বর্ধনে জেলা প্রশাসন নতুন কিছু সংস্কার কাজ গ্রহণ করেছে।',
        category: 'উন্নয়ন ও পৌরসভা',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        reporter: 'স্টাফ রিপোর্টার',
        isLead: false,
        isBreaking: true,
        views: 890,
        createdAt: new Date(Date.now() - 1 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'news_1003',
        title: 'হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ে আন্তর্জাতিক গবেষণা সেমিনার',
        excerpt: 'হাবিপ্রবিতে স্মার্ট কৃষি প্রযুক্তির ব্যবহার ও টেকসই জলবায়ু সহনশীলতা বিষয়ক দিনব্যাপী আন্তর্জাতিক সেমিনার অনুষ্ঠিত হয়েছে।',
        content: 'দিনাজপুরের হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ে (হাবিপ্রবি) "স্মার্ট এগ্রিকালচার ও জলবায়ু পরিবর্তন" শীর্ষক এক আন্তর্জাতিক সেমিনার অনুষ্ঠিত হয়েছে। অডিটোরিয়াম-১ এ আয়োজিত এই সেমিনারে দেশ-বিদেশের প্রখ্যাত কৃষি বিজ্ঞানী ও গবেষকরা অংশগ্রহণ করেন।\n\nবিশ্ববিদ্যালয়ের মান্যবর উপাচার্য প্রধান অতিথি হিসেবে উপস্থিত থেকে গবেষণালব্ধ নতুন প্রযুক্তির উদ্ভাবনের ওপর আলোকপাত করেন। সেমিনারে শিক্ষার্থীরা তাদের উদ্ভাবনী গবেষণা পোস্টার উপস্থাপন করেন।',
        category: 'শিক্ষা ও ক্যাম্পাস',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
        reporter: 'হাবিপ্রবি প্রতিনিধি',
        isLead: false,
        isBreaking: false,
        views: 650,
        createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'news_1004',
        title: 'দিনাজপুর পৌরসভা কর্তৃক প্রধান সড়কসমূহে সোলার স্ট্রিট লাইট স্থাপন প্রকল্প শুরু',
        excerpt: 'শহরের আলোকায়ন ও নিরাপত্তা বাড়াতে দিনাজপুর পৌরসভার উদ্যোগে ১০০ কিলোমিটার জুড়ে আধুনিক সোলার স্ট্রিট লাইট বসানো হচ্ছে।',
        content: 'দিনাজপুর পৌর এলাকার প্রধান প্রধান সড়ক ও গুরুত্বপূর্ণ মোড়গুলোতে রাতে নিরাপদ যাতায়াত নিশ্চিত করতে স্মার্ট সোলার এলইডি স্ট্রিট লাইট স্থাপনের বড় প্রকল্প শুরু হয়েছে। কালীতলা, বাহাদুর বাজার ও মালদহপট্টি এলাকায় ইতিমধ্যেই লাইট বসানোর কাজ শেষ হয়েছে।\n\nপৌর মেয়র জানান, পরিবেশবান্ধব এই উদ্যোগের ফলে শহরের নাইট ভিউ চমৎকার হবে এবং রাতে পথচারীদের নিরাপত্তা বহুগুণ বৃদ্ধি পাবে।',
        category: 'উন্নয়ন ও পৌরসভা',
        image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80',
        reporter: 'পৌর প্রতিনিধি',
        isLead: false,
        isBreaking: false,
        views: 1120,
        createdAt: new Date(Date.now() - 3 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'news_1005',
        title: 'দিনাজপুর স্পোর্টস কমপ্লেক্সে জেলা প্রিমিয়ার ফুটবল লিগের ফাইনালে মুখোমুখি শতদল ক্লাব',
        excerpt: 'দিনাজপুর স্টেডিয়ামে জমজমাট জেলা ফুটবল লিগের ফাইনালে মুখোমুখি হতে যাচ্ছে তরুণ সংঘ ও শতদল ক্লাব।',
        content: 'দিনাজপুর জেলা ক্রীড়া সংস্থার আয়োজনে স্থানীয় স্পোর্টস কমপ্লেক্স মাঠে অনুষ্ঠিত হতে যাচ্ছে বহুল প্রতীক্ষিত জেলা প্রিমিয়ার ফুটবল লিগের চূড়ান্ত ম্যাচ। দর্শনার্থীদের বিপুল উন্মাদনা লক্ষ্য করা যাচ্ছে। চূড়ান্ত ম্যাচে বিজয়ী দলকে বিশেষ ট্রফি ও অর্থ পুরস্কার প্রদান করা হবে।',
        category: 'খেলাধুলা',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
        reporter: 'ক্রীড়া প্রতিনিধি',
        isLead: false,
        isBreaking: false,
        views: 430,
        createdAt: new Date(Date.now() - 4 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    }
];

const normalizeNews = (doc) => {
    if (!doc) return doc;
    return {
        ...doc,
        id: doc._id || doc.id,
        title: doc.title || 'সংবাদ',
        excerpt: doc.excerpt || '',
        content: doc.content || '',
        category: doc.category || 'সাধারণ',
        image: doc.image || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
        reporter: doc.reporter || 'স্টাফ রিপোর্টার',
        isLead: Boolean(doc.isLead),
        isBreaking: Boolean(doc.isBreaking),
        views: typeof doc.views === 'number' ? doc.views : 100,
        createdAt: doc.createdAt || new Date().toISOString(),
        updatedAt: doc.updatedAt || new Date().toISOString()
    };
};

export const getAllNewsService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        let filtered = [...initialNews];
        if (query.category && query.category !== 'সকল') {
            filtered = filtered.filter(item => item.category === query.category);
        }
        if (query.search) {
            const q = query.search.toLowerCase();
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(q) ||
                item.excerpt.toLowerCase().includes(q)
            );
        }
        return filtered.map(normalizeNews);
    }

    try {
        const collection = db.collection('news');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialNews);
        }

        let filter = {};
        if (query.category && query.category !== 'সকল') {
            filter.category = query.category;
        }
        if (query.search) {
            filter.$or = [
                { title: { $regex: query.search, $options: 'i' } },
                { excerpt: { $regex: query.search, $options: 'i' } }
            ];
        }

        const docs = await collection.find(filter).sort({ createdAt: -1 }).toArray();
        return docs.map(normalizeNews);
    } catch (err) {
        return initialNews.map(normalizeNews);
    }
};

export const createNewsService = async (data) => {
    const db = getDB();

    // If marked as lead story, unset previous lead stories
    if (data.isLead && db) {
        try {
            await db.collection('news').updateMany({}, { $set: { isLead: false } });
        } catch (e) {
            console.error(e);
        }
    }

    const newItem = {
        _id: 'news_' + Date.now(),
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        category: data.category || 'সাধারণ',
        image: data.image || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
        reporter: data.reporter || 'স্টাফ রিপোর্টার, দিনাজপুর',
        isLead: Boolean(data.isLead),
        isBreaking: Boolean(data.isBreaking),
        views: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        if (newItem.isLead) {
            initialNews.forEach(n => n.isLead = false);
        }
        initialNews.unshift(newItem);
        return normalizeNews(newItem);
    }

    const collection = db.collection('news');
    await collection.insertOne(newItem);
    return normalizeNews(newItem);
};

export const deleteNewsService = async (id) => {
    const db = getDB();
    if (!db) {
        initialNews = initialNews.filter(item => item._id !== id && item.id !== id);
        return true;
    }
    const collection = db.collection('news');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
