const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classFeedbackSchema = new Schema({
    id: { type: String, required: true },
    year: { type: String, required: true },
    section: { type: String, required: true },
    date: {type: Date, default: Date.now()},
    remarks: {type: String},
    periodDetails : [{ subject : {type: String}, faculty:{type: String}, isTaken : {type: Boolean} }],
},{timestamps:true});

const classFeedback = mongoose.model('Domain', classFeedbackSchema);

module.exports = classFeedback;
