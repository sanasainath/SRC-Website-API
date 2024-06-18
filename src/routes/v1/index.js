const express = require('express');
const router = express.Router();
const {officialController,domainController,resourceController,projectController,contactForumController} = require('../../controllers/index.js');
const checkDuplicateEmail = require('../../middlewares/checkDuplicateEmail');
const { signup,login,verify } =require('../../controllers/user-controller.js');
const {UserService}=require('../../services/index.js');

const userService=new UserService();


//Domain Routes
router.post('/domain', (req, res) => domainController.createDomain(req, res));
router.get('/domains', (req, res) => domainController.getAllDomains(req, res));
router.get('/domain/:id', (req, res) => domainController.getDomainById(req, res));
router.put('/domain/:id', (req, res) => domainController.updateDomain(req, res));
router.delete('/domain/:id', (req, res) => domainController.deleteDomain(req, res));


//User Routes:
router.post('/signup',signup);
router.post('/login',login);
router.get('/verify/:token',verify);

//Officials Routes:
router.post('/officials',checkDuplicateEmail,officialController.createOfficial);
router.get('/officials', officialController.getAllOfficials);
router.get('/officials/:id', officialController.getOfficialById);
router.put('/officials/:id', officialController.updateOfficial);
router.delete('/officials/:id', officialController.deleteOfficial);



// Rewsources Routes
router.post('/resource', (req, res) => resourceController.createResource(req, res));
router.get('/resources', (req, res) => resourceController.getAllResources(req, res));
router.get('/resource/:id', (req, res) => resourceController.getResourceById(req, res));
router.get('/resource/:domainId', (req, res) => resourceController.getResourcesByDomain(req, res));
router.put('/resource/:id', (req, res) => resourceController.updateResource(req, res));
router.delete('/resource/:id', (req, res) => resourceController.deleteResource(req, res));

//Project Routes
router.post('/project', projectController.createProject);
router.get('/projects', projectController.getAllProjects);
router.get('/project/:id', projectController.getProjectById);
router.put('/project/:id', projectController.updateProject);
router.delete('/project/:id', projectController.deleteProject);
router.get('/project/:domainId', projectController.findProjectsByDomain);

//ContactForum Routes
router.post('/contact-forum', contactForumController.createContactForum);
router.get('/contact-forums', contactForumController.getAllContactForums);
router.get('/contact-forum/:id', contactForumController.getContactForumById);
router.put('/contact-forum/:id', contactForumController.updateContactForum);
router.delete('/contact-forum/:id', contactForumController.deleteContactForum);
router.get('/contact-forums/:domainId', contactForumController.getAllContactForumsByDomain);

module.exports = router;
