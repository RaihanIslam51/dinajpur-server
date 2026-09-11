import mongoose from 'mongoose';
import Ambulance from './ambulance.model.js';

export const initialAmbulanceData = [
    {
        _id: 'amb-101',
        vehicle_name: 'দিনাজপুর ২৫০ শয্যা জেনারেল হাসপাতাল আইসিইউ অ্যাম্বুলেন্স',
        brand: 'Toyota',
        model: 'HiAce High Roof ICU Ambulance',
        registration_no: 'দিনাজপুর-ছ ১১-২৪৫৬',
        with_driver: true,
        driver_name: 'মো: রফিকুল ইসলাম',
        driver_contact: '01711-889911',
        rent_per_day: 4500,
        rent_per_km: 35,
        rent_per_hour: 500,
        advance_amount: 1000,
        address: '২৫০ শয্যা জেনারেল হাসপাতাল প্রাঙ্গণ, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        district: 'দিনাজপুর',
        latitude: 25.6245,
        longitude: 88.6385,
        contact_number: '01711-889911',
        photo: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=800',
        description: '২৪ ঘণ্টা জরুরি সেবা। সম্পূর্ণ লাইফ সাপোর্ট ভেন্টিলেটর, অক্সিজেন সিলিন্ডার, কার্ডিয়াক মনিটর ও প্রশিক্ষণপ্রাপ্ত প্যারামেডিক স্টাফ সুবিধাসহ দিনাজপুরের শীর্ষ আইসিইউ অ্যাম্বুলেন্স।',
        subcategory: 'আইসিইউ অ্যাম্বুলেন্স',
        serviceType: 'আইসিইউ অ্যাম্বুলেন্স',
        rating: 4.9,
        reviewCount: 98,
        isApproved: true,
    },
    {
        _id: 'amb-102',
        vehicle_name: 'এম আব্দুর রহিম মেডিকেল কলেজ জরুরি এসি অ্যাম্বুলেন্স',
        brand: 'Toyota',
        model: 'LiteAce AC Patient Transport',
        registration_no: 'দিনাজপুর-ছ ১২-৫৫৮৯',
        with_driver: true,
        driver_name: 'মো: শফিকুল আলম',
        driver_contact: '01712-990022',
        rent_per_day: 3500,
        rent_per_km: 28,
        rent_per_hour: 400,
        advance_amount: 500,
        address: 'এম আব্দুর রহিম মেডিকেল কলেজ গেট, সুইহারী, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        district: 'দিনাজপুর',
        latitude: 25.6279,
        longitude: 88.6332,
        contact_number: '01712-990022',
        photo: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
        description: 'ঢাকা, রংপুর, বগুড়াসহ দেশের যেকোনো প্রান্তে আশঙ্কাজনক রোগী পরিবহনে শীতাতপ নিয়ন্ত্রিত আধুনিক অ্যাম্বুলেন্স। স্ট্র্যাচার ও সার্বক্ষণিক অক্সিজেন লভ্য।',
        subcategory: 'এসি অ্যাম্বুলেন্স',
        serviceType: 'এসি অ্যাম্বুলেন্স',
        rating: 4.8,
        reviewCount: 76,
        isApproved: true,
    },
    {
        _id: 'amb-103',
        vehicle_name: 'দিনাজপুর রেড ক্রিসেন্ট ফ্রিজিং অ্যাম্বুলেন্স',
        brand: 'Nissan',
        model: 'Urvan Cryo Freezing Transport',
        registration_no: 'দিনাজপুর-ছ ১০-৯৯৮১',
        with_driver: true,
        driver_name: 'মো: আমজাদ হোসেন',
        driver_contact: '01713-112233',
        rent_per_day: 5500,
        rent_per_km: 40,
        rent_per_hour: 600,
        advance_amount: 1500,
        address: 'রেড ক্রিসেন্ট ভবন, কালীতলা, দিনাজপুর সদর',
        upazila: 'দিনাজপুর সদর',
        district: 'দিনাজপুর',
        latitude: 25.6291,
        longitude: 88.6412,
        contact_number: '01713-112233',
        photo: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
        description: 'মরদেহ দীর্ঘ দূরত্বের গন্তব্যে অক্ষত পরিবহনে ফ্রিজিং ডিফ্রিজার সুবিধাসম্পন্ন বিশেষায়িত অ্যাম্বুলেন্স সেবা। তাপমাত্রা ডিজিটাল ডিসপ্লে নিয়ন্ত্রিত।',
        subcategory: 'ফ্রিজিং অ্যাম্বুলেন্স',
        serviceType: 'ফ্রিজিং অ্যাম্বুলেন্স',
        rating: 5.0,
        reviewCount: 42,
        isApproved: true,
    },
    {
        _id: 'amb-104',
        vehicle_name: 'বীরগঞ্জ উপজেলা সেন্ট্রাল এসি অ্যাম্বুলেন্স',
        brand: 'Hyundai',
        model: 'H-1 Starex Emergency Care',
        registration_no: 'দিনাজপুর-ছ ১৩-৪০৭৭',
        with_driver: true,
        driver_name: 'মো: জাহাঙ্গীর আলম',
        driver_contact: '01714-223344',
        rent_per_day: 3200,
        rent_per_km: 25,
        rent_per_hour: 350,
        advance_amount: 500,
        address: 'বীরগঞ্জ স্বাস্থ্য কমপ্লেক্স মোড়, বীরগঞ্জ, দিনাজপুর',
        upazila: 'বীরগঞ্জ',
        district: 'দিনাজপুর',
        latitude: 25.8562,
        longitude: 88.6621,
        contact_number: '01714-223344',
        photo: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=800',
        description: 'বীরগঞ্জ, কাহারোল ও বোচাগঞ্জ এলাকার রোগীদের দ্রুত মেডিকেল স্থানান্তর নিশ্চিত করতে দ্রুতগামী এসি অ্যাম্বুলেন্স সেবা।',
        subcategory: 'এসি অ্যাম্বুলেন্স',
        serviceType: 'এসি অ্যাম্বুলেন্স',
        rating: 4.7,
        reviewCount: 55,
        isApproved: true,
    },
    {
        _id: 'amb-105',
        vehicle_name: 'পার্বতীপুর জংশন ২৪/৭ নন-এসি অ্যাম্বুলেন্স',
        brand: 'Toyota',
        model: 'HiAce Standard Ambulance',
        registration_no: 'দিনাজপুর-ছ ১৪-১১২২',
        with_driver: true,
        driver_name: 'মো: সাইদুল ইসলাম',
        driver_contact: '01715-334455',
        rent_per_day: 2500,
        rent_per_km: 20,
        rent_per_hour: 300,
        advance_amount: 300,
        address: 'রেলওয়ে জংশন মোড়, পার্বতীপুর, দিনাজপুর',
        upazila: 'পার্বতীপুর',
        district: 'দিনাজপুর',
        latitude: 25.6601,
        longitude: 88.9168,
        contact_number: '01715-334455',
        photo: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
        description: 'কম খরচে দ্রুত সময়ে স্বল্প ও মাঝারি দূরত্বে রোগী পৌঁছাতে সাশ্রয়ী নন-এসি অ্যাম্বুলেন্স সার্ভিস।',
        subcategory: 'নন-এসি অ্যাম্বুলেন্স',
        serviceType: 'নন-এসি অ্যাম্বুলেন্স',
        rating: 4.6,
        reviewCount: 38,
        isApproved: true,
    },
    {
        _id: 'amb-106',
        vehicle_name: 'ফুলবাড়ী লাইফ সেভার্স আইসিইউ অ্যাম্বুলেন্স',
        brand: 'Toyota',
        model: 'HiAce Vent Care Ambulance',
        registration_no: 'দিনাজপুর-ছ ১৫-৭৭৮৮',
        with_driver: true,
        driver_name: 'মো: এরশাদ আলী',
        driver_contact: '01716-445566',
        rent_per_day: 4800,
        rent_per_km: 36,
        rent_per_hour: 550,
        advance_amount: 1000,
        address: 'মেডিকেল রোড, ফুলবাড়ী, দিনাজপুর',
        upazila: 'ফুলবাড়ী',
        district: 'দিনাজপুর',
        latitude: 25.5147,
        longitude: 88.8824,
        contact_number: '01716-445566',
        photo: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=800',
        description: 'দক্ষিণ দিনাজপুর অঞ্চলে সংকটাপন্ন রোগীদের আধুনিক ভেন্টিলেশন ও লাইফ সাপোর্ট দিয়ে বিশেষায়িত হাসপাতালে প্রেরণে সার্বক্ষণিক নিয়োজিত।',
        subcategory: 'আইসিইউ অ্যাম্বুলেন্স',
        serviceType: 'আইসিইউ অ্যাম্বুলেন্স',
        rating: 4.9,
        reviewCount: 62,
        isApproved: true,
    }
];

export const getAllAmbulanceService = async (query = {}) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const { search, upazila, subcategory } = query;
            let filter = { isApproved: true };

            if (upazila && upazila !== 'সব উপজেলা' && upazila !== 'সকল উপজেলা') {
                filter.upazila = upazila;
            }

            if (subcategory && subcategory !== 'সকল অ্যাম্বুলেন্স' && subcategory !== 'সকল') {
                filter.subcategory = subcategory;
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

            const data = await Ambulance.find(filter).sort({ rating: -1 });
            if (data && data.length > 0) {
                return data;
            }
        }
    } catch (error) {
        console.warn('MongoDB query failed for Ambulance, falling back to initial seed data:', error.message);
    }

    let filtered = [...initialAmbulanceData];
    if (query.upazila && query.upazila !== 'সব উপজেলা' && query.upazila !== 'সকল উপজেলা') {
        filtered = filtered.filter((item) => item.upazila === query.upazila);
    }
    if (query.subcategory && query.subcategory !== 'সকল অ্যাম্বুলেন্স' && query.subcategory !== 'সকল') {
        filtered = filtered.filter((item) => item.subcategory === query.subcategory);
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

export const getAmbulanceByIdService = async (id) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const item = await Ambulance.findById(id);
            if (item) return item;
        }
    } catch (error) {
        console.warn(`MongoDB getById failed for Ambulance ${id}:`, error.message);
    }
    return initialAmbulanceData.find((item) => item._id === id) || null;
};

export const createAmbulanceService = async (data) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const newItem = new Ambulance(data);
            return await newItem.save();
        }
    } catch (error) {
        console.warn('MongoDB create failed for Ambulance:', error.message);
    }
    const newItem = {
        _id: 'amb-' + Date.now(),
        ...data,
        rating: 5.0,
        reviewCount: 1,
        isApproved: true,
        createdAt: new Date(),
    };
    initialAmbulanceData.unshift(newItem);
    return newItem;
};

export const updateAmbulanceService = async (id, data) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const updated = await Ambulance.findByIdAndUpdate(id, data, { new: true });
            if (updated) return updated;
        }
    } catch (error) {
        console.warn(`MongoDB update failed for Ambulance ${id}:`, error.message);
    }
    const index = initialAmbulanceData.findIndex((item) => item._id === id);
    if (index !== -1) {
        initialAmbulanceData[index] = { ...initialAmbulanceData[index], ...data };
        return initialAmbulanceData[index];
    }
    return null;
};

export const deleteAmbulanceService = async (id) => {
    try {
        if (mongoose.connection.readyState === 1) {
            const deleted = await Ambulance.findByIdAndDelete(id);
            if (deleted) return deleted;
        }
    } catch (error) {
        console.warn(`MongoDB delete failed for Ambulance ${id}:`, error.message);
    }
    const index = initialAmbulanceData.findIndex((item) => item._id === id);
    if (index !== -1) {
        const deleted = initialAmbulanceData[index];
        initialAmbulanceData.splice(index, 1);
        return deleted;
    }
    return null;
};
