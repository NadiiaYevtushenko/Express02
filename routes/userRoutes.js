import express from 'express';
import auth from '../middlewares/authMiddleware.js';
import { createUser, loginUser, getProfile, updateProfile } from '../controllers/userСontroller.js';

const router = express.Router();

router.get('/', auth, (req, res) => {
    res.send('Список користувачів');
});

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);

export default router;
