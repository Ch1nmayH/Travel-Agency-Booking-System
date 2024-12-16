import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();
router.get('/', (req, res) => {
    res.send('User Api');
})

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);

export default router;
