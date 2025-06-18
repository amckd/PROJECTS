require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const expensesRouter = require('./routes/expenses');

const app = express();
const PORT = 5001; // Explicitly set port to 5001 to avoid conflicts

console.log('MONGODB_URI:', process.env.MONGODB_URI); // Debug log

// Middleware
// Adjust CORS to allow all origins for testing
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Routes
app.use('/api/expenses', expensesRouter);
const authRouter = require('./routes/auth');
app.use('/api/auth', authRouter);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});
