const CarouselRepository = require('../repository/carousel-repository');

class CarouselService {
    constructor() {
        this.carouselRepository = new CarouselRepository();
    }

    async createCarousel(carouselData) {
        try {
            return await this.carouselRepository.create(carouselData);
        } catch (error) {
            throw new Error(Service error: ${error.message});
        }
    }

    async getAllCarousels() {
        try {
            return await this.carouselRepository.getAll();
        } catch (error) {
            throw new Error(Service error: ${error.message});
        }
    }

    async getCarouselById(id) {
        try {
            const carousel = await this.carouselRepository.get(id);
            if (!carousel) {
                throw new Error('Carousel not found');
            }
            return carousel;
        } catch (error) {
            throw new Error(Service error: ${error.message});
        }
    }

    async updateCarousel(id, updateData) {
        try {
            const carousel = await this.carouselRepository.update(id, updateData);
            if (!carousel) {
                throw new Error('Carousel not found');
            }
            return carousel;
        } catch (error) {
            throw new Error(Service error: ${error.message});
        }
    }

    async deleteCarousel(id) {
        try {
            const carousel = await this.carouselRepository.destroy(id);
            if (!carousel) {
                throw new Error('Carousel not found');
            }
            return carousel;
        } catch (error) {
            throw new Error(Service error: ${error.message});
        }
    }
}

module.exports = CarouselService;
