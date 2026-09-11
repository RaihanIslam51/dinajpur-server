import {
    getAllCommunityCentersFromDB,
    getCommunityCenterByIdFromDB,
    createCommunityCenterInDB,
    updateCommunityCenterStatusInDB,
    deleteCommunityCenterFromDB
} from './communityCenter.service.js';

export async function getAllCommunityCenters(req, res) {
    try {
        const centers = await getAllCommunityCentersFromDB(req.query);
        res.status(200).json({
            success: true,
            count: centers.length,
            data: centers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'কমিউনিটি সেন্টারের তথ্য পাওয়া যায়নি',
            error: error.message
        });
    }
}

export async function getCommunityCenterById(req, res) {
    try {
        const center = await getCommunityCenterByIdFromDB(req.params.id);
        if (!center) {
            return res.status(404).json({
                success: false,
                message: 'কমিউনিটি সেন্টার পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            data: center
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'তথ্য লোড করতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
}

export async function createCommunityCenter(req, res) {
    try {
        const newCenter = await createCommunityCenterInDB(req.body);
        res.status(201).json({
            success: true,
            message: 'কমিউনিটি সেন্টারের আবেদন সফলভাবে জমা নেওয়া হয়েছে',
            data: newCenter
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'আবেদন জমা দিতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
}

export async function updateCommunityCenterStatus(req, res) {
    try {
        const { status } = req.body;
        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'অকার্যকর স্ট্যাটাস মান'
            });
        }
        const updated = await updateCommunityCenterStatusInDB(req.params.id, status);
        if (!updated) {
            return res.status(404).json({
                success: false,
                message: 'কমিউনিটি সেন্টার পাওয়া যায়নি'
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

export async function deleteCommunityCenter(req, res) {
    try {
        const deleted = await deleteCommunityCenterFromDB(req.params.id);
        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: 'কমিউনিটি সেন্টার পাওয়া যায়নি'
            });
        }
        res.status(200).json({
            success: true,
            message: 'কমিউনিটি সেন্টার সফলভাবে মুছে ফেলা হয়েছে'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'ডিলিট করতে ব্যর্থ হয়েছে',
            error: error.message
        });
    }
}
