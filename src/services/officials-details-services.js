const {OfficialRepository} = require('../repository/index');

class OfficialService {
    constructor() {
        this.officialRepository = new OfficialRepository();
    }

    async createOfficial(officialData) {
        try {
            return await this.officialRepository.create(officialData);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async getAllOfficials() {
        try {
            return await this.officialRepository.getAll();
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async getOfficialById(id) {
        try {
            const official = await this.officialRepository.get(id);
            if (!official) {
                throw new Error('Official not found');
            }
            return official;
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async updateOfficial(id, updateData) {
        try {
            const official = await this.officialRepository.update(id, updateData);
            if (!official) {
                throw new Error('Official not found');
            }
            return official;
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async deleteOfficial(id) {
        try {
            const official = await this.officialRepository.destroy(id);
            if (!official) {
                throw new Error('Official not found');
            }
            return official;
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
}

module.exports = OfficialService;
