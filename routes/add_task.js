const express = require('express');

const router = express.Router();
const urlencodedParser = express.urlencoded({extended: false});

const addController = require('../controllers/add_controller');
router.post('/task', urlencodedParser,addController.addTasks);

module.exports = router;