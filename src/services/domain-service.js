const {DomainRepository} = require('../repository/index');

class DomainService {
    constructor() {
        this.domainRepository = new DomainRepository();
    }

    async createDomain(data) {
        try {
            return await this.domainRepository.create(data);
        } catch (error) {
            throw error;
        }
    }

    async getAllDomains() {
        try {
            return await this.domainRepository.getAll();
        } catch (error) {
            throw error;
        }
    }

    async getDomainById(id) {
        try {
            return await this.domainRepository.get(id);
        } catch (error) {
            throw error;
        }
    }

    async updateDomain(id, update) {
        try {
            return await this.domainRepository.update(id, update);
        } catch (error) {
            throw error;
        }
    }

    async deleteDomain(id) {
        try {
            return await this.domainRepository.destroy(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DomainService;
