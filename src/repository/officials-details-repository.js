const Official = require('../models/officials-details-model');

class OfficialRepository {
    async create(officialData) {
        try {
            const official = new Official(officialData);
            return await official.save();
        } catch (error) {
            throw new Error(`Failed to create official: ${error.message}`);
        }
    }

    async findAll() {
        try {
            return await Official.find();
        } catch (error) {
            throw new Error(`Failed to retrieve officials: ${error.message}`);
        }
    }

    async findById(id) {
        try {
            return await Official.findById(id);
        } catch (error) {
            throw new Error(`Failed to find official by id: ${error.message}`);
        }
    }

    async updateById(id, updateData) {
        try {
            return await Official.findByIdAndUpdate(id, updateData, { new: true });
        } catch (error) {
            throw new Error(`Failed to update official: ${error.message}`);
        }
    }

    async deleteById(id) {
        try {
            return await Official.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(`Failed to delete official: ${error.message}`);
        }
    }
}

module.exports = new OfficialRepository();
