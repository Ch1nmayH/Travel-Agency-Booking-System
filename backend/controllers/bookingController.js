import Booking from '../models/bookingModel.js';

//Post Bookings

const postBookings = async (req, res) => {
    try {
        const { name, email, phone, numberOfTravelers,specialRequest, packageId, userId, bookingDate } = req.body;
        let totalPrice = 0;
        // Get the package price
        const packagePrice = await Package.findById(packageId);
        if (packagePrice) {
            totalPrice = packagePrice.price * numberOfTravelers;
        }
        const newBooking = {
            name,
            email,
            phone,
            numberOfTravelers,
            specialRequest,
            packageId,
            userId,
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