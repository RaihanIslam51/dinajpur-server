import { getDB, ObjectId } from '../db/db.js';



export const insertUsers = async (data) => {
    console.log('Inserting user to database:', data);
    const result = await getDB().collection('Users').insertOne(data);
    console.log('Database insert result:', result);
    return result;
};

export const getAllUsers = async () => {
    return await getDB()
        .collection('Users')
        .find({})
        .sort({ createdAt: -1 })
        .toArray();
};

export const getUsersById = async (id) => {
    return await getDB()
        .collection('Users')
        .findOne({ _id: new ObjectId(id) });
};

export const updateUsers = async (id, data) => {
    return await getDB()
        .collection('Users')
        .updateOne(
            { _id: new ObjectId(id) },
            { $set: data }
        );
};

export const deleteUsers = async (id) => {
    return await getDB()
        .collection('Users')
        .deleteOne({ _id: new ObjectId(id) });
};

export const getUsersCount = async () => {
    const users = await getDB().collection('Users').find({}).toArray();
    return users.length;
};

export const getUserByNameAndPhone = async (name, phone) => {
    return await getDB()
        .collection('Users')
        .findOne({ name, phone });
};

export const updateUserRole = async (id, role) => {
    return await getDB()
        .collection('Users')
        .updateOne(
            { _id: new ObjectId(id) },
            { $set: { role, updatedAt: new Date() } }
        );
};

export const updateUserStatus = async (id, status) => {
    return await getDB()
        .collection('Users')
        .updateOne(
            { _id: new ObjectId(id) },
            { $set: { status, updatedAt: new Date() } }
        );
};