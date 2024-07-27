const ValidationError = require("../utils/errors/validation-error");
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
      return response;
    } catch (error) {
      throw { error };
    }
  }

  async get(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      throw { error };
    }
  }
  async findBy(data) {
    try {
      console.log("data", data);
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
      throw { error };
    }
  }
  //   async getFeedbackByQuery({ date, year, section }) {
  //     try {
  //       const response = await this.model.find({
  //         date: date,
  //         year: year,
  //         section: section,
  //       });
  //       return response;
  //     } catch (error) {
  //       throw { error };
  //     }
  //   }

  async update(id, data) {
    console.log("in repo:", id, data);
    try {
      const response = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      console.log("in repo res:", response);
      return response;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CrudRepository;
