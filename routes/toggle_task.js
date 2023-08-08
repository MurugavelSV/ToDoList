const express = require('express');
const router = express.Router();

const toggleController = require('../controllers/toggle_controller');

router.get('/task', toggleController.toggleTask);

module.exports = router;