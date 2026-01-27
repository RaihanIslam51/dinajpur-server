import { getDB } from '../db/db.js';
import { ObjectId } from 'mongodb';

// Get jobs collection
const getJobsCollection = async () => {
    const db = await getDB();
    return db.collection('Jobs');
};

// Insert new job
const insertJob = async (jobData) => {
    try {
        const collection = await getJobsCollection();
        const result = await collection.insertOne({
            ...jobData,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        
        console.log('✅ Job inserted into database:', result.insertedId);
        return result;
    } catch (error) {
        console.error('❌ Error inserting job:', error);
        throw error;
    }
};

// Get all jobs with optional filters
const getAllJobs = async (filters = {}) => {
    try {
        const collection = await getJobsCollection();
        const query = {};

        // Apply filters
        if (filters.jobType) {
            query.jobType = filters.jobType;
        }

        if (filters.location) {
            query.location = { $regex: filters.location, $options: 'i' };
        }

        if (filters.companyName) {
            query.companyName = { $regex: filters.companyName, $options: 'i' };
        }

        if (filters.minSalary) {
            query.salary = { $gte: parseInt(filters.minSalary) };
        }

        if (filters.maxSalary) {
            query.salary = { ...query.salary, $lte: parseInt(filters.maxSalary) };
        }

        if (filters.featured !== undefined) {
            query.featured = filters.featured === 'true' || filters.featured === true;
        }

        if (filters.status) {
            query.status = filters.status;
        }

        // Search functionality
        if (filters.search) {
            query.$or = [
                { jobTitle: { $regex: filters.search, $options: 'i' } },
                { companyName: { $regex: filters.search, $options: 'i' } },
                { location: { $regex: filters.search, $options: 'i' } },
                { description: { $regex: filters.search, $options: 'i' } }
            ];
        }

        const jobs = await collection.find(query).sort({ createdAt: -1 }).toArray();
        console.log(`✅ Retrieved ${jobs.length} jobs from database`);
        
        return jobs;
    } catch (error) {
        console.error('❌ Error getting jobs:', error);
        throw error;
    }
};

// Get job by ID
const getJobById = async (id) => {
    try {
        const collection = await getJobsCollection();
        const job = await collection.findOne({ _id: new ObjectId(id) });
        
        if (job) {
            console.log('✅ Job found:', job.jobTitle);
        } else {
            console.log('⚠️ Job not found with ID:', id);
        }
        
        return job;
    } catch (error) {
        console.error('❌ Error getting job by ID:', error);
        throw error;
    }
};

// Update job
const updateJob = async (id, updateData) => {
    try {
        const collection = await getJobsCollection();
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { 
                $set: {
                    ...updateData,
                    updatedAt: new Date()
                }
            }
        );
        
        console.log('✅ Job updated:', result.modifiedCount, 'document(s) modified');
        return result;
    } catch (error) {
        console.error('❌ Error updating job:', error);
        throw error;
    }
};

// Delete job
const deleteJob = async (id) => {
    try {
        const collection = await getJobsCollection();
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        
        console.log('✅ Job deleted:', result.deletedCount, 'document(s) deleted');
        return result;
    } catch (error) {
        console.error('❌ Error deleting job:', error);
        throw error;
    }
};

// Get featured jobs
const getFeaturedJobs = async () => {
    try {
        const collection = await getJobsCollection();
        const jobs = await collection
            .find({ featured: true, status: 'active' })
            .sort({ createdAt: -1 })
            .toArray();
        
        console.log(`✅ Retrieved ${jobs.length} featured jobs`);
        return jobs;
    } catch (error) {
        console.error('❌ Error getting featured jobs:', error);
        throw error;
    }
};

// Search jobs
const searchJobs = async (searchTerm) => {
    try {
        const collection = await getJobsCollection();
        const jobs = await collection
            .find({
                $or: [
                    { jobTitle: { $regex: searchTerm, $options: 'i' } },
                    { companyName: { $regex: searchTerm, $options: 'i' } },
                    { location: { $regex: searchTerm, $options: 'i' } },
                    { description: { $regex: searchTerm, $options: 'i' } },
                    { responsibilities: { $regex: searchTerm, $options: 'i' } }
                ]
            })
            .toArray();
        
        console.log(`✅ Found ${jobs.length} jobs matching "${searchTerm}"`);
        return jobs;
    } catch (error) {
        console.error('❌ Error searching jobs:', error);
        throw error;
    }
};

// Get active jobs (not expired)
const getActiveJobs = async () => {
    try {
        const collection = await getJobsCollection();
        const currentDate = new Date();
        const jobs = await collection
            .find({
                status: 'active',
                $or: [
                    { deadline: { $gte: currentDate } },
                    { deadline: null }
                ]
            })
            .sort({ createdAt: -1 })
            .toArray();
        
        console.log(`✅ Retrieved ${jobs.length} active jobs`);
        return jobs;
    } catch (error) {
        console.error('❌ Error getting active jobs:', error);
        throw error;
    }
};

export {
    insertJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob,
    getFeaturedJobs,
    searchJobs,
    getActiveJobs
};
