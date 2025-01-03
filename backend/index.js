import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './dbConfig/dbConnection.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authenticationRoutes from './Routes/auth.js';
import stucomRoutes from "./Routes/stucomRoutes.js";
import errorMiddleware from "./Middlewares/errorMiddleware.js";

// Load environment variables
dotenv.config();
dbConnect();
const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.json({
      success: true,
      message: 'Default route has been running successfully',
    });
  });

  
app.use('/api/v1/auth', authenticationRoutes);
app.use("/api/v1/getdata", stucomRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
