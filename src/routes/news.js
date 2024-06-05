const express = require('express');
const { getAllNews, getNewsById, createNews, updateNews, deleteNews } = require('../controller/news');
const router = express.Router();


router.get('/', getAllNews);
router.get('/:id', getNewsById);
router.post('/create/news', createNews);
router.put('/:id', updateNews);
router.delete('/:id', deleteNews);

module.exports = router;
