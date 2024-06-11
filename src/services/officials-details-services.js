const officialRepository = require('../repository/officials-details-repository');

class OfficialService {
    async createOfficial(officialData) {
        try {
            return await officialRepository.create(officialData);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async getAllOfficials() {
        try {
            return await officialRepository.getAll();
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async getOfficialById(id) {
        try {
            const official = await officialRepository.get(id);
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
            const official = await officialRepository.update(id, updateData);
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
            const official = await officialRepository.destroy(id);
            if (!official) {
                throw new Error('Official not found');
            }
            return official;
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
}

module.exports = new OfficialService();
