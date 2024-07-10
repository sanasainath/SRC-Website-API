const EventRepository = require('../repository/event-repository');

class EventService {
    constructor() {
        this.eventRepository = new EventRepository();
    }

    async createEvent(eventData) {
        try {
            return await this.eventRepository.create(eventData);
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async getAllEvents() {
        try {
            return await this.eventRepository.getAll();
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async getEventById(id) {
        try {
            const event = await this.eventRepository.get(id);
            if (!event) {
                throw new Error('Event not found');
            }
            return event;
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async updateEvent(id, updateData) {
        try {
            const event = await this.eventRepository.update(id, updateData);
            if (!event) {
                throw new Error('Event not found');
            }
            return event;
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }

    async deleteEvent(id) {
        try {
            const event = await this.eventRepository.destroy(id);
            if (!event) {
                throw new Error('Event not found');
            }
            return event;
        } catch (error) {
            throw new Error(`Service error: ${error.message}`);
        }
    }
}

module.exports = EventService;
