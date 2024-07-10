const Events = require('../models/events-model');
const CrudRepository = require('./crud-repository');

class EventRepository extends CrudRepository {
    constructor() {
        console.log("EventRepository constructor called");
        super(Events);
    }
}

module.exports = EventRepository;
