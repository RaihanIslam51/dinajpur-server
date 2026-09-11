/**
 * CourierService Model Schema
 * Dinajpur Smart City Platform
 * 19 Field Schema for Courier Services
 */

export const courierServiceSchema = {
    collectionName: 'courierServices',
    fields: {
        id: 'ObjectId',
        companyName: 'String',
        logo: 'String',
        description: 'String',
        address: 'String',
        phone: 'String',
        email: 'String',
        website: 'String',
        serviceAreas: 'Array',
        deliveryTypes: 'Array',
        deliveryCharge: 'Array', // Objects: { areaType, charge }
        estimatedDeliveryTime: 'String',
        cashOnDelivery: 'Boolean',
        trackingAvailable: 'Boolean',
        trackingUrl: 'String',
        pickupService: 'Boolean',
        officeHours: 'String',
        location: 'Object', // { latitude: Number, longitude: Number }
        isVerified: 'Boolean',
        status: 'String',
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};

export default courierServiceSchema;
