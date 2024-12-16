import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
    {
        name : {
        type: String,
        required: true,
        },
        email: {
        type: String,
        required: true,
        },
        phone: {
        type: String,
        required: true,
        },
        numberOfTravelers: {
        type: Number,
        required: true,
        },
        specialRequest: {
        type: String,
        required: false,
        },
        user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        },
        package: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Package",
        },
        bookingDate: {
        type: Date,
        required: true,
        },
        bookingStatus: {
        type: String,
        required: true,
        default: "Pending",
        },
    },
    {
        timestamps: true,
    }
    );

const Booking = mongoose.model("Booking", bookingSchema);
