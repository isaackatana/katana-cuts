// backend/server.js
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(require('cors')());

const artists = [
  {
    name: 'Artist One',
    socialLinks: {
      instagram: 'https://instagram.com/artistone',
      twitter: 'https://twitter.com/artistone',
      facebook: 'https://facebook.com/artistone',
    }
  },
  {
    name: 'Artist Two',
    socialLinks: {
      instagram: 'https://instagram.com/artisttwo',
      twitter: 'https://twitter.com/artisttwo',
      facebook: 'https://facebook.com/artisttwo',
    }
  },
  {
    name: 'Artist Three',
    socialLinks: {
      instagram: 'https://instagram.com/artistthree',
      twitter: 'https://twitter.com/artistthree',
      facebook: 'https://facebook.com/artistthree',
    }
  },
];

app.get('/artists', (req, res) => {
  res.json(artists);
});

// API endpoint to fetch the artists
app.get('/api/artists', async (req, res) => {
  try {
    const artists = await artists.find();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching artists' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
