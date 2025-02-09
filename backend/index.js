import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './dbConfig/dbConnection.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authenticationRoutes from './Routes/auth.js';
import stucomRoutes from "./Routes/stucomRoutes.js";
import errorMiddleware from "./Middlewares/errorMiddleware.js";
import resultRoutes from "./Routes/result.js";

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

  
app.use('/auth', authenticationRoutes);
app.use("/getdata", stucomRoutes);
app.use("/result",resultRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
