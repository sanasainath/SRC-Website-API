const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const officialSchema = new Schema({
    name: { type: String, required: true },
    photo: { type: String }, // URL to the photo
    email: { type: String, required: true,unique:true },
    phoneNumber: { type: String },
    officeAddress: { type: String },
    department: { type: String, required: true },
    bio: { type: String },
    qualifications: { type: String },
    experience: { type: String },
    responsibilities: { type: String },
    projects: { type: String },
    linkedin: { type: String },
    researchgate: { type: String },
    twitter: { type: String },
    dateJoined: { type: Date },
},{timestamps:true});

const Official = mongoose.model('Official', officialSchema);

module.exports = Official;
