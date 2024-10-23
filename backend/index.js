// backend/server.js
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

const cors = require('cors');

// Middleware
app.use(cors());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Artists
const artists = [
  
];

app.get('/api/artists', (req, res) => {
  const previews = artists.map(artist => (
      { 
          id: artist.id, 
          image: artist.image, 
          name: artist.name, 
          slug: artist.slug,
      }
  )
  );
  
  res.json(previews);
});

app.get('/api/artists/:slug', (req, res) => {
  const artistSlug = req.params.slug;
  const artist = artists.find(p => p.slug === artistSlug);
  
  if (artist) {
      res.json(artist);
  } else {
      res.status(404).json({ message: 'Artist not found' });
  }
});

// Products
const products = [
  {
    id: 1,
    image: './images/Logo.jpeg',
    name: 'Cap',
  },
  {
    id: 2,
    image: './images/Logo.jpeg',
    name: 'T-Shirts',
  },
  {
    id: 3,
    image: './images/Logo.jpeg',
    name: 'Hoody',
  },
  {
    id: 4,
    image: './images/Logo.jpeg',
    name: 'Bags',
  },
];

app.get('/api/products', (req, res) => {
  const previews = products.map(product => (
      { 
          id: product.id, 
          image: product.image, 
          name: product.name, 
          slug: product.slug,
      }
  )
  );
  
  res.json(previews);
});

app.get('/api/products/:slug', (req, res) => {
  const productSlug = req.params.slug;
  const product = artists.find(p => p.slug === productSlug);
  
  if (product) {
      res.json(product);
  } else {
      res.status(404).json({ message: 'Product not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
