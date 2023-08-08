const express = require('express');

const router = express.Router();
const removeController = require('../controllers/remove_controller');

router.get('/task', removeController.remove);


module.exports = router;