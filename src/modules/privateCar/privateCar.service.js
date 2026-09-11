import mongoose from 'mongoose';
import PrivateCar from './privateCar.model.js';

export const initialPrivateCarData = [
    {
        _id: 'car-101',
        vehicle_name: 'দিনাজপুর সিটি রেন্ট এ কার - টয়োটা অ্যালিয়ন',
        brand: 'Toyota',
        model: 'Allion A15 Limited',
        registration_no: 'দিনাজপুর-গ ১২-৩৪৫৬',
        car_type: 'সেডান (Sedan)',
        with_driver: true,
        driver_name: 'মো: কামরুল হাসান',
        driver_contact: '01711-445566',
        rent_per_day: 3500,
        rent_per_hour: 400,
        rent_per_km: 25,
        advance_amount: 500,
        fuel_included: false,
        address: 'মডেল থানা মোড়, কালীতলা, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        district: 'দিনাজপুর',
        latitude: 25.6279,
        longitude: 88.6332,
        contact_number: '01711-445566',
        photo: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800',
        description: 'এসি প্রাইভেট কার। বিয়ে, পারিবারিক ভ্রমণ, অফিশিয়াল ট্যুর ও দিনাজপুর থেকে ঢাকা-রংপুর যাতায়াতের জন্য দক্ষ ড্রাইভারসহ সার্বক্ষণিক ভাড়া পাওয়া যায়।',
        subcategory: 'সেডান (Sedan)',
        serviceType: 'সেডান (Sedan)',
        rating: 4.9,
        reviewCount: 112,
        isApproved: true,
    },
    {
        _id: 'car-102',
        vehicle_name: 'উত্তরবঙ্গ লাক্সারি রেন্টাল - টয়োটা এক্স করোল্লা',
        brand: 'Toyota',
        model: 'Corolla X Special Edition',
        registration_no: 'দিনাজপুর-গ ১০-৮৮৯৯',
        car_type: 'সেডান (Sedan)',
        with_driver: true,
        driver_name: 'মো: শরিফুল ইসলাম',
        driver_contact: '01712-556677',
        rent_per_day: 3000,
        rent_per_hour: 350,
        rent_per_km: 22,
        advance_amount: 500,
        fuel_included: false,
        address: 'বাসস্ট্যান্ড গোলচত্বর, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        district: 'দিনাজপুর',
        latitude: 25.6245,
        longitude: 88.6385,
        contact_number: '01712-556677',
        photo: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800',
        description: 'পরিচ্ছন্ন এসি সেডান কার। অভিজ্ঞ ড্রাইভার দ্বারা চালিত, দূরপাল্লার ট্রিপ ও শহরের ভেতরে চলাচলের জন্য নির্ভরযোগ্য সমাধান।',
        subcategory: 'সেডান (Sedan)',
        serviceType: 'সেডান (Sedan)',
        rating: 4.8,
        reviewCount: 84,
        isApproved: true,
    },
    {
        _id: 'car-103',
        vehicle_name: 'দিনাজপুর রয়েল কার ড্রাইভ - টয়োটা প্রিমিও',
        brand: 'Toyota',
        model: 'Premio F-EX Package',
        registration_no: 'দিনাজপুর-গ ১৫-১১২২',
        car_type: 'প্রিমিয়াম কার',
        with_driver: true,
        driver_name: 'মো: জহুরুল আলম',
        driver_contact: '01713-667788',
        rent_per_day: 4200,
        rent_per_hour: 500,
        rent_per_km: 30,
        advance_amount: 1000,
        fuel_included: false,
        address: 'সুইহারী চালিতাতলা, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        district: 'দিনাজপুর',
        latitude: 25.6291,
        longitude: 88.6412,
        contact_number: '01713-667788',
        photo: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=800',
        description: 'ভআইপি ট্যুর ও ওয়েডিং কারের জন্য প্রিমিয়াম ডেকোরেট সুবিধা সমৃদ্ধ টয়োটা প্রিমিও কার। সম্পূর্ণ আরামদায়ক সিটিং ও এসি।',
        subcategory: 'প্রিমিয়াম কার',
        serviceType: 'প্রিমিয়াম কার',
        rating: 5.0,
        reviewCount: 65,
        isApproved: true,
    },
    {
        _id: 'car-104',
        vehicle_name: 'বীরগঞ্জ ফ্যামিলি ট্রাভেলস - টয়োটা এক্সিও',
        brand: 'Toyota',
        model: 'Axio X Grade Soft Touch',
        registration_no: 'দিনাজপুর-গ ১৩-৭৭৮৮',
        car_type: 'সেডান (Sedan)',
        with_driver: true,
        driver_name: 'মো: বাবুল আক্তার',
        driver_contact: '01714-778899',
        rent_per_day: 3200,
        rent_per_hour: 380,
        rent_per_km: 24,
        advance_amount: 500,
        fuel_included: false,
        address: 'বীরগঞ্জ পুরাতন বাসস্ট্যান্ড, বীরগঞ্জ, দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        district: 'দিনাজপুর',
        latitude: 25.8562,
        longitude: 88.6621,
        contact_number: '01714-778899',
        photo: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800',
        description: 'বীরগঞ্জ, কাহারোল ও সৈয়দপুর এয়ারপোর্ট ড্রপ অ্যান্ড পিকআপ সেবার জন্য বিশ্বস্ত এসি এক্সিও কার।',
        subcategory: 'সেডান (Sedan)',
        serviceType: 'সেডান (Sedan)',
        rating: 4.7,
        reviewCount: 52,
        isApproved: true,
    },
    {
        _id: 'car-105',
        vehicle_name: 'পার্বতীপুর সাশ্রয়ী কার রেন্টাল - প্রডো এসইউভি',
        brand: 'Toyota',
        model: 'Land Cruiser Prado 4WD',
        registration_no: 'দিনাজপুর-গ ১৪-৯৯০০',
        car_type: 'এসইউভি (SUV)',
        with_driver: true,
        driver_name: 'মো: আশরাফুল ইসলাম',
        driver_contact: '01715-889900',
        rent_per_day: 7500,
        rent_per_hour: 900,
        rent_per_km: 45,
        advance_amount: 2000,
        fuel_included: false,
        address: 'রেলওয়ে জংশন রোড, পার্বতীপুর, দিনাজপুর',
        upazila: 'পার্বতীপুর',
        district: 'দিনাজপুর',
        latitude: 25.6601,
        longitude: 88.9168,
        contact_number: '01715-889900',
        photo: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
        description: 'অফ-রোড ও ভিআইপি প্রটোকল ট্রাভেলের জন্য ৪ হুইল ড্রাইভ লাক্সারি এসইউভি জিওন সেবা।',
        subcategory: 'এসইউভি (SUV)',
        serviceType: 'এসইউভি (SUV)',
        rating: 4.9,
        reviewCount: 41,
        isApproved: true,
    },
    {
        _id: 'car-106',
        vehicle_name: 'ফুলবাড়ী ফ্যামিলি ট্যুরস - নোয়া মাইক্রোবাস',
        brand: 'Toyota',
        model: 'Noah Super GL 7 Seater',
        registration_no: 'দিনাজপুর-গ ১৬-৫৫৬৬',
        car_type: 'মাইক্রোবাস (Noah)',
        with_driver: true,
        driver_name: 'মো: রোকনুজ্জামান',
        driver_contact: '01716-990011',
        rent_per_day: 4500,
        rent_per_hour: 550,
        rent_per_km: 32,
        advance_amount: 1000,
        fuel_included: false,
        address: 'পৌরসভা মোড়, ফুলবাড়ী, দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        district: 'দিনাজপুর',
        latitude: 25.5147,
        longitude: 88.8824,
        contact_number: '01716-990011',
        photo: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
        description: '৭-৮ জনের বড় পরিবারের দূরপাল্লার ভ্রমণের জন্য প্রশস্ত ডুয়েল এসি নোয়া মাইক্রোবাস।',
        subcategory: 'মাইক্রোবাস (Noah)',
        serviceType: 'মাইক্রোবাস (Noah)',
        rating: 4.8,
        reviewCount: 78,
        isApproved: true,
    }
];

export const getAllPrivateCarService = async (query = {}) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const { search, upazila, subcategory } = query;
            let filter = { isApproved: true };

            if (upazila && upazila !== 'সব উপজেলা' && upazila !== 'সকল উপজেলা') {
                filter.upazila = upazila;
            }

            if (subcategory && subcategory !== 'সকল প্রাইভেট কার' && subcategory !== 'সকল') {
                filter.$or = [
                    { subcategory: subcategory },
                    { car_type: subcategory }
                ];
            }

            if (search) {
                const searchRegex = new RegExp(search, 'i');
                filter.$or = [
                    { vehicle_name: searchRegex },
                    { brand: searchRegex },
                    { model: searchRegex },
                    { registration_no: searchRegex },
                    { driver_name: searchRegex },
                    { address: searchRegex },
                    { description: searchRegex },
                ];
            }

            const data = await PrivateCar.find(filter).sort({ rating: -1 });
            if (data && data.length > 0) {
                return data;
            }
        }
    } catch (error) {
        console.warn('MongoDB query failed for PrivateCar, falling back to initial seed data:', error.message);
    }

    let filtered = [...initialPrivateCarData];
    if (query.upazila && query.upazila !== 'সব উপজেলা' && query.upazila !== 'সকল উপজেলা') {
        filtered = filtered.filter((item) => item.upazila === query.upazila);
    }
    if (query.subcategory && query.subcategory !== 'সকল প্রাইভেট কার' && query.subcategory !== 'সকল') {
        filtered = filtered.filter((item) => item.subcategory === query.subcategory || item.car_type === query.subcategory);
    }
    if (query.search) {
        const s = query.search.toLowerCase();
        filtered = filtered.filter(
            (item) =>
                item.vehicle_name.toLowerCase().includes(s) ||
                item.brand.toLowerCase().includes(s) ||
                item.model.toLowerCase().includes(s) ||
                item.driver_name.toLowerCase().includes(s) ||
                item.address.toLowerCase().includes(s)
        );
    }
    return filtered;
};

export const getPrivateCarByIdService = async (id) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const item = await PrivateCar.findById(id);
            if (item) return item;
        }
    } catch (error) {
        console.warn(`MongoDB getById failed for PrivateCar ${id}:`, error.message);
    }
    return initialPrivateCarData.find((item) => item._id === id) || null;
};

export const createPrivateCarService = async (data) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const newItem = new PrivateCar(data);
            return await newItem.save();
        }
    } catch (error) {
        console.warn('MongoDB create failed for PrivateCar:', error.message);
    }
    const newItem = {
        _id: 'car-' + Date.now(),
        ...data,
        rating: 5.0,
        reviewCount: 1,
        isApproved: true,
        createdAt: new Date(),
    };
    initialPrivateCarData.unshift(newItem);
    return newItem;
};

export const updatePrivateCarService = async (id, data) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const updated = await PrivateCar.findByIdAndUpdate(id, data, { new: true });
            if (updated) return updated;
        }
    } catch (error) {
        console.warn(`MongoDB update failed for PrivateCar ${id}:`, error.message);
    }
    const index = initialPrivateCarData.findIndex((item) => item._id === id);
    if (index !== -1) {
        initialPrivateCarData[index] = { ...initialPrivateCarData[index], ...data };
        return initialPrivateCarData[index];
    }
    return null;
};

export const deletePrivateCarService = async (id) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const deleted = await PrivateCar.findByIdAndDelete(id);
            if (deleted) return deleted;
        }
    } catch (error) {
        console.warn(`MongoDB delete failed for PrivateCar ${id}:`, error.message);
    }
    const index = initialPrivateCarData.findIndex((item) => item._id === id);
    if (index !== -1) {
        const deleted = initialPrivateCarData[index];
        initialPrivateCarData.splice(index, 1);
        return deleted;
    }
    return null;
};
