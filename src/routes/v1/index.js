const express = require('express');
const router = express.Router();
const newsController=require('../../controller/news-details-controller.js');

router.get('/news', newsController.getAllNews);
router.get('/news/by/:id', newsController.getNewsById);
router.post('/create/news', newsController.createNews);
router.put('/update/news/:id', newsController.updateNews);
router.delete('/delete/news/:id', newsController.deleteNews);

module.exports = router;