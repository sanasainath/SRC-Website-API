const CrudRepository = require("./crud-repository");
const ClassFeedback = require("../models/class-feedback-model");

class ClassFeedbackRepository extends CrudRepository {
  constructor() {
    super(ClassFeedback);
  }
}

module.exports = ClassFeedbackRepository;
