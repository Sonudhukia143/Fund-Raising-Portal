import express from 'express';
//import mongoose from 'mongoose'; for connecting mongodb atlas to server
import mongoSanitize from 'express-mongo-sanitize';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import fetchData from '../routes/fetchData.js';

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

// const connectDb = async () => {
//     if (mongoose.connection.readyState >= 1) {
//         return;
//     }

//     try {
//         await mongoose.connect(process.env.MONGO_ATLAS_URL);
//         console.log("Connected to the database.");
//     } catch (error) {
//         console.log("Error in establishing connection with the database: " + error);
//     }
// };

const app = express();
app.set('trust proxy', true);
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(cookieParser());

const corsOptions = {
    origin: ['http://localhost:5173',"*","https://fundportal.netlify.app"],   
    credentials: true,
    methods: ['GET'],
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

app.use('/api/data', fetchData)
app.get('/api/test', (req,res) => {
    res.send("Hello, The Backend Is Working");
});

// app.use('*', (req, res) => {
//     res.status(404).send("Could not find the page");
// });

  export default async function handler (req, res) {
   //Mongo DB database not needed yet can be used directly by commenting it out
    //   await connectDb();

     return app(req, res);
  }; 