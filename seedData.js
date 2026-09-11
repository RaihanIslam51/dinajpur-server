import { getDB, connectDB } from './db/db.js';
import { ObjectId } from 'mongodb';

// Connect to database first
await connectDB();

// Location data
const locations = [
    'Dinajpur Sadar',
    'Birampur',
    'Parbatipur',
    'Khansama',
    'Biral',
    'Chirirbandar',
    'Ghoraghat',
    'Kaharole',
    'Nababganj'
];

const categories = [
    'Healthcare',
    'Business',
    'Education',
    'Entertainment',
    'Services',
    'Real Estate',
    'Transportation',
    'Food & Restaurant',
    'Wedding Services',
    'Shopping'
];

// Seed Categories
async function seedCategories() {
    try {
        const db = await getDB();
        const collection = db.collection('Categories');
        
        const categoriesData = [];
        for (let i = 1; i <= 10; i++) {
            categoriesData.push({
                name: `${categories[i % categories.length]} Category ${i}`,
                description: `Description for category ${i}`,
                displayIn: ['home', 'search'][i % 2],
                status: 'active',
                icon: 'category-icon.png',
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(categoriesData);
        console.log('✅ 10 Categories added');
    } catch (error) {
        console.error('❌ Error seeding categories:', error.message);
    }
}

// Seed Blood Services
async function seedBloodServices() {
    try {
        const db = await getDB();
        const collection = db.collection('bloodServices');
        
        const bloodTypesOptions = [
            ['O+', 'O-', 'A+'],
            ['B+', 'B-', 'AB+'],
            ['A+', 'A-', 'O+'],
            ['All Types'],
            ['O+', 'A+', 'B+', 'AB+']
        ];
        
        const servicesData = [];
        for (let i = 1; i <= 10; i++) {
            servicesData.push({
                serviceName: `Blood Service Center ${i}`,
                location: locations[i % locations.length],
                address: `Address ${i}, ${locations[i % locations.length]}`,
                contactNumber: `01712345${(i + 100).toString().slice(-3)}`,
                emergencyNumber: `01812345${(i + 100).toString().slice(-3)}`,
                email: `bloodservice${i}@example.com`,
                website: `https://bloodservice${i}.com`,
                bloodTypes: bloodTypesOptions[i % bloodTypesOptions.length],
                services: ['Blood Donation', 'Blood Testing', 'Emergency Supply'],
                operatingHours: '8:00 AM - 8:00 PM',
                requirements: 'Age 18-65, Good Health',
                facilities: ['Air Conditioning', 'Parking', 'Emergency Room'],
                doctorInCharge: `Dr. ${['Mahmud', 'Karim', 'Hassan', 'Ahmed', 'Ali'][i % 5]}`,
                licenseNumber: `LIC${1000 + i}`,
                description: `Professional blood service center ${i}`,
                status: 'active',
                featured: i <= 3,
                image: `blood-service-${i}.jpg`,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(servicesData);
        console.log('✅ 10 Blood Services added');
    } catch (error) {
        console.error('❌ Error seeding blood services:', error.message);
    }
}

// Seed Hospitals
async function seedHospitals() {
    try {
        const db = await getDB();
        const collection = db.collection('Hospitals');
        
        const hospitalsData = [];
        for (let i = 1; i <= 10; i++) {
            hospitalsData.push({
                hospitalName: `Hospital ${i}`,
                location: locations[i % locations.length],
                address: `Medical Complex ${i}, ${locations[i % locations.length]}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `hospital${i}@example.com`,
                website: `https://hospital${i}.com`,
                hospitalType: ['Government', 'Private', 'Nursing Home', 'Clinic'][i % 4],
                beds: 50 + (i * 10),
                departments: ['General', 'Cardiology', 'Orthopedics', 'Pediatrics'],
                specializations: ['Surgery', 'Medicine', 'Emergency Care'],
                services: ['24/7 Emergency', 'Ambulance', 'ICU', 'Operation Theater'],
                consultants: [`Dr. Consultant ${i}`, `Dr. Specialist ${i}`],
                operatingHours: '24 Hours',
                emergencyNumber: `01812345${(i + 100).toString().slice(-3)}`,
                ambilanceNumber: `01912345${(i + 100).toString().slice(-3)}`,
                description: `Leading hospital providing quality healthcare services`,
                status: 'active',
                featured: i <= 3,
                image: `hospital-${i}.jpg`,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(hospitalsData);
        console.log('✅ 10 Hospitals added');
    } catch (error) {
        console.error('❌ Error seeding hospitals:', error.message);
    }
}

// Seed Products
async function seedProducts() {
    try {
        const db = await getDB();
        const collection = db.collection('Products');
        
        const productNames = [
            'Laptop', 'Mobile Phone', 'Tablet', 'Camera', 'Headphones',
            'Speaker', 'Monitor', 'Keyboard', 'Mouse', 'USB Cable'
        ];
        
        const productsData = [];
        for (let i = 1; i <= 10; i++) {
            productsData.push({
                productName: `${productNames[i - 1]}`,
                category: categories[i % categories.length],
                productType: ['Electronics', 'Clothing', 'Food', 'Furniture'][i % 4],
                description: `High quality product - ${productNames[i - 1]} with excellent features`,
                price: 1000 + (i * 500),
                location: locations[i % locations.length],
                seller: `Seller ${i}`,
                sellerContact: `01712345${(i + 100).toString().slice(-3)}`,
                condition: ['New', 'Like New', 'Good'][i % 3],
                status: 'active',
                featured: i <= 3,
                images: [`product-${i}-1.jpg`, `product-${i}-2.jpg`],
                specifications: {
                    color: ['Black', 'White', 'Silver', 'Gold'][i % 4],
                    brand: ['Samsung', 'Apple', 'Canon', 'Sony'][i % 4],
                    warranty: '1 Year'
                },
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(productsData);
        console.log('✅ 10 Products added');
    } catch (error) {
        console.error('❌ Error seeding products:', error.message);
    }
}

// Seed Jobs
async function seedJobs() {
    try {
        const db = await getDB();
        const collection = db.collection('Jobs');
        
        const jobTitles = [
            'Software Engineer',
            'Marketing Manager',
            'Sales Executive',
            'Accountant',
            'Teacher',
            'Nurse',
            'Electrician',
            'Carpenter',
            'Driver',
            'Chef'
        ];
        
        const jobsData = [];
        for (let i = 1; i <= 10; i++) {
            jobsData.push({
                jobTitle: jobTitles[i - 1],
                companyName: `Company ${i}`,
                location: locations[i % locations.length],
                address: `Office ${i}, ${locations[i % locations.length]}`,
                jobType: ['Full Time', 'Part Time', 'Contract'][i % 3],
                salary: 15000 + (i * 5000),
                experience: `${i} years`,
                qualifications: 'Bachelor Degree',
                description: `Exciting opportunity for ${jobTitles[i - 1]} position`,
                requirements: ['Communication Skills', 'Problem Solving', 'Team Work'],
                benefits: ['Health Insurance', 'Bonus', 'Paid Leave'],
                contactPerson: `HR Manager ${i}`,
                contactNumber: `01712345${(i + 100).toString().slice(-3)}`,
                email: `jobs${i}@company.com`,
                deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                status: 'active',
                featured: i <= 3,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(jobsData);
        console.log('✅ 10 Jobs added');
    } catch (error) {
        console.error('❌ Error seeding jobs:', error.message);
    }
}

// Seed Restaurants
async function seedRestaurants() {
    try {
        const db = await getDB();
        const collection = db.collection('Restaurants');
        
        const cuisineTypes = [
            'Bengali', 'Indian', 'Chinese', 'Continental',
            'Fast Food', 'Bakery', 'Cafe', 'Biryani', 'BBQ', 'Pizza'
        ];
        
        const restaurantsData = [];
        for (let i = 1; i <= 10; i++) {
            restaurantsData.push({
                restaurantName: `${cuisineTypes[i - 1]} Restaurant ${i}`,
                location: locations[i % locations.length],
                address: `Food Street ${i}, ${locations[i % locations.length]}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `restaurant${i}@example.com`,
                website: `https://restaurant${i}.com`,
                cuisineType: cuisineTypes[i - 1],
                menu: ['Biryani', 'Curry', 'Bread', 'Desserts'],
                capacity: 50 + (i * 10),
                operatingHours: '11:00 AM - 11:00 PM',
                deliveryAvailable: true,
                deliveryFee: 50,
                averageRating: 3.5 + (i * 0.1),
                specialties: ['Authentic Recipe', 'Fresh Ingredients', 'Hygienic'],
                description: `Best ${cuisineTypes[i - 1]} food in town`,
                status: 'active',
                featured: i <= 3,
                image: `restaurant-${i}.jpg`,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(restaurantsData);
        console.log('✅ 10 Restaurants added');
    } catch (error) {
        console.error('❌ Error seeding restaurants:', error.message);
    }
}

// Seed Hotels
async function seedHotels() {
    try {
        const db = await getDB();
        const collection = db.collection('Hotels');
        
        const hotelsData = [];
        for (let i = 1; i <= 10; i++) {
            hotelsData.push({
                hotelName: `Hotel ${i}`,
                location: locations[i % locations.length],
                address: `Main Road ${i}, ${locations[i % locations.length]}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `hotel${i}@example.com`,
                website: `https://hotel${i}.com`,
                hotelType: ['Luxury', 'Budget', 'Mid-Range', 'Resort'][i % 4],
                rooms: 20 + (i * 5),
                roomTypes: ['Single', 'Double', 'Suite'],
                pricePerNight: 1500 + (i * 500),
                amenities: ['Air Conditioning', 'WiFi', 'Restaurant', 'Gym', 'Pool'],
                checkInTime: '2:00 PM',
                checkOutTime: '12:00 PM',
                description: `Comfortable stay at affordable prices`,
                rating: 3.5 + (i * 0.1),
                status: 'active',
                featured: i <= 3,
                image: `hotel-${i}.jpg`,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(hotelsData);
        console.log('✅ 10 Hotels added');
    } catch (error) {
        console.error('❌ Error seeding hotels:', error.message);
    }
}

// Seed Tourist Places
async function seedTouristPlaces() {
    try {
        const db = await getDB();
        const collection = db.collection('TouristPlaces');
        
        const placeNames = [
            'Kantanagar Temple',
            'Ramsagar Lake',
            'Dinajpur Museum',
            'Thakur Bari',
            'Parbatipur Junction',
            'Birampur Monument',
            'Khan Jahan Ali Mosque',
            'Puthia Rajshahi',
            'Nature Park',
            'Historical Fort'
        ];
        
        const placesData = [];
        for (let i = 1; i <= 10; i++) {
            placesData.push({
                placeName: placeNames[i - 1],
                location: locations[i % locations.length],
                category: ['Historical', 'Religious', 'Natural', 'Archaeological'][i % 4],
                description: `Beautiful historical and tourist destination`,
                entryFee: 50 + (i * 10),
                bestTimeToVisit: 'September to March',
                operatingHours: '6:00 AM - 6:00 PM',
                contactNumber: `01712345${(i + 100).toString().slice(-3)}`,
                facilities: ['Parking', 'Rest Area', 'Photography'],
                nearbyPlaces: ['Market', 'Restaurant', 'Hotel'],
                rating: 3.5 + (i * 0.1),
                status: 'active',
                featured: i <= 3,
                images: [`place-${i}-1.jpg`, `place-${i}-2.jpg`],
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(placesData);
        console.log('✅ 10 Tourist Places added');
    } catch (error) {
        console.error('❌ Error seeding tourist places:', error.message);
    }
}

// Seed House Rentals
async function seedHouseRentals() {
    try {
        const db = await getDB();
        const collection = db.collection('HouseRentals');
        
        const housesData = [];
        for (let i = 1; i <= 10; i++) {
            housesData.push({
                propertyName: `House ${i}`,
                location: locations[i % locations.length],
                address: `Street ${i}, ${locations[i % locations.length]}`,
                propertyType: ['Apartment', 'House', 'Room', 'Flat'][i % 4],
                bedrooms: 1 + (i % 3),
                bathrooms: 1 + (i % 2),
                squareFeet: 500 + (i * 100),
                rentAmount: 5000 + (i * 1000),
                deposit: 10000 + (i * 2000),
                ownerName: `Owner ${i}`,
                ownerPhone: `01712345${(i + 100).toString().slice(-3)}`,
                ownerEmail: `owner${i}@example.com`,
                amenities: ['Electricity', 'Water', 'Gas', 'WiFi'],
                furnishing: ['Furnished', 'Semi-Furnished', 'Unfurnished'][i % 3],
                availableFrom: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                description: `Comfortable and spacious house for rent`,
                status: 'active',
                featured: i <= 3,
                images: [`house-${i}-1.jpg`, `house-${i}-2.jpg`],
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(housesData);
        console.log('✅ 10 House Rentals added');
    } catch (error) {
        console.error('❌ Error seeding house rentals:', error.message);
    }
}

// Seed Properties
async function seedProperties() {
    try {
        const db = await getDB();
        const collection = db.collection('Properties');
        
        const propertiesData = [];
        for (let i = 1; i <= 10; i++) {
            propertiesData.push({
                propertyName: `Property ${i}`,
                location: locations[i % locations.length],
                address: `Plot ${i}, ${locations[i % locations.length]}`,
                propertyType: ['Residential', 'Commercial', 'Land', 'Agriculture'][i % 4],
                plotSize: 500 + (i * 100),
                price: 100000 + (i * 50000),
                ownerName: `Owner ${i}`,
                ownerPhone: `01712345${(i + 100).toString().slice(-3)}`,
                ownerEmail: `property${i}@example.com`,
                description: `Prime location property suitable for investment`,
                features: ['Near Market', 'Good Road', 'Accessible Location'],
                documentation: ['Title Deed', 'Survey Map'],
                status: 'active',
                featured: i <= 3,
                images: [`property-${i}-1.jpg`, `property-${i}-2.jpg`],
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(propertiesData);
        console.log('✅ 10 Properties added');
    } catch (error) {
        console.error('❌ Error seeding properties:', error.message);
    }
}

// Seed Bus Services
async function seedBusServices() {
    try {
        const db = await getDB();
        const collection = db.collection('BusServices');
        
        const busesData = [];
        for (let i = 1; i <= 10; i++) {
            busesData.push({
                serviceName: `Bus Service ${i}`,
                operatorName: `Operator ${i}`,
                location: locations[i % locations.length],
                route: `${locations[i % locations.length]} - Dhaka`,
                busNumber: `BUS${1000 + i}`,
                seatCapacity: 30 + (i * 2),
                busType: ['Luxury', 'Standard', 'Basic'][i % 3],
                departureTime: '8:00 AM',
                arrivalTime: '6:00 PM',
                journeyTime: '10 hours',
                ticketPrice: 300 + (i * 50),
                contactNumber: `01712345${(i + 100).toString().slice(-3)}`,
                email: `bus${i}@example.com`,
                amenities: ['Comfortable Seats', 'Air Conditioning', 'WiFi'],
                description: `Reliable and comfortable bus service`,
                status: 'active',
                featured: i <= 3,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(busesData);
        console.log('✅ 10 Bus Services added');
    } catch (error) {
        console.error('❌ Error seeding bus services:', error.message);
    }
}

// Seed Train Services
async function seedTrainServices() {
    try {
        const db = await getDB();
        const collection = db.collection('TrainServices');
        
        const trainsData = [];
        for (let i = 1; i <= 10; i++) {
            trainsData.push({
                trainName: `Train ${i}`,
                trainNumber: `TRAIN${1000 + i}`,
                route: `${locations[i % locations.length]} - Dhaka Junction`,
                departureStation: locations[i % locations.length],
                arrivalStation: 'Dhaka',
                departureTime: `${8 + (i % 12)}:00 AM`,
                arrivalTime: `${4 + (i % 12)}:00 PM`,
                journeyTime: '8-10 hours',
                frequency: ['Daily', 'Weekly', 'Tri-Weekly'][i % 3],
                seatCount: 200 + (i * 20),
                ticketPrice: 250 + (i * 40),
                contactNumber: `01712345${(i + 100).toString().slice(-3)}`,
                email: `train${i}@railway.com`,
                facilities: ['Dining', 'Restroom', 'AC'],
                status: 'active',
                featured: i <= 3,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(trainsData);
        console.log('✅ 10 Train Services added');
    } catch (error) {
        console.error('❌ Error seeding train services:', error.message);
    }
}

// Seed Diagnostic Centers
async function seedDiagnosticCenters() {
    try {
        const db = await getDB();
        const collection = db.collection('DiagnosticCenters');
        
        const centersData = [];
        for (let i = 1; i <= 10; i++) {
            centersData.push({
                centerName: `Diagnostic Center ${i}`,
                location: locations[i % locations.length],
                address: `Medical Plaza ${i}, ${locations[i % locations.length]}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `diagnostic${i}@example.com`,
                website: `https://diagnostic${i}.com`,
                centerType: ['Lab', 'Imaging Center', 'Both'][i % 3],
                tests: ['Blood Test', 'X-Ray', 'Ultrasound', 'CT Scan'],
                operatingHours: '8:00 AM - 8:00 PM',
                sampleCollectionTime: '5-10 minutes',
                reportDeliveryTime: '24-48 hours',
                homeCollectionAvailable: true,
                homeCollectionFee: 100,
                description: `State-of-the-art diagnostic facility`,
                rating: 4.0 + (i * 0.05),
                status: 'active',
                featured: i <= 3,
                image: `diagnostic-${i}.jpg`,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(centersData);
        console.log('✅ 10 Diagnostic Centers added');
    } catch (error) {
        console.error('❌ Error seeding diagnostic centers:', error.message);
    }
}

// Seed Courses/Teachers
async function seedTeachers() {
    try {
        const db = await getDB();
        const collection = db.collection('Teachers');
        
        const subjects = [
            'English', 'Bengali', 'Mathematics', 'Science',
            'History', 'Geography', 'Computers', 'Arts', 'Music', 'Sports'
        ];
        
        const teachersData = [];
        for (let i = 1; i <= 10; i++) {
            teachersData.push({
                name: `Teacher ${i}`,
                subject: subjects[i - 1],
                qualification: 'Master Degree',
                experience: `${3 + (i % 10)} years`,
                location: locations[i % locations.length],
                address: `Area ${i}, ${locations[i % locations.length]}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `teacher${i}@example.com`,
                classes: ['Class 1-5', 'Class 6-8', 'Class 9-10'][i % 3],
                feePerMonth: 1000 + (i * 200),
                availability: 'Available for tuition',
                experience_details: 'Teaching experience in private and government schools',
                description: `Professional teacher with excellent track record`,
                status: 'active',
                featured: i <= 3,
                image: `teacher-${i}.jpg`,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(teachersData);
        console.log('✅ 10 Teachers added');
    } catch (error) {
        console.error('❌ Error seeding teachers:', error.message);
    }
}

// Seed Educational Institutions
async function seedEducationalInstitutions() {
    try {
        const db = await getDB();
        const collection = db.collection('EducationalInstitutions');
        
        const institutionsData = [];
        for (let i = 1; i <= 10; i++) {
            institutionsData.push({
                institutionName: `School/College ${i}`,
                location: locations[i % locations.length],
                address: `Educational Zone ${i}, ${locations[i % locations.length]}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `institution${i}@example.com`,
                website: `https://institution${i}.edu.bd`,
                type: ['School', 'College', 'University', 'Madrasa'][i % 4],
                sections: ['Pre-School', 'Primary', 'Secondary', 'Higher'],
                studentCount: 500 + (i * 100),
                teacherCount: 30 + (i * 5),
                established: `${2005 + (i * 2)}`,
                chairman: `Mr. Chairman ${i}`,
                principal: `Dr. Principal ${i}`,
                affiliation: 'Government / National Curriculum',
                facilities: ['Library', 'Laboratory', 'Computer Room', 'Playground'],
                description: `Reputed educational institution`,
                status: 'active',
                featured: i <= 3,
                image: `institution-${i}.jpg`,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(institutionsData);
        console.log('✅ 10 Educational Institutions added');
    } catch (error) {
        console.error('❌ Error seeding educational institutions:', error.message);
    }
}

// Seed Courier Services
async function seedCourierServices() {
    try {
        const db = await getDB();
        const collection = db.collection('CourierServices');
        
        const courierData = [];
        for (let i = 1; i <= 10; i++) {
            courierData.push({
                serviceName: `Courier Service ${i}`,
                location: locations[i % locations.length],
                address: `Logistics Hub ${i}, ${locations[i % locations.length]}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `courier${i}@example.com`,
                website: `https://courier${i}.com`,
                chargePerKg: 20 + (i * 2),
                minimumCharge: 50,
                deliveryTime: '2-3 days',
                coverage: ['Dinajpur', 'Rangpur', 'Bogra', 'Thakurgaon'],
                services: ['Door-to-Door', 'Parcel', 'Document', 'Fragile Goods'],
                insuredDelivery: true,
                insuranceCharge: 25,
                contactPerson: `Manager ${i}`,
                description: `Fast and reliable courier service`,
                status: 'active',
                featured: i <= 3,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(courierData);
        console.log('✅ 10 Courier Services added');
    } catch (error) {
        console.error('❌ Error seeding courier services:', error.message);
    }
}

// Seed Police Stations
async function seedPoliceStations() {
    try {
        const db = await getDB();
        const collection = db.collection('PoliceStations');
        
        const stationsData = [];
        for (let i = 1; i <= 10; i++) {
            stationsData.push({
                stationName: `Police Station ${i}`,
                location: locations[i % locations.length],
                address: `Police Headquarters ${i}, ${locations[i % locations.length]}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `police${i}@example.com`,
                emergencyNumber: '999',
                officerInCharge: `Insp. ${['Ahmed', 'Karim', 'Hassan', 'Ali', 'Mohammad'][i % 5]}`,
                totalPolice: 50 + (i * 5),
                jurisdiction: locations[i % locations.length],
                operatingHours: '24 Hours',
                services: ['FIR Registration', 'Traffic Control', 'Emergency Response'],
                description: `Government police station`,
                status: 'active',
                featured: i <= 3,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(stationsData);
        console.log('✅ 10 Police Stations added');
    } catch (error) {
        console.error('❌ Error seeding police stations:', error.message);
    }
}

// Seed Fire Services
async function seedFireServices() {
    try {
        const db = await getDB();
        const collection = db.collection('FireServices');
        
        const fireData = [];
        for (let i = 1; i <= 10; i++) {
            fireData.push({
                serviceName: `Fire Station ${i}`,
                location: locations[i % locations.length],
                address: `Fire Service Hub ${i}, ${locations[i % locations.length]}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `fire${i}@example.com`,
                emergencyNumber: '999',
                officerInCharge: `Chief ${['Khan', 'Hossain', 'Shah', 'Malik'][i % 4]}`,
                totalFiremen: 30 + (i * 3),
                vehicles: 5 + (i % 3),
                jurisdiction: locations[i % locations.length],
                equipment: ['Water Pumps', 'Fire Truck', 'Rescue Equipment'],
                operatingHours: '24 Hours',
                services: ['Fire Fighting', 'Rescue Operation', 'Prevention'],
                description: `Government fire service station`,
                status: 'active',
                featured: i <= 3,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(fireData);
        console.log('✅ 10 Fire Services added');
    } catch (error) {
        console.error('❌ Error seeding fire services:', error.message);
    }
}

// Seed Electricity Offices
async function seedElectricityOffices() {
    try {
        const db = await getDB();
        const collection = db.collection('ElectricityOffices');
        
        const officesData = [];
        for (let i = 1; i <= 10; i++) {
            officesData.push({
                officeName: `Electricity Office ${i}`,
                location: locations[i % locations.length],
                address: `Power Station ${i}, ${locations[i % locations.length]}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `electricity${i}@example.com`,
                website: `https://electricity${i}.com`,
                emergencyNumber: '01800-123456',
                officerInCharge: `Manager ${i}`,
                jurisdiction: locations[i % locations.length],
                consumerCount: 5000 + (i * 500),
                operatingHours: '9:00 AM - 5:00 PM',
                services: ['Bill Payment', 'New Connection', 'Complaint', 'Maintenance'],
                operatingCost: 'Competitive',
                description: `Government electricity supply office`,
                status: 'active',
                featured: i <= 3,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(officesData);
        console.log('✅ 10 Electricity Offices added');
    } catch (error) {
        console.error('❌ Error seeding electricity offices:', error.message);
    }
}

// Seed Municipal Services
async function seedMunicipalServices() {
    try {
        const db = await getDB();
        const collection = db.collection('MunicipalServices');
        
        const servicesData = [];
        for (let i = 1; i <= 10; i++) {
            servicesData.push({
                serviceName: `Municipal Service ${i}`,
                location: locations[i % locations.length],
                category: ['Water Supply', 'Waste Management', 'Road Maintenance', 'Sanitation'][i % 4],
                address: `Municipal Office ${i}, ${locations[i % locations.length]}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `municipal${i}@example.com`,
                website: `https://municipal${i}.com`,
                officerInCharge: `Officer ${i}`,
                operatingHours: '9:00 AM - 5:00 PM',
                serviceArea: locations[i % locations.length],
                staffCount: 40 + (i * 3),
                equipment: ['Vehicles', 'Tools', 'Machinery'],
                services: ['Maintenance', 'Repair', 'Emergency Response'],
                description: `Essential municipal service provider`,
                status: 'active',
                featured: i <= 3,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(servicesData);
        console.log('✅ 10 Municipal Services added');
    } catch (error) {
        console.error('❌ Error seeding municipal services:', error.message);
    }
}

// Seed Entrepreneurs/SMEs
async function seedEntrepreneurs() {
    try {
        const db = await getDB();
        const collection = db.collection('Entrepreneurs');
        
        const businessTypes = [
            'Manufacturing', 'Trading', 'Service', 'Technology',
            'Textile', 'Handicraft', 'Food Production', 'Agriculture', 'Retail', 'Wholesale'
        ];
        
        const entrepreneursData = [];
        for (let i = 1; i <= 10; i++) {
            entrepreneursData.push({
                businessName: `Business ${i}`,
                ownerName: `Entrepreneur ${i}`,
                businessType: businessTypes[i - 1],
                location: locations[i % locations.length],
                address: `Business Zone ${i}, ${locations[i % locations.length]}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `business${i}@example.com`,
                website: `https://business${i}.com`,
                foundedYear: 2015 + (i % 8),
                employeeCount: 10 + (i * 5),
                products: ['Product A', 'Product B', 'Product C'],
                revenue: 100000 + (i * 50000),
                businessRegistration: `REG${1000 + i}`,
                description: `Successful SME business`,
                status: 'active',
                featured: i <= 3,
                image: `business-${i}.jpg`,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(entrepreneursData);
        console.log('✅ 10 Entrepreneurs added');
    } catch (error) {
        console.error('❌ Error seeding entrepreneurs:', error.message);
    }
}

// Seed Market Rates
async function seedMarketRates() {
    try {
        const db = await getDB();
        const collection = db.collection('MarketRates');
        
        const items = [
            'Rice', 'Wheat', 'Potato', 'Onion', 'Tomato',
            'Beef', 'Chicken', 'Fish', 'Egg', 'Milk'
        ];
        
        const ratesData = [];
        for (let i = 1; i <= 10; i++) {
            ratesData.push({
                itemName: items[i - 1],
                unit: 'kg',
                currentRate: 30 + (i * 10),
                previousRate: 28 + (i * 10),
                priceChange: (i % 3) - 1,
                percentageChange: 2.5 + (i * 0.5),
                marketLocation: locations[i % locations.length],
                lastUpdated: new Date(),
                updatedBy: 'Admin',
                trend: ['Up', 'Down', 'Stable'][i % 3],
                description: `Current market rate for ${items[i - 1]}`,
                status: 'active',
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(ratesData);
        console.log('✅ 10 Market Rates added');
    } catch (error) {
        console.error('❌ Error seeding market rates:', error.message);
    }
}

// Seed Doctors (ডাক্তার)
async function seedDoctors() {
    try {
        const db = await getDB();
        const collection = db.collection('Doctors');
        
        const specializations = [
            'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics',
            'Dermatology', 'General Medicine', 'Dentistry', 'Surgery',
            'Gynecology', 'Psychiatry'
        ];
        
        const docNames = [
            'Ahmed Mahmud', 'Karim Hassan', 'Mohammad Ali', 'Fatima Khan',
            'Rajib Roy', 'Mina Singh', 'Shohag Chandra', 'Nusrat Jahan',
            'Ismail Khan', 'Priya Dutta'
        ];
        
        const doctorsData = [];
        for (let i = 1; i <= 10; i++) {
            doctorsData.push({
                doctorName: `Dr. ${docNames[i - 1]}`,
                specialization: specializations[i - 1],
                qualification: ['MBBS', 'FCPS', 'MD', 'DDS', 'BDS'][i % 5],
                experience: `${3 + (i % 20)} years`,
                location: locations[i % locations.length],
                address: `Medical Complex ${i}, ${locations[i % locations.length]}`,
                clinicName: `${specializations[i - 1]} Clinic ${i}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `doctor${i}@clinic.com`,
                appointmentFee: 300 + (i * 50),
                consultationHours: '10:00 AM - 5:00 PM',
                availableDays: 'Monday - Friday',
                registrationNumber: `REG${50000 + i}`,
                description: `Expert ${specializations[i - 1]} specialist with ${3 + (i % 20)} years experience`,
                status: 'active',
                featured: i <= 3,
                image: `doctor-${i}.jpg`,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(doctorsData);
        console.log('✅ 10 Doctors added');
    } catch (error) {
        console.error('❌ Error seeding doctors:', error.message);
    }
}

// Seed Wedding Services (বিবাহ সেবা)
async function seedWeddingServices() {
    try {
        const db = await getDB();
        const collection = db.collection('WeddingServices');
        
        const serviceTypes = [
            'Photographer', 'Decorator', 'Caterer', 'Mehendi Artist',
            'DJ Service', 'Invitation Card', 'Florals', 'Priest/Maulana',
            'Event Manager', 'Wedding Dress Designer'
        ];
        
        const weddingData = [];
        for (let i = 1; i <= 10; i++) {
            weddingData.push({
                serviceName: `${serviceTypes[i - 1]} ${i}`,
                serviceType: serviceTypes[i - 1],
                ownerName: `Owner ${i}`,
                location: locations[i % locations.length],
                address: `Wedding Service Hub ${i}, ${locations[i % locations.length]}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `wedding${i}@example.com`,
                website: `https://wedding${i}.com`,
                basePrice: 5000 + (i * 2000),
                experienceYears: 2 + (i % 10),
                previousEvents: 20 + (i * 10),
                team: 3 + (i % 8),
                services: ['Wedding', 'Engagement', 'Mehendi', 'Reception'],
                description: `Professional ${serviceTypes[i - 1]} service for your special day`,
                portfolio: `wedding-portfolio-${i}.jpg`,
                rating: 3.5 + (i * 0.1),
                status: 'active',
                featured: i <= 3,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(weddingData);
        console.log('✅ 10 Wedding Services added');
    } catch (error) {
        console.error('❌ Error seeding wedding services:', error.message);
    }
}

// Seed Car Rentals (গাড়ি ভাড়া)
async function seedCarRentals() {
    try {
        const db = await getDB();
        const collection = db.collection('CarRentals');
        
        const carModels = [
            'Toyota Corolla', 'Hyundai Accent', 'Suzuki Alto', 'Honda Civic',
            'Toyota Prius', 'Nissan Sunny', 'Ford Focus', 'BMW 3 Series',
            'Mercedes C-Class', 'Mahindra XUV500'
        ];
        
        const colors = ['Black', 'White', 'Silver', 'Gray', 'Red', 'Blue', 'Green'];
        const conditions = ['Excellent', 'Good', 'Fair'];
        const fuelTypes = ['Petrol', 'Diesel', 'Hybrid'];
        
        const carData = [];
        for (let i = 1; i <= 10; i++) {
            carData.push({
                carModel: carModels[i - 1],
                registrationNumber: `REG${2000 + i}`,
                ownerName: `Owner ${i}`,
                color: colors[i % colors.length],
                year: 2018 + (i % 6),
                mileage: 20000 + (i * 5000),
                location: locations[i % locations.length],
                address: `Car Rental Hub ${i}, ${locations[i % locations.length]}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `carrent${i}@example.com`,
                dailyRent: 1500 + (i * 300),
                monthlyRent: 35000 + (i * 5000),
                driverAvailable: i % 2 === 0,
                driverCharge: 500,
                fuelType: fuelTypes[i % fuelTypes.length],
                seats: 4 + (i % 3),
                condition: conditions[i % conditions.length],
                insurance: true,
                description: `Comfortable and well-maintained ${carModels[i - 1]}`,
                status: 'active',
                featured: i <= 3,
                image: `car-${i}.jpg`,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(carData);
        console.log('✅ 10 Car Rentals added');
    } catch (error) {
        console.error('❌ Error seeding car rentals:', error.message);
    }
}

// Seed Skilled Services/Labour (মিস্ত্রি সেবা)
async function seedSkilledServices() {
    try {
        const db = await getDB();
        const collection = db.collection('SkilledServices');
        
        const skillTypes = [
            'Plumber', 'Electrician', 'Carpenter', 'Mason',
            'Painter', 'Welder', 'AC Technician', 'Mobile Repairer',
            'Construction Worker', 'Furniture Maker'
        ];
        
        const qualities = ['Excellent', 'Good', 'Average'];
        
        const skilledData = [];
        for (let i = 1; i <= 10; i++) {
            skilledData.push({
                workerName: `${skillTypes[i - 1]} ${i}`,
                skillType: skillTypes[i - 1],
                qualifications: `${skillTypes[i - 1]} Certificate`,
                experience: `${3 + (i % 15)} years`,
                location: locations[i % locations.length],
                address: `Service Area ${i}, ${locations[i % locations.length]}`,
                phone: `01712345${(i + 100).toString().slice(-3)}`,
                email: `mistri${i}@example.com`,
                dailyRate: 500 + (i * 100),
                hourlyRate: 150 + (i * 30),
                materialCost: 'Separate',
                availability: 'Available everyday',
                workQuality: qualities[i % qualities.length],
                completedJobs: 50 + (i * 10),
                description: `Experienced and reliable ${skillTypes[i - 1]} service`,
                rating: 4.0 + (i * 0.05),
                status: 'active',
                featured: i <= 3,
                image: `mistri-${i}.jpg`,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        
        await collection.insertMany(skilledData);
        console.log('✅ 10 Skilled Services added');
    } catch (error) {
        console.error('❌ Error seeding skilled services:', error.message);
    }
}

// Main execution function
async function seedAllData() {
    try {
        console.log('\n🌟 Starting database seeding...\n');
        
        await seedCategories();
        await seedBloodServices();
        await seedHospitals();
        await seedProducts();
        await seedJobs();
        await seedRestaurants();
        await seedHotels();
        await seedTouristPlaces();
        await seedHouseRentals();
        await seedProperties();
        await seedBusServices();
        await seedTrainServices();
        await seedDiagnosticCenters();
        await seedTeachers();
        await seedEducationalInstitutions();
        await seedCourierServices();
        await seedPoliceStations();
        await seedFireServices();
        await seedElectricityOffices();
        await seedMunicipalServices();
        await seedEntrepreneurs();
        await seedMarketRates();
        
        // New category seeds
        await seedDoctors();
        await seedWeddingServices();
        await seedCarRentals();
        await seedSkilledServices();
        
        console.log('\n✅ Database seeding completed successfully!');
        console.log('📊 Summary: Added 10 dummy records for each of 26 collections');
        console.log('\n🎉 Your database is now populated with test data!\n');
        
        process.exit(0);
    } catch (error) {
        console.error('❌ Error during seeding:', error);
        process.exit(1);
    }
}

// Run the seed function
await seedAllData();
