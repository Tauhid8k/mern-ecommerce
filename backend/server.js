import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// initialize
const app = express();
dotenv.config();
connectDB();

// routes middleware
app.use('/api/products', productRoutes);

// middleware
app.use(notFound);
app.use(errorHandler);

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server listening in ${process.env.NODE_ENV} on port ${PORT}`.cyan
  );
});
