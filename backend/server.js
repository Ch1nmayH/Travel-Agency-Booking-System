import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import "dotenv/config";
import connectDB from './config/db.js';
import packagesRoutes from './routes/packagesRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

app.use('/api/packages', packagesRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req,res)=>{
    res.send('Backend is running ^^');
})


let port = process.env.PORT || 4000;


app.listen(port, ()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
})