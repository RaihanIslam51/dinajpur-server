/**
 * Tiles Mistri (Tiles & Marble Worker) Express Router
 */
import express from 'express';
import {
    getAllTilesMistris,
    getTilesMistriById,
    createTilesMistri,
    updateTilesMistriStatus,
    deleteTilesMistri
} from './tilesMistri.controller.js';

const router = express.Router();

router.get('/', getAllTilesMistris);
router.get('/:id', getTilesMistriById);
router.post('/', createTilesMistri);
router.patch('/:id/status', updateTilesMistriStatus);
router.delete('/:id', deleteTilesMistri);

export default router;
