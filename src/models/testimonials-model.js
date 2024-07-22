const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  photo: {
    type: String ,// URL to the photo
    required:true
  },
  email: {
    type: String // Optional
  },
  approved: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
