const CarouselService = require('../services/Carousel-service');
const fs = require('fs');
class CarouselController {
    constructor() {
        this.carouselService = new CarouselService();
    }

    createCarousel = async (req, res) => {
        try {
            const carouselData = req.body;
            console.log("req body re",req.body);
            console.log("Req files", req.files);
            if (req.files && req.files.length > 0) {
                // Initialize an array to store Base64 encoded images
                const imagesBase64 = [];
    
                // Iterate over each file in req.files
                for (const file of req.files) {
                    const filePath = file.path;
    
                    // Read file and convert to Base64
                    try {
                        const fileBuffer = fs.readFileSync(filePath);
                        const fileBase64 = fileBuffer.toString('base64');
    
                        // Add the Base64 image to the array
                        imagesBase64.push(fileBase64);
    
                        // Delete the file after converting to Base64
                        fs.unlinkSync(filePath);
                    } catch (err) {
                        console.error('Error reading or deleting file:', err);
                        return res.status(500).json({ message: 'Error processing file' });
                    }
                }
    
                // Add the array of Base64 images to newsData
                carouselData.images = imagesBase64;
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
