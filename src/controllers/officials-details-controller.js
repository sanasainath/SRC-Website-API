const officialService = require('../services/officials-details-services');

class OfficialController {
    async createOfficial(req, res) {
        try {
            const official = await officialService.createOfficial(req.body);
            return res.status(201).json(official);
        } catch (error) {
           return res.status(400).json({ error: error.message });
        }
    }

    async getAllOfficials(req,res) {
        try {
            const officials = await officialService.getAllOfficials();
            res.status(200).json(officials);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getOfficialById(req, res) {
        try {
            const official = await officialService.getOfficialById(req.params.id);
            res.status(200).json(official);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async updateOfficial(req, res) {
        try {
            const official = await officialService.updateOfficial(req.params.id, req.body);
            res.status(200).json(official);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async deleteOfficial(req, res) {
        try {
            await officialService.deleteOfficial(req.params.id);
            res.status(200).json({ message: 'Official deleted successfully' });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new OfficialController();
