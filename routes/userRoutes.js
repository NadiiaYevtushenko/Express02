import express from 'express';
import auth from '../middlewares/authMiddleware.js';
import { createUser, loginUser, getProfile, updateProfile } from '../controllers/userController.js';
import { validateUser } from '../middlewares/validationUserInput.js';

const router = express.Router();

router.get('/', auth, (req, res) => {
    res.send('Список користувачів');
});

router.post('/register', validateUser, createUser);
router.post('/login', validateUser, loginUser);
router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);

export default router;
