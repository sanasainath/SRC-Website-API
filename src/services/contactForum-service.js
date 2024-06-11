const ContactForumRepository = require('../repository/contactForum-repository');

class ContactForumService {
    constructor() {
        this.contactForumRepository = new ContactForumRepository();
    }

    async createContactForum(data) {
        try {
            const contactForum = await this.contactForumRepository.create(data);
            return contactForum;
        } catch (error) {
            throw error;
        }
    }

    async getAllContactForums() {
        try {
            const contactForums = await this.contactForumRepository.getAll();
            return contactForums;
        } catch (error) {
            throw error;
        }
    }

    async getContactForumById(id) {
        try {
            const contactForum = await this.contactForumRepository.get(id);
            return contactForum;
        } catch (error) {
            throw error;
        }
    }

    async updateContactForum(id, data) {
        try {
            const contactForum = await this.contactForumRepository.update(id, data);
            return contactForum;
        } catch (error) {
            throw error;
        }
    }

    async deleteContactForum(id) {
        try {
            await this.contactForumRepository.destroy(id);
        } catch (error) {
            throw error;
        }
    }
    async getAllContactForumsByDomain(domainId) {
        try {
            const contactForums = await this.contactForumRepository.findByDomain(domainId);
            return contactForums;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ContactForumService;
