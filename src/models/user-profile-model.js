const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
  
  name: { type: String, required: true }, // Name of the user
  image:{ type: String, default: 'https://th.bing.com/th?q=User+Profile+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'},
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
  userId: { type: Schema.Types.ObjectId, ref: 'User',required:true }, // Events participated in SRC
  role: {type: String, enum: ['user', 'admin', 'Coordinator'], default: 'user'},
  isCr : {type : Boolean, default: false},
  domain:{type: Schema.Types.ObjectId, ref:'Domain', required : false},
}, { timestamps: true });

module.exports = mongoose.model('UserProfile', userProfileSchema);
