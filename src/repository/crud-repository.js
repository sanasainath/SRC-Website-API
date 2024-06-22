const ValidationError = require('../utils/errors/validation-error');
class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            throw error;
            
        }
    }

    async destroy(id) {
        try {
            const response = await this.model.findByIdAndDelete(id);
            console.log('crud-response',response);
            return response;
        } catch (error) {
            console.log('Something went wrong in Crud repository',error.name);
            throw { error };
        }
    }

    async get(id) {
        try {
            const response = await this.model.findById(id);
            return response;
        } catch (error) {
            console.log('Something went wrong in Crud repository,yess');
            throw { error };
        }
    }
    async findBy(data) {
        try {
            const response = await this.model.findOne(data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.find({});
            return response;
        } catch (error) {
            console.log('Something went wrong in ==Crud repository');
            throw { error };
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.findByIdAndUpdate(id, data, { new: true });
            return response;
        } catch (error) {
            console.log('Something went wrong in Crud repository');
            throw { error };
        }
    }
}

module.exports = CrudRepository;
