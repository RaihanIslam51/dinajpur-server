/**
 * News (স্থানীয় সংবাদ) Model Schema
 */
export const newsSchema = {
    collectionName: 'news',
    fields: {
        id: 'ObjectId',
        title: 'String',            // খবরের শিরোনাম
        excerpt: 'String',          // সংক্ষিপ্ত বিবরণ / সারাংশ
        content: 'String',          // বিস্তারিত সংবাদ
        category: 'String',         // ক্যাটাগরি: 'কৃষি ও শস্য', 'শিক্ষা ও ক্যাম্পাস', 'উন্নয়ন ও পৌরসভা', 'আইন ও পরিবেশ', 'খেলাধুলা'
        image: 'String',            // খবরের ছবির URL
        reporter: 'String',         // প্রতিবেদকের নাম (e.g. স্টাফ রিপোর্টার, দিনাজপুর)
        isLead: 'Boolean',          // প্রধান সংবাদ (Hero Lead Story)
        isBreaking: 'Boolean',      // জরুরি খবর (Ticker)
        views: 'Number',            // পঠিত সংখ্যা
        createdAt: 'Date',
        updatedAt: 'Date'
    }
};
