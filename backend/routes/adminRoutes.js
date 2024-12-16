import express from 'express';
import packagesController from '../controllers/packagesController.js';
import upload from '../config/multerConfig.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Admin Api');
})

router.post("/packages", upload.single("image"), packagesController.postPackages); 
router.put("/packages", upload.single("image"), packagesController.updatePackages); 
router.delete("/packages", packagesController.deletePackages); 

export default router;
