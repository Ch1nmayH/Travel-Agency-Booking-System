import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

//Signup
const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return res.status(400).json({ error: "User already exists" });

        }
        const user = await User.create({
            name,
            email,
            password
        });
        if (user) {
            return res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: null
            });
        } else {
            return res.status(400).json({ error: "Invalid user data" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}

//Signin
const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            email: email,
        });
        if (user && (await user.matchPassword(password))) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: '30d',
            });

            res.cookie('token', token, {
                httpOnly: true,
                expiresIn: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            }).status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token
            });
        } else {
            res.status(401).json({ error: "Invalid email or password" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}

export default {signup, signin};


