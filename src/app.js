import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';

import { errorHandler, notFoundHandler } from './middlewares/errorHandler.middleware.js';

// Import 26 Feature Module Routes
import hospitalRoutes from './modules/hospital/hospital.routes.js';
import doctorRoutes from './modules/doctor/doctor.routes.js';
import diagnosticCenterRoutes from './modules/diagnosticCenter/diagnosticCenter.routes.js';
import bloodServiceRoutes from './modules/bloodService/bloodService.routes.js';
import fireServiceRoutes from './modules/fireService/fireService.routes.js';
import policeStationRoutes from './modules/policeStation/policeStation.routes.js';
import busServiceRoutes from './modules/busService/busService.routes.js';
import trainServiceRoutes from './modules/trainService/trainService.routes.js';
import courierServiceRoutes from './modules/courierService/courierService.routes.js';
import electricityOfficeRoutes from './modules/electricityOffice/electricityOffice.routes.js';
import municipalServiceRoutes from './modules/municipalService/municipalService.routes.js';
import hotelRoutes from './modules/hotel/hotel.routes.js';
import restaurantRoutes from './modules/restaurant/restaurant.routes.js';
import touristPlaceRoutes from './modules/touristPlace/touristPlace.routes.js';
import houseRentalRoutes from './modules/houseRental/houseRental.routes.js';
import propertyRoutes from './modules/property/property.routes.js';
import jobRoutes from './modules/job/job.routes.js';
import entrepreneurRoutes from './modules/entrepreneur/entrepreneur.routes.js';
import marketRateRoutes from './modules/marketRate/marketRate.routes.js';
import teacherRoutes from './modules/teacher/teacher.routes.js';
import productRoutes from './modules/product/product.routes.js';
import categoryRoutes from './modules/category/category.routes.js';
import bannerRoutes from './modules/banner/banner.routes.js';
import featuredRoutes from './modules/featured/featured.routes.js';
import userRoutes from './modules/user/user.routes.js';
import reviewRoutes from './modules/review/review.routes.js';
import complaintRoutes from './modules/complaint/complaint.routes.js';
import notificationRoutes from './modules/notification/notification.routes.js';
import newsRoutes from './modules/news/news.routes.js';
import rajMistriRoutes from './modules/rajMistri/rajMistri.routes.js';
import carpenterMistriRoutes from './modules/carpenterMistri/carpenterMistri.routes.js';
import rangMistriRoutes from './modules/rangMistri/rangMistri.routes.js';
import nolkupMistriRoutes from './modules/nolkupMistri/nolkupMistri.routes.js';
import sanitaryMistriRoutes from './modules/sanitaryMistri/sanitaryMistri.routes.js';
import tilesMistriRoutes from './modules/tilesMistri/tilesMistri.routes.js';
import gariServicingRoutes from './modules/gariServicing/gariServicing.routes.js';
import bikeMistriRoutes from './modules/bikeMistri/bikeMistri.routes.js';
import wifiTechnicianRoutes from './modules/wifiTechnician/wifiTechnician.routes.js';
import acServicingRoutes from './modules/acServicing/acServicing.routes.js';
import fridgeServicingRoutes from './modules/fridgeServicing/fridgeServicing.routes.js';
import mobileServicingRoutes from './modules/mobileServicing/mobileServicing.routes.js';
import computerServicingRoutes from './modules/computerServicing/computerServicing.routes.js';
import electricianRoutes from './modules/electrician/electrician.routes.js';
import cctvServicingRoutes from './modules/cctvServicing/cctvServicing.routes.js';
import tvServicingRoutes from './modules/tvServicing/tvServicing.routes.js';
import otherServicesRoutes from './modules/otherServices/otherServices.routes.js';
import cateringServiceRoutes from './modules/cateringService/cateringService.routes.js';
import photographerRoutes from './modules/photographer/photographer.routes.js';
import eventManagementRoutes from './modules/eventManagement/eventManagement.routes.js';
import communityCenterRoutes from './modules/communityCenter/communityCenter.routes.js';
import decoratorRoutes from './modules/decorator/decorator.routes.js';
import lightSoundRoutes from './modules/lightSound/lightSound.routes.js';
import alponaArtistRoutes from './modules/alponaArtist/alponaArtist.routes.js';
import cardiologyRoutes from './modules/cardiology/cardiology.routes.js';
import surgeryRoutes from './modules/surgery/surgery.routes.js';
import dentistryRoutes from './modules/dentistry/dentistry.routes.js';
import dermatologyRoutes from './modules/dermatology/dermatology.routes.js';
import endocrinologyRoutes from './modules/endocrinology/endocrinology.routes.js';
import entRoutes from './modules/ent/ent.routes.js';
import ophthalmologyRoutes from './modules/ophthalmology/ophthalmology.routes.js';
import hepatologyRoutes from './modules/hepatology/hepatology.routes.js';
import urologyRoutes from './modules/urology/urology.routes.js';
import obstetricsRoutes from './modules/obstetrics/obstetrics.routes.js';
import pharmacyRoutes from './modules/pharmacy/pharmacy.routes.js';
import nephrologyRoutes from './modules/nephrology/nephrology.routes.js';
import neurologyRoutes from './modules/neurology/neurology.routes.js';
import nutritionRoutes from './modules/nutrition/nutrition.routes.js';
import oncologyRoutes from './modules/oncology/oncology.routes.js';
import orthopedicsRoutes from './modules/orthopedics/orthopedics.routes.js';
import painMedicineRoutes from './modules/painMedicine/painMedicine.routes.js';
import pediatricsRoutes from './modules/pediatrics/pediatrics.routes.js';
import veterinaryRoutes from './modules/veterinary/veterinary.routes.js';
import anesthesiologyRoutes from './modules/anesthesiology/anesthesiology.routes.js';
import behaviorHypertensionRoutes from './modules/behaviorHypertension/behaviorHypertension.routes.js';
import physiotherapyRoutes from './modules/physiotherapy/physiotherapy.routes.js';
import schoolRoutes from './modules/school/school.routes.js';
import ambulanceRoutes from './modules/ambulance/ambulance.routes.js';
import privateCarRoutes from './modules/privateCar/privateCar.routes.js';

const app = express();

// Global Middlewares
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'] }));
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root Health Check Endpoint
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Smart City API Service Online',
        system: 'Dinajpur Smart City Platform',
        version: '1.0.0',
        activeModules: 27
    });
});

// Mount Feature API Routes
app.use('/api/hospitals', hospitalRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/diagnostic-centers', diagnosticCenterRoutes);
app.use('/api/blood-services', bloodServiceRoutes);
app.use('/api/fire-services', fireServiceRoutes);
app.use('/api/police-stations', policeStationRoutes);
app.use('/api/bus-services', busServiceRoutes);
app.use('/api/train-services', trainServiceRoutes);
app.use('/api/courier-services', courierServiceRoutes);
app.use('/api/electricity-offices', electricityOfficeRoutes);
app.use('/api/municipal-services', municipalServiceRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/tourist-places', touristPlaceRoutes);
app.use('/api/house-rentals', houseRentalRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/entrepreneurs', entrepreneurRoutes);
app.use('/api/market-rates', marketRateRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/banners', bannerRoutes);
app.use('/api/featured', featuredRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/raj-mistri', rajMistriRoutes);
app.use('/api/carpenter-mistri', carpenterMistriRoutes);
app.use('/api/rang-mistri', rangMistriRoutes);
app.use('/api/nolkup-mistri', nolkupMistriRoutes);
app.use('/api/sanitary-mistri', sanitaryMistriRoutes);
app.use('/api/tiles-mistri', tilesMistriRoutes);
app.use('/api/gari-servicing', gariServicingRoutes);
app.use('/api/bike-mistri', bikeMistriRoutes);
app.use('/api/wifi-technician', wifiTechnicianRoutes);
app.use('/api/ac-servicing', acServicingRoutes);
app.use('/api/fridge-servicing', fridgeServicingRoutes);
app.use('/api/mobile-servicing', mobileServicingRoutes);
app.use('/api/computer-servicing', computerServicingRoutes);
app.use('/api/electrician', electricianRoutes);
app.use('/api/cctv-servicing', cctvServicingRoutes);
app.use('/api/tv-servicing', tvServicingRoutes);
app.use('/api/other-services', otherServicesRoutes);
app.use('/api/catering-service', cateringServiceRoutes);
app.use('/api/photographer', photographerRoutes);
app.use('/api/event-management', eventManagementRoutes);
app.use('/api/community-center', communityCenterRoutes);
app.use('/api/decorator', decoratorRoutes);
app.use('/api/light-sound', lightSoundRoutes);
app.use('/api/alpona-artist', alponaArtistRoutes);
app.use('/api/cardiology', cardiologyRoutes);
app.use('/api/surgery', surgeryRoutes);
app.use('/api/dentistry', dentistryRoutes);
app.use('/api/dermatology', dermatologyRoutes);
app.use('/api/endocrinology', endocrinologyRoutes);
app.use('/api/ent', entRoutes);
app.use('/api/ophthalmology', ophthalmologyRoutes);
app.use('/api/hepatology', hepatologyRoutes);
app.use('/api/urology', urologyRoutes);
app.use('/api/obstetrics', obstetricsRoutes);
app.use('/api/pharmacy', pharmacyRoutes);
app.use('/api/nephrology', nephrologyRoutes);
app.use('/api/neurology', neurologyRoutes);
app.use('/api/nutrition', nutritionRoutes);
app.use('/api/oncology', oncologyRoutes);
app.use('/api/orthopedics', orthopedicsRoutes);
app.use('/api/pain-medicine', painMedicineRoutes);
app.use('/api/pediatrics', pediatricsRoutes);
app.use('/api/veterinary', veterinaryRoutes);
app.use('/api/anesthesiology', anesthesiologyRoutes);
app.use('/api/behavior-hypertension', behaviorHypertensionRoutes);
app.use('/api/physiotherapy', physiotherapyRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/ambulances', ambulanceRoutes);
app.use('/api/private-cars', privateCarRoutes);

// Error Handling Middlewares
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
