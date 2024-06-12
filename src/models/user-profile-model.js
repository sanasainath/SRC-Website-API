const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
  rguktId: { type: String, required: true, unique: true }, // Unique identifier for the user (RGUKT ID)
  name: { type: String, required: true }, // Name of the user
  bio: { type: String },
  email: { type: String, required: true }, // Email of the user
  github: { type: String }, // GitHub profile link
  leetcode: { type: String }, // LeetCode profile link
  hackerrank: { type: String }, // HackerRank profile link
  gfg: { type: String }, // GeeksforGeeks profile link
  linkedin: { type: String }, // LinkedIn profile link
  currentDesignation: { type: String }, // Current designation of the user
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }], // Projects done under SRC domains
  contributions: [{ type: String }], // Contributions to SRC
  eventsParticipated: [{ type: Schema.Types.ObjectId, ref: 'Event' }], // Events participated in SRC
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserProfile', userProfileSchema);
