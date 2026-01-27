import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

// Insert a new blood service
async function insertBloodService(data) {
  try {
    const db = await getDB();
    const collection = db.collection('bloodServices');

    const bloodService = {
      serviceName: data.serviceName,
      location: data.location,
      address: data.address,
      contactNumber: data.contactNumber,
      emergencyNumber: data.emergencyNumber,
      email: data.email,
      website: data.website,
      bloodTypes: data.bloodTypes,
      services: data.services,
      operatingHours: data.operatingHours,
      requirements: data.requirements,
      facilities: data.facilities,
      doctorInCharge: data.doctorInCharge,
      licenseNumber: data.licenseNumber,
      description: data.description,
      status: data.status || 'active',
      featured: data.featured || false,
      image: data.image,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await collection.insertOne(bloodService);
    return { success: true, data: { _id: result.insertedId, ...bloodService } };
  } catch (error) {
    console.error('Error inserting blood service:', error);
    return { success: false, message: 'রক্ত সেবার তথ্য সংরক্ষণ করতে সমস্যা হয়েছে' };
  }
}

// Get all blood services with optional filtering
async function getAllBloodServices(filters = {}) {
  try {
    const db = await getDB();
    const collection = db.collection('bloodServices');

    let query = {};
    if (filters.location) query.location = filters.location;
    if (filters.status) query.status = filters.status;
    if (filters.featured !== undefined) query.featured = filters.featured;
    if (filters.bloodType) query.bloodTypes = { $regex: filters.bloodType, $options: 'i' };

    const bloodServices = await collection.find(query).sort({ createdAt: -1 }).toArray();
    return { success: true, data: bloodServices };
  } catch (error) {
    console.error('Error fetching blood services:', error);
    return { success: false, message: 'রক্ত সেবার তথ্য লোড করতে সমস্যা হয়েছে' };
  }
}

// Get blood service by ID
async function getBloodServiceById(id) {
  try {
    const db = await getDB();
    const collection = db.collection('bloodServices');

    const bloodService = await collection.findOne({ _id: new ObjectId(id) });
    if (!bloodService) {
      return { success: false, message: 'রক্ত সেবা পাওয়া যায়নি' };
    }

    return { success: true, data: bloodService };
  } catch (error) {
    console.error('Error fetching blood service:', error);
    return { success: false, message: 'রক্ত সেবার তথ্য লোড করতে সমস্যা হয়েছে' };
  }
}

// Update blood service
async function updateBloodService(id, updateData) {
  try {
    const db = await getDB();
    const collection = db.collection('bloodServices');

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...updateData,
          updatedAt: new Date()
        }
      }
    );

    if (result.matchedCount === 0) {
      return { success: false, message: 'রক্ত সেবা পাওয়া যায়নি' };
    }

    return { success: true, message: 'রক্ত সেবার তথ্য আপডেট হয়েছে' };
  } catch (error) {
    console.error('Error updating blood service:', error);
    return { success: false, message: 'রক্ত সেবার তথ্য আপডেট করতে সমস্যা হয়েছে' };
  }
}

// Delete blood service
async function deleteBloodService(id) {
  try {
    const db = await getDB();
    const collection = db.collection('bloodServices');

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return { success: false, message: 'রক্ত সেবা পাওয়া যায়নি' };
    }

    return { success: true, message: 'রক্ত সেবার তথ্য মুছে ফেলা হয়েছে' };
  } catch (error) {
    console.error('Error deleting blood service:', error);
    return { success: false, message: 'রক্ত সেবার তথ্য মুছে ফেলতে সমস্যা হয়েছে' };
  }
}

// Get featured blood services
async function getFeaturedBloodServices() {
  try {
    const db = await getDB();
    const collection = db.collection('bloodServices');

    const bloodServices = await collection.find({ featured: true, status: 'active' }).sort({ createdAt: -1 }).toArray();
    return { success: true, data: bloodServices };
  } catch (error) {
    console.error('Error fetching featured blood services:', error);
    return { success: false, message: 'ফিচার্ড রক্ত সেবার তথ্য লোড করতে সমস্যা হয়েছে' };
  }
}

// Search blood services
async function searchBloodServices(searchTerm) {
  try {
    const db = await getDB();
    const collection = db.collection('bloodServices');

    const searchRegex = new RegExp(searchTerm, 'i');
    const query = {
      $or: [
        { serviceName: searchRegex },
        { location: searchRegex },
        { services: searchRegex },
        { bloodTypes: searchRegex },
        { facilities: searchRegex }
      ],
      status: 'active'
    };

    const bloodServices = await collection.find(query).sort({ createdAt: -1 }).toArray();
    return { success: true, data: bloodServices };
  } catch (error) {
    console.error('Error searching blood services:', error);
    return { success: false, message: 'রক্ত সেবা অনুসন্ধানে সমস্যা হয়েছে' };
  }
}

// Get blood services by location
async function getBloodServicesByLocation(location) {
  try {
    const db = await getDB();
    const collection = db.collection('bloodServices');

    const bloodServices = await collection.find({ location: location, status: 'active' }).sort({ createdAt: -1 }).toArray();
    return { success: true, data: bloodServices };
  } catch (error) {
    console.error('Error fetching blood services by location:', error);
    return { success: false, message: 'অবস্থান অনুসারে রক্ত সেবার তথ্য লোড করতে সমস্যা হয়েছে' };
  }
}

// Get blood services by blood type
async function getBloodServicesByBloodType(bloodType) {
  try {
    const db = await getDB();
    const collection = db.collection('bloodServices');

    const bloodServices = await collection.find({
      bloodTypes: { $regex: bloodType, $options: 'i' },
      status: 'active'
    }).sort({ createdAt: -1 }).toArray();
    return { success: true, data: bloodServices };
  } catch (error) {
    console.error('Error fetching blood services by blood type:', error);
    return { success: false, message: 'রক্তের গ্রুপ অনুসারে রক্ত সেবার তথ্য লোড করতে সমস্যা হয়েছে' };
  }
}

export {
  insertBloodService,
  getAllBloodServices,
  getBloodServiceById,
  updateBloodService,
  deleteBloodService,
  getFeaturedBloodServices,
  searchBloodServices,
  getBloodServicesByLocation,
  getBloodServicesByBloodType
};