const mongoose = require('mongoose')

const { Schema } = mongoose

const movie = new Schema({
  vote_count: Number,
  video: Boolean,
  vote_average: Number,
  title: String,
  popularity: Number,
  poster_path: String,
  original_language: String,
  original_title: String,
  backdrop_path: String,
  adult: Boolean,
  overview: String,
  release_date: Date,
  genres: [String]
})

module.exports = mongoose.model('movies', movie)
