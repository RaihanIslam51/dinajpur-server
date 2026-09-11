/**
 * FireService Model Schema
 */
export const fireServiceSchema = {
    collectionName: 'fireServices',
    fields: {
        id: 'ObjectId',
        title: 'String',
        name: 'String',
        category: 'String',
        description: 'String',
        contactPhone: 'String',
        address: 'String',
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
