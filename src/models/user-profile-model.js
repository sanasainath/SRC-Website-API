const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
  
  name: { type: String, required: true }, // Name of the user
 
 
  email: { type: String, required: true }, // Email of the user
  github: { type: String }, // GitHub profile link
  leetcode: { type: String }, // LeetCode profile link
  hackerrank: { type: String }, // HackerRank profile link
  gfg: { type: String }, // GeeksforGeeks profile link
  linkedin: { type: String }, // LinkedIn profile link
  currentDesignation: { type: String }, // Current designation of the user
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }], // Projects done under SRC domains
  contributions: [{ type: String }], // Contributions to SRC
  eventsParticipated: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }] // Events participated in SRC
  
}, { timestamps: true });

module.exports = mongoose.model('UserProfile', userProfileSchema);
