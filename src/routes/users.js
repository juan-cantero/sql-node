const express = require('express');
const UserController = require('../controllers/UserController');
const AddressController = require('../controllers/AddressController');
const TechController = require('../controllers/TechControllers');
const ReportController = require('../controllers/ReportController');
const router = express.Router();

router.post('/', UserController.store);

router.get('/', UserController.list);

router.post('/:user_id/addresses',AddressController.store);

router.get('/:user_id/addresses', AddressController.findAllAddressesPerUser);

router.post('/:user_id/techs',TechController.store);

router.get('/:user_id/techs',TechController.listTechByUser);

router.delete('/:user_id/techs',TechController.deleteTechnology);

router.get('/report', ReportController.findUserWithFilters);

module.exports = router;