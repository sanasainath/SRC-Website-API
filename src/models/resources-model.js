const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const resourceSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    url: { type: String, required: true },
    type: { type: String, required: true }, // e.g., 'pdf', 'image', 'document'
    domain: { type: ObjectId, ref: 'Domain', required: true }, // Reference to Domain model
    uploadedAt: { type: Date, default: Date.now }
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
