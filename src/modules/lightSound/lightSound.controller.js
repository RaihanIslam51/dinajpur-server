import {
    getAllLightSoundsFromDB,
    getLightSoundByIdFromDB,
    createLightSoundInDB,
    updateLightSoundStatusInDB,
    deleteLightSoundFromDB
} from './lightSound.service.js';

export async function getAllLightSounds(req, res) {
    try {
        const list = await getAllLightSoundsFromDB(req.query);
        res.status(200).json({
            success: true,
            count: list.length,
            data: list
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'লাইট ও সাউন্ড তথ্য পাওয়া যায়নি',
            error: error.message
        });
    }
}

export async function getLightSoundById(req, res) {
    try {
        const item = await getLightSoundByIdFromDB(req.params.id);
        if (!item) {
            return res.status(404).json({
                success: false,
                message: 'লাইট ও সাউন্ড প্রদানকারী পাওয়া যায়নি'
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

export async function createLightSound(req, res) {
    try {
        const newItem = await createLightSoundInDB(req.body);
        res.status(201).json({
            success: true,
            message: 'লাইট ও সাউন্ড আবেদন সফলভাবে জমা নেওয়া হয়েছে',
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

export async function updateLightSoundStatus(req, res) {
    try {
        const { status } = req.body;
        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'অকার্যকর স্ট্যাটাস মান'
            });
        }
        const updated = await updateLightSoundStatusInDB(req.params.id, status);
        if (!updated) {
            return res.status(404).json({
                success: false,
                message: 'লাইট ও সাউন্ড প্রদানকারী পাওয়া যায়নি'
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

export async function deleteLightSound(req, res) {
    try {
        const deleted = await deleteLightSoundFromDB(req.params.id);
        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: 'লাইট ও সাউন্ড প্রদানকারী পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'লাইট ও সাউন্ড প্রদানকারী সফলভাবে মুছে ফেলা হয়েছে'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ডিলিট করতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
}
