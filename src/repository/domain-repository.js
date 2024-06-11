const Domain = require('../models/domain-model');
const CrudRepository = require('./crud-repository');

class DomainRepository extends CrudRepository {
    constructor() {
        super(Domain);
    }

    async findBy(data) {
        try {
            const response = await this.model.findOne(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DomainRepository;
