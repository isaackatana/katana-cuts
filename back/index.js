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
  {
    id: 1,
    image: './images/Logo.jpeg',
    name: 'Donn-J',
  },
  {
    id: 2,
    image: './images/Logo.jpeg',
    name: 'Adam Leenz',
  },
  {
    id: 3,
    image: './images/Logo.jpeg',
    name: 'D-Berry',
  },
  {
    id: 4,
    image: './images/Logo.jpeg',
    name: 'Drug Beats',
  },
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

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
