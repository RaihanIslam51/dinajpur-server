import {
    getAllAmbulanceService,
    getAmbulanceByIdService,
    createAmbulanceService,
    updateAmbulanceService,
    deleteAmbulanceService,
} from './ambulance.service.js';

export const getAllAmbulances = async (req, res) => {
    try {
        const ambulances = await getAllAmbulanceService(req.query);
        return res.status(200).json({
            success: true,
            count: ambulances.length,
            data: ambulances,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'অ্যাম্বুলেন্সের তালিকা পেতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const getAmbulanceById = async (req, res) => {
    try {
        const ambulance = await getAmbulanceByIdService(req.params.id);
        if (!ambulance) {
            return res.status(404).json({
                success: false,
                message: 'অ্যাম্বুলেন্সের তথ্য পাওয়া যায়নি',
            });
        }
        return res.status(200).json({
            success: true,
            data: ambulance,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'অ্যাম্বুলেন্সের বিবরণ পেতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const createAmbulance = async (req, res) => {
    try {
        const newAmbulance = await createAmbulanceService(req.body);
        return res.status(201).json({
            success: true,
            message: 'অ্যাম্বুলেন্সের তথ্য সফলভাবে যোগ করা হয়েছে',
            data: newAmbulance,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'নতুন অ্যাম্বুলেন্স যোগ করতে ব্যর্থ হয়েছে',
            error: error.message,
        });
    }
};

export const updateAmbulance = async (req, res) => {
    try {
        const updatedAmbulance = await updateAmbulanceService(req.params.id, req.body);
        if (!updatedAmbulance) {
            return res.status(404).json({
                success: false,
                message: 'অ্যাম্বুলেন্সের তথ্য পাওয়া যায়নি',
            });
        }
        return res.status(200).json({
            success: true,
            message: 'অ্যাম্বুলেন্সের তথ্য সফলভাবে আপডেট করা হয়েছে',
            data: updatedAmbulance,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'অ্যাম্বুলেন্স আপডেট করতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};

export const deleteAmbulance = async (req, res) => {
    try {
        const deletedAmbulance = await deleteAmbulanceService(req.params.id);
        if (!deletedAmbulance) {
            return res.status(404).json({
                success: false,
                message: 'অ্যাম্বুলেন্সের তথ্য পাওয়া যায়নি',
            });
        }
        return res.status(200).json({
            success: true,
            message: 'অ্যাম্বুলেন্সের তথ্য সফলভাবে মুছে ফেলা হয়েছে',
            data: deletedAmbulance,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'অ্যাম্বুলেন্স মুছে ফেলতে সমস্যা হয়েছে',
            error: error.message,
        });
    }
};
