import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import route from './routes/userRoute.js';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI; 

mongoose

    .connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB Detabess successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });  
app.use("/api", route); 