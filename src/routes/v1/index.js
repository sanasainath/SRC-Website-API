const express = require('express');
const router = express.Router();
const officialController = require('../../controllers/officials-details-controller');
const checkDuplicateEmail = require('../../middlewares/checkDuplicateEmail');

router.post('/officials',checkDuplicateEmail,officialController.createOfficial);
router.get('/officials', officialController.getAllOfficials);
router.get('/officials/:id', officialController.getOfficialById);
router.put('/officials/:id', officialController.updateOfficial);
router.delete('/officials/:id', officialController.deleteOfficial);

module.exports = router;
