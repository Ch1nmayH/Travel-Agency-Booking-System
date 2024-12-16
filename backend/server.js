import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import "dotenv/config";
import connectDB from './config/db.js';

const app = express();
app.use(cors());
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    res.send('Hello World');
})

let port = process.env.PORT || 4000;


app.listen(port, ()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
})