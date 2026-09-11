/**
 * Category Model Schema
 */
export const categorySchema = {
    collectionName: 'categorys',
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
