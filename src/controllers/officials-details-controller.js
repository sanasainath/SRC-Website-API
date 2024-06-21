const {OfficialService} = require('../services/index');

class OfficialController {
    constructor() {
        this.officialService = new OfficialService();
    }
    createOfficial= async (req, res)=> {
        try {
            console.log(req);
            const official = await this.officialService.createOfficial(req.body);
            return res.status(201).json(official);
        } catch (error) {
           return res.status(400).json({ error: error.message });
        }
    }

    getAllOfficials=async (req,res)=> {
        try {
            const officials = await this.officialService.getAllOfficials();
            res.status(200).json(officials);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    getOfficialById= async (req, res)=> {
        try {
            const official = await this.officialService.getOfficialById(req.params.id);
            res.status(200).json(official);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    updateOfficial=async (req, res)=> {
        try {
            const official = await this.officialService.updateOfficial(req.params.id, req.body);
            res.status(200).json(official);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    deleteOfficial=async (req, res)=> {
        try {
            await this.officialService.deleteOfficial(req.params.id);
            res.status(200).json({ message: 'Official deleted successfully' });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new OfficialController();
