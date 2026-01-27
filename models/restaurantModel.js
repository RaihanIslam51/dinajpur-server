import { MongoClient, ObjectId } from 'mongodb';
import { getDB } from '../db/db.js';

const insertRestaurant = async (restaurantData) => {
  try {
    const db = await getDB();
    const result = await db.collection('Restaurants').insertOne({
      ...restaurantData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('রেস্টুরেন্ট যোগ হয়েছে:', result.insertedId);
    return { success: true, data: { _id: result.insertedId, ...restaurantData }, message: 'রেস্টুরেন্ট সফলভাবে যোগ হয়েছে' };
  } catch (error) {
    console.error('রেস্টুরেন্ট যোগ করতে সমস্যা:', error);
    return { success: false, message: 'রেস্টুরেন্ট যোগ করতে সমস্যা হয়েছে' };
  }
};

const getAllRestaurants = async (filters = {}) => {
  try {
    const db = await getDB();
    let query = {};

    // Apply filters
    if (filters.cuisineType) {
      query.cuisineType = filters.cuisineType;
    }
    if (filters.location) {
      query.location = filters.location;
    }
    if (filters.priceRange) {
      query.priceRange = filters.priceRange;
    }
    if (filters.status) {
      query.status = filters.status;
    }

    const restaurants = await db.collection('Restaurants')
      .find(query)
      .sort({ createdAt: -1 })
      .toArray();

    console.log('রেস্টুরেন্ট লোড হয়েছে:', restaurants.length);
    return { success: true, data: restaurants, message: 'রেস্টুরেন্ট সফলভাবে লোড হয়েছে' };
  } catch (error) {
    console.error('রেস্টুরেন্ট লোড করতে সমস্যা:', error);
    return { success: false, message: 'রেস্টুরেন্ট লোড করতে সমস্যা হয়েছে' };
  }
};

const getRestaurantById = async (id) => {
  try {
    const db = await getDB();
    const restaurant = await db.collection('Restaurants').findOne({ _id: new ObjectId(id) });

    if (!restaurant) {
      return { success: false, message: 'রেস্টুরেন্ট পাওয়া যায়নি' };
    }

    console.log('রেস্টুরেন্ট পাওয়া গেছে:', restaurant._id);
    return { success: true, data: restaurant, message: 'রেস্টুরেন্ট সফলভাবে পাওয়া গেছে' };
  } catch (error) {
    console.error('রেস্টুরেন্ট খুঁজতে সমস্যা:', error);
    return { success: false, message: 'রেস্টুরেন্ট খুঁজতে সমস্যা হয়েছে' };
  }
};

const updateRestaurant = async (id, updateData) => {
  try {
    const db = await getDB();
    const result = await db.collection('Restaurants').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...updateData,
          updatedAt: new Date()
        }
      }
    );

    if (result.matchedCount === 0) {
      return { success: false, message: 'রেস্টুরেন্ট পাওয়া যায়নি' };
    }

    console.log('রেস্টুরেন্ট আপডেট হয়েছে:', id);
    return { success: true, message: 'রেস্টুরেন্ট সফলভাবে আপডেট হয়েছে' };
  } catch (error) {
    console.error('রেস্টুরেন্ট আপডেট করতে সমস্যা:', error);
    return { success: false, message: 'রেস্টুরেন্ট আপডেট করতে সমস্যা হয়েছে' };
  }
};

const deleteRestaurant = async (id) => {
  try {
    const db = await getDB();
    const result = await db.collection('Restaurants').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return { success: false, message: 'রেস্টুরেন্ট পাওয়া যায়নি' };
    }

    console.log('রেস্টুরেন্ট মুছে ফেলা হয়েছে:', id);
    return { success: true, message: 'রেস্টুরেন্ট সফলভাবে মুছে ফেলা হয়েছে' };
  } catch (error) {
    console.error('রেস্টুরেন্ট মুছে ফেলতে সমস্যা:', error);
    return { success: false, message: 'রেস্টুরেন্ট মুছে ফেলতে সমস্যা হয়েছে' };
  }
};

const getFeaturedRestaurants = async () => {
  try {
    const db = await getDB();
    const restaurants = await db.collection('Restaurants')
      .find({ featured: true })
      .sort({ createdAt: -1 })
      .toArray();

    console.log('ফিচার্ড রেস্টুরেন্ট লোড হয়েছে:', restaurants.length);
    return { success: true, data: restaurants, message: 'ফিচার্ড রেস্টুরেন্ট সফলভাবে লোড হয়েছে' };
  } catch (error) {
    console.error('ফিচার্ড রেস্টুরেন্ট লোড করতে সমস্যা:', error);
    return { success: false, message: 'ফিচার্ড রেস্টুরেন্ট লোড করতে সমস্যা হয়েছে' };
  }
};

const searchRestaurants = async (searchQuery) => {
  try {
    const db = await getDB();
    const restaurants = await db.collection('Restaurants')
      .find({
        $or: [
          { restaurantName: { $regex: searchQuery, $options: 'i' } },
          { cuisineType: { $regex: searchQuery, $options: 'i' } },
          { specialties: { $regex: searchQuery, $options: 'i' } },
          { location: { $regex: searchQuery, $options: 'i' } }
        ]
      })
      .sort({ createdAt: -1 })
      .toArray();

    console.log('রেস্টুরেন্ট অনুসন্ধান হয়েছে:', restaurants.length);
    return { success: true, data: restaurants, message: 'রেস্টুরেন্ট অনুসন্ধান সফল হয়েছে' };
  } catch (error) {
    console.error('রেস্টুরেন্ট অনুসন্ধানে সমস্যা:', error);
    return { success: false, message: 'রেস্টুরেন্ট অনুসন্ধানে সমস্যা হয়েছে' };
  }
};

const getRestaurantsByCuisine = async (cuisineType) => {
  try {
    const db = await getDB();
    const restaurants = await db.collection('Restaurants')
      .find({ cuisineType })
      .sort({ createdAt: -1 })
      .toArray();

    console.log('রেস্টুরেন্ট রান্নার ধরন অনুসারে লোড হয়েছে:', restaurants.length);
    return { success: true, data: restaurants, message: 'রেস্টুরেন্ট রান্নার ধরন অনুসারে সফলভাবে লোড হয়েছে' };
  } catch (error) {
    console.error('রেস্টুরেন্ট রান্নার ধরন অনুসারে লোড করতে সমস্যা:', error);
    return { success: false, message: 'রেস্টুরেন্ট রান্নার ধরন অনুসারে লোড করতে সমস্যা হয়েছে' };
  }
};

const getRestaurantsByLocation = async (location) => {
  try {
    const db = await getDB();
    const restaurants = await db.collection('Restaurants')
      .find({ location })
      .sort({ createdAt: -1 })
      .toArray();

    console.log('রেস্টুরেন্ট অবস্থান অনুসারে লোড হয়েছে:', restaurants.length);
    return { success: true, data: restaurants, message: 'রেস্টুরেন্ট অবস্থান অনুসারে সফলভাবে লোড হয়েছে' };
  } catch (error) {
    console.error('রেস্টুরেন্ট অবস্থান অনুসারে লোড করতে সমস্যা:', error);
    return { success: false, message: 'রেস্টুরেন্ট অবস্থান অনুসারে লোড করতে সমস্যা হয়েছে' };
  }
};

const getRestaurantsByPriceRange = async (priceRange) => {
  try {
    const db = await getDB();
    const restaurants = await db.collection('Restaurants')
      .find({ priceRange })
      .sort({ createdAt: -1 })
      .toArray();

    console.log('রেস্টুরেন্ট মূল্য পরিসর অনুসারে লোড হয়েছে:', restaurants.length);
    return { success: true, data: restaurants, message: 'রেস্টুরেন্ট মূল্য পরিসর অনুসারে সফলভাবে লোড হয়েছে' };
  } catch (error) {
    console.error('রেস্টুরেন্ট মূল্য পরিসর অনুসারে লোড করতে সমস্যা:', error);
    return { success: false, message: 'রেস্টুরেন্ট মূল্য পরিসর অনুসারে লোড করতে সমস্যা হয়েছে' };
  }
};

export {
  insertRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  getFeaturedRestaurants,
  searchRestaurants,
  getRestaurantsByCuisine,
  getRestaurantsByLocation,
  getRestaurantsByPriceRange
};