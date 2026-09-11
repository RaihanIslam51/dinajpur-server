import mongoose from 'mongoose';
import School from './school.model.js';

export const initialSchoolData = [
    {
        _id: 'sch-101',
        name: 'দিনাজপুর জিলা স্কুল (Dinajpur Zilla School)',
        address: 'জিলা স্কুল রোড, কালীতলা, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        latitude: 25.6279,
        longitude: 88.6332,
        established_year: '1854',
        head_name: 'মো: আব্দুর রাজ্জাক',
        head_title: 'প্রধান শিক্ষক',
        contact_number: '01711-224455',
        email: 'info@dinajpurzillaschool.edu.bd',
        website: 'https://dinajpurzillaschool.edu.bd',
        logo: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=300',
        cover_image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
        description: 'উত্তরবঙ্গের ঐতিহ্যবাহী ও প্রাচীনতম সরকারি বালক উচ্চ বিদ্যালয়। আধুনিক বিজ্ঞান ল্যাব, সুবিশাল খেলার মাঠ, কম্পিউটার ল্যাব ও সেরা এসএসসি ফলাফলের জন্য প্রশংসিত।',
        subcategory: 'স্কুল',
        rating: 4.9,
        reviewCount: 156,
        isApproved: true,
    },
    {
        _id: 'sch-102',
        name: 'দিনাজপুর সরকারি বালিকা উচ্চ বিদ্যালয় (Govt Girls High School)',
        address: 'হাসপাতাল রোড, সুইহারী, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        latitude: 25.6245,
        longitude: 88.6385,
        established_year: '1869',
        head_name: 'মোসাম্মাত রেহানা পারভীন',
        head_title: 'প্রধান শিক্ষিকা',
        contact_number: '01712-335566',
        email: 'contact@dinajpurgovtgirlsschool.edu.bd',
        website: 'https://dinajpurgovtgirlsschool.edu.bd',
        logo: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=300',
        cover_image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
        description: 'দিনাজপুর জেলার শীর্ষস্থানীয় সরকারি বালিকা বিদ্যাপীঠ। সমৃদ্ধ লাইব্রেরি, বিজ্ঞানাগার ও সহ-শিক্ষা কার্যক্রমে অগ্রগামী।',
        subcategory: 'স্কুল',
        rating: 4.9,
        reviewCount: 142,
        isApproved: true,
    },
    {
        _id: 'sch-103',
        name: 'সেন্ট ফিলিপস হাই স্কুল অ্যান্ড কলেজ (St. Philip\'s High School)',
        address: 'কেবি রোড, সুইহারী, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        latitude: 25.6291,
        longitude: 88.6412,
        established_year: '1961',
        head_name: 'ব্রাদার আলবার্ট রত্ন সিএসসি',
        head_title: 'অধ্যক্ষ/পরিচালক',
        contact_number: '01713-446677',
        email: 'principal@stphilipsbd.org',
        website: 'https://stphilipsbd.org',
        logo: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=300&q=80',
        cover_image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
        description: 'ক্যাথলিক শিক্ষা ট্রাস্ট পরিচালিত দিনাজপুর শহরের অন্যতম সেরা ইংরেজি ও বাংলা মাধ্যম শিক্ষাপ্রতিষ্ঠান। শৃঙ্খলাপরায়ণ পরিবেশ ও চমৎকার বোর্ড রেজাল্ট।',
        subcategory: 'স্কুল',
        rating: 4.8,
        reviewCount: 128,
        isApproved: true,
    },
    {
        _id: 'sch-104',
        name: 'দিনাজপুর কালেক্টরেট স্কুল অ্যান্ড কলেজ',
        address: 'জেলা প্রশাসক কার্যালয় সংলগ্ন, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        latitude: 25.6268,
        longitude: 88.6360,
        established_year: '2008',
        head_name: 'মো: জহুরুল ইসলাম',
        head_title: 'অধ্যক্ষ',
        contact_number: '01714-557788',
        email: 'dcsk.dinajpur@gmail.com',
        website: 'https://dcskdinajpur.edu.bd',
        logo: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=300&q=80',
        cover_image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
        description: 'জেলা প্রশাসন পরিচালিত আধুনিক মাল্টিমিডিয়া ক্লাসরুম ও বিশ্বস্ত পরিবেশ সমৃদ্ধ ডিজিটাল বিদ্যাপীঠ।',
        subcategory: 'স্কুল',
        rating: 4.7,
        reviewCount: 98,
        isApproved: true,
    },
    {
        _id: 'sch-105',
        name: 'বীরগঞ্জ সরকারি পাইলট সরকারি উচ্চ বিদ্যালয়',
        address: 'বীরগঞ্জ পৌরসভা, বীরগঞ্জ, দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        latitude: 25.8562,
        longitude: 88.6621,
        established_year: '1962',
        head_name: 'মো: নজরুল ইসলাম',
        head_title: 'প্রধান শিক্ষক',
        contact_number: '01715-668899',
        email: 'birganjgovths@gmail.com',
        website: 'https://birganjgovths.edu.bd',
        logo: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=300&q=80',
        cover_image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
        description: 'বীরগঞ্জ উপজেলার প্রধান সরকারি মডেল মাধ্যমিক বিদ্যালয়। বিজ্ঞান ও মানবিক শাখায় আধুনিক ল্যাব সুবিধা।',
        subcategory: 'স্কুল',
        rating: 4.6,
        reviewCount: 84,
        isApproved: true,
    },
    {
        _id: 'sch-106',
        name: 'পার্বতীপুর সরকারি রেলওয়ে হাই স্কুল',
        address: 'রেলওয়ে জংশন মোড়, পার্বতীপুর, দিনাজপুর',
        upazila: 'পার্বতীপুর',
        latitude: 25.6601,
        longitude: 88.9168,
        established_year: '1944',
        head_name: 'মো: তৌহিদুল আলম',
        head_title: 'প্রধান শিক্ষক',
        contact_number: '01716-779900',
        email: 'parbatipurrhs@yahoo.com',
        website: 'https://parbatipurrhs.edu.bd',
        logo: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=300&q=80',
        cover_image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
        description: 'পার্বতীপুর জংশন এলাকার শতবর্ষী ঐতিহাসিক রেলওয়ে সরকারি উচ্চ বিদ্যালয়। সাংস্কৃতিক ও ক্রীড়া প্রতিযোগিতায় সুখ্যাত।',
        subcategory: 'স্কুল',
        rating: 4.8,
        reviewCount: 92,
        isApproved: true,
    }
];

export const getAllSchoolService = async (query = {}) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const { search, upazila, subcategory } = query;
            let filter = { isApproved: true };

            if (upazila && upazila !== 'সব উপজেলা' && upazila !== 'সকল উপজেলা') {
                filter.upazila = upazila;
            }

            if (subcategory && subcategory !== 'সকল প্রতিষ্ঠান' && subcategory !== 'সকল') {
                filter.subcategory = subcategory;
            }

            if (search) {
                const searchRegex = new RegExp(search, 'i');
                filter.$or = [
                    { name: searchRegex },
                    { head_name: searchRegex },
                    { address: searchRegex },
                    { description: searchRegex },
                ];
            }

            const data = await School.find(filter).sort({ rating: -1 });
            if (data && data.length > 0) {
                return data;
            }
        }
    } catch (error) {
        console.warn('MongoDB query failed for School, falling back to initial seed data:', error.message);
    }

    let filtered = [...initialSchoolData];
    if (query.upazila && query.upazila !== 'সব উপজেলা' && query.upazila !== 'সকল উপজেলা') {
        filtered = filtered.filter((item) => item.upazila === query.upazila);
    }
    if (query.subcategory && query.subcategory !== 'সকল প্রতিষ্ঠান' && query.subcategory !== 'সকল') {
        filtered = filtered.filter((item) => item.subcategory === query.subcategory);
    }
    if (query.search) {
        const s = query.search.toLowerCase();
        filtered = filtered.filter(
            (item) =>
                item.name.toLowerCase().includes(s) ||
                item.head_name.toLowerCase().includes(s) ||
                item.address.toLowerCase().includes(s)
        );
    }
    return filtered;
};

export const getSchoolByIdService = async (id) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const item = await School.findById(id);
            if (item) return item;
        }
    } catch (error) {
        console.warn(`MongoDB getById failed for School ${id}:`, error.message);
    }
    return initialSchoolData.find((item) => item._id === id) || null;
};

export const createSchoolService = async (data) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const newItem = new School(data);
            return await newItem.save();
        }
    } catch (error) {
        console.warn('MongoDB create failed for School:', error.message);
    }
    const newItem = {
        _id: 'sch-' + Date.now(),
        ...data,
        rating: 5.0,
        reviewCount: 1,
        isApproved: true,
        createdAt: new Date(),
    };
    initialSchoolData.unshift(newItem);
    return newItem;
};

export const updateSchoolService = async (id, data) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const updated = await School.findByIdAndUpdate(id, data, { new: true });
            if (updated) return updated;
        }
    } catch (error) {
        console.warn(`MongoDB update failed for School ${id}:`, error.message);
    }
    const index = initialSchoolData.findIndex((item) => item._id === id);
    if (index !== -1) {
        initialSchoolData[index] = { ...initialSchoolData[index], ...data };
        return initialSchoolData[index];
    }
    return null;
};

export const deleteSchoolService = async (id) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const deleted = await School.findByIdAndDelete(id);
            if (deleted) return deleted;
        }
    } catch (error) {
        console.warn(`MongoDB delete failed for School ${id}:`, error.message);
    }
    const index = initialSchoolData.findIndex((item) => item._id === id);
    if (index !== -1) {
        const deleted = initialSchoolData[index];
        initialSchoolData.splice(index, 1);
        return deleted;
    }
    return null;
};
