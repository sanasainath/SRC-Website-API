const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderboardSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'UserProfile', required: true },
    event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
    score: { type: Number, default: 0 },
   
},{ timestamps: true });

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);
module.exports = Leaderboard;
