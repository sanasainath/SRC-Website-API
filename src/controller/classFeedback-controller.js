const ClassFeedbackService = require("../services/classFeedback-service");
class ClassFeedbackController {
  constructor() {
    this.classFeedbackService = new ClassFeedbackService();
  }
  createFeedback = async (req, res) => {
    try {
      const feedback = await this.classFeedbackService.createFeedback(req.body);
      return res.status(201).json(feedback);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

  getAllFeedbacks = async (req, res) => {
    try {
      const feedback = await this.classFeedbackService.getAllFeedbacks();
      return res.status(200).json(feedback);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };

  getFeedbacksByFilter = async (req, res) => {
    try {
      const { date, year, section } = req.query;
      console.log("in controller", date, section, year);
      const feedback = await this.classFeedbackService.getFeedbacksByCriteria(
        date,
        year,
        section
      );
      return res.status(200).json(feedback);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };
}

module.exports = new ClassFeedbackController();
