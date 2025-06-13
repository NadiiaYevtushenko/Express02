import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import session from 'express-session';

import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';

import logRequests from './middlewares/logRequestsMiddleware.js';
import errorHandlerMiddleware from './middlewares/errorHandlerMiddleware.js';

const app = express();
const PORT = 3000;

// Logging
app.use(morgan('dev'));
app.use(logRequests); // Custom middleware для логів

// Body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // використовуй true тільки з HTTPS
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.use(errorHandlerMiddleware);

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
