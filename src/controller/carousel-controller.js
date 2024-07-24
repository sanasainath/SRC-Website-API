const CarouselService = require('../services/Carousel-service');
const fs = require('fs');
class CarouselController {
    constructor() {
        this.carouselService = new CarouselService();
    }

    createCarousel = async (req, res) => {
        try {
            const carouselData = req.body;
            console.log("in controller:", carouselData);
              if (req.file) {
                const filePath = req.file.path;
                const fileBuffer = fs.readFileSync(filePath);
                const fileBase64 = fileBuffer.toString('base64');
                console.log("in controller:", filePath, fileBuffer, fileBase64);
                // Add the Base64 image to testimonialData
                carouselData.image = fileBase64;
    
                // Delete the file after converting to Base64
                fs.unlinkSync(filePath);
            }
            const carousel = await this.carouselService.createCarousel(carouselData);
            return res.status(201).json(carousel);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    getAllCarousels = async (req, res) => {
        try {
            const carousels = await this.carouselService.getAllCarousels();
            return res.status(200).json(carousels);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    getCarouselById = async (req, res) => {
        try {
            const carousel = await this.carouselService.getCarouselById(req.params.id);
            return res.status(200).json(carousel);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    updateCarousel = async (req, res) => {
        try {
            const carousel = await this.carouselService.updateCarousel(req.params.id, req.body);
            return res.status(200).json(carousel);
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }

    deleteCarousel = async (req, res) => {
        try {
            await this.carouselService.deleteCarousel(req.params.id);
            return res.status(200).json({ message: 'Carousel deleted successfully' });
        } catch (error) {
            return res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new CarouselController();
