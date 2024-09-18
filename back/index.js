// backend/server.js
const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(require('cors')());

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
