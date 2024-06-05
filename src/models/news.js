const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String, // URL to the image
    required: false
  },
  event: {
    type: String, // Event name or description
    required: false
  }
});

module.exports = mongoose.model('News', newsSchema);
