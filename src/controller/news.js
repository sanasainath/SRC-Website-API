const News = require('../models/news');

// Get all news
exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single news item
exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: 'News not found' });
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new news item
exports.createNews = async (req, res) => {
  const news = new News({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    event: req.body.event
  });
  try {
    const newNews = await news.save();
    res.status(201).json(newNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing news item
exports.updateNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: 'News not found' });

    if (req.body.title != null) news.title = req.body.title;
    if (req.body.content != null) news.content = req.body.content;
    if (req.body.image != null) news.image = req.body.image;
    if (req.body.event != null) news.event = req.body.event;

    const updatedNews = await news.save();
    res.status(200).json(updatedNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a news item
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: 'News not found' });

    await news.remove();
    res.status(200).json({ message: 'News deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
