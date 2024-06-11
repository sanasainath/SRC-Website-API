const News = require('../models/news');

class NewsRepository {
    async create(newsData) {
        try {
            const news = new News(newsData);
            return await news.save();
        } catch (error) {
            throw new Error(`Failed to create news: ${error.message}`);
        }
    }

    async findAll() {
        try {
            return await News.find();
        } catch (error) {
            throw new Error(`Failed to retrieve news: ${error.message}`);
        }
    }

    async findById(id) {
        try {
            return await News.findById(id);
        } catch (error) {
            throw new Error(`Failed to find news by id: ${error.message}`);
        }
    }

    async updateById(id, updateData) {
        try {
            return await News.findByIdAndUpdate(id, updateData, { new: true });
        } catch (error) {
            throw new Error(`Failed to update news: ${error.message}`);
        }
    }

    async deleteById(id) {
        try {
            return await News.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(`Failed to delete news: ${error.message}`);
        }
    }
}

module.exports = new NewsRepository();
