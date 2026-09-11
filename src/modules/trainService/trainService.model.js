/**
 * TrainService Model Schema
 * Dinajpur Smart City Platform
 * 17 Field Schema for Train Services
 */

export const trainServiceSchema = {
    collectionName: 'trainServices',
    fields: {
        id: 'ObjectId',
        trainName: 'String',
        trainNumber: 'String',
        trainType: 'String',
        route: 'String',
        startStation: 'String',
        endStation: 'String',
        stops: 'Array',
        departureTime: 'String',
        arrivalTime: 'String',
        schedule: 'Array',
        offDays: 'Array',
        ticketPrice: 'Array', // Objects: { seatClass, price }
        seatClasses: 'Array',
        onlineTicketLink: 'String',
        counterInfo: 'String',
        contactNumber: 'String',
        status: 'String',
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};

export default trainServiceSchema;
