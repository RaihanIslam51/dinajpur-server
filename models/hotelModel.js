import { MongoClient, ObjectId } from 'mongodb';
import { getDB } from '../db/db.js';

const insertHotel = async (hotelData) => {
  try {
    const db = await getDB();
    const result = await db.collection('Hotels').insertOne({
      ...hotelData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('হোটেল যোগ হয়েছে:', result.insertedId);
    return { success: true, data: { _id: result.insertedId, ...hotelData }, message: 'হোটেল সফলভাবে যোগ হয়েছে' };
  } catch (error) {
    console.error('হোটেল যোগ করতে সমস্যা:', error);
    return { success: false, message: 'হোটেল যোগ করতে সমস্যা হয়েছে' };
  }
};

const getAllHotels = async (filters = {}) => {
  try {
    const db = await getDB();
    let query = {};

    // Apply filters
    if (filters.hotelType) {
      query.hotelType = filters.hotelType;
    }
    if (filters.location) {
      query.location = filters.location;
    }
    if (filters.priceRange) {
      query.priceRange = filters.priceRange;
    }
    if (filters.starRating) {
      query.starRating = filters.starRating;
    }
    if (filters.status) {
      query.status = filters.status;
    }

    const hotels = await db.collection('Hotels')
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    console.log('হোটেল লোড হয়েছে:', hotels.length);
    return { success: true, data: hotels, message: 'হোটেল সফলভাবে লোড হয়েছে' };
  } catch (error) {
    console.error('হোটেল লোড করতে সমস্যা:', error);
    return { success: false, message: 'হোটেল লোড করতে সমস্যা হয়েছে' };
  }
};

const getHotelById = async (id) => {
  try {
    const db = await getDB();
    const hotel = await db.collection('Hotels').findOne({ _id: new ObjectId(id) });

    if (!hotel) {
      return { success: false, message: 'হোটেল পাওয়া যায়নি' };
    }

    console.log('হোটেল পাওয়া গেছে:', hotel._id);
    return { success: true, data: hotel, message: 'হোটেল সফলভাবে পাওয়া গেছে' };
  } catch (error) {
    console.error('হোটেল খুঁজতে সমস্যা:', error);
    return { success: false, message: 'হোটেল খুঁজতে সমস্যা হয়েছে' };
  }
};

const updateHotel = async (id, updateData) => {
  try {
    const db = await getDB();
    const result = await db.collection('Hotels').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...updateData,
          updatedAt: new Date()
        }
      }
    );

    if (result.matchedCount === 0) {
      return { success: false, message: 'হোটেল পাওয়া যায়নি' };
    }

    console.log('হোটেল আপডেট হয়েছে:', id);
    return { success: true, message: 'হোটেল সফলভাবে আপডেট হয়েছে' };
  } catch (error) {
    console.error('হোটেল আপডেট করতে সমস্যা:', error);
    return { success: false, message: 'হোটেল আপডেট করতে সমস্যা হয়েছে' };
  }
};

const deleteHotel = async (id) => {
  try {
    const db = await getDB();
    const result = await db.collection('Hotels').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return { success: false, message: 'হোটেল পাওয়া যায়নি' };
    }

    console.log('হোটেল মুছে ফেলা হয়েছে:', id);
    return { success: true, message: 'হোটেল সফলভাবে মুছে ফেলা হয়েছে' };
  } catch (error) {
    console.error('হোটেল মুছে ফেলতে সমস্যা:', error);
    return { success: false, message: 'হোটেল মুছে ফেলতে সমস্যা হয়েছে' };
  }
};

const getFeaturedHotels = async () => {
  try {
    const db = await getDB();
    const hotels = await db.collection('Hotels')
      .find({ featured: true })
      .sort({ createdAt: -1 })
      .toArray();

    console.log('ফিচার্ড হোটেল লোড হয়েছে:', hotels.length);
    return { success: true, data: hotels, message: 'ফিচার্ড হোটেল সফলভাবে লোড হয়েছে' };
  } catch (error) {
    console.error('ফিচার্ড হোটেল লোড করতে সমস্যা:', error);
    return { success: false, message: 'ফিচার্ড হোটেল লোড করতে সমস্যা হয়েছে' };
  }
};

const searchHotels = async (searchQuery) => {
  try {
    const db = await getDB();
    const hotels = await db.collection('Hotels')
      .find({
        $or: [
          { hotelName: { $regex: searchQuery, $options: 'i' } },
          { hotelType: { $regex: searchQuery, $options: 'i' } },
          { facilities: { $regex: searchQuery, $options: 'i' } },
          { location: { $regex: searchQuery, $options: 'i' } }
        ]
      })
      .sort({ createdAt: -1 })
      .toArray();

    console.log('হোটেল অনুসন্ধান হয়েছে:', hotels.length);
    return { success: true, data: hotels, message: 'হোটেল অনুসন্ধান সফল হয়েছে' };
  } catch (error) {
    console.error('হোটেল অনুসন্ধানে সমস্যা:', error);
    return { success: false, message: 'হোটেল অনুসন্ধানে সমস্যা হয়েছে' };
  }
};

const getHotelsByType = async (hotelType) => {
  try {
    const db = await getDB();
    const hotels = await db.collection('Hotels')
      .find({ hotelType })
      .sort({ createdAt: -1 })
      .toArray();

    console.log('হোটেল ধরন অনুসারে লোড হয়েছে:', hotels.length);
    return { success: true, data: hotels, message: 'হোটেল ধরন অনুসারে সফলভাবে লোড হয়েছে' };
  } catch (error) {
    console.error('হোটেল ধরন অনুসারে লোড করতে সমস্যা:', error);
    return { success: false, message: 'হোটেল ধরন অনুসারে লোড করতে সমস্যা হয়েছে' };
  }
};

const getHotelsByLocation = async (location) => {
  try {
    const db = await getDB();
    const hotels = await db.collection('Hotels')
      .find({ location })
      .sort({ createdAt: -1 })
      .toArray();

    console.log('হোটেল অবস্থান অনুসারে লোড হয়েছে:', hotels.length);
    return { success: true, data: hotels, message: 'হোটেল অবস্থান অনুসারে সফলভাবে লোড হয়েছে' };
  } catch (error) {
    console.error('হোটেল অবস্থান অনুসারে লোড করতে সমস্যা:', error);
    return { success: false, message: 'হোটেল অবস্থান অনুসারে লোড করতে সমস্যা হয়েছে' };
  }
};

const getHotelsByStarRating = async (starRating) => {
  try {
    const db = await getDB();
    const hotels = await db.collection('Hotels')
      .find({ starRating })
      .sort({ createdAt: -1 })
      .toArray();

    console.log('হোটেল স্টার রেটিং অনুসারে লোড হয়েছে:', hotels.length);
    return { success: true, data: hotels, message: 'হোটেল স্টার রেটিং অনুসারে সফলভাবে লোড হয়েছে' };
  } catch (error) {
    console.error('হোটেল স্টার রেটিং অনুসারে লোড করতে সমস্যা:', error);
    return { success: false, message: 'হোটেল স্টার রেটিং অনুসারে লোড করতে সমস্যা হয়েছে' };
  }
};

const getHotelsByPriceRange = async (priceRange) => {
  try {
    const db = await getDB();
    const hotels = await db.collection('Hotels')
      .find({ priceRange })
      .sort({ createdAt: -1 })
      .toArray();

    console.log('হোটেল মূল্য পরিসর অনুসারে লোড হয়েছে:', hotels.length);
    return { success: true, data: hotels, message: 'হোটেল মূল্য পরিসর অনুসারে সফলভাবে লোড হয়েছে' };
  } catch (error) {
    console.error('হোটেল মূল্য পরিসর অনুসারে লোড করতে সমস্যা:', error);
    return { success: false, message: 'হোটেল মূল্য পরিসর অনুসারে লোড করতে সমস্যা হয়েছে' };
  }
};

export {
  insertHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
  getFeaturedHotels,
  searchHotels,
  getHotelsByType,
  getHotelsByLocation,
  getHotelsByStarRating,
  getHotelsByPriceRange
};