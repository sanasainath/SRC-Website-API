const ResourceRepository = require('../repository/resources-repository');

class ResourceService {
    constructor() {
        this.resourceRepository = new ResourceRepository();
    }

    async createResource(data) {
        try {
            return await this.resourceRepository.create(data);
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
            return await this.resourceRepository.destroy(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ResourceService;
