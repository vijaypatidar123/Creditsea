import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';


dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes); // Example: /api/auth/login

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

import cors from 'cors';

 
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));