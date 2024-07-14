const {ContactForumRepository} = require('../repository/index');
const{Domain}=require('../models/index');

class ContactForumService {
    constructor() {
        this.contactForumRepository = new ContactForumRepository();
    }

    async createContactForum(data) {
        try {
            const contactForum = await this.contactForumRepository.create(data);
            const domain = await Domain.findById(data.domainId);
            if (!domain) {
                throw new Error('Domain not found');
            }
            domain.contactForums.push(contactForum._id);
            await domain.save();
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
            const forum = await this.getContactForumById(id);
            if (!forum) {
                throw new Error('Forum not found');
            }
            const domain = await Domain.findById(forum.domainId);
            if (domain) {
                domain.contactForums.pull(forum._id); // Remove ConatctForum reference
                await domain.save();
            }
            return await this.contactForumRepository.destroy(id);
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
