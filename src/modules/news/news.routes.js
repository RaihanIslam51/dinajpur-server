/**
 * News Routes Mapping
 */
import express from 'express';
import {
    getNews,
    createNews,
    deleteNews
} from './news.controller.js';

const router = express.Router();

router.get('/', getNews);
router.post('/', createNews);
router.delete('/:id', deleteNews);

export default router;
