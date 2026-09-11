/**
 * MunicipalService Routes
 */
import { Router } from 'express';
import { 
    getMunicipalServices, 
    getMunicipalServiceById, 
    createMunicipalService, 
    updateMunicipalService, 
    deleteMunicipalService 
} from './municipalService.controller.js';

const router = Router();

router.get('/', getMunicipalServices);
router.get('/:id', getMunicipalServiceById);
router.post('/', createMunicipalService);
router.put('/:id', updateMunicipalService);
router.delete('/:id', deleteMunicipalService);

export default router;
