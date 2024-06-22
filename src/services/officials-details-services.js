const {OfficialRepository} = require('../repository/index');
const AppErrors = require('../utils/errors/error-handler');
const ValidationError = require('../utils/errors/validation-error');

class OfficialService {
    constructor() {
        this.officialRepository = new OfficialRepository();
    }

    async createOfficial(officialData) {
        try {
            return await this.officialRepository.create(officialData);
        } catch (error) {
            if(error.name=='ValidationError'){
                throw new ValidationError(error);
            }
            throw error;
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
    async getOfficialByEmail(email) {
        try {
            const official = await this.officialRepository.findBy({email});
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
    async getUserByEmailAndDelete(email) {
        try {
            const deletedUser = await this.officialRepository.findOneAndDelete(email);
            if (!deletedUser) {
                throw new Error('Official not found');
    
            }
            return deletedUser;
        } catch (error) {
            console.error('Error deleting user:', error);
            throw new error(error);
        }
    }
}

module.exports = OfficialService;
