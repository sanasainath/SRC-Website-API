const Testimonial = require('../models/testimonials-model');
const crudRepository=require('./crud-repository')
class TestimonialRepository extends crudRepository{
    constructor() {
        super(Testimonial);
    }
 
}

module.exports = new TestimonialRepository();
