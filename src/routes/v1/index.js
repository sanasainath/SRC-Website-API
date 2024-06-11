const express = require('express');
const router = express.Router();
const officialController = require('../../controllers/officials-details-controller');
const checkDuplicateEmail = require('../../middlewares/checkDuplicateEmail');
const domainController= require('../../controllers/domain-controller.js');
const resourceController=require('../../controllers/resources-controller.js');
const { signup,login } =require('../../controllers/user-controller.js');



//Domain Routes
router.post('/domain', (req, res) => domainController.createDomain(req, res));
router.get('/domains', (req, res) => domainController.getAllDomains(req, res));
router.get('/domain/:id', (req, res) => domainController.getDomainById(req, res));
router.put('/domain/:id', (req, res) => domainController.updateDomain(req, res));
router.delete('/domain/:id', (req, res) => domainController.deleteDomain(req, res));


//User Routes:
router.post('/signup',signup);
router.post('/login',login);

//Officials Routes:
router.post('/officials',checkDuplicateEmail,officialController.createOfficial);
router.get('/officials', officialController.getAllOfficials);
router.get('/officials/:id', officialController.getOfficialById);
router.put('/officials/:id', officialController.updateOfficial);
router.delete('/officials/:id', officialController.deleteOfficial);



// Rewsources Routes
router.post('/resource', (req, res) => resourceController.createResource(req, res));

// Get all resources
router.get('/resources', (req, res) => resourceController.getAllResources(req, res));

// Get resource by ID
router.get('/resource/:id', (req, res) => resourceController.getResourceById(req, res));

// Get resources by domain ID
router.get('/resource/:domainId', (req, res) => resourceController.getResourcesByDomain(req, res));

// Update resource by ID
router.put('/resource/:id', (req, res) => resourceController.updateResource(req, res));

// Delete resource by ID
router.delete('/resource/:id', (req, res) => resourceController.deleteResource(req, res));



module.exports = router;
