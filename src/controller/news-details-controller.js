const newsService = require('../services/news-service-details');

class NewsController {
    async getAllNews(req, res) {
        try {
            const news = await newsService.getAllNews();
            res.status(200).json(news);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getNewsById(req, res) {
        try {
            const news = await newsService.getNewsById(req.params.id);
            if (!news) return res.status(404).json({ message: 'News not found' });
            res.status(200).json(news);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createNews(req, res) {
        try {
            const news = await newsService.createNews(req.body);
            res.status(201).json(news);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateNews(req, res) {
        try {
            const news = await newsService.updateNews(req.params.id, req.body);
            if (!news) return res.status(404).json({ message: 'News not found' });
            res.status(200).json(news);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteNews(req, res) {
        try {
            const news = await newsService.deleteNews(req.params.id);
            if (!news) return res.status(404).json({ message: 'News not found' });
            res.status(200).json({ message: 'News deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new NewsController();
