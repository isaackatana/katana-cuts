// backend/server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(require('cors')());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/musicDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  seedDatabase(); // Seed the database with initial data
}).catch((err) => console.error('MongoDB connection error:', err));

// Seed function to add sample data
async function seedDatabase() {
  // Clear the existing database (optional)
  await Artist.deleteMany({});
  
  // Create three artists
  const artists = [
    { name: 'John Doe', age: 28, musicGenre: 'Rock' },
    { name: 'Jane Smith', age: 34, musicGenre: 'Pop' },
    { name: 'Sam Johnson', age: 22, musicGenre: 'Jazz' }
  ];

  // Insert the artists into the database
  await Artist.insertMany(artists);
  console.log('Sample data seeded');
}

// API endpoint to fetch the artists
app.get('/api/artists', async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching artists' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
