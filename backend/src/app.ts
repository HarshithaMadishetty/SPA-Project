import express from 'express';
import session from 'express-session';
import userRoutes from './routes/userRoutes';
import connectDB from './services/userServices';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
//dotenv.config();


// Enable CORS

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  credentials: true, // If you need to allow credentials (cookies, authorization headers)
}));
 mongoose
.connect('mongodb://127.0.0.1:27017/SPA-Project-DB')
.then(()=> console.log("Connected to Database"))
.catch((error)=>console.log(`Error ${error}`));
//connectDB();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'harshitha',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
