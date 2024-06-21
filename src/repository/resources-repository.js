const {Resource} = require('../models/index');
const CrudRepository = require('./crud-repository');

class ResourceRepository extends CrudRepository {
    constructor() {
        super(Resource);
    }

    async findByDomain(domainId) {
        try {
            const resources = await Resource.find({ domain: domainId }).populate('domain');
            return resources;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ResourceRepository;
