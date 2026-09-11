/**
 * DiagnosticCenter Routes
 */
import { Router } from 'express';
import { 
    getDiagnosticCenters, 
    getDiagnosticCenterById, 
    createDiagnosticCenter, 
    updateDiagnosticCenter, 
    deleteDiagnosticCenter 
} from './diagnosticCenter.controller.js';

const router = Router();

router.get('/', getDiagnosticCenters);
router.get('/:id', getDiagnosticCenterById);
router.post('/', createDiagnosticCenter);
router.put('/:id', updateDiagnosticCenter);
router.delete('/:id', deleteDiagnosticCenter);

export default router;
