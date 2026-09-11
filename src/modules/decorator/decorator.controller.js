import {
    getAllDecoratorsFromDB,
    getDecoratorByIdFromDB,
    createDecoratorInDB,
    updateDecoratorStatusInDB,
    deleteDecoratorFromDB
} from './decorator.service.js';

export async function getAllDecorators(req, res) {
    try {
        const list = await getAllDecoratorsFromDB(req.query);
        res.status(200).json({
            success: true,
            count: list.length,
            data: list
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ডেকোরেটর তথ্য পাওয়া যায়নি',
            error: error.message
        });
    }
}

export async function getDecoratorById(req, res) {
    try {
        const item = await getDecoratorByIdFromDB(req.params.id);
        if (!item) {
            return res.status(404).json({
                success: false,
                message: 'ডেকোরেটর পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            data: item
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'তথ্য লোড করতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
}

export async function createDecorator(req, res) {
    try {
        const newItem = await createDecoratorInDB(req.body);
        res.status(201).json({
            success: true,
            message: 'ডেকোরেটর আবেদন সফলভাবে জমা নেওয়া হয়েছে',
            data: newItem
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'আবেদন জমা দিতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
}

export async function updateDecoratorStatus(req, res) {
    try {
        const { status } = req.body;
        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'অকার্যকর স্ট্যাটাস মান'
            });
        }
        const updated = await updateDecoratorStatusInDB(req.params.id, status);
        if (!updated) {
            return res.status(404).json({
                success: false,
                message: 'ডেকোরেটর পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: `স্ট্যাটাস সফলভাবে ${status} করা হয়েছে`,
            data: updated
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'স্ট্যাটাস আপডেট করতে সমস্যা হয়েছে',
            error: error.message
        });
    }
}

export async function deleteDecorator(req, res) {
    try {
        const deleted = await deleteDecoratorFromDB(req.params.id);
        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: 'ডেকোরেটর পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'ডেকোরেটর সফলভাবে মুছে ফেলা হয়েছে'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ডিলিট করতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
}
