const mongoose = require("mongoose");
const CrudRepository = require("./crud-repository");
const ClassFeedback = require("../models/class-feedback-model");

class ClassFeedbackRepository extends CrudRepository {
  constructor() {
    super(ClassFeedback);
  }
  async getAllCollectionsData(filter) {
    const db = mongoose.connection.db;
    const collections = db.collection("classfeedbacks");
    const documents = await collections.find(filter).toArray();
    const allData = {};
    allData["classfeedbacks"] = documents;

    return allData;
  }
}

module.exports = ClassFeedbackRepository;
