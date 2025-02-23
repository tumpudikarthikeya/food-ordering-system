// server.js
const express = require('express');
const cors = require('cors');
const { supabase } = require('./config/db');
const config = require('./config/config');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/restaurants', require('./routes/restaurants'));
app.use('/api/menu', require('./routes/menu'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/reviews', require('./routes/reviews'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      ...(config.node_env === 'development' && { stack: err.stack })
    }
  });
});

// Handle 404 routes
app.use((req, res) => {
  res.status(404).json({ error: { message: 'Route not found' } });
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});