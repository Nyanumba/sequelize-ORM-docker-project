const express = require('express');
const app = express();
const { sequelize } = require('./models');

app.use(express.json());

// Import Routes
const CustomerRoutes = require('./routes/CustomerRoutes');
const ProductRoutes = require('./routes/productRoutes');
const OrderRoutes = require('./routes/orderRoutes');

// Register Routes
app.use('/customers', CustomerRoutes);
app.use('/products', ProductRoutes);
app.use('/orders', OrderRoutes);

// Test Route (optional but useful)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Sync Database
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});