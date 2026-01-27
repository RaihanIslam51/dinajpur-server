import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

// Insert a new police station
async function insertPoliceStation(data) {
  try {
    const db = await getDB();
    const collection = db.collection('policeStations');

    const policeStation = {
      stationName: data.stationName,
      location: data.location,
      address: data.address,
      contactNumber: data.contactNumber,
      emergencyNumber: data.emergencyNumber,
      officerInCharge: data.officerInCharge,
      officerRank: data.officerRank,
      officerContact: data.officerContact,
      services: data.services,
      workingHours: data.workingHours,
      jurisdiction: data.jurisdiction,
      description: data.description,
      status: data.status || 'active',
      featured: data.featured || false,
      image: data.image,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await collection.insertOne(policeStation);
    return { success: true, data: { _id: result.insertedId, ...policeStation } };
  } catch (error) {
    console.error('Error inserting police station:', error);
    return { success: false, message: 'থানার তথ্য সংরক্ষণ করতে সমস্যা হয়েছে' };
  }
}

// Get all police stations with optional filtering
async function getAllPoliceStations(filters = {}) {
  try {
    const db = await getDB();
    const collection = db.collection('policeStations');

    let query = {};
    if (filters.location) query.location = filters.location;
    if (filters.status) query.status = filters.status;
    if (filters.featured !== undefined) query.featured = filters.featured;

    const policeStations = await collection.find(query).sort({ createdAt: -1 }).toArray();
    return { success: true, data: policeStations };
  } catch (error) {
    console.error('Error fetching police stations:', error);
    return { success: false, message: 'থানার তথ্য লোড করতে সমস্যা হয়েছে' };
  }
}

// Get police station by ID
async function getPoliceStationById(id) {
  try {
    const db = await getDB();
    const collection = db.collection('policeStations');

    const policeStation = await collection.findOne({ _id: new ObjectId(id) });
    if (!policeStation) {
      return { success: false, message: 'থানা পাওয়া যায়নি' };
    }

    return { success: true, data: policeStation };
  } catch (error) {
    console.error('Error fetching police station:', error);
    return { success: false, message: 'থানার তথ্য লোড করতে সমস্যা হয়েছে' };
  }
}

// Update police station
async function updatePoliceStation(id, updateData) {
  try {
    const db = await getDB();
    const collection = db.collection('policeStations');

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
      return { success: false, message: 'থানা পাওয়া যায়নি' };
    }

    return { success: true, message: 'থানার তথ্য আপডেট হয়েছে' };
  } catch (error) {
    console.error('Error updating police station:', error);
    return { success: false, message: 'থানার তথ্য আপডেট করতে সমস্যা হয়েছে' };
  }
}

// Delete police station
async function deletePoliceStation(id) {
  try {
    const db = await getDB();
    const collection = db.collection('policeStations');

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return { success: false, message: 'থানা পাওয়া যায়নি' };
    }

    return { success: true, message: 'থানার তথ্য মুছে ফেলা হয়েছে' };
  } catch (error) {
    console.error('Error deleting police station:', error);
    return { success: false, message: 'থানার তথ্য মুছে ফেলতে সমস্যা হয়েছে' };
  }
}

// Get featured police stations
async function getFeaturedPoliceStations() {
  try {
    const db = await getDB();
    const collection = db.collection('policeStations');

    const policeStations = await collection.find({ featured: true, status: 'active' }).sort({ createdAt: -1 }).toArray();
    return { success: true, data: policeStations };
  } catch (error) {
    console.error('Error fetching featured police stations:', error);
    return { success: false, message: 'ফিচার্ড থানার তথ্য লোড করতে সমস্যা হয়েছে' };
  }
}

// Search police stations
async function searchPoliceStations(searchTerm) {
  try {
    const db = await getDB();
    const collection = db.collection('policeStations');

    const searchRegex = new RegExp(searchTerm, 'i');
    const query = {
      $or: [
        { stationName: searchRegex },
        { location: searchRegex },
        { services: searchRegex },
        { jurisdiction: searchRegex }
      ],
      status: 'active'
    };

    const policeStations = await collection.find(query).sort({ createdAt: -1 }).toArray();
    return { success: true, data: policeStations };
  } catch (error) {
    console.error('Error searching police stations:', error);
    return { success: false, message: 'থানা অনুসন্ধানে সমস্যা হয়েছে' };
  }
}

// Get police stations by location
async function getPoliceStationsByLocation(location) {
  try {
    const db = await getDB();
    const collection = db.collection('policeStations');

    const policeStations = await collection.find({ location: location, status: 'active' }).sort({ createdAt: -1 }).toArray();
    return { success: true, data: policeStations };
  } catch (error) {
    console.error('Error fetching police stations by location:', error);
    return { success: false, message: 'অবস্থান অনুসারে থানার তথ্য লোড করতে সমস্যা হয়েছে' };
  }
}

export {
  insertPoliceStation,
  getAllPoliceStations,
  getPoliceStationById,
  updatePoliceStation,
  deletePoliceStation,
  getFeaturedPoliceStations,
  searchPoliceStations,
  getPoliceStationsByLocation
};