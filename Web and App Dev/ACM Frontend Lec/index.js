// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS for cross-origin requests from frontend
app.use(cors());
app.use(express.json());

// Sample data
let products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

// GET endpoint to retrieve all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// POST endpoint to add a new product
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.json(newProduct);
});

// PUT endpoint to update a product by ID
app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((product) => product.id === productId);
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  products[productIndex] = { ...products[productIndex], ...req.body };
  res.json(products[productIndex]);
});

// DELETE endpoint to delete a product by ID
app.delete('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  products = products.filter((product) => product.id !== productId);
  res.json({ message: 'Product deleted successfully' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
