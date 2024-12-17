import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import "dotenv/config";
import connectDB from './config/db.js';
import packagesRoutes from './routes/packagesRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import path from 'path';


const app = express();
app.use(
    cors({
      origin: 'https://travelgo.chinmayh.me', // Replace '*' with your frontend's URL
      credentials: true, // Allow cookies to be sent
    })
  );
  
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files from the 'uploads' directory
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/api/packages', packagesRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req,res)=>{
    res.send('Backend is running ^^');
})


let port = process.env.PORT || 4000;


app.listen(port, ()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
})