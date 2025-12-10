import express from 'express';
import {
    createUsers,
    fetchUsers,
    fetchUsersById,
    editUsers,
    removeUsers,
    loginUser,
    updateUserRole,
    updateUserStatus,
    getTotalUsers
} from '../controllers/userControllers.js';

const router = express.Router();

router.post('/', createUsers);
router.get('/count', getTotalUsers);
router.get('/', fetchUsers);
router.get('/:id', fetchUsersById);
router.put('/:id', editUsers);
router.put('/:id/role', updateUserRole);
router.put('/:id/status', updateUserStatus);
router.delete('/:id', removeUsers);
router.post('/login', loginUser);

export default router;