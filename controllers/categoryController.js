import categoryModel from '../models/categoryModel.js';

// Create a new category
export const createCategory = async (req, res) => {
    try {
        const { name, icon, subcategories, displayIn, status } = req.body;

        if (!name) {
            return res.status(400).json({ success: false, message: 'Category name is required' });
        }

        const categoryData = {
            name,
            icon: icon || '',
            subcategories: subcategories || [],
            displayIn: displayIn || 'allcategory',
            status: status || 'active'
        };

        const result = await categoryModel.insertCategory(categoryData);
        res.status(201).json({ success: true, message: 'Category created successfully', data: result });
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ success: false, message: 'Failed to create category', error: error.message });
    }
};

// Get all categories
export const getAllCategories = async (req, res) => {
    try {
        // Set cache control headers to prevent caching
        res.set({
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store'
        });
        
        const categories = await categoryModel.getAllCategories();
        res.status(200).json({ success: true, data: categories });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch categories', error: error.message });
    }
};

// Get category by ID
export const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await categoryModel.getCategoryById(id);

        if (!category) {
            return res.status(404).json({ success: false, message: 'Category not found' });
        }

        res.status(200).json({ success: true, data: category });
    } catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch category', error: error.message });
    }
};

// Update category
export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const result = await categoryModel.updateCategory(id, updateData);

        if (result.matchedCount === 0) {
            return res.status(404).json({ success: false, message: 'Category not found' });
        }

        res.status(200).json({ success: true, message: 'Category updated successfully' });
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ success: false, message: 'Failed to update category', error: error.message });
    }
};

// Delete category
export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await categoryModel.deleteCategory(id);

        if (result.deletedCount === 0) {
            return res.status(404).json({ success: false, message: 'Category not found' });
        }

        res.status(200).json({ success: true, message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ success: false, message: 'Failed to delete category', error: error.message });
    }
};

// Create subcategory entry
export const createSubcategoryEntry = async (req, res) => {
    try {
        const { categoryId, categoryName, subcategoryName, name, image, designation, qualification, address, phone, email, description, status } = req.body;

        if (!categoryId || !name) {
            return res.status(400).json({ success: false, message: 'CategoryId and name are required' });
        }

        const entryData = {
            categoryId,
            categoryName: categoryName || '',
            subcategoryName: subcategoryName || '',
            name,
            image: image || '',
            designation: designation || '',
            qualification: qualification || '',
            address: address || '',
            phone: phone || '',
            email: email || '',
            description: description || '',
            status: status || 'active'
        };

        const result = await categoryModel.insertSubcategoryEntry(entryData);
        res.status(201).json({ success: true, message: 'Entry created successfully', data: result });
    } catch (error) {
        console.error('Error creating entry:', error);
        res.status(500).json({ success: false, message: 'Failed to create entry', error: error.message });
    }
};

// Get all subcategory entries
export const getAllSubcategoryEntries = async (req, res) => {
    try {
        // Set cache control headers to prevent caching
        res.set({
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store'
        });
        
        const { categoryId, subcategoryName, status } = req.query;
        const filters = {};
        if (categoryId) filters.categoryId = categoryId;
        if (subcategoryName) filters.subcategoryName = subcategoryName;
        if (status) filters.status = status;

        const entries = await categoryModel.getAllSubcategoryEntries(filters);
        res.status(200).json({ success: true, data: entries });
    } catch (error) {
        console.error('Error fetching entries:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch entries', error: error.message });
    }
};

// Get subcategory entry by ID
export const getSubcategoryEntryById = async (req, res) => {
    try {
        const { id } = req.params;
        const entry = await categoryModel.getSubcategoryEntryById(id);

        if (!entry) {
            return res.status(404).json({ success: false, message: 'Entry not found' });
        }

        res.status(200).json({ success: true, data: entry });
    } catch (error) {
        console.error('Error fetching entry:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch entry', error: error.message });
    }
};

// Update subcategory entry
export const updateSubcategoryEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const result = await categoryModel.updateSubcategoryEntry(id, updateData);

        if (result.matchedCount === 0) {
            return res.status(404).json({ success: false, message: 'Entry not found' });
        }

        res.status(200).json({ success: true, message: 'Entry updated successfully' });
    } catch (error) {
        console.error('Error updating entry:', error);
        res.status(500).json({ success: false, message: 'Failed to update entry', error: error.message });
    }
};

// Delete subcategory entry
export const deleteSubcategoryEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await categoryModel.deleteSubcategoryEntry(id);

        if (result.deletedCount === 0) {
            return res.status(404).json({ success: false, message: 'Entry not found' });
        }

        res.status(200).json({ success: true, message: 'Entry deleted successfully' });
    } catch (error) {
        console.error('Error deleting entry:', error);
        res.status(500).json({ success: false, message: 'Failed to delete entry', error: error.message });
    }
};

export default {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
    createSubcategoryEntry,
    getAllSubcategoryEntries,
    getSubcategoryEntryById,
    updateSubcategoryEntry,
    deleteSubcategoryEntry
};
