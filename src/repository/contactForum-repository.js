const CrudRepository = require('./crud-repository');
const ContactForum = require('../models/contactForum-model');

class ContactForumRepository extends CrudRepository {
    constructor() {
        super(ContactForum);
    }

    async findByDomain(domainId) {
        try {
            const contactForums = await ContactForum.find({ domain: domainId }).populate('domain');
            return contactForums;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ContactForumRepository;
