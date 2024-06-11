const mongoose = require('mongoose');
const ResourceService = require("../services/resources-service");
const Schema = mongoose.Schema;

const officialSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
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
    lastUpdated: { type: Date, default: Date.now }
});

const Official = mongoose.model('Official', officialSchema);

module.exports = Official;
class ResourceController {
    constructor() {
        this.resourceService = new ResourceService();
    }

    async createResource(req, res) {
        try {
            const { title, description, url, type, domain } = req.body;
            const resource = await this.resourceService.createResource({ title, description, url, type, domain });
            res.status(201).json(resource);
        } catch (error) {
            res.status(500).json({ message: 'Error creating resource', error: error.message });
        }
    }

    async getAllResources(req, res) {
        try {
            const resources = await this.resourceService.getAllResources();
            res.status(200).json(resources);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching resources', error: error.message });
        }
    }

    async getResourceById(req, res) {
        try {
            const resource = await this.resourceService.getResourceById(req.params.id);
            res.status(200).json(resource);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching resource', error: error.message });
        }
    }

    async getResourcesByDomain(req, res) {
        try {
            const resources = await this.resourceService.getResourcesByDomain(req.params.domainId);
            res.status(200).json(resources);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching resources by domain', error: error.message });
        }
    }

    async updateResource(req, res) {
        try {
            const update = req.body;
            const resource = await this.resourceService.updateResource(req.params.id, update);
            res.status(200).json(resource);
        } catch (error) {
            res.status(500).json({ message: 'Error updating resource', error: error.message });
        }
    }

    async deleteResource(req, res) {
        try {
            await this.resourceService.deleteResource(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting resource', error: error.message });
        }
    }
}
exports.ResourceController = ResourceController;
