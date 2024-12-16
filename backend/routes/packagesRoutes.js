import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Packages Api');
})

export default router;
