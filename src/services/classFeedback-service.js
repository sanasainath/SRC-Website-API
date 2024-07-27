const ClassFeedbackRepository = require('../repository/classFeedback-repository');

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

}

module.exports = ClassFeedbackService;
