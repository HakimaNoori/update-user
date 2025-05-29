import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import route from './routes/userRoute.js';

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI; 

mongoose

    .connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB Detabess successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });  
app.use("/api", route); 