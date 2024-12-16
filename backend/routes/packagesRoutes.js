import express from 'express';
import packagesController from '../controllers/packagesController.js';

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('Packages Api');
// })

router.get("/", packagesController.getPackages); 

export default router;
