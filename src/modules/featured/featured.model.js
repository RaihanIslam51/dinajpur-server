/**
 * Featured Model Schema
 */
export const featuredSchema = {
    collectionName: 'featureds',
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
