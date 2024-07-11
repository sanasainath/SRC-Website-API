const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactForumSchema = new Schema({
    title: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

const ContactForum = mongoose.model('ContactForum', contactForumSchema);

module.exports = ContactForum;
