/**
 * Teacher (শিক্ষক / টিউটর) Service Layer with MongoDB support & field normalization
 */
import { getDB } from '../../database/db.js';

let initialTeachers = [
    {
        _id: 'teach_001',
        name: 'তানভীর আহমেদ (Tanvir Ahmed)',
        profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
        gender: 'পুরুষ',
        subject: 'গণিত ও পদার্থবিজ্ঞান (Math & Physics)',
        qualification: ['বিএসসি (সিএসই), এইচএসটিইউ (HSTU)', 'এইচএসসি - জিপিএ ৫.০০'],
        institution: 'হাজী দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (HSTU)',
        experience: '৪ বছর+',
        specialization: 'এসএসসি ও এইচএসসি উচ্চতর গণিত এবং পদার্থবিজ্ঞান স্পেশাল প্রস্তুতি',
        teachingLevel: ['৯ম-১০ম শ্রেণি (SSC)', 'একাদশ-দ্বাদশ শ্রেণি (HSC)', 'বিশ্ববিদ্যালয় ভর্তি'],
        phone: '01712-887766',
        email: 'tanvir.hstu@gmail.com',
        address: 'উপশহর ৪ নম্বর ব্লক, দিনাজপুর সদর',
        area: 'উপশহর',
        onlineTeaching: true,
        homeTutoring: true,
        availableDays: ['সপ্তাহে ৩ দিন', 'সপ্তাহে ৪ দিন'],
        availableTime: 'বিকাল ৪:০০ PM - রাত ৯:০০ PM',
        monthlyFee: '৳৪০০০ - ৳৬০০০ / মাস',
        perClassFee: '৳৫০০ / ক্লাস',
        rating: 4.8,
        totalReviews: 42,
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'teach_002',
        name: 'নুসরাত জাহান (Nusrat Jahan)',
        profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
        gender: 'নারী',
        subject: 'ইংরেজি ও জীববিজ্ঞান (English & Biology)',
        qualification: ['এমএ (ইংরেজি), দিনাজপুর সরকারি কলেজ', 'বিএ (অনার্স) ইংরেজি'],
        institution: 'দিনাজপুর সরকারি কলেজ',
        experience: '৫ বছর+',
        specialization: 'ইংরেজি ব্যাকরণ, স্পোকেন ও বায়োলজি সলভ ক্লাস',
        teachingLevel: ['৬ষ্ঠ-৮ম শ্রেণি', '৯ম-১০ম শ্রেণি (SSC)', 'একাদশ-দ্বাদশ শ্রেণি (HSC)'],
        phone: '01733-556677',
        email: 'nusrat.eng@gmail.com',
        address: 'সুইহারী মোড়, দিনাজপুর সদর',
        area: 'সুইহারী',
        onlineTeaching: true,
        homeTutoring: true,
        availableDays: ['সপ্তাহে ৩ দিন'],
        availableTime: 'সকাল ১০:০০ AM - দুপুর ১:০০ PM / বিকাল ৩:০০ PM - ৬:০০ PM',
        monthlyFee: '৳৩০০০ - ৳৪৫০০ / মাস',
        perClassFee: '৳৪০০ / ক্লাস',
        rating: 4.9,
        totalReviews: 38,
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    },
    {
        _id: 'teach_003',
        name: 'মো: আরিফুল ইসলাম (Md. Ariful Islam)',
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
        gender: 'পুরুষ',
        subject: 'আইসিটি ও রসায়ন (ICT & Chemistry)',
        qualification: ['বিএসসি ইন ইইই, এইচএসটিইউ', 'আইসিটি অলিম্পিয়াড বিজয়ী'],
        institution: 'এইচএসটিইউ (HSTU)',
        experience: '৩ বছর',
        specialization: 'এইচএসসি আইসিটি প্র্যাকটিক্যাল ও কেমিস্ট্রি রিঅ্যাকশন কোর্স',
        teachingLevel: ['৯ম-১০ম শ্রেণি (SSC)', 'একাদশ-দ্বাদশ শ্রেণি (HSC)'],
        phone: '01711-990011',
        email: 'arif.ict@gmail.com',
        address: 'কেবিএম কলেজ রোড, সুইহারী, দিনাজপুর',
        area: 'কেবিএম মোড়',
        onlineTeaching: true,
        homeTutoring: false,
        availableDays: ['সপ্তাহে ৩ দিন'],
        availableTime: 'বিকাল ৫:০০ PM - রাত ৮:৩০ PM',
        monthlyFee: '৳২৫০০ - ৳৪০০০ / মাস',
        perClassFee: '৳৩৫০ / ক্লাস',
        rating: 4.6,
        totalReviews: 24,
        isVerified: true,
        status: 'active',
        createdAt: new Date().toISOString()
    }
];

const normalizeDoc = (doc) => {
    if (!doc) return doc;

    const qualArr = Array.isArray(doc.qualification) ? doc.qualification : 
        (typeof doc.qualification === 'string' ? [doc.qualification] : ['বিএসসি']);

    const teachLvlArr = Array.isArray(doc.teachingLevel) ? doc.teachingLevel : 
        (typeof doc.teachingLevel === 'string' ? [doc.teachingLevel] : ['Class 9-10']);

    const daysArr = Array.isArray(doc.availableDays) ? doc.availableDays : ['সপ্তাহে ৩ দিন'];

    return {
        ...doc,
        name: doc.name || doc.title || 'শিক্ষক / টিউটর',
        profileImage: doc.profileImage || doc.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
        gender: doc.gender || 'পুরুষ',
        subject: doc.subject || doc.category || 'সাধারণ শিক্ষা',
        qualification: qualArr,
        institution: doc.institution || 'বিশ্ববিদ্যালয় / কলেজ',
        experience: doc.experience || '১ বছর+',
        specialization: doc.specialization || 'বিষয়ভিত্তিক প্রাইভেট কোচিং',
        teachingLevel: teachLvlArr,
        phone: doc.phone || doc.contactPhone || '01700-000000',
        email: doc.email || '',
        address: doc.address || doc.location || 'দিনাজপুর',
        area: doc.area || doc.location || 'দিনাজপুর সদর',
        onlineTeaching: doc.onlineTeaching !== undefined ? Boolean(doc.onlineTeaching) : true,
        homeTutoring: doc.homeTutoring !== undefined ? Boolean(doc.homeTutoring) : true,
        availableDays: daysArr,
        availableTime: doc.availableTime || 'বিকাল ৪:০০ PM - ৮:০০ PM',
        monthlyFee: doc.monthlyFee || '৳৩০০০ - ৳৫০০০',
        perClassFee: doc.perClassFee || '৳৪০০',
        rating: Number(doc.rating) || 4.7,
        totalReviews: Number(doc.totalReviews) || 25,
        isVerified: doc.isVerified !== undefined ? Boolean(doc.isVerified) : true,
        status: doc.status || 'active'
    };
};

export const getAllTeachersService = async (query = {}) => {
    const db = getDB();
    if (!db) {
        let filtered = [...initialTeachers];
        if (query.subject) {
            filtered = filtered.filter(item => item.subject.toLowerCase().includes(query.subject.toLowerCase()));
        }
        if (query.search) {
            const q = query.search.toLowerCase();
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(q) || 
                item.subject.toLowerCase().includes(q) || 
                item.area.toLowerCase().includes(q) || 
                item.institution.toLowerCase().includes(q)
            );
        }
        return filtered.map(normalizeDoc);
    }

    try {
        const collection = db.collection('teachers');
        const count = await collection.countDocuments();
        if (count === 0) {
            await collection.insertMany(initialTeachers);
        }

        let filter = {};
        if (query.subject) {
            filter.subject = { $regex: query.subject, $options: 'i' };
        }
        if (query.search) {
            filter.$or = [
                { name: { $regex: query.search, $options: 'i' } },
                { subject: { $regex: query.search, $options: 'i' } },
                { area: { $regex: query.search, $options: 'i' } },
                { institution: { $regex: query.search, $options: 'i' } }
            ];
        }

        const rawDocs = await collection.find(filter).sort({ createdAt: -1 }).toArray();
        return rawDocs.map(normalizeDoc);
    } catch (err) {
        return initialTeachers.map(normalizeDoc);
    }
};

export const getTeacherByIdService = async (id) => {
    const db = getDB();
    if (!db) {
        return normalizeDoc(initialTeachers.find(item => item._id === id) || null);
    }
    const collection = db.collection('teachers');
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const createTeacherService = async (data) => {
    const db = getDB();

    const qualArr = Array.isArray(data.qualification) ? data.qualification : 
        (typeof data.qualification === 'string' ? data.qualification.split('\n').map(s => s.trim()).filter(Boolean) : []);

    const teachLvlArr = Array.isArray(data.teachingLevel) ? data.teachingLevel : 
        (typeof data.teachingLevel === 'string' ? data.teachingLevel.split(',').map(s => s.trim()).filter(Boolean) : []);

    const daysArr = Array.isArray(data.availableDays) ? data.availableDays : 
        (typeof data.availableDays === 'string' ? data.availableDays.split(',').map(s => s.trim()).filter(Boolean) : []);

    const newItem = {
        _id: 'teach_' + Date.now(),
        name: data.name,
        profileImage: data.profileImage || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
        gender: data.gender || 'পুরুষ',
        subject: data.subject || 'সাধারণ বিষয়',
        qualification: qualArr,
        institution: data.institution || '',
        experience: data.experience || '১ বছর+',
        specialization: data.specialization || '',
        teachingLevel: teachLvlArr,
        phone: data.phone || '01700-000000',
        email: data.email || '',
        address: data.address || 'দিনাজপুর',
        area: data.area || 'দিনাজপুর সদর',
        onlineTeaching: Boolean(data.onlineTeaching),
        homeTutoring: Boolean(data.homeTutoring),
        availableDays: daysArr,
        availableTime: data.availableTime || 'বিকাল ৪:০০ PM - ৮:০০ PM',
        monthlyFee: data.monthlyFee || '৳৩০০০ - ৳৫০০০',
        perClassFee: data.perClassFee || '৳৪০০',
        rating: Number(data.rating) || 4.8,
        totalReviews: Number(data.totalReviews) || 10,
        isVerified: data.isVerified !== undefined ? Boolean(data.isVerified) : true,
        status: data.status || 'active',

        // Legacy compatibility
        title: data.name,
        contactPhone: data.phone,

        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (!db) {
        initialTeachers.unshift(newItem);
        return normalizeDoc(newItem);
    }

    const collection = db.collection('teachers');
    await collection.insertOne(newItem);
    return normalizeDoc(newItem);
};

export const updateTeacherService = async (id, data) => {
    const db = getDB();
    const updatedData = { ...data, updatedAt: new Date().toISOString() };

    if (!db) {
        const index = initialTeachers.findIndex(item => item._id === id);
        if (index !== -1) {
            initialTeachers[index] = { ...initialTeachers[index], ...updatedData };
            return normalizeDoc(initialTeachers[index]);
        }
        return null;
    }
    const collection = db.collection('teachers');
    await collection.updateOne({ _id: id }, { $set: updatedData });
    const doc = await collection.findOne({ _id: id });
    return normalizeDoc(doc);
};

export const deleteTeacherService = async (id) => {
    const db = getDB();
    if (!db) {
        initialTeachers = initialTeachers.filter(item => item._id !== id);
        return true;
    }
    const collection = db.collection('teachers');
    const res = await collection.deleteOne({ _id: id });
    return res.deletedCount > 0;
};
