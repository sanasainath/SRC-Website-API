const EventService = require('../services/event-service');
const fs = require('fs');
const multer = require('multer');
class EventController {
    constructor() {
        this.eventService = new EventService();
    }

    createEvent = async (req, res) => {
        try {
            const eventData =req.body;
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
                eventData.images = imagesBase64;
            }
            const event = await this.eventService.createEvent(eventData);
    
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
            const eventData =req.body;
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
                eventData.images = imagesBase64;
            }
            const event = await this.eventService.updateEvent(req.params.id, eventData);
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
