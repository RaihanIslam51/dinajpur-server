/**
 * ShoppingStore / Product Model Schema
 * Isolated collection handling for 'products' (Shopping Stores) with 20 normalized fields
 */
export const productSchema = {
    collectionName: 'products',
    fields: {
        id: 'ObjectId',
        name: 'String',
        category: 'String',
        description: 'String',
        logo: 'String',
        coverImage: 'String',
        images: 'Array',
        address: 'String',
        area: 'String',
        phone: 'String',
        email: 'String',
        website: 'String',
        openingTime: 'String',
        closingTime: 'String',
        products: 'Array',
        services: 'Array',
        paymentMethods: 'Array',
        location: 'String',
        isFeatured: 'Boolean',
        isVerified: 'Boolean',
        status: 'String',
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};

