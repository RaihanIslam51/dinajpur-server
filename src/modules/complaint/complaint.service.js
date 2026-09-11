/**
 * Complaint Service Layer with MongoDB support & initial data
 */
import { getDB } from '../../database/db.js';

let initialComplaints = [
    {
        _id: 'cmp_1005',
        trackingCode: 'CMP-2026-9011',
        title: 'জমি খারিজ ও নামজারি আবেদনে অতিরিক্ত অর্থ দাবি',
        category: 'দুর্নীতি / ঘুষ',
        description: 'সদর তহসিল অফিসে নামজারি প্রসেস করতে সরকার নির্ধারিত ফি-এর অতিরিক্ত ৫,০০০ টাকা অনৈতিকভাবে দাবি করা হচ্ছে। প্রয়োজনীয় সব কাগজপত্র সঠিক থাকা সত্ত্বেও ফাইল আটকে রাখা হয়েছে।',
        location: 'দিনাজপুর সদর ভূমি অফিস',
        isAnonymous: true,
        complainantName: 'বেনামী (গোপন)',
        complainantPhone: '',
        status: 'in_progress',
        agreeVotes: 42,
        disagreeVotes: 1,
        adminNotes: 'জেলা দুর্নীতি প্রতিরোধ শাখা এবং এসি ল্যান্ড মহোদয়কে ফাইল তদন্তের নির্দেশ দেয়া হয়েছে।',
        createdAt: new Date(Date.now() - 1 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'cmp_1006',
        trackingCode: 'CMP-2026-8820',
        title: 'বাহাদুর বাজার ও গুড়হাটি মোড়ে অবৈধ চাঁদা আদায়',
        category: 'চাঁদাবাজি',
        description: 'বাহাদুর বাজারে আগত পণ্যবাহী ট্রাক ও ক্ষুদ্র ব্যবসায়ীদের কাছ থেকে কতিপয় স্থানীয় ব্যক্তি রসিদ ছাড়া দৈনিক ২০০-৫০০ টাকা জোরপূর্বক চাঁদা আদায় করছে।',
        location: 'ওয়ার্ড নং ২, বাহাদুর বাজার',
        isAnonymous: true,
        complainantName: 'বেনামী (গোপন)',
        complainantPhone: '',
        status: 'pending',
        agreeVotes: 38,
        disagreeVotes: 2,
        adminNotes: '',
        createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'cmp_1007',
        trackingCode: 'CMP-2026-7612',
        title: 'রেলওয়ে স্টেশন সংলগ্ন ঝোপঝাড়ে মাদকের আড্ডা ও বেচাকেনা',
        category: 'মাদক',
        description: 'সন্ধ্যা নামলেই রেলওয়ে ওভারব্রিজের নিচে ও পেছনের গলিতে মাদকসেবীদের জমজমাট আড্ডা বসে। এলাকার সাধারণ পথচারী ও শিক্ষার্থীরা নিরাপত্তাহীনতায় ভুগছে।',
        location: 'ওয়ার্ড নং ৬, রেলওয়ে স্টেশন এলাকা',
        isAnonymous: true,
        complainantName: 'বেনামী (গোপন)',
        complainantPhone: '',
        status: 'in_progress',
        agreeVotes: 56,
        disagreeVotes: 0,
        adminNotes: 'জেলা পুলিশ ও ডিবির সমন্বয়ে অভিযান পরিচালনার প্রস্তুতি নেওয়া হচ্ছে।',
        createdAt: new Date(Date.now() - 1 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'cmp_1008',
        trackingCode: 'CMP-2026-4491',
        title: 'পৌর পার্কের সামনে হকারদের কারণে পথচারী চলাচলে বাধা',
        category: 'সাধারণ',
        description: 'পৌর শিশু পার্কের সামনের প্রধান ফুটপাত দখল করে স্থায়ী দোকান বসানোয় সাধারণ মানুষকে বাধ্য হয়ে মূল রাস্তায় ঝুঁকিপূর্ণভাবে হাঁটতে হচ্ছে।',
        location: 'ওয়ার্ড নং ১, শিশু পার্ক মোড়',
        isAnonymous: false,
        complainantName: 'রফিকুল ইসলাম',
        complainantPhone: '01711-223344',
        status: 'resolved',
        agreeVotes: 29,
        disagreeVotes: 3,
        adminNotes: 'পৌর উচ্ছেদ অভিযান টিম কর্তৃক ফুটপাত দখলমুক্ত করা হয়েছে।',
        createdAt: new Date(Date.now() - 4 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    }
];

const normalizeDoc = (doc) => {
    if (!doc) return doc;
    const isAnon = doc.isAnonymous !== undefined ? Boolean(doc.isAnonymous) : true;
    return {
        ...doc,
        id: doc._id || doc.id,
        trackingCode: doc.trackingCode || `CMP-${Date.now().toString().slice(-6)}`,
        title: doc.title || 'অভিযোগ',
        category: doc.category || 'অন্যান্য',
        description: doc.description || '',
        location: doc.location || 'দিনাজপুর সদর',
        isAnonymous: isAnon,
        complainantName: isAnon ? 'বেনামী (গোপন রাখা হয়েছে)' : (doc.complainantName || 'আবেদনকারী'),
        complainantPhone: isAnon ? '' : (doc.complainantPhone || ''),
        status: doc.status || 'pending',
        agreeVotes: typeof doc.agreeVotes === 'number' ? doc.agreeVotes : 0,
        disagreeVotes: typeof doc.disagreeVotes === 'number' ? doc.disagreeVotes : 0,
        adminNotes: doc.adminNotes || '',
        createdAt: doc.createdAt || new Date().toISOString()
    };
};

export const getAllComplaintsService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        let filtered = [...initialComplaints];
        if (query.category && query.category !== 'সকল') {
            filtered = filtered.filter(item => item.category.includes(query.category));
        }
        if (query.status && query.status !== 'all') {
            filtered = filtered.filter(item => item.status === query.status);
        }
        if (query.search) {
            const q = query.search.toLowerCase();
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(q) ||
                item.location.toLowerCase().includes(q) ||
                item.description.toLowerCase().includes(q) ||
                item.trackingCode.toLowerCase().includes(q)
            );
        }
        return filtered.map(normalizeDoc);
    }

    try {
        const collection = db.collection('complaints');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialComplaints);
        }

        let filter = {};
        if (query.category && query.category !== 'সকল') {
            filter.category = { $regex: query.category, $options: 'i' };
        }
        if (query.status && query.status !== 'all') {
            filter.status = query.status;
        }
        if (query.search) {
            filter.$or = [
                { title: { $regex: query.search, $options: 'i' } },
                { location: { $regex: query.search, $options: 'i' } },
                { description: { $regex: query.search, $options: 'i' } },
                { trackingCode: { $regex: query.search, $options: 'i' } }
            ];
        }

        const rawDocs = await collection.find(filter).sort({ createdAt: -1 }).toArray();
        return rawDocs.map(normalizeDoc);
    } catch (err) {
        return initialComplaints.map(normalizeDoc);
    }
};

export const createComplaintService = async (data) => {
    const db = getDB();
    const isAnon = Boolean(data.isAnonymous);
    const trackingCode = `CMP-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    const newItem = {
        _id: 'cmp_' + Date.now(),
        trackingCode,
        title: data.title,
        category: data.category || 'অন্যান্য',
        description: data.description,
        location: data.location,
        isAnonymous: isAnon,
        complainantName: isAnon ? 'বেনামী (গোপন রাখা হয়েছে)' : data.complainantName,
        complainantPhone: isAnon ? '' : data.complainantPhone,
        status: 'pending',
        agreeVotes: 1, // Author defaults to agreeing
        disagreeVotes: 0,
        adminNotes: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialComplaints.unshift(newItem);
        return normalizeDoc(newItem);
    }

    const collection = db.collection('complaints');
    await collection.insertOne(newItem);
    return normalizeDoc(newItem);
};

export const voteComplaintService = async (id, voteType, previousVote = null) => {
    const db = getDB();
    const incObj = {};

    if (voteType === 'agree') {
        incObj.agreeVotes = 1;
        if (previousVote === 'disagree') incObj.disagreeVotes = -1;
    } else if (voteType === 'disagree') {
        incObj.disagreeVotes = 1;
        if (previousVote === 'agree') incObj.agreeVotes = -1;
    }

    if (!db) {
        const index = initialComplaints.findIndex(item => item._id === id || item.id === id);
        if (index !== -1) {
            const item = initialComplaints[index];
            item.agreeVotes = Math.max(0, (item.agreeVotes || 0) + (incObj.agreeVotes || 0));
            item.disagreeVotes = Math.max(0, (item.disagreeVotes || 0) + (incObj.disagreeVotes || 0));
            item.updatedAt = new Date().toISOString();
            return normalizeDoc(item);
        }
        return null;
    }

    const collection = db.collection('complaints');
    await collection.updateOne({ _id: id }, { $inc: incObj, $set: { updatedAt: new Date().toISOString() } });
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const updateComplaintStatusService = async (id, status, adminNotes = '') => {
    const db = getDB();
    const updatedFields = { status, adminNotes, updatedAt: new Date().toISOString() };

    if (!db) {
        const index = initialComplaints.findIndex(item => item._id === id || item.id === id);
        if (index !== -1) {
            initialComplaints[index] = { ...initialComplaints[index], ...updatedFields };
            return normalizeDoc(initialComplaints[index]);
        }
        return null;
    }

    const collection = db.collection('complaints');
    await collection.updateOne({ _id: id }, { $set: updatedFields });
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const deleteComplaintService = async (id) => {
    const db = getDB();
    if (!db) {
        initialComplaints = initialComplaints.filter(item => item._id !== id && item.id !== id);
        return true;
    }
    const collection = db.collection('complaints');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
