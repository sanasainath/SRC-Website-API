const ContactForumService = require('../services/contactForum-service');

class ContactForumController {
    constructor() {
        this.contactForumService = new ContactForumService();
    }

    createContactForum=async (req, res)=> {
        try {
            const contactForum = await this.contactForumService.createContactForum(req.body);
            res.status(201).json(contactForum);
        } catch (error) {
            console.error('Controller: Error creating contact forum:', error.message);
            res.status(500).json({ message: 'Failed to create contact forum', error: error.message });
        }
    }

    getAllContactForums=async (req, res)=> {
        try {
            const contactForums = await this.contactForumService.getAllContactForums();
            res.status(200).json(contactForums);
        } catch (error) {
            console.error('Controller: Error fetching all contact forums:', error.message);
            res.status(500).json({ message: 'Failed to fetch contact forums', error: error.message });
        }
    }

    getContactForumById=async (req, res)=> {
        try {
            const contactForum = await this.contactForumService.getContactForumById(req.params.id);
            res.status(200).json(contactForum);
        } catch (error) {
            console.error('Controller: Error fetching contact forum by ID:', error.message);
            res.status(500).json({ message: 'Failed to fetch contact forum', error: error.message });
        }
    }

    updateContactForum=async (req, res)=> {
        try {
            const contactForum = await this.contactForumService.updateContactForum(req.params.id, req.body);
            res.status(200).json(contactForum);
        } catch (error) {
            console.error('Controller: Error updating contact forum:', error.message);
            res.status(500).json({ message: 'Failed to update contact forum', error: error.message });
        }
    }

    deleteContactForum=async (req, res)=> {
        try {
            await this.contactForumService.deleteContactForum(req.params.id);
            res.status(204).end();
        } catch (error) {
            console.error('Controller: Error deleting contact forum:', error.message);
            res.status(500).json({ message: 'Failed to delete contact forum', error: error.message });
        }
    }
    getAllContactForumsByDomain = async (req, res) => {
        try {
            const { domainId } = req.params;
            const contactForums = await this.contactForumService.getAllContactForumsByDomain(domainId);
            res.status(200).json(contactForums);
        } catch (error) {
            console.error('Controller: Error fetching contactForums by domainId:', error.message);
            res.status(500).json({ message: 'Failed to fetch contactForums by domainId', error: error.message });
        }
    }
}

module.exports = new ContactForumController();
