const ClassFeedbackRepository = require("../repository/classFeedback-repository");

class ClassFeedbackService {
  constructor() {
    this.classFeedbackRepository = new ClassFeedbackRepository();
  }

  async createFeedback(feedbackData) {
    try {
      return await this.classFeedbackRepository.create(feedbackData);
    } catch (error) {
      throw new Error(`Service error: ${error.message}`);
    }
  }

  async getAllFeedbacks() {
    try {
      return await this.classFeedbackRepository.getAll();
    } catch (error) {
      throw new Error(`Service error: ${error.message}`);
    }
  }
  async getFeedbacksByCriteria(date, year, section) {
    const query = {};
    console.log(date, year, section);
    if (date) {
      query.date = { $gte: new Date(date) }; // Assuming you want feedback from the given date onwards
    }
    if (year) {
      query.year = year;
    }
    if (section) {
      query.section = section;
    }
    console.log("query", query);
    try {
      return await this.classFeedbackRepository.findBy(query);
    } catch (e) {
      console.log(e);
      throw new Error(`Service error: ${e.message}`);
    }
  }
}

module.exports = ClassFeedbackService;
