const {ResourceRepository} = require('../repository/index');
const {Domain}=require('../models/index');

class ResourceService {
    constructor() {
        this.resourceRepository = new ResourceRepository();
    }

    async createResource(data) {
        try {
            const newResource=await this.resourceRepository.create(data);

            const domain = await Domain.findById(data.domainId);
            if (!domain) {
                throw new Error('Domain not found');
            }
            domain.resources.push(newResource._id);
            await domain.save();
            return newResource;
        } catch (error) {
            throw error;
        }
    }

    async getAllResources() {
        try {
            return await this.resourceRepository.getAll();
        } catch (error) {
            throw error;
        }
    }

    async getResourceById(id) {
        try {
            return await this.resourceRepository.get(id);
        } catch (error) {
            throw error;
        }
    }

    async getResourcesByDomain(domainId) {
        try {
            return await this.resourceRepository.findByDomain(domainId);
        } catch (error) {
            throw error;
        }
    }

    async updateResource(id, data) {
        try {
            return await this.resourceRepository.update(id, data);
        } catch (error) {
            throw error;
        }
    }

    async deleteResource(id) {
        try {
            const resource = await this.getResourceById(id);
            if (!resource) {
                throw new Error('Resource not found');
            }
            const domain = await Domain.findById(resource.domainId);
            if (domain) {
                domain.resources.pull(resource._id); // Remove resource reference
                await domain.save();
            }
            return await this.resourceRepository.destroy(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ResourceService;
 