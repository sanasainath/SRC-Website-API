const CrudRepository = require('./crud-repository');
const {ContactForum} = require('../models/index');

class ContactForumRepository extends CrudRepository {
    constructor() {
        super(ContactForum);
    }

    async findByDomain(domainId) {
        try {
            const contactForums = await ContactForum.find({ domainId: domainId });
            return contactForums;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ContactForumRepository;
