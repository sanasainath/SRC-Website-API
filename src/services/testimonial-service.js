const testimonialRepository = require('../repository/testimonial-repository');

class TestimonialService {
    async createTestimonial(testimonialData) {
        try {
            return await testimonialRepository.create(testimonialData);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async getAllTestimonials() {
        try {
            return await testimonialRepository.getAll();
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async getTestimonialById(id) {
        try {
            const testimonial = await testimonialRepository.get(id);
            if (!testimonial) {
                throw new Error('Testimonial not found');
            }
            return testimonial;
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async updateTestimonial(id, updateData) {
        try {
            const testimonial = await testimonialRepository.update(id, updateData);
            if (!testimonial) {
                throw new Error('Testimonial not found');
            }
            return testimonial;
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async deleteTestimonial(id) {
        try {
            const testimonial = await testimonialRepository.destroy(id);
            if (!testimonial) {
                throw new Error('Testimonial not found');
            }
            return testimonial;
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
}

module.exports = new TestimonialService();
