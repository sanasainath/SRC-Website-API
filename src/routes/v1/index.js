const express = require('express');
const router = express.Router();
const {officialController,domainController,resourceController,projectController,contactForumController} = require('../../controllers/index.js');
const checkDuplicateEmail = require('../../middlewares/checkDuplicateEmail');
const { signup,login,verify,passwordResetLink,updatePassword} =require('../../controllers/user-controller.js');
const {UserService}=require('../../services/index.js');
const {validateUserAuth,validateisAdminId}=require('../../middlewares/auth-request-validators.js');
const { authenticate,authorizeAdmin } = require('../../middlewares/authorization.js');

const userService=new UserService();


//Domain Routes
router.post('/domain',  authenticate,authorizeAdmin,(req, res) => domainController.createDomain(req, res));
router.get('/domains', (req, res) => domainController.getAllDomains(req, res));
router.get('/domain/:id',(req, res) => domainController.getDomainById(req, res));
router.put('/domain/:id',  authenticate,authorizeAdmin,(req, res) => domainController.updateDomain(req, res));
router.delete('/domain/:id',  authenticate,authorizeAdmin,(req, res) => domainController.deleteDomain(req, res));


//User Routes:
router.post('/signup',signup);
router.post('/login',validateUserAuth,login);
router.get('/verify/:token',verify);
router.get('/forgot/password',passwordResetLink);
router.patch('/reset/password/:token',updatePassword);

//Officials Routes:
router.post('/officials',checkDuplicateEmail,officialController.createOfficial);
router.get('/officials', officialController.getAllOfficials);
router.get('/officials/:id', officialController.getOfficialById);
router.get('/official/:email', officialController.getOfficialByEmail);
router.put('/officials/:id', officialController.updateOfficial);
router.delete('/officials/:id', officialController.deleteOfficial);



// Rewsources Routes
router.post('/resource',  authenticate,authorizeAdmin,(req, res) => resourceController.createResource(req, res));
router.get('/resources',(req, res) => resourceController.getAllResources(req, res));
router.get('/resource/:id',(req, res) => resourceController.getResourceById(req, res));
router.get('/resources/:domainId',(req, res) => resourceController.getResourcesByDomain(req, res));
router.put('/resource/:id', authenticate,authorizeAdmin, (req, res) => resourceController.updateResource(req, res));
router.delete('/resource/:id',  authenticate,authorizeAdmin,(req, res) => resourceController.deleteResource(req, res));

//Project Routes
router.post('/project', authenticate,authorizeAdmin, projectController.createProject);
router.get('/projects', projectController.getAllProjects);
router.get('/project/:id', projectController.getProjectById);
router.put('/project/:id', authenticate,authorizeAdmin, projectController.updateProject);
router.delete('/project/:id',  authenticate,authorizeAdmin,projectController.deleteProject);
router.get('/project/:domainId', projectController.findProjectsByDomain);

//ContactForum Routes
router.post('/contact-forum', contactForumController.createContactForum);
router.get('/contact-forums', contactForumController.getAllContactForums);
router.get('/contact-forum/:id', contactForumController.getContactForumById);
router.put('/contact-forum/:id', contactForumController.updateContactForum);
router.delete('/contact-forum/:id', contactForumController.deleteContactForum);
router.get('/contact-forums/:domainId', contactForumController.getAllContactForumsByDomain);

module.exports = router;
