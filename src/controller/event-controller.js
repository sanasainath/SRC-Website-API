const EventService = require('../services/event-service');

class EventController {
    constructor() {
        this.eventService = new EventService();
    }

    createEvent = async (req, res) => {
        try {
            const event = await this.eventService.createEvent(req.body);
            return res.status(201).json(event);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    getAllEvents = async (req, res) => {
        try {
            const events = await this.eventService.getAllEvents();
            res.status(200).json(events);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    getEventById = async (req, res) => {
        try {
            const event = await this.eventService.getEventById(req.params.id);
            res.status(200).json(event);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    updateEvent = async (req, res) => {
        try {
            const event = await this.eventService.updateEvent(req.params.id, req.body);
            res.status(200).json(event);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    deleteEvent = async (req, res) => {
        try {
            await this.eventService.deleteEvent(req.params.id);
            res.status(200).json({ message: 'Event deleted successfully' });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new EventController();
