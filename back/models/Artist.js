const mongoose = require('mongoose');

// Define the schema for the Artist
const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  musicGenre: { type: String, required: true }
});

// Create and export the Artist model
const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
