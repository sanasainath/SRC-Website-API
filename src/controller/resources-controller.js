const ResourceService = require('../services/resources-service');

class ResourceController {
    constructor() {
        this.resourceService = new ResourceService();
    }

    async createResource(req, res) {
        try {
            const { title, description, url, type, domainId } = req.body;
            const resource = await this.resourceService.createResource({ title, description, url, type, domainId });
            res.status(201).json({
                data:resource,
                success:true,
                message:'Successfully Created a Resource'
            });
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
            const response=await this.resourceService.deleteResource(req.params.id);
            res.status(201).json({
                success:true,
                message:'deleted'
            });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting resource', error: error.message });
        }
    }
}

module.exports = new ResourceController();
