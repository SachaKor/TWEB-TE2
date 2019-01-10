const mongoose = require('mongoose')

const { Schema } = mongoose

const user = new Schema({
  username: String,
  password: String,
  watchlist: [{ type: Schema.Types.ObjectId, ref: 'movies' }]
})

module.exports = mongoose.model('users', user)
