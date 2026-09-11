/**
 * Notification Service Layer with MongoDB support & initial announcements fallback
 */
import { getDB } from '../../database/db.js';

let initialNotifications = [
    {
        _id: 'notif_1001',
        title: 'বিশেষ পরিবেশ ও বর্জ্য ব্যবস্থাপনা নির্দেশনা',
        message: 'পৌরসভার ১ ও ২ নং ওয়ার্ডে আগামীকাল পরিচ্ছন্নতা অভিযান ও বর্জ্য অপসারণ কার্যক্রম পরিচালিত হবে। নির্দিষ্ট স্থানে ময়লা ফেলার অনুরোধ করা হচ্ছে।',
        type: 'info',
        targetLink: '/municipal-services',
        targetAudience: 'all',
        createdBy: 'দিনাজপুর পৌরসভা',
        createdAt: new Date(Date.now() - 20 * 60000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'notif_1002',
        title: 'জরুরি আবহাওয়া ও কালবৈশাখী ঝড়ের সতর্কতা',
        message: 'দিনাজপুর জেলা জুড়ে আজ সন্ধ্যায় কালবৈশাখী ঝড় ও ভারী বৃষ্টির সম্ভাবনা রয়েছে। সম্মানিত নাগরিকদের নিরাপদ আশ্রয়ে থাকার পরামর্শ দেওয়া হচ্ছে।',
        type: 'urgent',
        targetLink: '',
        targetAudience: 'all',
        createdBy: 'জেলা প্রশাসন দিনাজপুর',
        createdAt: new Date(Date.now() - 2 * 3600000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'notif_1003',
        title: 'স্মার্ট সিটি নাগরিকে অনলাইন অভিযোগ সুবিধা চালু!',
        message: 'এখন থেকে আপনি সরাসরি শহর সংক্রান্ত যেকোনো সমস্যা বা অভিযোগ ছবিসহ জমা দিতে পারবেন এডমিন পোর্টালে।',
        type: 'update',
        targetLink: '/complaint',
        targetAudience: 'all',
        createdBy: 'স্মার্ট সিটি আইটি টিম',
        createdAt: new Date(Date.now() - 1 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: 'notif_1004',
        title: 'কন্ট্রোল রুম জরুরি ডায়াল সেবা ৯৯৯',
        message: 'যেকোনো জরুরি পুলিশি সহায়তা, ফায়ার সার্ভিস কিংবা এম্বুলেন্স সার্ভিসের জন্য ২৪/৭ বিনামূল্যে ৯৯৯ নম্বরে কল করুন।',
        type: 'warning',
        targetLink: '/police-stations',
        targetAudience: 'all',
        createdBy: 'জেলা পুলিশ কন্ট্রোল রুম',
        createdAt: new Date(Date.now() - 3 * 86400000).toISOString(),
        updatedAt: new Date().toISOString()
    }
];

const normalizeNotification = (doc) => {
    if (!doc) return doc;
    return {
        ...doc,
        id: doc._id || doc.id,
        title: doc.title || 'বিজ্ঞপ্তি',
        message: doc.message || '',
        type: doc.type || 'info',
        targetLink: doc.targetLink || '',
        targetAudience: doc.targetAudience || 'all',
        createdBy: doc.createdBy || 'স্মার্ট সিটি কর্তৃপক্ষ',
        createdAt: doc.createdAt || new Date().toISOString(),
        updatedAt: doc.updatedAt || new Date().toISOString()
    };
};

export const getAllNotificationsService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        let filtered = [...initialNotifications];
        if (query.type && query.type !== 'all') {
            filtered = filtered.filter(item => item.type === query.type);
        }
        if (query.search) {
            const q = query.search.toLowerCase();
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(q) ||
                item.message.toLowerCase().includes(q)
            );
        }
        return filtered.map(normalizeNotification);
    }

    try {
        const collection = db.collection('notifications');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialNotifications);
        }

        let filter = {};
        if (query.type && query.type !== 'all') {
            filter.type = query.type;
        }
        if (query.search) {
            filter.$or = [
                { title: { $regex: query.search, $options: 'i' } },
                { message: { $regex: query.search, $options: 'i' } }
            ];
        }

        const docs = await collection.find(filter).sort({ createdAt: -1 }).toArray();
        return docs.map(normalizeNotification);
    } catch (err) {
        return initialNotifications.map(normalizeNotification);
    }
};

export const createNotificationService = async (data) => {
    const db = getDB();
    const newItem = {
        _id: 'notif_' + Date.now(),
        title: data.title,
        message: data.message,
        type: data.type || 'info', // 'info', 'warning', 'urgent', 'update'
        targetLink: data.targetLink || '',
        targetAudience: data.targetAudience || 'all',
        createdBy: data.createdBy || 'এডমিন অ্যাডমিনিস্ট্রেটর',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialNotifications.unshift(newItem);
        return normalizeNotification(newItem);
    }

    const collection = db.collection('notifications');
    await collection.insertOne(newItem);
    return normalizeNotification(newItem);
};

export const deleteNotificationService = async (id) => {
    const db = getDB();
    if (!db) {
        initialNotifications = initialNotifications.filter(item => item._id !== id && item.id !== id);
        return true;
    }
    const collection = db.collection('notifications');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
