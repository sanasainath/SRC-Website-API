const testimonialService = require('../services/testimonial-service');

class TestimonialController {
    async getAllTestimonials(req, res) {
        try {
            const testimonials = await testimonialService.getAllTestimonials();
            res.status(200).json(testimonials);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getTestimonialById(req, res) {
        try {
            const testimonial = await testimonialService.getTestimonialById(req.params.id);
            if (!testimonial) return res.status(404).json({ message: 'Testimonial not found' });
            res.status(200).json(testimonial);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createTestimonial(req, res) {
        try {
            const testimonialData=req.body;
            console.log("Req file",req.file);
            if (req.file) {
                testimonialData.photo = process.env.APP_API + '/public/images/' + req.file.filename;
            }
            const testimonial = await testimonialService.createTestimonial(testimonialData);
            // const testimonial = await testimonialService.createTestimonial(req.body);
            res.status(201).json(testimonial);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateTestimonial(req, res) {
        try {
            const testimonial = await testimonialService.updateTestimonial(req.params.id, req.body);
            if (!testimonial) return res.status(404).json({ message: 'Testimonial not found' });
            res.status(200).json(testimonial);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteTestimonial(req, res) {
        try {
            const testimonial = await testimonialService.deleteTestimonial(req.params.id);
            if (!testimonial) return res.status(404).json({ message: 'Testimonial not found' });
            res.status(200).json({ message: 'Testimonial deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new TestimonialController();
