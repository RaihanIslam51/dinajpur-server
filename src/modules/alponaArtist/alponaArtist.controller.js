import {
    getAlponaArtists,
    getAlponaArtistById,
    createAlponaArtist,
    updateAlponaArtistStatus,
    deleteAlponaArtist
} from './alponaArtist.service.js';

export const getAllAlponaArtistsController = async (req, res, next) => {
    try {
        const data = await getAlponaArtists(req.query);
        res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        next(error);
    }
};

export const getAlponaArtistByIdController = async (req, res, next) => {
    try {
        const data = await getAlponaArtistById(req.params.id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'আলপনা শিল্পী তথ্য পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
};

export const createAlponaArtistController = async (req, res, next) => {
    try {
        const data = await createAlponaArtist(req.body);
        res.status(201).json({
            success: true,
            message: 'আপনার আবেদনটি সফলভাবে জমা হয়েছে। অনুমোদনের পর তালিকাভুক্ত হবে।',
            data
        });
    } catch (error) {
        next(error);
    }
};

export const updateAlponaArtistStatusController = async (req, res, next) => {
    try {
        const { status } = req.body;
        const data = await updateAlponaArtistStatus(req.params.id, status);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'আলপনা শিল্পী পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'স্ট্যাটাস সফলভাবে আপডেট করা হয়েছে',
            data
        });
    } catch (error) {
        next(error);
    }
};

export const deleteAlponaArtistController = async (req, res, next) => {
    try {
        const data = await deleteAlponaArtist(req.params.id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'আলপনা শিল্পী পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'আলপনা শিল্পীর তথ্য সফলভাবে মুছে ফেলা হয়েছে'
        });
    } catch (error) {
        next(error);
    }
};
