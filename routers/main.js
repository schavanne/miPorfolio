var express = require('express');
var router = express.Router();

const {home} = require('../controllers/mainController')
const {about} = require('../controllers/mainController')

/* / */
router
    .get('/', home)
    .get('/about', about)

module.exports = router;