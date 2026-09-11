/**
 * Review Model Schema
 */
export const reviewSchema = {
    collectionName: 'reviews',
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
