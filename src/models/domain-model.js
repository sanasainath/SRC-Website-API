const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const domainSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const Domain = mongoose.model('Domain', domainSchema);

module.exports = Domain;
