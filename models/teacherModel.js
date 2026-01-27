import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

// Get teachers collection
const getTeachersCollection = async () => {
    const db = await getDB();
    return db.collection('Teachers');
};

// Insert new teacher
const insertTeacher = async (teacherData) => {
    try {
        const collection = await getTeachersCollection();
        const result = await collection.insertOne({
            ...teacherData,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        console.log('✅ Teacher inserted into database:', result.insertedId);
        return result;
    } catch (error) {
        console.error('❌ Error inserting teacher:', error);
        throw error;
    }
};

// Get all teachers with optional filters
const getAllTeachers = async (filters = {}) => {
    try {
        const collection = await getTeachersCollection();
        const query = {};

        // Apply filters
        if (filters.subject) {
            query.subject = { $regex: filters.subject, $options: 'i' };
        }

        if (filters.teachingLevel) {
            query.teachingLevel = filters.teachingLevel;
        }

        if (filters.institution) {
            query.institution = { $regex: filters.institution, $options: 'i' };
        }

        if (filters.location) {
            query.location = { $regex: filters.location, $options: 'i' };
        }

        if (filters.availability) {
            query.availability = filters.availability;
        }

        if (filters.experience) {
            query.experience = { $gte: parseInt(filters.experience) };
        }

        if (filters.status) {
            query.status = filters.status;
        }

        if (filters.featured === true) {
            query.featured = true;
        }

        const teachers = await collection.find(query).sort({ createdAt: -1 }).toArray();
        console.log(`✅ ${teachers.length} teachers found in database`);
        return teachers;
    } catch (error) {
        console.error('❌ Error fetching teachers:', error);
        throw error;
    }
};

// Get teacher by ID
const getTeacherById = async (id) => {
    try {
        const collection = await getTeachersCollection();
        const teacher = await collection.findOne({ _id: new ObjectId(id) });

        if (teacher) {
            console.log('✅ Teacher found by ID:', id);
        } else {
            console.log('⚠️ Teacher not found by ID:', id);
        }

        return teacher;
    } catch (error) {
        console.error('❌ Error fetching teacher by ID:', error);
        throw error;
    }
};

// Update teacher
const updateTeacher = async (id, updateData) => {
    try {
        const collection = await getTeachersCollection();
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
            console.log('✅ Teacher updated in database:', id);
        } else {
            console.log('⚠️ Teacher not found or no changes made:', id);
        }

        return result;
    } catch (error) {
        console.error('❌ Error updating teacher:', error);
        throw error;
    }
};

// Delete teacher
const deleteTeacher = async (id) => {
    try {
        const collection = await getTeachersCollection();
        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount > 0) {
            console.log('✅ Teacher deleted from database:', id);
        } else {
            console.log('⚠️ Teacher not found for deletion:', id);
        }

        return result;
    } catch (error) {
        console.error('❌ Error deleting teacher:', error);
        throw error;
    }
};

// Get featured teachers
const getFeaturedTeachers = async () => {
    try {
        const collection = await getTeachersCollection();
        const featuredTeachers = await collection.find({ featured: true, status: 'active' }).sort({ createdAt: -1 }).toArray();
        console.log(`✅ ${featuredTeachers.length} featured teachers found`);
        return featuredTeachers;
    } catch (error) {
        console.error('❌ Error fetching featured teachers:', error);
        throw error;
    }
};

// Search teachers
const searchTeachers = async (searchTerm) => {
    try {
        const collection = await getTeachersCollection();
        const query = {
            $or: [
                { teacherName: { $regex: searchTerm, $options: 'i' } },
                { subject: { $regex: searchTerm, $options: 'i' } },
                { institution: { $regex: searchTerm, $options: 'i' } },
                { qualification: { $regex: searchTerm, $options: 'i' } },
                { location: { $regex: searchTerm, $options: 'i' } },
                { description: { $regex: searchTerm, $options: 'i' } }
            ],
            status: 'active'
        };

        const teachers = await collection.find(query).sort({ createdAt: -1 }).toArray();
        console.log(`✅ ${teachers.length} teachers found for search term: "${searchTerm}"`);
        return teachers;
    } catch (error) {
        console.error('❌ Error searching teachers:', error);
        throw error;
    }
};

// Get teachers by subject
const getTeachersBySubject = async (subject) => {
    try {
        const collection = await getTeachersCollection();
        const teachers = await collection.find({
            subject: { $regex: subject, $options: 'i' },
            status: 'active'
        }).sort({ createdAt: -1 }).toArray();

        console.log(`✅ ${teachers.length} teachers found for subject: "${subject}"`);
        return teachers;
    } catch (error) {
        console.error('❌ Error fetching teachers by subject:', error);
        throw error;
    }
};

// Get teachers by teaching level
const getTeachersByLevel = async (level) => {
    try {
        const collection = await getTeachersCollection();
        const teachers = await collection.find({
            teachingLevel: level,
            status: 'active'
        }).sort({ createdAt: -1 }).toArray();

        console.log(`✅ ${teachers.length} teachers found for level: "${level}"`);
        return teachers;
    } catch (error) {
        console.error('❌ Error fetching teachers by level:', error);
        throw error;
    }
};

export {
    insertTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher,
    getFeaturedTeachers,
    searchTeachers,
    getTeachersBySubject,
    getTeachersByLevel
};