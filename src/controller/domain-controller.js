const {DomainService} = require('../services/index');

class DomainController {
    constructor() {
        this.domainService = new DomainService();
    }

    createDomain= async (req, res)=> {
        try {
            const { name, description } = req.body;
            const domain = await this.domainService.createDomain({ name, description });
            res.status(201).json(domain);
        } catch (error) {
            res.status(500).json({ message: 'Error creating domain', error: error.message });
        }
    }

    async getAllDomains(req, res) {
        try {
            const domains = await this.domainService.getAllDomains();
            res.status(200).json(domains);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching domains', error: error.message });
        }
    }

    async getDomainById(req, res) {
        try {
            const domain = await this.domainService.getDomainById(req.params.id);
            res.status(200).json(domain);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching domain', error: error.message });
        }
    }

    async updateDomain(req, res) {
        try { 
            const update = req.body;
            const domain = await this.domainService.updateDomain(req.params.id, update);
            res.status(200).json({
                data:domain,
                message:'Suuccessfully Updated the Domain',
                success:true
            });
        } catch (error) {
            res.status(500).json({ message: 'Error updating domain', error: error.message });
        }
    }

    async deleteDomain(req, res) {
        try {
           const response= await this.domainService.deleteDomain(req.params.id);
            res.status(200).json({
                success:true,
                message:'Successfully deleted'
            });
        } catch (error) {
            console.log('controller',error);
            res.status(500).json({ message: 'Error deleting domain', error: error.message });
        }
    }
}

module.exports = new DomainController();
