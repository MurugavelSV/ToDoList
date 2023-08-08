const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);
router.use('/add' , require('./add_task'));
router.use('/delete', require('./remove_task.js'));

module.exports = router;