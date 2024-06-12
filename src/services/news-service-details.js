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
            return await newsRepository.getAll();
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async getNewsById(id) {
        try {
            const news = await newsRepository.get(id);
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
            const news = await newsRepository.update(id, updateData);
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
            const news = await newsRepository.destroy(id);
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
