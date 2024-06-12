const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  userId: {
    type: String, // Assuming this is a unique identifier for the user
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  bio: {
    type: String,
    required: false
  },
  avatar: {
    type: String, // URL to the avatar image
    required: false
  },
  linkedIn: {
    type: String, // URL to LinkedIn profile
    required: false
  },
  leetCode: {
    type: String, // URL to LeetCode profile
    required: false
  },
  github: {
    type: String, // URL to GitHub profile
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('UserProfile', userProfileSchema);
