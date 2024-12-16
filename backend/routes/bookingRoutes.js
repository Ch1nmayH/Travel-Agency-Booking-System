import express from 'express';
import bookingController from '../controllers/bookingController.js';

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('Bookings Api');
// })

router.post("/", bookingController.postBookings);

export default router;
