import Booking from '../models/bookingModel.js';
import Package from '../models/packageModel.js';
import User from '../models/userModel.js';

//Post Bookings

const postBookings = async (req, res) => {
    try {
        const { name, email, phone, numberOfTravelers,specialRequest, packageId, user, bookingDate } = req.body;
        let totalPrice = 0;
        // Get the package price
        const packagePrice = await Package.findById(packageId);
        const userIdExists = await User.findById(user);
        if(!packagePrice){
            return res.status(400).json({message: "Package not found"});
        }

        if (packagePrice) {
            totalPrice = packagePrice.price * numberOfTravelers;
        }

        if(!userIdExists){
            return res.status(400).json({message: "User not found"});
        }
        const newBooking = {
            name,
            email,
            phone,
            numberOfTravelers,
            specialRequest,
            packageId,
            user,
            bookingDate,
            totalPrice
        };
        const savedBooking = await Booking.create(newBooking);
        res.json(savedBooking);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate("package").populate("user");
        res.json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

export default { postBookings, getBookings };