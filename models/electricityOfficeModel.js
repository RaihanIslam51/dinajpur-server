import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

async function insertElectricityOffice(electricityOfficeData) {
    try {
        const db = await getDB();
        const collection = db.collection('ElectricityOffices');

        const result = await collection.insertOne({
            ...electricityOfficeData,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        console.log('✅ বিদ্যুৎ অফিস তথ্য সফলভাবে যুক্ত হয়েছে:', result.insertedId);
        return result;
    } catch (error) {
        console.error('❌ বিদ্যুৎ অফিস তথ্য যুক্ত করতে ত্রুটি:', error);
        throw error;
    }
}

async function getAllElectricityOffices(filters = {}) {
    try {
        const db = await getDB();
        const collection = db.collection('ElectricityOffices');

        let query = {};

        // Filter by location
        if (filters.location) {
            query.location = { $regex: filters.location, $options: 'i' };
        }

        // Filter by featured
        if (filters.featured === 'true') {
            query.featured = true;
        }

        // Filter by status
        if (filters.status) {
            query.status = filters.status;
        }

        // Search functionality
        if (filters.search) {
            query.$or = [
                { officeName: { $regex: filters.search, $options: 'i' } },
                { location: { $regex: filters.search, $options: 'i' } },
                { services: { $regex: filters.search, $options: 'i' } }
            ];
        }

        const electricityOffices = await collection.find(query).sort({ createdAt: -1 }).toArray();
        console.log(`📋 ${electricityOffices.length} টি বিদ্যুৎ অফিস তথ্য পাওয়া গেছে`);
        return electricityOffices;
    } catch (error) {
        console.error('❌ বিদ্যুৎ অফিস তথ্য আনতে ত্রুটি:', error);
        throw error;
    }
}

async function getFeaturedElectricityOffices() {
    try {
        const db = await getDB();
        const collection = db.collection('ElectricityOffices');

        const electricityOffices = await collection.find({ featured: true, status: 'active' }).sort({ createdAt: -1 }).toArray();
        console.log(`⭐ ${electricityOffices.length} টি ফিচার্ড বিদ্যুৎ অফিস তথ্য পাওয়া গেছে`);
        return electricityOffices;
    } catch (error) {
        console.error('❌ ফিচার্ড বিদ্যুৎ অফিস তথ্য আনতে ত্রুটি:', error);
        throw error;

    }
}

async function getElectricityOfficeById(id) {
    try {
        const db = await getDB();
        const collection = db.collection('ElectricityOffices');

        const electricityOffice = await collection.findOne({ _id: new ObjectId(id) });
        if (electricityOffice) {
            console.log('🔍 বিদ্যুৎ অফিস তথ্য পাওয়া গেছে:', electricityOffice.officeName);
        } else {
            console.log('❌ বিদ্যুৎ অফিস তথ্য পাওয়া যায়নি');
        }
        return electricityOffice;
    } catch (error) {
        console.error('❌ বিদ্যুৎ অফিস তথ্য আনতে ত্রুটি:', error);
        throw error;
    }
}

async function updateElectricityOffice(id, updateData) {
    try {
        const db = await getDB();
        const collection = db.collection('ElectricityOffices');

        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    ...updateData,
                    updatedAt: new Date()
                }
            }
        );

        if (result.modifiedCount > 0) {
            console.log('✅ বিদ্যুৎ অফিস তথ্য সফলভাবে আপডেট হয়েছে');
        } else {
            console.log('⚠️ কোনো বিদ্যুৎ অফিস তথ্য আপডেট হয়নি');
        }
        return result;
    } catch (error) {
        console.error('❌ বিদ্যুৎ অফিস তথ্য আপডেট করতে ত্রুটি:', error);
        throw error;
    }
}

async function deleteElectricityOffice(id) {
    try {
        const db = await getDB();
        const collection = db.collection('ElectricityOffices');

        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount > 0) {
            console.log('🗑️ বিদ্যুৎ অফিস তথ্য সফলভাবে মুছে ফেলা হয়েছে');
        } else {
            console.log('⚠️ কোনো বিদ্যুৎ অফিস তথ্য মুছে ফেলা হয়নি');
        }
        return result;
    } catch (error) {
        console.error('❌ বিদ্যুৎ অফিস তথ্য মুছে ফেলতে ত্রুটি:', error);
        throw error;
    }
}

export {
    insertElectricityOffice,
    getAllElectricityOffices,
    getFeaturedElectricityOffices,
    getElectricityOfficeById,
    updateElectricityOffice,
    deleteElectricityOffice
};