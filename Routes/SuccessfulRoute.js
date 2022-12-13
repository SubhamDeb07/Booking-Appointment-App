const path = require('path');

const express = require('express');

const contactController = require('../controllers/Bookings')

const router = express.Router();

router.get('/success', contactController.getSuccess)
module.exports = router;
