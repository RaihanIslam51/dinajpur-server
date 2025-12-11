import { getDB, ObjectId } from '../db/db.js';



export const insertUsers = async (data) => {
    console.log('Inserting user to database:', data);
    const db = await getDB();
    const result = await db.collection('Users').insertOne(data);
    console.log('Database insert result:', result);
    return result;
};

export const getAllUsers = async () => {
    const db = await getDB();
    return await db
        .collection('Users')
        .find({})
        .sort({ createdAt: -1 })
        .toArray();
};

export const getUsersById = async (id) => {
    const db = await getDB();
    return await db
        .collection('Users')
        .findOne({ _id: new ObjectId(id) });
};

export const updateUsers = async (id, data) => {
    const db = await getDB();
    return await db
        .collection('Users')
        .updateOne(
            { _id: new ObjectId(id) },
            { $set: data }
        );
};

export const deleteUsers = async (id) => {
    const db = await getDB();
    return await db
        .collection('Users')
        .deleteOne({ _id: new ObjectId(id) });
};

export const getUsersCount = async () => {
    const db = await getDB();
    const users = await db.collection('Users').find({}).toArray();
    return users.length;
};

export const getUserByNameAndPhone = async (name, phone) => {
    const db = await getDB();
    return await db
        .collection('Users')
        .findOne({ name, phone });
};

export const updateUserRole = async (id, role) => {
    const db = await getDB();
    return await db
        .collection('Users')
        .updateOne(
            { _id: new ObjectId(id) },
            { $set: { role, updatedAt: new Date() } }
        );
};

export const updateUserStatus = async (id, status) => {
    const db = await getDB();
    return await db
        .collection('Users')
        .updateOne(
            { _id: new ObjectId(id) },
            { $set: { status, updatedAt: new Date() } }
        );
};