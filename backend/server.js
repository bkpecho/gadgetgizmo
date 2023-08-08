import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

import cookieParser from 'cookie-parser';
import orderRoutes from './routes/orderRoutes.js';
import productRoutes from './routes/productRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import userRoutes from './routes/userRoutes.js';
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
);

// Connect to MongoDB before starting the server
connectDB().then(() => {
  if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
  } else {
    app.get('/', (req, res) => {
      res.send('💚 API is running!');
    });
  }

  app.use(notFound);
  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`🟢 Server running on port ${port}`);
  });
});
