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

    // async createNews(req, res) {
    //     try {
    //         const news = await newsService.createNews(req.body);
    //         res.status(201).json(news);
    //     } catch (error) {
    //         res.status(400).json({ message: error.message });
    //     }
    // }
    async createNews(req, res) {
        try {
            const newsData = req.body;
            console.log("Req file", req.file);
    
            if (req.file) {
                const filePath = req.file.path;
    
                // Read file and convert to Base64
                try {
                    const fileBuffer = fs.readFileSync(filePath);
                    const fileBase64 = fileBuffer.toString('base64');
    
                    // Add the Base64 image to newsData
                    newsData.image = fileBase64;
    
                    // Delete the file after converting to Base64
                    fs.unlinkSync(filePath);
                } catch (err) {
                    console.error('Error reading or deleting file:', err);
                    return res.status(500).json({ message: 'Error processing file' });
                }
            }
    
            // Create news using the news service
            const news = await newsService.createNews(newsData);
            res.status(201).json(news);
        } catch (error) {
            console.error('Error creating news:', error);
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
