const CrudRepository = require('./crud-repository');
const Carousel = require('../models/Carousel-model');

class CarouselRepository extends CrudRepository {
    constructor() {
        super(Carousel);
    }
}

module.exports = CarouselRepository;
