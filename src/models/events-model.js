const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: { type: String, required: true },
    domain: { type: String },
    location: { type: String, required: true },
    fromDate: { type: Date, required: true },
    toDate: { type: Date, required: true },
    startTime : {type : String, required : true},
    endTime : {type : String, required : true},
    prizeDetails : [{position: Number, description : String}],
    description: { type: String, required: true },
    coordinators: [{
      id: { type: Schema.Types.ObjectId, ref: 'User', required: false },
      email: { type: String }
    }]
    registrationLink: { type: String },
    isUpcoming: { type: Boolean, default: true },
    summary: { type: String },
    winners: [{ name: String, position: Number }],
    mediaLinks: [{ type: String }],
    leaderboard: [{ type: Schema.Types.ObjectId, ref: 'Leaderboard' }]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
