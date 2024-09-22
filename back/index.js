// backend/server.js
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.use(require('cors')());

const cors = require('cors');
const { MongoClient } = require('mongodb');

app.use(cors({
  origin: 'http://localhost:5173/', // Vite's default port
  credentials: true, // If you are using cookies
}));

// Database

// Replace the uri string with your connection string.
const uri = "mongodb+srv://mrisaackatana:<oGceR9aIvh8dazLJ>@twm-artists.a3jp2.mongodb.net/?retryWrites=true&w=majority&appName=TWM-Artists";
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

// .......................

const artists = [
  {
    image: '',
    name: 'D-Berry',
    socialLinks: {
      instagram: 'https://instagram.com/artisttwo',
      twitter: 'https://twitter.com/artisttwo',
      facebook: 'https://facebook.com/artisttwo',
    }
  },
  {
    image: '',
    name: 'Adam Leenz',
    socialLinks: {
      instagram: 'https://instagram.com/artistone',
      twitter: 'https://twitter.com/artistone',
      facebook: 'https://facebook.com/artistone',
    }
  },
  {
    image: '',
    name: 'Donn J',
    socialLinks: {
      instagram: 'https://instagram.com/artistthree',
      twitter: 'https://twitter.com/artistthree',
      facebook: 'https://facebook.com/artistthree',
    }
  },
  {
    name: 'Drug Beats',
    socialLinks: {
      instagram: 'https://instagram.com/artistthree',
      twitter: 'https://twitter.com/artistthree',
      facebook: 'https://facebook.com/artistthree',
    }
  },
];

app.get('/api/artists', (req, res) => {
  const previews = artists.map(artist => (
      { 
          id: artist.id, 
          image: artist.image, 
          name: artist.name, 
          details: artist.details,  
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
