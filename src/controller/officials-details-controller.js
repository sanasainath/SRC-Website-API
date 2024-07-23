const {OfficialService} = require('../services/index');
const fs = require('fs');
const multer = require('multer');
class OfficialController {
    constructor() {
        this.officialService = new OfficialService();
    }
    createOfficial= async (req, res)=> {
        try {
            const officialData = req.body;
            console.log("Req file", req.file);

            if (req.file) {
                const filePath = req.file.path;
                const fileBuffer = fs.readFileSync(filePath);
                const fileBase64 = fileBuffer.toString('base64');
                console.log("in controller:", filePath, fileBuffer, fileBase64);
                // Add the Base64 image to testimonialData
                officialData.photo = fileBase64;

                // Delete the file after converting to Base64
                fs.unlinkSync(filePath);
            }
            const official = await this.officialService.createOfficial(officialData);
            console.log(official);
            return res.status(201).json({
                data:official,
                success:true,
                message:'Successfully Created An Official'
            });
        } catch (error) {
            return res.status(500).json({
            error: error.message,
            success:false
            });
        }
    }
    getAllOfficials=async (req,res)=> {
        try {
            const officials = await this.officialService.getAllOfficials();
            res.status(200).json({
                data:officials,
                success:true,
                message:'Successfully fetched all Officials'
            });
        } catch (error) {
            res.status(400).json({
                 error: error.message,
                 success:false
            });
        }
    }

    getOfficialById= async (req, res)=> {
        try {
            const official = await this.officialService.getOfficialById(req.params.id);
            res.status(200).json({
                data:official,
                success:true,
                message:'Successfully fetched Official'
            });
        } catch (error) {
            res.status(404).json({
                error: error.message,
                success:false
           });
        }
    }
    getOfficialByEmail= async (req, res)=> {
        try {
            const official = await this.officialService.getOfficialByEmail(req.params.email);
            res.status(200).json({
                data:official,
                success:true,
                message:'Successfully fetched Official'
            });
        } catch (error) {
            res.status(404).json({
                 error: error.message,
                 success:false
            });
        }
    }

    updateOfficial=async (req, res)=> {
        try {
            const official = await this.officialService.updateOfficial(req.params.id, req.body);
            res.status(200).json({
                data:official,
                success:true,
                message:'Successfully Updated'
            });
        } catch (error) {
            res.status(404).json({
                error: error.message,
                success:false
           });
        }
    }

    deleteOfficial=async (req, res)=> {
        try {
            const response=await this.officialService.deleteOfficial(req.params.id);
            res.status(200).json({
                 message: 'Official deleted successfully',
                 success:true,
                 data:response
            });
        } catch (error) {
            res.status(404).json({
                 error: error.message,
                 success:false
            });
        }
    }
}

module.exports = new OfficialController();
