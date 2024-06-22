const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    domainId: { type: Schema.Types.ObjectId, ref: 'Domain'},
    contributors: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    githubLink: { type: String },
    demoLink: { type: String },
},{timestamps:true});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
