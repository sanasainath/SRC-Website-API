const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: { type: String, required: true },
    domain: { type: String },
    location: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    coordinators: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    registrationLink: { type: String },
    isUpcoming: { type: Boolean, default: true },
    summary: { type: String },
    winners: [{ name: String, position: Number }],
    mediaLinks: [{ type: String }],
    leaderboard: [{ type: Schema.Types.ObjectId, ref: 'Leaderboard' }]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
