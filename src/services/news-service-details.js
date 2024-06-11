const newsRepository = require('../repository/news-details-repository');

class NewsService {
    async createNews(newsData) {
        try {
            return await newsRepository.create(newsData);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async getAllNews() {
        try {
            return await newsRepository.findAll();
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async getNewsById(id) {
        try {
            const news = await newsRepository.findById(id);
            if (!news) {
                throw new Error('News not found');
            }
            return news;
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async updateNews(id, updateData) {
        try {
            const news = await newsRepository.updateById(id, updateData);
            if (!news) {
                throw new Error('News not found');
            }
            return news;
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async deleteNews(id) {
        try {
            const news = await newsRepository.deleteById(id);
            if (!news) {
                throw new Error('News not found');
            }
            return news;
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
}

module.exports = new NewsService();
