const path = require('path');
const User = require('../models/Bookings');

const userController = require('../controllers/Bookings');

const express = require('express');
const router = express.Router();

router.post('/', userController.postBooking)

router.get('/', userController.getBooking)

router.get('/get-user',userController.getUsers);

router.post('/add-user',userController.postAddUser);

router.delete('/delete-user/:userId',userController.deleteUser);

module.exports = router;