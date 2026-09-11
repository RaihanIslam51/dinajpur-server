/**
 * Notification (নোটিফিকেশন ও ঘোষণা) Model Schema
 */
export const notificationSchema = {
    collectionName: 'notifications',
    fields: {
        id: 'ObjectId',
        title: 'String',            // নোটিফিকেশনের শিরোনাম
        message: 'String',          // নোটিফিকেশনের বিস্তারিত বার্তা
        type: 'String',             // টাইপ: 'info' (তথ্য), 'warning' (সতর্কতা), 'urgent' (জরুরি), 'update' (আপডেট)
        targetLink: 'String',       // অ্যাকশন লিঙ্ক (ঐচ্ছিক)
        targetAudience: 'String',   // কাদের জন্য: 'all', 'citizens'
        createdBy: 'String',       // সৃষ্টিকর্তা (e.g., 'এডমিন অ্যাডমিনিস্ট্রেটর')
        isRead: 'Boolean',          // গ্লোবাল ডিফল্ট রিড স্ট্যাটাস
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
