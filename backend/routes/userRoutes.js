import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();
router.get('/', (req, res) => {
    res.send('User Api');
})

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/validateUser', userController.validateUser);

export default router;
