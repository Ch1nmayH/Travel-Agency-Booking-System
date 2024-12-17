import express from 'express';
import packagesController from '../controllers/packagesController.js';
import bookingController from '../controllers/bookingController.js';
import userController from '../controllers/userController.js';
import upload from '../config/multerConfig.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Admin Api');
})

//Packages Routes
router.post("/packages", upload.single("image"), packagesController.postPackages); 
router.put("/packages", upload.single("image"), packagesController.updatePackages); 
router.delete("/packages", packagesController.deletePackages); 

//Bookings Routes
router.get("/bookings/:id?", bookingController.getBookings);

//verify Admin
router.get("/verify", userController.verifyAdmin);

export default router;
