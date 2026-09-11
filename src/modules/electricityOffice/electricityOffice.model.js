/**
 * ElectricityOffice Model Schema
 * Dinajpur Smart City Platform
 * 15 Field Schema for Electricity Offices
 */

export const electricityOfficeSchema = {
    collectionName: 'electricityOffices',
    fields: {
        id: 'ObjectId',
        name: 'String',
        officeType: 'String',
        description: 'String',
        address: 'String',
        area: 'String',
        phone: 'String',
        emergencyNumber: 'String',
        email: 'String',
        website: 'String',
        serviceAreas: 'Array',
        officeHours: 'String',
        complaintNumber: 'String',
        services: 'Array',
        location: 'Object', // { latitude: Number, longitude: Number }
        status: 'String',
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};

export default electricityOfficeSchema;
