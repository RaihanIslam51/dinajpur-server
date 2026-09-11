/**
 * Entrepreneur Model Schema
 * Dinajpur Smart City Platform
 * 22 Field Schema for Entrepreneurs
 */

export const entrepreneurSchema = {
    collectionName: 'entrepreneurs',
    fields: {
        id: 'ObjectId',
        name: 'String',
        profileImage: 'String',
        businessName: 'String',
        businessCategory: 'String',
        logo: 'String',
        coverImage: 'String',
        description: 'String',
        story: 'String',
        products: 'Array',
        services: 'Array',
        phone: 'String',
        email: 'String',
        website: 'String',
        socialLinks: 'Object', // { facebook, instagram, youtube }
        address: 'String',
        location: 'Object', // { latitude: Number, longitude: Number }
        establishedYear: 'String',
        teamSize: 'String',
        achievements: 'Array',
        isFeatured: 'Boolean',
        isVerified: 'Boolean',
        status: 'String',
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};

export default entrepreneurSchema;
