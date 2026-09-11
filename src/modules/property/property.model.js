/**
 * Property Model Schema
 * Dinajpur Smart City Platform
 * 28 Field Schema for Flat & Land Properties
 */

export const propertySchema = {
    collectionName: 'properties',
    fields: {
        id: 'ObjectId',
        title: 'String',
        propertyType: 'String',
        listingType: 'String',
        description: 'String',
        images: 'Array',
        address: 'String',
        area: 'String',
        location: 'Object', // { latitude: Number, longitude: Number }
        size: 'String',
        price: 'String',
        pricePerUnit: 'String',
        bedrooms: 'Number',
        bathrooms: 'Number',
        floor: 'String',
        parking: 'Boolean',
        facing: 'String',
        roadWidth: 'String',
        landType: 'String',
        ownerName: 'String',
        ownerPhone: 'String',
        agentName: 'String',
        agentPhone: 'String',
        documentsAvailable: 'Boolean',
        utilities: 'Array',
        postedDate: 'String',
        isFeatured: 'Boolean',
        isVerified: 'Boolean',
        status: 'String',
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};

export default propertySchema;
