const express = require('express');
const router = express.Router();
const newsController=require('../../controller/news-details-controller.js');
const testimonialController=require('../../controller/testimonials-controller')
//news
router.get('/news', newsController.getAllNews);
router.get('/news/by/:id', newsController.getNewsById);
router.post('/create/news', newsController.createNews);
router.put('/update/news/:id', newsController.updateNews);
router.delete('/delete/news/:id', newsController.deleteNews);



//testimonials
router.get('/testimonials', testimonialController.getAllTestimonials);
router.get('/testimonials/by/:id', testimonialController.getTestimonialById);
router.post('/testimonials/create', testimonialController.createTestimonial);
router.put('/testimonials/update/:id', testimonialController.updateTestimonial);
router.delete('/testimonials/delete/:id', testimonialController.deleteTestimonial);

module.exports = router;