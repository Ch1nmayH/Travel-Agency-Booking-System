import express from 'express';
import packagesController from '../controllers/packagesController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Admin Api');
})

router.post("/packages", packagesController.postPackages); 
router.put("/packages", packagesController.updatePackages); 
router.delete("/packages", packagesController.deletePackages); 

export default router;
