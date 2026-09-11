/**
 * Nolkup Mistri (Tube-well & Plumbing Technician) Controller Layer
 */
import {
    getAllNolkupMistrisService,
    getNolkupMistriByIdService,
    createNolkupMistriService,
    updateNolkupMistriStatusService,
    deleteNolkupMistriService
} from './nolkupMistri.service.js';
import { validateNolkupMistriData } from './nolkupMistri.model.js';

export const getAllNolkupMistris = async (req, res) => {
    try {
        const data = await getAllNolkupMistrisService(req.query);
        return res.status(200).json({
            success: true,
            count: data.length,
            data
        });
    } catch (error) {
        console.error('Error fetching Nolkup Mistris:', error);
        return res.status(500).json({
            success: false,
            message: 'নলকূপ মিস্ত্রি তালিকা লোড করতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const getNolkupMistriById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getNolkupMistriByIdService(id);
        if (!data) {
            return res.status(404).json({
                success: false,
                message: 'নলকূপ মিস্ত্রি পাওয়া যায়নি'
            });
        }
        return res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'তথ্য লোড করতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const createNolkupMistri = async (req, res) => {
    try {
        const validation = validateNolkupMistriData(req.body);
        if (!validation.isValid) {
            return res.status(400).json({
                success: false,
                message: 'ভুল ইনপুট তথ্য',
                errors: validation.errors
            });
        }

        const newRecord = await createNolkupMistriService(req.body);
        return res.status(201).json({
            success: true,
            message: 'আপনার তথ্য পর্যালোচনার জন্য জমা হয়েছে, অনুমোদনের পর এটি তালিকায় দেখা যাবে।',
            data: newRecord
        });
    } catch (error) {
        console.error('Error creating Nolkup Mistri:', error);
        return res.status(500).json({
            success: false,
            message: 'নলকূপ মিস্ত্রির তথ্য জমা নিতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const updateNolkupMistriStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'অকার্যকর স্ট্যাটাস মান'
            });
        }

        const updated = await updateNolkupMistriStatusService(id, status);
        if (!updated) {
            return res.status(404).json({
                success: false,
                message: 'নলকূপ মিস্ত্রি পাওয়া যায়নি'
            });
        }

        return res.status(200).json({
            success: true,
            message: `স্ট্যাটাস সফলভাবে '${status}' করা হয়েছে`,
            data: updated
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'স্ট্যাটাস আপডেট করতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};

export const deleteNolkupMistri = async (req, res) => {
    try {
        const { id } = req.params;
        const success = await deleteNolkupMistriService(id);
        if (!success) {
            return res.status(404).json({
                success: false,
                message: 'নলকূপ মিস্ত্রি পাওয়া যায়নি বা মোছা সম্ভব হয়নি'
            });
        }
        return res.status(200).json({
            success: true,
            message: 'নলকূপ মিস্ত্রি তথ্য সফলভাবে মুছে ফেলা হয়েছে'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'তথ্য মুছতে সমস্যা হয়েছে',
            error: error.message
        });
    }
};
