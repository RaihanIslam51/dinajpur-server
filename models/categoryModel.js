import { getDB, ObjectId } from '../db/db.js';

// Insert a new category
export const insertCategory = async (categoryData) => {
    const db = await getDB();
    const result = await db.collection('Categories').insertOne({
        ...categoryData,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return result;
};

// Get all categories
export const getAllCategories = async () => {
    const db = await getDB();
    const categories = await db.collection('Categories').find({}).sort({ createdAt: -1 }).toArray();
    return categories;
};

// Get category by ID
export const getCategoryById = async (id) => {
    const db = await getDB();
    const category = await db.collection('Categories').findOne({ _id: new ObjectId(id) });
    return category;
};

// Update category
export const updateCategory = async (id, updateData) => {
    const db = await getDB();
    const result = await db.collection('Categories').updateOne(
        { _id: new ObjectId(id) },
        { $set: { ...updateData, updatedAt: new Date() } }
    );
    return result;
};

// Delete category
export const deleteCategory = async (id) => {
    const db = await getDB();
    const result = await db.collection('Categories').deleteOne({ _id: new ObjectId(id) });
    return result;
};

// Insert subcategory entry
export const insertSubcategoryEntry = async (subcategoryData) => {
    const db = await getDB();
    const result = await db.collection('SubcategoryEntries').insertOne({
        ...subcategoryData,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return result;
};

// Get all subcategory entries
export const getAllSubcategoryEntries = async (filters = {}) => {
    const db = await getDB();
    const query = {};
    if (filters.categoryId) query.categoryId = filters.categoryId;
    if (filters.subcategoryName) query.subcategoryName = filters.subcategoryName;
    if (filters.status) query.status = filters.status;
    
    const entries = await db.collection('SubcategoryEntries').find(query).sort({ createdAt: -1 }).toArray();
    return entries;
};

// Get subcategory entry by ID
export const getSubcategoryEntryById = async (id) => {
    const db = await getDB();
    const entry = await db.collection('SubcategoryEntries').findOne({ _id: new ObjectId(id) });
    return entry;
};

// Update subcategory entry
export const updateSubcategoryEntry = async (id, updateData) => {
    const db = await getDB();
    const result = await db.collection('SubcategoryEntries').updateOne(
        { _id: new ObjectId(id) },
        { $set: { ...updateData, updatedAt: new Date() } }
    );
    return result;
};

// Delete subcategory entry
export const deleteSubcategoryEntry = async (id) => {
    const db = await getDB();
    const result = await db.collection('SubcategoryEntries').deleteOne({ _id: new ObjectId(id) });
    return result;
};

export default {
    insertCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
    insertSubcategoryEntry,
    getAllSubcategoryEntries,
    getSubcategoryEntryById,
    updateSubcategoryEntry,
    deleteSubcategoryEntry
};
