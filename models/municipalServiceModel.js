import { MongoClient, ObjectId } from 'mongodb';
import { getDB } from '../db/db.js';

const insertMunicipalService = async (serviceData) => {
  try {
    const db = await getDB();
    const result = await db.collection('MunicipalServices').insertOne({
      ...serviceData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('পৌর সেবা যোগ হয়েছে:', result.insertedId);
    return { success: true, data: { _id: result.insertedId, ...serviceData }, message: 'পৌর সেবা সফলভাবে যোগ হয়েছে' };
  } catch (error) {
    console.error('পৌর সেবা যোগ করতে সমস্যা:', error);
    return { success: false, message: 'পৌর সেবা যোগ করতে সমস্যা হয়েছে' };
  }
};

const getAllMunicipalServices = async (filters = {}) => {
  try {
    const db = await getDB();
    let query = {};

    // Apply filters
    if (filters.serviceType) {
      query.serviceType = filters.serviceType;
    }
    if (filters.location) {
      query.location = filters.location;
    }
    if (filters.status) {
      query.status = filters.status;
    }

    const services = await db.collection('MunicipalServices')
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    console.log('পৌর সেবা লোড হয়েছে:', services.length);
    return { success: true, data: services, message: 'পৌর সেবা সফলভাবে লোড হয়েছে' };
  } catch (error) {
    console.error('পৌর সেবা লোড করতে সমস্যা:', error);
    return { success: false, message: 'পৌর সেবা লোড করতে সমস্যা হয়েছে' };
  }
};

const getMunicipalServiceById = async (id) => {
  try {
    const db = await getDB();
    const service = await db.collection('MunicipalServices').findOne({ _id: new ObjectId(id) });

    if (!service) {
      return { success: false, message: 'পৌর সেবা পাওয়া যায়নি' };
    }

    console.log('পৌর সেবা পাওয়া গেছে:', service._id);
    return { success: true, data: service, message: 'পৌর সেবা সফলভাবে পাওয়া গেছে' };
  } catch (error) {
    console.error('পৌর সেবা খুঁজতে সমস্যা:', error);
    return { success: false, message: 'পৌর সেবা খুঁজতে সমস্যা হয়েছে' };
  }
};

const updateMunicipalService = async (id, updateData) => {
  try {
    const db = await getDB();
    const result = await db.collection('MunicipalServices').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...updateData,
          updatedAt: new Date()
        }
      }
    );

    if (result.matchedCount === 0) {
      return { success: false, message: 'পৌর সেবা পাওয়া যায়নি' };
    }

    console.log('পৌর সেবা আপডেট হয়েছে:', id);
    return { success: true, message: 'পৌর সেবা সফলভাবে আপডেট হয়েছে' };
  } catch (error) {
    console.error('পৌর সেবা আপডেট করতে সমস্যা:', error);
    return { success: false, message: 'পৌর সেবা আপডেট করতে সমস্যা হয়েছে' };
  }
};

const deleteMunicipalService = async (id) => {
  try {
    const db = await getDB();
    const result = await db.collection('MunicipalServices').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return { success: false, message: 'পৌর সেবা পাওয়া যায়নি' };
    }

    console.log('পৌর সেবা মুছে ফেলা হয়েছে:', id);
    return { success: true, message: 'পৌর সেবা সফলভাবে মুছে ফেলা হয়েছে' };
  } catch (error) {
    console.error('পৌর সেবা মুছে ফেলতে সমস্যা:', error);
    return { success: false, message: 'পৌর সেবা মুছে ফেলতে সমস্যা হয়েছে' };
  }
};

const getFeaturedMunicipalServices = async () => {
  try {
    const db = await getDB();
    const services = await db.collection('MunicipalServices')
      .find({ featured: true })
      .sort({ createdAt: -1 })
      .toArray();

    console.log('ফিচার্ড পৌর সেবা লোড হয়েছে:', services.length);
    return { success: true, data: services, message: 'ফিচার্ড পৌর সেবা সফলভাবে লোড হয়েছে' };
  } catch (error) {
    console.error('ফিচার্ড পৌর সেবা লোড করতে সমস্যা:', error);
    return { success: false, message: 'ফিচার্ড পৌর সেবা লোড করতে সমস্যা হয়েছে' };
  }
};

const searchMunicipalServices = async (searchQuery) => {
  try {
    const db = await getDB();
    const services = await db.collection('MunicipalServices')
      .find({
        $or: [
          { serviceName: { $regex: searchQuery, $options: 'i' } },
          { serviceType: { $regex: searchQuery, $options: 'i' } },
          { description: { $regex: searchQuery, $options: 'i' } },
          { location: { $regex: searchQuery, $options: 'i' } }
        ]
      })
      .sort({ createdAt: -1 })
      .toArray();

    console.log('পৌর সেবা অনুসন্ধান হয়েছে:', services.length);
    return { success: true, data: services, message: 'পৌর সেবা অনুসন্ধান সফল হয়েছে' };
  } catch (error) {
    console.error('পৌর সেবা অনুসন্ধানে সমস্যা:', error);
    return { success: false, message: 'পৌর সেবা অনুসন্ধানে সমস্যা হয়েছে' };
  }
};

const getMunicipalServicesByType = async (serviceType) => {
  try {
    const db = await getDB();
    const services = await db.collection('MunicipalServices')
      .find({ serviceType })
      .sort({ createdAt: -1 })
      .toArray();

    console.log('পৌর সেবা ধরন অনুসারে লোড হয়েছে:', services.length);
    return { success: true, data: services, message: 'পৌর সেবা ধরন অনুসারে সফলভাবে লোড হয়েছে' };
  } catch (error) {
    console.error('পৌর সেবা ধরন অনুসারে লোড করতে সমস্যা:', error);
    return { success: false, message: 'পৌর সেবা ধরন অনুসারে লোড করতে সমস্যা হয়েছে' };
  }
};

const getMunicipalServicesByLocation = async (location) => {
  try {
    const db = await getDB();
    const services = await db.collection('MunicipalServices')
      .find({ location })
      .sort({ createdAt: -1 })
      .toArray();

    console.log('পৌর সেবা অবস্থান অনুসারে লোড হয়েছে:', services.length);
    return { success: true, data: services, message: 'পৌর সেবা অবস্থান অনুসারে সফলভাবে লোড হয়েছে' };
  } catch (error) {
    console.error('পৌর সেবা অবস্থান অনুসারে লোড করতে সমস্যা:', error);
    return { success: false, message: 'পৌর সেবা অবস্থান অনুসারে লোড করতে সমস্যা হয়েছে' };
  }
};

export {
  insertMunicipalService,
  getAllMunicipalServices,
  getMunicipalServiceById,
  updateMunicipalService,
  deleteMunicipalService,
  getFeaturedMunicipalServices,
  searchMunicipalServices,
  getMunicipalServicesByType,
  getMunicipalServicesByLocation
};